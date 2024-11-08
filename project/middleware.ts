import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Define public paths that don’t require authentication
  const publicPaths = ['/login', '/signup']
  const isPublicPath = publicPaths.includes(pathname)

  // Get the token from the cookies
  const token = request.cookies.get('session')

  // If no token and trying to access protected route, redirect to login
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If token exists and trying to access an auth route, redirect to homepage
  if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Allow request to proceed if token exists and route is protected, or if route is public
  return NextResponse.next()
}

// Matcher to include all paths except specified paths
export const config = {
  matcher: ['/:path*', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
