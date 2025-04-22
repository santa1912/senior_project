import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const DEAN_EMAILS = [
  '6531503172@lamduan.mfu.ac.th',
  '6531503174@lamduan.mfu.ac.th',
  '6531503176@lamduan.mfu.ac.th'
]
const LECTURER_EMAILS = [
  'phyominthein.leo@gmail.com',
  'phyominthein.icloud@gmail.com'
]

export function useAuth() {
  const auth = getAuth()
  const router = useRouter()

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    try {
      const result = await signInWithPopup(auth, provider)
      const email = result.user.email
      if (email && DEAN_EMAILS.includes(email)) {
        router.push('/dean/dean')
      } else if (email && LECTURER_EMAILS.includes(email)) {
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
