<template>
    <div class="min-h-screen flex">
      <!-- Sidebar - Same as lecturer.vue -->
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
              <NuxtLink to="/lecturer/lecturer" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/lecturer/kpi-overview" class="flex items-center px-4 py-3 text-white bg-[#035e80] rounded-md">
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
  
      <!-- Main Content -->
      <div class="flex-1 bg-gray-50">
        <!-- Mobile Header -->
        <div class="md:hidden bg-white shadow-sm p-4 flex items-center justify-between">
          <div class="flex items-center">
            <img src="/mfu-logo.png" alt="MFU Logo" class="h-8 w-8 mr-2" />
            <h1 class="text-lg font-bold">SoM.BI</h1>
          </div>
          <button @click="toggleMobileMenu" class="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
  
        <div class="container mx-auto px-4 py-8">
          <!-- Header with Round Selector -->
          <div class="flex justify-between items-center mb-8">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">KPI Performance Overview</h1>
              <p class="text-gray-600">Welcome back, Dr. Supansa</p>
            </div>
            <div class="relative">
              <select class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option>Round 2/2025</option>
                <option>Round 1/2025</option>
                <option>Round 2/2024</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
  
          <!-- KPI Categories -->
          <div class="grid grid-cols-5 gap-4 mb-8">
            <div class="bg-gray-100 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Teaching (60%)</p>
              <p class="text-xl font-bold text-gray-700">60%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Research (15%)</p>
              <p class="text-xl font-bold text-gray-700">15%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Academic Service (10%)</p>
              <p class="text-xl font-bold text-gray-700">10%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Administration (5%)</p>
              <p class="text-xl font-bold text-gray-700">5%</p>
            </div>
            <div class="bg-gray-100 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Arts and culture (10%)</p>
              <p class="text-xl font-bold text-gray-700">3.75%</p>
            </div>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Teaching Track -->
            <div class="md:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 class="text-center text-lg font-medium text-gray-700 mb-1">Teaching Track</h2>
              <p class="text-center text-sm text-gray-500 mb-6">11 Feb 2025-31 July 2025</p>
              
              <!-- Performance Chart -->
              <div class="flex justify-center">
                <div class="w-full max-w-lg h-80">
                  <canvas ref="performanceChart"></canvas>
                </div>
              </div>
  
              <!-- Legend -->
              <div class="mt-8 flex flex-wrap justify-center gap-4">
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-blue-600 mr-2"></span>
                  <span class="text-sm text-gray-700">Teaching</span>
                </div>
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                  <span class="text-sm text-gray-700">Research</span>
                </div>
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
                  <span class="text-sm text-gray-700">Academic Service</span>
                </div>
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                  <span class="text-sm text-gray-700">Administration</span>
                </div>
                <div class="flex items-center">
                  <span class="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                  <span class="text-sm text-gray-700">Art and Culture</span>
                </div>
              </div>
            </div>
  
            <!-- Performance Metrics -->
            <div class="md:col-span-1">
              <div class="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 class="text-lg font-medium text-gray-900 mb-4">Overall Performance</h2>
                
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-gray-700">Academic Performance (60%)</span>
                      <span class="text-sm font-medium text-gray-700">56.25%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full" style="width: 56.25%"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-gray-700">Behavior (40%)</span>
                      <span class="text-sm font-medium text-gray-700">36%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-green-600 h-2 rounded-full" style="width: 36%"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div class="flex justify-between mb-1">
                      <span class="text-sm font-medium text-gray-700">Total Score (100%)</span>
                      <span class="text-sm font-medium text-gray-700">92.25%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                      <div class="bg-indigo-600 h-2 rounded-full" style="width: 92.25%"></div>
                    </div>
                  </div>
                  
                  <div class="pt-4 border-t border-gray-200">
                    <div class="flex justify-between items-center">
                      <span class="text-sm font-medium text-gray-700">Performance Level</span>
                      <span class="px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Performance Level Legend -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-lg font-medium text-gray-900 mb-4">Performance Level</h2>
                
                <div class="space-y-2">
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">< 55</span>
                    <span class="px-3 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Very Poor</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">55-64</span>
                    <span class="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full">Poor</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">65-74</span>
                    <span class="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Moderate</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">75-84</span>
                    <span class="px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Good</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-700">85-100</span>
                    <span class="px-3 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">Excellent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Domain Links -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <NuxtLink to="/lecturer/teaching-performance" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Domain 1: Teaching Performance</h3>
              <p class="text-sm text-gray-600 mb-4">View detailed teaching performance metrics and course assignments.</p>
              <div class="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#046e93]" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/lecturer/research-performance" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Domain 2: Research Performance</h3>
              <p class="text-sm text-gray-600 mb-4">View research publications, studies, and academic contributions.</p>
              <div class="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#046e93]" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </NuxtLink>
            
            <NuxtLink to="/lecturer/academic-performance" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 class="text-lg font-medium text-gray-900 mb-2">Domain 3: Academic Performance</h3>
              <p class="text-sm text-gray-600 mb-4">View academic service activities, reviewer roles, and guest lectures.</p>
              <div class="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#046e93]" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { getAuth, signOut } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  import Chart from 'chart.js/auto'
  
  const router = useRouter()
  const performanceChart = ref(null)
  const showMobileMenu = ref(false)
  
  const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  }
  
  const logout = async () => {
    const auth = getAuth()
    try {
      await signOut(auth)
      router.push('/')
    } catch (e) {
      console.error('Logout failed', e)
    }
  }
  
  onMounted(() => {
    // Create doughnut chart
    const ctx = performanceChart.value.getContext('2d')
    
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Teaching', 'Research', 'Academic Service', 'Administration', 'Art and Culture'],
        datasets: [{
          data: [60, 15, 10, 5, 3.75],
          backgroundColor: [
            '#2563eb', // blue
            '#eab308', // yellow
            '#14b8a6', // teal
            '#9333ea', // purple
            '#ec4899', // pink
          ],
          borderWidth: 0,
          borderRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: 'Academic Performance',
            position: 'center',
            font: {
              size: 16,
              weight: 'bold'
            }
          }
        }
      }
    })
  })
  </script>
  