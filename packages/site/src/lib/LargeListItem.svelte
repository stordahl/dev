<script lang="ts">
	export let href:string
	export let title:string
	export let index:number

	$: incrementedIndex = index + 1
</script>

<article class="list-item">
	<a href={href}>
		<span>{incrementedIndex}</span>
		<h2>{title}</h2>
	</a> 
</article>

<style>
	a:hover {
    text-decoration: unset;
  }
  article {
    background-color: var(--bg);
    border-top: 2px solid var(--text-primary);
    padding: 2.5rem clamp(10px, calc(10px + 2vw), 60px);
    flex-wrap: wrap;
  }
	.list-item a {
	  display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
	}
  .list-item a:hover { border-bottom: none; }
  .list-item a:hover h2 { 
    text-decoration: underline; 
    cursor: pointer;
  }
  .list-item a > span {
    position: absolute;
    font-family: var(--heading-family);
    font-size: 120px;
    color: var(--text-secondary);
    z-index: 0;
    opacity: 10%;
    /* line-height: 0.5; */
  }
  .list-item h2 {
    font-family: var(--copy-family);
    z-index: 1;
    color: var(--text-secondary);
    font-weight: 400;
    margin: 0;
  }

  @media screen and (min-width: 900px) {
    .list-item {
      grid-template-columns: max-content minmax(200px, 400px);
    }
  }
</style>
