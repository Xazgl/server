import { NextRequest, NextResponse } from 'next/server'
import checkSession from '../../src/services/checkCookie'

export async function middleware(req: NextRequest) {
    const sid = req.cookies['sid']
    const admin = await checkSession(sid)
    console.log(req.nextUrl.pathname)
    if (req.nextUrl.pathname === '/admin/login' || req.nextUrl.pathname === '/admin/regAdmin' || admin) {
        return NextResponse.next()
    }
    const host = process.env.NODE_ENV === 'production' ? process.env.HOST : 'http://localhost:3000'
    return NextResponse.redirect(host + '/admin/login')
    // return new Response('Auth required', {
    //     status: 401,
    // //     headers: {
    // //         'WWW-Authenticate': 'Basic realm="Secure Area"',
    // //     },
    //  })
}