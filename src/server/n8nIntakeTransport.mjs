// Server-only internal helper. Do not import from a Client Component.
// The response acknowledges durable intake only, never downstream WC delivery.
const EVENT_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const RECEIPT_ID = /^[A-Za-z0-9][A-Za-z0-9:_-]{0,127}$/;
const ACCEPTED_AT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,6})?(?:Z|[+-]\d{2}:\d{2})$/;

export function validateDurableReceipt(receipt, eventId) {
  if (!receipt || typeof receipt !== 'object' || Array.isArray(receipt)) return false;
  return receipt.schema_version === 'ldn.intake.receipt.v1'
    && receipt.company === 'LDN' && receipt.source === 'ldndecks.com'
    && EVENT_ID.test(eventId) && receipt.event_id === eventId
    && receipt.persisted === true && receipt.simulated === false
    && receipt.state === 'accepted'
    && typeof receipt.receipt_id === 'string' && RECEIPT_ID.test(receipt.receipt_id)
    && typeof receipt.accepted_at === 'string' && ACCEPTED_AT.test(receipt.accepted_at)
    && Number.isFinite(Date.parse(receipt.accepted_at));
}

export async function forwardDurableIntake(payload, {
  enabled = false, webhookUrl, secret, fetchImpl = fetch, timeoutMs = 3000,
} = {}) {
  if (enabled !== true) return { ok: false, skipped: true, state: 'disabled', reason: 'forwarding_disabled' };
  if (typeof secret !== 'string' || !secret.trim()) return { ok: false, skipped: true, state: 'held', reason: 'missing_server_auth' };
  let url;
  try { url = new URL(webhookUrl); } catch { return { ok: false, skipped: true, state: 'held', reason: 'invalid_webhook_url' }; }
  if (url.protocol !== 'https:' || url.hostname !== 'marianazu1.app.n8n.cloud'
    || !/^\/webhook\/[A-Za-z0-9_-]+$/.test(url.pathname)
    || url.username || url.password || url.search || url.hash || url.port) {
    return { ok: false, skipped: true, state: 'held', reason: 'invalid_webhook_url' };
  }
  const eventId = payload?.event_id;
  if (typeof eventId !== 'string' || !EVENT_ID.test(eventId)) return { ok: false, skipped: true, state: 'held', reason: 'invalid_event_id' };
  if (!Number.isInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 10000) return { ok: false, skipped: true, state: 'held', reason: 'invalid_timeout' };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    // Only payload builder fields are sent. No trusted/status/proof caller flags.
    const response = await fetchImpl(url.toString(), {
      method: 'POST', redirect: 'error',
      headers: { 'Content-Type': 'application/json', 'x-ldn-n8n-secret': secret },
      body: JSON.stringify(payload), signal: controller.signal,
    });
    if (response.status === 202) return { ok: false, state: 'transport_received', status: 202, reason: 'durable_receipt_unconfirmed' };
    if (response.status !== 200 && response.status !== 201) {
      const rejected = [400, 401, 403, 404, 409, 422].includes(response.status);
      return { ok: false, state: rejected ? 'held' : 'unknown', status: response.status, reason: 'intake_not_accepted' };
    }
    const text = await response.text();
    if (text.length > 8192) return { ok: false, state: 'unknown', status: response.status, reason: 'invalid_durable_receipt' };
    let receipt;
    try { receipt = JSON.parse(text); } catch { return { ok: false, state: 'unknown', status: response.status, reason: 'invalid_durable_receipt' }; }
    if (!validateDurableReceipt(receipt, eventId)) return { ok: false, state: 'unknown', status: response.status, reason: 'invalid_durable_receipt' };
    // Return the validated projection only; ignore unrecognized response fields.
    return { ok: true, state: 'accepted', status: response.status, receipt: {
      schema_version: receipt.schema_version, company: 'LDN', source: 'ldndecks.com',
      event_id: eventId, persisted: true, simulated: false, state: 'accepted',
      receipt_id: receipt.receipt_id, accepted_at: receipt.accepted_at,
    } };
  } catch {
    // Dispatch/acceptance may already have occurred. Never retry here or log raw errors.
    return { ok: false, state: 'unknown', reason: controller.signal.aborted ? 'timeout' : 'transport_error' };
  } finally { clearTimeout(timeout); }
}
