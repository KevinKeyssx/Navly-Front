<script lang="ts">
import { flip } from 'svelte/animate'

	import {
		Accordion,
		AccordionItem,
	} from "@skeletonlabs/skeleton";
	import { dndzone, type DndEvent } from "svelte-dnd-action";


	import Links 	from "../../components/Links.svelte";
	import CardAdd 	from "../../components/CardAdd.svelte";
	import Filter	from "../../components/Filter.svelte";

	const flipDurationMs = 100;

	interface ListItem {
		id: number;
		url: string;
	}

	let links: ListItem[] = [
		{ id: 1, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 2, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 3, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 4, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 5, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 6, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" }
	];

	const handleConsider = ( env: CustomEvent<DndEvent<ListItem>> ) => {
		links = env.detail.items
	}

	const handleFinalize = ( env: CustomEvent<DndEvent<ListItem>> ) => {
		links = env.detail.items
	}
</script>

<Filter />

<Accordion spacing='space-y-2'>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
		<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
		<svelte:fragment slot="summary">Algo así se llama</svelte:fragment>
		<svelte:fragment slot="content">
			<!-- <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0">
				{#each [1,2,3,4,6] as index, i }
					<Links
						url		= {"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
						target	= {`target-${i}`}
					/>
				{/each}

				<CardAdd />
			</div> -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0"
				use:dndzone={{ items: links, flipDurationMs, dropTargetStyle: {} }}
				on:consider={handleConsider}
				on:finalize={handleFinalize}
			>
				{#each links as item (item.id)}
					<div animate:flip={{ duration: flipDurationMs }}>

						<Links url={item.url} target={`target-${item.id}`} />
					</div>
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
