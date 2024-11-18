<script lang="ts">
    import { onMount } from "svelte";

    export let url: string;
    let htmlContent: string | null = null;

    async function fetchPage() {
        try {
            const response = await fetch(url);
            console.log("🚀 **********~ response:", response)
            if (!response.ok) {
                throw new Error(`Error al cargar la página: ${response.statusText}`);
            }
            const text = await response.text();
            htmlContent = text;
        } catch (error) {
            console.error("Error al obtener el contenido de la página:", error);
            htmlContent = "<p class='text-gray-800'>Error al cargar la vista previa.</p>";
        }
    }

    onMount(() => {
        fetchPage();
    });
</script>

<!-- Mostramos el contenido dinámico -->
{#if htmlContent}
    <div class="preview-content">
        {@html htmlContent}
    </div>
{:else}
    <p>Cargando contenido...</p>
{/if}

<style>
    .preview-content {
        overflow: auto;
        border: 1px solid #ccc;
        padding: 1rem;
        border-radius: 0.5rem;
        background: #fff;
    }
</style>
