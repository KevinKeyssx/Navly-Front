import { createAuthClient } from "better-auth/svelte";


export const auth = createAuthClient({
    baseURL: import.meta.env.VITE_BETTER_AUTH_URL as string
});
