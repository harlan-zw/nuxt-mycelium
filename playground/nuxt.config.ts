import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['nuxt-mycelium'],

  components: [
    {
      path: './node_modules/nuxt-mycelium/components/content',
      global: true,
      prefix: '',
    },
  ],
})
