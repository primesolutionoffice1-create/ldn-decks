import { NextResponse } from 'next/server';

// /certifications has no internal links and never existed as its own page.
// The live credentials page is /about/certifications-and-licenses.
// A second page would be thin duplicate content, so this is a permanent redirect.
//
// next.config.mjs is already edited in open PRs, so the 301 lives here
// instead of in redirects(). Do not publish Trex Platinum, TimberTech Certified,
// or TrexPro tiers on either URL until the owner supplies a certificate or dealer ID.

const DESTINATION_PATH = '/about/certifications-and-licenses';

function redirectToCredentials(request) {
  const forwardedHost = request.headers.get('x-forwarded-host');
  const host = (forwardedHost || request.headers.get('host') || 'ldndecks.com')
    .split(',')[0]
    .trim()
    .replace(/^www\./, '');
  const local = host.startsWith('localhost') || host.startsWith('127.0.0.1');
  const forwardedProto = (request.headers.get('x-forwarded-proto') || '').split(',')[0].trim();
  const proto = local ? 'http' : (forwardedProto || 'https');
  return NextResponse.redirect(`${proto}://${host}${DESTINATION_PATH}`, 301);
}

export function GET(request) {
  return redirectToCredentials(request);
}

export function HEAD(request) {
  return redirectToCredentials(request);
}
