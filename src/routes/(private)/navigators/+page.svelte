<script lang="ts">
	import {
		DragDropMove,
		Navigator,
		Filter,
		Breadcrumb,
		AuraButton
	} from "$components";


	let isNav = true;


	interface ListItem {
		id: number;
		url: string;
	}


	let links: ListItem[] = [
		{ id: 1, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 2, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 3, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 4, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 5,	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 6, 	url: "hIttps://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 7, 	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 8, 	url: "https://lordicon.com/icons/wiredj/gradient?q=remove&i=185-trash-bin" },
		{ id: 9, 	url: "{https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
		{ id: 10,	url: "https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin" },
	];


	const nav = {
		active: 'Navegadores',
		actions: [
			{ name: 'Inicio', 		url: '/home' },
			{ name: 'Dashboard',	url: '/dashboard' },
		]
	}
</script>


<main class="space-y-3">
	<div class="flex items-center justify-between">
		<Breadcrumb {nav} />

		<div class="flex items-center gap-4">
			<AuraButton
				variant="p-0 w-7"
				onClick={() => console.log('searching...')}
			>
				<img
					src     = "/icons/plus-60.apng"
					alt     = "add"
					class   = 'w-7 h-7'
				>
			</AuraButton> 

			<Filter bind:isNav />
		</div>
	</div>

	<DragDropMove
		links			= {links}
		componentStyle	= {'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 sm:gap-2 md:gap-3 lg:gap-2 px-2 2xl:px-0'}
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
	</DragDropMove>
</main>
