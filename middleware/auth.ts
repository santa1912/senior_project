import { defineNuxtRouteMiddleware, useRouter } from '#app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const DEAN_EMAIL = '6531503172@lamduan.mfu.ac.th'
const LECTURER_EMAIL = 'phyominthein.leo@gmail.com'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth()
  const user = auth.currentUser
  // Wait for auth state if not loaded
  if (!user) {
    return navigateTo('/')
  }
  const email = user.email
  if (to.path.startsWith('/dean/') && email !== DEAN_EMAIL) {
    return navigateTo('/')
  }
  if (to.path.startsWith('/lecturer/') && email !== LECTURER_EMAIL) {
    return navigateTo('/')
  }
})
