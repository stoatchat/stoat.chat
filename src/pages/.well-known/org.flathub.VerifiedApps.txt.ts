import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
    return new Response("", {
        headers: {
            "Content-Type": "text/plain",
        },
    })
}
