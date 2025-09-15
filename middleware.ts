import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // Redirect www to non-www
  if (host?.startsWith('www.')) {
    url.hostname = host.replace(/^www\./, '');
    return NextResponse.redirect(url);
  }

  // OR: Redirect non-www to www
  // if (!host?.startsWith('www.')) {
  //   url.hostname = `www.${host}`;
  //   return NextResponse.redirect(url);
  // }

  return NextResponse.next();
}
