'use server';

// GHL (GoHighLevel) lead forwarder.
//
// Fire-and-forget, env-gated, mirrors the same pattern as metaCapi.js so it
// never blocks the email send or breaks the client redirect to /thank-you.
// If GHL_INBOUND_WEBHOOK_URL is unset, this is a silent no-op.
//
// Why a webhook (not the REST contact API):
//   - One URL per workflow in GHL, simplest to rotate without redeploy
//   - Workflow on the GHL side fans out: contact create, sequence, scoring,
//     tagging, calendar link, alert. We keep the contract here as "lead
//     payload" — GHL owns everything downstream.
//
// Payload contract is documented at:
//   /Users/ldndecks/ldn-automation-stack/01-ghl-blueprint/03-lead-capture.md

import { lookupCounty } from './decks/zipCounty';

const SOURCE_TAGS = {
  'Google LSA': 'source-google-lsa',
  'Google Search': 'source-google-search',
  GBP: 'source-gbp',
  'Meta Ad': 'source-meta',
  Referral: 'source-referral',
  Houzz: 'source-houzz',
  NextDoor: 'source-nextdoor',
  Direct: 'source-direct',
  Other: 'source-other',
};

// Project type tags. Keys mirror BOTH the canonical GHL custom-field enum
// AND the existing ContactForm.jsx service-dropdown values (so the live
// form doesn't need to change for tagging to work).
const PROJECT_TAGS = {
  // Canonical GHL enum
  'New Build': 'type-newbuild',
  Replacement: 'type-replacement',
  Repair: 'type-repair',
  Extension: 'type-extension',
  'Pergola/Cover': 'type-pergola',
  'Multi-level': 'type-multilevel',
  // ContactForm.jsx service values (existing live form)
  'New Decks': 'type-newbuild',
  'Deck Replacement': 'type-replacement',
  'Composite Decks': 'type-newbuild',
  'Deck Resurfacing': 'type-repair',
  'Screened Porches': 'type-screened-porch',
  Pergolas: 'type-pergola',
  Patios: 'type-other',
  Fencing: 'type-other',
  Other: 'type-other',
};

// Translate the live ContactForm.jsx service dropdown value into the
// canonical GHL `project_type` custom-field enum used by HOT scoring + GHL
// smart lists. Without this, the field arrives blank and HOT rules cannot
// match on project type.
function canonicalProjectType(service) {
  switch (service) {
    case 'New Decks':
    case 'Composite Decks':
      return 'New Build';
    case 'Deck Replacement':
      return 'Replacement';
    case 'Deck Resurfacing':
      return 'Repair';
    case 'Screened Porches':
      return 'Pergola/Cover'; // closest in GHL enum
    case 'Pergolas':
      return 'Pergola/Cover';
    case 'Patios':
    case 'Fencing':
    case 'Other':
      return 'Other';
    default:
      return service || '';
  }
}

// Translate the live ContactForm.jsx timeline dropdown values into the
// canonical GHL timeline enum used by HOT scoring. The 1-3 / 3-6 month
// buckets get assigned to the matching season based on today's date —
// HOT rules fire on "This Spring/Summer/Fall" not on month ranges.
function canonicalTimeline(formTimeline, now = new Date()) {
  if (!formTimeline) return '';
  const month = now.getMonth(); // 0 = Jan
  if (formTimeline === 'Immediately') return 'ASAP';
  if (formTimeline === 'Just Exploring') return 'Just Exploring';

  // 1-3 Months: target the season starting next month
  if (formTimeline === '1-3 Months') {
    // Dec/Jan/Feb → spring (Mar-May); Mar/Apr/May → summer (Jun-Aug);
    // Jun/Jul/Aug → fall (Sep-Nov); Sep/Oct/Nov → spring next year
    if (month <= 1 || month === 11) return 'This Spring';
    if (month >= 2 && month <= 4) return 'This Summer';
    if (month >= 5 && month <= 7) return 'This Fall';
    return 'This Spring'; // late fall → spring next year (still HOT-eligible if soon enough)
  }
  // 3-6 Months: a season further out
  if (formTimeline === '3-6 Months') {
    if (month <= 1) return 'This Summer';
    if (month >= 2 && month <= 4) return 'This Fall';
    if (month >= 5 && month <= 7) return 'Next Year';
    return 'This Summer';
  }

  // If the form-canonical enum already matches the GHL enum, pass through.
  return formTimeline;
}

// Click IDs map cleanly onto GHL custom fields so the same attribution view
// works in GHL Smart Lists as in the email + Looker Studio dashboard.
const CLICK_ID_FIELDS = ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'];
const UTM_FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

