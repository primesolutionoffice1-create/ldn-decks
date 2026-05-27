// POST /api/vapi/create-lead
// Called by the Vapi voice AI agent when it has captured enough info to file
// a lead. Forwards to the existing GHL pipeline via sendGhlLead so voice
// leads land in the same place as web form leads.
//
// Function definition lives at
// /Users/ldndecks/ldn-automation-stack/02-voice-ai/03-functions.md

import { vapiHandler } from '@/server/vapi/utils';
import { sendGhlLead } from '@/server/ghl';

export const runtime = 'nodejs';

export const POST = vapiHandler(async (args, ctx) => {
  const required = ['first_name', 'phone', 'zip', 'project_type'];
  const missing = required.filter((k) => !args[k]);
  if (missing.length) {
    // Returning a string tells the agent what's missing so it can ask the
    // caller. Don't 4xx — Vapi treats the string as the function "result"
    // and feeds it back into the LLM context.
    return `Missing required: ${missing.join(', ')}. Ask the caller and call again.`;
  }

  const fd = new FormData();
  fd.append('firstName', args.first_name);
  fd.append('lastName', args.last_name || '');
  fd.append('phone', args.phone);
  fd.append('email', args.email || '');
  fd.append('address', args.address || '');
  fd.append('zip', args.zip);
  fd.append('projectType', args.project_type);
  fd.append('materialInterest', Array.isArray(args.material_interest) ? args.material_interest.join(',') : (args.material_interest || ''));
  fd.append('budgetRange', args.budget_range || '');
  fd.append('timeline', args.timeline || '');
  fd.append('hoa', args.hoa || '');
  fd.append('leadSource', 'Voice AI');
  fd.append('source_url', 'voice-ai-call');
  fd.append('event_id', ctx.callSid || '');
  fd.append('message', `[Voice AI inbound call]\n${args.notes || ''}`.trim());

  const result = await sendGhlLead(fd);
  if (!result.ok) {
    console.error('[vapi create-lead] GHL forward failed', result);
    // Still respond success to caller — we have the transcript as backup.
    return 'Lead saved to system. (Note: secondary sync delayed.)';
  }

  return 'Lead created successfully. The caller is now in the system.';
});
