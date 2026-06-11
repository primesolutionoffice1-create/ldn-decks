#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { localDateStamp } from './lib/local-date.mjs';

const __filename = fileURLToPath(import.meta.url);
const repoRoot = path.resolve(path.dirname(__filename), '..');
const outputDir = path.join(repoRoot, 'scripts/output');
const stamp = localDateStamp();
const jsonOut = path.join(outputDir, `automation-static-validation-${stamp}.json`);
const mdOut = path.join(outputDir, `automation-static-validation-${stamp}.md`);

const EXPECTED_ROUTES = [
  {
    slug: 'lookup-zip',
    kind: 'pure',
    functionName: 'lookup_zip',
    mustContain: ['vapiHandler', 'lookupCounty', 'inServiceArea', 'Invalid zip format'],
    mustNotContain: ['sendGhlLead', 'ghlFetch', 'sendTwilioSms'],
  },
  {
    slug: 'material-pricing',
    kind: 'pure',
    functionName: 'get_material_pricing_range',
    mustContain: ['vapiHandler', 'priceRange'],
    mustNotContain: ['sendGhlLead', 'ghlFetch', 'sendTwilioSms'],
  },
  {
    slug: 'check-availability',
    kind: 'ghl-soft-fallback',
    functionName: 'check_calendar_availability',
    env: ['GHL_SITE_VISIT_CALENDAR_ID'],
    mustContain: ['vapiHandler', 'ghlFetch', 'offlineFallback', 'fallback: true'],
  },
  {
    slug: 'create-lead',
    kind: 'ghl-soft-fallback',
    functionName: 'create_lead',
    env: ['GHL_INBOUND_WEBHOOK_URL'],
    mustContain: ['vapiHandler', 'sendGhlLead', 'Lead saved to system', 'secondary sync delayed'],
  },
  {
    slug: 'book-visit',
    kind: 'ghl-soft-fallback',
    functionName: 'book_site_visit',
    env: ['GHL_SITE_VISIT_CALENDAR_ID', 'GHL_LOCATION_ID', 'GHL_API_KEY'],
    mustContain: ['vapiHandler', 'ghlFetch', 'sendGhlLead', 'Calendar not configured', 'confirm by morning'],
  },
  {
    slug: 'call-completed',
    kind: 'ghl-soft-fallback',
    functionName: 'end_of_call_report',
    env: ['GHL_LOCATION_ID', 'GHL_API_KEY'],
    customAuth: true,
    mustContain: ['verifyVapiSignature', 'unauthorized', 'ghlFetch', 'skipped', 'no GHL creds'],
  },
  {
    slug: 'alert-owner',
    kind: 'twilio-soft-fallback',
    functionName: 'send_sms_to_owner',
    env: ['OWNER_CELL', 'TWILIO_SID', 'TWILIO_TOKEN', 'TWILIO_FROM'],
    mustContain: ['vapiHandler', 'sendTwilioSms', 'Owner cell not configured', 'alert skipped'],
  },
  {
    slug: 'callback-request',
    kind: 'ghl-and-twilio-soft-fallback',
    functionName: 'request_human_callback',
    env: ['GHL_INBOUND_WEBHOOK_URL', 'OWNER_CELL', 'TWILIO_SID', 'TWILIO_TOKEN', 'TWILIO_FROM'],
    mustContain: ['vapiHandler', 'sendGhlLead', 'sendTwilioSms', 'Callback request logged'],
  },
  {
    slug: 'escalate',
    kind: 'twilio-soft-fallback',
    functionName: 'escalate_to_owner',
    env: ['OWNER_CELL', 'TWILIO_SID', 'TWILIO_TOKEN', 'TWILIO_FROM'],
    mustContain: ['vapiHandler', 'sendTwilioSms', 'No owner cell configured'],
  },
];

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function lineFor(source, needle) {
  const idx = source.indexOf(needle);
  if (idx === -1) return null;
  return source.slice(0, idx).split('\n').length;
}

