import { ref, onMounted } from 'vue'
import { getAuth, onAuthStateChanged, signOut, type User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

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
      const isDean = ['6531503172@lamduan.mfu.ac.th', '6531503174@lamduan.mfu.ac.th', '6531503176@lamduan.mfu.ac.th'].includes(email)
      const isLecturer = ['phyominthein.leo@gmail.com', 'phyominthein.icloud@gmail.com'].includes(email)

      if (currentPath.startsWith('/dean/') && !isDean) {
        router.push('/')
      } else if (currentPath.startsWith('/lecturer/') && !isLecturer) {
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

      const isDean = ['6531503172@lamduan.mfu.ac.th', '6531503174@lamduan.mfu.ac.th', '6531503176@lamduan.mfu.ac.th'].includes(email)
      const isLecturer = ['phyominthein.leo@gmail.com', 'phyominthein.icloud@gmail.com'].includes(email)

      if (isDean) {
        router.push('/dean/dean')
      } else if (isLecturer) {
        router.push('/lecturer/lecturer')
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
