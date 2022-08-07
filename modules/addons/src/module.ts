import { addComponentsDir, createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  async setup(_, nuxt) {
    const resolver = createResolver(import.meta.url)
    const transformer = (path = '') => resolver.resolve('runtime', path)

    // resolve transformer path
    nuxt.options.build.transpile.push(transformer())

    await addComponentsDir({
      path: resolver.resolve('components'),
      global: true,
    })

    nuxt.hooks.hookOnce('autoImports:dirs', (dirs) => {
      dirs.unshift(resolver.resolve('composables'))
    })

    // custom transformers
    nuxt.hooks.hook('content:context', (ctx) => {
      // before nuxt content transformers
      ctx.transformers.unshift(...[
        transformer('code-file-name'),
      ])

      // after nuxt content transformers
      ctx.transformers.push(...[
        transformer('breadcrumbs'),
        transformer('nuxt-image'),
        transformer('storage-meta'),
        transformer('read-time'),
        transformer('meta-normaliser'),
      ])
    })
  },
})
