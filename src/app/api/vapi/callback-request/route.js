// POST /api/vapi/callback-request
// Caller wants Andrei specifically. Creates contact (if needed), tags it
// as needs-callback, and SMS-alerts Andrei.

import { vapiHandler, sendTwilioSms } from '@/server/vapi/utils';
import { sendGhlLead } from '@/server/ghl';

export const runtime = 'nodejs';

export const POST = vapiHandler(async (args) => {
  if (!args.phone) return 'Missing phone — ask the caller for it.';

  // File the contact via the same path as web form leads. Tag it for
  // human callback so a GHL workflow can act on it (assign task, etc.).
  const fd = new FormData();
  fd.append('phone', args.phone);
  fd.append('firstName', args.first_name || '');
  fd.append('lastName', args.last_name || '');
  fd.append('leadSource', 'Voice AI');
  fd.append('message',
    `[Voice AI callback request]\nBest time: ${args.best_time || 'unspecified'}\nTopic: ${args.topic || 'general inquiry'}`,
  );
  await sendGhlLead(fd);

  // SMS Andrei so he sees it immediately even if GHL is slow.
  const cell = process.env.OWNER_CELL;
  if (cell) {
    await sendTwilioSms({
      to: cell,
      body: [
        '📞 Callback requested',
        `${args.first_name || 'Caller'}: ${args.phone}`,
        `Best time: ${args.best_time || 'unspecified'}`,
        `Topic: ${args.topic || 'general'}`,
      ].join('\n'),
    });
  }

  return 'Callback request logged. Andrei will reach out.';
});
