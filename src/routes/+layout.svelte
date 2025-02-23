<script lang="ts">
	import '../app.postcss';

	import {
		computePosition,
		autoUpdate,
		flip,
		shift,
		offset,
		arrow
	}						from '@floating-ui/dom';
	import { storePopup }	from '@skeletonlabs/skeleton';

	import { Aura, Snow } from '$components';

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
	<!-- <Snow /> -->
	<slot />
</div>