function checkRoute(route) {
  const file = path.join(repoRoot, 'src/app/api/vapi', route.slug, 'route.js');
  const source = read(file);
  const utilsSource = read(path.join(repoRoot, 'src/server/vapi/utils.js'));
  const ghlSource = read(path.join(repoRoot, 'src/server/ghl.js'));
  const errors = [];
  const warnings = [];

  if (!source) {
    errors.push('route file missing');
    return { ...route, file, exists: false, errors, warnings };
  }

  if (!/export\s+const\s+runtime\s*=\s*['"]nodejs['"]/.test(source)) {
    errors.push('route does not declare nodejs runtime');
  }
  if (!/export\s+(const\s+POST|async\s+function\s+POST)\b/.test(source)) {
    errors.push('route does not export POST');
  }
  if (route.customAuth) {
    if (!source.includes('verifyVapiSignature') || !source.includes('unauthorized')) {
      errors.push('custom-auth route does not explicitly verify Vapi signature');
    }
  } else if (!source.includes('vapiHandler')) {
    errors.push('route does not use vapiHandler auth wrapper');
  }

  for (const needle of route.mustContain || []) {
    if (!source.includes(needle)) errors.push(`missing required pattern: ${needle}`);
  }
  for (const needle of route.mustNotContain || []) {
    if (source.includes(needle)) errors.push(`pure route should not contain external dependency: ${needle}`);
  }

  const helperSources = [
    source.includes('sendTwilioSms') ? utilsSource : '',
    source.includes('ghlFetch') ? utilsSource : '',
    source.includes('sendGhlLead') ? ghlSource : '',
  ].join('\n');
  const envMentions = (route.env || []).filter((env) =>
    source.includes(`process.env.${env}`) || helperSources.includes(`process.env.${env}`),
  );
  const missingEnvMentions = (route.env || []).filter((env) => !envMentions.includes(env));
  if (missingEnvMentions.length) warnings.push(`declared env not referenced directly in route: ${missingEnvMentions.join(', ')}`);

  return {
    ...route,
    file,
    exists: true,
    postLine: lineFor(source, 'POST'),
    errors,
    warnings,
  };
}

function checkSharedUtils() {
  const file = path.join(repoRoot, 'src/server/vapi/utils.js');
  const source = read(file);
  const errors = [];
  const warnings = [];

  if (!source) {
    errors.push('shared Vapi utils missing');
    return { file, errors, warnings };
  }

  const required = [
    'parseFunctionCall',
    'verifyVapiSignature',
    'VAPI_WEBHOOK_SECRET',
    'NODE_ENV',
    'VERCEL_ENV',
    'production',
    'return false',
    'x-vapi-secret',
    'x-vapi-signature',
    'authorization',
    'handler_error',
    'sendTwilioSms',
    'TWILIO_SID',
    'TWILIO_TOKEN',
    'TWILIO_FROM',
    'ghlFetch',
    'GHL_API_KEY',
    'GHL_LOCATION_ID',
  ];
  required.forEach((needle) => {
    if (!source.includes(needle)) errors.push(`shared utils missing required pattern: ${needle}`);
  });

  const acceptedShapes = ['functionCall', "message?.type === 'function-call'", 'toolCalls'];
  acceptedShapes.forEach((needle) => {
    if (!source.includes(needle)) errors.push(`parseFunctionCall missing payload shape: ${needle}`);
  });

  if (!/if\s*\(!expected\)[\s\S]+production[\s\S]+return false/.test(source)) {
    errors.push('Vapi secret must be required in production when VAPI_WEBHOOK_SECRET is unset');
  }
  if (!source.includes('skipping SMS')) warnings.push('Twilio missing-credentials skip message not found');
  if (!source.includes('GHL creds unset')) warnings.push('GHL missing-credentials skip reason not found');

  return { file, errors, warnings };
}

function checkKnowledgeSources() {
  const pricing = read(path.join(repoRoot, 'src/server/decks/pricing.js'));
  const zipCounty = read(path.join(repoRoot, 'src/server/decks/zipCounty.js'));
  const errors = [];
  const warnings = [];

  ['Trex Transcend', 'Trex Select', 'TimberTech', 'Azek'].forEach((material) => {
    if (!pricing.includes(material)) errors.push(`pricing source missing material: ${material}`);
  });
  ['simple', 'moderate', 'complex'].forEach((complexity) => {
    if (!pricing.includes(complexity)) errors.push(`pricing source missing complexity: ${complexity}`);
  });
  ['Loudoun', 'Fairfax', 'Prince William', 'Arlington', 'Fauquier'].forEach((county) => {
    if (!zipCounty.includes(county)) errors.push(`zip county source missing service county: ${county}`);
  });
  if (!zipCounty.includes("'20176'")) errors.push('zip county source missing Loudoun test zip 20176');
  if (!pricing.includes('Unknown material')) warnings.push('pricing source missing unknown-material error text');

  return { errors, warnings };
}

function renderMarkdown(result) {
  const lines = [
    '# Automation Static Validation',
    '',
    `Date: ${result.date}`,
    `Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `Routes checked: ${result.routes.length}`,
    `Errors: ${result.errors.length}`,
    `Warnings: ${result.warnings.length}`,
    '',
    '## Routes',
    '',
    '| Route | Kind | Status | Notes |',
    '|---|---|---|---|',
    ...result.routes.map((route) => {
      const status = route.errors.length ? 'FAIL' : 'PASS';
      const notes = [...route.errors, ...route.warnings].join('; ') || 'OK';
      return `| /api/vapi/${route.slug} | ${route.kind} | ${status} | ${notes} |`;
    }),
    '',
    '## Shared Utils',
    '',
    `- Status: ${result.sharedUtils.errors.length ? 'FAIL' : 'PASS'}`,
    ...[...result.sharedUtils.errors, ...result.sharedUtils.warnings].map((item) => `- ${item}`),
    '',
    '## Knowledge Sources',
    '',
    `- Status: ${result.knowledge.errors.length ? 'FAIL' : 'PASS'}`,
    ...[...result.knowledge.errors, ...result.knowledge.warnings].map((item) => `- ${item}`),
    '',
    '## External Credentials',
    '',
    '- This validator does not require live GHL, Twilio, or Vapi credentials.',
    '- Runtime verification still requires `BASE_URL` and `VAPI_WEBHOOK_SECRET` for production auth checks.',
    '- GHL lead creation, appointment creation, call-completed notes, and Twilio SMS delivery remain external runtime checks.',
    '',
  ];
  return lines.join('\n');
}

function main() {
  const routes = EXPECTED_ROUTES.map(checkRoute);
  const sharedUtils = checkSharedUtils();
  const knowledge = checkKnowledgeSources();
  const errors = [
    ...routes.flatMap((route) => route.errors.map((error) => `/api/vapi/${route.slug}: ${error}`)),
    ...sharedUtils.errors.map((error) => `shared-utils: ${error}`),
    ...knowledge.errors.map((error) => `knowledge: ${error}`),
  ];
  const warnings = [
    ...routes.flatMap((route) => route.warnings.map((warning) => `/api/vapi/${route.slug}: ${warning}`)),
    ...sharedUtils.warnings.map((warning) => `shared-utils: ${warning}`),
    ...knowledge.warnings.map((warning) => `knowledge: ${warning}`),
  ];

  const result = {
    ok: errors.length === 0,
    date: stamp,
    routes,
    sharedUtils,
    knowledge,
    errors,
    warnings,
    outputs: { jsonOut, mdOut },
  };

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(jsonOut, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(mdOut, renderMarkdown(result));

  console.log(JSON.stringify({
    ok: result.ok,
    routes: routes.length,
    errors: errors.length,
    warnings: warnings.length,
    json: jsonOut,
    report: mdOut,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
