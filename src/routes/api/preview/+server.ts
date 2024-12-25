import ogs from 'open-graph-scraper';

export const GET = async (
    { request }: { request: Request } 
): Promise<Response | undefined> => {
    const { url }   = request;
    const realUrl   = url.split('=')[1];

    console.log("🚀 ~ realUrl:", realUrl)

    try {
        const { result }    = await ogs({ url: realUrl });
        const body          = JSON.stringify({ result, status: 200 });
        return new Response( body, { status: 200 });
    } catch (error) {
        console.log("🚀 ~ error:", error)
        return undefined;
    }
};
