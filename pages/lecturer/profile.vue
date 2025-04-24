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
            <h3 class="text-lg font-semibold text-blue-700 mb-2">Email</h3>
            <p class="text-md font-medium text-blue-900">{{ user?.email || 'n/a' }}</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-green-700 mb-2">Phone Number</h3>
            <p class="text-md font-medium text-green-900">{{ userInfo.phone || 'n/a' }}</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="text-lg font-semibold text-purple-700 mb-2">Location</h3>
            <p class="text-md font-medium text-purple-900">{{ userInfo.location || 'n/a' }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Education Area -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-8 p-6">
      <h3 class="text-xl font-bold text-gray-800 mb-4">Education</h3>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li v-for="(edu, idx) in education" :key="idx">
          <span class="font-semibold">{{ edu.degree }}</span> — {{ edu.institution }} ({{ edu.year }})
        </li>
      </ul>
    </div>

    <!-- Research Area -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Research Area</h2>
      <ul class="list-disc list-inside text-gray-700 space-y-2">
        <li v-for="(area, idx) in researchAreas" :key="idx">
          {{ area }}
        </li>
      </ul>
    </div>

    <!-- Recent Publications -->
    <div class="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 class="text-xl font-bold text-gray-800 mb-4">Recent Publications</h2>
      <ul class="divide-y divide-gray-100">
        <li v-for="(pub, idx) in publications" :key="idx" class="py-3">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p class="font-semibold text-blue-900">{{ pub.title }}</p>
              <p class="text-gray-600 text-sm">{{ pub.venue }} &bull; {{ pub.year }}</p>
            </div>
            <a :href="pub.link" v-if="pub.link" class="text-blue-600 text-sm hover:underline mt-2 md:mt-0" target="_blank">View</a>
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
const { user } = useFirebaseAuth()

// Example user info (replace with real data or API call as needed)
const userInfo = ref({
  phone: '081-234-5678',
  location: 'Chiang Rai, Thailand',
})

const education = ref([
  { degree: 'Ph.D. in Management', institution: 'Mae Fah Luang University', year: 2020 },
  { degree: 'M.B.A.', institution: 'Chulalongkorn University', year: 2015 },
  { degree: 'B.B.A.', institution: 'Chiang Mai University', year: 2012 },
])

const researchAreas = ref([
  'Business Intelligence and Data Analytics',
  'Machine Learning Applications in Management',
  'Higher Education Administration',
  'Research Collaboration Networks',
])

const publications = ref([
  { title: 'A Novel Approach to Sentiment Analysis', venue: 'Journal of Data Science', year: 2024, link: '#' },
  { title: 'Machine Learning in Education', venue: 'International Conference on AI', year: 2023, link: '#' },
  { title: 'Optimizing Research Collaboration', venue: 'Research Management Review', year: 2023, link: '#' },
])
</script>
