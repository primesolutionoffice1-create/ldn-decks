import { NextResponse } from 'next/server';
import { getUserData, isDataForSeoConfigured, serializeDataForSeoError } from '@/lib/dataforseo';
import { requireSeoAdmin } from '@/lib/seoAdminAuth';

export async function GET(request) {
  const unauthorized = requireSeoAdmin(request);
  if (unauthorized) return unauthorized;

  const useSandbox = new URL(request.url).searchParams.get('sandbox') !== '0';

  if (!isDataForSeoConfigured()) {
    return NextResponse.json({ success: true, mode: 'not_configured', data: { account: { status: 'credentials_missing' } } });
  }

  try {
    const account = await getUserData({ useSandbox });
    return NextResponse.json({
      success: true,
      mode: 'status_only',
      sandbox: useSandbox,
      domain: 'ldndecks.com',
      data: {
        account: { status: 'ok', data: account },
        keywordResearch: { status: 'manual_refresh_required' },
        competitors: { status: 'manual_refresh_required' },
        backlinks: { status: 'manual_refresh_required' },
        domainAnalytics: { status: 'manual_refresh_required' },
        llmMentions: { status: 'manual_refresh_required' },
        apiErrors: { status: 'status_safe' },
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: serializeDataForSeoError(error) }, { status: error.status || 500 });
  }
}
