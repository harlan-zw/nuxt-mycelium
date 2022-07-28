import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-mycleium'],

  components: [
    {
      path: './node_modules/nuxt-mycleium/components/content',
      global: true,
      prefix: '',
    },
  ],
})
