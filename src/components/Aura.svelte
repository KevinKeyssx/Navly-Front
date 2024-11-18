<figure class="aura-center">
    <section class="img-bg"></section>
    <svg
        class="fill-token -scale-x-[100%]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
    >
    </svg>
</figure>

<style lang="postcss">
    .aura-center { @apply flex items-center justify-center absolute inset-0 }

    figure { @apply flex relative flex-col }

    figure svg,
    .img-bg { @apply w-64 h-64 md:w-80 md:h-80 }

    .img-bg {
        @apply absolute z-[-1] rounded-full blur-[50px] transition-all;
        animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
            glow 5s linear infinite;
    }

    @keyframes glow {
        0% { @apply bg-primary-400/50 }
        33% { @apply bg-secondary-400/50 }
        66% { @apply bg-tertiary-400/50 }
        100% { @apply bg-primary-400/50 }
    }

    @keyframes pulse {
        50% { transform: scale( 1.5 )}
    }
</style>
