<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import AuthorSpan from '../../../lib/components/GPTInfoCard/AuthorSpan.svelte';
	import Tags from '../../../lib/components/Tags/Tags.svelte';
	import { BASE_OPENAI_GPT_URL } from '../../../constants';
	import { onMount } from 'svelte';
	import AlternativeList from '$lib/components/AlternativeList/AlternativeList.svelte';
	import Rating from '$lib/components/CuratorsRating/CuratorsRating.svelte';

	export let data: { gpt: GPTInfoType };
	let gpt: GPTInfoType = data.gpt;

	let machinePickedAlternativesPromise: Promise<GPTInfoType[] | undefined>;
	let humanPickedAlternativesPromise: Promise<GPTInfoType[] | undefined>;

	const getMachingPickedAlternatives = async (gpt: GPTInfoType) =>
		(
			await fetch(`/api/v1/alternatives-to/${gpt.slug}?omit=${gpt.humanPickedAlternatives}`).then(
				(res) => res.json()
			)
		).gpts;

	const getHumanPickedAlternatives = async (gpt: GPTInfoType) =>
		(await fetch(`/api/v1/gpts/${gpt.humanPickedAlternatives}`).then((res) => res.json())).gpts;

	onMount(() => {
		machinePickedAlternativesPromise = getMachingPickedAlternatives(gpt);
		humanPickedAlternativesPromise = getHumanPickedAlternatives(gpt);
	});

	$: {
		gpt = data.gpt;
		machinePickedAlternativesPromise = getMachingPickedAlternatives(gpt);
		humanPickedAlternativesPromise = getHumanPickedAlternatives(gpt);
	}
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
	<div
		class="md:col-span-4 p-8 rounded-xl bg-base-300 flex flex-col gap-2 md:flex-row-reverse items-center md:justify-between"
	>
		<div class="flex justify-center items-center h-44 w-44">
			<img src={gpt.image} alt={gpt.displayname} class="mask mask-circle w-full" />
		</div>

		<div class="flex flex-col justify-between">
			<div>
				<h1 class="text-4xl font-bold">{gpt.displayname}</h1>
				<AuthorSpan authorname={gpt.authorname} authorurl={gpt.authorurl} />
			</div>
			<div class="mt-2 md:max-w-fit">
				{#if gpt.tags && gpt.tags.length > 0}
					<Tags size="sm" tags={gpt.tags} />
				{/if}
			</div>
		</div>
	</div>

	<a
		href="{BASE_OPENAI_GPT_URL}{gpt.slug}"
		class="btn btn-secondary md:col-span-3 btn-lg self-center"
		target="_blank"
		rel="noopener noreferrer"
	>
		Use {gpt.displayname}
		<i class="ph-bold ph-arrow-square-out" />
	</a>

	<div class="col-span-1 row-span-3 flex justify-center items-center">
		{#if gpt.ytshorturl}
			<iframe
				width="315"
				height="560"
				src={gpt.ytshorturl.replace('/shorts/', '/embed/')}
				title="{gpt.displayname} video review"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
		{/if}
	</div>

	<div class="md:col-span-3 flex flex-col p-8 rounded-xl bg-base-300">
		<div>
			<h2 class="text-xl font-bold">Description</h2>
			<p>{gpt.description}</p>
		</div>
		{#if gpt.curatorsnotes}
			<div class="divider" />
			<div>
				<div class="flex justify-between">
					<h2 class="text-xl font-bold">Curator's notes</h2>
					{#if gpt.curatorsrating}
						<Rating rating={gpt.curatorsrating} />
					{/if}
				</div>

				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html gpt.curatorsnotes}</p>
			</div>
		{/if}
	</div>

	<AlternativeList {humanPickedAlternativesPromise} {machinePickedAlternativesPromise} />

	<div class="md:col-span-4 flex gap-2 justify-end w-full">
		<a
			href="mailto:prompt-dress@vomkonstant.in"
			class="text-sm mt-32 btn btn-outline btn-error btn-xs font-light font-xs bottom-4 right-4"
			>Report an issue with this GPT.</a
		>
	</div>
</div>
