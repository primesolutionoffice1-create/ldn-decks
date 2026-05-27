// POST /api/vapi/alert-owner
// Silently fires SMS to Andrei's cell when the voice AI detects a HOT lead
// mid-conversation. The caller is NOT told this happened — the system
// prompt explicitly forbids announcing the alert.

import { vapiHandler, sendTwilioSms } from '@/server/vapi/utils';

export const runtime = 'nodejs';

export const POST = vapiHandler(async (args) => {
  const cell = process.env.OWNER_CELL;
  if (!cell) {
    return 'Owner cell not configured — alert skipped.';
  }
  const reason = args.reason || 'High-value lead detected';
  const summary = args.caller_summary || '';
  const phone = args.phone || 'unknown';

  const body = [
    '🔥 HOT CALL IN PROGRESS',
    reason,
    '',
    summary,
    '',
    `Caller: ${phone}`,
  ].join('\n');

  const result = await sendTwilioSms({ to: cell, body });
  return result.ok
    ? 'Owner alerted via SMS.'
    : 'Owner alert failed but call continues normally.';
});
