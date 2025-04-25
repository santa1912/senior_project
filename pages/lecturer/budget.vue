<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Budget Management</h1>
        <p class="text-gray-600">Welcome back, Dr. Supansa</p>
      </div>
      <div class="relative">
        <select class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-4 pr-10 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
          <option>Year/ 2025</option>
          <option>Year/ 2024</option>
          <option>Year/ 2023</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Budget Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- Total Budget -->
      <div class="bg-blue-50 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Total Budget</p>
            <h3 class="text-2xl font-bold text-gray-900">฿ 125,000</h3>
            <p class="text-sm text-blue-50">s</p>
          </div>
          <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none">
  <text x="13" y="18" text-anchor="middle" font-size="18" font-family="Arial, Helvetica, sans-serif" fill="currentColor">฿</text>
</svg>
          </div>
        </div>
      </div>

      <!-- Spent Amount -->
      <div class="bg-purple-50 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Spent Amount</p>
            <h3 class="text-2xl font-bold text-gray-900">฿ 78,500</h3>
            <p class="text-sm text-gray-500">62.8% of total budget</p>
          </div>
          <div class="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Research Projects -->
      <div class="bg-orange-50 rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Research Projects</p>
            <h3 class="text-2xl font-bold text-gray-900">฿ 25,000</h3>
            <p class="text-sm text-gray-500">3 active projects</p>
          </div>
          <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Budget Distribution and Details -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Budget Distribution Chart -->
      <div class="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-medium text-gray-900 mb-6">Budget Distribution</h2>
        <div class="space-y-4">
          <div v-for="(item, index) in budgetItems" :key="index" class="flex items-center">
            <div class="w-32 text-sm text-gray-600">{{ item.name }}</div>
            <div class="flex-1 mx-4">
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="h-2 rounded-full" :style="{ width: item.percentage + '%', backgroundColor: item.color }"></div>
              </div>
            </div>
            <div class="w-24 text-right text-sm font-medium text-gray-900">฿ {{ item.amount.toLocaleString() }}</div>
          </div>
        </div>
      </div>

      <!-- Budget Details -->
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-6">Budget Details</h2>
          <div class="space-y-6 max-h-72 overflow-y-auto pr-2">
            <div v-for="(detail, index) in budgetDetails" :key="index" class="border-b border-gray-200 pb-4 last:border-0">
              <div class="flex justify-between items-start mb-2">
                <div>
                  <h3 class="font-medium text-gray-900">{{ detail.title }}</h3>
                  <p class="text-sm text-gray-500">{{ detail.description }}</p>
                </div>
                <span class="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">{{ detail.duration }}</span>
              </div>
              <p class="text-sm text-gray-600">Budget: ฿ {{ detail.budget.toLocaleString() }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'lecturer'
})

const budgetItems = [
  { name: 'Self Development', amount: 80000, percentage: 64, color: '#3B82F6' },
  { name: 'Academic Service Project', amount: 42000, percentage: 33.6, color: '#EC4899' },
  { name: 'Research Project', amount: 38000, percentage: 30.4, color: '#8B5CF6' },
  { name: 'Guest Speaker', amount: 15000, percentage: 12, color: '#10B981' },
  { name: 'Guest Lecturer', amount: 15000, percentage: 12, color: '#F59E0B' },
  { name: 'Student Activity', amount: 15000, percentage: 12, color: '#EF4444' }
]

const budgetDetails = [
  {
    title: 'Guest Speaker 130S305',
    description: 'Dr. Supansa Chaising',
    budget: 12000,
    duration: '6 Month'
  },
  {
    title: 'SoM Project',
    description: 'with Dr. Kornthip Watcharapipat',
    budget: 8000,
    duration: '6 Month'
  },
  {
    title: 'Guest Lecturer 130S305',
    description: 'Dr. Supansa Chaising',
    budget: 5000,
    duration: '6 Month'
  }
]
</script>
