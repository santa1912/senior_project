export default defineNuxtPlugin(() => {
  const user = useState('user')

  if (import.meta.client) {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
      
    }
  }
})