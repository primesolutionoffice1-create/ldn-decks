import { createHash, randomUUID, timingSafeEqual } from 'node:crypto';

export function websiteExternalId(payload) {
  const eventId = String(payload.eventId || '').trim();
  if (eventId) return eventId;
  const day = new Date().toISOString().slice(0, 10);
  return createHash('sha256')
    .update([payload.email, payload.phone, payload.message, payload.city, day].join('|'))
    .digest('hex')
    .slice(0, 24);
}

export function websiteRecordFromPayload(payload, now = new Date()) {
  const timestamp = now.toISOString();
  return {
    id: randomUUID(),
    source: 'website',
    externalId: websiteExternalId(payload),
    receivedAt: timestamp,
    contactName: String(payload.name || '').trim(),
    email: String(payload.email || '').trim(),
    phone: String(payload.phone || '').trim(),
    city: String(payload.city || '').trim(),
    state: String(payload.state || 'VA').trim() || 'VA',
    address: String(payload.address || '').trim(),
    serviceHint: String(payload.service || '').trim(),
    message: String(payload.message || '').trim(),
    raw: {
      timeline: String(payload.timeline || ''),
      budgetRange: String(payload.budgetRange || ''),
      materialInterest: String(payload.materialInterest || ''),
      zip: String(payload.zip || ''),
      formName: String(payload.formName || ''),
      sourceUrl: String(payload.sourceUrl || ''),
    },
    status: 'pending',
    classification: null,
    draft: null,
    summarySentAt: null,
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export async function captureWebsiteLead(payload, deps = {}) {
  const { getStore } = await import('./store.mjs');
  const store = deps.store || await getStore(deps.env);
  const record = websiteRecordFromPayload(payload, deps.now);
  const saved = await store.upsert(record);
  return { stored: true, created: saved.created, record: saved.record };
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function authorizeCron(request, env = process.env) {
  const secret = env.CRON_SECRET;
  if (!secret) return { ok: false, status: 401, error: 'CRON_SECRET is not configured' };
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice('Bearer '.length) : '';
  if (!token || !safeEqual(token, secret)) return { ok: false, status: 401, error: 'Unauthorized' };
  return { ok: true };
}

export function authorizeInternal(request, env = process.env) {
  const cron = authorizeCron(request, env);
  if (cron.ok) return cron;
  const username = env.ADMIN_USERNAME || 'admin';
  const password = env.ADMIN_PASSWORD;
  const header = request.headers.get('authorization') || '';
  if (password && header.startsWith('Basic ')) {
    try {
      const decoded = atob(header.slice('Basic '.length));
      const separator = decoded.indexOf(':');
      const user = separator >= 0 ? decoded.slice(0, separator) : '';
      const pass = separator >= 0 ? decoded.slice(separator + 1) : '';
      if (safeEqual(user, username) && safeEqual(pass, password)) return { ok: true };
    } catch {
      return { ok: false, status: 401, error: 'Unauthorized' };
    }
  }
  const production = env.NODE_ENV === 'production' || env.VERCEL_ENV === 'production';
  if (!production && !password && !env.CRON_SECRET) return { ok: true };
  return { ok: false, status: 401, error: 'Unauthorized' };
}
