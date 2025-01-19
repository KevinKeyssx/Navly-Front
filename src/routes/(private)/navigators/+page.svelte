<script lang="ts">
	import {
		// dndzone,
		type DndEvent
	} 					from "svelte-dnd-action";
	// import { flip }		from 'svelte/animate';

	import {
		DragDropMove,
		Navigator,
		Filter
	}							from "$components";
	import { RightArrowIcon }	from "$icons";
  import DragTest from "$components/DragTest.svelte";


	let isNav = true;
    // const flipDurationMs = 100;


	interface ListItem {
		id: number;
		url: string;
	}


	let links: ListItem[] = [
		{ id: 1, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 2, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 3, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 4, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 5, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 6, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 7, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 8, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 9, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 10,	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
	];


	// const handleConsider = ( env: CustomEvent<DndEvent<ListItem>> ) =>
	// 	links = env.detail.items;


	// const handleFinalize = ( env: CustomEvent<DndEvent<ListItem>> ) =>
	// 	links = env.detail.items;
</script>


<main class="space-y-3">
	<ol class="breadcrumb space-x-2 variant-glass-surface py-2 justify-center rounded-full items-center w-80">
		<li class="crumb">
			<a class="anchor" href="/home">Inicio</a>
		</li>

		<li class="crumb-separator" aria-hidden>
			<RightArrowIcon />
		</li>

		<li class="crumb">
			<a class="anchor" href="/dashboard">Dashboard</a>
		</li>

		<li class="crumb-separator" aria-hidden>
			<RightArrowIcon />
		</li>

		<li>Navegadores</li>
	</ol>

	<Filter bind:isNav />

	<!-- {#if isNav} -->
		<!-- <div
			class="space-y-1"
			use:dndzone={{ items: links, flipDurationMs, dropTargetStyle: {} }}
			on:consider={handleConsider}
			on:finalize={handleFinalize}
		>
			{#each links as item (item.id)}
				<div
					class="variant-glass-primary rounded-full card-hover py-2 px-4 flex"
					animate:flip={{ duration: flipDurationMs }}
				>
					<a href="/sites" class="flex items-center space-x-2">
						<img
							src		= "https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif"
							alt		= "img"
							class	= "rounded-full w-8 h-8"
						>

						<span class="flex-auto">Skeleton {item.id}</span>
					</a>
				</div>
			{/each}
		</div> -->

		<!-- <DragDropMove
			links			= {links}
			componentStyle	= {`${isNav ? 'space-y-1': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0'} `}
			animateStyle	= {`${isNav ? 'variant-glass-primary rounded-full card-hover py-2 px-4 flex' : ''}`}
		>
			{#if isNav}
				<a href="/sites" class="flex items-center space-x-2">
					<img
						src		= "https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif"
						alt		= "img"
						class	= "rounded-full w-8 h-8"
					>

					<span class="flex-auto">Skeleton </span>
				</a>
				{:else}
					<Navigator
						url		= {'https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif'}
						name	= {`Navly`}
					/>
			{/if}
		</DragDropMove> -->

	<DragTest />

	<!-- {:else} -->
		<!-- <div
			class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-2 md:gap-3 lg:gap-3 px-2 2xl:px-0"
			use:dndzone={{ items: links, flipDurationMs, dropTargetStyle: {} }}
			on:consider={handleConsider}
			on:finalize={handleFinalize}
		>
			{#each links as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }}>
					<Navigator
						url		= {'https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif'}
						name	= {`Navly ${item.id}`}
					/>
				</div>
			{/each}
		</div> -->
	<!-- {/if} -->
</main>
