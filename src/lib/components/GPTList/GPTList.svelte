<script lang="ts">
	import { flip } from 'svelte/animate';
	import type { GPTInfoType } from '../../../types/gpt';
	import { fade } from 'svelte/transition';
	import GPTInfoCard from '../GPTInfoCard/GPTInfoCard.svelte';

	export let items: GPTInfoType[] = [];
</script>

<div class="p-4 bg-base-200 rounded-b-2xl min-h-screen">
	<ul class="flex flex-wrap gap-4 justify-around">
		{#each items as item (item.id)}
			<li
				transition:fade={{ duration: 200 }}
				animate:flip={{ duration: 350 }}
				class="max-w-lg min-w-sm h-64"
			>
				<GPTInfoCard gptInfo={item} />
			</li>
		{/each}
	</ul>
</div>
