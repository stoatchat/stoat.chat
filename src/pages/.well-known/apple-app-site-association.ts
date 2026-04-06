import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
    return new Response(
        JSON.stringify({
            applinks: {
                details: [
                    {
                        appIDs: ["T23HBWQ54Y.chat.revolt.app"],
                        components: [
                            { "/": "/app", comment: "root" },
                            { "/": "/login", comment: "login page" },
                            { "/": "/server/*", comment: "servers" },
                            { "/": "/channel/*", comment: "channels" },
                            { "/": "/friends/*", comment: "friends" },
                        ],
                    },
                ],
            },
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
}
