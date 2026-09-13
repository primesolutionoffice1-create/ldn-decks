import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const scripts = [
  ['preview', fileURLToPath(new URL('../generate-google-ads-offline-preview.mjs', import.meta.url))],
  ['legacy', fileURLToPath(new URL('../generate-google-ads-offline-from-lead-outcomes.mjs', import.meta.url))],
];
const headers = [
  'lead_date', 'event_id', 'gclid', 'gbraid', 'wbraid', 'lead_stage',
  'qualified', 'estimate_scheduled', 'won', 'closed_revenue_value', 'ads_action',
  'qualified_at', 'estimate_scheduled_at', 'contract_signed_at', 'closed_paid_at', 'sales_notes',
];
const consentHeaders = [...headers, 'ad_consent'];
const lead = {
  lead_date: '2025-01-10',
  event_id: 'synthetic-event-001',
  gclid: 'SYNTHETIC-GCLID-001',
  gbraid: '',
  wbraid: '',
  lead_stage: 'Qualified',
  qualified: 'yes',
  estimate_scheduled: 'no',
  won: 'no',
  closed_revenue_value: '',
  ads_action: 'eligible_qualified_lead_upload',
  qualified_at: '2025-01-10 09:12:34-0500',
  estimate_scheduled_at: '',
  contract_signed_at: '',
  closed_paid_at: '',
  sales_notes: 'Synthetic fixture only',
};

function csv(rows, columns = headers) {
  const escape = (value) => '"' + String(value ?? '').replaceAll('"', '""') + '"';
  return [columns.map(escape).join(','), ...rows.map((row) => columns.map((key) => escape(row[key])).join(','))].join('\n') + '\n';
}

function fixture(t, text) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ldn-offline-regression-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(path.join(root, 'synthetic.csv'), text);
  return root;
}

function run(root, kind, script, args = ['synthetic.csv']) {
  const outputArgs = kind === 'legacy' && args.length ? [...args, 'output/legacy.csv'] : args;
  // No inherited lead-input environment, repo cwd, live lead files, or network calls.
  const result = spawnSync(process.execPath, [script, ...outputArgs], {
    cwd: root, env: { NODE_ENV: 'test' }, encoding: 'utf8', timeout: 10_000,
  });
  assert.ifError(result.error);
  return result;
}

function snapshot(root, relative = '') {
  return fs.readdirSync(path.join(root, relative), { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name)).flatMap((entry) => {
    const name = path.join(relative, entry.name);
    return entry.isDirectory()
      ? [[name, 'directory'], ...snapshot(root, name)]
      : [[name, fs.readFileSync(path.join(root, name), 'utf8')]];
  });
}

