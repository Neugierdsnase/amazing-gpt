<script lang="ts">
	import { onMount } from 'svelte';
	import { elasticOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let rating: number;

	let animatedRating = tweened(0.0, {
		duration: 2200,
		easing: elasticOut
	});

	onMount(() => {
		animatedRating.set(Number(rating));
	});
</script>

<div
	style="background: linear-gradient(90deg,rgba(253,224,71,1)  0%, rgba(253,224,71,1) {$animatedRating *
		13.6}%, oklch(var(--b1)) {$animatedRating * 14.2}%, oklch(var(--b1)) 100%);"
	class="relative bg-yellow-300 flex text-md text-base-100 items-center px-2 py-1 rounded-lg overflow-hidden border-yellow-300 border-2"
>
	<i class="ph-fill ph-star" />
	<i class="ph-fill ph-star" />
	<i class="ph-fill ph-star" />
	<i class="ph-fill ph-star" />
	<i class="ph-fill ph-star" />
	<span class="text-xs ml-2 mt-1 text-yellow-300"><b>{rating}</b>/5</span>
</div>
