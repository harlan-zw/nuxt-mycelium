import { appendHeader } from 'h3'
import { generateBlogFeed } from '../util/rss'
// @ts-expect-error untyped
import { defineCachedEventHandler } from '#imports'

export default defineCachedEventHandler(async (event) => {
  const feed = await generateBlogFeed(event)
  appendHeader(event, 'Content-Type', 'application/json')
  return feed.json1()
})
