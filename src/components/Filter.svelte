<script lang="ts">
    import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

    import CubesIcon    from "$icons/CubesIcon.svelte";
    import ListIcon     from "$icons/ListIcon.svelte";
	import PlusIcon 	from "$icons/PlusIcon.svelte";
	import AuraButton 	from "./Buttons/AuraButton.svelte";

    let value: number = 0;

	export let isNav: boolean;

	// Función para emitir el evento cuando cambia el valor del RadioGroup
	import { createEventDispatcher } from 'svelte';
	// const dispatch = createEventDispatcher();

	// $: {
	// 	isNav = value === 1; // Actualiza isNav basado en el valor del RadioGroup
	// 	dispatch('change', { isNav }); // Emite el evento con el nuevo valor de isNav
	// }
	$: isNav = value === 1;
</script>

<div class="flex items-center gap-3 mb-3">
	<input
		class		= "input text-sm variant-glass-primary"
		title		= "Busca tu navegador"
		type		= "text"
		placeholder	= "Busca tu navegador"
	/>

	<AuraButton
		onClick={() => console.log('searching...')}
	>
		<PlusIcon/>
	</AuraButton>

	<select class="select rounded-3xl w-96 text-sm variant-glass-primary">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
	</select>

	<RadioGroup background="variant-glass-primary">
		<RadioItem bind:group={value} name="cubes" value={0}>
			<CubesIcon />
		</RadioItem>

		<RadioItem bind:group={value} name="nav" value={1}>
			<ListIcon />
		</RadioItem>
	</RadioGroup>
</div>
