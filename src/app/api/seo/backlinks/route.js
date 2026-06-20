import { NextResponse } from 'next/server';
import { getBacklinksReferringDomains, getBacklinksSummary, normalizeDomain, serializeDataForSeoError } from '@/lib/dataforseo';
import { requireSeoAdmin } from '@/lib/seoAdminAuth';

export async function GET(request) {
  const unauthorized = requireSeoAdmin(request);
  if (unauthorized) return unauthorized;

  const params = new URL(request.url).searchParams;
  const refresh = params.get('refresh') === '1';
  const useSandbox = params.get('sandbox') !== '0';
  const target = normalizeDomain(params.get('target'));

  if (!refresh) return NextResponse.json({ success: true, status: 'manual_refresh_required', product: 'backlinks', target });

  try {
    const [summary, referringDomains] = await Promise.all([
      getBacklinksSummary(target, { useSandbox }),
      getBacklinksReferringDomains(target, { useSandbox }),
    ]);
    return NextResponse.json({ success: true, productStatus: 'ok', sandbox: useSandbox, target, summary, referringDomains });
  } catch (error) {
    return NextResponse.json({ success: false, error: serializeDataForSeoError(error) }, { status: error.status || 500 });
  }
}
