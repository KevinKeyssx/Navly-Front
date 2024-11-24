<script lang="ts">
	import { Accordion, AccordionItem, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

	import Links 		from "../../components/Links.svelte";
	import CardAdd 		from "../../components/CardAdd.svelte";
	import CubesIcon 	from "../../icons/CubesIcon.svelte";
	import ListIcon 	from "../../icons/ListIcon.svelte";

	let value: number = 0;
</script>

<div class="container mx-auto mt-5">

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


	<Accordion>
		<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary">Algo así se llama</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0">
					{#each [1,2,3,4,6] as index, i }
						<Links
							url={"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
							target= {`target-${i}`}
						/>
					{/each}

					<CardAdd />
				</div>
			</svelte:fragment>
		</AccordionItem>
	
		<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
			<svelte:fragment slot="summary">Otro Sitio</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-3 md:gap-4 lg:gap-3 px-2 2xl:px-0">
					{#each [1,2,3,4] as index, i }
						<Links
							url={"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
							target= {`target-${i}`}
						/>
					{/each}

					<CardAdd />
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
