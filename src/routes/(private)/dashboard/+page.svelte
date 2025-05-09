<script lang="ts">
    import { ConicGradient, type ConicStop } from "@skeletonlabs/skeleton";
    import { fade, fly, scale } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { Breadcrumb, Links, Title } from '$components';

    // Dashboard stats with animation
    let stats = {
        totalUrls: 0,
        totalNavigators: 0,
        totalCategories: 0,
        totalFavorites: 0,
        totalStars: 0
    };
    
    // Final values for animation
    const finalStats = {
        totalUrls: 123,
        totalNavigators: 10,
        totalCategories: 25,
        totalFavorites: 18,
        totalStars: 42
    };

    // Recent URLs with more data
    let recentUrls = [
        { title: "My Blog", url: "https://myblog.com", group: "Personal", lastVisited: "Hace 2 horas", icon: "🌐" },
        { title: "Work Docs", url: "https://work.com/docs", group: "Work", lastVisited: "Hace 1 día", icon: "📄" },
        { title: "Recipe Site", url: "https://recipes.com", group: "Hobbies", lastVisited: "Hace 3 días", icon: "🍳" },
    ];

    // Interface for list items
    interface ListItem {
        id: number;
        url: string;
    }

    // Improved conic gradient with better colors
    const conicStops: ConicStop[] = [
        { label: 'Navegadores', color: 'rgba(99, 102, 241, 0.8)', start: 0, end: 25 },
        { label: 'URLs', color: 'rgba(79, 70, 229, 0.7)', start: 25, end: 50 },
        { label: 'Favoritos', color: 'rgba(236, 72, 153, 0.7)', start: 50, end: 75 },
        { label: 'Estrellas', color: 'rgba(245, 158, 11, 0.7)', start: 75, end: 100 }
    ];

    // Carousel functionality
    let elemMovies: HTMLDivElement;

    function multiColumnLeft(): void {
        let x = elemMovies.scrollWidth;
        if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
        elemMovies.scroll({ left: x, behavior: 'smooth' });
    }

    function multiColumnRight(): void {
        let x = 0;
        if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) {
            x = elemMovies.scrollLeft + elemMovies.clientWidth;
        }
        elemMovies.scroll({ left: x, behavior: 'smooth' });
    }

    // Enhanced movie data with better structure
    let moviesData = {
        movies: [
            { url: 'https://i.pravatar.cc/150?img=1', imageUrl: 'https://i.pravatar.cc/150?img=1', name: 'GitHub', description: 'Plataforma de desarrollo' },
            { url: 'https://i.pravatar.cc/150?img=2', imageUrl: 'https://i.pravatar.cc/150?img=2', name: 'Stack Overflow', description: 'Foro de programación' },
            { url: 'https://i.pravatar.cc/150?img=3', imageUrl: 'https://i.pravatar.cc/150?img=3', name: 'MDN Web Docs', description: 'Documentación web' },
            { url: 'https://i.pravatar.cc/150?img=4', imageUrl: 'https://i.pravatar.cc/150?img=4', name: 'YouTube', description: 'Plataforma de videos' },
            { url: 'https://i.pravatar.cc/150?img=5', imageUrl: 'https://i.pravatar.cc/150?img=5', name: 'Twitter', description: 'Red social' },
            { url: 'https://i.pravatar.cc/150?img=6', imageUrl: 'https://i.pravatar.cc/150?img=6', name: 'LinkedIn', description: 'Red profesional' },
            { url: 'https://i.pravatar.cc/150?img=7', imageUrl: 'https://i.pravatar.cc/150?img=7', name: 'Reddit', description: 'Foro de discusión' },
            { url: 'https://i.pravatar.cc/150?img=8', imageUrl: 'https://i.pravatar.cc/150?img=8', name: 'Netflix', description: 'Streaming de video' },
            { url: 'https://i.pravatar.cc/150?img=9', imageUrl: 'https://i.pravatar.cc/150?img=9', name: 'Spotify', description: 'Streaming de música' },
        ]
    };

    // Navigation configuration
    const nav = {
        active: 'Dashboard',
        actions: [
            { name: 'Inicio', url: '/home' },
        ]
    };

    // Activity data for the activity feed
    const activityFeed = [
        { action: 'Visitado', site: 'GitHub', time: 'Hace 10 minutos', icon: '🌐' },
        { action: 'Añadido a favoritos', site: 'Stack Overflow', time: 'Hace 2 horas', icon: '❤️' },
        { action: 'Categorizado', site: 'MDN Docs', time: 'Hace 1 día', icon: '🏷️' },
    ];

    // Weather data for the widget
    const weatherData = {
        temp: '22°C',
        condition: 'Soleado',
        location: 'Madrid',
        icon: '☀️'
    };

    // Animation for stats
    onMount(() => {
        const duration = 1500; // Animation duration in ms
        const steps = 30; // Number of steps for the animation
        const interval = duration / steps;
        
        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            
            // Update each stat with eased animation
            stats.totalUrls = Math.round(finalStats.totalUrls * progress);
            stats.totalNavigators = Math.round(finalStats.totalNavigators * progress);
            stats.totalCategories = Math.round(finalStats.totalCategories * progress);
            stats.totalFavorites = Math.round(finalStats.totalFavorites * progress);
            stats.totalStars = Math.round(finalStats.totalStars * progress);
            
            if (step >= steps) {
                clearInterval(timer);
                // Ensure final values are exact
                stats = { ...finalStats };
            }
        }, interval);
    });

    // Theme toggle state
    let darkMode = true;
    function toggleTheme() {
        darkMode = !darkMode;
        // In a real app, you would apply the theme change here
    }

    // Dashboard sections visibility state
    let showSections = {
        stats: true,
        recent: true,
        activity: true,
        usage: true
    };
