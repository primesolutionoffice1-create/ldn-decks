// CSP violation receiver. Browser POSTs JSON when a Content-Security-Policy
// (or CSP-Report-Only) policy is violated. We log to the request log so the
// stream surfaces in Vercel runtime logs — no need for a separate storage
// backend during the report-only observation window.
//
// Promote `Content-Security-Policy-Report-Only` to `Content-Security-Policy`
// (enforcing) once this endpoint goes ~30 days quiet.

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    // Modern Reporting API uses application/reports+json (array of reports).
    // Legacy report-uri uses application/csp-report (single { "csp-report": {...} }).
    const body =
      contentType.includes('json') || contentType.includes('csp-report')
        ? await request.json().catch(() => null)
        : await request.text().catch(() => null);

    // Log a compact, single-line summary. Vercel log search will find these.
    // Keep payload small so we don't blow log budgets if a misconfigured
    // policy spams reports for a chatty third-party script.
    // eslint-disable-next-line no-console
    console.warn('[csp-report]', JSON.stringify(body)?.slice(0, 1024) || '(empty)');
  } catch {
    // Swallow; never let a violation report crash the route.
  }
  return new Response(null, { status: 204 });
}

// Some browsers OPTIONS-preflight the report endpoint. Respond no-content.
export function OPTIONS() {
  return new Response(null, { status: 204 });
}
