<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';

	export let humanPickedAlternatives: GPTInfoType[] | undefined;
	export let machinePickedAlternatives: GPTInfoType[] | undefined;
</script>

{#if humanPickedAlternatives && machinePickedAlternatives && humanPickedAlternatives.length && machinePickedAlternatives.length}
	<div class="md:col-span-3 join join-vertical md:join-horizontal p-4 bg-base-300">
		<div class="join-item grow justify-between p-4">
			<h2 class="font-bold">Human Picked Alternatives</h2>
			<ul class="flex flex-col md:flex-row gap-2">
				{#each humanPickedAlternatives as gpt}
					<li class="flex-grow">
						<a href="/gpt/{gpt.slug}" class="btn btn-secondary btn-sm w-full">
							{gpt.displayname}
						</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="join-item grow justify-between p-4">
			<h2 class="font-bold">Machine Picked Alternatives</h2>
			<ul class="flex flex-col md:flex-row gap-2">
				{#each machinePickedAlternatives as gpt}
					<li class="flex-grow">
						<a href="/gpt/{gpt.slug}" class="btn btn-secondary btn-sm w-full">
							{gpt.displayname}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{:else if (humanPickedAlternatives && humanPickedAlternatives.length) || (machinePickedAlternatives && machinePickedAlternatives.length)}
	<div class="md:col-span-3 p-4 bg-base-300">
		<h2 class="font-bold">
			{humanPickedAlternatives && humanPickedAlternatives.length
				? 'Human Picked Alternatives'
				: 'Machine Picked Alternatives'}
		</h2>
		<ul class="flex flex-col md:flex-row gap-2">
			{#each [...(humanPickedAlternatives ?? []), ...(machinePickedAlternatives ?? [])] as gpt}
				<li class="flex-grow">
					<a href="/gpt/{gpt.slug}" class="btn btn-secondary btn-sm w-full">
						{gpt.displayname}
					</a>
				</li>
			{/each}
		</ul>
	</div>
{/if}
