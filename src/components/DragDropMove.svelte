<script lang="ts">
    import {
		dndzone,
		type DndEvent
	} 					from "svelte-dnd-action";
	import { flip }		from 'svelte/animate';

    interface ListItem {
		id: number;
		url: string;
	}

    const flipDurationMs = 100;

    export let links: ListItem[] = [];
    export let componentStyle = '';
    export let animateStyle = '';

    const handleConsider = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links = env.detail.items;

	const handleFinalize = ( env: CustomEvent<DndEvent<ListItem>> ) =>
		links = env.detail.items;
</script>

<div
    class={componentStyle}
    use:dndzone={{ items: links, flipDurationMs, dropTargetStyle: {} }}
    on:consider={handleConsider}
    on:finalize={handleFinalize}
>
    {#each links as item (item.id)}
        <div
            class={animateStyle}
            animate:flip={{ duration: flipDurationMs }}
        >
            <slot {item} />
        </div>
    {/each}
</div>
