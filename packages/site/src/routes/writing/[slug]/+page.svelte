<script lang="ts">
	import type { PageData } from './$types';

  export let data:PageData;

	$:({ content, date, title } = data)

	$: published = new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  })
</script>

<article>
  <h1>{ title }</h1>
  <p>Published {published}</p>
  <svelte:component this={content} />
</article>

<style>
	article {
		
	}
</style>
