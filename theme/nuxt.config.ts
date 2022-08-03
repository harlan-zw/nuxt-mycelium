import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtConfig } from 'nuxt'
// Local import of the theme.config file.
// Values used from it will have to be rewritten manually in the user projects nuxt.config file.
import config from './theme.config'

const resolvePath = (p = '') => resolve(dirname(fileURLToPath(import.meta.url)), p)

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  alias: {
    'nuxt-mycelium': resolvePath(),
  },
  app: {
    theme: {
      meta: {
        name: 'Mycelium Theme',
        author: 'Harlan Wilton (@harlan_zw)',
        description: 'A living and breathing Nuxt 3, Nuxt Content 2 template.',
      },
    },
  },
  experimental: {
    viteNode: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // automatically import tokens into scss
          additionalData: '@import "./.nuxt/tokens/tokens.scss";',
        },
      },
    },
  },
  modules: [
    // Themify
    '@nuxt-themes/config/module',
    '@nuxtjs/design-tokens/module',
    // Website
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/image',
    'nuxt-schema-org',
    'nuxt-windicss',
    // custom content modules, need to come before the content module
    '@mycelium/addons',
    '@mycelium/icons',
    '@nuxt/content',
  ],
  schemaOrg: {
    disableRuntimeScriptsWhenSSR: true,
    // To be rewritten manually by the theme user
    canonicalHost: config.site.url,
    // To be rewritten manually by the theme user
    defaultLanguage: config.site.language,
  },
  css: [
    resolvePath('resources/scrollbars.css'),
    resolvePath('resources/main.scss'),
  ],
  // https://color-mode.nuxtjs.org
  colorMode: {
    fallback: 'dark',
    classSuffix: '',
  },

  // https://content.nuxtjs.org
  content: {
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula',
    },
  },
  /*
     router: {
       trailingSlash: false,
     },

     image: {
      cloudinary: {
         baseURL: 'https://res.cloudinary.com/dl6o1xpyq/image/upload/images',
         modifiers: {
           quality: 'auto:best',
           dpr: 'auto',
         },
       },
       domains: [
         'avatars0.githubusercontent.com',
       ],
     }, */

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
        '/feed.xml',
        '/feed.json',
        '/feed.atom',
      ],
    },
  },
})
