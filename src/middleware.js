import { NextResponse } from "next/server";
import { refreshAccessToken } from "./utility/auth"

export async function middleware(request) {
    const requestHeaders = new Headers(request.headers);
    const hasToken = request.cookies.has("token")

    if (request.url.includes('/auth') && hasToken) {
        const oldToken = request.cookies.get('token').value;
        const newToken = await refreshAccessToken(oldToken);

        console.log("Token regenerated ", newToken);

        const url = request.nextUrl.clone()
        url.pathname = "/"
        return NextResponse.redirect(url);
    } else if (request.url.includes('/profile') && !hasToken) {
        const url = request.nextUrl.clone()
        url.pathname = "/auth/login"
        return NextResponse.redirect(url);
    } else if (hasToken) {
        const token = request.cookies.get('token').value;
        requestHeaders.set('Authorization', token);

        // console.log("Token added ", token);
    }

    // console.log(request.url);
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });
    return response;
}

// export const config = {
//     matcher: '/',
// }