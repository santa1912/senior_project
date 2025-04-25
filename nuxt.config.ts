// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      airtableApiKey: process.env.NUXT_AIRTABLE_API_KEY,
      airtableBaseId: process.env.NUXT_AIRTABLE_BASE_ID
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
