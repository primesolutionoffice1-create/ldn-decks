#!/usr/bin/env node
/**
 * SEO Weekly Report — aggregate health check.
 *
 * Runs every SEO audit script in sequence and produces a single
 * timestamped report file in the vault. Designed to be run every
 * Monday morning as part of the operational cadence.
 *
 *   npm run seo:weekly
 *
 * Audits combined:
 *   - validate-seo-schema.mjs (schema validator + NAP-drift + HowTo sentinel)
 *   - validate-evidence-ledger.mjs (proof/evidence anti-fabrication gate)
 *   - seo-link-audit.mjs (internal + external link check)
 *   - audit-image-alt.mjs (image alt-text classification)
 *   - seo-daily-check.mjs (build + sitemap snapshot)
 *
 * Output:
 *   - Console: human-readable summary
 *   - Vault: wiki/reports/seo-weekly-<YYYY-MM-DD>.md
 *
 * Exit code 0 even if individual audits return warnings — this is a
 * report, not a CI gate. The individual audit scripts remain the
 * gates for build-blocking issues.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveVaultReportsDir } from './lib/report-paths.mjs';

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = path.resolve(path.dirname(__filename), '..');

const VAULT_REPORTS = resolveVaultReportsDir(REPO_ROOT);

const today = new Date().toISOString().split('T')[0];
const todayISO = new Date().toISOString();

function run(label, cmd) {
  const start = Date.now();
  try {
    const out = execSync(cmd, { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    return { label, ok: true, out, ms: Date.now() - start };
  } catch (e) {
    return { label, ok: false, out: (e.stdout || '') + '\n' + (e.stderr || ''), ms: Date.now() - start, error: e.message };
  }
}

function parseSchemaValidator(out) {
  const match = out.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

function parseTrailingJsonObject(out) {
  for (let start = out.lastIndexOf('{'); start !== -1; start = out.lastIndexOf('{', start - 1)) {
    let depth = 0;
    let inString = false;
    let escaped = false;

    for (let index = start; index < out.length; index += 1) {
      const char = out[index];
      if (inString) {
        if (escaped) {
          escaped = false;
        } else if (char === '\\') {
          escaped = true;
        } else if (char === '"') {
          inString = false;
        }
        continue;
      }

      if (char === '"') inString = true;
      if (char === '{') depth += 1;
      if (char === '}') depth -= 1;

      if (depth === 0) {
        const remainder = out.slice(index + 1).trim();
        if (remainder) break;
        try {
          return JSON.parse(out.slice(start, index + 1));
        } catch {
          break;
        }
      }
    }
  }
  return null;
}

function parseImageAudit(out) {
  // Output of audit-image-alt.mjs starts with the summary JSON object.
  const lines = out.split('\n');
  const startIdx = lines.findIndex(l => l.trim() === '{');
  if (startIdx === -1) return null;
  let depth = 0;
  let endIdx = -1;
  for (let i = startIdx; i < lines.length; i++) {
    depth += (lines[i].match(/\{/g) || []).length;
    depth -= (lines[i].match(/\}/g) || []).length;
    if (depth === 0) { endIdx = i; break; }
  }
  if (endIdx === -1) return null;
  try {
    return JSON.parse(lines.slice(startIdx, endIdx + 1).join('\n'));
  } catch {
    return null;
  }
}

function parseLinkAudit(out) {
  return parseTrailingJsonObject(out);
}

function parseEvidenceValidator(out) {
  return parseTrailingJsonObject(out);
}

function parseEvidenceCoverage(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerEvidencePacket(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerIntakeSuite(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerEvidenceHandoff(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerEvidenceHandoffValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerEvidenceSprint(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerEvidenceSprintValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseOwnerEvidenceActionPacketValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseEvidenceRegression(out) {
  return parseTrailingJsonObject(out);
}

function parseProofSnippets(out) {
  return parseTrailingJsonObject(out);
}

function parseProofSnippetsValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseProofRuntimeValidator(out) {
  return parseTrailingJsonObject(out);
}

function parsePublishReadiness(out) {
  return parseTrailingJsonObject(out);
}

function parseEvidenceUnblock(out) {
  return parseTrailingJsonObject(out);
}

function parseEvidenceUnblockValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseBeforeAfterEvidenceValidation(out) {
  return parseTrailingJsonObject(out);
}

function parsePhotoManifestValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseCommercialEvidenceIntakeValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseBrainsteinReadiness(out) {
  return parseTrailingJsonObject(out);
}

function parseBrainsteinTaskPackets(out) {
  return parseTrailingJsonObject(out);
}

function parseBrainsteinTaskPacketValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseProofCommandReferenceValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDirectoryCitationValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseGrowthMap(out) {
  return parseTrailingJsonObject(out);
}

function parseGrowthMapValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseInternalLinkGap(out) {
  return parseTrailingJsonObject(out);
}

function parseInternalLinkGapValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseProofOpsBoard(out) {
  return parseTrailingJsonObject(out);
}

function parseProofOpsBoardValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseProofSourceChecklistValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseSxoConversion(out) {
  return parseTrailingJsonObject(out);
}

function parseSxoConversionValidation(out) {
  return parseTrailingJsonObject(out);
}

function parsePlaceholderAudit(out) {
  return parseTrailingJsonObject(out);
}

function parseProofStagingCheck(out) {
  return parseTrailingJsonObject(out);
}

function parseProofStagingManifest(out) {
  return parseTrailingJsonObject(out);
}

function parseProofStagingPlan(out) {
  return parseTrailingJsonObject(out);
}

function parseProofPreflight(out) {
  return parseTrailingJsonObject(out);
}

function parseLeadOutcomeValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseCallAttributionEvidenceValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseGbpCadenceValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseAutomationStaticValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseGoogleAdsImportValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseEntityProfileValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseRankTrackerManualSnapshotValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nMcpValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nMcpWorkflowManifestValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nMcpImportPreflight(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nRawFindingsValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nFindingsIntakeDraft(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nFindingsIntakeValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nFindingsReviewBoard(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nFindingsReviewBoardValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nPromotionGate(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nOperatorHandoff(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nOperatorHandoffValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseDataForSeoN8nAllGates(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingReadiness(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingEvidenceRequest(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingEvidenceRequestValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingEvidenceBundle(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingEvidenceBundleValidation(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingBlockerExitChecklist(out) {
  return parseTrailingJsonObject(out);
}

function parseScalingBlockerExitChecklistValidation(out) {
  return parseTrailingJsonObject(out);
}

// ---------- Run audits ----------

console.log(`SEO Weekly Report — ${today}\n${'='.repeat(60)}\n`);

const results = [];
results.push(run('Schema validator', 'node scripts/validate-seo-schema.mjs'));
console.log(`  ✓ Schema validator (${results[0].ms}ms)`);

results.push(run('Evidence ledger validator', 'node scripts/validate-evidence-ledger.mjs'));
console.log(`  ✓ Evidence ledger validator (${results[1].ms}ms)`);

results.push(run('Evidence coverage report', 'node scripts/evidence-coverage-report.mjs'));
console.log(`  ✓ Evidence coverage report (${results[2].ms}ms)`);

results.push(run('Owner evidence packet', 'node scripts/generate-owner-evidence-packet.mjs'));
console.log(`  ✓ Owner evidence packet (${results[3].ms}ms)`);

results.push(run('Owner intake suite validator', 'node scripts/validate-owner-intake-suite.mjs'));
console.log(`  ✓ Owner intake suite validator (${results[4].ms}ms)`);

results.push(run('Owner evidence handoff', 'node scripts/generate-owner-evidence-handoff.mjs'));
console.log(`  ✓ Owner evidence handoff (${results[5].ms}ms)`);

results.push(run('Owner evidence sprint checklist', 'node scripts/generate-owner-evidence-sprint.mjs'));
console.log(`  ✓ Owner evidence sprint checklist (${results[6].ms}ms)`);

results.push(run('Owner evidence action packet validation', 'node scripts/validate-owner-evidence-action-packet.mjs'));
console.log(`  ✓ Owner evidence action packet validation (${results[7].ms}ms)`);

results.push(run('Evidence anti-fabrication regression', 'node scripts/evidence-anti-fabrication-regression.mjs'));
console.log(`  ✓ Evidence anti-fabrication regression (${results[8].ms}ms)`);

results.push(run('Verified proof snippets', 'node scripts/generate-verified-proof-snippets.mjs'));
console.log(`  ✓ Verified proof snippets (${results[9].ms}ms)`);

results.push(run('Proof runtime validator', 'node scripts/validate-proof-runtime.mjs'));
console.log(`  ✓ Proof runtime validator (${results[10].ms}ms)`);

results.push(run('Publish readiness gate', 'node scripts/publish-readiness-gate.mjs'));
console.log(`  ✓ Publish readiness gate (${results[11].ms}ms)`);

results.push(run('Evidence unblock runbook', 'node scripts/generate-evidence-unblock-runbook.mjs --date latest'));
console.log(`  ✓ Evidence unblock runbook (${results[12].ms}ms)`);

results.push(run('Public placeholder audit', 'node scripts/audit-public-placeholders.mjs'));
console.log(`  ✓ Public placeholder audit (${results[13].ms}ms)`);

results.push(run('Image alt-text audit', 'node scripts/audit-image-alt.mjs'));
console.log(`  ✓ Image alt-text audit (${results[14].ms}ms)`);

results.push(run('Internal link audit', 'node scripts/seo-link-audit.mjs'));
console.log(`  ✓ Internal link audit (${results[15].ms}ms)`);

results.push(run('Internal link gap report', 'node scripts/generate-internal-link-gap-report.mjs'));
console.log(`  ✓ Internal link gap report (${results[16].ms}ms)`);

results.push(run('Deep SEO growth map', 'node scripts/generate-deep-seo-growth-map.mjs'));
console.log(`  ✓ Deep SEO growth map (${results[17].ms}ms)`);

results.push(run('Proof ops board', 'node scripts/generate-proof-ops-board.mjs'));
console.log(`  ✓ Proof ops board (${results[18].ms}ms)`);

results.push(run('SXO conversion report', 'node scripts/generate-sxo-conversion-report.mjs'));
console.log(`  ✓ SXO conversion report (${results[19].ms}ms)`);

results.push(run('Proof system staging manifest', 'node scripts/generate-proof-system-staging-manifest.mjs'));
console.log(`  ✓ Proof system staging manifest (${results[20].ms}ms)`);

results.push(run('Proof system staging check', 'node scripts/proof-system-staging-check.mjs'));
console.log(`  ✓ Proof system staging check (${results[21].ms}ms)`);

results.push(run('Proof staging plan', 'node scripts/generate-proof-staging-plan.mjs'));
console.log(`  ✓ Proof staging plan (${results[22].ms}ms)`);

results.push(run('Proof system preflight', 'node scripts/proof-system-preflight.mjs'));
console.log(`  ✓ Proof system preflight (${results[23].ms}ms)`);

results.push(run('Lead outcome validation', 'node scripts/validate-lead-outcome-rows.mjs'));
console.log(`  ✓ Lead outcome validation (${results[24].ms}ms)`);

results.push(run('Call attribution evidence validation', 'node scripts/validate-call-attribution-evidence.mjs'));
console.log(`  ✓ Call attribution evidence validation (${results[25].ms}ms)`);

results.push(run('GBP cadence validation', 'node scripts/validate-gbp-cadence.mjs'));
console.log(`  ✓ GBP cadence validation (${results[26].ms}ms)`);

results.push(run('Automation static validation', 'node scripts/validate-automation-stack-static.mjs'));
console.log(`  ✓ Automation static validation (${results[27].ms}ms)`);

results.push(run('Google Ads import validation', 'node scripts/validate-google-ads-imports.mjs'));
console.log(`  ✓ Google Ads import validation (${results[28].ms}ms)`);

results.push(run('Entity profile consistency', 'node scripts/validate-entity-profile-consistency.mjs'));
console.log(`  ✓ Entity profile consistency (${results[29].ms}ms)`);

results.push(run('DataForSEO n8n MCP runbook validation', 'node scripts/validate-dataforseo-n8n-mcp-runbook.mjs'));
console.log(`  ✓ DataForSEO n8n MCP runbook validation (${results[30].ms}ms)`);

results.push(run('DataForSEO n8n MCP workflow manifest validation', 'node scripts/validate-dataforseo-n8n-mcp-workflow-manifest.mjs'));
console.log(`  ✓ DataForSEO n8n MCP workflow manifest validation (${results[31].ms}ms)`);

results.push(run('DataForSEO n8n MCP import preflight', 'node scripts/validate-dataforseo-n8n-mcp-import-preflight.mjs'));
console.log(`  ✓ DataForSEO n8n MCP import preflight (${results[32].ms}ms)`);

results.push(run('DataForSEO n8n raw findings validation', 'node scripts/validate-dataforseo-n8n-raw-findings.mjs'));
console.log(`  ✓ DataForSEO n8n raw findings validation (${results[33].ms}ms)`);

results.push(run('DataForSEO n8n findings intake draft', 'node scripts/generate-dataforseo-n8n-findings-intake-draft.mjs'));
console.log(`  ✓ DataForSEO n8n findings intake draft (${results[34].ms}ms)`);

results.push(run('DataForSEO n8n findings intake validation', 'node scripts/validate-dataforseo-n8n-findings-intake.mjs'));
console.log(`  ✓ DataForSEO n8n findings intake validation (${results[35].ms}ms)`);

results.push(run('DataForSEO n8n findings review board', 'node scripts/generate-dataforseo-n8n-findings-review-board.mjs'));
console.log(`  ✓ DataForSEO n8n findings review board (${results[36].ms}ms)`);

results.push(run('DataForSEO n8n findings review board validation', 'node scripts/validate-dataforseo-n8n-findings-review-board.mjs'));
console.log(`  ✓ DataForSEO n8n findings review board validation (${results[37].ms}ms)`);

results.push(run('DataForSEO n8n promotion gate', 'node scripts/validate-dataforseo-n8n-promotion-gate.mjs'));
console.log(`  ✓ DataForSEO n8n promotion gate (${results[38].ms}ms)`);

results.push(run('DataForSEO n8n operator handoff', 'node scripts/generate-dataforseo-n8n-operator-handoff.mjs'));
console.log(`  ✓ DataForSEO n8n operator handoff (${results[39].ms}ms)`);

results.push(run('DataForSEO n8n operator handoff validation', 'node scripts/validate-dataforseo-n8n-operator-handoff.mjs'));
console.log(`  ✓ DataForSEO n8n operator handoff validation (${results[40].ms}ms)`);

results.push(run('DataForSEO n8n all gates', 'node scripts/run-dataforseo-n8n-gates.mjs'));
console.log(`  ✓ DataForSEO n8n all gates (${results[41].ms}ms)`);

results.push(run('Scaling readiness board', 'node scripts/generate-scaling-readiness-board.mjs'));
console.log(`  ✓ Scaling readiness board (${results[42].ms}ms)`);

results.push(run('Scaling evidence request', 'node scripts/generate-scaling-evidence-request.mjs'));
console.log(`  ✓ Scaling evidence request (${results[43].ms}ms)`);

results.push(run('Scaling evidence request validation', 'node scripts/validate-scaling-evidence-request.mjs'));
console.log(`  ✓ Scaling evidence request validation (${results[44].ms}ms)`);

results.push(run('Scaling evidence bundle', 'node scripts/generate-scaling-evidence-bundle.mjs'));
console.log(`  ✓ Scaling evidence bundle (${results[45].ms}ms)`);

results.push(run('Scaling evidence bundle validation', 'node scripts/validate-scaling-evidence-bundle.mjs'));
console.log(`  ✓ Scaling evidence bundle validation (${results[46].ms}ms)`);

results.push(run('Scaling blocker exit checklist', 'node scripts/generate-scaling-blocker-exit-checklist.mjs'));
console.log(`  ✓ Scaling blocker exit checklist (${results[47].ms}ms)`);

results.push(run('Scaling blocker exit checklist validation', 'node scripts/validate-scaling-blocker-exit-checklist.mjs'));
console.log(`  ✓ Scaling blocker exit checklist validation (${results[48].ms}ms)`);

results.push(run('Rank tracker manual snapshot validation', 'node scripts/validate-rank-tracker-manual-snapshot.mjs'));
console.log(`  ✓ Rank tracker manual snapshot validation (${results[49].ms}ms)`);

results.push(run('Proof ops board validation', 'node scripts/validate-proof-ops-board.mjs'));
console.log(`  ✓ Proof ops board validation (${results[50].ms}ms)`);

results.push(run('SXO conversion report validation', 'node scripts/validate-sxo-conversion-report.mjs'));
console.log(`  ✓ SXO conversion report validation (${results[51].ms}ms)`);

results.push(run('Internal link gap validation', 'node scripts/validate-internal-link-gap-report.mjs'));
console.log(`  ✓ Internal link gap validation (${results[52].ms}ms)`);

results.push(run('Deep SEO growth map validation', 'node scripts/validate-deep-seo-growth-map.mjs'));
console.log(`  ✓ Deep SEO growth map validation (${results[53].ms}ms)`);

results.push(run('Proof source checklist validation', 'node scripts/validate-proof-source-checklist.mjs'));
console.log(`  ✓ Proof source checklist validation (${results[54].ms}ms)`);

results.push(run('Verified proof snippets validation', 'node scripts/validate-verified-proof-snippets.mjs'));
console.log(`  ✓ Verified proof snippets validation (${results[55].ms}ms)`);

results.push(run('Owner evidence handoff validation', 'node scripts/validate-owner-evidence-handoff.mjs'));
console.log(`  ✓ Owner evidence handoff validation (${results[56].ms}ms)`);

results.push(run('Owner evidence sprint validation', 'node scripts/validate-owner-evidence-sprint.mjs'));
console.log(`  ✓ Owner evidence sprint validation (${results[57].ms}ms)`);

results.push(run('Evidence unblock runbook validation', 'node scripts/validate-evidence-unblock-runbook.mjs'));
console.log(`  ✓ Evidence unblock runbook validation (${results[58].ms}ms)`);

results.push(run('Before/after evidence resolution validation', 'node scripts/validate-before-after-evidence-resolution.mjs'));
console.log(`  ✓ Before/after evidence resolution validation (${results[59].ms}ms)`);

results.push(run('Photo ingestion manifest validation', 'node scripts/validate-photo-ingestion-manifest.mjs'));
console.log(`  ✓ Photo ingestion manifest validation (${results[60].ms}ms)`);

results.push(run('Commercial evidence intake validation', 'node scripts/validate-commercial-evidence-intake.mjs'));
console.log(`  ✓ Commercial evidence intake validation (${results[61].ms}ms)`);

results.push(run('Owner evidence packet final refresh', 'node scripts/generate-owner-evidence-packet.mjs'));
console.log(`  ✓ Owner evidence packet final refresh (${results[62].ms}ms)`);

results.push(run('Brainstein readiness', 'node scripts/generate-brainstein-readiness-audit.mjs'));
console.log(`  ✓ Brainstein readiness (${results[63].ms}ms)`);

results.push(run('Brainstein task packets', 'node scripts/generate-brainstein-task-packets.mjs'));
console.log(`  ✓ Brainstein task packets (${results[64].ms}ms)`);

results.push(run('Brainstein task packet validation', 'node scripts/validate-brainstein-task-packets.mjs'));
console.log(`  ✓ Brainstein task packet validation (${results[65].ms}ms)`);

results.push(run('Proof command reference validation', 'node scripts/validate-proof-command-references.mjs'));
console.log(`  ✓ Proof command reference validation (${results[66].ms}ms)`);

results.push(run('Directory citation packet validation', 'node scripts/validate-directory-citation-packets.mjs'));
console.log(`  ✓ Directory citation packet validation (${results[67].ms}ms)`);

// ---------- Parse + summarize ----------

const schema = parseSchemaValidator(results[0].out);
const evidence = parseEvidenceValidator(results[1].out);
const coverage = parseEvidenceCoverage(results[2].out);
const ownerPacket = parseOwnerEvidencePacket(results[3].out);
const ownerIntake = parseOwnerIntakeSuite(results[4].out);
const ownerHandoff = parseOwnerEvidenceHandoff(results[5].out);
const ownerSprint = parseOwnerEvidenceSprint(results[6].out);
const ownerActionPacketValidation = parseOwnerEvidenceActionPacketValidation(results[7].out);
const evidenceRegression = parseEvidenceRegression(results[8].out);
const proofSnippets = parseProofSnippets(results[9].out);
const proofRuntime = parseProofRuntimeValidator(results[10].out);
const publishReadiness = parsePublishReadiness(results[11].out);
const evidenceUnblock = parseEvidenceUnblock(results[12].out);
const placeholders = parsePlaceholderAudit(results[13].out);
const images = parseImageAudit(results[14].out);
const links = parseLinkAudit(results[15].out);
const internalLinkGap = parseInternalLinkGap(results[16].out);
const growthMap = parseGrowthMap(results[17].out);
const proofOpsBoard = parseProofOpsBoard(results[18].out);
const sxoConversion = parseSxoConversion(results[19].out);
const proofStagingManifest = parseProofStagingManifest(results[20].out);
const proofStaging = parseProofStagingCheck(results[21].out);
const proofStagingPlan = parseProofStagingPlan(results[22].out);
const proofPreflight = parseProofPreflight(results[23].out);
const leadOutcomeValidation = parseLeadOutcomeValidation(results[24].out);
const callAttributionEvidenceValidation = parseCallAttributionEvidenceValidation(results[25].out);
const gbpCadenceValidation = parseGbpCadenceValidation(results[26].out);
const automationStaticValidation = parseAutomationStaticValidation(results[27].out);
const googleAdsImportValidation = parseGoogleAdsImportValidation(results[28].out);
const entityProfileValidation = parseEntityProfileValidation(results[29].out);
const dataForSeoN8nMcpValidation = parseDataForSeoN8nMcpValidation(results[30].out);
const dataForSeoN8nMcpWorkflowManifestValidation = parseDataForSeoN8nMcpWorkflowManifestValidation(results[31].out);
const dataForSeoN8nMcpImportPreflight = parseDataForSeoN8nMcpImportPreflight(results[32].out);
const dataForSeoN8nRawFindingsValidation = parseDataForSeoN8nRawFindingsValidation(results[33].out);
const dataForSeoN8nFindingsIntakeDraft = parseDataForSeoN8nFindingsIntakeDraft(results[34].out);
const dataForSeoN8nFindingsIntakeValidation = parseDataForSeoN8nFindingsIntakeValidation(results[35].out);
const dataForSeoN8nFindingsReviewBoard = parseDataForSeoN8nFindingsReviewBoard(results[36].out);
const dataForSeoN8nFindingsReviewBoardValidation = parseDataForSeoN8nFindingsReviewBoardValidation(results[37].out);
const dataForSeoN8nPromotionGate = parseDataForSeoN8nPromotionGate(results[38].out);
const dataForSeoN8nOperatorHandoff = parseDataForSeoN8nOperatorHandoff(results[39].out);
const dataForSeoN8nOperatorHandoffValidation = parseDataForSeoN8nOperatorHandoffValidation(results[40].out);
const dataForSeoN8nAllGates = parseDataForSeoN8nAllGates(results[41].out);
const scalingReadiness = parseScalingReadiness(results[42].out);
const scalingEvidenceRequest = parseScalingEvidenceRequest(results[43].out);
const scalingEvidenceRequestValidation = parseScalingEvidenceRequestValidation(results[44].out);
const scalingEvidenceBundle = parseScalingEvidenceBundle(results[45].out);
const scalingEvidenceBundleValidation = parseScalingEvidenceBundleValidation(results[46].out);
const scalingBlockerExitChecklist = parseScalingBlockerExitChecklist(results[47].out);
const scalingBlockerExitChecklistValidation = parseScalingBlockerExitChecklistValidation(results[48].out);
const rankTrackerManualSnapshotValidation = parseRankTrackerManualSnapshotValidation(results[49].out);
const proofOpsBoardValidation = parseProofOpsBoardValidation(results[50].out);
const sxoConversionValidation = parseSxoConversionValidation(results[51].out);
const internalLinkGapValidation = parseInternalLinkGapValidation(results[52].out);
const growthMapValidation = parseGrowthMapValidation(results[53].out);
const proofSourceChecklistValidation = parseProofSourceChecklistValidation(results[54].out);
const proofSnippetsValidation = parseProofSnippetsValidation(results[55].out);
const ownerHandoffValidation = parseOwnerEvidenceHandoffValidation(results[56].out);
const ownerSprintValidation = parseOwnerEvidenceSprintValidation(results[57].out);
const evidenceUnblockValidation = parseEvidenceUnblockValidation(results[58].out);
const beforeAfterEvidenceValidation = parseBeforeAfterEvidenceValidation(results[59].out);
const photoManifestValidation = parsePhotoManifestValidation(results[60].out);
const commercialEvidenceIntakeValidation = parseCommercialEvidenceIntakeValidation(results[61].out);
const ownerPacketFinal = parseOwnerEvidencePacket(results[62].out);
const brainsteinReadiness = parseBrainsteinReadiness(results[63].out);
const brainsteinTaskPackets = parseBrainsteinTaskPackets(results[64].out);
const brainsteinTaskPacketValidation = parseBrainsteinTaskPacketValidation(results[65].out);
const proofCommandReferenceValidation = parseProofCommandReferenceValidation(results[66].out);
const directoryCitationValidation = parseDirectoryCitationValidation(results[67].out);

const goodPct = images?.totalImages ? Math.round((images.GOOD / images.totalImages) * 100) : null;
const linkPct = links?.internalLinks ? Math.round((100 * (links.internalLinks - (links.badCount || 0)) / links.internalLinks)) : null;
const evidenceProjectMetric = evidence
  ? `${evidence.verifiedProjects ?? 0}/${evidence.projects ?? 0} verified projects`
  : '? verified projects';
const evidenceReviewMetric = evidence
  ? `${evidence.publicReviewSources ?? 0} public review sources`
  : '? public review sources';
const coverageMetric = coverage
  ? `${coverage.projects?.byStatus?.partial ?? 0} partial projects · ${coverage.assets?.byStatus?.missing ?? 0} missing assets · ${coverage.pages ?? '?'} pages`
  : '? coverage';
const placeholderMetric = placeholders
  ? `${placeholders.publicFindings ?? '?'} public markers · ${placeholders.affectedRoutes ?? '?'} affected routes`
  : '? placeholders';
const ownerPacketMetric = ownerPacket
  ? `${ownerPacket.rows ?? '?'} actions · ${ownerPacket.p0 ?? '?'} P0 · ${ownerPacket.p1 ?? '?'} P1`
  : '? owner actions';
const ownerPacketFinalMetric = ownerPacketFinal
  ? `${ownerPacketFinal.rows ?? '?'} actions · ${ownerPacketFinal.p0 ?? '?'} P0 · ${ownerPacketFinal.p1 ?? '?'} P1`
  : '? final owner actions';
const ownerIntakeMetric = ownerIntake
  ? `${ownerIntake.projectIntake ?? '?'} project · ${ownerIntake.photoManifest ?? '?'} photo · ${ownerIntake.sprintBlocks ?? '?'} sprint · ${ownerIntake.warrantyRows ?? '?'} warranty · ${ownerIntake.repairCostRows ?? '?'} cost · ${ownerIntake.errors ?? '?'} errors`
  : '? owner intake';
const ownerHandoffMetric = ownerHandoff
  ? `${ownerHandoff.ownerRows ?? '?'} actions · ${ownerHandoff.projectIntake ?? '?'} project · ${ownerHandoff.photoManifest ?? '?'} photo · ${ownerHandoff.blocked ?? '?'} blocked · ${ownerHandoff.report ?? 'no report'}`
  : '? owner handoff';
const ownerHandoffValidationMetric = ownerHandoffValidation
  ? `${ownerHandoffValidation.ownerRows ?? '?'} actions · ${ownerHandoffValidation.projectIntake ?? '?'} project · ${ownerHandoffValidation.photoManifest ?? '?'} photo · ${ownerHandoffValidation.blockedPages ?? '?'} blocked · ${ownerHandoffValidation.errors?.length ?? '?'} errors`
  : '? owner handoff validation';
const ownerSprintMetric = ownerSprint
  ? `${ownerSprint.blocks ?? '?'} blocks · ${ownerSprint.assetActions ?? '?'} asset · ${ownerSprint.projectActions ?? '?'} project · ${ownerSprint.report ?? 'no report'}`
  : '? owner sprint';
const ownerSprintValidationMetric = ownerSprintValidation
  ? `${ownerSprintValidation.blocks ?? '?'} blocks · ${ownerSprintValidation.p0Blocks ?? '?'} P0 · ${ownerSprintValidation.p1Blocks ?? '?'} P1 · ${ownerSprintValidation.errors?.length ?? '?'} errors`
  : '? owner sprint validation';
const ownerActionPacketValidationMetric = ownerActionPacketValidation
  ? `${ownerActionPacketValidation.rows ?? '?'} rows · ${ownerActionPacketValidation.p0 ?? '?'} P0 · ${ownerActionPacketValidation.p1 ?? '?'} P1 · ${ownerActionPacketValidation.errors?.length ?? '?'} errors`
  : '? owner action packet';
const evidenceRegressionMetric = evidenceRegression
  ? `${evidenceRegression.checks?.filter((check) => check.ok).length ?? '?'} checks passed · ${evidenceRegression.checks?.length ?? '?'} total`
  : '? regression checks';
const proofSnippetsMetric = proofSnippets
  ? `${proofSnippets.projectSnippets ?? '?'} project · ${proofSnippets.reviewSourceSnippets ?? '?'} review-source · ${proofSnippets.skipped ?? '?'} skipped`
  : '? proof snippets';
const proofSnippetsValidationMetric = proofSnippetsValidation
  ? `${proofSnippetsValidation.projectSnippets ?? '?'} project · ${proofSnippetsValidation.reviewSourceSnippets ?? '?'} review-source · ${proofSnippetsValidation.skipped ?? '?'} skipped · runtime synced ${proofSnippetsValidation.runtimeSynced ? 'yes' : 'no'} · ${proofSnippetsValidation.errors?.length ?? '?'} errors`
  : '? proof snippets validation';
const proofRuntimeMetric = proofRuntime
  ? `${proofRuntime.projectSnippets ?? '?'} project · ${proofRuntime.reviewSourceSnippets ?? '?'} review-source · ${proofRuntime.skipped ?? '?'} skipped · ${proofRuntime.errors?.length ?? '?'} errors`
  : '? runtime proof';
const publishReadinessMetric = publishReadiness
  ? `${publishReadiness.publishReady ?? '?'} ready · ${publishReadiness.proofIncomplete ?? '?'} incomplete · ${publishReadiness.blocked ?? '?'} blocked`
  : '? publish readiness';
const evidenceUnblockMetric = evidenceUnblock
  ? `${evidenceUnblock.blockedPages ?? '?'} blocked · ${evidenceUnblock.proofIncompletePages ?? '?'} incomplete · ${evidenceUnblock.output ?? 'no report'}`
  : '? evidence unblock';
const evidenceUnblockValidationMetric = evidenceUnblockValidation
  ? `${evidenceUnblockValidation.blockedPages ?? '?'} blocked · ${evidenceUnblockValidation.proofIncompletePages ?? '?'} incomplete · ${evidenceUnblockValidation.missingAssets ?? '?'} assets · ${evidenceUnblockValidation.errors?.length ?? '?'} errors`
  : '? evidence unblock validation';
const beforeAfterEvidenceValidationMetric = beforeAfterEvidenceValidation
  ? `${beforeAfterEvidenceValidation.beforeAfterRows ?? '?'} before/after · ${beforeAfterEvidenceValidation.compositeRows ?? '?'} composite · ${beforeAfterEvidenceValidation.partialRows ?? '?'} partial · ${beforeAfterEvidenceValidation.missingRows ?? '?'} missing · ${beforeAfterEvidenceValidation.errors?.length ?? '?'} errors`
  : '? before/after evidence validation';
const photoManifestValidationMetric = photoManifestValidation
  ? `${photoManifestValidation.rows ?? '?'} rows · ${photoManifestValidation.assetIds ?? '?'} assets · ${photoManifestValidation.pairAssetIds ?? '?'} pairs · ${photoManifestValidation.emptySourceRows ?? '?'} empty source paths · ${photoManifestValidation.errors?.length ?? '?'} errors`
  : '? photo manifest validation';
const commercialEvidenceIntakeValidationMetric = commercialEvidenceIntakeValidation
  ? `${commercialEvidenceIntakeValidation.warrantyRows ?? '?'} warranty · ${commercialEvidenceIntakeValidation.repairCostRows ?? '?'} repair cost · ${commercialEvidenceIntakeValidation.blankWarrantyEvidenceFields ?? '?'} blank warranty fields · ${commercialEvidenceIntakeValidation.blankRepairCostEvidenceFields ?? '?'} blank cost fields · ${commercialEvidenceIntakeValidation.errors?.length ?? '?'} errors`
  : '? commercial evidence intake validation';
const brainsteinReadinessMetric = brainsteinReadiness
  ? `${brainsteinReadiness.maturity?.stage ?? '?'} · ${brainsteinReadiness.maturity?.gate ?? '?'} · ${brainsteinTaskPackets?.packets ?? proofPreflight?.brainsteinTaskPackets ?? '?'} task packets · ${brainsteinReadiness.directoryCitationGate?.errors?.length ?? '?'} citation errors`
  : '? Brainstein readiness';
const brainsteinTaskPacketValidationMetric = brainsteinTaskPacketValidation
  ? `${brainsteinTaskPacketValidation.packets ?? '?'} packets · ${brainsteinTaskPacketValidation.errors?.length ?? '?'} errors`
  : '? Brainstein task packet validation';
const proofCommandReferenceMetric = proofCommandReferenceValidation
  ? `${proofCommandReferenceValidation.commandRefs ?? '?'} command refs · ${proofCommandReferenceValidation.missingCommandRefs ?? '?'} missing refs · ${proofCommandReferenceValidation.missingScriptTargets ?? '?'} missing targets · ${proofCommandReferenceValidation.duplicateScripts?.length ?? 0} duplicate scripts`
  : '? proof command references';
const directoryCitationValidationMetric = directoryCitationValidation
  ? `${directoryCitationValidation.packets?.length ?? '?'} packets · ${directoryCitationValidation.sameAsCount ?? '?'} sameAs · ${directoryCitationValidation.errors?.length ?? '?'} errors · ${directoryCitationValidation.warnings?.length ?? '?'} warnings`
  : '? directory citation validation';
const growthMapMetric = growthMap
  ? `${growthMap.routes ?? '?'} page modules · ${growthMap.ownerActions ?? '?'} owner actions · ${growthMap.blockedPages ?? '?'} blocked · ${growthMap.report ?? 'no report'}`
  : '? growth map';
const growthMapValidationMetric = growthMapValidation
  ? `${growthMapValidation.appPages ?? '?'} page modules · ${growthMapValidation.blockedPagesGuarded ?? '?'} blocked guarded · ${growthMapValidation.candidatePagesGuarded ?? '?'} candidates guarded · ${growthMapValidation.errors?.length ?? '?'} errors`
  : '? growth map validation';
const internalLinkGapMetric = internalLinkGap
  ? `${internalLinkGap.targets?.filter((target) => target.status === 'needs-links').length ?? '?'} targets need links · ${internalLinkGap.pagesScanned ?? '?'} pages scanned · ${internalLinkGap.report ?? 'no report'}`
  : '? internal link gaps';
const internalLinkGapValidationMetric = internalLinkGapValidation
  ? `${internalLinkGapValidation.healthyTargets ?? '?'} healthy · ${internalLinkGapValidation.gaps ?? '?'} gaps · ${internalLinkGapValidation.pagesScanned ?? '?'} pages · ${internalLinkGapValidation.errors?.length ?? '?'} errors`
  : '? internal link gap validation';
const proofOpsMetric = proofOpsBoard
  ? `${proofOpsBoard.tasks ?? '?'} tasks · ${proofOpsBoard.p0 ?? '?'} P0 · ${proofOpsBoard.ownerNeeded ?? '?'} owner/manual · ${proofOpsBoard.board ?? 'no board'}`
  : '? proof ops';
const proofOpsValidationMetric = proofOpsBoardValidation
  ? `${proofOpsBoardValidation.rows ?? '?'} rows · ${proofOpsBoardValidation.p0 ?? '?'} P0 · ${proofOpsBoardValidation.ownerNeeded ?? '?'} owner/manual · ${proofOpsBoardValidation.errors?.length ?? '?'} errors`
  : '? proof ops validation';
const proofSourceChecklistValidationMetric = proofSourceChecklistValidation
  ? `${proofSourceChecklistValidation.profileRows ?? '?'} profiles · ${proofSourceChecklistValidation.evidenceTypeRows ?? '?'} evidence types · ${proofSourceChecklistValidation.unlockRows ?? '?'} unlock rules · ${proofSourceChecklistValidation.errors?.length ?? '?'} errors`
  : '? proof source checklist validation';
const sxoConversionMetric = sxoConversion
  ? `${sxoConversion.targets ?? '?'} targets · ${sxoConversion.averageScore ?? '?'} avg score · ${sxoConversion.proofGated ?? '?'} proof-gated · ${sxoConversion.report ?? 'no report'}`
  : '? SXO conversion';
const sxoConversionValidationMetric = sxoConversionValidation
  ? `${sxoConversionValidation.targets ?? '?'} targets · ${sxoConversionValidation.averageScore ?? '?'} avg score · ${sxoConversionValidation.proofGated ?? '?'} proof-gated · ${sxoConversionValidation.errors?.length ?? '?'} errors`
  : '? SXO conversion validation';
const proofStagingMetric = proofStaging
  ? `${proofStaging.requiredMissing ?? '?'} required missing · ${proofStaging.groups?.find((group) => group.id === 'proof_gate_core')?.dirtyCount ?? '?'} core dirty · ${proofStaging.report ?? 'no report'}`
  : '? proof staging';
const proofStagingManifestMetric = proofStagingManifest
  ? `${proofStagingManifest.groups ?? '?'} groups · ${proofStagingManifest.requiredGroups ?? '?'} required · ${proofStagingManifest.report ?? 'no report'}`
  : '? proof staging manifest';
const proofStagingPlanMetric = proofStagingPlan
  ? `${proofStagingPlan.requiredMissing ?? '?'} required missing · ${proofStagingPlan.groups?.find((group) => group.id === 'proof_gate_core')?.dirty ?? '?'} core paths · ${proofStagingPlan.report ?? 'no report'}`
  : '? proof staging plan';
const proofPreflightMetric = proofPreflight
  ? `${proofPreflight.publishReady ?? '?'} ready · ${proofPreflight.proofIncomplete ?? '?'} incomplete · ${proofPreflight.blocked ?? '?'} blocked · prepublish ${proofPreflight.prepublishExpectedBlocked ? 'expected-blocked' : 'unexpected'} · ${proofPreflight.report ?? 'no report'}`
  : '? proof preflight';
const leadOutcomeMetric = leadOutcomeValidation
  ? `${leadOutcomeValidation.status ?? '?'} · ${leadOutcomeValidation.rows ?? '?'} real rows · ${leadOutcomeValidation.qualifiedRows ?? '?'} qualified · ${leadOutcomeValidation.uploadEligibleRows ?? '?'} upload-eligible · ${leadOutcomeValidation.errors?.length ?? '?'} errors`
  : '? lead outcomes';
const callAttributionEvidenceMetric = callAttributionEvidenceValidation
  ? `${callAttributionEvidenceValidation.status ?? '?'} · ${callAttributionEvidenceValidation.rows ?? '?'} real rows · ${callAttributionEvidenceValidation.primaryQualifiedRows ?? '?'} primary qualified-call · ${callAttributionEvidenceValidation.errors?.length ?? '?'} errors`
  : '? call attribution evidence';
const gbpCadenceMetric = gbpCadenceValidation
  ? `${gbpCadenceValidation.calendarWeeks ?? '?'} weeks · selected Week ${gbpCadenceValidation.selectedWeek ?? '?'} · ${gbpCadenceValidation.errors ?? '?'} errors · ${gbpCadenceValidation.warnings ?? '?'} warnings`
  : '? GBP cadence';
const automationStaticMetric = automationStaticValidation
  ? `${automationStaticValidation.routes ?? '?'} routes · ${automationStaticValidation.errors ?? '?'} errors · ${automationStaticValidation.warnings ?? '?'} warnings`
  : '? automation static';
const googleAdsImportMetric = googleAdsImportValidation
  ? `${googleAdsImportValidation.campaigns ?? '?'} campaigns · ${googleAdsImportValidation.keywords ?? '?'} keywords · $${googleAdsImportValidation.totalDailyBudget ?? '?'} daily budget · ${googleAdsImportValidation.errors?.length ?? '?'} errors`
  : '? Google Ads imports';
const entityProfileMetric = entityProfileValidation
  ? `${entityProfileValidation.canonicalProfiles ?? '?'} profiles · ${entityProfileValidation.sameAs ?? '?'} sameAs · ${entityProfileValidation.proofSnippetUrls ?? '?'} proof snippets · ${entityProfileValidation.errors ?? '?'} errors`
  : '? entity profiles';
const rankTrackerManualSnapshotMetric = rankTrackerManualSnapshotValidation
  ? `${rankTrackerManualSnapshotValidation.status ?? '?'} · ${rankTrackerManualSnapshotValidation.rows ?? '?'} rows · ${rankTrackerManualSnapshotValidation.realRows ?? '?'} real · ${rankTrackerManualSnapshotValidation.sampleRows ?? '?'} sample · ${rankTrackerManualSnapshotValidation.errors?.length ?? '?'} errors`
  : '? rank tracker manual snapshot';
const dataForSeoN8nMcpMetric = dataForSeoN8nMcpValidation
  ? `${dataForSeoN8nMcpValidation.requiredPhrases ?? '?'} required phrases · ${dataForSeoN8nMcpValidation.errors?.length ?? '?'} errors · ${dataForSeoN8nMcpValidation.warnings?.length ?? '?'} warnings`
  : '? DataForSEO n8n MCP';
const dataForSeoN8nMcpWorkflowManifestMetric = dataForSeoN8nMcpWorkflowManifestValidation
  ? `${dataForSeoN8nMcpWorkflowManifestValidation.targetDomain ?? '?'} · ${dataForSeoN8nMcpWorkflowManifestValidation.mcpMode ?? '?'} MCP · read-only ${dataForSeoN8nMcpWorkflowManifestValidation.readOnly ? 'yes' : 'no'} · ${dataForSeoN8nMcpWorkflowManifestValidation.costCaps ?? '?'} cost caps · ${dataForSeoN8nMcpWorkflowManifestValidation.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n MCP workflow manifest';
const dataForSeoN8nMcpImportPreflightMetric = dataForSeoN8nMcpImportPreflight
  ? `${dataForSeoN8nMcpImportPreflight.status ?? '?'} · ${dataForSeoN8nMcpImportPreflight.workflowExports ?? '?'} exports · ${dataForSeoN8nMcpImportPreflight.structuralChecks?.requiredNodes ?? '?'} nodes · ${dataForSeoN8nMcpImportPreflight.structuralChecks?.requiredConnections ?? '?'} connections · ${dataForSeoN8nMcpImportPreflight.errors?.length ?? '?'} errors · ${dataForSeoN8nMcpImportPreflight.warnings?.length ?? '?'} warnings`
  : '? DataForSEO n8n MCP import preflight';
const dataForSeoN8nRawFindingsMetric = dataForSeoN8nRawFindingsValidation
  ? `${dataForSeoN8nRawFindingsValidation.status ?? '?'} · ${dataForSeoN8nRawFindingsValidation.files ?? '?'} files · ${dataForSeoN8nRawFindingsValidation.realFindings ?? '?'} real · ${dataForSeoN8nRawFindingsValidation.sampleFindings ?? '?'} sample · ${dataForSeoN8nRawFindingsValidation.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n raw findings';
const dataForSeoN8nFindingsIntakeDraftMetric = dataForSeoN8nFindingsIntakeDraft
  ? `${dataForSeoN8nFindingsIntakeDraft.status ?? '?'} · ${dataForSeoN8nFindingsIntakeDraft.rows ?? '?'} rows · ${dataForSeoN8nFindingsIntakeDraft.realRows ?? '?'} real · ${dataForSeoN8nFindingsIntakeDraft.sampleRows ?? '?'} sample · ${dataForSeoN8nFindingsIntakeDraft.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n findings intake draft';
const dataForSeoN8nFindingsIntakeMetric = dataForSeoN8nFindingsIntakeValidation
  ? `${dataForSeoN8nFindingsIntakeValidation.status ?? '?'} · ${dataForSeoN8nFindingsIntakeValidation.rows ?? '?'} rows · ${dataForSeoN8nFindingsIntakeValidation.realRows ?? '?'} real · ${dataForSeoN8nFindingsIntakeValidation.reviewOnlyRows ?? '?'} review-only · ${dataForSeoN8nFindingsIntakeValidation.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n findings intake';
const dataForSeoN8nFindingsReviewBoardMetric = dataForSeoN8nFindingsReviewBoard
  ? `${dataForSeoN8nFindingsReviewBoard.status ?? '?'} · ${dataForSeoN8nFindingsReviewBoard.rows ?? '?'} rows · ${dataForSeoN8nFindingsReviewBoard.realRows ?? '?'} real · ${dataForSeoN8nFindingsReviewBoard.publicClaimsAllowed ?? '?'} public claims · ${dataForSeoN8nFindingsReviewBoard.adsActionsAllowed ?? '?'} ads actions`
  : '? DataForSEO n8n findings review board';
const dataForSeoN8nFindingsReviewBoardValidationMetric = dataForSeoN8nFindingsReviewBoardValidation
  ? `${dataForSeoN8nFindingsReviewBoardValidation.status ?? '?'} · ${dataForSeoN8nFindingsReviewBoardValidation.rows ?? '?'} rows · ${dataForSeoN8nFindingsReviewBoardValidation.publicClaimsAllowed ?? '?'} public claims · ${dataForSeoN8nFindingsReviewBoardValidation.adsActionsAllowed ?? '?'} ads actions · ${dataForSeoN8nFindingsReviewBoardValidation.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n findings review board validation';
const dataForSeoN8nPromotionGateMetric = dataForSeoN8nPromotionGate
  ? `${dataForSeoN8nPromotionGate.status ?? '?'} · ${dataForSeoN8nPromotionGate.rows ?? '?'} rows · ${dataForSeoN8nPromotionGate.candidateRows ?? '?'} candidates · ${dataForSeoN8nPromotionGate.promotableRows ?? '?'} promotable · ${dataForSeoN8nPromotionGate.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n promotion gate';
const dataForSeoN8nOperatorHandoffMetric = dataForSeoN8nOperatorHandoff
  ? `${dataForSeoN8nOperatorHandoff.operatorStatus ?? '?'} · promotable ${dataForSeoN8nOperatorHandoff.promotionGate?.promotableRows ?? '?'} · public claims ${dataForSeoN8nOperatorHandoff.reviewBoard?.publicClaimsAllowed ?? '?'} · Ads actions ${dataForSeoN8nOperatorHandoff.reviewBoard?.adsActionsAllowed ?? '?'}`
  : '? DataForSEO n8n operator handoff';
const dataForSeoN8nOperatorHandoffValidationMetric = dataForSeoN8nOperatorHandoffValidation
  ? `${dataForSeoN8nOperatorHandoffValidation.operatorStatus ?? '?'} · promotable ${dataForSeoN8nOperatorHandoffValidation.promotableRows ?? '?'} · public claims ${dataForSeoN8nOperatorHandoffValidation.publicClaimsAllowed ?? '?'} · Ads actions ${dataForSeoN8nOperatorHandoffValidation.adsActionsAllowed ?? '?'} · ${dataForSeoN8nOperatorHandoffValidation.errors?.length ?? '?'} errors`
  : '? DataForSEO n8n operator handoff validation';
const dataForSeoN8nAllGatesMetric = dataForSeoN8nAllGates
  ? `${dataForSeoN8nAllGates.status ?? '?'} · ${dataForSeoN8nAllGates.steps ?? '?'} steps · ${dataForSeoN8nAllGates.failures ?? '?'} failures · ${dataForSeoN8nAllGates.operatorStatus ?? '?'}`
  : '? DataForSEO n8n all gates';
const scalingReadinessMetric = scalingReadiness
  ? `${scalingReadiness.scalingStatus ?? '?'} · ${scalingReadiness.blockerCount ?? '?'} blockers · ${scalingReadiness.localBlockerCount ?? '?'} local · ${scalingReadiness.externalBlockerCount ?? '?'} owner/external`
  : '? scaling readiness';
const scalingEvidenceRequestMetric = scalingEvidenceRequest
  ? `${scalingEvidenceRequest.requests ?? '?'} requests · ${scalingEvidenceRequest.scalingStatus ?? '?'} · ${scalingEvidenceRequest.localBlockers ?? '?'} local · ${scalingEvidenceRequest.externalBlockers ?? '?'} owner/external`
  : '? scaling evidence requests';
const scalingEvidenceRequestValidationMetric = scalingEvidenceRequestValidation
  ? `${scalingEvidenceRequestValidation.requests ?? '?'} requests · ${scalingEvidenceRequestValidation.errors?.length ?? '?'} errors · ${scalingEvidenceRequestValidation.warnings?.length ?? '?'} warnings`
  : '? scaling evidence request validation';
const scalingEvidenceBundleMetric = scalingEvidenceBundle
  ? `${scalingEvidenceBundle.scalingStatus ?? '?'} · ${scalingEvidenceBundle.sections ?? '?'} sections · ${scalingEvidenceBundle.blockers ?? '?'} blockers · ${scalingEvidenceBundle.missingSources?.length ?? '?'} missing sources`
  : '? scaling evidence bundle';
const scalingEvidenceBundleValidationMetric = scalingEvidenceBundleValidation
  ? `${scalingEvidenceBundleValidation.scalingStatus ?? '?'} · ${scalingEvidenceBundleValidation.sections ?? '?'} sections · ${scalingEvidenceBundleValidation.errors?.length ?? '?'} errors · ${scalingEvidenceBundleValidation.warnings?.length ?? '?'} warnings`
  : '? scaling evidence bundle validation';
const scalingBlockerExitChecklistMetric = scalingBlockerExitChecklist
  ? `${scalingBlockerExitChecklist.blockers ?? '?'} blockers · ${scalingBlockerExitChecklist.scalingStatus ?? '?'} · ${scalingBlockerExitChecklist.localBlockers ?? '?'} local · ${scalingBlockerExitChecklist.externalBlockers ?? '?'} owner/external`
  : '? scaling blocker exit checklist';
const scalingBlockerExitChecklistValidationMetric = scalingBlockerExitChecklistValidation
  ? `${scalingBlockerExitChecklistValidation.blockers ?? '?'} blockers · ${scalingBlockerExitChecklistValidation.errors?.length ?? '?'} errors · ${scalingBlockerExitChecklistValidation.warnings?.length ?? '?'} warnings`
  : '? scaling blocker exit checklist validation';

const summaryLines = [
  '',
  '### Summary',
  '',
  '| Audit | Status | Key metric |',
  '|---|---|---|',
  `| Schema validator | ${schema?.ok ? '✓ green' : '✗ red'} | ${schema?.jsonLdFiles ?? '?'} JSON-LD files · ${schema?.howToSchemaFiles ?? '?'} HowTo (must be 0) · ${schema?.napDriftFiles ?? '?'} NAP drift (must be 0) |`,
  `| Evidence ledger | ${evidence?.ok ? '✓ green' : '✗ red'} | ${evidenceProjectMetric} · ${evidenceReviewMetric} · ${evidence?.assetRequirements ?? '?'} asset requirements · ${evidence?.errors?.length ?? '?'} errors |`,
  `| Evidence coverage | ${coverage?.ok ? '✓ snapshot' : '✗ red'} | ${coverageMetric} |`,
  `| Owner evidence packet | ${ownerPacket?.ok ? '✓ generated' : '✗ red'} | ${ownerPacketMetric} |`,
  `| Owner evidence packet final refresh | ${ownerPacketFinal?.ok ? '✓ generated' : '✗ red'} | ${ownerPacketFinalMetric} |`,
  `| Owner intake suite | ${ownerIntake?.ok ? '✓ ready' : '✗ red'} | ${ownerIntakeMetric} |`,
  `| Owner evidence handoff | ${ownerHandoff?.ok ? '✓ ready' : '✗ red'} | ${ownerHandoffMetric} |`,
  `| Owner evidence handoff validation | ${ownerHandoffValidation?.ok ? '✓ valid' : '✗ red'} | ${ownerHandoffValidationMetric} |`,
  `| Owner evidence sprint checklist | ${ownerSprint?.ok ? '✓ ready' : '✗ red'} | ${ownerSprintMetric} |`,
  `| Owner evidence sprint validation | ${ownerSprintValidation?.ok ? '✓ valid' : '✗ red'} | ${ownerSprintValidationMetric} |`,
  `| Owner evidence action packet validation | ${ownerActionPacketValidation?.ok ? '✓ valid' : '✗ red'} | ${ownerActionPacketValidationMetric} |`,
  `| Evidence anti-fabrication regression | ${evidenceRegression?.ok ? '✓ guarded' : '✗ red'} | ${evidenceRegressionMetric} |`,
  `| Verified proof snippets | ${proofSnippets?.ok ? '✓ generated' : '✗ red'} | ${proofSnippetsMetric} |`,
  `| Verified proof snippets validation | ${proofSnippetsValidation?.ok ? '✓ valid' : '✗ red'} | ${proofSnippetsValidationMetric} |`,
  `| Proof runtime | ${proofRuntime?.ok ? '✓ synced' : '✗ stale'} | ${proofRuntimeMetric} |`,
  `| Publish readiness | ${publishReadiness?.allTrackedPagesPublishReady ? '✓ ready' : '⚠ proof-gated'} | ${publishReadinessMetric} |`,
  `| Evidence unblock runbook | ${evidenceUnblock?.ok ? '✓ generated' : '✗ red'} | ${evidenceUnblockMetric} |`,
  `| Evidence unblock runbook validation | ${evidenceUnblockValidation?.ok ? '✓ valid' : '✗ red'} | ${evidenceUnblockValidationMetric} |`,
  `| Before/after evidence resolution validation | ${beforeAfterEvidenceValidation?.ok ? '✓ valid' : '✗ red'} | ${beforeAfterEvidenceValidationMetric} |`,
  `| Photo ingestion manifest validation | ${photoManifestValidation?.ok ? '✓ valid' : '✗ red'} | ${photoManifestValidationMetric} |`,
  `| Commercial evidence intake validation | ${commercialEvidenceIntakeValidation?.ok ? '✓ valid' : '✗ red'} | ${commercialEvidenceIntakeValidationMetric} |`,
  `| Brainstein readiness | ${brainsteinReadiness?.ok ? '✓ proof-gated' : '✗ red'} | ${brainsteinReadinessMetric} |`,
  `| Brainstein task packet validation | ${brainsteinTaskPacketValidation?.ok ? '✓ valid' : '✗ red'} | ${brainsteinTaskPacketValidationMetric} |`,
  `| Proof command reference validation | ${proofCommandReferenceValidation?.ok ? '✓ valid' : '✗ red'} | ${proofCommandReferenceMetric} |`,
  `| Directory citation packet validation | ${directoryCitationValidation?.ok ? '✓ valid' : '✗ red'} | ${directoryCitationValidationMetric} |`,
  `| Public placeholders | ${(placeholders?.publicFindings ?? 0) === 0 ? '✓ clean' : '⚠ evidence-needed'} | ${placeholderMetric} |`,
  `| Image alt-text | ${goodPct != null && goodPct >= 85 ? '✓ healthy' : '⚠ review'} | ${images?.GOOD ?? '?'}/${images?.totalImages ?? '?'} GOOD (${goodPct ?? '?'}%) · ${images?.MISSING ?? '?'} MISSING · ${images?.GENERIC ?? '?'} GENERIC · ${images?.WEAK ?? '?'} WEAK |`,
  `| Internal links | ${linkPct != null && linkPct >= 95 ? '✓ healthy' : '⚠ review'} | ${links?.internalLinks ?? '?'} links audited · ${links?.badCount ?? '?'} bad (${linkPct ?? '?'}% pass) |`,
  `| Internal link gap report | ${internalLinkGap?.ok ? '✓ generated' : '✗ red'} | ${internalLinkGapMetric} |`,
  `| Internal link gap validation | ${internalLinkGapValidation?.ok ? '✓ valid' : '✗ red'} | ${internalLinkGapValidationMetric} |`,
  `| Deep SEO growth map | ${growthMap?.ok ? '✓ generated' : '✗ red'} | ${growthMapMetric} |`,
  `| Deep SEO growth map validation | ${growthMapValidation?.ok ? '✓ valid' : '✗ red'} | ${growthMapValidationMetric} |`,
  `| Proof ops board | ${proofOpsBoard?.ok ? '✓ generated' : '✗ red'} | ${proofOpsMetric} |`,
  `| Proof ops board validation | ${proofOpsBoardValidation?.ok ? '✓ valid' : '✗ red'} | ${proofOpsValidationMetric} |`,
  `| Proof source checklist validation | ${proofSourceChecklistValidation?.ok ? '✓ valid' : '✗ red'} | ${proofSourceChecklistValidationMetric} |`,
  `| SXO conversion report | ${sxoConversion?.ok ? '✓ generated' : '✗ red'} | ${sxoConversionMetric} |`,
  `| SXO conversion report validation | ${sxoConversionValidation?.ok ? '✓ valid' : '✗ red'} | ${sxoConversionValidationMetric} |`,
  `| Proof system staging manifest | ${proofStagingManifest?.ok ? '✓ generated' : '✗ red'} | ${proofStagingManifestMetric} |`,
  `| Proof system staging check | ${proofStaging?.ok ? '✓ stageable' : '✗ missing core'} | ${proofStagingMetric} |`,
  `| Proof staging plan | ${proofStagingPlan?.ok ? '✓ generated' : '✗ missing core'} | ${proofStagingPlanMetric} |`,
  `| Proof system preflight | ${proofPreflight?.ok ? '✓ healthy' : '✗ red'} | ${proofPreflightMetric} |`,
  `| Lead outcome validation | ${leadOutcomeValidation?.ok ? '✓ validator ready' : '✗ red'} | ${leadOutcomeMetric} |`,
  `| Call attribution evidence validation | ${callAttributionEvidenceValidation?.ok ? '✓ validator ready' : '✗ red'} | ${callAttributionEvidenceMetric} |`,
  `| GBP cadence validation | ${gbpCadenceValidation?.ok ? '✓ ready' : '✗ red'} | ${gbpCadenceMetric} |`,
  `| Automation static validation | ${automationStaticValidation?.ok ? '✓ ready' : '✗ red'} | ${automationStaticMetric} |`,
  `| Google Ads import validation | ${googleAdsImportValidation?.ok ? '✓ launch-safe local pack' : '✗ red'} | ${googleAdsImportMetric} |`,
  `| Entity profile consistency | ${entityProfileValidation?.ok ? '✓ canonical' : '✗ red'} | ${entityProfileMetric} |`,
  `| Rank tracker manual snapshot validation | ${rankTrackerManualSnapshotValidation?.ok ? '✓ guarded' : '✗ red'} | ${rankTrackerManualSnapshotMetric} |`,
  `| DataForSEO n8n MCP runbook validation | ${dataForSeoN8nMcpValidation?.ok ? '✓ valid' : '✗ red'} | ${dataForSeoN8nMcpMetric} |`,
  `| DataForSEO n8n MCP workflow manifest validation | ${dataForSeoN8nMcpWorkflowManifestValidation?.ok ? '✓ valid' : '✗ red'} | ${dataForSeoN8nMcpWorkflowManifestMetric} |`,
  `| DataForSEO n8n MCP import preflight | ${dataForSeoN8nMcpImportPreflight?.ok ? '✓ guarded' : '✗ red'} | ${dataForSeoN8nMcpImportPreflightMetric} |`,
  `| DataForSEO n8n raw findings validation | ${dataForSeoN8nRawFindingsValidation?.ok ? '✓ guarded' : '✗ red'} | ${dataForSeoN8nRawFindingsMetric} |`,
  `| DataForSEO n8n findings intake draft | ${dataForSeoN8nFindingsIntakeDraft?.ok ? '✓ generated' : '✗ red'} | ${dataForSeoN8nFindingsIntakeDraftMetric} |`,
  `| DataForSEO n8n findings intake validation | ${dataForSeoN8nFindingsIntakeValidation?.ok ? '✓ guarded' : '✗ red'} | ${dataForSeoN8nFindingsIntakeMetric} |`,
  `| DataForSEO n8n findings review board | ${dataForSeoN8nFindingsReviewBoard?.ok ? '✓ generated' : '✗ red'} | ${dataForSeoN8nFindingsReviewBoardMetric} |`,
  `| DataForSEO n8n findings review board validation | ${dataForSeoN8nFindingsReviewBoardValidation?.ok ? '✓ guarded' : '✗ red'} | ${dataForSeoN8nFindingsReviewBoardValidationMetric} |`,
  `| DataForSEO n8n promotion gate | ${dataForSeoN8nPromotionGate?.ok ? '✓ guarded' : '✗ red'} | ${dataForSeoN8nPromotionGateMetric} |`,
  `| DataForSEO n8n operator handoff | ${dataForSeoN8nOperatorHandoff?.ok ? '✓ ready' : '✗ red'} | ${dataForSeoN8nOperatorHandoffMetric} |`,
  `| DataForSEO n8n operator handoff validation | ${dataForSeoN8nOperatorHandoffValidation?.ok ? '✓ guarded' : '✗ red'} | ${dataForSeoN8nOperatorHandoffValidationMetric} |`,
  `| DataForSEO n8n all gates | ${dataForSeoN8nAllGates?.ok ? '✓ sequenced' : '✗ red'} | ${dataForSeoN8nAllGatesMetric} |`,
  `| Scaling readiness board | ${scalingReadiness?.ok ? '✓ classified' : '✗ red'} | ${scalingReadinessMetric} |`,
  `| Scaling evidence request | ${scalingEvidenceRequest?.ok ? '✓ generated' : '✗ red'} | ${scalingEvidenceRequestMetric} |`,
  `| Scaling evidence request validation | ${scalingEvidenceRequestValidation?.ok ? '✓ valid' : '✗ red'} | ${scalingEvidenceRequestValidationMetric} |`,
  `| Scaling evidence bundle | ${scalingEvidenceBundle?.ok ? '✓ generated' : '✗ red'} | ${scalingEvidenceBundleMetric} |`,
  `| Scaling evidence bundle validation | ${scalingEvidenceBundleValidation?.ok ? '✓ valid' : '✗ red'} | ${scalingEvidenceBundleValidationMetric} |`,
  `| Scaling blocker exit checklist | ${scalingBlockerExitChecklist?.ok ? '✓ generated' : '✗ red'} | ${scalingBlockerExitChecklistMetric} |`,
  `| Scaling blocker exit checklist validation | ${scalingBlockerExitChecklistValidation?.ok ? '✓ valid' : '✗ red'} | ${scalingBlockerExitChecklistValidationMetric} |`,
  '',
];

// ---------- Build full report ----------

const reportLines = [
  '---',
  'type: report',
  `title: "SEO Weekly Report — ${today}"`,
  `created: "${today}"`,
  `updated: "${today}"`,
  'status: snapshot',
  'tags: [seo, weekly, audit, automated]',
  '---',
  '',
  `# SEO Weekly Report — ${today}`,
  '',
  `> Auto-generated by \`npm run seo:weekly\` from the ldn-decks-next repository.`,
  `> Generated: ${todayISO}`,
  '',
  ...summaryLines,
  '## Audit detail',
  '',
];

for (const result of results) {
  reportLines.push(`### ${result.label}`);
  reportLines.push('');
  reportLines.push(`Status: ${result.ok ? '✓ green' : '✗ red'} · Runtime: ${result.ms}ms`);
  reportLines.push('');
  reportLines.push('```');
  reportLines.push((result.out || '').trim().slice(0, 3000));
  reportLines.push('```');
  reportLines.push('');
}

// ---------- Operating checks ----------

reportLines.push('## Weekly operating checks');
reportLines.push('');
reportLines.push('- [ ] GBP post published this week — see [[../deliverables/local-seo-fixes/gbp/this-week]]');
reportLines.push('- [ ] GBP cadence validator reviewed — run `npm run gbp:validate` before publishing or editing the 90-day queue');
reportLines.push('- [ ] 3 Q&A seeds published this week');
reportLines.push('- [ ] All new reviews this week responded to within 48h');
reportLines.push('- [ ] Proof ops board reviewed — see `docs/seo/gbp-maps-proof-ops-board-' + today + '.md`');
reportLines.push('- [ ] Proof ops board validation reviewed — run `npm run seo:proof-ops-board:validate` after editing GBP/Maps/proof tasks');
reportLines.push('- [ ] Proof source checklist validation reviewed — run `npm run seo:proof-source-checklist:validate` after editing proof-source, intake, or publish-gate wording');
reportLines.push('- [ ] Verified proof snippets validation reviewed — run `npm run seo:proof-snippets:validate` after any owner evidence import or runtime proof snippet edit');
reportLines.push('- [ ] Evidence unblock runbook reviewed — run `npm run seo:evidence-unblock -- --date latest`');
reportLines.push('- [ ] Evidence unblock runbook validation reviewed — run `npm run seo:evidence-unblock:validate` after editing proof-unblock workload, commands, or red gates');
reportLines.push('- [ ] Before/after evidence resolution validation reviewed — run `npm run seo:before-after-evidence:validate` after editing before/after owner evidence rows or VERIFY-marker policy');
reportLines.push('- [ ] Photo ingestion manifest validation reviewed — run `npm run seo:photo-manifest:validate` after editing owner photo rows or asset ingestion paths');
reportLines.push('- [ ] Commercial evidence intake validation reviewed — run `npm run seo:commercial-intake:validate` after editing warranty or repair-cost intake rows');
reportLines.push('- [ ] Owner evidence handoff validation reviewed — run `npm run seo:evidence-handoff:validate` after editing owner handoff wording, intake files, or proof import commands');
reportLines.push('- [ ] Owner evidence sprint checklist reviewed — run `npm run seo:evidence-sprint`');
reportLines.push('- [ ] Owner evidence sprint validation reviewed — run `npm run seo:evidence-sprint:validate` after editing owner sprint blocks or source files');
reportLines.push('- [ ] Owner evidence action packet validated — run `npm run seo:evidence-action-packet:validate` after editing owner proof blockers');
reportLines.push('- [ ] Proof source checklist reviewed — see `docs/seo/proof-source-checklist-' + today + '.md`');
reportLines.push('- [ ] Directory citation packets reviewed — run `npm run seo:directory-citations:validate` after editing NADRA/Bing/Apple/Nextdoor/Angi proof packets');
reportLines.push('- [ ] Proof command references reviewed — run `npm run seo:proof-commands:validate` after editing package scripts or proof command docs');
reportLines.push('- [ ] Brainstein readiness reviewed — see `docs/seo/brainstein-readiness-audit-' + today + '.md`');
reportLines.push('- [ ] Brainstein task packets reviewed — see `docs/seo/brainstein-task-packets-' + today + '.md`');
reportLines.push('- [ ] Brainstein task packet validation reviewed — run `npm run brainstein:tasks:validate` after editing Brainstein packet generation');
reportLines.push('- [ ] Internal link gap validation reviewed — run `npm run seo:internal-link-gap:validate` after editing priority money-page links');
reportLines.push('- [ ] Deep SEO growth map validation reviewed — run `npm run seo:growth-map:validate` after editing growth-map logic or proof-gated candidate pages');
reportLines.push('- [ ] SXO conversion report reviewed — see `docs/seo/sxo-conversion-report-' + today + '.md`');
reportLines.push('- [ ] SXO conversion report validation reviewed — run `npm run seo:sxo-conversion:validate` after editing high-intent conversion pages');
reportLines.push('- [ ] Proof system staging manifest reviewed — see `docs/seo/proof-system-staging-manifest-' + today + '.md`');
reportLines.push('- [ ] Proof system staging check reviewed — run `npm run seo:proof-staging-check`');
reportLines.push('- [ ] Proof staging plan reviewed — see `docs/seo/proof-staging-plan-' + today + '.md`');
reportLines.push('- [ ] Proof system preflight reviewed — run `npm run seo:proof-preflight`');
reportLines.push('- [ ] Lead outcome rows reviewed — run `npm run measurement:lead-outcomes` after any real CRM/owner rows are added');
reportLines.push('- [ ] Call attribution evidence reviewed — run `npm run measurement:call-attribution-evidence` after any Google Ads/GTM read-only evidence rows are added');
reportLines.push('- [ ] Automation static gate reviewed — run `npm run automation:static` after any Vapi/GHL/Twilio route edit');
reportLines.push('- [ ] Google Ads import pack reviewed — run `npm run ads:validate-imports` before any Ads Editor import or campaign activation');
reportLines.push('- [ ] Entity profile consistency reviewed — run `npm run seo:entity-profiles` after editing public profile/citation URLs');
reportLines.push('- [ ] Rank tracker manual snapshot reviewed — run `npm run seo:rank-snapshot:validate` after any Ahrefs API/MCP or manual rank export is added');
reportLines.push('- [ ] DataForSEO n8n MCP runbook reviewed — run `npm run dataforseo:n8n-mcp:validate` before building n8n MCP workflows');
reportLines.push('- [ ] DataForSEO n8n MCP workflow manifest reviewed — run `npm run dataforseo:n8n-mcp:workflow:validate` before importing or rebuilding n8n MCP workflows');
reportLines.push('- [ ] DataForSEO n8n MCP import preflight reviewed — run `npm run dataforseo:n8n-mcp:import-preflight` before committing or importing n8n workflow exports');
reportLines.push('- [ ] DataForSEO n8n raw findings reviewed — run `npm run dataforseo:n8n-mcp:raw-findings:validate` before copying raw output into the official findings intake');
reportLines.push('- [ ] DataForSEO n8n findings intake draft reviewed — run `npm run dataforseo:n8n-mcp:findings:draft` after validating raw output and before editing the official intake CSV');
reportLines.push('- [ ] DataForSEO n8n findings intake reviewed — run `npm run dataforseo:n8n-mcp:findings:validate` after any read-only workflow findings are added');
reportLines.push('- [ ] DataForSEO n8n findings review board reviewed — run `npm run dataforseo:n8n-mcp:findings:board && npm run dataforseo:n8n-mcp:findings:board:validate` before converting findings into work items');
reportLines.push('- [ ] DataForSEO n8n promotion gate reviewed — run `npm run dataforseo:n8n-mcp:promotion-gate` before any finding becomes a public claim, SEO task, citation edit, or Ads action');
reportLines.push('- [ ] DataForSEO n8n operator handoff reviewed — run `npm run dataforseo:n8n-mcp:operator-handoff && npm run dataforseo:n8n-mcp:operator-handoff:validate` before an operator runs or imports workflows');
reportLines.push('- [ ] DataForSEO n8n all-gates sequence reviewed — run `npm run dataforseo:n8n-mcp:all` as the canonical ordered command before operator use');
reportLines.push('- [ ] Scaling readiness board reviewed — run `npm run scaling:readiness` before Ads budget activation or scaling decisions');
reportLines.push('- [ ] Scaling evidence request packet reviewed — run `npm run scaling:evidence-request` before requesting owner/Ads proof');
reportLines.push('- [ ] Scaling evidence request packet validated — run `npm run scaling:evidence-request:validate` after editing request wording or blockers');
reportLines.push('- [ ] Scaling evidence bundle reviewed — run `npm run scaling:evidence-bundle` before sending source-of-record evidence requests');
reportLines.push('- [ ] Scaling evidence bundle validated — run `npm run scaling:evidence-bundle:validate` after editing bundle wording or source paths');
reportLines.push('- [ ] Scaling blocker exit checklist reviewed — run `npm run scaling:blocker-exit` before reclassifying RED/YELLOW/GREEN');
reportLines.push('- [ ] Scaling blocker exit checklist validated — run `npm run scaling:blocker-exit:validate` after editing exit criteria');
reportLines.push('- [ ] Houzz Ashburn address reconciled (see [[../deliverables/local-seo-fixes/citation-live-state-audit]])');
reportLines.push('- [ ] Loudoun proximity decision made (see [[../deliverables/local-seo-fixes/proximity/decision-memo]])');
reportLines.push('- [ ] Outreach pack: at least 1 email sent this week (see [[../deliverables/local-seo-fixes/outreach-pack/00-README]])');
reportLines.push('');

reportLines.push('## What changed this week (manual fill-in)');
reportLines.push('');
reportLines.push('| Date | Action | Outcome |');
reportLines.push('|---|---|---|');
reportLines.push('|  |  |  |');
reportLines.push('');

// ---------- Write report ----------

fs.mkdirSync(VAULT_REPORTS, { recursive: true });
const reportFile = path.join(VAULT_REPORTS, `seo-weekly-${today}.md`);
fs.writeFileSync(reportFile, reportLines.join('\n'));

console.log('\n' + '='.repeat(60));
console.log(`Report written to ${path.relative(REPO_ROOT, reportFile)}\n`);

// Print console summary
console.log(summaryLines.join('\n'));
