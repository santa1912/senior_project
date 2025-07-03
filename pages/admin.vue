<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Admin Control Panel</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Education -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <h2 class="text-xl font-semibold mb-2">จัดการการศึกษา</h2>
        <p class="text-gray-600 mb-4">เพิ่ม/แก้ไข/ลบข้อมูลวุฒิการศึกษา</p>
        <NuxtLink to="/admin/education" class="text-blue-600 hover:underline">ไปยังหน้า Education</NuxtLink>
      </div>

      <!-- Research Areas -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <h2 class="text-xl font-semibold mb-2">จัดการงานวิจัย</h2>
        <p class="text-gray-600 mb-4">เพิ่ม/แก้ไข/ลบหัวข้องานวิจัย</p>
        <NuxtLink to="/admin/research" class="text-blue-600 hover:underline">ไปยังหน้า Research</NuxtLink>
      </div>

      <!-- Users -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <h2 class="text-xl font-semibold mb-2">จัดการผู้ใช้งาน</h2>
        <p class="text-gray-600 mb-4">ควบคุมสิทธิ์ผู้ใช้ (Admin / Lecturer)</p>
        <NuxtLink to="/admin/users" class="text-blue-600 hover:underline">ไปยังหน้า Users</NuxtLink>
      </div>

      <!-- KPI -->
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
        <h2 class="text-xl font-semibold mb-2">จัดการ KPI</h2>
        <p class="text-gray-600 mb-4">ตั้งค่าเกณฑ์การประเมิน</p>
        <NuxtLink to="/admin/kpi" class="text-blue-600 hover:underline">ไปยังหน้า KPI</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import adminOnly from '~/pages/middleware/admin-only'

definePageMeta({
  layout: 'admin',
  middleware: adminOnly // ✅ ถูกต้องสำหรับ TypeScript
})
</script>