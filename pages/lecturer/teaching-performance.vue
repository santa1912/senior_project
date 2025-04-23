<template>
    <div class="min-h-screen flex">
      <!-- Sidebar - Same as lecturer.vue -->
      <aside class="w-64 bg-gradient-to-br from-[#046e93] via-[#035e80] to-[#1b3455] text-white flex-col sticky top-0 h-screen hidden md:flex">
        <!-- Logo Section -->
        <div class="px-8 py-6 border-b border-[#035e80]">
          <div class="flex items-center justify-center">
            <!-- <div class="mr-2">
              <img src="/mfu-logo.png" alt="MFU Logo" class="h-14 w-auto object-contain" />
            </div> -->
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
  
      <!-- Main Content -->
      <div class="flex-1 bg-gray-50">
        <!-- Mobile Header -->
        <div class="md:hidden bg-white shadow-sm p-4 flex items-center justify-between">
          <div class="flex items-center">
            <img src="/mfu-logo.png" alt="MFU Logo" class="h-12 w-auto object-contain mr-2" />
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
              <h1 class="text-2xl font-bold text-gray-900">Domain 1: Teaching Performance</h1>
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
  
          <!-- Teaching Track -->
          <div class="mb-6">
            <h2 class="text-center text-lg font-medium text-gray-700 mb-1">Teaching Track</h2>
            <p class="text-center text-sm text-gray-500 mb-4">11 Feb 2025-31 July 2025</p>
          </div>
  
          <!-- KPI Categories -->
          <div class="grid grid-cols-5 gap-4 mb-8">
            <div class="bg-blue-500 bg-opacity-10 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Teaching (60%)</p>
              <p class="text-xl font-bold text-blue-600">60%</p>
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
  
          <!-- Teaching Performance -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-lg font-medium text-gray-900 mb-1">Teaching Performance</h2>
            <p class="text-sm text-gray-500 mb-6">Threshold (175) - Earned score (203.95)</p>
            
            <!-- Performance Chart -->
            <div class="h-96 mb-6">
              <canvas ref="teachingChart"></canvas>
            </div>
          </div>
  
          <!-- Teaching Tables -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Undergraduate Teaching -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Undergraduate Teaching</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">No.</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course Code</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Number of Students</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Business Research</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503331</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">2</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Business Law and Ethics</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1507277</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">3</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Principles of Marketing</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503151</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">4</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Digital Business</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503108</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">5</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Business Analysis</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503273</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <!-- Graduate Teaching -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Graduate Teaching</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">No.</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course Code</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Number of Students</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Quantitative Theory in Business</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503907</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">2</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Advanced Research Methodology in Management</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503911</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">3</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Seminar in Business Administration</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503913</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Navigation Links -->
          <div class="mt-8 flex justify-between">
            <NuxtLink to="/lecturer/kpi-overview" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              Back to KPI
            </NuxtLink>
            <NuxtLink to="/lecturer/research-performance" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
              Research Performance
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

  const teachingChart = ref<HTMLCanvasElement | null>(null)
  const showMobileMenu = ref(false)
  const { user, logout } = useFirebaseAuth()

  const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
  }

  onMounted(() => {
    // Create bar chart
    if (teachingChart.value) {
      new Chart(teachingChart.value, {
        type: 'bar',
        data: {
          labels: [
            'Teaching Quality',
            'Student Feedback',
            'Course Development',
            'Teaching Innovation',
            'Student Support',
          ],
          datasets: [{
            label: 'Teaching Performance',
            data: [85, 90, 75, 80, 85],
            backgroundColor: '#2563eb',
            borderWidth: 0,
            borderRadius: 4,
          }]
        },
        options: {
          indexAxis: 'y' as const,
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
              max: 100,
              grid: {
                display: false
              },
              ticks: {
                color: '#64748b'
              }
            },
            y: {
              grid: {
                display: false
              },
              ticks: {
                color: '#64748b'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      })
    }
  })
  </script>