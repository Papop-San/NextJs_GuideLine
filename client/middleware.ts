import { jwtVerify, importJWK, JWTPayload } from 'jose'
import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const token = request.cookies.get('token')

    if (!token) {
      throw new Error('Token not found')
    }

    const secretJWK = {
      kty: 'oct',
      k: process.env.JOSE_SECRET as string, 
    }

    const secretKey = await importJWK(secretJWK, 'HS256')
    const { payload } = await jwtVerify(token.value, secretKey) 

    if (!payload.email) {
      throw new Error('Invalid token payload')
    }

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('user', JSON.stringify({ email: payload.email }))
    console.log(token)

    const response = NextResponse.next({
      request: {
        headers: requestHeaders, 
      },
    })
    console.log(payload)
    return response

  } catch (error) {
    console.log('error', error)
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/manage/blog/:path*', // Ensure the middleware applies here
}