// Shared utilities for all Vapi webhook endpoints under src/app/api/vapi/*.
//
// Vapi sends function-call webhooks in either of two shapes depending on
// agent config and SDK version:
//   { functionCall: { name, parameters } }   ← classic
//   { message: { type: 'function-call', functionCall: { name, parameters } } }   ← server-message webhook
//   { toolCalls: [{ id, function: { name, arguments } }] }   ← OpenAI-compatible tool calls
//
// We normalize to a single object: { name, args, callSid }.

export function parseFunctionCall(body) {
  // Shape 1: legacy
  if (body?.functionCall?.name) {
    return {
      name: body.functionCall.name,
      args: body.functionCall.parameters || {},
      callSid: body.call?.id || body.callSid || null,
    };
  }
  // Shape 2: server-message wrapper
  if (body?.message?.type === 'function-call') {
    return {
      name: body.message.functionCall?.name,
      args: body.message.functionCall?.parameters || {},
      callSid: body.message.call?.id || null,
    };
  }
  // Shape 3: OpenAI tool calls (newer Vapi)
  if (Array.isArray(body?.toolCalls) && body.toolCalls.length > 0) {
    const tc = body.toolCalls[0];
    let parsed = {};
    try {
      parsed = typeof tc.function?.arguments === 'string'
        ? JSON.parse(tc.function.arguments)
        : (tc.function?.arguments || {});
    } catch {
      parsed = {};
    }
    return {
      name: tc.function?.name,
      args: parsed,
      callSid: body.call?.id || null,
    };
  }
  // Fallback: assume raw args
  return { name: null, args: body || {}, callSid: null };
}

// Verify the request actually came from Vapi. Vapi sends `x-vapi-secret`
// header equal to whatever VAPI_WEBHOOK_SECRET you configured in their
// dashboard. Header name varies by SDK release; we check the common ones.
export function verifyVapiSignature(req) {
  const expected = process.env.VAPI_WEBHOOK_SECRET;
  if (!expected) {
    const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';
    if (isProduction) {
      console.error('[vapi] VAPI_WEBHOOK_SECRET unset in production - rejecting request');
      return false;
    }
    console.warn('[vapi] VAPI_WEBHOOK_SECRET unset - accepting without verification in non-production');
    return true;
  }
  const got =
    req.headers.get('x-vapi-secret') ||
    req.headers.get('x-vapi-signature') ||
    req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ||
    '';
  return got === expected;
}

// Standard error response for invalid Vapi requests.
export function unauthorized() {
  return Response.json({ error: 'unauthorized' }, { status: 401 });
}

// Wrap a handler with shared concerns: auth, body parsing, function-call
// normalization, error catching. Handlers receive (args, ctx) and return
// either a plain object (becomes the function result) or a Response.
export function vapiHandler(fn) {
  return async function (req) {
    if (!verifyVapiSignature(req)) return unauthorized();
    let body;
    try {
      body = await req.json();
    } catch {
      return Response.json({ error: 'invalid_json' }, { status: 400 });
    }
    const call = parseFunctionCall(body);
    try {
      const result = await fn(call.args, { name: call.name, callSid: call.callSid, body });
      if (result instanceof Response) return result;
      return Response.json({ result });
    } catch (err) {
      console.error('[vapi handler error]', err?.message || err);
      const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';
      return Response.json(
        {
          error: 'handler_error',
          ...(isProduction ? {} : { message: String(err?.message || err) }),
        },
        { status: 500 },
      );
    }
  };
}

// Send SMS via Twilio REST API directly (no SDK dependency).
// Twilio creds are required for outbound SMS in alert-owner + escalate paths.
export async function sendTwilioSms({ to, body }) {
  const sid = process.env.TWILIO_SID;
  const token = process.env.TWILIO_TOKEN;
  const from = process.env.TWILIO_FROM;
  if (!sid || !token || !from) {
    console.warn('[twilio] missing creds, skipping SMS');
    return { ok: false, skipped: true };
  }
  const auth = Buffer.from(`${sid}:${token}`).toString('base64');
  const formBody = new URLSearchParams({ From: from, To: to, Body: body });
  const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formBody.toString(),
  });
  if (!res.ok) {
    await res.text().catch(() => '');
    console.error('[twilio] sms send failed', res.status);
    return { ok: false, status: res.status };
  }
  return { ok: true };
}

// Call GHL REST API. Used for appointment booking, calendar lookups, and
// any operation the inbound-webhook contract doesn't cover.
//
// Auth: GHL_API_KEY (Location-level API key, NOT Agency).
// Base: services.leadconnectorhq.com — same as inbound webhooks but REST verbs.
export async function ghlFetch(path, { method = 'GET', body, query } = {}) {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) {
    return { ok: false, skipped: true, reason: 'GHL creds unset' };
  }
  const url = new URL(`https://services.leadconnectorhq.com${path}`);
  if (query) {
    Object.entries(query).forEach(([k, v]) => v != null && url.searchParams.set(k, v));
  }
  const res = await fetch(url.toString(), {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Version: '2021-07-28',
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    return { ok: false, status: res.status, error: text.slice(0, 500) };
  }
  const data = await res.json().catch(() => ({}));
  return { ok: true, data };
}
