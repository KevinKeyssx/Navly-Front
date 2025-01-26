<script lang="ts">
	import './app.postcss';

	import { Header, DroverUrl, Footer } from '$components';


	import { initializeStores, Modal } from '@skeletonlabs/skeleton';

initializeStores();
</script>

<Modal />

<Header />
<!-- <main class="flex-1 px-52 mt-5"> -->
<main class="flex-1 container mx-auto mt-5">
	<DroverUrl>
		<slot />
	</DroverUrl>
</main>

<Footer />
