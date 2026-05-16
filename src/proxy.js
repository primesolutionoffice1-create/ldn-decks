import { NextResponse } from 'next/server';

const goneExactPaths = new Set([
  '/comments/feed',
  '/drafts',
  '/home-2',
  '/marker-listing',
  '/wp-login.php',
]);

const gonePathPrefixes = [
  '/elementskit-content/',
  '/wp-content/plugins/',
];

export function proxy(request) {
  const host = request.headers.get('host');
  const { pathname, search } = request.nextUrl;

  if (goneExactPaths.has(pathname) || gonePathPrefixes.some(prefix => pathname.startsWith(prefix))) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex',
      },
    });
  }

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
