<script lang="ts">
	import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	import { Filter }				from "$components";
    import { DeleteIcon, EditIcon } from "$icons";
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let group 		: any;
    export let openGroups	: Set<string> = new Set();

	let editMode 	: boolean = false;
    let isNav 		: boolean = true;
	let inputElement: HTMLInputElement;

	$: if ( editMode && inputElement ) {
		inputElement.focus();
	}

	$: dispatch('editModeChange', editMode);


	const modalStore = getModalStore();
	const modal: ModalSettings = {
		type				: 'confirm',
		title				: 'Confirmar eliminación',
		body				: `¿Estás seguro de que deseas eliminar este grupo? Se eliminarán todos los sitios asociados.`,
		buttonTextConfirm	: 'Confirmar',
		buttonTextCancel	: 'Cancelar',
		modalClasses		: 'px-8 py-5 !variant-glass-primary',
		backdropClasses		: '!bg-primary-800/20',
		meta				: 'delete',
		response,
	};


	function onDelete( event: MouseEvent ) {
		event.stopPropagation();
		modalStore.trigger( modal );
	}


	function response( response: boolean ) {
		console.log( 'response:', response );
	}

</script>


<div class="flex gap-2 py-1 px-5 variant-glass-primary rounded-full hover:brightness-110 transition-all items-center justify-between">
	{#if !editMode}
		<h2 class="text-xl text-sky-500">{ group.name }</h2>
	{:else}
		<input
			type="text"
			bind:this={inputElement}
			bind:value={group.name}
			on:keydown={(e) => e.key === 'Enter' && (editMode = false)}
			class=" text-xl font-bold bg-transparent text-sky-500 ring-0 focus:outline-none active:ring-0 transition duration-300 border-none w-full rounded-full"
		/>
	{/if}

	<div class="flex items-center gap-2">
		<button 
			class="p-1.5 rounded-full hover:bg-sky-500/20 transition-all duration-500 w-10 justify-center mx-auto"
			on:click={( event ) => {event.stopPropagation(); editMode = !editMode}}
		>
			<EditIcon />
		</button>

		<button 
			class="p-1.5 rounded-full hover:bg-sky-500/20 transition-all duration-500 w-10 justify-center mx-auto"
			on:click={onDelete}
		>
			<DeleteIcon />
		</button>

		<Filter bind:isNav />

		<span class="transform transition-transform text-[10px] mx-auto flex justify-center { openGroups.has( group.id ) ? 'rotate-180' : ''}">
			<svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 9L14 14.1599C13.7429 14.4323 13.4329 14.6493 13.089 14.7976C12.7451 14.9459 12.3745 15.0225 12 15.0225C11.6255 15.0225 11.2549 14.9459 10.9109 14.7976C10.567 14.6493 10.2571 14.4323 10 14.1599L5 9" stroke="#fafafa" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: #e5e3df;"></path> </g></svg>
		</span>
	</div>
</div>
