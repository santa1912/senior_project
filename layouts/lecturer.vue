<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-br from-[#046e93] via-[#035e80] to-[#1b3455] text-white flex-col sticky top-0 h-screen hidden md:flex">
      <!-- Logo Section -->
      <div class="px-8 py-6 border-b border-[#035e80]">
        <div class="flex items-center justify-center">
          <mfulogo/>
          <div class="w-0.5 h-10 bg-[#035e80] mx-3"></div>
          <div>
            <h2 class="text-xl font-bold text-white mb-1">SoM.BI</h2>
            <div class="w-full h-0.5 bg-[#035e80] mb-1"></div>
            <p class="text-xs text-white">School of Management</p>
          </div>
        </div>
      </div>
      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-1">
          <li>
            <NuxtLink to="/lecturer/lecturer" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/lecturer/lecturer' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lecturer/kpi-overview" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/lecturer/kpi-overview' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              KPI
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lecturer/budget" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/lecturer/budget' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Budget
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- User Profile at Bottom -->
      <div class="p-4 border-t border-[#035e80] flex items-center">
        <div class="w-10 h-10 rounded-full bg-white overflow-hidden mr-3">
          <img :src="user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.displayName || 'User')" :alt="user?.displayName || 'User'" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="text-sm font-medium">{{ user?.displayName || 'User' }}</p>
          <p class="text-xs text-[#7fc6de]">Lecturer</p>
        </div>
        <button @click="logout" class="ml-auto text-blue-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </aside>

    <!-- Mobile Sidebar -->
    <aside class="fixed inset-y-0 left-0 bg-gradient-to-br from-[#046e93] via-[#035e80] to-[#1b3455] shadow-xl w-64 z-40 flex flex-col md:hidden" v-if="showSidebar">
      <!-- Mobile Logo Section -->
      <div class="px-8 py-6 border-b border-[#035e80] flex justify-between items-center">
        <div class="flex items-center">
          <mfulogo/>
          <div class="w-0.5 h-10 bg-[#035e80] mx-3"></div>
          <div>
            <h2 class="text-xl font-bold text-white mb-1">SoM.BI</h2>
            <div class="w-full h-0.5 bg-[#035e80] mb-1"></div>
            <p class="text-xs text-white">School of Management</p>
          </div>
        </div>
        <button @click="showSidebar = false" class="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-1">
          <li>
            <NuxtLink to="/lecturer/lecturer" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/lecturer/lecturer' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lecturer/kpi-overview" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/lecturer/kpi-overview' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              KPI
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-50">
      <!-- Mobile menu button -->
      <div class="md:hidden p-4">
        <button @click="showSidebar = true" class="text-blue-700 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <!-- Page Content -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

const showSidebar = ref(false)
const { user, logout } = useFirebaseAuth()
</script>
