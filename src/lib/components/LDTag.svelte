<script lang="ts">
	import { generateItemListSchema } from '../util';
	import type { GPTInfoType } from '../../types/gpt';

	export let gpts: GPTInfoType[];
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html generateItemListSchema(gpts)}
</svelte:head>
