export default defineNuxtRouteMiddleware(async (to) => {
  const { user, loading } = useFirebaseAuth()
  
  // Wait for auth to initialize
  if (loading.value) {
    return
  }
  
  // If user is not authenticated and trying to access protected route
  if (!user.value && to.path.startsWith('/lecturer')) {
    return navigateTo('/login')
  }
  
  // If user is authenticated and trying to access login page
  if (user.value && to.path === '/login') {
    return navigateTo('/lecturer/dashboard')
  }
})
