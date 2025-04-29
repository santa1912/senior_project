<template>
 <div class="min-h-screen flex">
    <!-- Desktop Sidebar -->
    <aside class="w-64 bg-gradient-to-b from-[#18345c] via-[#17688f] to-[#137b97] text-white flex-col sticky top-0 h-screen hidden md:flex">
      <!-- Logo Section -->
      <div class="px-8 py-6">
        <div class="flex items-center justify-center">
          <mfulogo/>
          <div class="w-0.5 h-10 bg-[#FFFFFF] mx-3"></div>
          <div>
            <h2 class="text-xl font-bold text-white mb-1">SoM.BI</h2>
            <div class="w-full h-0.5 bg-[#FFFFFF] mb-1"></div>
            <p class="text-xs text-white">School of Management</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-4 overflow-y-auto">
        <div class="mb-4 px-2">
          <p class="text-[11px] font-medium text-[#7fc6de]/70 uppercase tracking-wider">Dean Portal</p>
        </div>
        <ul class="space-y-0.5">
          <li>
            <NuxtLink to="/dean/dashboard" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" :class="{ 'bg-[#035475]': $route.path === '/dean/dashboard' }">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
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
          <img 
            :src="user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData?.displayName || 'User')}`" 
            :alt="userData?.displayName || 'User'" 
            class="w-full h-full object-cover" 
          />
        </div>
        <div>
          <p class="text-sm font-medium text-white">{{ userData?.displayName || 'User' }}</p>
          <p class="text-xs text-[#7fc6de]/80">Dean</p>
        </div>
        <button 
          @click="logout" 
          class="ml-auto text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          aria-label="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </aside>

    <!-- Mobile Sidebar Overlay -->
    <div 
      v-if="showSidebar" 
      class="fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden z-40"
      @click="showSidebar = false"
      aria-hidden="true"
    ></div>

    <!-- Mobile Sidebar -->
    <aside 
      class="fixed inset-y-0 left-0 bg-gradient-to-b from-[#18345c] via-[#17688f] to-[#1597bb] shadow-2xl w-[280px] z-50 flex flex-col md:hidden transform transition-transform duration-300 ease-in-out"
      :class="showSidebar ? 'translate-x-0' : '-translate-x-full'"
      aria-label="Mobile sidebar"
    >
      <!-- Mobile Sidebar Header -->
      <div class="sticky top-0 z-20 flex flex-col bg-[#18466d] shadow-lg">
        <!-- Top Bar -->
        <div class="flex items-center justify-between px-4 py-2">
          <h2 class="text-lg font-semibold text-white">Menu</h2>
          <button 
            @click="showSidebar = false"
            class="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Logo Section -->
        <div class="px-4 py-3 border-t border-white/10">
          <div class="flex items-center space-x-3">
            <div class="flex items-center">
              <mfulogo class="w-8 h-8"/>
              <div class="w-0.5 h-8 bg-[#FFFFFF]/50 mx-3"></div>
              <div>
                <h2 class="text-lg font-bold text-white mb-1">SoM.BI</h2>
                <div class="w-full h-0.5 bg-[#FFFFFF]/50 mb-1"></div>
                <p class="text-xs text-white/90">School of Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-1">
          <li>
            <NuxtLink 
              to="/dean/dashboard" 
              @click="showSidebar = false"
              class="flex items-center px-3 py-2.5 text-white/90 hover:text-white hover:bg-[#035e80]/50 rounded-lg transition-all duration-200" 
              :class="{ 'bg-[#035475]/60 text-white shadow-sm': $route.path === '/dean/dashboard' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/dean/faculty" 
              @click="showSidebar = false"
              class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" 
              :class="{ 'bg-[#035475]': $route.path === '/dean/faculty' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Faculty
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/dean/reports" 
              @click="showSidebar = false"
              class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" 
              :class="{ 'bg-[#035475]': $route.path === '/dean/reports' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Reports
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/dean/settings" 
              @click="showSidebar = false"
              class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors" 
              :class="{ 'bg-[#035475]': $route.path === '/dean/settings' }"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile User Profile at Bottom -->
      <div class="sticky bottom-0 bg-[#18345c]/90 backdrop-blur-sm border-t border-[#035e80]/30 pt-3 pb-4 px-4">
        <div class="flex items-center p-2 rounded-xl bg-white/5">
          <div class="w-10 h-10 rounded-full ring-2 ring-white/10 overflow-hidden mr-3 shadow-lg">
            <img 
              :src="user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData?.displayName || 'User')}`" 
              :alt="userData?.displayName || 'User'" 
              class="w-full h-full object-cover" 
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-white truncate">{{ userData?.displayName || 'User' }}</p>
            <p class="text-xs text-[#7fc6de]/80">Dean</p>
          </div>
          <button 
            @click="logout" 
            class="ml-2 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors" 
            aria-label="Logout"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 bg-gray-50">
      <!-- Mobile Header -->
      <div class="md:hidden sticky top-0 z-50 bg-white p-4 shadow-sm">
        <button @click="showSidebar = !showSidebar" class="text-blue-700 focus:outline-none" aria-label="Toggle sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useFirebaseAuth } from '~/composables/useFirebaseAuth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import mfulogo from '@/components/mfulogo.vue'

const { user, logout } = useFirebaseAuth()
const showSidebar = ref(false)
const userData = ref<any>(null)

async function fetchUserData() {
  if (user.value?.email) {
    const userDoc = await getDoc(doc(getFirestore(), 'users', user.value.email))
    if (userDoc.exists()) {
      userData.value = userDoc.data()
    }
  }
}

onMounted(fetchUserData)

// Watch for changes in user authentication
watch(() => user.value?.email, fetchUserData)
</script>
