import { NextResponse } from 'next/server';

export function proxy(request) {
  const host = request.headers.get('host');
  const { pathname, search } = request.nextUrl;

  // Redirect www to non-www for all paths.
  if (host && host.startsWith('www.')) {
    const newHost = host.replace(/^www\./, '');
    return NextResponse.redirect(
      `https://${newHost}${pathname}${search}`,
      301
    );
  }

  return NextResponse.next();
}

// Skip proxy evaluation for assets and metadata routes.
export const config = {
  matcher: [
    '/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt|.*\\.webp$).*)',
  ],
};
