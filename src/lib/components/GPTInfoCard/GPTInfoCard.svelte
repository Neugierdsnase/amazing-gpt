<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import AuthorSpan from './AuthorSpan.svelte';
	import { GPT_PATH } from '../../../constants';

	export let element: string = 'article';
	export let gptInfo: GPTInfoType | undefined = undefined;
	const { authorname, authorurl } = gptInfo ?? {};
</script>

{#if gptInfo}
	<svelte:element
		this={element ?? 'article'}
		class="grid grid-cols-6 grid-rows-3 bg-primary/10 gap-2 custom-glass rounded-xl p-4 shadow-xl backdrop-filter backdrop-blur-md"
	>
		<div class="flex justify-center items-center col-start-1 p-4 row-start-1 col-span-2 row-span-3">
			<img
				src={gptInfo.image}
				alt={gptInfo.displayname}
				class="mask mask-circle w-full"
				loading="lazy"
			/>
		</div>

		<div class="row-start-1 row-span-1 col-start-3 col-span-3 text-xl">
			<a href="{GPT_PATH}/{gptInfo.slug}" class="font-bold line-clamp-1 leading-1">
				<h2 class="font-bold line-clamp-1 leading-1">
					{gptInfo.displayname}
				</h2>
			</a>
			<AuthorSpan {authorname} {authorurl} />
		</div>

		{#if gptInfo.ytshorturl}
			<a
				href={gptInfo.ytshorturl}
				class="flex justify-end tooltip tooltip-left"
				data-tip="Video Review Available"
			>
				<i class="ph-fill ph-youtube-logo text-[#FF0000] text-3xl" />
			</a>
		{/if}

		<p class="row-start-2 row-span-1 col-start-3 col-span-4 pl-4 line-clamp-2 mt-2">
			{gptInfo.description}
		</p>

		<div class="col-start-6 row-start-3 align-baseline flex justify-end items-end">
			<a href="{GPT_PATH}/{gptInfo.slug}" class="btn btn-primary">Check out</a>
		</div>
	</svelte:element>
{/if}
