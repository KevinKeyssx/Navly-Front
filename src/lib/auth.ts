import { betterAuth } from "better-auth"


export const better = betterAuth({
    socialProviders: {
        google: { 
            clientId        : import.meta.env.VITE_GOOGLE_CLIENT_ID as string ,
            clientSecret    : import.meta.env.VITE_GOOGLE_CLIENT_SECRET as string ,
            redirectURI     : import.meta.env.VITE_BETTER_AUTH_URL + '/api/auth/callback/google',
        }, 
    },
});
