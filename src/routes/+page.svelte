<script lang="ts">
	import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

	import Navigator	from "../components/Navigator.svelte";
	import CardAdd		from "../components/CardAdd.svelte";
	import CubesIcon 	from "../icons/CubesIcon.svelte";
	import ListIcon 	from "../icons/ListIcon.svelte";

	let value: number = 0;
</script>


<div class="container mx-auto mt-5 px-2 2xl:px-0">
	<div class="flex items-center gap-3 mb-3">
		<input
			class		= "input text-sm variant-ghost-primary"
			title		= "Busca tu navegador"
			type		= "text"
			placeholder	= "Busca tu navegador"
		/>

		<select class="select rounded-3xl w-96 text-sm variant-ghost-primary">
			<option value="1">Option 1</option>
			<option value="2">Option 2</option>
			<option value="3">Option 3</option>
			<option value="4">Option 4</option>
			<option value="5">Option 5</option>
		</select>

		<RadioGroup background="variant-ghost-primary">
			<RadioItem bind:group={value} name="justify" value={0}>
				<CubesIcon />
			</RadioItem>

			<RadioItem bind:group={value} name="justify" value={1}>
				<ListIcon />
			</RadioItem>
		</RadioGroup>
	</div>

	<nav class="list-nav">
		<ul>
			{#each [1,2,3,4,5] as item }
				<li class="variant-glass-primary rounded-full card-hover">
					<a href="/sites">
						<img
							src		= "https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif"
							alt		= "img"
							class	= "rounded-full w-8 h-8"
						>
						<span class="flex-auto">Skeleton</span>
					</a>
				</li>
			{/each}

			<li>
				<CardAdd iconSize='w-7 h-7' style="h-12 rounded-full card-hover" />
			</li>	
		</ul>
	</nav>

	<!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5">

		{#each [1,2,3,4,6] as index}
			<Navigator
				url		= {'https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif'}
				name	= 'Navly'
			/>
		{/each}

		<CardAdd />
	</div> -->
</div>
