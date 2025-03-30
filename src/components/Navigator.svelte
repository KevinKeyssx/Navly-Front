<script lang="ts">
	import { DeleteIcon, EditIcon, HeartFullIcon } from "$icons";

    export let url  : string;
    export let name : string;

    let parr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam fuga incidunt fugit, alias, vel cupiditate minus culpa ad recusandae aliquid magnam quia adipisci explicabo aspernatur atque officiis? Officia, veniam. Fugal';
</script>


<a href="/sites" rel="noopener noreferrer" class="">
    <div class="card card-hover variant-glass-primary hover:brightness-105">
        <header class="card-header relative p-0">
            <div class="absolute top-0 right-0 p-2 grid -space-y-2 z-10 bg-gradient-to-r from-transparent via-black/40 to-black/50 w-14 h-full rounded-tr-lg">
                <button
                    class="btn-icon hover:scale-110"
                    on:click|preventDefault={() => console.log('delete')}
                >
                    <DeleteIcon />
                </button>

                <button
                    class="btn-icon hover:scale-110"
                    on:click|preventDefault={() => console.log('edit')}
                >
                    <EditIcon/>
                </button>

                <button
                    class="btn-icon hover:scale-110"
                    on:click|preventDefault={() => console.log('heart')}
                >
                    <HeartFullIcon />
                </button>
            </div>
            
            <!-- Added name overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent z-10">
                <h3 class="text-white font-semibold">{ name }</h3>
            </div>

            <img
                class="h-auto max-w-full rounded-t-lg object-cover z-0"
                src={ url }
                alt={ name }
            />
        </header>

        <section class="px-4 py-2 text-[13px] space-y-1 fira-sans-extralight">
            {parr}
        </section>
    </div>
</a>
