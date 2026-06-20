import { NextResponse } from 'next/server';
import { getApiErrors, serializeDataForSeoError } from '@/lib/dataforseo';
import { requireSeoAdmin } from '@/lib/seoAdminAuth';

const PATHS = ['serp', 'keywords_data', 'dataforseo_labs', 'backlinks', 'domain_analytics', 'ai_optimization'];

export async function GET(request) {
  const unauthorized = requireSeoAdmin(request);
  if (unauthorized) return unauthorized;

  const params = new URL(request.url).searchParams;
  const useSandbox = params.get('sandbox') === '1';
  const paths = params.get('paths')?.split(',').map((path) => path.trim()).filter(Boolean).slice(0, 10) || PATHS;

  const results = await Promise.allSettled(paths.map((path) => getApiErrors(path, { useSandbox })));

  return NextResponse.json({
    success: true,
    status: results.every((item) => item.status === 'fulfilled') ? 'ok' : 'partial',
    sandbox: useSandbox,
    results: paths.map((path, index) => {
      const result = results[index];
      return result.status === 'fulfilled'
        ? { path, status: 'ok', data: result.value }
        : { path, status: 'error', error: serializeDataForSeoError(result.reason) };
    }),
  });
}
