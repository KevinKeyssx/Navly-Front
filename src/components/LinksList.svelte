<script lang="ts">
	import { DeleteIcon } from "$icons";


    export let id : string;
</script>


<div class="variant-soft-tertiary rounded-lg card-hover py-2 px-4 flex">
	<a href="/sites" class="flex items-center space-x-2">
		<img
			src		= "https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif"
			alt		= "img"
			class	= "rounded-full w-8 h-8"
		>

		<div class="grid break-words">
			<div class="flex items-start justify-between">

				<span class="font-semibold break-all text-sky-500">Skeleton {id}</span>

				<button
					on:click	= {() => {}}
					class		= "hover:scale-110 mt-0.5"
				>
					<DeleteIcon />
				</button>
			</div>

			<a
				href="https://www.skeleton.com"
				class="text-[13px] text-white font-semibold underline break-all"
			>
				www.skeleton.com/fasdfas
			</a>
		</div>
	</a>
</div>
