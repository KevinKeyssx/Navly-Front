<script lang="ts">
    export let url  : string;
    export let name : string;
</script>


<a href="/sites" rel="noopener noreferrer" class="">
    <div class="card card-hover variant-glass-primary hover:brightness-105">
        <header class="card-header relative p-0">
            <img
                class   = "h-auto max-w-full rounded-t-lg object-cover z-0 card-hover"
                src     = {url}
                alt     = {name}
            />
        </header>

        <section class="px-4 py-2 text-[13px] space-y-1 fira-sans-extralight">
            {name}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga incidunt fugit, alias, vel cupiditate minus culpa ad recusandae aliquid magnam quia adipisci explicabo aspernatur atque officiis? Officia, veniam. Fuga?
            

            <!-- <input 
                type="text" 
                id="input-navly" 
                class="bg-transparent border-b border-gray-400 focus:outline-none focus:border-sky-500 transition duration-300 border-none w-full rounded-full"
                value="Navly"
            /> -->
        </section>
    </div>
</a>
