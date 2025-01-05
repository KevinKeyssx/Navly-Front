<script lang="ts">
    import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";

    import { goto }         from "$app/navigation";
    import { Links, Title } from '$components'

    let stats = {
        totalUrls       : 123,
        totalNavigators : 10,
        totalCategories : 25
    };

    let recentUrls = [
        { title: "My Blog", url: "https://myblog.com", group: "Personal" },
        { title: "Work Docs", url: "https://work.com/docs", group: "Work" },
        { title: "Recipe Site", url: "https://recipes.com", group: "Hobbies" },
    ];


    interface ListItem {
		id: number;
		url: string;
	}

    const conicStops: ConicStop[] = [
        { label: 'One', color: 'rgba(255,255,255,1)', start: 0, end: 10 },
        { label: 'Two', color: 'rgba(255,255,255,0.5)', start: 10, end: 35 },
        { label: 'Three', color: 'rgba(255,255,255,0.25)', start: 35, end: 60 },
        { label: 'Four', color: '#123', start: 60, end: 100 }
    ];


    let elemMovies: HTMLDivElement;

    function multiColumnLeft(): void {
        let x = elemMovies.scrollWidth;
        if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
        elemMovies.scroll(x, 0);
    }

    function multiColumnRight(): void {
        let x = 0;
        // -1 is used because different browsers use different methods to round scrollWidth pixels.
        if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
        elemMovies.scroll(x, 0);
    }


    let moviesData = {
        movies: [
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test1'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test2'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test3'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test4'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test5'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test6'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test7'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test8'
            },
            {
                url: 'https://i.pravatar.cc/',
                imageUrl: 'https://i.pravatar.cc/',
                name: 'test9'
            },
        ]
    }
</script>

<Title title="Bienvenido a Navly" />

<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <button
        class="btn grid justify-start card card-hover p-5 gap-1  variant-glass-secondary"
        on:click={() => goto('/navigators')}
    >
        <h2 class="text-xl font-semibold">🚀 Navegadores</h2>
        <p class="text-start text-sky-500">Total: {stats.totalNavigators}</p>
    </button>

    <button
        class="btn grid justify-start card card-hover p-5 gap-1 variant-glass-tertiary"
        on:click={() => goto('/sites')}
    >
        <h2 class="text-xl font-semibold">🌐 Sitios</h2>
        <p class="text-start text-sky-500">Total: {stats.totalCategories}</p>
    </button>

    <button class="btn grid justify-start card card-hover p-5 gap-1  variant-glass-primary">
        <h2 class="text-xl font-semibold">🔗 URLs</h2>
        <p class="text-start text-sky-500">Total: {stats.totalUrls}</p>
    </button>

    <button class="btn grid justify-start card card-hover p-5 gap-1 variant-glass-error">
        <h2 class="text-xl font-semibold">💖 Favoritos</h2>
        <p class="text-start text-red-500">Total: {stats.totalCategories}</p>
    </button>

    <button class="btn grid justify-start card card-hover p-5 gap-1 variant-glass-warning">
        <h2 class="text-xl font-semibold">⭐ Estrellas</h2>
        <p class="text-start text-amber-500">Total: {stats.totalCategories}</p>
    </button>
</div>

<div class="mt-6 w-full space-y-4">
    <h2 class="text-xl font-bold">URLs Recientes</h2>

    <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
        <!-- Button: Left -->
        <button type="button" class="btn-icon variant-glass-surface" on:click={multiColumnLeft}>
            <!-- <i class="fa-solid fa-arrow-left" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12h-17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
        </button>
        <!-- Carousel -->
        <div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
            {#each moviesData.movies as movie}
                <Links url={movie.url} target={`target-${movie.name}`} />
            {/each}
        </div>
        <!-- Button-Right -->
        <button type="button" class="btn-icon variant-glass-surface" on:click={multiColumnRight}>
            <!-- <i class="fa-solid fa-arrow-right" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
        </button>
    </div>

    <ConicGradient stops={conicStops} legend>Usados</ConicGradient>
</div>
