<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	import AuthorSpan from '../../../lib/components/GPTInfoCard/AuthorSpan.svelte';
	import Tags from '../../../lib/components/Tags/Tags.svelte';
	import { BASE_OPENAI_GPT_URL } from '../../../constants';

	export let data: { gpt: GPTInfoType };
	const { gpt } = data;
	const { displayname, authorname, authorurl, tags, description, image, slug } = gpt;
</script>

<div class="flex flex-col gap-8 min-h-screen items-stretch my-12 pb-12">
	<div
		class="p-4 md:p-12 flex flex-wrap gap-4 items-center flex-col md:flex-row-reverse justify-between rounded-xl bg-base-300"
	>
		<div class="flex justify-center items-center h-44 w-44">
			<img src={image} alt={displayname} class="mask mask-circle w-full" />
		</div>

		<div>
			<h1 class="text-4xl font-bold">{displayname}</h1>
			<AuthorSpan {authorname} {authorurl} />
			<Tags size="sm" {tags} />
		</div>
	</div>

	<a
		href="{BASE_OPENAI_GPT_URL}{slug}"
		class="btn btn-secondary md:w-1/3 btn-lg self-center"
		target="_blank"
		rel="noopener noreferrer"
	>
		Use
		<i class="ph-bold ph-arrow-square-out" />
	</a>

	<div class="p-12 rounded-xl bg-base-300">
		<h2 class="text-xl font-bold">Description</h2>
		<div class="divider" />
		<p>{description}</p>

		<!-- TODO: Curator's notes -->
	</div>
	<a
		href="mailto:prompt-dress@vomkonstant.in"
		class="text-sm mt-32 btn btn-outline btn-error btn-xs font-light font-xs absolute bottom-4 right-4"
		>Report an issue with this GPT.</a
	>
</div>
