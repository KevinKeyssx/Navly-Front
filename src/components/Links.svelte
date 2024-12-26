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
    import HeartFullIcon    from "../icons/HeartFullIcon.svelte";
    import HeartEmptyIcon   from "../icons/HeartEmptyIcon.svelte";


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


    async function takePickture() {
        const res = await fetch( '/api/preview?url=https://www.netflix.com/watch/80104965?trackId=14207189&tctx=1%2C1%2Cebf9da2c-2068-45a7-90be-d11e71cb859b-298038227%2CNES_A13D4A0E8B1AA52D3E8D5B461E2E71-B4275BC75BB99D-D449A64DA3_p_1731635230699%2C%2C%2C%2C%2C%2CVideo%3A70024218%2CdetailsPagePlayButton' );
        console.log( "🚀 ~ ********res:", await  res.json())
    }
</script>

<!-- <a
    href    = "https://www.skeleton.dev"
    target  = {'_blank'}
    class   = "card card_zoom variant-soft-primary cursor-pointer"
> -->

<div class="card card_zoom z-0 variant-soft-primary cursor-pointer">
    <header class="card-header relative p-0">
        <img
            class   = "h-auto max-w-full rounded-t-lg object-cover"
            src     = "https://res.cloudinary.com/dbgzsikcs/image/upload/v1709439556/sample/8b199247-beed-46bc-a900-207e1266a141.avif"
            alt     = "preview"
        />

        <div class="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/40 to-transparent rounded-t-lg" />

        <div class="absolute inset-0 flex justify-between pl-4 py-2">
            <div class="items-start">
                <h2 class="text-sm">Skeleton</h2>

                <p class="text-[11px] text-white ">
                    Lorem ipsum dolor sit amet consectetur adipisicing . {target}
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
        <div
            class="text-[13px] font-semibold underline flex items-center gap-2"
        >
            <img
                src = "/icons/link.apng"
                alt = "link"
            />

            www.skeleton.com
        </div>
        <!-- <a
            href    = "https://www.skeleton.dev"
            target  = {'_blank'}
            class   = "text-[12px] font-semibold underline flex items-center gap-2"
        >
            <img
                src = "/icons/link.apng"
                alt = "link"
            />
            www.skeleton.com
        </a> -->

        <p class="text-[13px] text-cyan-600 font-semibold mt-5">
            La mejor web de por aquí para ver acepta un texto largo
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

        <!-- 1 length w-14 -->
        <!-- 2 length w-20 -->
        <!-- 3 length w-24 -->
        <!-- 4 length w-28 -->
        <!-- 5 length w-32 -->
        <div class="flex gap-1 items-center variant-ghost-primary rounded-2xl w-[5.2rem] justify-between pl-2 pr-2">
        <!-- <div class="flex gap-1.5 items-center"> -->
            <!-- <span class="text-[12px] font-extralight text-red-500"> -->
            <span class="text-[12px] font-semibold text-cyan-500">
                100
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
<!-- </a> -->
