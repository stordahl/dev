<script lang="ts">
	import SvelteSeo from 'svelte-seo'
	import LargeListItem from '$lib/LargeListItem.svelte'
	import type { PageData } from './$types'
	
	export let data:PageData

	$:({ posts } = data)
</script>

<SvelteSeo
	title="Writing - Jacob Stordahl"
	openGraph={{
		title: "Writing - Jacob Stordahl",
    url: `https://stordahl.dev/writing`,
    type: 'article',
    images: [
      {
        url: `https://stordahl.dev/api/og?title=writing`,
        width: 1200,
        height: 630,
        alt: "Writing - Jacob Stordahl",
      }
     ]
	}}
/>

<h1>writing</h1>
{#each posts as { meta:{ title, date }, path }, index}
		<LargeListItem {title} {index} href={path}/>
{/each}

