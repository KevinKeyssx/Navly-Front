<script>
    import { goto }         from "$app/navigation";
    import NotFoundRobot    from "$components/NotFound/NotFoundRobot.svelte";
    import NotFoundExpand   from "$components/NotFound/NotFoundExpand.svelte";
    import Footer           from "$components/Footer.svelte";
    import Title            from "$components/Title/Title.svelte";
</script>

<div class="min-h-screen flex flex-col justify-between">
    <div class="container mx-auto flex flex-col items-center justify-center flex-grow text-center space-y-8">
        <Title title="¡Oh no! ¿Te has perdido?" />

        <NotFoundRobot />
        <!-- <NotFoundExpand/> -->

        <button
            class="btn variant-glass-error px-6 py-3 text-lg"
            on:click={() => goto('/dashboard')}
        >
            Volver a mi destino
        </button>
    </div>

    <Footer />
</div>
