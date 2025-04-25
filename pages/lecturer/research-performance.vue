<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header with Round Selector -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Domain 2: Research Performance</h1>
      </div>
    </div>

    <!-- Research Track -->
    <div class="mb-6">
      <h2 class="text-center text-lg font-medium text-gray-700 mb-1">Research Track</h2>
      <p class="text-center text-sm text-gray-500 mb-4">11 Feb 2025-31 July 2025</p>
    </div>

    <!-- KPI Categories with NuxtLink-->
    <div class="grid grid-cols-5 gap-4 mb-8">
      <NuxtLink
        to="/lecturer/teaching-performance"
        class="rounded-lg p-4 text-center transition-colors cursor-pointer"
        :class="
          $route.path === '/lecturer/teaching-performance'
            ? 'bg-blue-200'
            : 'bg-gray-100 hover:bg-blue-100'
        "
      >
        <p class="text-sm text-gray-600">Teaching (60%)</p>
        <p class="text-xl font-bold text-gray-700">45.75%</p>
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
        <p class="text-sm text-gray-600">Research (20%)</p>
        <p class="text-xl font-bold text-gray-700">15.25%</p>
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
        <p class="text-sm text-gray-600">Academic (10%)</p>
        <p class="text-xl font-bold text-gray-700">7.5%</p>
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
        <p class="text-sm text-gray-600">Administration (5%)</p>
        <p class="text-xl font-bold text-gray-700">5%</p>
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
        <p class="text-sm text-gray-600">Arts and culture (10%)</p>
        <p class="text-xl font-bold text-gray-700">3.75%</p>
      </NuxtLink>
    </div>

    <!-- Research Performance -->
    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-lg font-medium text-gray-900 mb-1">Research Performance</h2>
      <p class="text-sm text-gray-500 mb-6">Threshold (25) - Earned score (94.92)</p>
      
      <!-- Performance Chart -->
      <div class="h-96 mb-6">
        <canvas ref="researchChart"></canvas>
      </div>
    </div>

    <!-- Research Tables -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Research Studies -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Research Studies</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">No.</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Research Title</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">1</td>
                <td class="px-4 py-3 text-sm text-gray-900">SoM Research Journal</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">2</td>
                <td class="px-4 py-3 text-sm text-gray-900">SoM Research Quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Research Publication -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-4">Research Publication</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">No.</th>
                <th class="px-4 py-3 bg-[#046e93] text-white text-left text-xs font-medium uppercase tracking-wider">Publication Title</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">4</td>
                <td class="px-4 py-3 text-sm text-gray-900">SoM Research Highlights</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">5</td>
                <td class="px-4 py-3 text-sm text-gray-900">SoM Digital Humanities</td>
              </tr>
              <tr>
                <td class="px-4 py-3 whitespace-nowrap text-sm text-gray-900">11</td>
                <td class="px-4 py-3 text-sm text-gray-900">InsightHub</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Navigation Links -->
    <div class="mt-8 flex justify-between">
      <NuxtLink to="/lecturer/teaching-performance" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        Teaching Performance
      </NuxtLink>
      <NuxtLink to="/lecturer/academic-performance" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#046e93] hover:bg-[#035475] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#046e93]">
        Academic Performance
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

const researchChart = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  // Create horizontal bar chart
  if (researchChart.value) {
    new Chart(researchChart.value, {
      type: 'bar',
      data: {
        labels: [
          'Research Studies', 
          'Research Publication', 
        ],
        datasets: [{
          label: 'Research Performance',
          data: [85, 70],
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