<script lang="ts">
    import Loader from "./Loader.svelte";

    export let url      : string;
    export let target   : string;

    let isLoading   = true;

    function handleLoad() {
        isLoading = false;
        console.log('TERMINO de cargar')
    }
</script>


<div
    class       = "card z-50 mr-2 w-80 h-[21rem] variant-glass-primary shadow-lg overflow-hidden"
    data-popup  = {target}
>
    {#if isLoading}
        <div class="flex items-center justify-center w-full h-full">
            <Loader/>
        </div>
    {/if}

    <iframe
        title       = "preview"
        src         = {url}
        sandbox     = "allow-same-origin allow-scripts"
        class       = "w-full h-full rounded-lg"
        on:load     = {handleLoad}
        aria-label  = "Vista previa del sitio web"
    />
</div>
