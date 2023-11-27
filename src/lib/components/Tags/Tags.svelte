<script lang="ts">
	import _ from 'lodash';
	import { filterStore } from '$lib/stores/filterStore';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	export let maxTags: number | undefined = undefined;
	export let tags: string[] = [];
	// this is not to filter BY tags, but to filter tags themselves
	export let includeTagsFilter: boolean = false;

	let tagsFilter: string = '';

	$: activeTags = $filterStore.tags;

	const handleTagClick = (tag: string) => {
		filterStore.update((store) => {
			if (store.tags.includes(tag)) {
				store.tags = store.tags.filter((t) => t !== tag);
			} else {
				store.tags.push(tag);
			}
			return store;
		});
	};

	$: combinedTags = _.uniq([
		...activeTags,
		...tags.filter((tag) => {
			return tagsFilter ? tag.includes(tagsFilter) : true;
		})
	]);

	$: tagsToDisplay = maxTags ? combinedTags.slice(0, maxTags) : combinedTags;
</script>

<ul class="flex gap-1 flex-wrap justify-center">
	{#each tagsToDisplay as tag (tag)}
		<li transition:fade animate:flip={{ duration: 350 }}>
			<button
				on:click={() => handleTagClick(tag)}
				class="badge badge-primary"
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
				class="input input-primary input-xs text-center max-w-[8rem]"
			/>
		</li>
	{/if}
</ul>
