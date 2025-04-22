<template>
  <NuxtLayout name="lecturer">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Statistics Cards -->
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Active Projects</h3>
        <p class="text-3xl font-bold text-indigo-600">12</p>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Total Students</h3>
        <p class="text-3xl font-bold text-indigo-600">48</p>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Upcoming Reviews</h3>
        <p class="text-3xl font-bold text-indigo-600">5</p>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-lg shadow p-6 md:col-span-2 lg:col-span-3">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div class="space-y-4">
          <div v-for="(activity, index) in recentActivities" :key="index" class="flex items-center p-4 bg-gray-50 rounded-lg">
            <div class="ml-4">
              <p class="text-sm font-medium text-gray-900">{{ activity.title }}</p>
              <p class="text-sm text-gray-500">{{ activity.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
  middleware: ['auth']
})

const recentActivities = ref([
  {
    title: 'Project Review: AI Implementation',
    time: '2 hours ago'
  },
  {
    title: 'New Project Submission',
    time: '4 hours ago'
  },
  {
    title: 'Student Meeting: Database Design',
    time: 'Yesterday'
  }
])
</script>
