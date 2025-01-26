<script lang="ts">
    import {
		popup,
        Ratings,
		getModalStore,
        type PopupSettings,
    } from "@skeletonlabs/skeleton";


	const modalStore = getModalStore();
	const modal = {
		...confirmModal,
		title	: 'Confirmar eliminación',
		body	: '¿Estás seguro de que deseas eliminar este grupo? Se eliminarán todos los sitios asociados.',
		meta	: 'delete',
	}

    import {
		DeleteIcon,
		EditIcon,
		StarFullIcon,
		StarEmptyIcon,
		StarHalfIcon,
		HeartFullIcon,
		HeartEmptyIcon
	}       				from "$icons";

    import Preview          from "$components/Preview.svelte";
    import Previewer        from "$components/Previewer.svelte";
	import { confirmModal } from "./Sites/modal.config";




    export let url      : string = '';
    export let target   : string = '';
    export let id : string

    let value = { current: 0, max: 5 };

    function iconClick( event: CustomEvent<{index:number}> ): void {
        value.current = event.detail.index;
    }

    const popupHover: PopupSettings = {
        event       : 'hover',
        target,
        placement   : 'bottom',
        // placement   : 'bottom-end'
    };


    async function takePickture() {
        const res = await fetch( '/api/preview?url=https://www.netflix.com/watch/80104965?trackId=14207189&tctx=1%2C1%2Cebf9da2c-2068-45a7-90be-d11e71cb859b-298038227%2CNES_A13D4A0E8B1AA52D3E8D5B461E2E71-B4275BC75BB99D-D449A64DA3_p_1731635230699%2C%2C%2C%2C%2C%2CVideo%3A70024218%2CdetailsPagePlayButton' );
        console.log( "🚀 ~ ********res:", await  res.json())
    }



    let isPressed = false;

    function handleMouseDown() {
        isPressed = true;
    }

    function handleMouseUp() {
        isPressed = false;
    }

    const openInNewTab = ( destination: string ) => {
        window.open(destination, "_blank");
    };


	const popupFeatured: PopupSettings = {
		event		: 'click',
		target		: 'popupFeatured',
		placement	: 'right-start',
	};
</script>


<!-- <a
    href    = "https://www.skeleton.dev"
    target  = {'_blank'}
    class   = "card card_zoom variant-soft-primary cursor-pointer"
> -->

<div
    id				= { `linkstyle` }
    class           = "card card_zoom z-0 variant-glass-primary ${isPressed ? 'cursor-grabbing' : 'cursor-grab'} hover:brightness-125"
    on:mousedown    = { handleMouseDown }
    on:mouseup      = { handleMouseUp }
    on:dblclick     = {() => openInNewTab( 'https://www.skeleton.dev' )}
    aria-hidden     = "true"
>
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

					<button
						on:click={() => modalStore.trigger( modal )}
						class	="hover:scale-110"
					>
						<DeleteIcon />
                    </button>

                    <button
						class="hover:scale-110"
						use:popup={popupFeatured}
					>
                        <EditIcon/>
                    </button>

                    <!-- <button class="btn btn-sm p-0"> -->
                        <HeartEmptyIcon />
                        <!-- <HeartFullIcon /> -->
                    <!-- </button> -->
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

            <!-- www.skeleton.com -->
            <a
                href    = "https://www.skeleton.dev"
                target  = {'_blank'}
            >
                www.skeleton.com
            </a>
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
            spacing     = 'gap-0.5'
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


<div
	class		= "ml-4 mb-32 card rounded-lg p-5 w-72 shadow-xl z-50 variant-glass-primary space-y-1"
	data-popup	= "popupFeatured"
>
	<!-- <h3 class="text-md font-semibold">Editar link</h3> -->

	<label for="name">Nombre</label>
	<input type="text" name="name" id="name" class="input w-full h-9 !bg-transparent font-semibold">

	<label for="link">Link</label>
	<input type="text" name="link" id="link" class="input w-full h-9 !bg-transparent font-semibold">

	<label for="description">Descripción</label>
	<textarea name="description" id="description" class="textarea w-full h-20 !bg-transparent font-semibold"></textarea>

	<label for="url">Url</label>
	<textarea name="url" id="url" class="textarea w-full h-20 !bg-transparent font-semibold"></textarea>

	<!-- <div class="arrow variant-glass-primary" /> -->
	<!-- <div class="arrow bg-surface-100-800-token" /> -->
</div>
