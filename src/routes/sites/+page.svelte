<script lang="ts">
	import { Accordion, AccordionItem, RadioGroup, RadioItem } from "@skeletonlabs/skeleton";
	import Links from "../../components/Links.svelte";

	let value: number = 0;
</script>

<div class="container mx-auto mt-5">

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
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256" {...$$props}>
					<g fill="#3660b2">
						<path d="M112 56v48a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8m88-8h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-96 96H56a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m96 0h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8" opacity="0.2" />
						<path d="M200 136h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64h-48v-48h48zM104 40H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64H56V56h48zm96-64h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 64h-48V56h48zm-96 32H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m0 64H56v-48h48z" />
					</g>
				</svg>
			</RadioItem>

			<RadioItem bind:group={value} name="justify" value={1}>
				<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" {...$$props}>
					<g fill="#3660b2" fill-opacity="0" stroke="#3660b2" stroke-linecap="round" stroke-linejoin="round">
						<path stroke-dasharray="12" stroke-dashoffset="12" d="M3.5 5c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
							<animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3" />
							<animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="12;0" />
						</path>
						<path stroke-dasharray="12" stroke-dashoffset="12" d="M3.5 12c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
							<animate fill="freeze" attributeName="fill-opacity" begin="2.3s" dur="0.15s" values="0;0.3" />
							<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0" />
						</path>
						<path stroke-dasharray="12" stroke-dashoffset="12" d="M3.5 19c0 -0.83 0.67 -1.5 1.5 -1.5c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
							<animate fill="freeze" attributeName="fill-opacity" begin="2.9s" dur="0.15s" values="0;0.3" />
							<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="12;0" />
						</path>
						<path stroke-dasharray="28" stroke-dashoffset="28" d="M9.5 5c0 -0.83 0.67 -1.5 1.5 -1.5h8c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-8c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
							<animate fill="freeze" attributeName="fill-opacity" begin="1.9s" dur="0.15s" values="0;0.3" />
							<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0" />
						</path>
						<path stroke-dasharray="28" stroke-dashoffset="28" d="M9.5 12c0 -0.83 0.67 -1.5 1.5 -1.5h8c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-8c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
							<animate fill="freeze" attributeName="fill-opacity" begin="2.5s" dur="0.15s" values="0;0.3" />
							<animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0" />
						</path>
						<path stroke-dasharray="28" stroke-dashoffset="28" d="M9.5 19c0 -0.83 0.67 -1.5 1.5 -1.5h8c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-8c-0.83 0 -1.5 -0.67 -1.5 -1.5Z">
							<animate fill="freeze" attributeName="fill-opacity" begin="3.1s" dur="0.15s" values="0;0.3" />
							<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="28;0" />
						</path>
					</g>
				</svg>
			</RadioItem>
		</RadioGroup>
	</div>


	<Accordion>
		<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
			<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
			<svelte:fragment slot="summary">Algo así se llama</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 sm:gap-3 md:gap-4 lg:gap-5 px-2 2xl:px-0">
					{#each [1,2,3,4,6] as index, i }
						<Links
							url={"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
							target= {`target-${i}`}
						/>
					{/each}

					<div class="card card_zoom h-auto variant-soft-primary flex justify-center items-center border-2 border-dotted border-sky-700">
						<div class="text-blue-500 text-3xl">
							<img src="/icons/plus-60.apng" alt="add">
						</div>
					</div>
				</div>
			</svelte:fragment>
		</AccordionItem>
	
		<AccordionItem open regionControl="variant-soft-primary" rounded="rounded-full">
			<svelte:fragment slot="summary">Otro Sitio</svelte:fragment>
			<svelte:fragment slot="content">
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 sm:gap-3 md:gap-4 lg:gap-5 px-2 2xl:px-0">
					{#each [1,2,3,4] as index, i }
						<Links
							url={"https://lordicon.com/icons/wired/gradient?q=remove&i=185-trash-bin"}
							target= {`target-${i}`}
						/>
					{/each}

					<div class="card card_zoom h-auto variant-soft-primary flex justify-center items-center border-2 border-dotted border-sky-700">
						<div class="text-blue-500 text-3xl">
							<img src="/icons/plus-60.apng" alt="add">
						</div>
					</div>
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
