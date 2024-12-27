<script lang="ts">
    import { goto } from "$app/navigation";
    import { auth } from "$lib/auth-client";

    const session = auth.useSession();
</script>

<div>
    {#if $session.data}
        <div>
            <p>
                {$session?.data?.user.name}
            </p>

            <button
                on:click={async () => {
                    await auth.signOut();
                    goto('/login');
                }}
            >
                Sign Out
            </button>
        </div>
    {:else}
        <button
            on:click={async () => {
                await auth.signIn.social({
                    provider: 'google',
                });
            }}
        >
            Continue with google
        </button>
    {/if}
</div>