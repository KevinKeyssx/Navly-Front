<script lang="ts">
    import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

    import CubesIcon    from "$icons/CubesIcon.svelte";
    import ListIcon     from "$icons/ListIcon.svelte";
	import PlusIcon 	from "$icons/PlusIcon.svelte";
	import AuraButton 	from "./Buttons/AuraButton.svelte";

    let value: number = 0;

	export let isNav: boolean;

	$: isNav = value === 1;
</script>


<div class="flex items-center gap-2">
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

	<RadioGroup background="variant-glass-primary">
		<RadioItem bind:group={value} name="cubes" value={0}>
			<CubesIcon />
		</RadioItem>

		<RadioItem bind:group={value} name="nav" value={1}>
			<ListIcon />
		</RadioItem>
	</RadioGroup>
</div>