function normalizePhone(raw) {
  if (!raw) return null;
  const digits = String(raw).replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  return String(raw);
}

function inferSourceTag(utmSource, gclid, fbclid, msclkid) {
  if (fbclid) return SOURCE_TAGS['Meta Ad'];
  if (msclkid) return 'source-bing-ads';
  if (gclid) {
    // gclid alone could be Search or LSA — the form's leadSource field is
    // the source of truth; this is only a fallback when leadSource is empty.
    return SOURCE_TAGS['Google Search'];
  }
  if (utmSource) {
    const s = String(utmSource).toLowerCase();
    if (s.includes('google')) return SOURCE_TAGS['Google Search'];
    if (s.includes('meta') || s.includes('facebook') || s.includes('instagram')) return SOURCE_TAGS['Meta Ad'];
    if (s.includes('gbp') || s.includes('gmb')) return SOURCE_TAGS['GBP'];
    if (s.includes('houzz')) return SOURCE_TAGS['Houzz'];
    if (s.includes('nextdoor')) return SOURCE_TAGS['NextDoor'];
  }
  return SOURCE_TAGS['Direct'];
}

export async function sendGhlLead(formData) {
  const webhookUrl = process.env.GHL_INBOUND_WEBHOOK_URL;
  if (!webhookUrl) return { ok: false, skipped: true };

  try {
    // Reconcile name fields the same way sendContactEmail does.
    const rawName = formData.get('name') || '';
    const firstName = formData.get('firstName') || rawName.split(' ')[0] || '';
    const lastName = formData.get('lastName') || rawName.split(' ').slice(1).join(' ') || '';

    const email = String(formData.get('email') || '').toLowerCase().trim();
    const phone = normalizePhone(formData.get('phone'));
    const service = formData.get('service') || '';
    const message = formData.get('message') || '';
    const address = formData.get('address') || '';
    const city = formData.get('city') || '';
    const state = formData.get('state') || '';
    const zip = formData.get('zip') || '';
    const rawTimeline = formData.get('timeline') || '';
    const timeline = canonicalTimeline(rawTimeline);
    const projectType = canonicalProjectType(formData.get('projectType') || service || '');
    const budgetRange = formData.get('budgetRange') || formData.get('budget') || '';
    const materialInterest = formData.get('materialInterest') || '';
    const hoa = formData.get('hoa') || '';
    const county = formData.get('county') || lookupCounty(zip);
    const leadSource = formData.get('leadSource') || '';

    const eventId = formData.get('event_id');
    const sourceUrl = formData.get('source_url');

    // Attribution dump — same fields the email block surfaces.
    const attribution = {};
    [...CLICK_ID_FIELDS, ...UTM_FIELDS].forEach((k) => {
      const v = formData.get(k);
      if (v) attribution[k] = String(v);
    });

    const sourceTag = SOURCE_TAGS[leadSource]
      || inferSourceTag(attribution.utm_source, attribution.gclid, attribution.fbclid, attribution.msclkid);
    const projectTag = PROJECT_TAGS[projectType] || null;

    // Material interest can arrive as comma-separated string (legacy) or
    // multi-value FormData entry. Normalize to array, then to tags.
    const materialList = String(materialInterest)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const materialTags = materialList.map((m) =>
      `material-${m.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    );

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address1: address,
      city,
      state,
      postal_code: zip,
      source: 'website-form',
      // GHL accepts arbitrary keys under custom_fields; mapping happens in
      // the workflow's "Update Contact" node where IDs are resolved.
      custom_fields: {
        property_county: county,
        project_type: projectType,
        material_interest: materialList,
        budget_range: budgetRange,
        timeline,
        hoa,
        lead_source: leadSource,
        message,
        event_id: eventId,
        source_url: sourceUrl,
        ...attribution,
      },
      tags: [sourceTag, projectTag, ...materialTags].filter(Boolean),
    };

    // 5s timeout — never block the user. GHL ingestion is best-effort; the
    // primary lead-capture surface remains the email + Meta CAPI pair.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    }).finally(() => clearTimeout(timeout));

    if (!res.ok) {
      await res.text().catch(() => '');
      console.error('[ghl] webhook non-2xx', res.status);
      return { ok: false, status: res.status };
    }
    return { ok: true };
  } catch (err) {
    // Aborted by timeout or network error — log + continue. The email is
    // still the durable record; we'll backfill via manual GHL import if
    // GHL is down for a meaningful window.
    console.error('[ghl] forward error', err?.message || err);
    return { ok: false, error: err?.message || String(err) };
  }
}

// Zip → county mapping lives in ./decks/zipCounty.js (single source of truth
// shared with Vapi voice-AI routes).
