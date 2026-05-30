'use server';

// Meta Conversions API (CAPI) server-side forwarder.
//
// Posts a single Lead event to Meta's Graph API endpoint when env is configured.
// Gracefully no-ops when META_PIXEL_ID or META_CAPI_ACCESS_TOKEN are absent —
// safe to invoke unconditionally from the contact-form pipeline.
//
// Dedupes against the client-side Meta Pixel event via shared event_id (the
// same UUID generated in ContactForm.jsx and passed via dataLayer to GTM's
// Pixel tag). Meta dedupes within a 7-day window.
//
// PII fields (email, phone, first/last name, zip, city, state, country) are
// hashed with SHA-256 lowercased per Meta's match-key requirements. The
// fbclid from the click-id capture flow becomes fbc; fbp is set if a Pixel
// _fbp cookie exists (passed via formData if available).
//
// Env vars required:
//   META_PIXEL_ID              - your Meta Pixel ID
//   META_CAPI_ACCESS_TOKEN     - generated in Events Manager → Settings → CAPI
//   META_CAPI_TEST_EVENT_CODE  - (optional) only set during testing in Events Manager
//
// Endpoint format:
//   https://graph.facebook.com/v18.0/{pixel_id}/events?access_token={token}

import crypto from 'crypto';

const META_GRAPH_VERSION = 'v18.0';

function hash(value) {
  if (!value) return undefined;
  const normalized = String(value).trim().toLowerCase();
  if (!normalized) return undefined;
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

function normalizePhone(phone) {
  if (!phone) return undefined;
  // E.164-ish: keep digits only, prepend country code if absent
  const digits = String(phone).replace(/\D/g, '');
  if (!digits) return undefined;
  if (digits.length === 10) return `1${digits}`;
  return digits;
}

function buildEventPayload({
  email,
  phone,
  firstName,
  lastName,
  city,
  state,
  zip,
  fbclid,
  fbp,
  eventId,
  eventSourceUrl,
  ipAddress,
  userAgent,
}) {
  // fbc is constructed from fbclid per Meta spec:
  //   fb.1.<timestamp_ms>.<fbclid>
  const fbc = fbclid
    ? `fb.1.${Date.now()}.${fbclid}`
    : undefined;

  const userData = {
    em: hash(email),
    ph: hash(normalizePhone(phone)),
    fn: hash(firstName),
    ln: hash(lastName),
    ct: hash(city),
    st: hash(state),
    zp: hash(zip),
    country: hash('us'),
    fbc,
    fbp,
    client_ip_address: ipAddress,
    client_user_agent: userAgent,
  };

  // Strip undefined keys — Meta rejects payloads with null fields
  Object.keys(userData).forEach((k) => userData[k] === undefined && delete userData[k]);

  return {
    event_name: 'Lead',
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    event_source_url: eventSourceUrl,
    action_source: 'website',
    user_data: userData,
  };
}

/**
 * Fire a Meta Lead event server-side. Safe to call without env configured.
 *
 * @param {object} lead - normalized lead fields from the contact form
 * @returns {Promise<{success: boolean, skipped?: boolean, error?: string}>}
 */
export async function sendMetaLeadEvent(lead) {
  const pixelId = process.env.META_PIXEL_ID;
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const testEventCode = process.env.META_CAPI_TEST_EVENT_CODE;

  if (!pixelId || !accessToken) {
    return { success: false, skipped: true, error: 'META_PIXEL_ID / META_CAPI_ACCESS_TOKEN not configured' };
  }

  const event = buildEventPayload(lead);
  const body = {
    data: [event],
    ...(testEventCode ? { test_event_code: testEventCode } : {}),
  };

  const url = `https://graph.facebook.com/${META_GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error('Meta CAPI non-2xx:', res.status);
      return { success: false, error: `Meta CAPI ${res.status}` };
    }
    return { success: true, response: json };
  } catch (err) {
    console.error('Meta CAPI request failed:', err?.message || err);
    return { success: false, error: String(err && err.message ? err.message : err) };
  }
}
