import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch("/api/posts")
	const posts = await res.json()

  if (posts) {
    return { posts }
  }
 
  throw error(404, 'Not found');
}
