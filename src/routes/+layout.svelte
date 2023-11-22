<script lang="ts">
	import '../app.css';
	import Header from '../lib/components/Header/Header.svelte';
	import Footer from '../lib/components/Footer/Footer.svelte';
	import '@phosphor-icons/web/bold';
	import '@phosphor-icons/web/fill';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	onMount(() => {
		themeChange(false);
	});
</script>

<svelte:head>
	<title>A curated List of custom GPTs</title>
	<script
		src="https://cdn.counter.dev/script.js"
		data-id="577cfaaf-19ed-4ba3-9a0d-62e8ddcebda3"
		data-utcoffset="2"
	></script>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="description" content="A curated list of amazing custom GPTs" />
	<meta property="og:title" content="GPT List" />
	<meta property="og:description" content="A curated list of amazing custom GPTs" />
	<!-- <meta property="og:image" content="https://gptlist.dev/og-image.png" /> -->
	<!-- <meta property="og:url" content="https://gptlist.dev" /> -->
	<!-- <meta name="twitter:image" content="https://gptlist.dev/og-image.png" /> -->
	<meta name="tags" content="gpt, list, curated, gpts, openai, ai" />
	<meta name="twitter:title" content="Curated list of custom GPTs" />
</svelte:head>

<Header />

<main class="container mx-auto">
	<slot />
</main>

<Footer />
