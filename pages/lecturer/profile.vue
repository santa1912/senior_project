<template>
  <!-- Overview Banner -->
  <div class="relative bg-gradient-to-b from-[#18345c] via-[#17688f] to-[#1597bb] h-72 overflow-hidden transition-all duration-500 ease-in-out hover:h-80">
    <div class="absolute inset-0 bg-[#18345c] bg-opacity-30">
      <div class="container mx-auto px-8 py-20 relative z-10">
        <h1 class="text-4xl font-bold text-white mb-4">Welcome, {{ user?.displayName || 'User' }}!</h1>
        <p class="text-blue-100 text-lg max-w-2xl">
          Track your academic performance, manage research projects, and view your teaching evaluations all in one place.
        </p>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/10 to-transparent"></div>
  </div>

  <!-- Content Area -->
  <div class="px-8 py-6">
    <!-- Profile Section -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div class="p-6">
        <div class="flex items-center mb-6">
          <div class="w-16 h-16 rounded-full bg-white overflow-hidden mr-4 border-2 border-blue-500">
            <img :src="user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.displayName || 'User')" :alt="user?.displayName || 'User'" class="w-full h-full object-cover" />
          </div>
          <div>
            <h2 class="text-2xl font-bold text-gray-800">{{ user?.displayName || 'User' }}</h2>
            <p class="text-gray-600">Senior Lecturer</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-blue-700 mb-2">Teaching Hours</h3>
            <p class="text-3xl font-bold text-blue-900">24</p>
            <p class="text-sm text-blue-600">This semester</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-green-700 mb-2">Research Projects</h3>
            <p class="text-3xl font-bold text-green-900">3</p>
            <p class="text-sm text-green-600">Active projects</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-700 mb-2">Publications</h3>
            <p class="text-3xl font-bold text-purple-900">12</p>
            <p class="text-sm text-purple-600">Last 12 months</p>
          </div>
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
    <div class="bg-white rounded-lg shadow-md p-6 mt-8">
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

definePageMeta({
  layout: 'lecturer'
})

// Mockup data
const assignedProjects = ref([
  { id: 1, project: 'Sentiment Analysis Tool', student: 'Emily Wong', status: 'Pending Review', due: '2025-04-25' },
  { id: 2, project: 'Sales Forecast App', student: 'Frank Miller', status: 'In Progress', due: '2025-05-02' },
  { id: 3, project: 'Customer Segmentation', student: 'Grace Park', status: 'Completed', due: '2025-04-15' },
  { id: 4, project: 'Inventory Tracker', student: 'Henry Lee', status: 'In Progress', due: '2025-05-10' },
])

const notifications = ref([
  { id: 1, text: 'You have 2 projects pending review.', time: '2 hours ago' },
  { id: 2, text: 'Student Emily Wong submitted a new report.', time: 'Today' },
  { id: 3, text: 'Reminder: Project review meeting on April 28.', time: 'Yesterday' },
])

const { user } = useFirebaseAuth()
</script>
