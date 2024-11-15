<script>
    import Loader from "./Loader.svelte";

    export let url = ''; // URL que quieres previsualizar

    let showPreview = false;
    let isLoading = true;

    // Cambiar el estado para mostrar la previsualización
    function handleMouseEnter() {
        showPreview = true;
        isLoading = true; // Mostrar el loader al abrir
    }

    function handleMouseLeave() {
        showPreview = false;
    }

    // Evento cuando el iframe se carga correctamente
    function handleLoad() {
        isLoading = false; // Ocultar loader cuando la página se carga
        console.log('TERMINO de cargar')

    }

    // Evento cuando el iframe no puede cargar la página
    function handleError() {
        isLoading = false; // Ocultar loader
        console.log('OCCURIO UN ERROR')
    }

    // Función para verificar si la URL es válida antes de intentar cargarla
    async function checkIframeLoad() {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (!response.ok) {
                throw new Error('Error al cargar la URL');
            }
            return true; // La URL es accesible
        } catch (error) {
            return false; // No se puede acceder a la URL
        }
    }
</script>

<div
    role="button"
    class="relative inline-block z-50"
    tabindex="0"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
>
<div class="card card-hover">
	<header class="card-header p-0">
        <!-- <img
            class   = "h-auto max-w-full rounded-lg"
            src     = "https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max"
            alt     = "preview"
        /> -->
        <img class="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3&w=300&h=300&auto=format&fit=max" alt="" />
    </header>

    <section class="p-4">(content)</section>

    <footer class="card-footer">(footer)</footer>
</div>

    {#if showPreview}
        <div class="rounded-lg absolute top-full left-1/2 transform-translate-x-1/2 w-96 h-80  variant-glass-primary shadow-lg overflow-hidden">
            {#if isLoading}
                <div class="flex items-center justify-center w-full h-full">
                    <Loader/>
                </div>
            {/if}

            <iframe
                title       = "preview"
                src         = {url}
                sandbox     = "allow-same-origin allow-scripts"
                class       = "w-full h-full"
                on:load     = {handleLoad}
                aria-label  = "Vista previa del sitio web"
            />
        </div>
    {/if}
</div>
