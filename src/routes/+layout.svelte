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
	<script
		src="https://cdn.counter.dev/script.js"
		data-id="577cfaaf-19ed-4ba3-9a0d-62e8ddcebda3"
		data-utcoffset="2"
	></script>
</svelte:head>

<Header />
<main class="container mx-auto">
	<slot />
</main>
<Footer />
