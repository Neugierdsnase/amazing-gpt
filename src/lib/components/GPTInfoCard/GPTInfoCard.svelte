<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';

	export let element: string = 'article';
	export let gptInfo: GPTInfoType;
</script>

<svelte:element this={element ?? 'article'} class="card card-side glass w-96 bg-base-100 shadow-xl">
	<figure class="pl-4">
		<img src={gptInfo.image} alt={gptInfo.name} class="mask mask-decagon h-44 w-44 bg-red-400" />
	</figure>
	<div class="card-body flex gap-2 flex-nowrap">
		<h2 class="card-title">{gptInfo.name}</h2>
		<p>{gptInfo.description}</p>
		<div class="card-actions justify-end">
			<a rel="noopener" target="_blank" href={gptInfo.url} class="btn btn-primary"
				>Use <i class="ph-bold ph-arrow-square-out" /></a
			>
		</div>
	</div>
</svelte:element>
