import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load:PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`)
  const { title, date, status } = post.metadata
  const content = post.default

	if(status !== 'published'){
		throw redirect(307, '/writing')
	} else {
  	return {
    	content,
    	title,
    	date,
  	}
	}
}
