<script lang="ts">
	import { dndzone }  from "svelte-dnd-action";
    import { flip }     from "svelte/animate";
    import { slide }    from "svelte/transition";

	import {
		Filter,
		Breadcrumb,
		Links,
		SearchInPage,
		LinksList,
		AuraButton,
		GroupSites
	} from "$components";


	let isNav		: boolean 		= true;
	let searchValue	: string 		= "";
    let openGroups  : Set<string> 	= new Set();
	let editingGroupId: string | null = null;

	const nav = {
		active	: 'Sitios',
		actions	: [
			{ name: 'Inicio', 		url: '/home' },
			{ name: 'Dashboard', 	url: '/dashboard' },
			{ name: 'Navegadores', 	url: '/navigators' },
		]
	}


    type CardType = {
        id          : string;
        title       : string;
        description : string;
        imageUrl    : string;
    };


    type GroupType = {
        id      : string;
        name    : string;
        cards   : CardType[];
    };


    let groups: GroupType[] = [
        {
            id      : "group0",
            name    : "Sin agrupar",
            cards   : [
                {
                    id: "0",
                    title: "Task 1",
                    description: "Complete the first task",
                    imageUrl: "https://picsum.photos/200/150?random=1"
                },
                {
                    id: "-1",
                    title: "Task 2",
                    description: "Review the documentation",
                    imageUrl: "https://picsum.photos/200/150?random=2"
                },
            ]
        },
        {
            id: "group1",
            name: "To Do",
            cards: [
                {
                    id: "1",
                    title: "Task 1",
                    description: "Complete the first task",
                    imageUrl: "https://picsum.photos/200/150?random=1"
                },
                {
                    id: "2",
                    title: "Task 2",
                    description: "Review the documentation",
                    imageUrl: "https://picsum.photos/200/150?random=2"
                },
            ]
        },
        {
            id: "group2",
            name: "In Progress",
            cards: [
                {
                    id: "3",
                    title: "Task 3",
                    description: "Working on features",
                    imageUrl: "https://picsum.photos/200/150?random=3"
                },
                {
                    id: "4",
                    title: "Task 4",
                    description: "Testing components",
                    imageUrl: "https://picsum.photos/200/150?random=4"
                },
            ]
        },
        {
            id: "group3",
            name: "Done",
            cards: [
                {
                    id: "5",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
                {
                    id: "6",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
                {
                    id: "7",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
                {
                    id: "8",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
                {
                    id: "9",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
                {
                    id: "10",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
                {
                    id: "11",
                    title: "Task 5",
                    description: "Completed task",
                    imageUrl: "https://picsum.photos/200/150?random=5"
                },
            ]
        }
    ];


    function handleDndConsider(
        event   : CustomEvent<{ items: CardType[] }>,
        groupId : string
    ): void {
        groups.forEach( group => openGroups.add( group.id ));
        openGroups = openGroups;

        dragAndDropLinks( event, groupId );
    };


    function dragAndDropLinks(
        event   : CustomEvent<{ items: CardType[] }>,
        groupId : string
    ): void {
        const targetGroup = groups.find(( group ) => group.id === groupId );

        if ( targetGroup ) {
            targetGroup.cards = event.detail.items;
            groups = groups;
        }
    }


    const handleDndFinalize = (
        event   : CustomEvent<{ items: CardType[] }>,
        groupId : string
    ): void => dragAndDropLinks( event, groupId );


    const handleGroupDndConsider = (
        event: CustomEvent<{ items: GroupType[] }>
    ): GroupType[] => groups = event.detail.items;


    const handleGroupDndFinalize = (
        event: CustomEvent<{ items: GroupType[] }>
    ): GroupType[] => groups = event.detail.items;


    const dropTargetStyle = {
        "background-color"  : "rgba(0, 102, 160, 0.2)",
        "border-color"      : "rgba(0, 0, 0, 0.1)",
        "border-radius"     : "8px",
        "transition"        : "all 0.3s ease",
        "padding"           : "5px"
    }


    function toggleGroup( groupId: string ): void {
        if ( openGroups.has( groupId )) {
            openGroups.delete( groupId );
        } else {
            openGroups.add( groupId );
        }

        openGroups = openGroups;
    };

	let isExpanded = false;

	function toggleAllGroups() {
		isExpanded = !isExpanded;

		if ( isExpanded ) {
			groups.forEach( group => openGroups.add( group.id ));
		} else {
			openGroups.clear();
		}

		openGroups = openGroups;
	}
</script>


<!--<SearchInPage />-->


<main class="space-y-2">
	<div class="flex items-center justify-between">
		<Breadcrumb { nav } />

		<div class="flex items-center gap-4">
			<AuraButton
				variant="p-1"
				onClick={toggleAllGroups}
			>
				<span class="transform transition-all duration-300">
					{#if isExpanded}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="transform transition-all duration-300"><path fill="currentColor" d="M2 5h0v14h0zM22 5h0v14h0z"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M2 5h0v14h0zM22 5h0v14h0z;M2 5h3v14h-3zM22 5h-3v14h3z"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="72" stroke-dashoffset="72" d="M12 5h9c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-18c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 15v-6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 9l3 3M12 9l-3 3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"/></path></g></svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="transform transition-all duration-300"><path fill="currentColor" d="M2 5h0v14h0zM22 5h0v14h0z"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M2 5h0v14h0zM22 5h0v14h0z;M2 5h3v14h-3zM22 5h-3v14h3z"/></path><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="72" stroke-dashoffset="72" d="M12 5h9c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-18c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M12 9v6"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15l3 -3M12 15l-3 -3"><animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"/></path></g></svg>
					{/if}
				</span>
			</AuraButton>

            <Filter bind:isNav />
		</div>
	</div>

	<div
		class		= "grid gap-2"
		use:dndzone = {{
			items                   : groups,
			dragDisabled            : false,
			dropFromOthersDisabled  : true,
			flipDurationMs          : 300,
			type                    : "group",
			dropTargetStyle
		}}
		on:consider = { handleGroupDndConsider }
		on:finalize = { handleGroupDndFinalize }
	>
		{#each groups as group ( group.id )}
			<div
				class="grid gap-2"
			>
				<div
					tabindex        = "0"
					role            = "button"
					aria-label      = {`Toggle group ${group.name}`}
					aria-expanded   = { openGroups.has( group.id ) }
					on:click        = {() => !editingGroupId && toggleGroup( group.id )}
					on:keydown      = {() => !editingGroupId && toggleGroup( group.id )}
				>
					{#if group.id !== 'group0'}
						<GroupSites 
							{group} 
							{openGroups} 
							on:editModeChange={(e) => {
								editingGroupId = e.detail ? group.id : null;
							}}
						/>
					{:else}
						<div class="grid w-full">
							<hr class="w-full mt-5 mb-3">

							<div class="flex items-center justify-between">
								<h2 class="text-xl text-sky-500">{group.name}</h2>
								<Filter bind:isNav />
							</div>
						</div>
					{/if}
				</div>

				{#if openGroups.has( group.id )}
					<div
						transition:slide={{ duration: 300 }}
						class="pl-2"
					>
						<div
							class="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 h-auto min-h-12"
							use:dndzone={{
								items                   : group.cards,
								dragDisabled            : false,
								dropFromOthersDisabled  : false,
								flipDurationMs          : 300,
								type                    : "card",
								dropTargetStyle
							}}
							on:consider={(e) => handleDndConsider( e, group.id )}
							on:finalize={(e) => handleDndFinalize( e, group.id )}
						>
							{#each group.cards as card (card.id)}
								<div animate:flip={{ duration: 300 }}>
									{#if isNav}
										<Links id={ card.id } scale={false} />
									{:else}
										<LinksList id={ card.id } />
									{/if}
								</div>
							{:else}
								No hay links
							{/each}
						</div>
					</div>
				{/if}
			</div>
		{:else}
			No hay grupos
		{/each}
	</div>
</main>
