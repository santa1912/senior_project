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
  return email.endsWith('@mfu.ac.th') || email.endsWith('@lamduan.mfu.ac.th')
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
  
  // Function to check if a route is accessible for a role
  const canAccessRoute = async (path: string): Promise<boolean> => {
    if (!user.value) return false

    // Get user's role
    const db = getFirestore()
    const userDoc = await getDoc(doc(db, 'users', user.value.email!))
    const role = userDoc.data()?.role as keyof typeof roleRoutes | undefined

    if (!role) return false

    // Public routes are always accessible
    if (path === '/' || path === '/unauthorized' || path.startsWith('/auth/')) {
      return true
    }

    // Check if path matches user's role
    return path.startsWith(roleRoutes[role].prefix)
  }

  onMounted(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      user.value = currentUser
      isLoading.value = false

      if (!currentUser) {
        router.push('/')
        return
      }

      const email = currentUser.email
      if (!email) {
        router.push('/')
        return
      }

      const currentPath = router.currentRoute.value.path
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
      
      if (!userData) {
        console.log('No user data found, creating initial user data')
        // Store initial user data with display name and photo
        const initialUserData: UserRoleData = {
          email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
          createdAt: new Date(),
          isActive: true // Set active by default for new users
        }
        await setDoc(doc(getFirestore(), 'users', email), initialUserData)
        
        console.log('Redirecting to role setup')
        router.push({ 
          path: '/auth/role-setup',
          query: { email: email }
        })
        return
      }

      // Check if current path is accessible
      const hasAccess = await canAccessRoute(currentPath)
      
      if (!hasAccess) {
        if (currentPath === '/' || currentPath.startsWith('/auth/')) {
          // Redirect to appropriate dashboard based on role
          const userRole = userData.role as AppUserRole
          const redirectPath = roleRoutes[userRole].default
          router.push(redirectPath)
        } else {
          // Redirect to unauthorized if trying to access forbidden route
          showAlert('error', 'Access Denied', 'You do not have permission to access this page')
          router.push('/unauthorized')
        }
      } else {
        // Store current path for future redirects
        localStorage.setItem('lastPath', currentPath)
      }
    })

    // Clean up subscription
    return () => unsubscribe()
  })

  const logout = async () => {
    const { showAlert } = useAlert()
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
    const { showAlert } = useAlert()
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      // Restrict to MFU domains
      provider.setCustomParameters({
        hd: 'mfu.ac.th' // This will show only @mfu.ac.th and @lamduan.mfu.ac.th emails
      })
      
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email
      if (!email) {
        showAlert('error', 'Sign In Failed', 'No email found in your Google account')
        return
      }

      if (!isMFUEmail(email)) {
        showAlert('error', 'Unauthorized', 'Only @mfu.ac.th and @lamduan.mfu.ac.th email addresses are allowed')
        await signOut(auth)
        return
      }

      // Check if user is deactivated
      const userData = await getUserData(email)
      if (userData?.isActive === false) {
        showAlert('error', 'Account Deactivated', 'Your account has been deactivated. Please contact the administrator.')
        await signOut(auth)
        return
      }

      console.log('Checking user data:', { email, userData })
      
      // If user doesn't have a role yet, show role selection dialog
      if (!userData) {
        console.log('No user data found, creating initial user data')
        // Store initial user data with display name and photo
        const initialUserData: UserRoleData = {
          email,
          displayName: user.value?.displayName,
          photoURL: user.value?.photoURL,
          createdAt: new Date(),
          isActive: true // Set active by default for new users
        }
        await setDoc(doc(getFirestore(), 'users', email), initialUserData)
        
        console.log('Redirecting to role setup')
        router.push({ 
          path: '/auth/role-setup',
          query: { email: email }
        })
        return
      }

      // Show welcome message and redirect to dashboard
      showAlert('success', 'Welcome Back!', `You are signed in as ${userData.role}`)
      
      // Small delay to ensure alert is shown
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const userRole = userData.role as AppUserRole
      const redirectPath = roleRoutes[userRole].default
      router.push(redirectPath)
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
