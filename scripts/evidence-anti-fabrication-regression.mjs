#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const TMP_ROOT = fs.mkdtempSync(path.join(os.tmpdir(), 'ldn-evidence-regression-'));
const FIXTURE_IMAGE = path.join(TMP_ROOT, 'fixture-ledger-failure.jpg');

function writeFile(relativeOrAbsolutePath, content) {
  const filePath = path.isAbsolute(relativeOrAbsolutePath)
    ? relativeOrAbsolutePath
    : path.join(TMP_ROOT, relativeOrAbsolutePath);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  return filePath;
}

function runNode(args) {
  try {
    const output = execFileSync('node', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return { ok: true, output };
  } catch (error) {
    return {
      ok: false,
      output: `${error.stdout || ''}\n${error.stderr || ''}`,
      message: error.message,
    };
  }
}

function walkFiles(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(entry.name)) walkFiles(full, out);
      continue;
    }
    if (entry.isFile() && /\.(?:js|jsx|ts|tsx|md)$/.test(entry.name)) out.push(full);
  }
  return out;
}

function sourceFiles() {
  return [
    ...walkFiles(path.join(ROOT, 'src/app')),
    ...walkFiles(path.join(ROOT, 'src/components')),
    ...walkFiles(path.join(ROOT, 'src/lib')),
  ];
}

function existingFiles(paths) {
  return paths
    .map((filePath) => path.join(ROOT, filePath))
    .filter((filePath) => fs.existsSync(filePath));
}

function aiFacingFiles() {
  return existingFiles([
    'public/llms.txt',
    'public/llms-full.txt',
    'src/app/llms.txt/route.js',
    'src/app/llms-full.txt/route.js',
  ]);
}

function blueprintProofFiles() {
  return [
    ...walkFiles(path.join(ROOT, 'seo-blueprint', '07-copy')),
    ...existingFiles([
      'seo-blueprint/02-COMPETITOR-INTEL.md',
      'seo-blueprint/04-LOCAL-SEO.md',
      'seo-blueprint/09-BACKLINK-PLAYBOOK.md',
      'seo-blueprint/10-CRO-PLAYBOOK.md',
    ]),
  ];
}

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) return null;
  return JSON.parse(match[0]);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function test(name, fn) {
  try {
    const details = fn();
    return { name, ok: true, details };
  } catch (error) {
    return { name, ok: false, error: error.message };
  }
}

function expectPass(name, args, predicate = null) {
  return test(name, () => {
    const result = runNode(args);
    assert(result.ok, `${name} should pass.\n${result.output}`);
    const json = parseTrailingJson(result.output);
    assert(json?.ok, `${name} should emit ok JSON.\n${result.output}`);
    if (predicate) predicate(json);
    return json;
  });
}

function expectFail(name, args, expectedPattern) {
  return test(name, () => {
    const result = runNode(args);
    assert(!result.ok, `${name} should fail but passed.\n${result.output}`);
    assert(expectedPattern.test(result.output), `${name} failed with unexpected output.\nExpected: ${expectedPattern}\nOutput:\n${result.output}`);
    return { matched: expectedPattern.toString() };
  });
}

