import { signInWithEmailAndPassword, signOut, onAuthStateChanged, type User } from 'firebase/auth'

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp()
  const user = useState<User | null>('firebase_user', () => null)
  const loading = ref(true)
  const error = ref('')

  onMounted(() => {
    // Set up authentication state observer
    onAuthStateChanged($auth, (newUser) => {
      user.value = newUser
      loading.value = false
    })
  })

  const login = async (email: string, password: string) => {
    try {
      error.value = ''
      loading.value = true
      await signInWithEmailAndPassword($auth, email, password)
      return true
    } catch (e: any) {
      error.value = e.message
      return false
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      error.value = ''
      loading.value = true
      await signOut($auth)
      return true
    } catch (e: any) {
      error.value = e.message
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    error,
    login,
    logout
  }
}
