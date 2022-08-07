import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: ['@nuxt-mycelium/theme'],
  alias: {
    '@nuxt-mycelium/theme': resolve(__dirname, '../theme/nuxt.config.ts'),
    '@nuxt-mycelium/icons': resolve(__dirname, '../modules/icons/src/module.ts'),
    '@nuxt-mycelium/addons': resolve(__dirname, '../modules/addons/src/module.ts'),
  },
  components: [
    {
      path: './node_modules/@nuxt-mycelium/theme/components/content',
      global: true,
      prefix: '',
    },
  ],
})
