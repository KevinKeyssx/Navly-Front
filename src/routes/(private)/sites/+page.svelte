<script lang="ts">
	import {
		dndzone,
		type DndEvent
	}					from "svelte-dnd-action";
	import { flip }		from 'svelte/animate'

	import { Accordion, AccordionItem  } from "@skeletonlabs/skeleton";

	import { Links, Filter }	from "$components";
	import { RightArrowIcon }	from '$icons';


	const flipDurationMs = 100;
	let isNav = true;

	interface ListItem {
		id: number;
		url: string;
	}



	interface GroupedLinks {
		[id: string]: ListItem[];
	}

	let groupedLinks: GroupedLinks = {
		id1: [
			{ id: 1, url: "https://example.com/icon1" },
			{ id: 2, url: "https://example.com/icon2" }
		],
		id2: [
			{ id: 3, url: "https://example.com/icon3" },
			{ id: 4, url: "https://example.com/icon4" }
		],
		id3: [
			{ id: 5, url: "https://example.com/icon5" },
			{ id: 6, url: "https://example.com/icon6" }
		]
	};


	const handleConsiderPro = (env: CustomEvent<DndEvent<ListItem>>) => {
		const { items, info } = env.detail;
		console.log("🚀 ~ items:", items)
		console.log("🚀 ~ info:", info)

		const sourceListId = info?.id; // Verifica que source exista
		if (sourceListId && groupedLinks[sourceListId]) {
			groupedLinks[sourceListId] = items;
		}
	};

	// Maneja los cambios al finalizar
	const handleFinalizePro = (env: CustomEvent<DndEvent<ListItem>>) => {
		const { items, info } = env.detail;
		console.log("🚀 ~ FINAL items:", items)
		console.log("🚀 ~ FINALinfo:", info)
		const sourceListId = info?.id;
		const targetListId = info.trigger; // Verifica que destination exista

		if (sourceListId && targetListId) {
			if (sourceListId !== targetListId) {
				// Actualiza ambas listas si el elemento se movió entre listas
				groupedLinks[sourceListId] = items;
				groupedLinks[targetListId] = items;
			} else {
				// Actualiza solo la lista de origen si el movimiento fue interno
				groupedLinks[sourceListId] = items;
			}
		}
	};

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
	let links2: ListItem[] = [
		{ id: 11, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 12, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 13, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 14, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 15, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 16, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 17, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 18, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 19, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 20, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
	];
	let links3: ListItem[] = [
		{ id: 21, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 22, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 23, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 24, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 25, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 26, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 27, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 28, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 29, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 30, url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
	];

	const handleConsider = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links = env.detail.items;
	const handleFinalize = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links = env.detail.items;


	const handleConsider2 = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links2 = env.detail.items;
	const handleFinalize2 = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links2 = env.detail.items;


	const handleConsider3 = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links3 = env.detail.items;
	const handleFinalize3 = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links3 = env.detail.items;
</script>

<main class="space-y-2">

	<ol class="breadcrumb space-x-2 variant-glass-surface py-2 justify-center rounded-full items-center w-[60%] sm:w-[25rem]">
		<li class="crumb"><a class="anchor" href="/home">Inicio</a></li>
		<li class="crumb-separator" aria-hidden>
			<RightArrowIcon />
		</li>
		<li class="crumb"><a class="anchor" href="/dashboard">Dashboard</a></li>
		<li class="crumb-separator" aria-hidden>
			<RightArrowIcon />
		</li>
		<li class="crumb"><a class="anchor" href="/navigators">Navegadores</a></li>
		<li class="crumb-separator" aria-hidden>
			<RightArrowIcon />
		</li>
		<li>Sitios</li>
	</ol>

	<Filter bind:isNav />

	<Accordion spacing='space-y-2'>
		<AccordionItem open regionControl="variant-glass-primary" padding='py-2 px-4' rounded="rounded-full">
			<svelte:fragment slot="lead">🚀</svelte:fragment>

			<svelte:fragment slot="summary">
				<div class="flex justify-between items-center">
					Algo así se llama
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
				</div>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open regionControl="variant-glass-primary" padding='py-2 px-4' rounded="rounded-full">
			<svelte:fragment slot="lead">🚀</svelte:fragment>

			<svelte:fragment slot="summary">
				<div class="flex justify-between items-center">
					Algo así se llama
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
				</div>
			</svelte:fragment>
		</AccordionItem>
		<AccordionItem open regionControl="variant-glass-primary" padding='py-2 px-4' rounded="rounded-full">
			<svelte:fragment slot="lead">🚀</svelte:fragment>

			<svelte:fragment slot="summary">
				<div class="flex justify-between items-center">
					Algo así se llama
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
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>


	<!-- {#each Object.entries(groupedLinks) as [listId, items]}
		<div>
			<h3>{listId}</h3>
			<div
				class="dnd-container"
				use:dndzone={{ items, flipDurationMs: 150, dropTargetStyle: {} }}
				id={listId}
				on:consider={handleConsiderPro}
				on:finalize={handleFinalizePro}
			>
				{#each items as item (item.id)}
					<div>{item.url}</div>
				{/each}
			</div>
		</div>
	{/each} -->

	<!-- <div class="variant-glass-primary p-5 space-y-3 rounded-lg">
		<header class="flex">
			<span>🚀</span>

			<p class="flex justify-between items-center">
				Algo así se llama
			</p>
		</header>

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

		</div>
	</div>

	<div class="variant-glass-primary p-5 space-y-3 rounded-lg">
		<header class="flex">
			<span>🚀</span>

			<p class="flex justify-between items-center">
				Algo así se llama
			</p>
		</header>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0"
			use:dndzone={{ items: links, flipDurationMs, dropTargetStyle: {} }}
			on:consider={handleConsider2}
			on:finalize={handleFinalize2}
		>
			{#each links2 as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }}>
					<Links url={item.url} target={`target-${item.id}`} />
				</div>
			{/each}

		</div>
	</div>

	<div class="variant-glass-primary p-5 space-y-3 rounded-lg">
		<header class="flex">
			<span>🚀</span>

			<p class="flex justify-between items-center">
				Algo así se llama
			</p>
		</header>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0"
			use:dndzone={{ items: links, flipDurationMs, dropTargetStyle: {} }}
			on:consider={handleConsider3}
			on:finalize={handleFinalize3}
		>
			{#each links3 as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }}>
					<Links url={item.url} target={`target-${item.id}`} />
				</div>
			{/each}

		</div>
	</div> -->
</main>


<!-- <button
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
</button> -->