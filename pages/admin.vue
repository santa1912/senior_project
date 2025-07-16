<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-3xl font-bold mb-6">Edit Profile</h1>

    <!-- กล่องคอลัมน์ตรงกลาง -->
    <div class="w-[1100px] h-[558px] bg-white rounded-lg shadow mx-auto p-6 flex flex-col items-center">

      <!-- รูปภาพวงกลม -->
      <div class="w-28 h-28 rounded-full overflow-hidden mb-4 mt-6">
        <img
          src="https://i0.wp.com/www.xinhuathai.com/wp-content/uploads/2024/02/7507fc8a87b444b69dfa21c7b448c481.jpg?resize=696%2C466&ssl=1"
          alt="Profile"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- เนื้อหาไอคอน + ข้อความ Change Photo -->
      <div class="flex items-center justify-center space-x-2 text-gray-400 text-sm mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3.2" fill="#c5c5c5"/>
          <path fill="#c5c5c5" d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"/>
        </svg>
        <h2>Change Photo</h2>
      </div>

      <!-- ข้อความ Information -->
      <p class="text-xl font-semibold mb-6 text-left w-full ml-10">
        Information
      </p>

      <!-- กล่องข้อมูล 6 กล่อง (3 แถว × 2 คอลัมน์) -->
      <div
        class="grid grid-cols-2 w-full justify-center px-10 mt-auto"
        style="column-gap: 1cm; row-gap: 2cm;"
      >
        <div class="w-[300px] h-[32px] bg-gray-100 rounded-md"></div>
        <div class="w-[300px] h-[32px] bg-gray-100 rounded-md"></div>

        <div class="w-[300px] h-[32px] bg-gray-100 rounded-md"></div>
        <div class="w-[300px] h-[32px] bg-gray-100 rounded-md"></div>

        <div class="w-[300px] h-[32px] bg-gray-100 rounded-md"></div>
        <div class="w-[300px] h-[32px] bg-gray-100 rounded-md"></div>
      </div>
      </div>
     <!-- กล่องแม่ที่ครอบคอลัมน์เล็กทั้งสอง -->
<div class="w-[1100px] mx-auto mt-6 flex justify-between" style="gap: 0.5cm;">
  <!-- คอลัมน์เล็กซ้าย -->
  <div class="w-[540px] h-[391px] bg-white rounded-lg shadow p-6">
    <p class="text-xl font-semibold mb-2 text-left w-full ml-5">
      Education
    </p>
  </div>

  <!-- คอลัมน์เล็กขวา -->
  <div class="w-[540px] h-[391px] bg-white rounded-lg shadow p-6">
    <p class="text-xl font-semibold mb-2 text-left w-full ml-5">
      Research Area
    </p>
  </div>
</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { navigateTo } from '#app'
import adminOnly from '~/middleware/admin-only'

definePageMeta({
  layout: 'admin',
  middleware: [adminOnly]
})

interface ApiResponse<T> {
  status: string
  data: T
}

interface User {
  id: number
  name: string
  role: string
}

const users = ref<User[]>([])

const { data, error } = await useFetch<User[]>('/api/users')

if (error.value) {
  console.error('Failed to fetch users:', error.value)
} else {
  users.value = data.value || []
  console.log('Users:', users.value)
}

const userResponse = ref<User | null>(null)

const createUser = async () => {
  const res = await $fetch<ApiResponse<User>>('/api/users', {
    method: 'POST',
    body: {
      name: 'New Admin',
      role: 'admin'
    }
  })
  userResponse.value = res.data
}

const goToUsers = () => navigateTo('/admin/users')
const goToKpi = () => navigateTo('/admin/kpi')
const goToReports = () => navigateTo('/admin/reports')
</script>