<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import AuthorSpan from '../../../lib/components/GPTInfoCard/AuthorSpan.svelte';
	import Tags from '../../../lib/components/Tags/Tags.svelte';
	import { BASE_OPENAI_GPT_URL } from '../../../constants';
	import { onMount } from 'svelte';
	import AlternativeList from '$lib/components/AlternativeList/AlternativeList.svelte';

	export let data: { gpt: GPTInfoType };
	const { gpt } = data;

	let machinePickedAlternatives: GPTInfoType[] = [];
	let humanPickedAlternatives: GPTInfoType[] = [];
	const {
		displayname,
		authorname,
		authorurl,
		tags,
		description,
		image,
		slug,
		humanPickedAlternatives: humanPickedAlternativeIds,
		curatorsNotes
	} = gpt;

	const getMachingPickedAlternatives = async () =>
		await fetch(`/api/v1/alternatives-to/${slug}?omit=${humanPickedAlternativeIds}`).then((res) =>
			res.json()
		);

	const getHumanPickedAlternatives = async () =>
		await fetch(`/api/v1/gpt?ids=${humanPickedAlternativeIds}`).then((res) => res.json());

	onMount(async () => {
		machinePickedAlternatives = await getMachingPickedAlternatives();
		humanPickedAlternatives = await getHumanPickedAlternatives();
	});
</script>

<div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
	<div
		class="md:col-span-4 p-8 rounded-xl bg-base-300 flex flex-col gap-2 md:flex-row-reverse items-center md:justify-between"
	>
		<div class="flex justify-center items-center h-44 w-44">
			<img src={image} alt={displayname} class="mask mask-circle w-full" />
		</div>

		<div class="flex flex-col justify-between">
			<div>
				<h1 class="text-4xl font-bold">{displayname}</h1>
				<AuthorSpan {authorname} {authorurl} />
			</div>
			<div class="mt-2 md:max-w-fit">
				{#if tags && tags.length > 0}
					<Tags size="sm" {tags} />
				{/if}
			</div>
		</div>
	</div>

	<a
		href="{BASE_OPENAI_GPT_URL}{slug}"
		class="btn btn-secondary md:col-span-3 btn-lg self-center"
		target="_blank"
		rel="noopener noreferrer"
	>
		Use {displayname}
		<i class="ph-bold ph-arrow-square-out" />
	</a>

	<div class="col-span-1 row-span-3">YouTube Short Placeholder</div>

	<div class="md:col-span-3 flex flex-col p-8 rounded-xl bg-base-300">
		<div>
			<h2 class="text-xl font-bold">Description</h2>
			<p>{description}</p>
		</div>
		{#if curatorsNotes}
			<div class="divider" />
			<div>
				<h2 class="text-xl font-bold">Curator's notes</h2>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				<p>{@html curatorsNotes}</p>
			</div>
		{/if}
	</div>

	<AlternativeList {humanPickedAlternatives} {machinePickedAlternatives} />

	<div class="md:col-span-4 flex gap-2 justify-end w-full">
		<a
			href="mailto:prompt-dress@vomkonstant.in"
			class="text-sm mt-32 btn btn-outline btn-error btn-xs font-light font-xs bottom-4 right-4"
			>Report an issue with this GPT.</a
		>
	</div>
</div>
