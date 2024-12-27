import type { RequestEvent } from '@sveltejs/kit';

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
	return svelteKitHandler({ event, resolve, auth: better });
}
