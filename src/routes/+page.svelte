<script lang="ts">
	import Links from "../components/Links.svelte";
</script>

<div class="container mx-auto mt-5">
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-3 md:gap-4 lg:gap-5 px-2 2xl:px-0">

		{#each [1,2,3,4,6,6,4,2,3,4,5] as index, i }
			<Links
				url={"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
				target= {`target-${i}`}
			/>
		{/each}

	</div>
</div>
