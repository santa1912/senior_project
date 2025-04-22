import { defineNuxtRouteMiddleware } from '#app'

export default defineNuxtRouteMiddleware((to) => {
  // Auth state is now handled by useFirebaseAuth composable
  if (to.path === '/') {
    return
  }
})
