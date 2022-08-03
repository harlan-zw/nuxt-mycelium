import { addVitePlugin, createResolver, defineNuxtModule } from '@nuxt/kit'
import unpluginIcons from 'unplugin-icons'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'mycelium-icons',
    configKey: 'mycelium',
  },
  defaults: {
    addPlugin: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // register unplugin icons
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
      dirs: [],
      resolvers: [
        IconsResolver(),
      ],
    }))
  },
})
