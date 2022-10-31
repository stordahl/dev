<script lang="ts">
	type ButtonType = 'button' | 'link'
	export let text = 'Submit'
	export let type:ButtonType = 'button'
	// Link only props
	export let href:string
	export let newTab = false
</script>

{#if !!href && type === 'link'}
	<a 
		href={href} 
		target={newTab ? "_blank" : null}
	>{text}</a>
{:else}
	<button on:click>{text}</button>
{/if}

<style></style>
