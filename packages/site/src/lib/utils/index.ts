import type { PageVisitEvent } from '$lib/types'

import posthog from 'posthog-js'

export const fetchMarkdownPosts = async (dev:boolean) => {
  const allPostFiles = import.meta.glob('/src/routes/writing/posts/*.md')
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(11, -3).replace('/posts', '')

      return {
        meta: metadata,
        path: postPath
      }
    })
  )

  return dev ? allPosts : allPosts.filter(post => post.meta.status === 'published');
}

export const sendPageVisitEvent = () => {
		if(!window) return

		const { host, href, origin, pathname, protocol } = window.location
		const { language, userAgent, vendor } = window.navigator

		const data:PageVisitEvent = {
			timestamp: new Date().getUTCDate(),
			location: { host, href, origin, pathname, protocol },
			navigator: { language, userAgent, vendor },
		} 

		posthog.capture('PageVisit', data)
}
