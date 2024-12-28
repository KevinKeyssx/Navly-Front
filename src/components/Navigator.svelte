<script lang="ts">
    export let url  : string;
    export let name : string;
</script>

<a href="/sites" rel="noopener noreferrer" class="card_zoom">
    <div class="card variant-glass-primary">
        <header class="card-header relative p-0">
            <img
                class   = "h-auto max-w-full rounded-t-lg object-cover z-0"
                src     = {url}
                alt     = "preview"
            />
        </header>

        <section class="px-4 py-2 text-[13px] space-y-1 fira-sans-extralight">
            {name} asdlkjlk asdkjfk alskdjf jahsdjh sjdhlk klajsdk  alkdjsfklj 

            <!-- <input 
                type="text" 
                id="input-navly" 
                class="bg-transparent border-b border-gray-400 focus:outline-none focus:border-sky-500 transition duration-300 border-none w-full rounded-full"
                value="Navly"
            /> -->
        </section>
    </div>
</a>
