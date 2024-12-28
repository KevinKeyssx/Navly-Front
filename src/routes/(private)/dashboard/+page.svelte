<script lang="ts">
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
</script>


<h1 class="text-2xl font-bold">Bienvenido a Navly</h1>

<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="p-4 variant-glass-primary card card-hover">
        <h2 class="text-xl font-semibold">🔗 URLs</h2>
        <p class="text-sky-500">Total: {stats.totalUrls}</p>
    </div>

    <div class="p-4 variant-glass-secondary card card-hover">
        <h2 class="text-xl font-semibold">🚀 Navegadores</h2>
        <p class="text-sky-500">Total: {stats.totalNavigators}</p>
    </div>

    <div class="p-4 variant-glass-tertiary card card-hover">
        <h2 class="text-xl font-semibold">🌐 Sitios</h2>
        <p class="text-sky-500">Total: {stats.totalCategories}</p>
    </div>

    <div class="p-4 variant-glass-error card card-hover">
        <h2 class="text-xl font-semibold">💖 Favoritos</h2>
        <p class="text-red-500">Total: {stats.totalCategories}</p>
    </div>

    <div class="p-4 variant-glass-warning card card-hover">
        <h2 class="text-xl font-semibold">⭐ Estrellas</h2>
        <p class="text-amber-500">Total: {stats.totalCategories}</p>
    </div>
</div>

<div class="mt-6">
    <h2 class="text-xl font-bold">URLs Recientes</h2>

    <ul class="mt-2 space-y-2">
        {#each recentUrls as url}
            <li class="p-4  variant-glass-primary shadow rounded">
                <a href={url.url} class="text-blue-600 hover:underline">
                    {url.title}
                </a>
                <p class="text-gray-300">Grupo: {url.group}</p>
            </li>
        {/each}
    </ul>
</div>
