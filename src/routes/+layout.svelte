<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header/Header.svelte';
	import Footer from '../lib/components/Footer/Footer.svelte';
	import '@phosphor-icons/web/bold';
	import '@phosphor-icons/web/fill';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import _ from 'lodash';

	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<title>A curated List of custom GPTs | Amazing GPT</title>
	<script
		src="https://cdn.counter.dev/script.js"
		data-id="577cfaaf-19ed-4ba3-9a0d-62e8ddcebda3"
		data-utcoffset="2"
	></script>
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="description"
		content="Explore our extensive, hand-picked collection of custom GPTs, featuring diverse applications of OpenAI's technology for innovative AI solutions."
	/>
	<meta property="og:title" content="A curated List of custom GPTs | Amazing GPT" />
	<meta
		name="og:description"
		content="Explore our extensive, hand-picked collection of custom GPTs, featuring diverse applications of OpenAI's technology for innovative AI solutions."
	/>
	<meta property="og:image" content="https://i.imgur.com/tbcjBgL.png" />
	<meta property="og:url" content="https://amazing-gpt.com" />
	<meta name="twitter:image" content="https://i.imgur.com/ayX62Br.png" />
	<meta name="tags" content="gpt, list, curated, gpts, openai, ai" />
	<meta name="twitter:title" content="Curated list of custom GPTs" />
</svelte:head>

<Header />

<main class="container mx-auto">
	<slot />
</main>

<Footer />
