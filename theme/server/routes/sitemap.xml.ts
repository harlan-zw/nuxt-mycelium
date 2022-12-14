import { SitemapStream, streamToPromise } from 'sitemap'
import { contentPaths } from '../util/content'
// @ts-expect-error untyped
import { defineCachedEventHandler } from '#imports'

export default defineCachedEventHandler(async (event) => {
  // Grab theme configuration
  const theme = await $fetch('/api/_theme/options')

  const routes = await contentPaths(event)

  const sitemap = new SitemapStream({
    hostname: theme.site.url,
  })
  for (const url of routes) {
    sitemap.write({
      url,
    })
  }
  sitemap.end()
  return streamToPromise(sitemap)
})
