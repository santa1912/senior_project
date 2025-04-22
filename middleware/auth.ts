import { defineNuxtRouteMiddleware, useRouter } from '#app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'

const DEAN_EMAILS = [
  '6531503172@lamduan.mfu.ac.th',
  '6531503174@lamduan.mfu.ac.th',
  '6531503176@lamduan.mfu.ac.th'
]
const LECTURER_EMAILS = [
  'phyominthein.leo@gmail.com',
  'phyominthein.icloud@gmail.com'
]

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = getAuth()
  
  // Wait for Firebase to initialize and get auth state
  const user = await new Promise<User | null>((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })

  if (!user) {
    return navigateTo('/')
  }

  const email = user.email
  if (to.path.startsWith('/dean/') && (!email || !DEAN_EMAILS.includes(email))) {
    return navigateTo('/')
  }
  if (to.path.startsWith('/lecturer/') && (!email || !LECTURER_EMAILS.includes(email))) {
    return navigateTo('/')
  }
})
