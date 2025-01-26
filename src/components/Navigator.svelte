<script lang="ts">
	import { DeleteIcon, EditIcon, HeartFullIcon } from "$icons";

    export let url  : string;
    export let name : string;
</script>


<a href="/sites" rel="noopener noreferrer" class="">
    <div class="card card-hover variant-glass-primary hover:brightness-105">
        <header class="card-header relative p-0">
            <div class="absolute top-2 right-2 grid -space-y-2 z-10">
                <button class="btn-icon hover:scale-110">
                    <DeleteIcon />
                </button>

                <button class="btn-icon hover:scale-110">
                    <EditIcon/>
                </button>

                <button class="btn-icon hover:scale-110">
                    <HeartFullIcon />
                </button>
            </div>
            <img
                class   = "h-auto max-w-full rounded-t-lg object-cover z-0 card-hover"
                src     = { url }
                alt     = { name }
            />
        </header>

        <section class="px-4 py-2 text-[13px] space-y-1 fira-sans-extralight">
            { name }
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga incidunt fugit, alias, vel cupiditate minus culpa ad recusandae aliquid magnam quia adipisci explicabo aspernatur atque officiis? Officia, veniam. Fuga?

            <input
			on:click={(event ) => event.stopPropagation()}
                type="text" 
                id="input-navly" 
                class="bg-transparent  focus:outline-none focus:border-sky-500 transition duration-300 border-none w-full right-0 "
                value="Navly"
            />
        </section>
    </div>
</a>
