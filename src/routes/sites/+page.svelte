<script lang="ts">
	import { flip } from 'svelte/animate'

	import {
		Accordion,
		AccordionItem,
	} 					from "@skeletonlabs/skeleton";
	import {
		dndzone,
		type DndEvent
	} 					from "svelte-dnd-action";

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
		{ id: 6, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 7, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 8, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 9, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 10, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
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
	<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
		<svelte:fragment slot="lead">🚀</svelte:fragment>

		<svelte:fragment slot="summary">
			<div class="flex justify-between items-center">
				Algo así se llama

				<button
					class		= "btn p-0"
					on:click	= {(event) => {
						event.stopPropagation();
					}}
				>
					<img
						src     = "/icons/plus-60.apng"
						alt     = "add"
						class   = 'w-7 h-7'
					>
				</button>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="content">
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

				<!-- <CardAdd /> -->
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
