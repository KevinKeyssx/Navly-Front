<script lang="ts">
    import { Star } from 'lucide-svelte';
    import { fade } from 'svelte/transition';

    export let website = {
        name: '',
        description: '',
        category: '',
        stars: 0,
        url: '',
        image: 'https://res.cloudinary.com/dbgzsikcs/image/upload/v1725851398/sample/479e9fc8-01d8-4f5e-8848-4cbdc55da820.avif'
    };

</script>

<div 
    class="variant-ghost-primary rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    transition:fade
>
    <div class="relative">
        <img 
            src={website.image } 
            alt={website.name}
            class="w-full h-48 object-cover"
        />
        <div class="absolute top-2 right-2 bg-primary/80  px-2 py-1 rounded-full text-sm bg-sky-700 opacity-90 text-gray-100 font-semibold ">
            {website.category}
        </div>
    </div>

    <div class="p-4">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
            {website.name}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {website.description}
        </p>

        <div class="flex items-center justify-between">
            <div class="flex items-center space-x-1">
                {#each Array(5) as _, i}
                    <Star
                        size={18}
                        class={i < website.stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                {/each}
            </div>

			<a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-primary hover:text-primary-dark transition-colors duration-200"
            >
                Visitar →
            </a>
        </div>
    </div>
</div>
