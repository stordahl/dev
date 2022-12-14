import { redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';
import type { PageLoad } from './$types';

export const load:PageLoad = async ({ params }) => {
  const post = await import(`../posts/${params.slug}.md`)
  const { title, date, status } = post.metadata
  const content = post.default

	if(status !== 'published' && !dev){
		throw redirect(307, '/writing')
	} else {
  	return {
    	content,
    	title,
    	date,
  	}
	}
}
