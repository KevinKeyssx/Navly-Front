<script lang="ts">
	import { RightArrowIcon } from "$icons";

	type Nav = {
		active: string;
		actions: {
			name: string;
			url: string;
		}[];
	};

	export let nav: Nav
</script>


<ol class="breadcrumb space-x-2 variant-ghost-primary py-2 justify-center rounded-full items-center w-auto px-6">
	{#each nav.actions as action}
		<li class="crumb"><a class="anchor" href={action.url}>{action.name}</a></li>

		<li class="crumb-separator" aria-hidden>
			<RightArrowIcon />
		</li>
	{/each}

	<li>{nav.active}</li>
</ol>
