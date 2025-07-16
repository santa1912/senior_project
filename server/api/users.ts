// server/api/users.ts
import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    { id: 1, name: 'Admin User', role: 'admin' },
    { id: 2, name: 'Dean User', role: 'dean' },
    { id: 3, name: 'Lecturer User', role: 'lecturer' }
  ]
})