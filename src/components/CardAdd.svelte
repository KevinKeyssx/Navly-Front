<script lang="ts">
    export let iconSize = 'w-11 h-11';
    export let style    = 'h-auto card_zoom';
</script>


<button
    class={`card variant-glass-primary flex justify-center items-center border-2 border-dotted border-sky-700 ${style}`}
    on:click={(event) => event.stopPropagation()}
>
    <div class="text-blue-500 text-3xl py-3">
        <img
            src     = "/icons/plus-60.apng"
            alt     = "add"
            class   = {iconSize}
        >
    </div>
</button>
