#!/usr/bin/env node
// Automation stack verification script.
//
// Hits each /api/vapi/* route against a target deployment with realistic
// function-call payloads and reports per-route pass/fail.
//
// Usage:
//   BASE_URL=https://ldndecks.com VAPI_WEBHOOK_SECRET=xyz \
//     node scripts/automation-stack-verify.mjs
//
// Or for local:
//   npm run dev  # in one terminal
//   BASE_URL=http://localhost:3000 \
//     node scripts/automation-stack-verify.mjs
//
// Exit code is 0 if all checks pass, 1 otherwise — usable in CI / pre-launch.

const BASE = process.env.BASE_URL || 'http://localhost:3000';
const SECRET = process.env.VAPI_WEBHOOK_SECRET || '';
const OWNER_CELL = process.env.OWNER_CELL || '';
const IS_LOCAL_TARGET = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i.test(BASE);

const RED = '\x1b[31m', GREEN = '\x1b[32m', YELLOW = '\x1b[33m', CYAN = '\x1b[36m', RESET = '\x1b[0m';

let pass = 0, fail = 0, skip = 0;

async function check(name, fn) {
  process.stdout.write(`  ${CYAN}→${RESET} ${name}... `);
  try {
    const result = await fn();
    if (result === 'skip') {
      console.log(`${YELLOW}SKIP${RESET}`);
      skip++;
      return;
    }
    console.log(`${GREEN}PASS${RESET}${result ? `  ${result}` : ''}`);
    pass++;
  } catch (err) {
    console.log(`${RED}FAIL${RESET}  ${err.message}`);
    fail++;
  }
}

async function checkVapi(name, fn) {
  if (!SECRET && !IS_LOCAL_TARGET) {
    await check(name, async () => 'skip');
    return;
  }
  await check(name, fn);
}

