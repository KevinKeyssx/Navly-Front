import { redirect, type RequestEvent } from '@sveltejs/kit';

import { svelteKitHandler } from "better-auth/svelte-kit";

import { better } from "$lib/auth";


export async function handle(
    {
        event,
        resolve
    }:
    {
        event   : RequestEvent,
        resolve : ( event: RequestEvent ) => Promise<Response>
    }
) {
    const url = `${import.meta.env.VITE_BETTER_AUTH_URL}/`;
    const session = await better.api.getSession({
        headers: event.request.headers
    });

    if ( event.url.href === url && session ) {
        throw redirect( 302, `${url}dashboard` );
    }

	return svelteKitHandler({ event, resolve, auth: better });
}
