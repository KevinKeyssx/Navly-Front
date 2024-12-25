<script lang="ts">
	import {
		Accordion,
		AccordionItem,
	} from "@skeletonlabs/skeleton";

	import Links 	from "../../components/Links.svelte";
	import CardAdd 	from "../../components/CardAdd.svelte";
	import Filter	from "../../components/Filter.svelte";
</script>

<Filter />

<Accordion spacing='space-y-2'>
	<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
		<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
		<svelte:fragment slot="summary">Algo así se llama</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0">
				{#each [1,2,3,4,6] as index, i }
					<Links
						url		= {"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
						target	= {`target-${i}`}
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
