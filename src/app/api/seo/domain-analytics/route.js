import { NextResponse } from 'next/server';
import { getDomainTechnologies, getDomainWhoisOverview, normalizeDomain, serializeDataForSeoError } from '@/lib/dataforseo';
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

  if (!refresh) return NextResponse.json({ success: true, status: 'manual_refresh_required', product: 'domain_analytics', target });

  const results = await Promise.allSettled([
    getDomainTechnologies(target, { useSandbox }),
    getDomainWhoisOverview(target, { useSandbox }),
  ]);
  return NextResponse.json({
    success: true,
    productStatus: results.every((item) => item.status === 'fulfilled') ? 'ok' : 'partial',
    sandbox: useSandbox,
    target,
    technologies: unwrap(results[0]),
    whoisOverview: unwrap(results[1]),
  });
}
