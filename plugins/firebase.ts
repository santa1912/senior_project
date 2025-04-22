import { initializeApp } from 'firebase/app'
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged, type User } from 'firebase/auth'
import { ref } from 'vue'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = {
    // Replace with your Firebase config
    apiKey: "AIzaSyAm7B_bdMezQ-rqFjScE593hGGCVBa7VZ0",
    authDomain: "curriculum-statistics.firebaseapp.com",
    projectId: "curriculum-statistics",
    storageBucket: "curriculum-statistics.appspot.com",
    messagingSenderId: "51782680110",
    appId: "1:51782680110:web:6bc2a46eb9f791892a29bf"
  }

  const app = initializeApp(config)
  const auth = getAuth(app)

  // Enable auth persistence
  await setPersistence(auth, browserLocalPersistence)

  // Create a reactive user state
  const user = ref<User | null>(null)

  // Set up auth state listener
  onAuthStateChanged(auth, (newUser) => {
    user.value = newUser
    console.log('Auth state changed in plugin:', newUser?.email)
  })

  return {
    provide: {
      auth,
      user: user.value
    }
  }
})
