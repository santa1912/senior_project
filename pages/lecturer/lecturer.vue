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
            <h2 class="text-xl font-bold text-white">SoM.BI</h2>
            <p class="text-xs text-blue-300">School of Management</p>
          </div>
        </div>
      </div>
      <!-- Navigation Menu -->
      <nav class="flex-1 px-4 py-6">
        <ul class="space-y-1">
          <li>
            <NuxtLink to="/lecturer/lecturer" class="flex items-center px-4 py-3 text-white bg-[#035475] rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/lecturer/kpi-overview" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors">
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
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" class="w-full h-full object-cover" />
        </div>
        <div>
          <p class="text-sm font-medium">Phyo Min Thein</p>
          <p class="text-xs text-[#7fc6de]">Lecturer</p>
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
        <h2 class="text-2xl font-bold text-blue-700">Lecturer Panel</h2>
        <button @click="showSidebar = false" class="text-gray-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <!-- Mobile menu items -->
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
          <p class="text-blue-100 text-xl">Welcome back, Phyo Min Thein</p>
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
                <h2 class="text-2xl font-bold text-gray-800">Phyo Min Thein</h2>
                <span class="ml-4 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Computer Science Program</span>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span class="text-gray-600">phyominthein.leo@gmail.com</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-gray-600">053-916789</span>
                </div>
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span class="text-gray-600">E1-Floor 2, School of Management</span>
                </div>
              </div>
            </div>
            <!-- Profile Image -->
            <div class="md:w-1/3 bg-blue-50 flex justify-center items-center p-6">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Phyo Min Thein" class="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>

        <!-- Two Column Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Left Column: Assigned Projects -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Projects Overview</h2>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-blue-50 p-4 rounded-lg text-center">
                <span class="block text-2xl font-bold text-blue-700">7</span>
                <span class="text-sm text-gray-600">Total Projects</span>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg text-center">
                <span class="block text-2xl font-bold text-yellow-600">3</span>
                <span class="text-sm text-gray-600">Pending Reviews</span>
              </div>
              <div class="bg-green-50 p-4 rounded-lg text-center">
                <span class="block text-2xl font-bold text-green-600">2</span>
                <span class="text-sm text-gray-600">Completed</span>
              </div>
              <div class="bg-indigo-50 p-4 rounded-lg text-center">
                <span class="block text-2xl font-bold text-indigo-600">18</span>
                <span class="text-sm text-gray-600">Students</span>
              </div>
            </div>

            <h2 class="text-xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2">Upcoming Deadlines</h2>
            <ul class="space-y-3">
              <li v-for="(item, index) in pendingProjects" :key="index" class="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <div>
                  <p class="font-medium">{{ item.project }}</p>
                  <p class="text-sm text-gray-500">{{ item.student }}</p>
                </div>
                <span :class="{
                  'bg-red-100 text-red-700': new Date(item.due) < new Date(Date.now() + 3*24*60*60*1000),
                  'bg-yellow-100 text-yellow-700': new Date(item.due) >= new Date(Date.now() + 3*24*60*60*1000) && new Date(item.due) < new Date(Date.now() + 7*24*60*60*1000),
                  'bg-blue-100 text-blue-700': new Date(item.due) >= new Date(Date.now() + 7*24*60*60*1000)
                }" class="px-2 py-1 rounded text-xs font-semibold">
                  {{ item.due }}
                </span>
              </li>
            </ul>
          </div>

          <!-- Right Column: KPI Overview and Projects -->
          <div class="md:col-span-2 space-y-8">
            <!-- KPI Performance Preview -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-800">KPI Performance</h2>
                <a href="/lecturer/kpi-overview" class="text-blue-600 text-sm hover:underline">View Full Dashboard</a>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <div class="bg-blue-50 p-4 rounded-lg text-center">
                  <span class="block text-2xl font-bold text-blue-700">60%</span>
                  <span class="text-sm text-gray-600">Teaching</span>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg text-center">
                  <span class="block text-2xl font-bold text-yellow-600">15%</span>
                  <span class="text-sm text-gray-600">Research</span>
                </div>
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <span class="block text-2xl font-bold text-green-600">10%</span>
                  <span class="text-sm text-gray-600">Academic Service</span>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg text-center">
                  <span class="block text-2xl font-bold text-indigo-600">5%</span>
                  <span class="text-sm text-gray-600">Administration</span>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg text-center">
                  <span class="block text-2xl font-bold text-purple-600">3.75%</span>
                  <span class="text-sm text-gray-600">Arts & Culture</span>
                </div>
              </div>
              
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-[#046e93] to-[#1b3455] text-white text-xl font-bold">92%</div>
                  <div class="ml-4">
                    <p class="text-lg font-semibold">Overall Performance</p>
                    <p class="text-sm text-gray-600">Excellent (85-100%)</p>
                  </div>
                </div>
                <div class="space-x-2">
                  <a href="/lecturer/teaching-performance" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200">Teaching</a>
                  <a href="/lecturer/research-performance" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200">Research</a>
                  <a href="/lecturer/academic-performance" class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200">Academic</a>
                </div>
              </div>
            </div>
            <!-- Assigned Projects Table -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-800">Assigned Projects</h2>
                <a href="#" class="text-blue-600 text-sm hover:underline">View All</a>
              </div>
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Student</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr v-for="item in assignedProjects" :key="item.id" class="hover:bg-gray-50">
                    <td class="px-4 py-3 font-medium text-gray-900">{{ item.project }}</td>
                    <td class="px-4 py-3">{{ item.student }}</td>
                    <td class="px-4 py-3">
                      <span :class="item.status === 'Completed' ? 'bg-green-100 text-green-700' : item.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'" class="px-2 py-1 rounded text-xs font-semibold">{{ item.status }}</span>
                    </td>
                    <td class="px-4 py-3 text-gray-500">{{ item.due }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Notifications -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-xl font-bold text-gray-800 mb-4">Recent Notifications</h2>
              <ul class="space-y-4">
                <li v-for="note in notifications" :key="note.id" class="flex items-start p-3 border-l-4 border-blue-500 bg-blue-50 rounded-r-md">
                  <span class="mt-1 text-blue-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 8v4m0 4h.01" />
                    </svg>
                  </span>
                  <div>
                    <p class="text-gray-700">{{ note.text }}</p>
                    <p class="text-xs text-gray-500 mt-1">{{ note.time || 'Today' }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
import { useRouter } from 'vue-router'
import { getAuth, signOut } from 'firebase/auth'
import { ref, computed } from 'vue'
const router = useRouter()
const logout = async () => {
  const auth = getAuth()
  await signOut(auth)
  router.push('/')
}

// Mockup data
const assignedProjects = ref([
  { id: 1, project: 'Sentiment Analysis Tool', student: 'Emily Wong', status: 'Pending Review', due: '2025-04-25' },
  { id: 2, project: 'Sales Forecast App', student: 'Frank Miller', status: 'In Progress', due: '2025-05-02' },
  { id: 3, project: 'Customer Segmentation', student: 'Grace Park', status: 'Completed', due: '2025-04-15' },
  { id: 4, project: 'Inventory Tracker', student: 'Henry Lee', status: 'In Progress', due: '2025-05-10' },
])
// UI state
const showSidebar = ref(false)

// Computed properties
const pendingProjects = computed(() => {
  return assignedProjects.value.filter(p => p.status !== 'Completed').slice(0, 3)
})

const notifications = ref([
  { id: 1, text: 'You have 2 projects pending review.', time: '2 hours ago' },
  { id: 2, text: 'Student Emily Wong submitted a new report.', time: 'Today' },
  { id: 3, text: 'Reminder: Project review meeting on April 28.', time: 'Yesterday' },
])
</script>
