// POST /api/vapi/call-completed
// End-of-call webhook from Vapi. Fires once per call, after disconnect.
// Saves transcript + recording URL onto the GHL contact for review.
//
// Vapi end-of-call message shape:
//   {
//     message: {
//       type: 'end-of-call-report',
//       endedReason, transcript, recordingUrl, summary, call: { ... },
//       customer: { number, ... }
//     }
//   }

import { verifyVapiSignature, unauthorized, ghlFetch } from '@/server/vapi/utils';

export const runtime = 'nodejs';

export async function POST(req) {
  if (!verifyVapiSignature(req)) return unauthorized();

  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'invalid_json' }, { status: 400 });
  }

  const msg = body?.message || body;
  if (msg?.type && msg.type !== 'end-of-call-report') {
    // Vapi sends multiple webhook types to the same URL; only act on EOC.
    return Response.json({ ok: true, ignored: msg.type });
  }

  const callerPhone = msg?.customer?.number || msg?.call?.customer?.number;
  const transcript = msg?.transcript || msg?.artifact?.transcript || '';
  const recordingUrl = msg?.recordingUrl || msg?.artifact?.recordingUrl || '';
  const summary = msg?.summary || msg?.analysis?.summary || '';
  const endedReason = msg?.endedReason || '';
  const callDuration = msg?.durationSeconds || msg?.call?.duration || 0;

  if (!callerPhone) {
    console.warn('[vapi call-completed] no caller phone in payload');
    return Response.json({ ok: true, skipped: true });
  }

  // Find the contact GHL just created.
  const locationId = process.env.GHL_LOCATION_ID;
  if (!locationId) return Response.json({ ok: true, skipped: 'no GHL creds' });

  const search = await ghlFetch('/contacts/search', {
    method: 'POST',
    body: {
      locationId,
      query: callerPhone,
      filters: [{ field: 'phone', operator: 'eq', value: callerPhone }],
    },
  });
  const contact = search.data?.contacts?.[0];
  if (!contact?.id) {
    console.warn('[vapi call-completed] contact not found for', callerPhone);
    return Response.json({ ok: true, skipped: 'contact not found' });
  }

  // Append a note with the full transcript + recording link. Notes show up
  // in the GHL contact view alongside SMS/email history — easy review.
  const noteBody = [
    `📞 Voice AI Call — ${new Date().toISOString()}`,
    `Duration: ${Math.round(callDuration)}s`,
    `Ended: ${endedReason}`,
    '',
    summary ? `Summary:\n${summary}\n` : '',
    recordingUrl ? `Recording: ${recordingUrl}\n` : '',
    transcript ? `Transcript:\n${transcript}` : '',
  ].filter(Boolean).join('\n');

  await ghlFetch(`/contacts/${contact.id}/notes`, {
    method: 'POST',
    body: { body: noteBody, userId: process.env.GHL_OWNER_USER_ID || undefined },
  });

  return Response.json({ ok: true, contactId: contact.id });
}
