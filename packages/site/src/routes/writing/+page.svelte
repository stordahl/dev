<script lang="ts">
	import LargeListItem from '$lib/LargeListItem.svelte'
	import type { PageData } from './$types';
	
	export let data:PageData

	$:({ posts } = data)
</script>

<h1>writing</h1>
{#each posts as { meta:{ title, date }, path }, index}
		<LargeListItem {title} {index} href={path}/>
{/each}

<style>

</style>