const invalidCases = [
  ['duplicate order IDs', csv([lead, { ...lead, gclid: 'SYNTHETIC-OTHER-CLICK' }]), /Duplicate Order ID/],
  ['mixed valid and invalid rows', csv([lead, { ...lead, event_id: 'synthetic-2', qualified_at: '' }]), /qualified_at/],
  ['eligible braid-only row', csv([{ ...lead, gclid: '', gbraid: 'SYNTHETIC-BRAID' }]), /recorded gclid/],
  ['eligible wbraid-only row', csv([{ ...lead, gclid: '', wbraid: 'SYNTHETIC-WBRAID' }]), /recorded gclid/],
  ['missing event ID', csv([{ ...lead, event_id: '' }]), /event_id/],
  ['missing timestamp column', csv([lead], headers.filter((key) => key !== 'qualified_at')), /qualified_at/],
  ['legacy daily-grain date only', csv([{ ...lead, qualified_at: '' }]), /actual stage timestamp/],
  ['invalid calendar date', csv([{ ...lead, qualified_at: '2025-02-30 09:00:00-0500' }]), /qualified_at/],
  ['non-leap February 29', csv([{ ...lead, qualified_at: '2025-02-29 09:00:00-0500' }]), /qualified_at/],
  ['missing timezone', csv([{ ...lead, qualified_at: '2025-01-10 09:00:00' }]), /qualified_at/],
  ['invalid timezone', csv([{ ...lead, qualified_at: '2025-01-10 09:00:00-0560' }]), /qualified_at/],
  ['invalid clock time', csv([{ ...lead, qualified_at: '2025-01-10 24:00:00-0500' }]), /qualified_at/],
  ['invalid lead date', csv([{ ...lead, lead_date: '2025-13-01' }]), /lead_date/],
  ['missing estimate proof', csv([{ ...lead, estimate_scheduled: 'yes' }]), /estimate_scheduled_at/],
  ['missing contract proof', csv([{ ...lead, won: 'yes', closed_revenue_value: '20000' }]), /contract_signed_at/],
  ['missing closed-paid proof', csv([{ ...lead, lead_stage: 'Closed Paid', won: 'yes', contract_signed_at: '2025-01-11 10:00:00-0500', closed_revenue_value: '20000' }]), /closed_paid_at/],
  ['unqualified marked eligible', csv([{ ...lead, qualified: 'no' }]), /unqualified lead/],
  ['invalid eligibility action', csv([{ ...lead, ads_action: 'upload_everything' }]), /ads_action/],
  ['ambiguous qualification', csv([{ ...lead, qualified: '' }]), /qualified must/],
  ['ambiguous stage flag', csv([{ ...lead, won: 'maybe' }]), /won must/],
  ['conflicting stage', csv([{ ...lead, lead_stage: 'Won' }]), /lead_stage conflicts/],
  ['unknown eligible stage', csv([{ ...lead, lead_stage: 'Unknown' }]), /lead_stage/],
  ['sample placeholder', csv([{ ...lead, lead_date: 'YYYY-MM-DD' }]), /placeholder/],
  ['empty input', '', /Empty CSV/],
  ['missing headers', csv([lead], headers.filter((key) => key !== 'gclid')), /Missing required headers/],
  ['duplicate headers', csv([lead], [...headers, 'gclid']), /duplicate column/],
  ['blank header', csv([lead], [...headers, '']), /blank or duplicate/],
  ['wrong row width', csv([lead]) + 'one,column\n', /column count/],
  ['unclosed CSV quote', csv([lead]) + '"unclosed', /unclosed quoted/],
  ['text after closing quote', csv([lead]) + '"closed"oops\n', /text after closing/],
  ['unexpected CSV quote', csv([lead]) + 'unquoted"oops\n', /unexpected quote/],
];

for (const value of ['-1', '0', '500junk', 'Infinity', '1e5', '1,23', '25.001', '']) {
  invalidCases.push(['invalid revenue ' + JSON.stringify(value), csv([{
    ...lead, lead_stage: 'Won', won: 'yes', contract_signed_at: '2025-01-11 10:00:00-0500', closed_revenue_value: value,
  }]), /positive conversion value/]);
}

for (const consent of ['denied', 'unknown', 'accepted', '', 'GRANTED', ' true ']) {
  invalidCases.push(['eligible consent ' + JSON.stringify(consent) + ' with a stale GCLID', csv([
    { ...lead, ad_consent: consent },
  ], consentHeaders), /ad_consent must be granted/]);
}
invalidCases.push(['mixed granted and denied consent', csv([
  { ...lead, ad_consent: 'granted' },
  { ...lead, event_id: 'synthetic-denied', ad_consent: 'denied' },
], consentHeaders), /ad_consent must be granted/]);

