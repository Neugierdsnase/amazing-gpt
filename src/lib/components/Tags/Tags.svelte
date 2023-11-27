<script lang="ts">
	import _ from 'lodash';
	import { filterStore } from '$lib/stores/filterStore';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	export let maxTags: number | undefined = undefined;
	export let tags: string[] = [];
	export let handleTagClick: (tag: string) => void = () => {};
	export let size: 'xs' | 'sm' | 'md' | 'lg' = 'md';
	// this is not to filter BY tags, but to filter tags themselves
	export let includeTagsFilter: boolean = false;

	let tagsFilter: string = '';

	$: activeTags = $filterStore.tags;

	$: combinedTags = _.uniq([
		...activeTags,
		...tags.filter((tag) => {
			return tagsFilter ? tag.includes(tagsFilter) : true;
		})
	]);

	$: tagsToDisplay = maxTags ? combinedTags.slice(0, maxTags) : combinedTags;

	const badgeSizes = {
		xs: 'badge-xs',
		sm: 'badge-sm',
		md: 'badge-md',
		lg: 'badge-lg'
	};

	let badgeSize = badgeSizes[size];
</script>

<ul class="flex gap-1 flex-wrap justify-center">
	{#each tagsToDisplay as tag (tag)}
		<li transition:fade animate:flip={{ duration: 350 }}>
			<button
				on:click={() => handleTagClick(tag)}
				class="badge badge-primary {badgeSize}"
				class:badge-secondary={activeTags.includes(tag)}
			>
				{tag}
			</button>
		</li>{/each}
	{#if includeTagsFilter}
		<li>
			<input
				type="text"
				placeholder="filter tags"
				bind:value={tagsFilter}
				class="input input-primary input-xs rounded-xl text-center max-w-[8rem]"
			/>
		</li>
	{/if}
</ul>
