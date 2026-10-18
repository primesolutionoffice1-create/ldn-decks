import { loadPreview } from '@/lib/lead-triage/pipeline.mjs';
import { renderPreviewDocument, renderPreviewNotFound } from '@/lib/lead-triage/preview.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const headers = {
  'content-type': 'text/html; charset=utf-8',
  'referrer-policy': 'no-referrer',
  'x-robots-tag': 'noindex, nofollow, noarchive',
  'x-content-type-options': 'nosniff',
  'content-security-policy': "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
  'cache-control': 'private, no-store',
};

export async function GET(_request, context) {
  const { token } = await context.params;
  const loaded = await loadPreview(token);
  if (!loaded) {
    return new Response(renderPreviewNotFound(), { status: 404, headers });
  }
  return new Response(renderPreviewDocument(loaded.preview), { status: 200, headers });
}
