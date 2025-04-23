import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

// Define user roles type
type UserRole = 'dean' | 'lecturer'

// Define authorized users with proper typing
const AUTHORIZED_USERS = {
  dean: ['6531503172@lamduan.mfu.ac.th', '6531503174@lamduan.mfu.ac.th', '6531503176@lamduan.mfu.ac.th'],
  lecturer: ['phyominthein.leo@gmail.com', 'phyominthein.icloud@gmail.com']
} as const

// Define paths type based on roles
const REDIRECT_PATHS: Record<UserRole, string> = {
  dean: '/dean/dean',
  lecturer: '/lecturer/lecturer'
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
    try {
      await signOut(auth)
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email
      if (!email) {
        alert('No email found')
        return
      }

      const userRole = checkUserRole(email)
      if (userRole) {
        router.push(getRedirectPath(userRole))
      } else {
        alert('Unauthorized email')
        await signOut(auth)
      }
    } catch (error) {
      console.error('Sign in error:', error)
      alert('Sign in failed')
    }
  }

  return {
    user,
    isLoading,
    logout,
    signInWithGoogle
  }
}
