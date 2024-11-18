<script lang="ts">
    import {
        popup,
        Ratings,
        type PopupSettings
    } from "@skeletonlabs/skeleton";

    import DeleteIcon       from "../icons/DeleteIcon.svelte";
    import EditIcon         from "../icons/EditIcon.svelte";
    import ViewIcon         from "../icons/ViewIcon.svelte";
    import WebIcon          from "../icons/WebIcon.svelte";
    import Preview          from "./Preview.svelte";
    import StarFullIcon     from "../icons/StarFullIcon.svelte";
    import StartEmptyIcon   from "../icons/StartEmptyIcon.svelte";
    import StarHalfIcon     from "../icons/StarHalfIcon.svelte";
    import Previewer        from "./Previewer.svelte";
  import HeartFullIcon from "../icons/HeartFullIcon.svelte";
  import HeartEmptyIcon from "../icons/HeartEmptyIcon.svelte";


    export let url      : string;
    export let target   : string;

    let value = { current: 0, max: 5 };

    function iconClick( event: CustomEvent<{index:number}> ): void {
        value.current = event.detail.index;
    }

    const popupHover: PopupSettings = {
        event       : 'hover',
        target,
        placement   : 'left-end'
        // placement   : 'bottom-end'
    };


// export const GET = async ( {
//     request
// } : {
//     request: Request
// } ): Promise<Response | undefined> => {
//     const {url}     = request;

//     console.log("🚀 ~ url:", url)
//     const realUrl = url.split('=')[1];
//     console.log("🚀 ~ realUrl:", realUrl)

//     try {
        
//         const { result }    = await ogs({ url: realUrl });
//         console.log("🚀 ~ result:", result)
//         const body          = JSON.stringify({ result, status: 200 });
//         console.log("🚀 ~ body:", body)
//         return new Response( body, { status: 200 });
//     } catch (error) {
//         console.log("🚀 ~ error:", error)
//         return undefined;
//     }

// };

    async function takePickture() {
        const res = await fetch( '/api/preview?url=https://www.netflix.com/watch/80104965?trackId=14207189&tctx=1%2C1%2Cebf9da2c-2068-45a7-90be-d11e71cb859b-298038227%2CNES_A13D4A0E8B1AA52D3E8D5B461E2E71-B4275BC75BB99D-D449A64DA3_p_1731635230699%2C%2C%2C%2C%2C%2CVideo%3A70024218%2CdetailsPagePlayButton' );
        console.log( "🚀 ~ ********res:", await  res.json())

    }

</script>

<style>
    .card_:hover {
        transform   : scale( 1.05 );
        transition  : transform 0.3s cubic-bezier( 0.175, 0.885, 0.32, 1.275 );
    }
</style>

<div class="card card_ z-0 variant-soft-primary">
    <header class="card-header relative p-0">
        <img
            class   = "h-auto max-w-full rounded-t-lg object-cover z-0"
            src     = "https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif"
            alt     = "preview"
        />

        <div class="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/40 to-transparent rounded-t-lg" />

        <div class="absolute inset-0 flex justify-between pl-4 py-2">
            <div class="items-start">
                <h2 class="text-md">Skeleton</h2>

                <p class="text-[12px] text-white font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing .
                </p>
            </div>

            <div class="card-footer space-y-3 mt-1 content-between grid">
                <!-- <Preview {url}>
                    <WebIcon class="transition-all duration-300 transform hover:scale-110"/>
                </Preview> -->
                <!-- <div class="btn btn-lg  p-0 [&>*]:pointer-events-none" use:popup={popupHover}>
                    <WebIcon class="transition-all duration-300 transform hover:scale-110"/>

                    <Previewer {url} {target} />
                </div> -->

                <div class="grid space-y-3">
                    <DeleteIcon class="z-0 transition-all duration-300 transform hover:scale-110"/>

                    <EditIcon class="z-0 transition-all duration-300 transform hover:scale-110"/>

                    <button class="btn btn-sm p-0">
                        <!-- <HeartEmptyIcon /> -->
                        <HeartFullIcon />
                    </button>
                </div>

                <img
                    src     = "https://res.cloudinary.com/prod/image/upload/w_192/console/favicon.png"
                    alt     = "favicon"
                    class   = "w-5 h-5"
                />
            </div>
        </div>
    </header>

    <section class="px-4 py-2 text-sm space-y-1">
        <a
            href    = "https://www.skeleton.dev"
            target  = {'_blank'}
            class   = "text-[12px] font-semibold underline flex items-center gap-2"
        >
            <img
                src = "/icons/link.apng"
                alt = "link"
            />
            www.skeleton.com
        </a>

        <p class="text-[14px] text-cyan-600 font-semibold mt-5">
            La mejor web de por aquí paraver acepta un texto largo
        </p>
    </section>

    <footer class="card-footer flex justify-start mt-1 items-center">
        <Ratings
            interactive
            bind:value  = {value.current}
            on:icon     = {iconClick}
            max         = {value.max}
            justify     = 'justify-start'
        >
            <svelte:fragment slot="empty">
                <StartEmptyIcon />
            </svelte:fragment>

            <svelte:fragment slot="half">
                <StarHalfIcon />
            </svelte:fragment>

            <svelte:fragment slot="full">
                <StarFullIcon />
            </svelte:fragment>
        </Ratings>

        <div class="flex gap-2 items-center">
            <span class="text-[14px] font-extralight text-cyan-500">
                2
            </span> 

            <img
                src = "/icons/view.apng"
                alt = "views"
            />
        </div>


        <!-- <button
            class="btn btn-sm variant-ghost-primary"
            on:click={takePickture}
        >
            Rew

        </button> -->
    </footer>
</div>
