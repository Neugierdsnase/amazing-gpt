<script lang="ts">
	import Tags from '$lib/components/Tags/Tags.svelte';
	import { filterStore } from '$lib/stores/filterStore';

	export let tags: string[] = [];
	export let activeTags: string[] = [];
</script>

<div class="navbar py-4 flex justify-between p-4 rounded-t-xl gap-8 bg-base-300 mt-4">
	<input
		bind:value={$filterStore.query}
		class="input input-primary input-bordered input-sm"
		type="text"
		placeholder="Search"
	/>

	<div class="flex justify-center grow gap-1 h-full bg-base-200 rounded-2xl py-[2px]">
		<Tags {activeTags} {tags} />
	</div>

	<div class="flex gap-4">
		<select bind:value={$filterStore.sort} class="select select-primary select-sm">
			<option value="added">Added</option>
			<option value="updated">Updated</option>
			<option value="name">Name</option>
		</select>

		<!-- TODO: Make custom toggle component here -->
		<input
			id="sort-descending"
			name="sort-descending"
			type="checkbox"
			class="toggle toggle-primary toggle-lg"
			bind:checked={$filterStore.desc}
		/>
	</div>
</div>
