<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import Tags from '../Tags/Tags.svelte';

	export let element: string = 'article';
	export let gptInfo: GPTInfoType;
</script>

<svelte:element
	this={element ?? 'article'}
	class="grid grid-cols-6 grid-rows-3 bg-primary/10 custom-glass rounded-xl p-4 shadow-xl backdrop-filter backdrop-blur-md"
>
	<div class="flex justify-center items-center col-start-1 p-4 row-start-1 col-span-2 row-span-3">
		<img src={gptInfo.image} alt={gptInfo.name} class="mask mask-circle w-full" />
	</div>

	<div class="row-start-1 row-span-1 col-start-3 col-span-4 text-xl">
		<h2 class="font-bold line-clamp-1 leading-none">
			{gptInfo.name}
		</h2>
		<a class="text-xs italic" href={gptInfo.author.url} rel="noopener" target="_blank"
			>- by {gptInfo.author.name}</a
		>
	</div>
	<p class="row-start-2 row-span-1 col-start-3 col-span-4 pl-4 line-clamp-2 mt-2">
		{gptInfo.description}
	</p>

	<div class="overflow-hidden row-start-3 col-span-3 flex items-end col-start-3">
		<Tags maxTags={2} tags={gptInfo.tags} />
	</div>

	<div class="col-start-6 row-start-3 align-baseline flex justify-end items-end">
		<a rel="noopener" target="_blank" href={gptInfo.url} class="btn btn-primary"
			>Use <i class="ph-bold ph-arrow-square-out" /></a
		>
	</div>
</svelte:element>
