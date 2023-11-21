<script lang="ts">
	import { flip } from 'svelte/animate';
	import type { GPTInfoType } from '../../../types/gpt';
	import { fade } from 'svelte/transition';
	import GPTInfoCard from '../GPTInfoCard/GPTInfoCard.svelte';

	export let items: GPTInfoType[] = [];
</script>

<div class="p-4 bg-base-200 rounded-b-2xl">
	<ul class="flex flex-wrap">
		{#each items as item (item.id)}
			<li transition:fade animate:flip><GPTInfoCard gptInfo={item} /></li>
		{/each}
	</ul>
</div>
