<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header with Round Selector -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Domain 1: Teaching Performance</h1>
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
        <p class="text-xl font-bold text-blue-600">45.75%</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-4 text-center">
        <p class="text-sm text-gray-600">Research (20%)</p>
        <p class="text-xl font-bold text-gray-700">15.25%</p>
      </div>
      <div class="bg-gray-100 rounded-lg p-4 text-center">
        <p class="text-sm text-gray-600">Academic (10%)</p>
        <p class="text-xl font-bold text-gray-700">7.5%</p>
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
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course Title</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course Code</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Number of Students</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Business Research</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503910</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">50</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">2</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Research Methodology</td>
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

      <!-- Graduate Teaching -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Graduate Teaching</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">No.</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course Title</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Course Code</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Number of Students</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Advanced Research Methods</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503920</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">25</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">2</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">Business Analytics</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1503921</td>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">25</td>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

definePageMeta({
  layout: 'lecturer'
})

const teachingChart = ref<HTMLCanvasElement | null>(null)

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