for (const [kind, script] of scripts) {
  for (const [name, input, errorPattern] of invalidCases) {
    test(kind + ': rejects ' + name + ' without writing any artifact', (t) => {
      const root = fixture(t, input);
      const before = snapshot(root);
      const result = run(root, kind, script);
      assert.equal(result.status, 1, result.stdout + result.stderr);
      assert.match(result.stderr, errorPattern);
      assert.deepEqual(snapshot(root), before);
    });
  }

  test(kind + ': granted consent exports while explicitly held denied rows stay excluded', (t) => {
    const root = fixture(t, csv([
      { ...lead, ad_consent: 'granted' },
      { ...lead, event_id: 'synthetic-held-denied', ad_consent: 'denied', ads_action: 'hold' },
    ], consentHeaders));
    const result = run(root, kind, script);
    assert.equal(result.status, 0, result.stderr);
    const output = snapshot(root).find(([name]) => name.endsWith('.csv') && name !== 'synthetic.csv')[1];
    assert.equal(output.trim().split('\n').length, 2);
    assert.ok(!output.includes('synthetic-held-denied'));
    assert.doesNotMatch(result.stdout + result.stderr, /Manual consent review is required/);
    if (kind === 'preview') assert.deepEqual(JSON.parse(result.stdout).warnings, []);
  });

  test(kind + ': historical input stays compatible but warns that consent review is required', (t) => {
    const root = fixture(t, csv([lead]));
    const result = run(root, kind, script);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout + result.stderr, /Manual consent review is required before upload/);
    assert.ok(snapshot(root).some(([name]) => name.endsWith('.csv') && name !== 'synthetic.csv'));
    if (kind === 'preview') {
      assert.equal(JSON.parse(result.stdout).warnings.length, 1);
      const markdown = snapshot(root).find(([name]) => name.endsWith('.md'))[1];
      assert.match(markdown, /Manual consent review is required before upload/);
    }
  });

  test(kind + ': denied consent leaves existing upload CSV untouched', (t) => {
    const root = fixture(t, csv([{ ...lead, ad_consent: 'denied' }], consentHeaders));
    const today = new Date().toISOString().slice(0, 10);
    const output = kind === 'legacy'
      ? 'output/legacy.csv'
      : 'docs/ads-tracking/google-ads-offline-upload-preview-' + today + '.csv';
    const file = path.join(root, output);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, 'PREEXISTING SYNTHETIC SENTINEL\n');
    const before = snapshot(root);
    const result = run(root, kind, script);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /ad_consent must be granted/);
    assert.deepEqual(snapshot(root), before);
  });

  test(kind + ': failure preserves existing CSV and audit artifacts', (t) => {
    const root = fixture(t, csv([lead, lead]));
    const today = new Date().toISOString().slice(0, 10);
    for (const output of [
      'output/legacy.csv',
      'docs/ads-tracking/google-ads-offline-upload-preview-' + today + '.csv',
      'scripts/output/google-ads-offline-upload-preview-' + today + '.json',
      'scripts/output/google-ads-offline-upload-preview-' + today + '.md',
    ]) {
      const file = path.join(root, output);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, 'PREEXISTING SYNTHETIC SENTINEL\n');
    }
    const before = snapshot(root);
    const result = run(root, kind, script);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /existing CSV/);
    assert.deepEqual(snapshot(root), before);
  });

  test(kind + ': preserves real stage timestamps, offsets, values and order IDs', (t) => {
    const closedLead = {
      ...lead, lead_stage: 'Closed Paid', estimate_scheduled: 'yes', won: 'yes',
      estimate_scheduled_at: '2025-01-12 16:02:03-0500',
      contract_signed_at: '2025-04-14 11:22:33-0400',
      closed_paid_at: '2025-05-15 08:44:55-0400',
      closed_revenue_value: '$25,000.50',
      sales_notes: 'Synthetic, with "quotes"\nand a second line',
    };
    const held = { ...lead, event_id: 'synthetic-held', gclid: '', gbraid: 'SYNTHETIC-BRAID', qualified_at: '', ads_action: 'hold' };
    const root = fixture(t, '\uFEFF' + csv([closedLead, held]).replaceAll('\n', '\r\n'));
    const result = run(root, kind, script);
    assert.equal(result.status, 0, result.stdout + result.stderr);
    const output = snapshot(root).find(([name]) => name.endsWith('.csv') && name !== 'synthetic.csv');
    assert.ok(output, 'Expected upload preview CSV');
    const lines = output[1].trim().split('\n');
    assert.equal(lines.length, 5);
    for (const [stage, time, value] of [
      ['Qualified Lead', closedLead.qualified_at, '500'],
      ['Estimate Scheduled', closedLead.estimate_scheduled_at, '1000'],
      ['Contract Signed', closedLead.contract_signed_at, '25000.5'],
      ['Closed Paid', closedLead.closed_paid_at, '25000.5'],
    ]) {
      assert.ok(lines.includes([lead.gclid, stage, time, value, 'USD', lead.event_id + '::' + stage].join(',')));
    }
    assert.ok(!output[1].includes('SYNTHETIC-BRAID'));
    if (kind === 'legacy') assert.equal(snapshot(root).filter(([name]) => name.endsWith('.json') || name.endsWith('.md')).length, 0);
  });

  test(kind + ': held and excluded rows do not generate an empty upload CSV', (t) => {
    const root = fixture(t, csv([
      { ...lead, ads_action: 'hold', gclid: '', qualified_at: '' },
      { ...lead, ads_action: 'do_not_upload', qualified: 'no' },
    ]));
    const before = snapshot(root);
    const result = run(root, kind, script);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /NO_UPLOAD_ROWS/);
    assert.deepEqual(snapshot(root), before);
  });

  test(kind + ': distinct event IDs do not collide and explicit offsets are retained', (t) => {
    const root = fixture(t, csv([
      { ...lead, lead_date: '2024-02-28', qualified_at: '2024-02-29 08:15:30+0530' },
      { ...lead, event_id: 'synthetic-event-002', qualified_at: '2025-01-10 09:00:00+0000' },
    ]));
    const result = run(root, kind, script);
    assert.equal(result.status, 0, result.stderr);
    const output = snapshot(root).find(([name]) => name.endsWith('.csv') && name !== 'synthetic.csv')[1];
    assert.equal(output.trim().split('\n').length, 3);
    assert.ok(output.includes('2024-02-29 08:15:30+0530'));
    assert.ok(output.includes('2025-01-10 09:00:00+0000'));
  });

  test(kind + ': valid header with no rows does not create output files', (t) => {
    const root = fixture(t, csv([]));
    const before = snapshot(root);
    const result = run(root, kind, script);
    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /NO_UPLOAD_ROWS/);
    assert.deepEqual(snapshot(root), before);
  });

  test(kind + ': missing input fails without output', (t) => {
    const root = fixture(t, csv([lead]));
    const before = snapshot(root);
    const result = run(root, kind, script, ['missing-synthetic.csv']);
    assert.equal(result.status, 1);
    assert.deepEqual(snapshot(root), before);
  });

  test(kind + ': no arguments never find inputs outside the synthetic cwd', (t) => {
    const root = fixture(t, csv([lead]));
    const before = snapshot(root);
    const result = run(root, kind, script, []);
    assert.equal(result.status, 1);
    assert.deepEqual(snapshot(root), before);
  });
}

test('legacy: input path cannot be overwritten as output', (t) => {
  const root = fixture(t, csv([lead]));
  const before = snapshot(root);
  const result = spawnSync(process.execPath, [scripts[1][1], 'synthetic.csv', 'synthetic.csv'], {
    cwd: root, env: { NODE_ENV: 'test' }, encoding: 'utf8', timeout: 10_000,
  });
  assert.ifError(result.error);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /paths must be different/);
  assert.deepEqual(snapshot(root), before);
});

test('legacy: explicit input without output uses the established default path', (t) => {
  const root = fixture(t, csv([lead]));
  const result = spawnSync(process.execPath, [scripts[1][1], 'synthetic.csv'], {
    cwd: root, env: { NODE_ENV: 'test' }, encoding: 'utf8', timeout: 10_000,
  });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.ok(fs.existsSync(path.join(root, 'scripts/output/google-ads-offline-conversions-from-lead-outcomes.csv')));
  assert.ok(!fs.existsSync(path.join(root, 'docs')));
});
