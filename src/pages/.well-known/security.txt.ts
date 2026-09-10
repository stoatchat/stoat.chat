import type { APIRoute } from "astro"

export const GET: APIRoute = () => {
    return new Response(
        `Contact: mailto:security@stoat.chat
Contact: https://github.com/stoatchat/stoatchat/security/advisories/new
Contact: https://github.com/stoatchat/for-web/security/advisories/new
Contact: https://github.com/stoatchat/for-android/security/advisories/new
Contact: https://github.com/stoatchat/for-ios/security/advisories/new
Policy: https://github.com/stoatchat/.github/blob/main/.github/SECURITY.md
Expires: 2027-01-01T00:00:00Z`,
        {
            headers: {
                "Content-Type": "text/plain",
            },
        }
    )
}
