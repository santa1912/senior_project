<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <!-- Manual login (admin / dean) -->
      <form @submit.prevent="manualLogin">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full mb-4 p-2 border rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login with Email
        </button>
      </form>

      <div class="my-4 text-center text-gray-500">หรือ</div>

      <!-- Google Sign-In (Firebase for lecturer) -->
      <button
        @click="googleLogin"
        class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Login with Google
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useState } from '#app'

const router = useRouter()
const { $auth } = useNuxtApp()

interface AppUser {
  name: string
  email: string
  role: 'admin' | 'dean' | 'lecturer'
}

const user = useState<AppUser | null>('user', () => null)

const email = ref('')
const password = ref('')
const loading = ref(false)

// 🔐 Login ด้วย Firebase Auth (email/password)
const manualLogin = async () => {
  loading.value = true
  try {
    const result = await signInWithEmailAndPassword($auth, email.value, password.value)
    const firebaseUser = result.user

    // กำหนด role จาก email
    let role: 'admin' | 'dean' | 'lecturer' = 'lecturer'
    if (firebaseUser.email === 'admin@mfu.ac.th') role = 'admin'
    else if (firebaseUser.email === 'dean@mfu.ac.th') role = 'dean'

    user.value = {
      name: firebaseUser.displayName || firebaseUser.email || 'User',
      email: firebaseUser.email || '',
      role
    }

    localStorage.setItem('user', JSON.stringify(user.value))

    if (role === 'admin') {
      await router.push('/admin/dashboard')
    } else if (role === 'dean') {
      await router.push('/dean/dashboard')
    } else {
      await router.push('/lecturer/dashboard')
    }

  } catch (err) {
    console.error(err)
    alert('Login failed. Please check your credentials.')
  } finally {
    loading.value = false
  }
}

// 🔑 Login ด้วย Google
const googleLogin = async () => {
  loading.value = true
  const provider = new GoogleAuthProvider()
  
  try {
    const result = await signInWithPopup($auth, provider)
    const userData = result.user

    let role: 'admin' | 'dean' | 'lecturer' = 'lecturer'
    if (userData.email === 'admin@mfu.ac.th') role = 'admin'
    else if (userData.email === 'dean@mfu.ac.th') role = 'dean'

    user.value = {
      name: userData.displayName || userData.email || 'User',
      email: userData.email || '',
      role
    }

    localStorage.setItem('user', JSON.stringify(user.value))

    if (role === 'admin') {
      await router.push('/admin/dashboard')
    } else if (role === 'dean') {
      await router.push('/dean/dashboard')
    } else {
      await router.push('/lecturer/dashboard')
    }

  } catch (err) {
    console.error('Google login error:', err)
    alert('Google login failed')
  } finally {
    loading.value = false
  }
}

// 🔄 ติดตามสถานะผู้ใช้
onMounted(() => {
  onAuthStateChanged($auth, async (firebaseUser) => {
    if (firebaseUser) {
      const tokenResult = await firebaseUser.getIdTokenResult()
      const role = ((): 'admin' | 'dean' | 'lecturer' => {
        const r = tokenResult.claims.role
        if (r === 'admin' || r === 'dean' || r === 'lecturer') return r
        return 'lecturer'
      })()

      user.value = {
        name: firebaseUser.displayName || firebaseUser.email || 'User',
        email: firebaseUser.email || '',
        role
      }

      localStorage.setItem('user', JSON.stringify(user.value))

      if (role === 'admin' && router.currentRoute.value.path !== '/admin/dashboard') {
  await router.push('/admin')
} else if (role === 'dean' && router.currentRoute.value.path !== '/dean/dashboard') {
  await router.push('/dean/dashboard')
} else if (role === 'lecturer' && router.currentRoute.value.path !== '/lecturer/dashboard') {
  await router.push('/lecturer/dashboard')
}

    } else {
      user.value = null
      localStorage.removeItem('user')
    }
  })
})
</script>