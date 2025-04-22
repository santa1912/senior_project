<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Welcome to Senior Project</h1>
        <p class="text-xl text-gray-600 mb-8">A comprehensive platform for managing academic projects</p>
        <NuxtLink 
          to="/login" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// Redirect to dashboard if already logged in
const router = useRouter()
const auth = useState('auth', () => false)

onMounted(() => {
  if (auth.value) {
    router.push('/lecturer/dashboard')
  }
})
</script>
