import { defineNuxtRouteMiddleware, navigateTo, useState } from '#app'

// กำหนด interface หรือ type ของ user
interface AppUser {
  role: 'admin' | 'dean' | 'lecturer'
  [key: string]: any
}

export default defineNuxtRouteMiddleware(() => {
  const user = useState<AppUser | null>('user')  // บอก useState ว่าชนิดข้อมูลคือ AppUser หรือ null

  if (!user.value || user.value.role !== 'admin') {
    // ถ้า user ไม่มีค่า หรือ role ไม่ใช่ admin ให้ redirect ไปหน้า login
    return navigateTo('/login')
  }
  
})