import { NextResponse } from 'next/server';

const ADMIN_REALM = 'LDN Decks Admin';

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

// Strip stray trailing punctuation that crawlers, email clients, social
// scrapers, and chat platforms sometimes append when serializing URLs.
// Both literal and percent-encoded forms — Next.js's nextUrl.pathname
// keeps "invalid" path chars percent-encoded, so /foo%22 stays %22 not ".
// Examples seen in the wild:
//   /northern-virginia-deck-building-guide%22   ← Slack/Outlook (encoded ")
//   /deck-builder-leesburg-va)                  ← parenthetical sentences
//   /trex-decks,                                ← prose lists
// 301 to the clean path so inbound link equity consolidates.
const TRAILING_STRAY = /(?:["')\];>,]|%22|%27|%29|%5[Dd]|%3[EeBb]|%2[Cc])+$/;

export function proxy(request) {
  const host = request.headers.get('host');
  const { pathname, search } = request.nextUrl;

  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    const authResult = authorizeAdmin(request);
    if (authResult) return authResult;
  }

  if (goneExactPaths.has(pathname) || gonePathPrefixes.some(prefix => pathname.startsWith(prefix))) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex',
      },
    });
  }

  // Strip stray trailing punctuation before any other handling.
  const cleaned = pathname.replace(TRAILING_STRAY, '');
  if (cleaned !== pathname && cleaned.length > 1) {
    const newHost = host && host.startsWith('www.') ? host.replace(/^www\./, '') : host;
    return NextResponse.redirect(
      `https://${newHost}${cleaned}${search}`,
      301
    );
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

function authorizeAdmin(request) {
  const password = process.env.ADMIN_PASSWORD;
  const username = process.env.ADMIN_USERNAME || 'admin';
  const isProd = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

  if (!password) {
    if (!isProd) return null;
    return new NextResponse('Admin access is not configured.', {
      status: 503,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'x-robots-tag': 'noindex, nofollow, noarchive',
      },
    });
  }

  const header = request.headers.get('authorization') || '';
  const prefix = 'Basic ';
  if (!header.startsWith(prefix)) return adminAuthChallenge();

  let decoded = '';
  try {
    decoded = atob(header.slice(prefix.length));
  } catch {
    return adminAuthChallenge();
  }

  const separator = decoded.indexOf(':');
  const providedUser = separator >= 0 ? decoded.slice(0, separator) : '';
  const providedPass = separator >= 0 ? decoded.slice(separator + 1) : '';

  if (providedUser !== username || providedPass !== password) {
    return adminAuthChallenge();
  }

  return null;
}

function adminAuthChallenge() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'www-authenticate': `Basic realm="${ADMIN_REALM}", charset="UTF-8"`,
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow, noarchive',
    },
  });
}

// Skip proxy evaluation for assets and metadata routes.
export const config = {
  matcher: [
    '/((?!api|_next|static|favicon.ico|sitemap.xml|robots.txt|.*\\.webp$).*)',
  ],
};
