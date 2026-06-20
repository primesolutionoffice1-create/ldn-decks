import { NextResponse } from 'next/server';
import { getLlmMentionMetrics, normalizeDomain, serializeDataForSeoError } from '@/lib/dataforseo';
import { requireSeoAdmin } from '@/lib/seoAdminAuth';

export async function GET(request) {
  const unauthorized = requireSeoAdmin(request);
  if (unauthorized) return unauthorized;

  const params = new URL(request.url).searchParams;
  const refresh = params.get('refresh') === '1';
  const useSandbox = params.get('sandbox') !== '0';
  const target = normalizeDomain(params.get('target'));
  const keyword = params.get('keyword') || 'deck builder northern virginia';
  const platform = params.get('platform') || 'google';

  if (!refresh) return NextResponse.json({ success: true, status: 'manual_refresh_required', product: 'llm_mentions', target, keyword, platform });

  try {
    const metrics = await getLlmMentionMetrics({ target, keyword, platform }, { useSandbox });
    return NextResponse.json({ success: true, productStatus: 'ok', sandbox: useSandbox, target, keyword, platform, metrics });
  } catch (error) {
    return NextResponse.json({ success: false, error: serializeDataForSeoError(error) }, { status: error.status || 500 });
  }
}
