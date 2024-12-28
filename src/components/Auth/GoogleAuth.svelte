<script lang="ts">
    import { auth }     from "$lib/auth-client";
    import GoogleIcons  from "../../icons/GoogleIcons.svelte";
</script>


<button
    class       = "btn w-full variant-ghost-primary gap-2 rounded-full text-sm sm:text-base"
    on:click    = {async () => {
        await auth.signIn.social({
            provider: 'google',
        });
    }}
>
    <GoogleIcons />
    Continua con Google
</button>
