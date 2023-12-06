<script lang="ts">
	export let authorname: string = '';
	export let authorurl: string = '';

	const removeHttp = (url: string): string => {
		const regex = /^(https?:\/\/)/;
		return url.replace(regex, '');
	};
</script>

{#if !authorname && !authorurl}
	<span class="text-xs"></span>
{:else if !authorname}
	<a class="text-xs italic underline" href={authorurl} rel="noopener" target="_blank"
		>- by {removeHttp(authorurl)} <i class="ph-bold ph-arrow-square-out" /></a
	>
{:else if !authorurl}
	<span class="text-xs italic">- by {authorname}</span>
{:else}
	<a class="text-xs italic underline" href={authorurl} rel="noopener" target="_blank"
		>- by {authorname} <i class="ph-bold ph-arrow-square-out" /></a
	>
{/if}
