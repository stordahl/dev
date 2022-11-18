<script lang="ts">
	import {onMount} from 'svelte'
	import {dev} from '$app/environment'
	import posthog from 'posthog-js'
	// import { sendPageVisitEvent } from '$lib/utils'

	onMount(() => {
		if(!dev && !!window){
			posthog.init('phc_SFf81Xbhjao1qmoDa3NZGj9i5tPoc4RhDlCWq7lbadE', { api_host: 'https://app.posthog.com' });
			// Posthog already sends PageView events, but I'm keeping this code around as a template for future events
			// sendPageVisitEvent();	
		}
	})
</script>
<header>
	<span>JACOB STORDAHL</span>
	<nav>
		<a data-sveltekit-prefetch href="/">home</a>
		<a data-sveltekit-prefetch href="/writing">writing</a>
	</nav>
</header>
<main>
	<slot/>
</main>
<footer>
 <div id="copyright">
    <span>© {new Date().getFullYear()} Jacob Stordahl | <a href="https://github.com/stordahl">github</a> | <a href="https://twitter.com/stordahl">twitter</a></span>
  </div>
</footer>

<style>
	header span {
    font-size: clamp(1.1rem, calc(1vw + 1rem), 1.35rem);
    font-family: var(--heading-family);
    color: var(--text-secondary);
  }

	nav {
		margin: 0;
    padding: 0;
    display: flex;
    gap: clamp(.5rem, 2vw, 30px);
	}

  a {
    text-decoration: none;
    display: block;
    font-size: clamp(1rem, calc(.3rem + 1vw), 1.2rem);
    font-family: var(--heading-family)
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: clamp(12px, 3vw, 30px) clamp(1.2rem, 3vw, 150px);
  }

	main {
		padding: 1rem;
    margin: auto;
    width: clamp(300px, calc(75vw + 5px), 1220px);
	}

	footer {
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 7vh;
  }

	footer * {
		font-size: 14px;
		font-family: var(--copy-family);
	}

  #copyright > span {
    color: var(--text-secondary);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 7px;
  }

  @media screen and (min-width: 400px) {
    header {
      flex-direction: row;
      align-items: center;
    }
  }
</style>
