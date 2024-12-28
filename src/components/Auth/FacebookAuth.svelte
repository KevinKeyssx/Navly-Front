<script lang="ts">
    import { auth }     from "$lib/auth-client";
    import FacebookIcon from "../../icons/FacebookIcon.svelte";
</script>


<button
    class       = "btn w-full variant-ghost-primary gap-2 rounded-full text-sm sm:text-base"
    on:click    = {async () => {
        await auth.signIn.social({
            provider: 'facebook'
        });
    }}
>
    <FacebookIcon />

    Continua con Facebook
</button>
