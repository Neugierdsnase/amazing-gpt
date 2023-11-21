<script lang="ts">
	import _ from 'lodash';
	import { filterStore } from '$lib/stores/filterStore';
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	export let tags: string[] = [];
	export let activeTags: string[] = [];

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
</script>

<ul class="flex gap-1 flex-wrap">
	{#each _.uniq([...activeTags, ...tags]) as tag (tag)}
		<li transition:fade animate:flip={{ duration: 350 }}>
			<button
				on:click={() => handleTagClick(tag)}
				class="badge badge-primary"
				class:badge-secondary={activeTags.includes(tag)}
			>
				{tag}
			</button>
		</li>{/each}
</ul>
