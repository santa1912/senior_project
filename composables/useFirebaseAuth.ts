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

// Define paths type based on roles
const REDIRECT_PATHS: Record<UserRole, string> = {
  admin: '/admin/profile',
  dean: '/dean/profile',
  lecturer: '/lecturer/profile'
}

// Verify role password
const verifyRolePassword = async (role: UserRole, password: string): Promise<boolean> => {
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

const getRedirectPath = (role: UserRole): string => {
  return REDIRECT_PATHS[role] || '/'
}

const user = ref<User | null>(null)
const isLoading = ref(true)

export function useFirebaseAuth() {
  const router = useRouter()
  const auth = getAuth()

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
      
      if (!userData) {
        console.log('No user data found, redirecting to role setup')
        router.push({ 
          path: '/auth/role-setup',
          query: { email: email }
        })
        return
      }

      // Only redirect if user is on home page or auth pages
      if (currentPath === '/' || currentPath.startsWith('/auth/')) {
        const redirectPath = userData.role === 'admin' ? '/admin/dashboard' : 
                            userData.role === 'dean' ? '/dean/dashboard' : '/lecturer/profile'
        router.push(redirectPath)
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

      const userData = await getUserData(email)
      console.log('Checking user data:', { email, userData })
      
      // If user doesn't have a role yet, show role selection dialog
      if (!userData) {
        console.log('No user data found, redirecting to role setup')
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
      
      const redirectPath = userData.role === 'admin' ? '/admin/dashboard' : 
                          userData.role === 'dean' ? '/dean/dashboard' : '/lecturer/profile'
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
