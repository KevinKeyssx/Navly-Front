<script lang="ts">
    import { dndzone }  from "svelte-dnd-action";
    import { flip }     from "svelte/animate";
    import { slide }    from "svelte/transition";

    import { AuraButton, Filter, Links, Navigator } from "$components";
    import LinksList        from "./LinksList.svelte";
    import SearchInPage     from "./SearchInPage.svelte";
    import { DeleteIcon, EditIcon }   from "$icons";


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


    let isNav       : boolean = false;  
    let openGroups  : Set<string> = new Set();


    function toggleGroup( groupId: string ): void {
        if ( openGroups.has( groupId )) {
            openGroups.delete( groupId );
        } else {
            openGroups.add( groupId );
        }

        openGroups = openGroups;
    };
</script>


<SearchInPage />


<div
    class="grid gap-2"
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
    {#each groups as group (group.id)}
        <div
            class="grid gap-2"
            animate:flip={{ duration: 300 }}
        >
            {#if group.id !== 'group0'}
                <div
                    tabindex        = "0"
                    role            = "button"
                    aria-label      = {`Toggle group ${group.name}`}
                    aria-expanded   = { openGroups.has( group.id ) }
                    on:click        = {() => toggleGroup( group.id )}
                    on:keydown      = {() => toggleGroup( group.id )}
                    class           = "flex gap-2 py-1 px-5 variant-glass-primary rounded-full hover:brightness-110 transition-all items-center justify-between"
                >
                    <h2 class="text-xl text-sky-500">{ group.name }</h2>

                    <div class="flex items-center gap-2">
                        <button 
                            class="p-1.5 rounded-full hover:bg-sky-500/20 transition-all duration-500 w-10 justify-center mx-auto"
                        >
                            <EditIcon />
                        </button>

                        <button 
                            class="p-1.5 rounded-full hover:bg-sky-500/20 transition-all duration-500 w-10 justify-center mx-auto"
                        >
                            <DeleteIcon />
                        </button>

                        <Filter bind:isNav />

                        <span class="transform transition-transform text-[10px] mx-auto flex justify-center { openGroups.has( group.id ) ? 'rotate-180' : ''}">
                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e5e3df;"></path> </g></svg>
                        </span>
                    </div>
                </div>

                {#if openGroups.has( group.id )}
                    <div
                        transition:slide={{ duration: 300 }}
                        class="pl-2"
                    >
                        <div
                            class="gap-2 grid grid-cols-6 h-auto min-h-12"
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
                                    <Links id={card.id} />
                                </div>
                            {:else}
                                No hay links
                            {/each}
                        </div>
                    </div>
                {/if}
            {:else}
                <hr class="w-full my-2">

                <div class="flex flex-col gap-2 mt-3">
                    <h2 class="text-xl text-sky-500">{group.name}</h2>
                </div>

                <div
                    class="gap-2 pl-2 grid grid-cols-6 h-auto min-h-12"
                    use:dndzone={{
                        items                   : group.cards,
                        dragDisabled            : false,
                        dropFromOthersDisabled  : false,
                        flipDurationMs          : 300,
                        type                    : "card",
                        dropTargetStyle
                    }}
                    on:consider={( event ) => handleDndConsider( event, group.id )}
                    on:finalize={( event ) => handleDndFinalize( event, group.id )}
                >
                    {#each group.cards as card ( card.id )}
                        <div animate:flip={{ duration: 300 }}>
                            <Links id={ card.id } />
                        </div>
                    {:else}
                        Sin grupos
                    {/each}
                </div>
            {/if}
        </div>
    {/each}
</div>
