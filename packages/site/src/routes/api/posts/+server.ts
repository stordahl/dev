import { dev } from '$app/environment'
import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const allPosts = await fetchMarkdownPosts(dev)
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedPosts)
}
