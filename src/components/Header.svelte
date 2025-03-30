<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	import { goto } 			from '$app/navigation';
	import { AuraButton, Neon }	from '$components';
    import { auth } 			from "$lib/auth-client";
	import { PowerIcon } 		from '$icons';


    const session = auth.useSession();
</script>

<header class="variant-soft-surface text-white py-3">
	<div class="container mx-auto flex justify-between items-center px-5">
		<Neon />

		<div class="px-0.5 flex variant-ringed-tertiary h-10 justify-between items-center rounded-full">
			<Avatar
				src			= {$session?.data?.user.image}
				initials	= "NL"
				border		= "border-2 border-surface-300-600-token hover:!border-primary-500"
				cursor		= "cursor-pointer"
				width		= "w-10"
			/>

			<h2 class="text-sky-500 mx-3">{$session?.data?.user.name}</h2>

			<AuraButton
				variant	= "p-0"
				onClick	= { async () => {
					await auth.signOut();
					goto( '/login' );
				}}
			>
				<PowerIcon />
			</AuraButton>
		</div>
	</div>
</header>
