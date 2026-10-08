import { NextResponse } from 'next/server';
import { authorizeInternal } from '@/lib/lead-triage/capture.mjs';
import { resolveCutoff, resolveMode } from '@/lib/lead-triage/config.mjs';
import { listToday } from '@/lib/lead-triage/pipeline.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  const auth = authorizeInternal(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }
  try {
    const today = await listToday({
      mode: resolveMode(),
      cutoff: resolveCutoff(),
    });
    return NextResponse.json({
      ok: true,
      ...today,
      cutoff: resolveCutoff(),
      customerContacted: false,
    }, {
      headers: { 'x-robots-tag': 'noindex, nofollow, noarchive' },
    });
  } catch (error) {
    console.error('[lead-triage] today endpoint failed', error?.message || error);
    return NextResponse.json({ ok: false, error: 'Lead triage store is unavailable' }, { status: 503 });
  }
}
