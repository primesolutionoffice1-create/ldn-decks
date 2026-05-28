// Web Vitals receiver. The client posts a JSON payload per Core Web Vital
// (LCP, INP, CLS, FCP, TTFB) via the WebVitalsReporter component. We log
// a compact single-line summary that surfaces in Vercel runtime logs, so
// the data lives next to the Speed Insights dashboard without requiring
// a separate storage backend.
//
// Sampling: the client only posts ~10% of sessions plus 100% of any
// reading classified "poor", so the log budget stays predictable.

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json().catch(() => null);
    if (!body || !body.name) {
      return new Response(null, { status: 204 });
    }
    // Compact one-liner so log search filters cleanly on `[web-vitals]`.
    console.log(
      '[web-vitals]',
      JSON.stringify({
        name: body.name,
        value: typeof body.value === 'number' ? Math.round(body.value * 100) / 100 : body.value,
        rating: body.rating,
        path: body.path,
        nav: body.navigationType,
        device: body.device,
        connection: body.connection,
      }),
    );
  } catch {
    // Never let a vitals report crash the route.
  }
  return new Response(null, { status: 204 });
}
