import 'server-only';

import { forwardDurableIntake } from './n8nIntakeTransport.mjs';

const CLICK_ID_FIELDS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
const UTM_FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function value(formData, key) {
  const raw = formData.get(key);
  return raw == null ? '' : String(raw).trim();
}

function normalizeName(formData) {
  const fullName = value(formData, 'name');
  if (fullName) return fullName;
  return [value(formData, 'firstName'), value(formData, 'lastName')].filter(Boolean).join(' ').trim();
}

// Source URLs retain public route identity only; query/hash never enter DB.
function canonicalPageUrl(raw) {
  try {
    const url = new URL(String(raw || ''));
    if (url.protocol !== 'https:' || !['ldndecks.com', 'www.ldndecks.com'].includes(url.hostname)
      || url.username || url.password || url.port || url.pathname.length > 500) return '';
    return `https://ldndecks.com${url.pathname}`;
  } catch { return ''; }
}

function buildN8nWebsiteLeadPayload(formData, context = {}) {
  const eventId = value(formData, 'event_id').toLowerCase();
  const recordedConsent = value(formData, 'optional_tracking_consent');
  const consent = ['accepted', 'declined'].includes(recordedConsent) ? recordedConsent : 'unknown';
  const pageUrl = canonicalPageUrl(value(formData, 'source_url'));
  const service = value(formData, 'service') || value(formData, 'projectType') || 'Deck project';
  const message = value(formData, 'message');
  const payload = {
    company: 'LDN',
    source: 'ldndecks.com',
    optional_tracking_consent: consent,
    lead_id: `WEB-${eventId}`,
    event_id: eventId,
    lead_name: normalizeName(formData),
    phone: value(formData, 'phone'),
    email: value(formData, 'email'),
    city: value(formData, 'city'),
    state: value(formData, 'state'),
    zip: value(formData, 'zip'),
    service_type: service,
    project_type: value(formData, 'projectType') || service,
    message,
    timeline: value(formData, 'timeline'),
    budget: value(formData, 'budgetRange') || value(formData, 'budget'),
    material_interest: value(formData, 'materialInterest'),
    homeowner_status: value(formData, 'homeownerStatus'),
    hoa: value(formData, 'hoa'),
    address: value(formData, 'address'),
    source_channel: 'ldndecks.com',
    attribution_channel: value(formData, 'attribution_channel'),
    attribution_basis: value(formData, 'attribution_basis'),
    first_landing_path: value(formData, 'first_landing_path'),
    submit_page_path: value(formData, 'submit_page_path'),
    landing_page: pageUrl,
    page_url: pageUrl,
    page_type: value(formData, 'page_type'),
    page_city: value(formData, 'page_city'),
    page_county: value(formData, 'page_county'),
    form_name: value(formData, 'form_name') || value(formData, 'formLocation') || 'ldndecks.com lead form',
    keyword: consent === 'accepted' ? value(formData, 'utm_term') : '',
    referrer: consent === 'accepted' ? canonicalPageUrl(value(formData, 'referrer')) : '',
    // Server received_at/IP/user-agent belong in receiver audit, not semantic payload.
  };

  for (const key of CLICK_ID_FIELDS) {
    const raw = formData.get(key);
    const id = raw == null ? '' : String(raw);
    if (consent === 'accepted' && id !== '' && !/^[A-Za-z0-9_-]{1,256}$/.test(id)) {
      throw new TypeError('INVALID_CLICK_IDENTIFIER');
    }
    payload[key] = consent === 'accepted' ? id : '';
  }
  for (const key of UTM_FIELDS) {
    payload[key] = consent === 'accepted' ? value(formData, key).replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 200) : '';
  }

  return payload;
}

export async function sendN8nWebsiteLead(formData, context = {}) {
  const enabled = process.env.N8N_WEBSITE_INTAKE_FORWARD_ENABLED === 'true';
  if (!enabled) return { ok: false, skipped: true, state: 'disabled', reason: 'forwarding_disabled' };
  let payload;
  try { payload = buildN8nWebsiteLeadPayload(formData, context); }
  catch { return { ok: false, skipped: true, state: 'held', reason: 'invalid_click_identifier' }; }
  return forwardDurableIntake(payload, {
    enabled: process.env.N8N_WEBSITE_INTAKE_FORWARD_ENABLED === 'true',
    webhookUrl: process.env.N8N_WEBSITE_INTAKE_WEBHOOK_URL,
    secret: process.env.N8N_WEBSITE_INTAKE_SECRET,
    fetchImpl: fetch,
  });
}
