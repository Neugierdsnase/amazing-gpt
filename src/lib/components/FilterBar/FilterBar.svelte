<script lang="ts">
	import Tags from '$lib/components/Tags/Tags.svelte';
	import { filterStore } from '$lib/stores/filterStore';

	export let tags: string[] = [];

	const handleSortDirectionChange = () => {
		filterStore.update((store) => {
			return { ...store, desc: !store.desc };
		});
	};
</script>

<div class="flex flex-wrap justify-around gap-8 py-4 p-4 rounded-t-xl bg-base-300 mt-4">
	<input
		bind:value={$filterStore.query}
		class="input input-primary input-bordered input-sm"
		type="text"
		placeholder="Search"
	/>

	<div class="flex justify-center grow gap-1 h-full bg-base-200 rounded-2xl py-[2px]">
		<Tags {tags} />
	</div>

	<div class="flex gap-4">
		<select bind:value={$filterStore.sort} class="select select-primary select-sm">
			<option value="added">Added</option>
			<option value="updated">Updated</option>
			<option value="name">Name</option>
		</select>

		<button
			id="sort-descending"
			name="sort-descending"
			on:click={handleSortDirectionChange}
			class="btn btn-ghost btn-sm"
		>
			<i
				class="ph-bold ph-caret-down transition-transform duration-300"
				class:rotate-180={$filterStore.desc}
			/>
		</button>
	</div>
</div>
