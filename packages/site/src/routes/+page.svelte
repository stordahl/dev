<script lang="ts">
	import SvelteSeo from 'svelte-seo'
</script>


<SvelteSeo
	title="Jacob Stordahl"
	openGraph={{
		title: "Jacob Stordahl",
    url: `https://stordahl.dev`,
    type: 'article',
    images: [
      {
        url: `https://stordahl.dev/api/og?title=Hi, I'm Jacob.`,
        width: 1200,
        height: 630,
        alt: "Jacob Stordahl",
      }
     ]
	}}
/>


<section>
  <h1>Hi, I'm Jacob.</h1>
  <p>
    I'm a Software Engineer, obsessed with building tools and infrastructure that enable front-end teams to be productive. 
    Currently, I'm building radical ecommerce user experiences at <a class="out" href="http://stylitics.com">Stylitics.</a> Check out some of my open source work <a href="https://github.com/stordahl">here</a>.
    You can reach me on <a class="out" href="https://twitter.com/stordahl_">twitter</a> or shoot me an <a class="out" href="mailto:jacob@stordahl.dev">email</a>.
    <span class="strike">I'm currently available for hire.</span>
  </p>

</section>


<style>
  section {
    margin: 3rem auto;
    max-width: clamp(200px, calc(2rem + 80vw), 900px);
   }

  h1 {
    font-size: clamp(30px, calc(5vw + 1rem), 70px);
    text-align: left;
  }

  p {
    font-size: clamp(15px, calc(2vw + 1rem), 50px);
  }
</style>
