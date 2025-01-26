<script lang="ts">
    export let onClick: () => void;
    export let disabled = false;
    export let variant = 'p-2 variant-glass-primary';
</script>


<button
    class    = { `btn ${variant}` }
    on:click = { onClick }
    disabled = { disabled }
>
    <slot />
</button>


<style>
    button {
        border          : none;
        color           : #fff;
        border-radius   : 20px;
        background-size : 100% auto;
        font-family     : inherit;
        opacity         : 50;
    }

    button:hover {
        background-position : right center;
        background-size     : 200% auto;
        -webkit-animation   : pulse 2s infinite;
        animation           : pulse512 1.5s infinite;
    }

    @keyframes pulse512 {
        0% {
            box-shadow: 0 0 0 0 #05bada66;
        }

        70% {
            box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
        }

        100% {
            box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
        }
    }
</style>
