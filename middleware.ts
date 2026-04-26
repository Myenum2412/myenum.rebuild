import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || 'http';

  let shouldRedirect = false;

  // 1. Enforce HTTPS
  if (protocol === 'http' && process.env.NODE_ENV === 'production') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // 2. Redirect www to non-www
  if (host.startsWith('www.')) {
    url.hostname = host.replace(/^www\./, '');
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  // 3. Add Security Headers
  const response = NextResponse.next();
  
  // HSTS - Force HTTPS for 1 year
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  
  // CSP - Force upgrade of all insecure requests to HTTPS
  response.headers.set('Content-Security-Policy', 'upgrade-insecure-requests;');
  
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
