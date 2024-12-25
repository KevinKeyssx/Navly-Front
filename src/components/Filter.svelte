<script lang="ts">
    import { RadioGroup, RadioItem } from "@skeletonlabs/skeleton";

    import CubesIcon    from "../icons/CubesIcon.svelte";
    import ListIcon     from "../icons/ListIcon.svelte";

    let value: number = 0;
</script>

<div class="flex items-center gap-3 mb-3">
	<input
		class		= "input text-sm variant-ghost-primary"
		title		= "Busca tu navegador"
		type		= "text"
		placeholder	= "Busca tu navegador"
	/>

	<select class="select rounded-3xl w-96 text-sm variant-ghost-primary">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
	</select>

	<RadioGroup background="variant-ghost-primary">
		<RadioItem bind:group={value} name="justify" value={0}>
			<CubesIcon />
		</RadioItem>

		<RadioItem bind:group={value} name="justify" value={1}>
			<ListIcon />
		</RadioItem>
	</RadioGroup>
</div>
