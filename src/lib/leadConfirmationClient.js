const LEAD_CONFIRMATION_RECEIPT_KEY = 'ldn_lead_confirmation_receipt';

function getSessionStorage() {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function storeLeadConfirmationReceipt(eventId, proof, storage = getSessionStorage()) {
  if (!eventId || !proof || !storage) return false;
  try {
    storage.setItem(LEAD_CONFIRMATION_RECEIPT_KEY, JSON.stringify({ eventId, proof }));
    return true;
  } catch {
    return false;
  }
}

export function consumeLeadConfirmationReceipt(storage = getSessionStorage()) {
  if (!storage) return null;
  try {
    const raw = storage.getItem(LEAD_CONFIRMATION_RECEIPT_KEY);
    if (!raw) return null;
    storage.removeItem(LEAD_CONFIRMATION_RECEIPT_KEY);
    const receipt = JSON.parse(raw);
    if (typeof receipt?.eventId !== 'string' || typeof receipt?.proof !== 'string') return null;
    if (!receipt.eventId || !receipt.proof) return null;
    return { eventId: receipt.eventId, proof: receipt.proof };
  } catch {
    return null;
  }
}

export async function verifyLeadConfirmation(eventId, token, fetchImpl = fetch) {
  if (!eventId || !token) return false;

  const response = await fetchImpl('/api/lead-confirmation/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',
    body: JSON.stringify({ eventId, token }),
  });
  const result = await response.json().catch(() => null);
  return Boolean(response.ok && result?.ok);
}
