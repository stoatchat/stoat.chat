import type { APIRoute } from "astro";
import { getStatusPage, type StatusPage } from "../../lib/status";

const ALLOWED_ORIGIN_DOMAINS = [
  "stoat.chat",
  "revoltplatforms.ltd",
  "stoatinternal.com",
];

function getCorsHeaders(request: Request) {
  const headers = new Headers({
    Vary: "Origin",
  });
  const origin = request.headers.get("Origin");

  if (!origin) {
    return headers;
  }

  try {
    const { hostname, protocol } = new URL(origin);
    const isAllowedProtocol = protocol === "http:" || protocol === "https:";
    const isAllowedDomain = ALLOWED_ORIGIN_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
    );

    if (isAllowedProtocol && isAllowedDomain) {
      headers.set("Access-Control-Allow-Origin", origin);
    }
  } catch {
    // no cors
  }

  return headers;
}

export const GET = (async ({ request }) => {
  const headers = getCorsHeaders(request);
  headers.set("Content-Type", "application/json");

  return new Response(
    JSON.stringify({
      status: (await getStatusPage()) as StatusPage,
    }),
    {
      headers,
    },
  );
}) satisfies APIRoute;

export const OPTIONS = (({ request }) => {
  const headers = getCorsHeaders(request);
  headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");

  return new Response(null, {
    status: 204,
    headers,
  });
}) satisfies APIRoute;
