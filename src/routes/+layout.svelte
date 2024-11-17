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
		AppShell,
		AppBar,
		Avatar,
		storePopup
	} from '@skeletonlabs/skeleton';

	import Aura from '../components/Aura.svelte';

	storePopup.set({
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow
	});
</script>

<Aura/>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="lg:px-10">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Navly</strong>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<div class=" pl-4 flex border border-1 border-gray-600 w-48 h-10  justify-between items-center rounded-full">
					<h2 class="text-sky-500 ">Kevin Candia</h2>
					<Avatar
						src			= "https://i.pravatar.cc/"
						initials	= "KC"
						border		= "border-2 border-surface-300-600-token hover:!border-primary-500"
						cursor		= "cursor-pointer"
						width		= "w-10"
					/>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />

</AppShell>
