<script lang="ts">
	import type { AuthorType } from '../../../types/gpt';

	export let author: AuthorType;
	const { name, url } = author;

	const removeHttp = (url: string): string => {
		const regex = /^(https?:\/\/)/;
		return url.replace(regex, '');
	};
</script>

{#if !name && !url}
	<span class="text-xs"></span>
{:else if !name}
	<a class="text-xs italic underline" href={url} rel="noopener" target="_blank"
		>- by {removeHttp(url)} <i class="ph-bold ph-arrow-square-out" /></a
	>
{:else if !url}
	<span class="text-xs italic">- by {name}</span>
{:else}
	<a class="text-xs italic underline" href={url} rel="noopener" target="_blank"
		>- by {name} <i class="ph-bold ph-arrow-square-out" /></a
	>
{/if}
