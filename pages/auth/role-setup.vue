<!-- role-setup.vue -->
<template>
  <div class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
    <!-- Background pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-70"></div>
    <div class="relative py-3 sm:max-w-xl sm:mx-auto z-10">
      <!-- MFU Logo and Title -->
      <div class="text-center mb-8">
        <MFULogo class="w-24 h-24 mx-auto mb-4 text-[#003D7C]" />
        <h1 class="text-[#003D7C] text-2xl font-semibold">Mae Fah Luang University</h1>
        <p class="text-gray-600 mt-2">School of Management</p>
      </div>

      <!-- Main Card -->
      <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow-2xl rounded-2xl sm:p-10">
        <div class="max-w-md mx-auto">
          <!-- Card Header -->
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-gray-800">Role Setup</h2>
            <p class="text-gray-600 mt-2">
              Welcome! Please select your role and verify your credentials to continue.
            </p>
          </div>

          <div class="space-y-6">

              <!-- Role Selection -->
              <div class="mb-8">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Select Your Role
                </label>
                <div class="relative">
                  <select
                    v-model="selectedRole"
                    class="appearance-none block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                  >
                    <option value="" disabled>Choose your role</option>
                    <option v-for="role in roles" :key="role" :value="role" class="py-2">
                      {{ role.charAt(0).toUpperCase() + role.slice(1) }}
                    </option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Password Input -->
              <div class="mb-8">
                <label class="block text-sm font-semibold text-gray-700 mb-2">
                  Role Password
                </label>
                <div class="relative">
                  <input
                    type="password"
                    v-model="password"
                    class="block w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                    placeholder="Enter the password for your role"
                  />
                  <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Error Message -->
              <div v-if="error" class="mb-6">
                <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <div class="ml-3">
                      <p class="text-sm text-red-700">{{ error }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="pt-4 space-y-4">
                <button
                  @click="verifyAndSetupRole"
                  class="w-full bg-[#003D7C] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#002d5c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  :disabled="!selectedRole || !password || loading"
                >
                  <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ loading ? 'Setting up...' : 'Verify & Setup Role' }}
                </button>
                <button
                  @click="cancelSetup"
                  class="w-full px-6 py-3 rounded-lg font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out flex items-center justify-center"
                  :disabled="loading"
                >
                  Cancel
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth'
import type { UserRole } from '~/types/auth'
import { useAlert } from '~/composables/useAlert'
import { roleRoutes } from '~/composables/useFirebaseAuth'
import MFULogo from '~/components/mfulogo.vue'

const route = useRoute()
const router = useRouter()
const { showAlert } = useAlert()
const auth = getAuth()

// Route guard setup
onMounted(async () => {
  const currentUser = auth.currentUser
  
  // If not logged in, redirect to home
  if (!currentUser) {
    showAlert('error', 'Unauthorized', 'Please sign in first')
    router.push('/')
    return
  }

  // If no email in query params, redirect to home
  if (!route.query.email) {
    showAlert('error', 'Invalid Access', 'Missing email parameter')
    router.push('/')
    return
  }

  // If query email doesn't match current user's email, redirect to home
  if (route.query.email !== currentUser.email) {
    showAlert('error', 'Unauthorized', 'Email mismatch')
    router.push('/')
    return
  }

  // Check if user already has a role
  const db = getFirestore()
  const userDoc = await getDoc(doc(db, 'users', currentUser.email))
  const userData = userDoc.data()

  if (userData?.role) {
    showAlert('info', 'Role Already Set', 'You already have a role assigned')
    router.push(`/${userData.role}/dashboard`)
    return
  }
})

const email = route.query.email as string
const roles = ['admin', 'dean', 'lecturer'] as const
const selectedRole = ref<UserRole>()
const password = ref('')
const error = ref('')
const loading = ref(false)

const cancelSetup = async () => {
  const { showAlert } = useAlert()
  try {
    const auth = getAuth()
    await signOut(auth)
    showAlert('info', 'Setup Cancelled', 'You have been signed out')
    router.push('/')
  } catch (error) {
    console.error('Error during sign out:', error)
    showAlert('error', 'Error', 'Failed to sign out')
  }
}

const verifyAndSetupRole = async () => {
  if (!selectedRole.value || !password.value) return
  
  loading.value = true
  error.value = ''
  
  try {
    const db = getFirestore()
    
    // Check if role password exists
    const rolePasswordsDoc = await getDoc(doc(db, 'rolePasswords', 'passwords'))
    const rolePasswords = rolePasswordsDoc.data()
    console.log('Existing role passwords:', rolePasswords)
    
    if (!rolePasswords || !rolePasswords[selectedRole.value]) {
      console.log('First time setup for role:', selectedRole.value)
      // First time setup for this role
      const updatedPasswords = {
        ...rolePasswords,
        [selectedRole.value]: password.value
      }
      console.log('Setting up new role password:', updatedPasswords)
      await setDoc(doc(db, 'rolePasswords', 'passwords'), updatedPasswords)
      
      // Create user document
      const userData = {
        email,
        role: selectedRole.value,
        createdAt: new Date(),
        verified: true
      }
      console.log('Creating new verified user:', userData)
      await setDoc(doc(db, 'users', email), userData)
      
      showAlert('success', 'Success', 'Role setup completed successfully')
      router.push(roleRoutes[selectedRole.value].default)
    } else {
      // Verify existing role password
      if (rolePasswords[selectedRole.value] === password.value) {
        // Create user document
        const userData = {
          email,
          role: selectedRole.value,
          createdAt: new Date(),
          verified: true as const // Explicitly type as true
        }
        console.log('Creating verified user with existing role:', userData)
        await setDoc(doc(db, 'users', email), userData)
        showAlert('success', 'Success', 'Role setup completed successfully')
        router.push(roleRoutes[selectedRole.value].default)
      } else {
        error.value = 'Invalid role password'
      }
    }
  } catch (err) {
    console.error('Role setup error:', err)
    error.value = 'An error occurred during role setup'
  } finally {
    loading.value = false
  }
}
</script>
