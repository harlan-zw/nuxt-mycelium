import type { MaybeRef } from '@vueuse/schema-org'
import type { Page } from '../types'
import { nextTick, unref, useHead, useTheme, watch } from '#imports'

export const useCustomContentHead = (doc: MaybeRef<Partial<Page>>) => {
  const theme = useTheme()

  watch(
    () => doc,
    (doc) => {
      doc = unref(doc)

      if (!doc)
        return

      const head = Object.assign({}, doc?.head || {})
      head.title = `${head.title || doc.title}`

      if (!head.title.endsWith(theme.value.site.name) && !head.title.startsWith(theme.value.site.name))
        head.title = `${head.title} - ${theme.value.site.name}`

      head.meta = head.meta || []
      head.meta.push({
        name: 'og:title',
        content: head.title,
      })

      const description = head.description || doc.description
      if (description && head.meta.filter(m => m.name === 'description').length === 0) {
        head.meta.push({
          name: 'description',
          content: description,
        })
        head.meta.push({
          name: 'og:description',
          content: description,
        })
      }

      if (head.image && head.meta.filter(m => m.property === 'og:image').length === 0) {
        head.meta.push({
          property: 'og:image',
          content: head.image,
        })
      }

      if (process.client)
        nextTick(() => useHead(head))
      else useHead(head)
    },
    {
      immediate: true,
    },
  )
}
