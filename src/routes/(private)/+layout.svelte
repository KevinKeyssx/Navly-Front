<script lang="ts">
	import { redirect } from '@sveltejs/kit';

	import { Avatar } from '@skeletonlabs/skeleton';

	import './app.postcss';
	import { auth } 	from "$lib/auth-client";
	import { goto } 	from '$app/navigation';
	import PowerIcon 	from '../../icons/PowerIcon.svelte';
	import DroverUrl 	from '../../components/DroverUrl.svelte';


	export const load = async ({ locals }: { locals: { session: any } }) => {
        if (!locals.session) {
            throw redirect(302, '/login');
        }
    };

    const session = auth.useSession();
</script>


<header class="variant-glass-surface text-white py-3">
	<!-- <div class=" flex justify-between items-center px-52"> -->
	<div class="container mx-auto flex justify-between items-center px-5">
		<a href="/" class="text-xl uppercase font-bold">Navly</a>

		<div class="px-0.5 flex variant-ringed-tertiary h-10 justify-between items-center rounded-full">
			<Avatar
				src			= "https://i.pravatar.cc/"
				initials	= "KC"
				border		= "border-2 border-surface-300-600-token hover:!border-primary-500"
				cursor		= "cursor-pointer"
				width		= "w-10"
			/>

			<h2 class="text-sky-500 mx-3">{$session?.data?.user.name}</h2>

			<button
				class="btn btn-icon p-0"
				on:click={async () => {
					await auth.signOut();
					goto('/login');
				}}
			>
				<PowerIcon />
			</button>
		</div>
	</div>
</header>

<!-- <main class="flex-1 px-52 mt-5"> -->
<main class="flex-1 container mx-auto mt-5">
	<DroverUrl>
		<slot />
	</DroverUrl>
</main>
