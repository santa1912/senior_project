export default defineNuxtRouteMiddleware((to, from) => {
  const user = useFirebaseAuth().user.value
  if (!user || user.email !== '6531503200@lamduan.mfu.ac.th') {
  return navigateTo('/')
}
})