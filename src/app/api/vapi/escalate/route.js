// POST /api/vapi/escalate
// Voice AI hand-off path: caller asked twice for a human, is frustrated, or
// agent is out of depth. SMS Andrei with full context so a human can follow
// up before the caller cools off.

import { vapiHandler, sendTwilioSms } from '@/server/vapi/utils';

export const runtime = 'nodejs';

export const POST = vapiHandler(async (args, ctx) => {
  const cell = process.env.OWNER_CELL;
  if (!cell) return 'No owner cell configured — cannot escalate.';

  const reason = args.reason || 'unspecified';
  const summary = args.summary || '';

  const lines = [
    '🚨 VOICE AI ESCALATION',
    `Reason: ${reason}`,
    '',
    summary,
  ];
  if (ctx.callSid) lines.push('', `Call ID: ${ctx.callSid}`);

  await sendTwilioSms({ to: cell, body: lines.join('\n') });
  return 'Escalation sent to owner. Caller will be told.';
});
