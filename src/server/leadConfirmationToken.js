import crypto from 'crypto';

const TOKEN_TTL_MS = 15 * 60 * 1000;

function getSecret() {
  return (
    process.env.LEAD_CONFIRMATION_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    process.env.AUTH_SECRET ||
    process.env.EMAIL_PASS ||
    (process.env.NODE_ENV !== 'production' ? 'ldn-local-lead-confirmation-secret' : '')
  );
}

function sign(value, secret) {
  return crypto.createHmac('sha256', secret).update(value).digest('base64url');
}

export function createLeadConfirmationToken(eventId, now = Date.now()) {
  const secret = getSecret();
  if (!eventId || !secret) return null;

  const issuedAt = String(now);
  const nonce = crypto.randomBytes(16).toString('base64url');
  const payload = `${eventId}.${issuedAt}.${nonce}`;
  return `${issuedAt}.${nonce}.${sign(payload, secret)}`;
}

export function verifyLeadConfirmationToken(eventId, token, now = Date.now()) {
  const secret = getSecret();
  if (!eventId || !token || !secret) {
    return { ok: false, reason: 'missing_event_id_token_or_secret' };
  }

  const parts = String(token).split('.');
  if (parts.length !== 3) {
    return { ok: false, reason: 'malformed_token' };
  }

  const [issuedAt, nonce, signature] = parts;
  const issuedAtMs = Number(issuedAt);
  if (!Number.isFinite(issuedAtMs)) {
    return { ok: false, reason: 'invalid_issued_at' };
  }

  if (now - issuedAtMs > TOKEN_TTL_MS || issuedAtMs - now > 60_000) {
    return { ok: false, reason: 'expired_or_future_token' };
  }

  const payload = `${eventId}.${issuedAt}.${nonce}`;
  const expected = sign(payload, secret);
  const expectedBuffer = Buffer.from(expected);
  const actualBuffer = Buffer.from(signature);

  if (
    expectedBuffer.length !== actualBuffer.length ||
    !crypto.timingSafeEqual(expectedBuffer, actualBuffer)
  ) {
    return { ok: false, reason: 'signature_mismatch' };
  }

  return { ok: true };
}
