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

<Header />
<main class="container mx-auto">
	<slot />
</main>
<Footer />
