<script>
    import { Breadcrumb } from '$components';
	import WebsiteCard from '$components/Sites/WebsiteCard.svelte';
	import { Filter, Search } from 'lucide-svelte';
    import { fade, slide } from 'svelte/transition';

    // Mock data - Reemplazar con datos reales
    let websites = [
        {
            name: 'Example Site',
            description: 'A great website example',
            category: 'Tecnología',
            stars: 4,
            url: '',
            image: 'https://res.cloudinary.com/dbgzsikcs/image/upload/v1725851398/sample/479e9fc8-01d8-4f5e-8848-4cbdc55da820.avif'
        },
        // Agregar más sitios aquí
    ];

    let searchQuery = '';
    let selectedCategory = '';
    let selectedStars = 0;
    
    let categories = ['Tecnología', 'Educación', 'Entretenimiento', 'Noticias', 'Otros'];
    let showFilters = false;

    $: filteredWebsites = websites.filter(website => {
        const matchesSearch = website.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            website.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || website.category === selectedCategory;
        const matchesStars = !selectedStars || website.stars >= selectedStars;
        
        return matchesSearch && matchesCategory && matchesStars;
    });

    const nav = {
		active	: 'Inicio',
		actions	: [
			{ name: 'Dashboard', 	url: '/dashboard' },
		]
	}
</script>

<main class="container mx-auto px-4">
    <div class="mb-8 space-y-4">
        <div class="flex items-center justify-between">
            <Breadcrumb { nav } />
        </div>
        <!-- Barra de búsqueda -->
        <div class="relative">
            <input
                type="text"
                bind:value={searchQuery}
                placeholder="Buscar sitios web..."
                class="input input-bordered w-full pl-10 pr-4 py-2 !bg-transparent"
            />
            <Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <button
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                on:click={() => showFilters = !showFilters}
            >
                <Filter />
            </button>
        </div>

        <!-- Panel de filtros -->
        {#if showFilters}
            <div class=" rounded-lg shadow-lg space-y-4" transition:slide>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
					<label class="label">
						<span>Categoría</span>
						<select
							class="select variant-glass-primary rounded-full pl-3"

							bind:value={selectedCategory}
						>
						<option value="" class="!bg-gray-800">Todas las categorías</option>
                        {#each categories as category}
                            <option value={category} class="!bg-gray-800">{category}</option>
                        {/each}
						</select>
					</label>

					<label class="label">
						<span>  Calificación mínima</span>
						<select
							class="select variant-glass-primary rounded-full pl-3"
							bind:value={selectedStars}

						>
						<option value={0} class="!bg-gray-800">Todas las estrellas</option>
                        {#each Array(5) as _, i}
                            <option value={i + 1} class="!bg-gray-800">{i + 1} estrellas o más</option>
                        {/each}
					</label>
                </div>
            </div>
        {/if}
    </div>

    <!-- Grid de sitios web -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {#each filteredWebsites as website (website.url)}
            <div transition:fade>
                <WebsiteCard {website} />
            </div>
        {/each}
        
        {#if filteredWebsites.length === 0}
            <div 
                class="col-span-full text-center py-12 text-gray-100"
                transition:fade
            >
                No se encontraron sitios web que coincidan con tu búsqueda.
            </div>
        {/if}
    </div>
</main>
