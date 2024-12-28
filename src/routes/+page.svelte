<script lang="ts">
    import { goto } from "$app/navigation";

    import Footer from "../components/Footer.svelte";
</script>

<div class="mt-28 flex flex-col justify-center items-center p-6">
    <header class="text-center">
        <h1 class="text-4xl font-extrabold text-blue-600">¡Bienvenido a Navly!</h1>
        <p class="text-gray-300 mt-4 text-lg">
            La herramienta perfecta para organizar, buscar y agrupar tus URLs de manera eficiente.
        </p>
    </header>

    <main class="mt-10 max-w-3xl">
        <section class="mb-8 p-6 shadow-lg rounded-lg variant-glass-tertiary">
            <h2 class="text-2xl font-bold text-blue-500">¿Por qué usar Navly?</h2>
            <ul class="mt-4 space-y-4 text-gray-300">
                <li>
                    <strong class="text-blue-600">🔍 Fácil búsqueda:</strong> Encuentra rápidamente cualquier URL que hayas guardado con nuestras herramientas avanzadas de búsqueda.
                </li>
                <li>
                    <strong class="text-blue-600">📂 Agrupación inteligente:</strong> Organiza tus URLs en navegadores y categorías personalizadas, adaptadas a tus necesidades.
                </li>
                <li>
                    <strong class="text-blue-600">🚀 Ahorro de tiempo:</strong> Olvídate de perder tiempo buscando enlaces antiguos en marcadores o correos.
                </li>
                <li>
                    <strong class="text-blue-600">🔒 Seguridad:</strong> Tus datos están protegidos con encriptación y solo tú tienes acceso a ellos.
                </li>
            </ul>
        </section>

        <section class=" p-6 shadow-lg rounded-lg variant-glass-tertiary">
            <h2 class="text-2xl font-bold text-blue-500">Cómo funciona</h2>
            <p class="mt-4 text-gray-300">
                En pocos pasos, Navly transforma la manera en que administras tus enlaces:
            </p>
            <ol class="mt-4 list-decimal list-inside space-y-3 text-gray-300">
                <li>Regístrate o inicia sesión para empezar.</li>
                <li>Añade tus URLs favoritas en navegadores personalizados.</li>
                <li>Organiza y busca enlaces de manera rápida y eficiente.</li>
                <li>Accede desde cualquier dispositivo en cualquier momento.</li>
            </ol>
        </section>
    </main>

    <footer class="mt-10">
        <button 
            class="btn variant-glass-primary text-white py-2 px-6 rounded-full shadow-md text-lg font-bold"
            on:click={() => goto( "/login" )}
        >
            Inicia Sesión y Comienza Ahora 🚀
        </button>
    </footer>
</div>

<Footer />