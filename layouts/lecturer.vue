<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-indigo-700">
      <div class="flex items-center justify-center h-16 bg-indigo-800">
        <h2 class="text-xl font-bold text-white">Senior Project</h2>
      </div>
      <nav class="mt-5">
        <NuxtLink
          to="/lecturer/dashboard"
          class="flex items-center px-6 py-3 text-gray-100 hover:bg-indigo-600"
        >
          <span class="mx-3">Dashboard</span>
        </NuxtLink>
        <NuxtLink
          to="/lecturer/projects"
          class="flex items-center px-6 py-3 text-gray-100 hover:bg-indigo-600"
        >
          <span class="mx-3">Projects</span>
        </NuxtLink>
        <NuxtLink
          to="/lecturer/students"
          class="flex items-center px-6 py-3 text-gray-100 hover:bg-indigo-600"
        >
          <span class="mx-3">Students</span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="pl-64">
      <!-- Top Navigation -->
      <div class="bg-white shadow">
        <div class="flex justify-between items-center px-8 py-4">
          <h1 class="text-2xl font-semibold text-gray-900">Lecturer Dashboard</h1>
          <button
            @click="logout"
            class="px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Logout
          </button>
        </div>
      </div>

      <!-- Page Content -->
      <main class="p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const { logout: firebaseLogout } = useFirebaseAuth()

const logout = async () => {
  const success = await firebaseLogout()
  if (success) {
    router.push('/login')
  }
}
</script>
