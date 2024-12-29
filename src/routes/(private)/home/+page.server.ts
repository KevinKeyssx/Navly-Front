import { redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

import { better } from "$lib/auth";


export const load: PageServerLoad = async ({ request }) => {
    const session = await better.api.getSession({
        headers: request.headers,
    });

    if ( !session ) {
        throw redirect( 302, "/login" );
    }

    return {
        user: session.user,
    };
};
