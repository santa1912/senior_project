import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const DEAN_EMAIL = '6531503172@lamduan.mfu.ac.th'
const LECTURER_EMAIL = 'phyominthein.leo@gmail.com'

export function useAuth() {
  const auth = getAuth()
  const router = useRouter()

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email
      if (email === DEAN_EMAIL) {
        router.push('/dean/dean')
      } else if (email === LECTURER_EMAIL) {
        router.push('/lecturer/lecturer')
      } else {
        alert('Unauthorized email')
        await signOut(auth)
      }
    } catch (e) {
      alert('Sign in failed')
    }
  }

  const logout = async () => {
    await signOut(auth)
    router.push('/')
  }

  return { signInWithGoogle, logout }
}
