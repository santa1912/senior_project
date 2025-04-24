import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type User, GoogleAuthProvider, signInWithPopup, type AuthError } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useAlert } from './useAlert'

// Define user roles type
type UserRole = 'dean' | 'lecturer'

// Define authorized users with proper typing
const AUTHORIZED_USERS = {
  dean: ['6531503172@lamduan.mfu.ac.th', '6531503174@lamduan.mfu.ac.th', '6531503176@lamduan.mfu.ac.th', '6531503137@lamduan.mfu.ac.th'],
  lecturer: ['phyominthein.leo@gmail.com', 'phyominthein.icloud@gmail.com', 'chitminthu.mdy2000@gmail.com']
} as const

// Define paths type based on roles
const REDIRECT_PATHS: Record<UserRole, string> = {
  dean: '/dean/dean',
  lecturer: '/lecturer/profile'
}

// User role check functions
const checkUserRole = (email: string): UserRole | null => {
  // Type assertion to handle the const assertion of AUTHORIZED_USERS
  const deanEmails = AUTHORIZED_USERS.dean as readonly string[]
  const lecturerEmails = AUTHORIZED_USERS.lecturer as readonly string[]

  if (deanEmails.includes(email)) return 'dean'
  if (lecturerEmails.includes(email)) return 'lecturer'
  return null
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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

      // Check user role and redirect if needed
      const currentPath = router.currentRoute.value.path
      const userRole = checkUserRole(email)

      if (currentPath.startsWith('/dean/') && userRole !== 'dean') {
        router.push('/')
      } else if (currentPath.startsWith('/lecturer/') && userRole !== 'lecturer') {
        router.push('/')
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
      
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email
      if (!email) {
        showAlert('error', 'Sign In Failed', 'No email found in your Google account')
        return
      }

      const userRole = checkUserRole(email)
      if (userRole) {
        router.push(getRedirectPath(userRole))
      } else {
        showAlert('error', 'Unauthorized', 'Your email is not authorized to access this website')
        await signOut(auth)
      }
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
