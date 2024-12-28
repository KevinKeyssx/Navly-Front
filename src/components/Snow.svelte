<script lang="ts">
    import { onMount } from 'svelte';

    interface Snowflake {
        left        : number;
        top         : number;
        opacity     : number;
        scale       : number;
        speed       : number;
        wobble      : number;
    }

    let snowflakes: Snowflake[] = [];

    function createSnowflake() {
        const snowflake: Snowflake = {
            left        : Math.random() * window.innerWidth,    // Posición horizontal
            top         : -5,                                   // Inicial en la parte superior
            opacity     : Math.random(),                        // Opacidad aleatoria
            scale       : Math.random() * 1.5 + 0.5,            // Escala aleatoria
            speed       : Math.random() * 2 + 1,                // Velocidad de caída
            wobble      : 0                                     // Movimiento de vaivén horizontal
        };

        snowflakes = [...snowflakes, snowflake];
    }

    function fall() {
        snowflakes = snowflakes.map(snowflake => {
            snowflake.top += snowflake.speed;
            snowflake.wobble += 0.02;
            snowflake.left += Math.sin(snowflake.wobble) * 2;

            return snowflake.top > window.innerHeight
                ? null
                : snowflake;
        }).filter( snowflake => snowflake !== null ) as Snowflake[];
    }

    function generateSnow() {
        setInterval( createSnowflake, 100 );
    }

    onMount(() => {
        generateSnow();
        const intervalId = setInterval( fall, 20 );
        return () => clearInterval( intervalId );
    });
</script>


<style>
    .snowflake {
        position            : absolute;
        width               : 5px;
        height              : 5px;
        background-color    : white;
        border-radius       : 50%;
    }
</style>


<div class="-z-50">
    {#each snowflakes as snowflake}
        <div
            class="snowflake"
            style="left: {snowflake.left}px; top: {snowflake.top}px; opacity: {snowflake.opacity}; transform: scale({snowflake.scale});"
        />
    {/each}
</div>
