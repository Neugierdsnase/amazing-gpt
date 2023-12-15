<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import PreviewCard from './PreviewCard.svelte';

	export let humanPickedAlternativesPromise: Promise<GPTInfoType[] | undefined>;
	export let machinePickedAlternativesPromise: Promise<GPTInfoType[] | undefined>;
</script>

<div class="md:col-span-3 join join-vertical md:join-horizontal p-4 bg-base-300">
	{#await humanPickedAlternativesPromise}
		<p>Loading...</p>
	{:then humanPickedAlternatives}
		{#if humanPickedAlternatives && humanPickedAlternatives.length}
			<div class="grow">
				<h2 class="font-bold mb-2">Human Picked Alternatives</h2>
				<ul class="flex flex-col md:flex-row gap-2">
					{#each humanPickedAlternatives as gpt}
						<li>
							<PreviewCard {gpt} />
						</li>
					{/each}
				</ul>
			</div>
		{:else}
			<!-- TODO: Show ad if no alternatives -->
		{/if}
	{:catch}
		<!-- TODO: Show ad if no alternatives -->
	{/await}

	{#await machinePickedAlternativesPromise}
		<p>Loading...</p>
	{:then machinePickedAlternatives}
		{#if machinePickedAlternatives && machinePickedAlternatives.length}
			<div class="grow">
				<h2 class="font-bold mb-2">Machine Picked Alternatives</h2>
				<ul class="flex flex-col md:flex-row gap-2">
					{#each machinePickedAlternatives as gpt}
						<li>
							<PreviewCard {gpt} />
						</li>
					{/each}
				</ul>
			</div>
		{:else}
			<!-- TODO: Show ad if no alternatives -->
		{/if}
	{:catch}
		<!-- TODO: Show ad if no alternatives -->
	{/await}
</div>
