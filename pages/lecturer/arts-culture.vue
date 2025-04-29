<template>
    <div class="container mx-auto px-4 py-8">
      <!-- Header with Round Selector -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 class="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">Domain 5: Arts and Culture Conservation Performance</h1>
          <p class="text-sm sm:text-base text-gray-600">Welcome back, {{ user?.displayName }}</p>
        </div>
        <div class="relative w-full sm:w-auto">
          <select
            class="w-full sm:w-auto appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm">
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
  
      <!-- Administration Track -->
      <div class="mb-6">
        <h2 class="text-center text-lg font-medium text-gray-700 mb-1">Arts and Culture Track</h2>
        <p class="text-center text-sm text-gray-500 mb-4">11 Feb 2025-31 July 2025</p>
      </div>
  
      <!-- KPI Categories with NuxtLink-->
    <div v-if="selectedRound" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
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
      <div class="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 sm:gap-8">
        <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
        <div class="flex flex-col items-center">
          <h2 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
            Arts and Culture Performance
          </h2>
        </div>
        
        <!-- Performance Chart -->
        <div class="h-[300px] sm:h-[400px] mb-4 sm:mb-6">
          <canvas ref="acChart"></canvas>
        </div>
      </div>
      <!-- table -->
      <div class="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8 sm:mb-40 mr-0 sm:mr-8">
        <h2 class="text-lg font-medium text-gray-900 mb-4">
          Self Development Projects
        </h2>
        <div class="max-h-80 overflow-y-auto pr-2">
            <div>
            <p class="text-sm ml-4 mb-2 font-bold">Thailand Cloud Immersion Day</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acDateLogo/>Date : 27 June 2024</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acTypeLogo/>Type : Seminar</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acLocationLogo/>Room E4A0514, Mae Fah Luang University</p>
            <div class="w-full h-0.5 bg-[#B0B9C4] mb-2"></div>
        </div>
        <div>
            <p class="text-sm ml-4 mb-2 font-bold">Project 002</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acDateLogo/>Date : 27 June 2024</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acTypeLogo/>Type : Seminar</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acLocationLogo/>Room E4A0514, Mae Fah Luang University</p>
            <div class="w-full h-0.5 bg-[#B0B9C4] mb-2"></div>
        </div>
        <div>
            <p class="text-sm ml-4 mb-2 font-bold">Project 003</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acDateLogo/>Date : 27 June 2024</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acTypeLogo/>Type : Seminar</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acLocationLogo/>Room E4A0514, Mae Fah Luang University</p>
            <div class="w-full h-0.5 bg-[#B0B9C4] mb-2"></div>
        </div>
        <div>
            <p class="text-sm ml-4 mb-2 font-bold">Project 004</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acDateLogo/>Date : 27 June 2024</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acTypeLogo/>Type : Seminar</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acLocationLogo/>Room E4A0514, Mae Fah Luang University</p>
            <div class="w-full h-0.5 bg-[#B0B9C4] mb-2"></div>
        </div>
        <div>
            <p class="text-sm ml-4 mb-2 font-bold">Project 005</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acDateLogo/>Date : 27 June 2024</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acTypeLogo/>Type : Seminar</p>
            <p class="text-xs ml-4 mb-2 flex items-center gap-2"><acLocationLogo/>Room E4A0514, Mae Fah Luang University</p>
            <div class="w-full h-0.5 bg-[#B0B9C4] mb-2"></div>
        </div>
        </div>
      </div>
    </div>
    </div>
  </template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'   
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'
import { useAirtableKpi } from '@/composables/useAirtableKpi'

const { kpiRounds, selectedRound, selectRound, isLoading, error } = useAirtableKpi()
const selectedRoundId = ref(selectedRound.value?.id || '')

function onRoundChange() {
  selectRound(selectedRoundId.value)
}

definePageMeta({
  layout: 'lecturer'
})

const acChart = ref<HTMLCanvasElement | null>(null)
const showMobileMenu = ref(false)
const { user, logout } = useFirebaseAuth()

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

onMounted(() => {
  if (acChart.value) {
    new Chart(acChart.value, {
            type: 'bar',
            data: {
                labels: [
                'Cultural & student tasks',
                'Organization & involvement',
                'Self-improvement',
                'Student Development',
                'Cultural Preservation Activities'
                ],
                datasets: [{
                data: [0, 0, 5, 5, 5],
                backgroundColor: '#1D3555',
                borderWidth: 0,
                borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                legend: {
                    display: false
                },
                datalabels: {               
                    anchor: 'end',              
                    align: 'end',               
                    color: '#6B7280',           
                    font: {
                    size: 12,
                    weight: 'bold'
                    },
                    offset: 4                  
                }
                },
                scales: {
                x: {
                    beginAtZero: true,
                    max: 160,
                    grid: {
                    color: '#f0f0f0'
                    },
                    ticks: {
                    font: {
                        size: 12
                    }
                    },
                    title: {
                    display: true,
                    text: 'Raw Score',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                    }
                },
                y: {
                    grid: {
                    display: false
                    },
                    ticks: {
                    font: {
                        size: 12
                    }
                    }
                }
                }
            },
            plugins: [ChartDataLabels]     
            })
        }
        })
</script>
