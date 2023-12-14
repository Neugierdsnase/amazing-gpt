<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import PreviewCard from './PreviewCard.svelte';

	export let humanPickedAlternatives: GPTInfoType[] | undefined;
	export let machinePickedAlternatives: GPTInfoType[] | undefined;
</script>

{#if humanPickedAlternatives && machinePickedAlternatives && humanPickedAlternatives.length && machinePickedAlternatives.length}
	<div class="md:col-span-3 join join-vertical md:join-horizontal p-4 bg-base-300">
		<div class="join-item grow p-4">
			<h2 class="font-bold mb-2">Human Picked Alternatives</h2>
			<ul class="flex flex-col md:flex-row gap-2">
				{#each humanPickedAlternatives as gpt}
					<li>
						<PreviewCard {gpt} />
					</li>
				{/each}
			</ul>
		</div>
		<div class="join-item grow p-4">
			<h2 class="font-bold mb-2">Machine Picked Alternatives</h2>
			<ul class="flex flex-col md:flex-row gap-2">
				{#each machinePickedAlternatives as gpt}
					<li>
						<PreviewCard {gpt} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
{:else if (humanPickedAlternatives && humanPickedAlternatives.length) || (machinePickedAlternatives && machinePickedAlternatives.length)}
	<div class="md:col-span-3 p-4 bg-base-300">
		<h2 class="font-bold mb-2">
			{humanPickedAlternatives && humanPickedAlternatives.length
				? 'Human Picked Alternatives'
				: 'Machine Picked Alternatives'}
		</h2>
		<ul class="flex flex-col md:flex-row gap-2">
			{#each [...(humanPickedAlternatives ?? []), ...(machinePickedAlternatives ?? [])] as gpt}
				<li>
					<PreviewCard {gpt} />
				</li>
			{/each}
		</ul>
	</div>
{/if}
