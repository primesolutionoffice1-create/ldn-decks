import { NextResponse } from 'next/server';
import { getCompetitorDomains, getDomainMetrics, normalizeDomain, serializeDataForSeoError } from '@/lib/dataforseo';
import { requireSeoAdmin } from '@/lib/seoAdminAuth';

function domains(value) {
  return String(value || 'ldndecks.com,nvdecks.com,deckscapesva.com,midatlanticdeckandfence.com,finondecks.com')
    .split(',')
    .map((domain) => normalizeDomain(domain.trim(), null))
    .filter(Boolean)
    .slice(0, 10);
}

export async function GET(request) {
  const unauthorized = requireSeoAdmin(request);
  if (unauthorized) return unauthorized;

  const params = new URL(request.url).searchParams;
  const refresh = params.get('refresh') === '1';
  const useSandbox = params.get('sandbox') !== '0';
  const list = domains(params.get('domains'));

  if (!refresh) return NextResponse.json({ success: true, status: 'manual_refresh_required', domains: list });

  try {
    const [metricsResults, discoveredCompetitors] = await Promise.all([
      Promise.allSettled(list.map((domain) => getDomainMetrics(domain, { useSandbox }))),
      getCompetitorDomains('ldndecks.com', { useSandbox }),
    ]);
    return NextResponse.json({
      success: true,
      sandbox: useSandbox,
      domains: list,
      metrics: list.map((domain, index) => {
        const result = metricsResults[index];
        return result.status === 'fulfilled'
          ? { domain, status: 'ok', data: result.value }
          : { domain, status: 'error', error: serializeDataForSeoError(result.reason) };
      }),
      discoveredCompetitors,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: serializeDataForSeoError(error) }, { status: error.status || 500 });
  }
}
