<template>
  <div class="px-4 py-6 max-w-7xl mx-auto">
    <!-- Header and Controls -->
    <div class="mb-8">
      <div class="flex items-center gap-12">
        <h1 class="text-2xl font-bold text-gray-900">Recent Publications</h1>
        <!-- Year Filter -->
        <div class="relative">
          <select v-model="selectedYear" 
                  class="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-700 w-44">
            <option value="2022">Year/ 2022</option>
            <option value="2021">Year/ 2021</option>
          </select>
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <!-- Search -->
        <div class="relative flex-1 max-w-xs">
          <input type="text" v-model="searchQuery" 
                 placeholder="Search..." 
                 class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      <p class="text-gray-600 text-sm mt-2">Welcome back, {{ user?.displayName }}</p>
    </div>

    <!-- Publications by Year -->
    <div class="space-y-12">
      <div v-for="year in groupedPublications" :key="year.year">
        <h2 class="text-2xl font-bold mb-8">{{ year.year }}</h2>
        <div class="grid grid-cols-1 gap-8">
          <div v-for="pub in year.publications" :key="pub.title" 
               class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-8 max-w-3xl">
            <div class="space-y-4">
              <h3 class="text-[#264785] text-xl font-semibold">{{ pub.title }}</h3>
              <p class="text-gray-500 text-base">{{ pub.authors }}</p>
              <p class="text-gray-500">{{ pub.venue }}</p>
            </div>
            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img :src="user?.photoURL || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user?.displayName || 'User')" 
                     :alt="user?.displayName" 
                     class="w-8 h-8 rounded-full" />
                <span class="text-sm text-gray-500">{{ user?.displayName }}</span>
              </div>
              <a v-if="pub.link" :href="pub.link" 
                 class="text-sm text-[#3056ab] hover:text-[#264785] font-medium px-4 py-1 bg-blue-50 rounded-md">
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFirebaseAuth } from '@/composables/useFirebaseAuth'

definePageMeta({
  layout: 'lecturer'
})

const { user } = useFirebaseAuth()
const selectedYear = ref('2022')

// Example publications data (you can replace this with real data from an API or database)
// Remove publications array since we're using static data in groupedPublications

// Compute available years from publications
const searchQuery = ref('')

// Static grouped publications for mockup
const groupedPublications = computed(() => [
  {
    year: 2022,
    publications: [
      { 
        title: 'Classification Approach for Industry Standards Categorization',
        authors: 'Chaisricharoen, R., Srimaharaj, W., Chaising, S., & Pamanee, K.',
        venue: 'In 2022 Joint International Conference on Digital Arts, Media and Technology... (pp. 308-313). IEEE.',
        year: 2022,
        link: '#'
      }
    ]
  },
  {
    year: 2021,
    publications: [
      { 
        title: 'Average weighted objective distance-based method for type 2 diabetes prediction',
        authors: 'Nuankaew, P., Chaising, S., & Temdee, P.',
        venue: 'IEEE Access, 9, 137015-137028.',
        year: 2021,
        link: '#'
      },
      { 
        title: 'Blockchain-based Trusty Buyer Coalition Scheme Using A Group Signature',
        authors: 'Boongsame, L., Chaising, S., & Temdee, P.',
        venue: 'Journal of Mobile Multimedia, 203-230.',
        year: 2021,
        link: '#'
      },
      { 
        title: 'Individual Attribute Selection Using Information Gain based Distance for Group Classification of Elderly People with Hypertension',
        authors: 'Chaising, S., Temdee, P., & Prasad, R.',
        venue: 'IEEE Access, 9, 82713-82725.',
        year: 2021,
        link: '#'
      }
    ]
  }
])
</script>
