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
		storePopup
	} from '@skeletonlabs/skeleton';

	import Aura 		from '$components/Aura.svelte';
	import Snow 		from '$components/Snow.svelte';

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
	<slot />
</div>
