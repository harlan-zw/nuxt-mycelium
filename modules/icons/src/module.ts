import { addVitePlugin, createResolver, defineNuxtModule, resolvePath } from '@nuxt/kit'
import unpluginIcons from 'unplugin-icons'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { dirname } from 'pathe'

export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt-mycelium/icons',
    configKey: 'mycelium',
  },
  defaults: {
    addPlugin: true,
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // register unplugin
    // @ts-expect-error untyped
    nuxt.hooks.hook('content:context', (ctx) => {
      ctx.transformers.push(resolver.resolve('runtime/md-icons'))
      ctx.transformers.push(resolver.resolve('runtime/project-icons'))
    })

    addVitePlugin(unpluginIcons.vite({
      autoInstall: true,
    }))

    addVitePlugin(Components({
      dts: '.nuxt/icons.d.ts',
      // no nuxt components
      dirs: [
        dirname(await resolvePath('@nuxt-mycelium/theme')),
      ],
      resolvers: [
        IconsResolver(),
      ],
    }))
  },
})
