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
              <a href="/lecturer/lecturer" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </a>
            </li>
            <li>
              <a href="/lecturer/kpi-overview" class="flex items-center px-4 py-3 text-white bg-[#035e80] rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                KPI
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center px-4 py-3 text-white hover:bg-[#035e80] rounded-md transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Budget
              </a>
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
              <h1 class="text-2xl font-bold text-gray-900">Domain 3: Academic Service</h1>
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
  
          <!-- Academic Service Track -->
          <div class="mb-6">
            <h2 class="text-center text-lg font-medium text-gray-700 mb-1">Academic Service Track</h2>
            <p class="text-center text-sm text-gray-500 mb-4">11 Feb 2025-31 July 2025</p>
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
            <div class="bg-blue-500 bg-opacity-10 rounded-lg p-4 text-center">
              <p class="text-sm text-gray-600">Academic Service (10%)</p>
              <p class="text-xl font-bold text-blue-600">10%</p>
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
  
          <!-- Academic Service Performance -->
          <div class="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 class="text-lg font-medium text-gray-900 mb-1">Academic Service Performance</h2>
            <p class="text-sm text-gray-500 mb-6">Threshold (25) - Earned score (25)</p>
            
            <!-- Performance Chart -->
            <div class="h-96 mb-6">
              <canvas ref="academicServiceChart"></canvas>
            </div>
          </div>
  
          <!-- Academic Service Details -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Academic Service Activities -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Academic Service Activities</h2>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Activity</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Date</th>
                      <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Score</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                      <td class="px-4 py-3 text-sm text-gray-900">Guest Lecture at Chiang Rai University</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">15 Mar 2025</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">5</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-4 py-3 text-sm text-gray-900">Academic Reviewer for ASEAN Business Journal</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">22 Apr 2025</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">10</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-3 text-sm text-gray-900">Workshop Facilitator at Business Innovation Conference</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">10 May 2025</td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
  
            <!-- Upcoming Opportunities -->
            <div class="bg-white rounded-lg shadow-md p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Upcoming Opportunities</h2>
              <div class="space-y-4">
                <div class="border-l-4 border-[#046e93] pl-4">
                  <h3 class="text-md font-medium text-gray-900">International Business Conference</h3>
                  <p class="text-sm text-gray-600 mb-1">Panel Discussion Opportunity</p>
                  <p class="text-xs text-gray-500">June 15-17, 2025 • Bangkok, Thailand</p>
                </div>
                
                <div class="border-l-4 border-[#046e93] pl-4">
                  <h3 class="text-md font-medium text-gray-900">Journal of Management Studies</h3>
                  <p class="text-sm text-gray-600 mb-1">Reviewer Opportunity</p>
                  <p class="text-xs text-gray-500">Deadline: July 30, 2025</p>
                </div>
                
                <div class="border-l-4 border-[#046e93] pl-4">
                  <h3 class="text-md font-medium text-gray-900">Community Business Workshop</h3>
                  <p class="text-sm text-gray-600 mb-1">Facilitator Opportunity</p>
                  <p class="text-xs text-gray-500">August 5, 2025 • Chiang Rai, Thailand</p>
                </div>
              </div>
              
              <button class="mt-6 w-full bg-[#046e93] hover:bg-[#035475] text-white py-2 px-4 rounded-md transition-colors">
                View All Opportunities
              </button>
            </div>
          </div>
  
          <!-- Additional Service Categories -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Academic Committees</h3>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Curriculum Development Committee</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Research Ethics Committee</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Community Outreach</h3>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Small Business Advisory Program</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Youth Entrepreneurship Workshop</span>
                </li>
              </ul>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Professional Memberships</h3>
              <ul class="space-y-2 text-sm text-gray-700">
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Academy of Management</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-5 w-5 text-green-500 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>ASEAN Business Association</span>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Navigation Links -->
          <div class="mt-8 flex justify-between">
            <a href="/lecturer/research-performance" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
              </svg>
              Research Performance
            </a>
            <a href="/lecturer/kpi-overview" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
              Back to Overview
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
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
  const academicServiceChart = ref(null)
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
    // Create radar chart
    const ctx = academicServiceChart.value.getContext('2d')
    
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: [
          'Academic Service to External Organizations', 
          'Academic Service to University', 
          'Community Service', 
          'Professional Development',
          'Mentorship',
          'Consulting'
        ],
        datasets: [
          {
            label: 'Threshold',
            data: [5, 5, 5, 5, 3, 2],
            backgroundColor: 'rgba(4, 110, 147, 0.2)',
            borderColor: 'rgba(4, 110, 147, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(4, 110, 147, 1)',
          },
          {
            label: 'Earned',
            data: [10, 5, 5, 3, 1, 1],
            backgroundColor: 'rgba(234, 179, 8, 0.2)',
            borderColor: 'rgba(234, 179, 8, 0.8)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(234, 179, 8, 1)',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: {
              display: true,
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              backdropColor: 'transparent',
              showLabelBackdrop: false
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    })
  })
  </script>
  