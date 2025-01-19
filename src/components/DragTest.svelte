<script lang="ts">
    import { dndzone }  from "svelte-dnd-action";
    import { flip }     from "svelte/animate";

    import { Links, Navigator } from "$components";
  import LinksList from "./LinksList.svelte";
  import SearchInPage from "./SearchInPage.svelte";


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
            id: "group0",
            name: "no",
            cards: [
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

    function dragAndDropLinks(
        event   : CustomEvent<{ items: CardType[] }>,
        groupId : string
    ) {
        const { items } = event.detail;

        groups = groups.map(group => {
            if ( group.id === groupId ) {
                return { ...group, cards: items };
            }
            return group;
        });
    };


    function handleDndConsider(
        event   : CustomEvent<{ items: CardType[] }>,
        groupId : string
    ) {
        dragAndDropLinks( event, groupId );
    };


    function handleDndFinalize(
        event   : CustomEvent<{ items: CardType[] }>,
        groupId : string
    ) {
        dragAndDropLinks( event, groupId );
    };


    const handleGroupDndConsider = (
        event: CustomEvent<{ items: GroupType[] }>
    ) => groups = event.detail.items;


    const handleGroupDndFinalize = (
        event: CustomEvent<{ items: GroupType[] }>
    ) => groups = event.detail.items;
</script>


<SearchInPage />
<div 
    class="grid gap-2"
    use:dndzone = {{
        items                   : groups,
        dragDisabled            : false,
        dropFromOthersDisabled  : true,
        flipDurationMs          : 300,
        type                    : "group"
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
                <h2 class="text-xl text-sky-500 py-2 px-4 variant-glass-primary rounded-lg">{group.name}</h2>
            {/if}

            <div
                class="gap-2 grid grid-cols-6 h-auto min-h-12"
                use:dndzone={{
                    items                   : group.cards,
                    dragDisabled            : false,
                    dropFromOthersDisabled  : false,
                    flipDurationMs          : 300,
                    type                    : "card"
                }}
                on:consider={(e) => handleDndConsider( e, group.id )}
                on:finalize={(e) => handleDndFinalize( e, group.id )}
            >
                {#each group.cards as card (card.id)}
                    <div
                        animate:flip={{ duration: 300 }}
                    >
                        <Links id={card.id} />
                        <!-- <LinksList id={card.id}/> -->
                    </div>
                {:else}
                    {#if group.id !== 'group0'}
                        No hay links
                    {:else}
                        Sin grupos
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</div>
