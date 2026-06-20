import { NextResponse } from 'next/server';
import { getKeywordSearchVolume, getKeywordsForKeywords, getKeywordsForSite, normalizeDomain, serializeDataForSeoError } from '@/lib/dataforseo';
import { requireSeoAdmin } from '@/lib/seoAdminAuth';

function unwrap(result) {
  if (result.status === 'fulfilled') return { status: 'ok', data: result.value };
  return { status: 'error', error: serializeDataForSeoError(result.reason) };
}

export async function GET(request) {
  const unauthorized = requireSeoAdmin(request);
  if (unauthorized) return unauthorized;

  const params = new URL(request.url).searchParams;
  const refresh = params.get('refresh') === '1';
  const useSandbox = params.get('sandbox') !== '0';
  const target = normalizeDomain(params.get('target'));
  const keywords = params.get('keywords') || 'deck builder northern virginia,deck builder loudoun county,composite deck builder,trex deck installer,screened porch builder northern virginia';

  if (!refresh) {
    return NextResponse.json({ success: true, status: 'manual_refresh_required', product: 'keywords_data_google_ads', target, keywords: keywords.split(',') });
  }

  const results = await Promise.allSettled([
    getKeywordSearchVolume(keywords, { useSandbox }),
    getKeywordsForKeywords(keywords, { useSandbox }),
    getKeywordsForSite(target, { useSandbox }),
  ]);

  return NextResponse.json({
    success: true,
    productStatus: results.every((item) => item.status === 'fulfilled') ? 'ok' : 'partial',
    sandbox: useSandbox,
    target,
    searchVolume: unwrap(results[0]),
    keywordIdeas: unwrap(results[1]),
    siteKeywords: unwrap(results[2]),
  });
}
