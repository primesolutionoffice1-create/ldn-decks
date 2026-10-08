import {
  ANTHROPIC_MESSAGES_URL,
  OFFICE_PHONE_DISPLAY,
  anthropicModel,
  resolveMode,
} from './config.mjs';
import { jobLabel } from './questions.mjs';

const SYSTEM_PROMPT = `You write a short first reply for Loudoun Decks, a Class A deck builder in Northern Virginia.
The reply is a draft for the office to send later. It has not been sent.
Write 80 to 130 words. Warm, plain, and specific to the project and city.
Invite a site visit. Mention the office phone ${OFFICE_PHONE_DISPLAY}.
Do not quote a price. Do not promise a start date. Do not say this message was already sent.
Sign off as Loudoun Decks.
If the source is a permit rather than a website lead, do not address a homeowner. Write a call note for the office that starts with "CALL NOTE (do not email):" and reminds them there is no customer email on the permit.`;

export function buildDraftPrompt(record, classification) {
  const service = jobLabel(
    classification?.answers?.service_type?.choice
    || classification?.answers?.new_vs_replacement?.choice,
  );
  return [
    `Source: ${record.source}`,
    `Name: ${record.contactName || '(none)'}`,
    `City: ${record.city || '(none)'}`,
    `Address: ${record.address || '(none)'}`,
    `Service hint: ${record.serviceHint || '(none)'}`,
    `Classified job: ${service}`,
    `Timeline: ${record.raw?.timeline || '(none)'}`,
    `Budget: ${record.raw?.budgetRange || '(none)'}`,
    `Message: ${record.message || '(none)'}`,
    `Permit description: ${record.raw?.description || record.raw?.projectName || '(none)'}`,
    `Issued: ${record.raw?.issuedAt || '(n/a)'}`,
  ].join('\n');
}

export function mockDraft(record, classification) {
  const service = jobLabel(
    classification?.answers?.service_type?.choice
    || classification?.answers?.new_vs_replacement?.choice,
  );
  const city = record.city || 'Northern Virginia';
  if (record.source !== 'website') {
    const issued = String(record.raw?.issuedAt || record.receivedAt || '').slice(0, 10);
    return {
      provider: 'mock',
      model: 'mock',
      channel: 'internal_call_note',
      sendable: false,
      autoSent: false,
      text: `CALL NOTE (do not email): ${record.address || 'Permit address'}, ${city}. ${record.serviceHint || service}. Issued ${issued || 'in the target window'}. The deck is old enough to be a repair or replacement conversation. There is no homeowner email on the public permit. Office line ${OFFICE_PHONE_DISPLAY}.`,
    };
  }
  const first = String(record.contactName || '').trim().split(/\s+/)[0] || 'there';
  return {
    provider: 'mock',
    model: 'mock',
    channel: 'email_reply',
    sendable: false,
    autoSent: false,
    text: `Hi ${first},\n\nThanks for writing Loudoun Decks about a ${service.toLowerCase()} in ${city}. We would like to hear a bit more about the site and then come take a look.\n\nIf a call is easier, the office line is ${OFFICE_PHONE_DISPLAY}. We will follow your timing and will not quote a price until we have seen the project.\n\nTalk soon,\nLoudoun Decks`,
  };
}

function textFromMessage(body) {
  const blocks = Array.isArray(body?.content) ? body.content : [];
  return blocks
    .filter((block) => block && block.type === 'text' && typeof block.text === 'string')
    .map((block) => block.text.trim())
    .filter(Boolean)
    .join('\n')
    .trim();
}

export async function draftReply(record, classification, deps = {}) {
  const env = deps.env || process.env;
  const mode = deps.mode || resolveMode(env);
  if (classification?.bucket !== 'passed') return null;
  if (mode === 'mock') return mockDraft(record, classification);

  const apiKey = deps.apiKey ?? env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY is not set');
  const fetchImpl = deps.fetchImpl || globalThis.fetch;
  const model = deps.model || anthropicModel(env);
  const response = await fetchImpl(ANTHROPIC_MESSAGES_URL, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model,
      max_tokens: 600,
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: buildDraftPrompt(record, classification) }],
    }),
    signal: deps.signal || AbortSignal.timeout(deps.timeoutMs ?? 30000),
  });
  const bodyText = await response.text();
  let body;
  try {
    body = JSON.parse(bodyText);
  } catch {
    body = null;
  }
  if (!response.ok) {
    const detail = body?.error?.message || bodyText.slice(0, 300);
    throw new Error(`Anthropic draft failed (${response.status}): ${detail}`);
  }
  const text = textFromMessage(body);
  if (!text) throw new Error('Anthropic draft response did not include text');
  return {
    provider: 'anthropic',
    model: body.model || model,
    channel: record.source === 'website' ? 'email_reply' : 'internal_call_note',
    sendable: false,
    autoSent: false,
    text,
    usage: body.usage || null,
  };
}
