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
            <h1 class="text-xl font-bold mb-1">SoM.BI</h1>
            <div class="w-full h-0.5 bg-[#035e80] mb-1"></div>
            <p class="text-xs">School of Management</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-1">
          <li>
            <NuxtLink to="/dean/dean" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/dean/dean' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Dashboard
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dean/faculty" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/dean/faculty' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Faculty
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dean/reports" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/dean/reports' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reports
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dean/settings" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/dean/settings' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
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
          <p class="text-xs text-[#7fc6de]">Dean</p>
        </div>
        <button @click="logout" class="ml-auto text-blue-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </aside>

    <!-- Mobile Menu -->
    <div class="md:hidden">
      <!-- Mobile menu implementation here -->
    </div>

    <!-- Main Content -->
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

const { user, logout } = useFirebaseAuth()
</script>
