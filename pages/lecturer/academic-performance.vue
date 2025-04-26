<template>
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

    <!-- KPI Categories with NuxtLink-->
    <div v-if="selectedRound" class="grid grid-cols-5 gap-4 mb-8">
      <NuxtLink
        to="/lecturer/teaching-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/teaching-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Teaching ({{ selectedRound?.categories[0]?.percent || 0 }}%)</p>
        <p class="text-xl font-bold text-gray-700">{{ selectedRound?.categories[0]?.value || 0 }}%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/research-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/research-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Research ({{ selectedRound?.categories[1]?.percent || 0 }}%)</p>
        <p class="text-xl font-bold text-gray-700">{{ selectedRound?.categories[1]?.value || 0 }}%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/academic-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/academic-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Academic Service ({{ selectedRound?.categories[2]?.percent || 0 }}%)</p>
        <p class="text-xl font-bold text-gray-700">{{ selectedRound?.categories[2]?.value || 0 }}%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/administration"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/administration'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Administration ({{ selectedRound?.categories[3]?.percent || 0 }}%)</p>
        <p class="text-xl font-bold text-gray-700">{{ selectedRound?.categories[3]?.value || 0 }}%</p>
      </NuxtLink>

      <NuxtLink
        to="/lecturer/arts-culture"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/arts-culture'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Arts and culture ({{ selectedRound?.categories[4]?.percent || 0 }}%)</p>
        <p class="text-xl font-bold text-gray-700">{{ selectedRound?.categories[4]?.value || 0 }}%</p>
      </NuxtLink>
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
      <NuxtLink to="/lecturer/research-performance" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Research Performance
      </NuxtLink>
      <NuxtLink to="/lecturer/kpi-overview" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
        Back to Overview
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

definePageMeta({
layout: 'lecturer'
})

const academicServiceChart = ref<HTMLCanvasElement | null>(null)
const showMobileMenu = ref(false)
const { user, logout } = useFirebaseAuth()
import { useAirtableKpi } from '@/composables/useAirtableKpi'

const { kpiRounds, selectedRound, selectRound, isLoading, error } = useAirtableKpi()
const selectedRoundId = ref(selectedRound.value?.id || '')

const toggleMobileMenu = () => {
showMobileMenu.value = !showMobileMenu.value
}

onMounted(() => {
// Create radar chart
if (academicServiceChart.value) {
new Chart(academicServiceChart.value, {
  type: 'radar',
  data: {
    labels: [
      'Teaching',
      'Research',
      'Academic Service',
      'Administration',
      'Art and Culture',
    ],
    datasets: [{
      label: 'Current Performance',
      data: [80, 70, 75, 65, 60],
      backgroundColor: 'rgba(37, 99, 235, 0.2)',
      borderColor: '#2563eb',
      borderWidth: 2,
      pointBackgroundColor: '#2563eb',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2563eb'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: '#e2e8f0'
        },
        grid: {
          color: '#e2e8f0'
        },
        pointLabels: {
          color: '#64748b'
        },
        ticks: {
          backdropColor: 'transparent',
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