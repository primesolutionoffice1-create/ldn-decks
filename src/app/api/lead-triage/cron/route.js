import { NextResponse } from 'next/server';
import { authorizeCron } from '@/lib/lead-triage/capture.mjs';
import { runNightly } from '@/lib/lead-triage/pipeline.mjs';
import { sendLeadNotificationEmail } from '@/server/emailDelivery';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

// Vercel Cron invokes this with GET. Two schedules (11:00 and 12:00 UTC)
// cover 7:00 AM Eastern: the handler runs only when the clock in
// America/New_York says 07. The other tick returns 200 without working.
export async function GET(request) {
  const auth = authorizeCron(request);
  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }
  const force = request.nextUrl.searchParams.get('force') === '1';
  try {
    const result = await runNightly({
      force,
      now: new Date(),
      sendEmail: (mail) => sendLeadNotificationEmail(mail),
    });
    const failedLiveEmail = result.mode === 'live' && result.email && result.email.ok === false && result.email.skipped !== true;
    return NextResponse.json(result, {
      status: failedLiveEmail ? 500 : 200,
      headers: { 'x-robots-tag': 'noindex, nofollow, noarchive' },
    });
  } catch (error) {
    console.error('[lead-triage] cron failed', error?.message || error);
    return NextResponse.json({ ok: false, error: 'Lead triage cron failed' }, { status: 500 });
  }
}
