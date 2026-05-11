import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');
  const { pathname, search } = request.nextUrl;

  // Redirect www to non-www for all paths
  if (host && host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    return NextResponse.redirect(
      `https://${newHost}${pathname}${search}`,
      301 // Permanent redirect for SEO
    );
  }

  return NextResponse.next();
}

// Skip the middleware entirely for assets and metadata routes so they don't
// pay the redirect-evaluation cost and aren't accidentally rewritten.
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next (Next.js internals)
     * - static (static files)
     * - image optimization
     * - favicon.ico, sitemap, etc.
     */
    '/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt|.*\\.webp$).*)',
  ],
};
