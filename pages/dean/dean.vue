<template>
  <div class="min-h-screen flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-br from-[#046e93] via-[#035e80] to-[#1b3455] text-white flex-col sticky top-0 h-screen hidden md:flex">
      <!-- Logo Section -->
      <div class="p-6 border-b border-[#035e80]">
        <div class="flex items-center">
          <div class="mr-3">
            <img src="/mfu-logo.png" alt="MFU Logo" class="h-10 w-10" />
          </div>
          <div>
            <h1 class="text-xl font-bold">SoM.BI</h1>
            <p class="text-xs">School of Management</p>
          </div>
        </div>
      </div>
      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-1">
          <li>
            <NuxtLink to="/dean/dean" class="flex items-center px-4 py-3 text-white bg-[#035e80] rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/dean/kpi-overview" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              KPI
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors">
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
          <p class="text-xs text-[#7fc6de]">Dean</p>
        </div>
        <button @click="logout" class="ml-auto text-blue-300 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </aside>
    <!-- Mobile Sidebar (optional) -->
    <aside class="fixed inset-y-0 left-0 bg-white shadow-xl w-64 z-40 flex flex-col py-8 px-6 md:hidden" v-if="showSidebar">
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-2xl font-bold text-indigo-700">Dean Panel</h2>
        <button @click="showSidebar = false" class="text-gray-400 hover:text-indigo-600">
          <span class="material-icons">close</span>
        </button>
      </div>
      <nav class="flex-1">
        <ul class="space-y-2">
          <li>
            <a href="#" class="flex items-center px-3 py-2 rounded-lg text-indigo-700 bg-indigo-100 font-semibold">
              <span class="material-icons mr-2">dashboard</span> Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition">
              <span class="material-icons mr-2">folder</span> Projects
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition">
              <span class="material-icons mr-2">group</span> Lecturers
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition">
              <span class="material-icons mr-2">school</span> Students
            </a>
          </li>
        </ul>
      </nav>
      <button @click="logout" class="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-5 rounded shadow transition">Logout</button>
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

      <!-- Overview Banner -->
      <div class="relative bg-gradient-to-r from-[#046e93] via-[#035e80] to-[#1b3455] h-64 overflow-hidden">
        <div class="absolute inset-0 bg-[#1b3455] bg-opacity-30">
          <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%); background-size: 20px 20px, 40px 40px;"></div>
        </div>
        <div class="relative z-10 h-full flex flex-col justify-center px-8">
          <h1 class="text-5xl font-bold text-white mb-2">Overview</h1>
          <p class="text-blue-100 text-xl">Welcome back, Dr. Supansa</p>
        </div>
      </div>

      <!-- Content Area -->
      <div class="px-8 py-6">
        <!-- Profile Section -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div class="flex flex-col md:flex-row">
            <!-- Profile Info -->
            <div class="md:w-2/3 p-6">
              <div class="flex items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">{{ user?.displayName || 'User' }}</h2>
                <span class="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Accounting Program</span>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div class="text-xs text-gray-500 font-medium">Email</div>
                    <div class="text-sm text-gray-700">{{ user?.email || 'No email available' }}</div>
                  </div>
                </div>
                <div class="flex items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div class="text-xs text-gray-500 font-medium">Phone</div>
                    <div class="text-sm text-gray-700">{{ user?.phoneNumber || 'No phone available' }}</div>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <div class="text-xs text-gray-500 font-medium">Location</div>
                  <div class="text-sm text-gray-700">Mae Fah Luang University</div>
                </div>
              </div>
            </div>
            <!-- Profile Image -->
            <div class="md:w-1/3 bg-blue-50 flex justify-center items-center p-6">
              <div class="relative w-48 h-48">
                <img 
                  :src="user?.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || 'User')}&size=384&background=e3f2fd&color=1e88e5`" 
                  :alt="user?.displayName || 'User'" 
                  class="w-full h-full object-cover rounded-full border-4 border-white shadow-lg ring-2 ring-blue-100 ring-offset-2"
                  loading="eager"
                  referrerpolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Education Section -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Education</h2>
            <div class="space-y-6">
              <div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">2014</span>
                  <span class="text-blue-600 font-medium text-sm">Bachelor's degree</span>
                </div>
                <p class="font-medium">Accounting, Management</p>
                <p class="text-gray-600 text-sm">Mae Fah Luang University</p>
              </div>
              <div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">2018</span>
                  <span class="text-blue-600 font-medium text-sm">Master's degree</span>
                </div>
                <p class="font-medium">Computer Engineering</p>
                <p class="text-gray-600 text-sm">Mae Fah Luang University</p>
              </div>
              <div>
                <div class="flex justify-between">
                  <span class="text-gray-500 text-sm">2021</span>
                  <span class="text-blue-600 font-medium text-sm">Doctor of Philosophy</span>
                </div>
                <p class="font-medium">Computer Engineering</p>
                <p class="text-gray-600 text-sm">Mae Fah Luang University</p>
              </div>
            </div>

            <h2 class="text-xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2">Research Area</h2>
            <ul class="space-y-3">
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <span>Machine Learning</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <span>Data Analytics</span>
              </li>
              <li class="flex items-center">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                <span>Accounting Information Systems</span>
              </li>
            </ul>
          </div>

          <!-- Recent Publications -->
          <div class="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-xl font-bold text-gray-800">Recent Publications</h2>
              <a href="#" class="text-blue-600 text-sm hover:underline">View All</a>
            </div>

            <div class="space-y-6">
              <!-- Publication 1 -->
              <div class="border rounded-lg overflow-hidden">
                <div class="p-4">
                  <h3 class="font-medium text-blue-700 hover:underline cursor-pointer">Classification Approach for Industry Standards Categorization</h3>
                  <p class="text-sm text-gray-600 mt-1">Chavatcharinr, R., Samarang, W., Chaising, S., & Sornlertlamvanich, V. (January). In 2022 Joint International Conference on Digital Arts, Media and Technology... (pp. 329-333). IEEE.</p>
                  <div class="mt-3 flex items-center">
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IEEE Access, 9, 137015-137026</span>
                  </div>
                </div>
                <div class="bg-gray-50 p-3 flex items-center">
                  <img :src="user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.displayName || 'User')" :alt="user?.displayName || 'User'" class="w-8 h-8 rounded-full mr-2" />
                  <span class="text-sm font-medium">{{ user?.displayName || 'User' }}</span>
                </div>
              </div>

              <!-- Publication 2 -->
              <div class="border rounded-lg overflow-hidden">
                <div class="p-4">
                  <h3 class="font-medium text-blue-700 hover:underline cursor-pointer">Average weighted objective distance-based method for type 2 diabetes prediction</h3>
                  <p class="text-sm text-gray-600 mt-1">Boongasame, L., Chaising, S., & Temdee, P. (2021).</p>
                  <div class="mt-3 flex items-center">
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">IEEE Access, 9, 137015-137026</span>
                  </div>
                </div>
                <div class="bg-gray-50 p-3 flex items-center">
                  <img :src="user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.displayName || 'User')" :alt="user?.displayName || 'User'" class="w-8 h-8 rounded-full mr-2" />
                  <span class="text-sm font-medium">{{ user?.displayName || 'User' }}</span>
                </div>
              </div>

              <!-- Publication 3 -->
              <div class="border rounded-lg overflow-hidden">
                <div class="p-4">
                  <h3 class="font-medium text-blue-700 hover:underline cursor-pointer">Blockchain-based Trusty Buyer Collection Scheme Using A Group Signature</h3>
                  <p class="text-sm text-gray-600 mt-1">Boongasame, L., Chaising, S., & Temdee, P. (2021).</p>
                  <div class="mt-3 flex items-center">
                    <span class="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Journal of Mobile Multimedia, 203-</span>
                  </div>
                </div>
                <div class="bg-gray-50 p-3 flex items-center">
                  <img :src="user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.displayName || 'User')" :alt="user?.displayName || 'User'" class="w-8 h-8 rounded-full mr-2" />
                  <span class="text-sm font-medium">{{ user?.displayName || 'User' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

const { user, logout } = useFirebaseAuth()

// UI state
const showSidebar = ref(false)

// Mockup data
const recentApprovals = ref([
  { id: 1, project: 'AI-powered Chatbot', student: 'Alice Smith', status: 'Approved', date: '2025-04-20' },
  { id: 2, project: 'Market Analytics Dashboard', student: 'Bob Lee', status: 'Pending', date: '2025-04-18' },
  { id: 3, project: 'E-Commerce Insights', student: 'Charlie Kim', status: 'Approved', date: '2025-04-15' },
  { id: 4, project: 'Supply Chain Optimizer', student: 'Dana White', status: 'Approved', date: '2025-04-12' },
])
const notifications = ref([
  { id: 1, text: '3 new projects submitted for approval.' },
  { id: 2, text: 'Lecturer Dr. John assigned to new project.' },
  { id: 3, text: 'System maintenance scheduled for April 30.' },
])
</script>