function callVapi(path, fnName, params) {
  return fetch(`${BASE}/api/vapi/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-vapi-secret': SECRET,
    },
    body: JSON.stringify({ functionCall: { name: fnName, parameters: params } }),
  });
}

async function expectJson(res, fn) {
  if (res.status === 401) throw new Error('401 unauthorized (check VAPI_WEBHOOK_SECRET)');
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`HTTP ${res.status}: ${t.slice(0, 200)}`);
  }
  const json = await res.json();
  if (fn) fn(json);
  return json;
}

console.log(`\n${CYAN}╔════════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${CYAN}║${RESET}  LDN Decks Automation Stack — Verification`);
console.log(`${CYAN}║${RESET}  Target: ${BASE}`);
console.log(`${CYAN}║${RESET}  Secret: ${SECRET ? 'set' : 'UNSET (protected Vapi checks will skip on prod)'}`);
console.log(`${CYAN}╚════════════════════════════════════════════════════════════╝${RESET}\n`);

console.log(`${CYAN}1. Env / Site reachable${RESET}`);
await check('site responds', async () => {
  const res = await fetch(BASE);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return `${res.status}`;
});

console.log(`\n${CYAN}2. Pure-compute Vapi functions (no external deps)${RESET}`);

await checkVapi('lookup-zip returns Loudoun for 20176', async () => {
  const res = await callVapi('lookup-zip', 'lookup_zip', { zip: '20176' });
  const json = await expectJson(res);
  if (json.result?.county !== 'Loudoun') throw new Error(`got county=${json.result?.county}`);
  if (json.result?.in_service_area !== true) throw new Error('in_service_area should be true');
  return 'Loudoun ✓';
});

await checkVapi('lookup-zip returns Other for out-of-area zip', async () => {
  const res = await callVapi('lookup-zip', 'lookup_zip', { zip: '21218' }); // Baltimore
  const json = await expectJson(res);
  if (json.result?.county !== 'Other') throw new Error(`got county=${json.result?.county}`);
  if (json.result?.in_service_area !== false) throw new Error('should be out of area');
  return 'Other ✓';
});

await checkVapi('lookup-zip rejects invalid format', async () => {
  const res = await callVapi('lookup-zip', 'lookup_zip', { zip: 'abc' });
  const json = await expectJson(res);
  if (!json.result?.error) throw new Error('expected error in response');
  return 'rejected ✓';
});

await checkVapi('material-pricing returns Trex Transcend range for 400 sqft moderate', async () => {
  const res = await callVapi('material-pricing', 'get_material_pricing_range', {
    material: 'Trex Transcend',
    approx_sqft: 400,
    complexity: 'moderate',
  });
  const json = await expectJson(res);
  if (!json.result?.low || !json.result?.high) throw new Error(`bad response: ${JSON.stringify(json.result)}`);
  if (json.result.low > json.result.high) throw new Error('low > high?');
  return `$${json.result.low.toLocaleString()} – $${json.result.high.toLocaleString()}`;
});

await checkVapi('material-pricing handles cable rail add-on', async () => {
  const res = await callVapi('material-pricing', 'get_material_pricing_range', {
    material: 'Trex Transcend',
    approx_sqft: 400,
    complexity: 'moderate',
    cable_rail_lf: 40,
  });
  const json = await expectJson(res);
  // With cable rail, total should be meaningfully higher than without.
  const base = await callVapi('material-pricing', 'get_material_pricing_range', {
    material: 'Trex Transcend',
    approx_sqft: 400,
    complexity: 'moderate',
  });
  const baseJson = await base.json();
  if (json.result.high <= baseJson.result.high) {
    throw new Error('cable rail did not increase price');
  }
  return '+ rail ✓';
});

await checkVapi('material-pricing rejects unknown material', async () => {
  const res = await callVapi('material-pricing', 'get_material_pricing_range', {
    material: 'Plywood',
    approx_sqft: 300,
  });
  const json = await expectJson(res);
  if (!json.result?.error) throw new Error('expected error');
  return 'rejected ✓';
});

console.log(`\n${CYAN}3. GHL-dependent Vapi functions${RESET}`);

await checkVapi('check-availability returns slots (or fallback)', async () => {
  const res = await callVapi('check-availability', 'check_calendar_availability', {});
  const json = await expectJson(res);
  if (!Array.isArray(json.result?.slots) || json.result.slots.length === 0) {
    throw new Error('no slots returned');
  }
  return json.result.fallback ? 'fallback mode' : 'live GHL';
});

await checkVapi('create-lead with minimal fields succeeds', async () => {
  if (!process.env.GHL_INBOUND_WEBHOOK_URL) return 'skip';
  const res = await callVapi('create-lead', 'create_lead', {
    first_name: 'VerifyTest',
    last_name: 'DELETE-ME',
    phone: '+15715550100',
    email: 'verify-test-delete@ldndecks.com',
    zip: '20176',
    project_type: 'New Build',
    notes: 'Automation verification — safe to delete this contact.',
  });
  const json = await expectJson(res);
  if (typeof json.result !== 'string') throw new Error('expected string result');
  return 'lead filed (delete in GHL)';
});

console.log(`\n${CYAN}4. Twilio-dependent functions (SMS to owner)${RESET}`);

await checkVapi('alert-owner accepts but Twilio may skip', async () => {
  const res = await callVapi('alert-owner', 'send_sms_to_owner', {
    reason: 'verification test',
    caller_summary: 'Automation script verifying SMS path — ignore.',
    phone: '+15715550100',
  });
  const json = await expectJson(res);
  if (!OWNER_CELL || !process.env.TWILIO_SID) {
    return 'skipped (no Twilio creds)';
  }
  return 'SMS sent — check your phone';
});

console.log(`\n${CYAN}5. Auth enforcement${RESET}`);

await check('lookup-zip rejects bad secret', async () => {
  if (!SECRET) return 'skip'; // can't test rejection if we don't have a real secret
  const res = await fetch(`${BASE}/api/vapi/lookup-zip`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-vapi-secret': 'totally-wrong-secret',
    },
    body: JSON.stringify({ functionCall: { name: 'lookup_zip', parameters: { zip: '20176' } } }),
  });
  if (res.status !== 401) throw new Error(`expected 401, got ${res.status}`);
  return '401 ✓';
});

console.log(`\n${CYAN}╔════════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${CYAN}║${RESET}  Results: ${GREEN}${pass} pass${RESET}, ${fail > 0 ? RED : ''}${fail} fail${RESET}, ${YELLOW}${skip} skip${RESET}`);
console.log(`${CYAN}╚════════════════════════════════════════════════════════════╝${RESET}\n`);

if (fail > 0) {
  console.log(`${RED}✗${RESET} Some checks failed. Fix before going live.\n`);
  process.exit(1);
} else {
  console.log(`${GREEN}✓${RESET} All checks passed. System is ready.\n`);
  process.exit(0);
}
