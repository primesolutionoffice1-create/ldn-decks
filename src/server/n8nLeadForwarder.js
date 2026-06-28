'use server';

import crypto from 'node:crypto';

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

function hashIp(ipAddress) {
  if (!ipAddress) return '';
  return crypto.createHash('sha256').update(String(ipAddress)).digest('hex');
}

function buildN8nWebsiteLeadPayload(formData, context = {}) {
  const eventId = value(formData, 'event_id') || `web-${Date.now()}`;
  const service = value(formData, 'service') || value(formData, 'projectType') || 'Deck project';
  const message = value(formData, 'message');
  const payload = {
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
    landing_page: value(formData, 'source_url') || process.env.NEXT_PUBLIC_SITE_URL || 'https://ldndecks.com',
    page_url: value(formData, 'source_url') || process.env.NEXT_PUBLIC_SITE_URL || 'https://ldndecks.com',
    page_type: value(formData, 'page_type'),
    page_city: value(formData, 'page_city'),
    page_county: value(formData, 'page_county'),
    form_name: value(formData, 'form_name') || value(formData, 'formLocation') || 'ldndecks.com lead form',
    keyword: value(formData, 'utm_term'),
    referrer: value(formData, 'referrer'),
    ip_hash: hashIp(context.ipAddress),
    user_agent: context.userAgent || '',
    submitted_at: new Date().toISOString(),
  };

  for (const key of [...CLICK_ID_FIELDS, ...UTM_FIELDS]) {
    payload[key] = value(formData, key);
  }

  return payload;
}

export async function sendN8nWebsiteLead(formData, context = {}) {
  const webhookUrl = process.env.N8N_WEBSITE_INTAKE_WEBHOOK_URL;
  if (!webhookUrl) return { ok: false, skipped: true, reason: 'missing_webhook_url' };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const headers = { 'Content-Type': 'application/json' };
    if (process.env.N8N_WEBSITE_INTAKE_SECRET) {
      headers['x-ldn-n8n-secret'] = process.env.N8N_WEBSITE_INTAKE_SECRET;
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(buildN8nWebsiteLeadPayload(formData, context)),
      signal: controller.signal,
    });

    if (!response.ok) {
      return { ok: false, status: response.status };
    }

    return { ok: true, status: response.status };
  } catch (error) {
    return { ok: false, error: error?.name === 'AbortError' ? 'timeout' : error?.message || String(error) };
  } finally {
    clearTimeout(timeout);
  }
}
