import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type User, GoogleAuthProvider, signInWithPopup, type AuthError } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc, collection } from 'firebase/firestore'
import { useRouter } from 'vue-router'
import { useAlert } from './useAlert'
import type { UserRole, RolePasswordStore, UserRoleData } from '~/types/auth'

// Define user roles
const ROLES: UserRole[] = ['admin', 'dean', 'lecturer']

// Check if email is from MFU
const isMFUEmail = (email: string): boolean => {
  const mfuDomains = ['@mfu.ac.th', '@lamduan.mfu.ac.th']
  return mfuDomains.some(domain => email.toLowerCase().endsWith(domain))
}

// Define role-based route configuration
export const roleRoutes = {
  admin: {
    prefix: '/admin',
    default: '/admin/dashboard'
  },
  dean: {
    prefix: '/dean',
    default: '/dean/dashboard'
  },
  lecturer: {
    prefix: '/lecturer',
    default: '/lecturer/dashboard'
  }
} as const

type AppUserRole = keyof typeof roleRoutes

// Helper to get default path for a role
export const getDefaultPath = (role: AppUserRole): string => {
  return roleRoutes[role].default
}

// Verify role password
const verifyRolePassword = async (role: AppUserRole, password: string): Promise<boolean> => {
  const db = getFirestore()
  const rolePasswordsDoc = await getDoc(doc(db, 'rolePasswords', 'passwords'))
  const rolePasswords = rolePasswordsDoc.data() as RolePasswordStore | undefined
  
  return rolePasswords?.[role] === password
}

// Get user data from Firestore
const getUserData = async (email: string): Promise<UserRoleData | null> => {
  const db = getFirestore()
  const userDoc = await getDoc(doc(db, 'users', email))
  const userData = userDoc.data() as UserRoleData | undefined
  console.log('User data from Firestore:', userData)
  return userData || null
}

const user = ref<User | null>(null)
const isLoading = ref(true)

export function useFirebaseAuth() {
  const router = useRouter()
  const auth = getAuth()
  const { showAlert } = useAlert()
  const user = useState<User | null>('user', () => null)
  const isLoading = useState<boolean>('isLoading', () => true)

  // Helper function to handle user authentication state
  const handleUserAuthState = async (currentUser: User | null, showWelcome = false) => {
    if (!currentUser) {
      router.push('/')
      return
    }

    const email = currentUser.email
    if (!email) {
      router.push('/')
      return
    }

    const userData = await getUserData(email)
    console.log('Checking user data:', { email, userData })

    // Check if user is deactivated
    if (userData?.isActive === false) {
      console.log('User is deactivated:', email)
      showAlert('error', 'Account Deactivated', 'Your account has been deactivated. Please contact the administrator.')
      await signOut(auth)
      router.push('/')
      return
    }

    // If no user data, redirect to role setup
    if (!userData) {
      console.log('No user data found, redirecting to role setup')
      const currentPath = router.currentRoute.value.path
      if (!currentPath.startsWith('/auth/role-setup')) {
        router.push({ 
          path: '/auth/role-setup',
          query: { email }
        })
      }
      return
    }

    // Show welcome message if requested
    if (showWelcome) {
      showAlert('success', 'Welcome Back!', `You are signed in as ${userData.role}`)
      await new Promise(resolve => setTimeout(resolve, 500))
    }

    // Handle routing based on role
    if (userData.role) {
      const currentPath = router.currentRoute.value.path
      const userRole = userData.role as AppUserRole

      // Always redirect from index page to dashboard
      if (currentPath === '/') {
        const redirectPath = roleRoutes[userRole].default
        router.push(redirectPath)
        return
      }

      // Check if current path is accessible
      const hasAccess = await canAccessRoute(currentPath)
      if (!hasAccess) {
        if (currentPath.startsWith('/auth/')) {
          router.push(roleRoutes[userRole].default)
        } else {
          showAlert('error', 'Access Denied', 'You do not have permission to access this page')
          router.push('/unauthorized')
        }
      } else {
        localStorage.setItem('lastPath', currentPath)
      }
    }
  }

  // Function to check if a route is accessible for a role
  const canAccessRoute = async (path: string): Promise<boolean> => {
    if (!user.value?.email) return false

    const userData = await getUserData(user.value.email)
    const role = userData?.role as keyof typeof roleRoutes | undefined

    if (!role) return false

    return path === '/' || 
           path === '/unauthorized' || 
           path.startsWith('/auth/') || 
           path.startsWith(roleRoutes[role].prefix)
  }

  onMounted(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      user.value = currentUser
      isLoading.value = false
      await handleUserAuthState(currentUser)
    })

    return () => unsubscribe()
  })

  const logout = async () => {
    try {
      await signOut(auth)
      showAlert('info', 'Goodbye!', 'You have been successfully signed out')
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
      showAlert('error', 'Error', 'Failed to sign out. Please try again.')
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      
      // Enforce MFU domain
      provider.setCustomParameters({
        hd: 'mfu.ac.th',
        prompt: 'select_account'
      })
      
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email?.toLowerCase()
      
      if (!email) {
        showAlert('error', 'Sign In Failed', 'No email found in your Google account')
        await signOut(auth)
        return
      }

      if (!isMFUEmail(email)) {
        showAlert('error', 'Unauthorized', 'Please sign in with your MFU email address (@mfu.ac.th or @lamduan.mfu.ac.th)')
        await signOut(auth)
        return
      }

      await handleUserAuthState(result.user, true)
    } catch (error) {
      const authError = error as AuthError
      let errorMessage = 'An error occurred during sign in'
      
      switch (authError.code) {
        case 'auth/popup-closed-by-user':
          errorMessage = 'Sign in was cancelled'
          break
        case 'auth/popup-blocked':
          errorMessage = 'Sign in popup was blocked. Please allow popups for this site'
          break
        case 'auth/cancelled-popup-request':
          errorMessage = 'Another sign in attempt is in progress'
          break
        case 'auth/network-request-failed':
          errorMessage = 'Network error. Please check your internet connection'
          break
      }
      
      showAlert('error', 'Sign In Failed', errorMessage)
      console.error('Sign in error:', authError)
    }
  }

  return {
    user,
    isLoading,
    logout,
    signInWithGoogle
  }
}
