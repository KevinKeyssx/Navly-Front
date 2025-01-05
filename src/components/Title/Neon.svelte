<script>
    import { goto } from "$app/navigation";
</script>

<style>
    .button {
        margin: 0;
        height: auto;
        background: transparent;
        padding: 0;
        border: none;
    }

    .button {
        --border-right: 6px;
        --text-stroke-color: rgba(8, 119, 255, 0.6);
        --animation-color: #4277fc;
        --fs-size: 1.5em;
        letter-spacing: 2px;
        text-decoration: none;
        font-size: var(--fs-size);
        font-family: "Arial";
        position: relative;
        text-transform: uppercase;
        /* color: transparent; */
        -webkit-text-stroke: 1px var(--text-stroke-color);
    }

    .hover-text {
        position: absolute;
        box-sizing: border-box;
        content: attr(data-text);
        color: var(--animation-color);
        width: 0%;
        inset: 0;
        border-right: var(--border-right) solid var(--animation-color);
        overflow: hidden;
        transition: 0.5s;
        -webkit-text-stroke: 1px var(--animation-color);
    }

    .button:hover .hover-text {
        width: 100%;
        filter: drop-shadow(0 5px 23px var(--animation-color))
    }
</style>

<button
    class       = "button"
    data-text   = "Navly"
    on:click    = {() => goto( '/home' )}
>
    <span class="actual-text">&nbsp;Navly&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Navly&nbsp;</span>
</button>
