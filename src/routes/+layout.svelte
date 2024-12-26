<script lang="ts">
	import '../app.postcss';

	import {
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow
	} from '@floating-ui/dom';

	import {
		Avatar,
		storePopup
	} from '@skeletonlabs/skeleton';

	import Aura 	from '../components/Aura.svelte';
	import Footer 	from '../components/Footer.svelte';
	import Snow 	from '../components/Snow.svelte';

	storePopup.set({
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow
	});
</script>


<div class="flex flex-col min-h-screen overflow-auto">
	<Aura />
	<Snow />

	<header class="bg-gray-800 text-white p-3">
		<!-- <div class=" flex justify-between items-center px-52"> -->
		<div class="container mx-auto flex justify-between items-center">
			<a href="/" class="text-xl uppercase font-bold">Navly</a>

			<div class=" pl-4 flex border border-1 border-gray-600 w-48 h-10 justify-between items-center rounded-full">
				<h2 class="text-sky-500 ">Kevin Candia</h2>

				<Avatar
					src			= "https://i.pravatar.cc/"
					initials	= "KC"
					border		= "border-2 border-surface-300-600-token hover:!border-primary-500"
					cursor		= "cursor-pointer"
					width		= "w-10"
				/>
			</div>
		</div>
	</header>

	<main class="flex-1 container mx-auto mt-5 z-50">
	<!-- <main class="flex-1 px-52 mt-5"> -->
		<slot />
	</main>

	<Footer />
</div>