function main() {
  fs.writeFileSync(FIXTURE_IMAGE, 'temporary regression fixture image');

  const projectVerifiedDowngrade = writeFile('project-verified-downgrade.csv', [
    'project_id,city,neighborhood,month_year,service_type,materials,verified_scope,verified_failure,work_performed,permit_or_hoa_status,before_photo_path,after_photo_path,evidence_status,owner_notes',
    'before-after-project-1,Leesburg,Test Neighborhood,May 2026,Deck resurfacing,Composite,Verified source reviewed,None,Resurfaced deck,No permit required,/Projectsbeforeandafter/project1before.jpeg,/Projectsbeforeandafter/project1after.jpeg,verified,Regression fixture should be downgraded without allow flag.',
    '',
  ].join('\n'));

  const warrantyVerifiedPlaceholder = writeFile('warranty-verified-placeholder.csv', [
    'warranty_id,service_type,term,scope,source,evidence_status,owner_notes',
    'repair-workmanship-warranty-term,deck repair,OWNER TO FILL,OWNER TO FILL,internal regression fixture,verified,Should fail.',
    '',
  ].join('\n'));

  const genericAssetVerified = writeFile('asset-generic-verified.csv', [
    'asset_id,page,needed,evidence_status,owner_notes',
    'ledger-failure-photo,/services/deck-repair,Ledger failure photo,verified,Should fail because assets require file validation.',
    '',
  ].join('\n'));

  const invalidRepairCost = writeFile('invalid-repair-cost.csv', [
    'cost_id,repair_type,low,high,source,evidence_status,owner_notes',
    'joist-sistering,joist sistering,5000,1000,internal regression fixture,verified,Should fail low greater than high.',
    '',
  ].join('\n'));

  const assetMissingSourcePreflight = writeFile('asset-missing-source-preflight.csv', [
    'asset_id,source_path,public_path,evidence_status,city,month_year,caption,owner_notes',
    'ledger-failure-photo,,/images/evidence/regression-ledger-failure.jpg,partial,Ashburn,May 2026,Regression caption,Preflight should pass and report missing source.',
    '',
  ].join('\n'));

  const assetDryRunValid = writeFile('asset-dry-run-valid.csv', [
    'asset_id,source_path,public_path,evidence_status,city,month_year,caption,owner_notes',
    `ledger-failure-photo,${FIXTURE_IMAGE},/images/evidence/regression-ledger-failure.jpg,partial,Ashburn,May 2026,Regression caption,Dry-run should pass without copying.`,
    '',
  ].join('\n'));

  const verifiedProjectMissingProvenance = writeFile('project-verified-missing-provenance.csv', [
    'project_id,city,neighborhood,month_year,service_type,materials,verified_scope,verified_failure,work_performed,permit_or_hoa_status,before_photo_path,after_photo_path,evidence_status,owner_notes',
    'before-after-project-1,Leesburg,Test Neighborhood,May 2026,Deck resurfacing,Composite,Verified source reviewed,None,Resurfaced deck,No permit required,/Projectsbeforeandafter/project1before.jpeg,/Projectsbeforeandafter/project1after.jpeg,verified,',
    '',
  ].join('\n'));

  const verifiedAssetMissingProvenance = writeFile('asset-verified-missing-provenance.csv', [
    'asset_id,source_path,public_path,evidence_status,city,month_year,caption,owner_notes',
    `ledger-failure-photo,${FIXTURE_IMAGE},/images/evidence/regression-ledger-failure.jpg,verified,Ashburn,May 2026,Regression caption,`,
    '',
  ].join('\n'));

  const checks = [
    test('dated SEO artifacts use Eastern local date stamps', () => {
      const lateEveningEastern = localDateStamp(new Date('2026-06-09T01:30:00Z'));
      assert(
        lateEveningEastern === '2026-06-08',
        `Expected Eastern local date 2026-06-08 for 2026-06-09T01:30:00Z, got ${lateEveningEastern}.`,
      );

      const source = fs.readFileSync(path.join(ROOT, 'scripts/generate-evidence-unblock-runbook.mjs'), 'utf8');
      assert(
        /filter\(\(date\) => date <= current\)/.test(source),
        'Evidence unblock latest intake resolver must ignore future-dated artifacts.',
      );

      return {
        utcTimestamp: '2026-06-09T01:30:00Z',
        localDate: lateEveningEastern,
        latestIgnoresFutureArtifacts: true,
      };
    }),
    expectPass(
      'verified project is downgraded without --allow-verified',
      ['scripts/import-project-evidence.mjs', '--type', 'projects', '--file', projectVerifiedDowngrade, '--dry-run'],
      (json) => {
        assert(json.requestedVerifiedRows === 1, `Expected 1 requested verified row, got ${json.requestedVerifiedRows}`);
        assert(json.importedVerifiedRows === 0, `Expected 0 imported verified rows, got ${json.importedVerifiedRows}`);
      },
    ),
    expectFail(
      'verified warranty with owner-fill placeholder is blocked',
      ['scripts/import-project-evidence.mjs', '--type', 'warranty_terms', '--file', warrantyVerifiedPlaceholder, '--dry-run', '--allow-verified'],
      /cannot be imported as verified while owner-fill placeholders remain/i,
    ),
    expectFail(
      'verified asset requirement through generic importer is blocked',
      ['scripts/import-project-evidence.mjs', '--type', 'asset_requirements', '--file', genericAssetVerified, '--dry-run', '--allow-verified'],
      /cannot be imported as verified through the generic evidence importer/i,
    ),
    expectFail(
      'invalid verified repair cost range is blocked by validator',
      ['scripts/import-project-evidence.mjs', '--type', 'repair_cost_ranges', '--file', invalidRepairCost, '--allow-verified'],
      /invalid cost range/i,
    ),
    expectPass(
      'asset manifest preflight allows missing source paths only in preflight',
      ['scripts/ingest-evidence-assets.mjs', '--file', assetMissingSourcePreflight, '--preflight'],
      (json) => {
        assert(json.missingSourceRows === 1, `Expected 1 missing source row, got ${json.missingSourceRows}`);
        assert(json.copied === 0, `Expected copied 0, got ${json.copied}`);
      },
    ),
    expectPass(
      'asset manifest dry-run validates real source without copying',
      ['scripts/ingest-evidence-assets.mjs', '--file', assetDryRunValid, '--dry-run'],
      (json) => {
        assert(json.missingSourceRows === 0, `Expected 0 missing source rows, got ${json.missingSourceRows}`);
        assert(json.copied === 0, `Expected copied 0, got ${json.copied}`);
      },
    ),
    expectFail(
      'verified project without concrete provenance is blocked',
      ['scripts/import-project-evidence.mjs', '--type', 'projects', '--file', verifiedProjectMissingProvenance, '--dry-run', '--allow-verified'],
      /cannot be imported as verified without concrete owner_notes/i,
    ),
    expectFail(
      'verified asset without concrete provenance is blocked',
      ['scripts/ingest-evidence-assets.mjs', '--file', verifiedAssetMissingProvenance, '--dry-run', '--allow-verified'],
      /cannot be imported as verified without concrete owner_notes/i,
    ),
    expectPass(
      'current evidence ledger remains valid after regression checks',
      ['scripts/validate-evidence-ledger.mjs'],
      (json) => {
        assert(json.verifiedProjects === 0, `Expected 0 verified projects in current ledger, got ${json.verifiedProjects}`);
        assert(json.errors.length === 0, `Expected 0 ledger errors, got ${json.errors.length}`);
      },
    ),
    test('prepublish evidence failure includes unblock runbook guidance', () => {
      const result = runNode(['scripts/enforce-publish-readiness.mjs']);
      assert(!result.ok, `Prepublish should remain blocked until owner evidence is verified.\n${result.output}`);
      const json = parseTrailingJson(result.output);
      assert(json?.ok === false, `Expected prepublish JSON with ok false.\n${result.output}`);
      assert(
        json.evidenceUnblock?.command === 'npm run seo:evidence-unblock -- --date latest',
        `Expected evidenceUnblock command in prepublish failure output.\n${result.output}`,
      );
      assert(
        /docs\/seo\/evidence-unblock-runbook-\d{4}-\d{2}-\d{2}\.md/.test(json.evidenceUnblock?.report || ''),
        `Expected evidenceUnblock report path in prepublish failure output.\n${result.output}`,
      );
      assert(
        Number(json.evidenceUnblock?.blockedPages) >= 1,
        `Expected evidenceUnblock blocked page count.\n${result.output}`,
      );
      assert(
        (json.blockedPages || []).some((page) => (page.topMissingItems || []).length > 0),
        `Expected blocked pages to expose item-level missing evidence.\n${result.output}`,
      );
      const repairPage = (json.blockedPages || []).find((page) => page.page === '/services/deck-repair');
      assert(repairPage, `Expected /services/deck-repair in blocked pages.\n${result.output}`);
      assert(
        repairPage.missingItemCounts?.assets === 8,
        `Expected deck repair missing asset count to be exposed.\n${result.output}`,
      );
      assert(
        repairPage.missingItemCounts?.warrantyTerms === 1,
        `Expected deck repair missing warranty count to be exposed.\n${result.output}`,
      );
      assert(
        repairPage.missingItemCounts?.repairCostRanges === 4,
        `Expected deck repair missing repair cost range count to be exposed.\n${result.output}`,
      );
      return {
        command: json.evidenceUnblock.command,
        report: json.evidenceUnblock.report,
        blockedPages: json.evidenceUnblock.blockedPages,
        deckRepairMissingItemCounts: repairPage.missingItemCounts,
        itemLevelGuidance: true,
      };
    }),
    test('publish readiness JSON includes item-level evidence details', () => {
      const result = runNode(['scripts/publish-readiness-gate.mjs']);
      assert(result.ok, `Publish readiness should run.\n${result.output}`);
      const json = parseTrailingJson(result.output);
      assert(json?.json, `Expected publish readiness output JSON path.\n${result.output}`);
      const full = JSON.parse(fs.readFileSync(path.join(ROOT, json.json), 'utf8'));
      const blocked = (full.pages || []).filter((page) => page.verdict === 'blocked');
      assert(blocked.length >= 1, 'Expected at least one blocked proof page until owner evidence is verified.');
      assert(
        blocked.every((page) => page.items && Object.values(page.items).some((items) => Array.isArray(items) && items.length > 0)),
        `Expected every blocked page to include item-level evidence details.\n${JSON.stringify(blocked, null, 2)}`,
      );
      return { blockedPages: blocked.length };
    }),
    test('generated owner proof docs preserve minimum packet and non-citable rules', () => {
      const packetResult = runNode(['scripts/generate-owner-evidence-packet.mjs']);
      assert(packetResult.ok, `Owner evidence packet should generate.\n${packetResult.output}`);
      const packetJson = parseTrailingJson(packetResult.output);
      assert(packetJson?.report, `Expected owner packet report path.\n${packetResult.output}`);

      const handoffResult = runNode(['scripts/generate-owner-evidence-handoff.mjs']);
      assert(handoffResult.ok, `Owner evidence handoff should generate.\n${handoffResult.output}`);
      const handoffJson = parseTrailingJson(handoffResult.output);
      assert(handoffJson?.report, `Expected handoff report path.\n${handoffResult.output}`);
      assert(
        packetJson.rows === handoffJson.ownerRows,
        `Owner packet rows (${packetJson.rows}) must match handoff ownerRows (${handoffJson.ownerRows}).`,
      );

      const boardResult = runNode(['scripts/generate-proof-ops-board.mjs']);
      assert(boardResult.ok, `Proof ops board should generate.\n${boardResult.output}`);
      const boardJson = parseTrailingJson(boardResult.output);
      assert(boardJson?.checklist, `Expected proof checklist path.\n${boardResult.output}`);
      assert(boardJson?.sprintReport, `Expected proof ops board to expose sprint report path.\n${boardResult.output}`);
      assert(boardJson?.sprintCsv, `Expected proof ops board to expose sprint CSV path.\n${boardResult.output}`);
      assert(boardJson?.sprintBlocks === 5, `Expected proof ops board to expose 5 sprint blocks.\n${boardResult.output}`);

      const unblockResult = runNode(['scripts/generate-evidence-unblock-runbook.mjs', '--date', 'latest']);
      assert(unblockResult.ok, `Evidence unblock runbook should generate.\n${unblockResult.output}`);
      const unblockJson = parseTrailingJson(unblockResult.output);
      assert(unblockJson?.output, `Expected evidence unblock runbook path.\n${unblockResult.output}`);

      const sprintResult = runNode(['scripts/generate-owner-evidence-sprint.mjs']);
      assert(sprintResult.ok, `Owner evidence sprint checklist should generate.\n${sprintResult.output}`);
      const sprintJson = parseTrailingJson(sprintResult.output);
      assert(sprintJson?.report, `Expected owner evidence sprint report path.\n${sprintResult.output}`);
      assert(sprintJson?.csv, `Expected owner evidence sprint CSV path.\n${sprintResult.output}`);
      assert(sprintJson.blocks === 5, `Expected 5 owner sprint blocks.\n${sprintResult.output}`);

      const handoffText = fs.readFileSync(path.join(ROOT, handoffJson.report), 'utf8');
      const checklistText = fs.readFileSync(path.join(ROOT, boardJson.checklist), 'utf8');
      const boardText = fs.readFileSync(path.join(ROOT, boardJson.board), 'utf8');
      const unblockText = fs.readFileSync(path.join(ROOT, unblockJson.output), 'utf8');
      const sprintText = fs.readFileSync(path.join(ROOT, sprintJson.report), 'utf8');
      const sopText = fs.readFileSync(path.join(ROOT, 'seo-blueprint/evidence/OWNER-EVIDENCE-INGESTION-SOP.md'), 'utf8');
      for (const [label, text] of [
        ['owner handoff', handoffText],
        ['proof checklist', checklistText],
      ]) {
        assert(/Minimum Proof Packet/i.test(text), `${label} must include minimum proof packet rules.`);
        assert(/What Must Stay Non-Citable/i.test(text), `${label} must include non-citable evidence rules.`);
        assert(/review counts or ratings/i.test(text), `${label} must block stale review-count citation.`);
        assert(/warranty duration, scope, exclusions/i.test(text), `${label} must block unverifiable warranty claims.`);
      }
      assert(/npm run seo:proof-preflight/i.test(handoffText), 'Owner handoff must include the proof preflight command.');
      assert(/npm run seo:proof-staging-plan/i.test(handoffText), 'Owner handoff must include the proof staging plan command.');
      assert(/expected-blocked/i.test(handoffText), 'Owner handoff must explain expected-blocked prepublish state before owner evidence lands.');
      assert(/Evidence Workload Summary/i.test(handoffText), 'Owner handoff must include a category-count workload summary.');
      assert(/Photo or asset actions: 11/i.test(handoffText), 'Owner handoff must expose asset action count.');
      assert(/Project record actions: 10/i.test(handoffText), 'Owner handoff must expose project action count.');
      assert(/Warranty term actions: 1/i.test(handoffText), 'Owner handoff must expose warranty action count.');
      assert(/Repair cost range actions: 4/i.test(handoffText), 'Owner handoff must expose repair cost action count.');
      assert(/48-Hour Owner Collection Sprint/i.test(handoffText), 'Owner handoff must include a practical short-run collection sprint.');
      assert(/Repair media block/i.test(handoffText), 'Owner handoff sprint must start with repair media collection.');
      assert(/Commercial proof block/i.test(handoffText), 'Owner handoff sprint must include warranty and repair cost proof collection.');
      assert(/Project linkage block/i.test(handoffText), 'Owner handoff sprint must include project linkage collection.');
      assert(/Done means:/i.test(handoffText), 'Owner handoff sprint must define a proof-safe done state.');
      assert(/Sprint checklist report/i.test(handoffText), 'Owner handoff must link the sprint checklist report in owner files.');
      assert(/Sprint checklist CSV/i.test(handoffText), 'Owner handoff must link the sprint checklist CSV in owner files.');
      assert(/owner-evidence-sprint-\d{4}-\d{2}-\d{2}\.md/i.test(handoffText), 'Owner handoff must include the dated sprint checklist report path.');
      assert(/owner-evidence-sprint-\d{4}-\d{2}-\d{2}\.csv/i.test(handoffText), 'Owner handoff must include the dated sprint checklist CSV path.');
      assert(/Directory Citation Evidence Addendum/i.test(handoffText), 'Owner handoff must include directory citation evidence addendum.');
      assert(/npm run seo:directory-citations:validate/i.test(handoffText), 'Owner handoff must include the directory citation validator command.');
      assert(/NADRA directory/i.test(handoffText) && /Bing Places/i.test(handoffText) && /Apple Business Connect/i.test(handoffText) && /Nextdoor/i.test(handoffText) && /Angi/i.test(handoffText), 'Owner handoff must include all high-priority directory citation rows.');
      assert(/Do not add Apple Maps to `sameAs`/i.test(handoffText), 'Owner handoff must keep Apple Maps sameAs proof-gated.');
      assert(/Do not add Nextdoor to `sameAs`/i.test(handoffText), 'Owner handoff must keep Nextdoor sameAs proof-gated.');
      assert(/Do not add Angi to `sameAs`/i.test(handoffText), 'Owner handoff must keep Angi sameAs proof-gated.');
      const packetText = fs.readFileSync(path.join(ROOT, packetJson.report), 'utf8');
      assert(/Evidence Workload Summary/i.test(packetText), 'Owner evidence action packet must include a category-count workload summary.');
      assert(/Photo or asset actions: 11/i.test(packetText), 'Owner evidence action packet must expose asset action count.');
      assert(/Project record actions: 10/i.test(packetText), 'Owner evidence action packet must expose project action count.');
      assert(/Warranty term actions: 1/i.test(packetText), 'Owner evidence action packet must expose warranty action count.');
      assert(/Repair cost range actions: 4/i.test(packetText), 'Owner evidence action packet must expose repair cost action count.');
      assert(/Directory Citation Evidence Addendum/i.test(packetText), 'Owner evidence action packet must include directory citation evidence addendum.');
      assert(/npm run seo:directory-citations:validate/i.test(packetText), 'Owner evidence action packet must include the directory citation validator command.');
      assert(/NADRA directory/i.test(packetText) && /Bing Places/i.test(packetText) && /Apple Business Connect/i.test(packetText) && /Nextdoor/i.test(packetText) && /Angi/i.test(packetText), 'Owner evidence action packet must include all high-priority directory citation rows.');
      assert(/Do not add Apple Maps to `sameAs`/i.test(packetText), 'Owner evidence action packet must keep Apple Maps sameAs proof-gated.');
      assert(/Do not add Nextdoor to `sameAs`/i.test(packetText), 'Owner evidence action packet must keep Nextdoor sameAs proof-gated.');
      assert(/Do not add Angi to `sameAs`/i.test(packetText), 'Owner evidence action packet must keep Angi sameAs proof-gated.');
      assert(!/npm run seo:import-evidence -- --file/i.test(packetText), 'Owner evidence action packet must not show generic import commands without --type.');
      assert(/npm run seo:import-evidence -- --type projects/i.test(packetText), 'Owner evidence action packet must include typed project import command.');
      assert(/npm run seo:import-evidence -- --type warranty_terms/i.test(packetText), 'Owner evidence action packet must include typed warranty import command.');
      assert(/npm run seo:import-evidence -- --type repair_cost_ranges/i.test(packetText), 'Owner evidence action packet must include typed repair cost import command.');
      assert(/npm run seo:ingest-assets -- --file/i.test(packetText), 'Owner evidence action packet must include asset ingest command.');
      for (const [label, text] of [
        ['owner handoff', handoffText],
        ['owner SOP', sopText],
      ]) {
        assert(/concrete `owner_notes`/i.test(text), `${label} must require concrete owner_notes for verified rows.`);
        assert(/Source reviewed:/i.test(text), `${label} must include a concrete source-reviewed owner_notes example.`);
        assert(/owner verification still required/i.test(text), `${label} must block vague verified provenance notes.`);
      }
      assert(/npm run seo:proof-preflight/i.test(sopText), 'Owner SOP must document the proof preflight command.');
      assert(/prepublishExpectedBlocked: true/i.test(sopText), 'Owner SOP must explain expected-blocked prepublish state before owner evidence lands.');
      assert(/npm run seo:proof-staging-plan/i.test(sopText), 'Owner SOP must document the non-destructive proof staging plan.');
      assert(/npm run seo:evidence-sprint/i.test(sopText), 'Owner SOP must document the owner evidence sprint command.');
      assert(/owner-evidence-sprint-YYYY-MM-DD\.md/i.test(sopText), 'Owner SOP must point to the dated owner evidence sprint report.');
      assert(/owner-evidence-sprint-YYYY-MM-DD\.csv/i.test(sopText), 'Owner SOP must point to the dated owner evidence sprint CSV.');
      assert(/repair media, commercial proof, project linkage, privacy, and dry-run blocks/i.test(sopText), 'Owner SOP must summarize the sprint checklist blocks.');
      assert(/Evidence Workload Summary/i.test(unblockText), 'Evidence unblock runbook must include a category-count workload summary.');
      assert(/Missing\/partial photo or asset items: 11/i.test(unblockText), 'Evidence unblock runbook must expose total missing/partial asset workload.');
      assert(/Missing\/partial project records: 10/i.test(unblockText), 'Evidence unblock runbook must expose total missing/partial project workload.');
      assert(/Missing warranty term records: 1/i.test(unblockText), 'Evidence unblock runbook must expose missing warranty workload.');
      assert(/Missing repair cost range records: 4/i.test(unblockText), 'Evidence unblock runbook must expose missing repair cost workload.');
      assert(/Run owner evidence sprint checklist before collecting proof/i.test(boardText), 'Proof ops board must include the owner evidence sprint checklist task.');
      assert(/owner-evidence-sprint-\d{4}-\d{2}-\d{2}\.md/i.test(boardText), 'Proof ops board must link the dated sprint checklist report.');
      assert(/owner-evidence-sprint-\d{4}-\d{2}-\d{2}\.csv/i.test(boardText), 'Proof ops board must link the dated sprint checklist CSV.');
      assert(/npm run seo:evidence-sprint/i.test(checklistText), 'Proof source checklist must include the owner evidence sprint command.');
      assert(/Directory Citation Proof Gate/i.test(checklistText), 'Proof source checklist must include the directory citation proof gate.');
      assert(/npm run seo:directory-citations:validate/i.test(checklistText), 'Proof source checklist must include the directory citation validator command.');
      assert(/NADRA directory/i.test(checklistText) && /Bing Places/i.test(checklistText) && /Apple Business Connect/i.test(checklistText) && /Nextdoor/i.test(checklistText) && /Angi/i.test(checklistText), 'Proof source checklist must include all high-priority directory citation rows.');
      assert(/Owner Evidence Sprint Checklist/i.test(sprintText), 'Owner sprint checklist must render a titled sprint report.');
      assert(/Directory Citation Evidence Addendum/i.test(sprintText), 'Owner sprint checklist must include directory citation evidence addendum.');
      assert(/npm run seo:directory-citations:validate/i.test(sprintText), 'Owner sprint checklist must include the directory citation validator command.');
      assert(/NADRA directory/i.test(sprintText) && /Bing Places/i.test(sprintText) && /Apple Business Connect/i.test(sprintText) && /Nextdoor/i.test(sprintText) && /Angi/i.test(sprintText), 'Owner sprint checklist must include all high-priority directory citation rows.');
      assert(/Do not add Apple Maps to `sameAs`/i.test(sprintText), 'Owner sprint checklist must keep Apple Maps sameAs proof-gated.');
      assert(/Do not add Nextdoor to `sameAs`/i.test(sprintText), 'Owner sprint checklist must keep Nextdoor sameAs proof-gated.');
      assert(/Do not add Angi to `sameAs`/i.test(sprintText), 'Owner sprint checklist must keep Angi sameAs proof-gated.');
      assert(/Repair media/i.test(sprintText), 'Owner sprint checklist must include the repair media block.');
      assert(/Commercial proof/i.test(sprintText), 'Owner sprint checklist must include the commercial proof block.');
      assert(/Project linkage/i.test(sprintText), 'Owner sprint checklist must include the project linkage block.');
      assert(/Photo or asset actions: 11/i.test(sprintText), 'Owner sprint checklist must expose asset action count.');
      assert(/Project record actions: 10/i.test(sprintText), 'Owner sprint checklist must expose project action count.');
      const intakeResult = runNode(['scripts/validate-owner-intake-suite.mjs']);
      assert(intakeResult.ok, `Owner intake suite should pass.\n${intakeResult.output}`);
      const intakeJson = parseTrailingJson(intakeResult.output);
      assert(intakeJson?.sprintBlocks === 5, `Owner intake suite must report 5 sprint blocks.\n${intakeResult.output}`);
      const intakeReport = fs.readFileSync(path.join(ROOT, intakeJson.report), 'utf8');
      assert(/Owner evidence sprint report/i.test(intakeReport), 'Owner intake suite report must include owner sprint report artifact.');
      assert(/Owner evidence sprint CSV/i.test(intakeReport), 'Owner intake suite report must include owner sprint CSV artifact.');
      const commandReferenceResult = runNode(['scripts/validate-proof-command-references.mjs']);
      assert(commandReferenceResult.ok, `Proof command reference validation should pass.\n${commandReferenceResult.output}`);
      const commandReferenceJson = parseTrailingJson(commandReferenceResult.output);
      assert(commandReferenceJson?.missingCommandRefs === 0, `Proof command references must not include missing npm scripts.\n${commandReferenceResult.output}`);
      assert(commandReferenceJson?.missingScriptTargets === 0, `Proof command references must not include package scripts with missing node targets.\n${commandReferenceResult.output}`);
      assert((commandReferenceJson?.duplicateScripts || []).length === 0, `package.json scripts must not contain duplicate keys.\n${commandReferenceResult.output}`);
      return {
        packet: packetJson.report,
        ownerRows: handoffJson.ownerRows,
        handoff: handoffJson.report,
        checklist: boardJson.checklist,
        unblock: unblockJson.output,
        sprint: sprintJson.report,
        sprintBlocks: intakeJson.sprintBlocks,
        commandRefs: commandReferenceJson?.commandRefs || 0,
      };
    }),
    test('proof ops generator does not hardcode dated intake command paths', () => {
      const source = fs.readFileSync(path.join(ROOT, 'scripts/generate-proof-ops-board.mjs'), 'utf8');
      const offenders = [
        /project-evidence-intake-2026-06-02/i,
        /photo-ingestion-manifest-2026-06-02/i,
        /warranty-terms-intake-2026-06-02/i,
        /repair-cost-ranges-intake-2026-06-02/i,
        /owner-evidence-action-packet-2026-06-02/i,
      ].filter((pattern) => pattern.test(source));
      assert(
        offenders.length === 0,
        `Proof ops generator must use current-date paths instead of hardcoded dated intake filenames. Offenders: ${offenders.join(', ')}`,
      );
      return { generator: 'scripts/generate-proof-ops-board.mjs' };
    }),
    expectPass(
      'directory citation packets stay proof-gated and sameAs-safe',
      ['scripts/validate-directory-citation-packets.mjs'],
      (json) => {
        assert(json.packets.length === 5, `Expected 5 directory citation packets, got ${json.packets.length}`);
        assert(json.errors.length === 0, `Expected 0 directory citation errors, got ${json.errors.length}`);
      },
    ),
    test('weekly report keeps owner evidence sprint checklist integrated', () => {
      const source = fs.readFileSync(path.join(ROOT, 'scripts/seo-weekly-report.mjs'), 'utf8');
      assert(
        /Owner evidence sprint checklist/i.test(source),
        'Weekly report must keep the owner evidence sprint checklist audit label.',
      );
      assert(
        /generate-owner-evidence-sprint\.mjs/i.test(source),
        'Weekly report must run the owner evidence sprint generator.',
      );
      assert(
        /parseOwnerEvidenceSprint/i.test(source),
        'Weekly report must parse owner evidence sprint output.',
      );
      assert(
        /ownerSprintMetric/i.test(source),
        'Weekly report must summarize owner evidence sprint output.',
      );
      assert(
        /Owner evidence packet final refresh/i.test(source),
        'Weekly report must rerun owner evidence packet after proof refresh validators so summary metrics stay current.',
      );
      assert(
        /ownerPacketFinal/i.test(source),
        'Weekly report must prefer the final owner evidence packet refresh for summary metrics.',
      );
      assert(
        /npm run seo:evidence-sprint/i.test(source),
        'Weekly operating checks must include the owner evidence sprint command.',
      );
      assert(
        /Brainstein readiness/i.test(source),
        'Weekly report must keep the Brainstein readiness summary row.',
      );
      assert(
        /brainsteinReadinessMetric/i.test(source),
        'Weekly report must summarize Brainstein maturity, gate, and task packets from proof preflight output.',
      );
      assert(
        /docs\/seo\/brainstein-readiness-audit-/i.test(source),
        'Weekly operating checks must point reviewers to the Brainstein readiness audit.',
      );
      assert(
        /docs\/seo\/brainstein-task-packets-/i.test(source),
        'Weekly operating checks must point reviewers to the Brainstein task packets.',
      );
      assert(
        /npm run brainstein:tasks:validate/i.test(source),
        'Weekly operating checks must include the Brainstein task packet validation command.',
      );
      assert(
        /validate-directory-citation-packets\.mjs/i.test(source),
        'Weekly report must run the directory citation packet validator.',
      );
      assert(
        /npm run seo:directory-citations:validate/i.test(source),
        'Weekly operating checks must include the directory citation validation command.',
      );
      assert(
        /validate-proof-command-references\.mjs/i.test(source),
        'Weekly report must run the proof command reference validator.',
      );
      assert(
        /Proof command reference validation/i.test(source),
        'Weekly summary must expose proof command reference validation.',
      );
      assert(
        /duplicate scripts/i.test(source),
        'Weekly proof command reference metric must expose duplicate package script count.',
      );
      assert(
        /missing targets/i.test(source),
        'Weekly proof command reference metric must expose missing script target count.',
      );
      assert(
        /npm run seo:proof-commands:validate/i.test(source),
        'Weekly operating checks must include the proof command reference validation command.',
      );
      return { report: 'scripts/seo-weekly-report.mjs' };
    }),
    test('admin operations dashboard does not hardcode active proof intake paths', () => {
      const source = fs.readFileSync(path.join(ROOT, 'src/app/admin/operations/page.js'), 'utf8');
      const offenders = [
        /project-evidence-intake-2026-06-02/i,
        /photo-ingestion-manifest-2026-06-02/i,
        /warranty-terms-intake-2026-06-02/i,
        /repair-cost-ranges-intake-2026-06-02/i,
        /owner-evidence-action-packet-2026-06-02/i,
        /owner-evidence-sprint-2026-06-02/i,
        /evidence-unblock-runbook-2026-06-02/i,
        /proof-source-checklist-2026-06-02/i,
        /owner-evidence-handoff-2026-06-02/i,
      ].filter((pattern) => pattern.test(source));
      assert(
        offenders.length === 0,
        `Admin operations active proof workflow must derive dated paths from today instead of hardcoding filenames. Offenders: ${offenders.join(', ')}`,
      );
      assert(/function proofPaths\(date\)/.test(source), 'Admin operations should expose a proofPaths(date) helper.');
      assert(/function operationsDateStamp\(date = new Date\(\)\)/.test(source), 'Admin operations should derive the displayed date from the Eastern local date helper.');
      assert(!/toISOString\(\)\.split\('T'\)\[0\]/.test(source), 'Admin operations must not use UTC date stamps for dated proof paths.');
      assert(/proofPreflightCommands\(paths\)/.test(source), 'Admin operations should build proof preflight commands from dynamic paths.');
      assert(/ownerEvidenceSprint\(paths\)/.test(source), 'Admin operations should expose the owner evidence sprint as a first-class dashboard block.');
      assert(/sprintReport: `docs\/seo\/owner-evidence-sprint-\$\{date\}\.md`/.test(source), 'Admin operations should derive the sprint report path from today.');
      assert(/sprintCsv: `docs\/seo\/owner-evidence-sprint-\$\{date\}\.csv`/.test(source), 'Admin operations should derive the sprint CSV path from today.');
      assert(/npm run seo:evidence-sprint/.test(source), 'Admin operations proof commands should include the owner evidence sprint command.');
      assert(/directoryCitationGate\(paths\)/.test(source), 'Admin operations should expose the directory citation proof gate.');
      assert(/npm run seo:directory-citations:validate/.test(source), 'Admin operations proof commands should include directory citation validation.');
      assert(/directoryCitationStatus: `docs\/seo\/directory-citation-status-\$\{date\}\.md`/.test(source), 'Admin operations should derive the directory citation status path from today.');
      assert(/GBP \/ Maps proof ops/i.test(source), 'Admin operations should expose the GBP/Maps proof ops owner queue.');
      assert(/gbp-maps-proof-ops-board-\$\{date\}\.md/.test(source), 'Admin operations should link the dated GBP/Maps proof ops board.');
      return { dashboard: 'src/app/admin/operations/page.js' };
    }),
    test('proof preflight does not recursively run evidence regression', () => {
      const source = fs.readFileSync(path.join(ROOT, 'scripts/proof-system-preflight.mjs'), 'utf8');
      assert(
        !/evidence-anti-fabrication-regression\.mjs/.test(source),
        'Proof preflight must not run evidence regression internally; regression already calls preflight and recursion would hang.',
      );
      assert(
        !/seo:evidence-regression/.test(source),
        'Proof preflight must not shell out to seo:evidence-regression.',
      );
      assert(
        /Owner proof report refresh/.test(source),
        'Proof preflight must refresh dated owner proof reports before staging checks.',
      );
      assert(
        /generate-owner-evidence-handoff\.mjs/.test(source) && /generate-proof-ops-board\.mjs/.test(source),
        'Proof preflight refresh must cover owner handoff and proof ops board artifacts.',
      );
      assert(
        /generate-before-after-evidence-resolution\.mjs/.test(source),
        'Proof preflight refresh must generate the dated before/after evidence resolution artifact.',
      );
      assert(
        /validate-directory-citation-packets\.mjs/.test(source),
        'Proof preflight must include directory citation packet validation.',
      );
      assert(
        /validate-proof-command-references\.mjs/.test(source),
        'Proof preflight must include proof command reference validation.',
      );
      return { script: 'scripts/proof-system-preflight.mjs' };
    }),
    test('proof system staging check covers required proof groups', () => {
      const manifestResult = runNode(['scripts/generate-proof-system-staging-manifest.mjs']);
      assert(manifestResult.ok, `Proof staging manifest should generate before staging check.\n${manifestResult.output}`);
      const manifestJson = parseTrailingJson(manifestResult.output);
      assert(manifestJson?.ok, `Expected proof staging manifest ok JSON.\n${manifestResult.output}`);
      assert(/proof-system-staging-manifest-\d{4}-\d{2}-\d{2}\.md/.test(manifestJson.report || ''), `Expected dynamic staging manifest path.\n${manifestResult.output}`);
      const manifestText = fs.readFileSync(path.join(ROOT, manifestJson.report), 'utf8');
      assert(/Branch: `[^`]+`/i.test(manifestText), 'Proof staging manifest must include the current Git branch.');
      assert(
        manifestText.includes('scripts/generate-owner-evidence-sprint.mjs'),
        'Proof staging manifest must include the owner evidence sprint generator in proof gate core.',
      );
      assert(
        manifestText.includes('scripts/validate-directory-citation-packets.mjs'),
        'Proof staging manifest must include the directory citation validator in proof gate core.',
      );
      assert(
        manifestText.includes('scripts/validate-proof-command-references.mjs'),
        'Proof staging manifest must include the proof command reference validator in proof gate core.',
      );
      assert(
        manifestText.includes('docs/seo/directory-citation-status-'),
        'Proof staging manifest must include the directory citation status artifact.',
      );
      assert(
        manifestText.includes('docs/seo/nadra-directory-verification-packet-')
          && manifestText.includes('docs/seo/nextdoor-citation-cleanup-packet-')
          && manifestText.includes('docs/seo/angi-citation-cleanup-packet-'),
        'Proof staging manifest must include key directory citation packets.',
      );
      assert(
        /npm run seo:directory-citations:validate/.test(manifestText),
        'Proof staging manifest acceptance checks must include directory citation validation.',
      );
      assert(
        /npm run seo:evidence-handoff:validate/.test(manifestText),
        'Proof staging manifest acceptance checks must include owner evidence handoff validation.',
      );
      assert(
        /npm run seo:proof-commands:validate/.test(manifestText),
        'Proof staging manifest acceptance checks must include proof command reference validation.',
      );
      assert(
        manifestText.includes('docs/seo/owner-evidence-sprint-'),
        'Proof staging manifest must include generated owner evidence sprint artifacts.',
      );
      assert(
        manifestText.includes(`Verified projects: \`${manifestJson.proof.verifiedProjects}/${manifestJson.proof.totalProjects}\``),
        'Proof staging manifest must derive current verified project count from the ledger.',
      );
      assert(
        manifestText.includes(`Missing asset requirements: \`${manifestJson.proof.missingAssets}/${manifestJson.proof.totalAssets}\``),
        'Proof staging manifest must derive missing asset count from the ledger.',
      );
      assert(
        manifestText.includes(`Blocked pages: \`${manifestJson.proof.blockedPages}\``),
        'Proof staging manifest must derive blocked page count from publish readiness.',
      );
      for (const route of manifestJson.proof.blockedPagePaths || []) {
        assert(manifestText.includes(`\`${route}\``), `Proof staging manifest must include blocked route ${route}.`);
      }

      const result = runNode(['scripts/proof-system-staging-check.mjs']);
      assert(result.ok, `Proof staging check should pass when required proof files exist.\n${result.output}`);
      const json = parseTrailingJson(result.output);
      assert(json?.ok, `Expected proof staging check ok JSON.\n${result.output}`);
      assert(json.requiredMissing === 0, `Expected 0 required missing files.\n${result.output}`);
      assert(
        (json.groups || []).some((group) => group.id === 'proof_gate_core' && group.missing === 0),
        `Expected proof_gate_core group with no missing files.\n${result.output}`,
      );
      assert(
        (json.groups || []).some((group) => group.id === 'owner_handoff_reports' && group.missing === 0),
        `Expected owner_handoff_reports group with no missing files.\n${result.output}`,
      );
      assert(
        /proof-system-staging-check-\d{4}-\d{2}-\d{2}\.md/.test(json.report || ''),
        `Expected dynamic dated proof staging report path.\n${result.output}`,
      );
      const reportText = fs.readFileSync(path.join(ROOT, json.report), 'utf8');
      assert(/Proof Gate Core/i.test(reportText), 'Proof staging report must include proof gate core group.');
      assert(/Owner Handoff And Generated Proof Reports/i.test(reportText), 'Proof staging report must include owner report group.');

      const planResult = runNode(['scripts/generate-proof-staging-plan.mjs']);
      assert(planResult.ok, `Proof staging plan should generate.\n${planResult.output}`);
      const planJson = parseTrailingJson(planResult.output);
      assert(planJson?.ok, `Expected proof staging plan ok JSON.\n${planResult.output}`);
      assert(/proof-staging-plan-\d{4}-\d{2}-\d{2}\.md/.test(planJson.report || ''), `Expected dynamic proof staging plan path.\n${planResult.output}`);
      const planText = fs.readFileSync(path.join(ROOT, planJson.report), 'utf8');
      assert(/git add/i.test(planText), 'Proof staging plan must include suggested git add commands.');
      assert(/Proof Gate Core/i.test(planText), 'Proof staging plan must include proof gate core group.');
      assert(/Owner Handoff And Generated Proof Reports/i.test(planText), 'Proof staging plan must include owner handoff group.');

      const preflightResult = runNode(['scripts/proof-system-preflight.mjs']);
      assert(preflightResult.ok, `Proof system preflight should pass with expected prepublish block.\n${preflightResult.output}`);
      const preflightJson = parseTrailingJson(preflightResult.output);
      assert(preflightJson?.ok, `Expected proof preflight ok JSON.\n${preflightResult.output}`);
      assert(preflightJson.prepublishExpectedBlocked === true, `Proof preflight must mark prepublish as expected-blocked until owner evidence lands.\n${preflightResult.output}`);
      assert(
        Number(preflightJson.publicPlaceholderFindings) === 0,
        `Proof preflight must expose the public placeholder audit count and keep it at 0 before publish.\n${preflightResult.output}`,
      );
      assert(
        Number(preflightJson.ownerSprintBlocks) === 5,
        `Proof preflight must expose the owner evidence sprint block count.\n${preflightResult.output}`,
      );
      assert(
        (preflightJson.steps || []).some((step) => step.label === 'Public placeholder audit' && step.ok === true),
        `Proof preflight must run public placeholder audit as an explicit step.\n${preflightResult.output}`,
      );
      assert(
        (preflightJson.steps || []).some((step) => step.label === 'Owner evidence sprint checklist' && step.ok === true),
        `Proof preflight must run owner evidence sprint checklist as an explicit step.\n${preflightResult.output}`,
      );
      assert(
        (preflightJson.steps || []).some((step) => step.label === 'Brainstein readiness and task packets' && step.ok === true),
        `Proof preflight must run Brainstein readiness and task packets as an explicit step.\n${preflightResult.output}`,
      );
      assert(
        preflightJson.brainsteinMaturity === 'domain-adapted',
        `Proof preflight must expose Brainstein maturity while proof is blocked.\n${preflightResult.output}`,
      );
      assert(
        preflightJson.brainsteinGate === 'proof-blocked',
        `Proof preflight must expose Brainstein proof-blocked gate while owner evidence is missing.\n${preflightResult.output}`,
      );
      assert(
        Number(preflightJson.brainsteinTaskPackets) === 5,
        `Proof preflight must expose 5 Brainstein task packets.\n${preflightResult.output}`,
      );
      assert(/proof-system-preflight-\d{4}-\d{2}-\d{2}\.md/.test(preflightJson.report || ''), `Expected dynamic proof preflight report path.\n${preflightResult.output}`);
      const preflightText = fs.readFileSync(path.join(ROOT, preflightJson.report), 'utf8');
      assert(
        /Owner evidence sprint blocks: 5/i.test(preflightText),
        `Proof preflight Markdown must expose the owner sprint block count.\n${preflightJson.report}`,
      );
      assert(
        /Brainstein maturity: domain-adapted \(proof-blocked\)/i.test(preflightText),
        `Proof preflight Markdown must expose Brainstein maturity and gate.\n${preflightJson.report}`,
      );
      assert(
        /Brainstein task packets: 5/i.test(preflightText),
        `Proof preflight Markdown must expose Brainstein task packet count.\n${preflightJson.report}`,
      );
      return {
        manifest: manifestJson.report,
        report: json.report,
        plan: planJson.report,
        preflight: preflightJson.report,
        publicPlaceholderFindings: preflightJson.publicPlaceholderFindings,
        ownerSprintBlocks: preflightJson.ownerSprintBlocks,
        requiredMissing: json.requiredMissing,
      };
    }),
    test('Brainstein readiness audit stays proof-gated until owner evidence clears', () => {
      const generateResult = runNode(['scripts/generate-brainstein-readiness-audit.mjs']);
      assert(generateResult.ok, `Brainstein readiness generator should pass.\n${generateResult.output}`);
      const generatedJson = parseTrailingJson(generateResult.output);
      assert(generatedJson?.ok, `Brainstein readiness generator should emit ok JSON.\n${generateResult.output}`);
      assert(
        generatedJson.maturity?.stage === 'domain-adapted',
        `Brainstein readiness must remain domain-adapted while blocked pages exist.\n${generateResult.output}`,
      );
      assert(
        generatedJson.maturity?.gate === 'proof-blocked',
        `Brainstein readiness must remain proof-blocked while owner evidence is missing.\n${generateResult.output}`,
      );
      assert(
        generatedJson.topBlocker?.id === 'OWNER_EVIDENCE_COLLECTION',
        `Brainstein readiness must expose owner evidence as top blocker.\n${generateResult.output}`,
      );
      assert(
        generatedJson.directoryCitationGate?.packetCount === 5,
        `Brainstein readiness must expose 5 directory citation packets.\n${generateResult.output}`,
      );
      assert(
        generatedJson.directoryCitationGate?.errors?.length === 0,
        `Brainstein readiness directory citation gate must expose 0 errors.\n${generateResult.output}`,
      );
      const readinessText = fs.readFileSync(path.join(ROOT, generatedJson.outputs.report), 'utf8');
      assert(
        /## Directory Citation Gate/i.test(readinessText),
        'Brainstein readiness report must include the Directory Citation Gate section.',
      );
      assert(
        /Bing, Apple, Nextdoor, and Angi remain proof-gated/i.test(readinessText),
        'Brainstein readiness report must keep unresolved directory platforms proof-gated.',
      );

      const validateResult = runNode(['scripts/validate-brainstein-readiness-audit.mjs']);
      assert(validateResult.ok, `Brainstein readiness validator should pass.\n${validateResult.output}`);
      const validationJson = parseTrailingJson(validateResult.output);
      assert(validationJson?.ok, `Brainstein readiness validator should emit ok JSON.\n${validateResult.output}`);

      const taskResult = runNode(['scripts/generate-brainstein-task-packets.mjs']);
      assert(taskResult.ok, `Brainstein task packet generator should pass.\n${taskResult.output}`);
      const taskJson = parseTrailingJson(taskResult.output);
      assert(taskJson?.ok, `Brainstein task packet generator should emit ok JSON.\n${taskResult.output}`);
      assert(taskJson.packets === 5, `Expected 5 Brainstein task packets.\n${taskResult.output}`);
      assert(taskJson.blockedPagePackets === 3, `Expected 3 blocked-page Brainstein task packets.\n${taskResult.output}`);

      const taskValidateResult = runNode(['scripts/validate-brainstein-task-packets.mjs']);
      assert(taskValidateResult.ok, `Brainstein task packet validator should pass.\n${taskValidateResult.output}`);
      const taskValidationJson = parseTrailingJson(taskValidateResult.output);
      assert(taskValidationJson?.ok, `Brainstein task packet validator should emit ok JSON.\n${taskValidateResult.output}`);

      return {
        report: generatedJson.outputs?.report,
        json: generatedJson.outputs?.json,
        taskPackets: taskJson.outputs?.report,
        maturity: generatedJson.maturity,
        topBlocker: generatedJson.topBlocker,
      };
    }),
    test('no hardcoded named customer testimonial snippets in public source', () => {
      const forbiddenPatterns = [
        /const\s+reviewSnippets\s*=/i,
        /James R\./i,
        /Maria\s*&\s*Tom/i,
        /David K\./i,
        /Every neighbor has asked/i,
        /I didn['’]t lift a finger/i,
        /wasn['’]t the cheapest/i,
        /from permit to final walkthrough/i,
      ];
      const offenders = [];
      for (const file of sourceFiles()) {
        const text = fs.readFileSync(file, 'utf8');
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(text)) {
            offenders.push(`${path.relative(ROOT, file)} matched ${pattern}`);
          }
        }
      }
      assert(
        offenders.length === 0,
        `Hardcoded customer testimonial/review snippets require verified source evidence. Offenders:\n${offenders.join('\n')}`,
      );
      return { scannedFiles: sourceFiles().length };
    }),
    test('no unsupported reputation-count shorthand in public source', () => {
      const forbiddenPatterns = [
        /reputation-backed/i,
        /review-backed/i,
        /warranty-backed/i,
        /BBB\s*A\+\s*rated/i,
        /BBB\s*A\+\s*accredited/i,
        /top\s*1%\s*(?:of|in|by)/i,
        /Best of Houzz 2026/i,
        /workmanship guarantee/i,
        /top\s*1\s*percent/i,
        /top\s*1%/i,
        /100%\s*permit\s*approval/i,
        /perfect\s+permit\s+approval/i,
        /5[-\s]?year[\s\S]{0,80}workmanship warranty/i,
        /lifetime[\s\S]{0,80}workmanship warranty/i,
        /full warranty coverage/i,
        /expedited processing/i,
        /expedited\s+claim\s+processing/i,
        /approved on the first attempt/i,
        /at zero cost to you/i,
        /offerCount['"]?\s*:\s*['"]?100/i,
        /50\+\s*Qualified Experts/i,
        /30\+\s*Years of Experience/i,
        /200\+\s*Happy Customers/i,
        /2[-\s]?year\s+(?:extended\s+)?(?:labor|workmanship)\s+warranty/i,
        /2-Year Warranty/i,
        /500\+\s*(?:projects|installs|installations|completed)/i,
        /zero\s+structural\s+failures/i,
        /most-installed/i,
        /most\s+installed/i,
        /best-selling\s+composite/i,
        /weekly\s+across/i,
        /no\s+financial\s+incentive/i,
        /fewer\s+than\s+1%/i,
        /guaranteed\s+(?:24|48)[-\s]?hour/i,
        /guaranteed\s+same[-\s]?day/i,
      ];
      const offenders = [];
      for (const file of sourceFiles()) {
        const text = fs.readFileSync(file, 'utf8');
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(text)) {
            offenders.push(`${path.relative(ROOT, file)} matched ${pattern}`);
          }
        }
      }
      assert(
        offenders.length === 0,
        `Unsupported reputation/count shorthand must be replaced with source-verification language. Offenders:\n${offenders.join('\n')}`,
      );
      return { scannedFiles: sourceFiles().length };
    }),
    test('no unverified completed-project proof language in public source', () => {
      const forbiddenPatterns = [
        /Recent\s+(?:\d+x\d+\s+)?(?:Deck|Resurfacing)\s+Projects/i,
        /Real\s+.*Projects\s+with\s+Costs/i,
        /actual\s+.*projects\s+we['’]ve\s+completed/i,
        /real\s+project\s+costs\s+from\s+our\s+builds/i,
        /Recent\s+project\s+examples/i,
        /project\s+completed\s+in\s+\$\{city\}/i,
      ];
      const offenders = [];
      for (const file of sourceFiles()) {
        const text = fs.readFileSync(file, 'utf8');
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(text)) {
            offenders.push(`${path.relative(ROOT, file)} matched ${pattern}`);
          }
        }
      }
      assert(
        offenders.length === 0,
        `Completed-project proof language must be backed by verified owner evidence or changed to planning-scenario wording. Offenders:\n${offenders.join('\n')}`,
      );
      return { scannedFiles: sourceFiles().length };
    }),
    test('AI-facing llms artifacts do not contain stale proof claims', () => {
      const forbiddenPatterns = [
        /highest\s+(?:dealer|installer|certification)\s+tier/i,
        /handles\s+all\s+permit\s+applications/i,
        /handles\s+the\s+entire\s+permit\s+process/i,
        /all\s+work\s+performed\s+by\s+in-house\s+crews/i,
        /no\s+subcontractors/i,
        /certified\s+by\s+both\s+manufacturers/i,
        /100%\s*permit\s*approval/i,
        /perfect\s+permit\s+approval/i,
        /5\.0★?\s+from\s+\d+\+?/i,
        /\d+\+\s+(?:Google\s+)?reviews/i,
        /2[-\s]?year\s+(?:labor|workmanship)\s+warranty/i,
        /500\+\s*(?:projects|installs|installations|completed)/i,
      ];
      const offenders = [];
      for (const file of aiFacingFiles()) {
        const text = fs.readFileSync(file, 'utf8');
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(text)) offenders.push(`${path.relative(ROOT, file)} matched ${pattern}`);
        }
      }
      assert(
        offenders.length === 0,
        `AI-facing llms artifacts must remain source-verification safe. Offenders:\n${offenders.join('\n')}`,
      );
      return { scannedFiles: aiFacingFiles().length };
    }),
    test('SEO blueprint templates do not reintroduce stale proof claims', () => {
      const forbiddenPatterns = [
        /5\.0★?\s+from\s+\d+\+?/i,
        /\d+\+\s+(?:NoVA\s+)?homeowners/i,
        /TrexPro\s+Platinum[\s\S]{0,120}(?:highest|fewer|top|only)/i,
        /highest\s+(?:dealer|installer|certification)\s+tier/i,
        /fewer\s+than\s+\d+%/i,
        /2[-\s]?year\s+(?:labor|workmanship)\s+warranty/i,
        /we\s+handle\s+(?:every|the entire|all)\s+.*permit/i,
        /live\s+counter:\s*["'][^"']*\d+/i,
        /Project\s+\d+\s+—/i,
        /\d+\s+sq\s*ft\s+Trex\s+Transcend/i,
      ];
      const offenders = [];
      for (const file of blueprintProofFiles()) {
        const text = fs.readFileSync(file, 'utf8');
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(text)) offenders.push(`${path.relative(ROOT, file)} matched ${pattern}`);
        }
      }
      assert(
        offenders.length === 0,
        `SEO blueprint templates must stay proof-safe before reuse. Offenders:\n${offenders.join('\n')}`,
      );
      return { scannedFiles: blueprintProofFiles().length };
    }),
  ];

  const summary = {
    ok: checks.every((check) => check.ok),
    tempRoot: TMP_ROOT,
    checks,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (!summary.ok) process.exit(1);
}

main();
