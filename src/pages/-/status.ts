import type { APIRoute } from "astro";
import { getStatusPage, type StatusPage } from "../../lib/status";

export const GET = (async () => {
  return new Response(
    JSON.stringify({
      status: (await getStatusPage()) as StatusPage,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}) satisfies APIRoute;