</script>

<div class="container mx-auto px-4 py-6" in:fade={{ duration: 300, delay: 150 }}>
    <!-- Header with theme toggle and user info -->
    <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-4">
            <Breadcrumb {nav} />
            <div class="badge variant-filled-primary animate-pulse">Beta</div>
        </div>
        
        <div class="flex items-center gap-4">
            <button class="btn-icon variant-ghost-surface" on:click={toggleTheme}>
                {#if darkMode}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></path></svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                {/if}
            </button>
            
            <div class="avatar flex items-center justify-center">
                <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.pravatar.cc/150?img=68" alt="User avatar" />
                </div>
            </div>
        </div>
    </div>

    <!-- Welcome Banner -->
    <div class="card variant-glass-primary p-6 mb-6" in:fly={{ y: 20, duration: 600, delay: 200 }}>
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
                <h1 class="h1 mb-2">Bienvenido a Navly</h1>
                <p class="opacity-90">Tu centro de navegación personal. Organiza, guarda y descubre nuevos sitios web.</p>
            </div>
            
            <!-- Weather Widget -->
            <div class="card variant-glass p-4 flex items-center gap-3">
                <span class="text-4xl">{weatherData.icon}</span>
                <div>
                    <h3 class="h3">{weatherData.temp}</h3>
                    <p class="text-sm opacity-80">{weatherData.condition}, {weatherData.location}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8" in:fly={{ y: 20, duration: 600, delay: 300 }}>
        <!-- Navegadores Card -->
        <div class="card variant-soft-secondary p-5 transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <button class="w-full h-full flex flex-col items-start" on:click={() => goto('/navigators')}>
                <div class="flex justify-between items-center w-full mb-2">
                    <span class="text-2xl">🚀</span>
                    <span class="badge variant-filled-secondary">{stats.totalNavigators}</span>
                </div>
                <h3 class="h3 mb-1">Navegadores</h3>
                <div class="progress-radial">
                    <svg class="progress-circular" viewBox="0 0 50 50" transition:scale={{ duration: 400 }}>
                        <circle class="progress-circular-bg" cx="25" cy="25" r="20" />
                        <circle 
                            class="progress-circular-fill" 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            stroke-dasharray="125.6" 
                            stroke-dashoffset="{125.6 - (125.6 * (stats.totalNavigators / finalStats.totalNavigators))}" 
                        />
                    </svg>
                </div>
            </button>
        </div>

        <!-- URLs Card -->
        <div class="card variant-soft-primary p-5 transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <button class="w-full h-full flex flex-col items-start" on:click={() => goto('/urls')}>
                <div class="flex justify-between items-center w-full mb-2">
                    <span class="text-2xl">🔗</span>
                    <span class="badge variant-filled-primary">{stats.totalUrls}</span>
                </div>
                <h3 class="h3 mb-1">URLs</h3>
                <div class="progress-radial">
                    <svg class="progress-circular" viewBox="0 0 50 50" transition:scale={{ duration: 400 }}>
                        <circle class="progress-circular-bg" cx="25" cy="25" r="20" />
                        <circle 
                            class="progress-circular-fill" 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            stroke-dasharray="125.6" 
                            stroke-dashoffset="{125.6 - (125.6 * (stats.totalUrls / finalStats.totalUrls))}" 
                        />
                    </svg>
                </div>
            </button>
        </div>

        <!-- Sitios Card -->
        <div class="card variant-soft-tertiary p-5 transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <button class="w-full h-full flex flex-col items-start" on:click={() => goto('/sites')}>
                <div class="flex justify-between items-center w-full mb-2">
                    <span class="text-2xl">🌐</span>
                    <span class="badge variant-filled-tertiary">{stats.totalCategories}</span>
                </div>
                <h3 class="h3 mb-1">Sitios</h3>
                <div class="progress-radial">
                    <svg class="progress-circular" viewBox="0 0 50 50" transition:scale={{ duration: 400 }}>
                        <circle class="progress-circular-bg" cx="25" cy="25" r="20" />
                        <circle 
                            class="progress-circular-fill" 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            stroke-dasharray="125.6" 
                            stroke-dashoffset="{125.6 - (125.6 * (stats.totalCategories / finalStats.totalCategories))}" 
                        />
                    </svg>
                </div>
            </button>
        </div>

        <!-- Favoritos Card -->
        <div class="card variant-soft-error p-5 transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <button class="w-full h-full flex flex-col items-start" on:click={() => goto('/favorites')}>
                <div class="flex justify-between items-center w-full mb-2">
                    <span class="text-2xl">💖</span>
                    <span class="badge variant-filled-error">{stats.totalFavorites}</span>
                </div>
                <h3 class="h3 mb-1">Favoritos</h3>
                <div class="progress-radial">
                    <svg class="progress-circular" viewBox="0 0 50 50" transition:scale={{ duration: 400 }}>
                        <circle class="progress-circular-bg" cx="25" cy="25" r="20" />
                        <circle 
                            class="progress-circular-fill" 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            stroke-dasharray="125.6" 
                            stroke-dashoffset="{125.6 - (125.6 * (stats.totalFavorites / finalStats.totalFavorites))}" 
                        />
                    </svg>
                </div>
            </button>
        </div>

        <!-- Estrellas Card -->
        <div class="card variant-soft-warning p-5 transition-all duration-200 hover:scale-105 hover:shadow-lg">
            <button class="w-full h-full flex flex-col items-start" on:click={() => goto('/stars')}>
                <div class="flex justify-between items-center w-full mb-2">
                    <span class="text-2xl">⭐</span>
                    <span class="badge variant-filled-warning">{stats.totalStars}</span>
                </div>
                <h3 class="h3 mb-1">Estrellas</h3>
                <div class="progress-radial">
                    <svg class="progress-circular" viewBox="0 0 50 50" transition:scale={{ duration: 400 }}>
                        <circle class="progress-circular-bg" cx="25" cy="25" r="20" />
                        <circle 
                            class="progress-circular-fill" 
                            cx="25" 
                            cy="25" 
                            r="20" 
                            stroke-dasharray="125.6" 
                            stroke-dashoffset="{125.6 - (125.6 * (stats.totalStars / finalStats.totalStars))}" 
                        />
                    </svg>
                </div>
            </button>
        </div>
    </div>

    <!-- URLs Recientes y Actividad -->  
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8" in:fly={{ y: 20, duration: 600, delay: 400 }}>
        <!-- URLs Recientes -->  
        <div class="card variant-glass p-6">
            <header class="flex justify-between items-center mb-4">
                <h2 class="h2 flex items-center gap-2">
                    <span class="text-primary-500">🔗</span> URLs Recientes
                </h2>
                <button class="btn btn-sm variant-soft-primary">Ver todas</button>
            </header>
            
            <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                <!-- Button: Left -->
                <button type="button" class="btn-icon variant-glass-surface" on:click={multiColumnLeft}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12h-17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
                </button>
                
                <!-- Carousel mejorado -->
                <div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-4 pb-2 overflow-x-auto">
                    {#each moviesData.movies as movie}
                        <div class="card variant-soft-surface p-4 snap-start min-w-[200px] transition-all duration-200 hover:scale-105 hover:shadow-lg">
                            <div class="flex flex-col gap-2">
                                <img src={movie.imageUrl} alt={movie.name} class="w-full h-24 object-cover rounded-md mb-2" />
                                <h3 class="font-semibold text-lg">{movie.name}</h3>
                                <p class="text-sm opacity-70">{movie.description}</p>
                                <a href={movie.url} target="_blank" class="btn btn-sm variant-ghost-primary w-full mt-2">Visitar</a>
                            </div>
                        </div>
                    {/each}
                </div>
                
                <!-- Button-Right -->
                <button type="button" class="btn-icon variant-glass-surface" on:click={multiColumnRight}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"/></path></g></svg>
                </button>
            </div>
        </div>
        
        <!-- Actividad Reciente -->
        <div class="card variant-glass p-6">
            <header class="flex justify-between items-center mb-4">
                <h2 class="h2 flex items-center gap-2">
                    <span class="text-tertiary-500">📈</span> Actividad Reciente
                </h2>
                <button class="btn btn-sm variant-soft-tertiary">Ver todo</button>
            </header>
            
            <div class="space-y-4">
                {#each activityFeed as activity, i}
                    <div 
                        class="card variant-soft-surface p-4 flex items-center gap-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                        in:fly={{ y: 10, duration: 300, delay: 100 * i }}
                    >
                        <div class="avatar flex items-center justify-center">
                            <div class="w-10 h-10 rounded-full bg-tertiary-500/20 flex items-center justify-center text-xl">
                                {activity.icon}
                            </div>
                        </div>
                        <div class="flex-1">
                            <p class="font-semibold">{activity.action} <span class="text-tertiary-500">{activity.site}</span></p>
                            <p class="text-sm opacity-70">{activity.time}</p>
                        </div>
                        <button class="btn-icon btn-icon-sm variant-ghost-surface">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                        </button>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    
    <!-- Gráfico de uso -->
    <div class="card variant-glass p-6 mb-8" in:fly={{ y: 20, duration: 600, delay: 500 }}>
        <header class="flex justify-between items-center mb-4">
            <h2 class="h2 flex items-center gap-2">
                <span class="text-warning-500">📊</span> Estadísticas de Uso
            </h2>
            <div class="flex gap-2">
                <button class="btn btn-sm variant-soft">Diario</button>
                <button class="btn btn-sm variant-filled-primary">Semanal</button>
                <button class="btn btn-sm variant-soft">Mensual</button>
            </div>
        </header>
        
        <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
            <!-- Gráfico principal -->
            <div class="card variant-soft-surface p-4 h-[300px] flex items-center justify-center">
                <p class="text-center opacity-70">Gráfico de uso (simulado)</p>
            </div>
            
            <!-- Distribución -->
            <div class="card variant-soft-surface p-4">
                <h3 class="h3 mb-4">Distribución de uso</h3>
                <ConicGradient stops={conicStops} legend>Distribución por categoría</ConicGradient>
            </div>
        </div>
    </div>
</div>
