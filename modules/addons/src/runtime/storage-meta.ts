import type { ContentTransformer } from '@nuxt/content/dist/runtime/types'
import { prefixStorage } from 'unstorage'
import type { ParsedContent } from '@nuxt-mycelium/theme'
import { useStorage } from '#imports'

const contentStorage = prefixStorage(useStorage(), 'content:source')

export default <ContentTransformer> {
  name: 'storage-meta',
  extentions: ['.*'],
  async transform(content: ParsedContent) {
    content.storageMeta = { ...(await contentStorage.getMeta(content._id)) }
    return content
  },
}
