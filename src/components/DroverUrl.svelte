<script lang="ts">
    let isDragging = false;

    const handleDragOver = (event: DragEvent): void => {
        event.preventDefault();
        isDragging = true;
    };

    const handleDragLeave = (event: DragEvent): void => {
        const currentTarget = event.currentTarget as HTMLElement;
        const target = event.relatedTarget as HTMLElement | null;

        if (!target || !currentTarget.contains(target)) {
            isDragging = false;
        }
    };

    const handleDrop = (event: DragEvent): void => {
        event.preventDefault();
        isDragging = false;
        const url = event.dataTransfer?.getData('text/uri-list');

        if (url) {
            console.log('URL detectada al soltar:', url);
        } else {
            console.log('No se detectó una URL válida al soltar.');
        }
    };

    const handlePaste = (event: ClipboardEvent): void => {
        const pastedData = event.clipboardData?.getData('text/plain') ?? '';

        try {
            const url = new URL(pastedData);
            console.log('URL detectada al pegar:', url.href);
        } catch {
            console.log('No se detectó una URL válida al pegar.');
        }
    };
</script>

<div 
    class={`${isDragging ? 'border-surface-600 shadow-lg variant-ghost-secondary rounded-lg h-full px-5 py-3 z-50' : 'px-5 py-3'}`}
    on:dragover={handleDragOver}
    on:dragleave={handleDragLeave}
    on:drop={handleDrop}
    on:paste={handlePaste}
    aria-hidden="true"
>
    <slot />
</div>
