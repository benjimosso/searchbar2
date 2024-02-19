import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import {cookies} from 'next/headers'
import { NextResponse } from "next/server"

export async function GET(request) {
    const url = new URL(request.url)
    const code = url.searchParams.get('code')

    if (code) {
        const superbase = createRouteHandlerClient({cookies})
        console.log(cookies)
        await superbase.auth.exchangeCodeForSession(code)
    } else {
        console.log('No code found in query string')
    }

    return NextResponse.redirect(url.origin)
}