<script lang="ts">
	import type { GPTInfoType } from '../../../types/gpt';
	export let gpt: GPTInfoType;
</script>

<a
	href="/gpt/{gpt.slug}"
	class="flex flex-col items-center px-8 p-4 gap-2 max-w-fit bg-base-100 rounded-xl"
>
	<div class="flex justify-center items-center h-20 w-20">
		<img src={gpt.image} alt={gpt.displayname} class="mask mask-circle w-full" />
	</div>

	<h3 class="font-bold text-sm text-center">{gpt.displayname}</h3>
</a>
