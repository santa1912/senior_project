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
        class="grid grid-cols-2 w-full justify-center px-10 mt-[2mm]"
        style="column-gap: 1.5cm; row-gap: 8mm;"
      >
         <div>
          <p class="text-sm text-gray-700 mb-1">Full Name :</p>     
        <div class="w-[400px] h-[32px] bg-gray-50 rounded-md border border-gray-400"></div>
        </div>
        <div>
          <p class="text-sm text-gray-700 mb-1">Email :</p>
        <div class="w-[400px] h-[32px] bg-gray-50 rounded-md border border-gray-400"></div>
        </div>
        <div>
          <p class="text-sm text-gray-700 mb-1">Phone Number :</p>
        <div class="w-[400px] h-[32px] bg-gray-50 rounded-md border border-gray-400"></div>
        </div>
        <div>
          <p class="text-sm text-gray-700 mb-1">Department :</p>
        <div class="w-[400px] h-[32px] bg-gray-50 rounded-md border border-gray-400"></div>
        </div>
        <div>
          <p class="text-sm text-gray-700 mb-1">Faulty/Position :</p>
        <div class="w-[400px] h-[32px] bg-gray-50 rounded-md border border-gray-400"></div>
        </div>
        <div>
          <p class="text-sm text-gray-700 mb-1">Office Location :</p>
        <div class="w-[400px] h-[32px] bg-gray-50 rounded-md border border-gray-400"></div>
        </div>
      </div>
      </div>
     <!-- กล่องแม่ที่ครอบคอลัมน์เล็กทั้งสอง -->
<div class="w-[1100px] mx-auto mt-6 flex justify-between" style="gap: 0.5cm;">
  <!-- คอลัมน์เล็กซ้าย -->
  <div class="w-[540px] h-[391px] bg-white rounded-lg shadow p-6">
  <div class="flex items-center mb-2">
    <p class="text-xl font-semibold text-left ml-5 flex-grow">
      Education
    </p>
    <button class="w-[130px] h-[30px] bg-[#036E94] text-white text-sm font-medium rounded-sm hover:bg-[#025a78] flex items-center justify-center space-x-1">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
  </svg>
  <span>Add Degree</span>
</button>
  </div>
    <!-- ✅ กล่อง 3 ช่องติดกัน -->
  <div class="space-y-0.5 mt-[8mm]">
    <div class="border border-gray-300 rounded-md p-4 h-[22mm]">Bachelor's degree : Accounting, Management</div>
    <div class="border border-gray-300 rounded-md p-4 h-[22mm]">Master's degree : Computer Engineering</div>
    <div class="border border-gray-300 rounded-md p-4 h-[22mm]">Doctor of Philosophy : Computer Engineering</div>
  </div>
</div>

  <!-- คอลัมน์เล็กขวา -->
  <div class="w-[540px] h-[391px] bg-white rounded-lg shadow p-6">
    <div class="flex items-center mb-2">
      <p class="text-xl font-semibold text-left ml-5 flex-grow">
        Research Area
      </p>
      <button
        class="w-[130px] h-[30px] bg-[#036E94] text-white text-sm font-medium rounded-sm hover:bg-[#025a78] flex items-center justify-center space-x-1"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        <span>Add Research</span>
      </button>
    </div>
    <!-- ✅ กล่อง 3 ช่องติดกัน -->
  <div class="space-y-0.5 mt-[8mm]">
    <div class="border border-gray-300 rounded-md p-4 h-[22mm]">Machine Learning</div>
    <div class="border border-gray-300 rounded-md p-4 h-[22mm]">Data Analytics</div>
    <div class="border border-gray-300 rounded-md p-4 h-[22mm]">Accounting Information Systems</div>
  </div>
</div>
</div>
<!-- กล่องล่างสุด -->
<div class="w-[1100px] h-[420px] mx-auto mt-6 bg-white rounded-lg shadow p-6">
  <div class="flex justify-between items-center mb-4">
    <p class="text-xl font-semibold text-left w-full ml-5">Recent Publications</p>
    <button
      class="w-[200px] h-[32px] bg-[#036E94] text-white text-sm font-medium rounded-sm hover:bg-[#025a78] flex items-center justify-center space-x-2 mr-5"
      type="button"
    >
      <!-- SVG ไอคอนบวก -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      <span>Add Publication</span>
    </button>
  </div>

  <!-- กล่องย่อย 3 กล่อง -->
  <div class="space-y-1 mt-[8mm]">
    <div class="border border-gray-300 rounded-md p-4 min-h-[90px] text-[#003F93]">
      Classification Approach for Industry Standards Categorization
    </div>
    <div class="border border-gray-300 rounded-md p-4 min-h-[90px] text-[#003F93]">
      Blockchain-based Trusty Buyer Coalition Scheme Using A Group Signature
    </div>
    <div class="border border-gray-300 rounded-md p-4 min-h-[90px] text-[#003F93]">
      Blockchain-based Trusty Buyer Coalition Scheme Using A Group Signature
    </div>
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
