<script lang="ts">
	import SvelteSeo from 'svelte-seo'
	import { page } from '$app/stores';
	import type { PageData } from './$types';

  export let data:PageData;

	$:({ content, date, title } = data)

	$: published = new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })

	$:({params:{ slug }} = $page)
</script>

<SvelteSeo
  title={`${title} - Jacob Stordahl`}
	openGraph={{
		title: `${title} - Jacob Stordahl`,
    url: `https://stordahl.dev/writing/${slug}`,
    type: 'article',
    images: [
      {
        url: `https://stordahl.dev/api/og?title=${title}`,
        width: 1200,
        height: 630,
        alt: title,
      }
     ]
	}}
/>
<article>
  <h1>{ title }</h1>
  <p>Published {published}</p>
  <svelte:component this={content} />
</article>

<style>
	@media screen and (min-width: 900px){
		article {
			max-width: 900px;
			margin: auto;
		}
	}
</style>
