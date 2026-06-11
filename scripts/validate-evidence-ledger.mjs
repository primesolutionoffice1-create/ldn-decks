import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const PUBLIC_DIR = path.join(ROOT, 'public');
const REQUIRED_TOP_LEVEL_ARRAYS = [
  'projects',
  'warranty_terms',
  'repair_cost_ranges',
  'public_review_sources',
  'asset_requirements',
];
const PLACEHOLDER_PATTERN = /\[(INSERT|VERIFY|TODO|TBD|DO NOT PUBLISH)/i;
const OWNER_FILL_PATTERN = /UNKNOWN - OWNER TO FILL|OWNER TO FILL/i;
const UNVERIFIED_VALUE_PATTERN = /\b(unknown|not recorded|not specified|unspecified|unverified|pending owner verification|owner verification still required|verification still required|verify from owner|evidence missing)\b/i;

function fail(message, details = null) {
  return { ok: false, message, details };
}

function readLedger() {
  const raw = fs.readFileSync(LEDGER_PATH, 'utf8');
  return JSON.parse(raw);
}

function isPublicAsset(value) {
  if (!value) return true;
  if (typeof value !== 'string') return false;
  if (!value.startsWith('/')) return false;
  return fs.existsSync(path.join(PUBLIC_DIR, value.replace(/^\/+/, '')));
}

function validateRequiredFields(record, fields, context) {
  const missing = fields.filter((field) => !(field in record));
  if (missing.length) return fail(`${context} is missing required fields.`, missing);
  return { ok: true };
}

function validateEvidenceStatus(record, allowed, context) {
  if (!allowed.includes(record.evidence_status)) {
    return fail(`${context} has invalid evidence_status.`, {
      evidence_status: record.evidence_status,
      allowed,
    });
  }
  return { ok: true };
}

function validateNoVerifiedPlaceholders(record, context) {
  if (record.evidence_status !== 'verified') return { ok: true };

  const placeholderFields = Object.entries(record)
    .filter(([, value]) => typeof value === 'string' && (
      PLACEHOLDER_PATTERN.test(value)
      || OWNER_FILL_PATTERN.test(value)
    ))
    .map(([field]) => field);

  if (placeholderFields.length) {
    return fail(`${context} is verified but still contains placeholder text.`, placeholderFields);
  }
  return { ok: true };
}

function validateVerifiedRequiredValues(record, fields, context) {
  if (record.evidence_status !== 'verified') return { ok: true };

  const invalidFields = fields
    .filter((field) => {
      const value = record[field];
      if (value == null) return true;
      if (typeof value !== 'string') return false;
      const trimmed = value.trim();
      return !trimmed || UNVERIFIED_VALUE_PATTERN.test(trimmed);
    })
    .map((field) => ({ field, value: record[field] }));

  if (invalidFields.length) {
    return fail(`${context} is verified but still has incomplete or unverifiable required values.`, invalidFields);
  }
  return { ok: true };
}

function validateVerifiedRepairCostRange(record, context) {
  if (record.evidence_status !== 'verified') return { ok: true };

  const low = Number(record.low);
  const high = Number(record.high);
  if (!Number.isFinite(low) || !Number.isFinite(high) || low < 0 || high <= 0 || low > high) {
    return fail(`${context} is verified but has an invalid cost range.`, {
      low: record.low,
      high: record.high,
    });
  }
  return { ok: true };
}

function validateVerifiedAssetRequirement(record, context) {
  if (record.evidence_status !== 'verified') return { ok: true };

  const publicAssetPaths = String(record.public_asset_paths || '')
    .split(';')
    .map((item) => item.trim())
    .filter(Boolean);

  if (!publicAssetPaths.length) {
    return fail(`${context} is verified but has no public_asset_paths recorded.`, {
      asset_id: record.asset_id,
    });
  }

  const missingAssets = publicAssetPaths
    .filter((assetPath) => !isPublicAsset(assetPath))
    .map((assetPath) => ({ public_asset_path: assetPath }));

  if (missingAssets.length) {
    return fail(`${context} is verified but references missing public asset files.`, missingAssets);
  }

  return { ok: true };
}

function validateProject(record, index, ledger) {
  const context = `projects[${index}]`;
  const checks = [
    validateRequiredFields(record, ledger.projectRequiredFields, context),
    validateEvidenceStatus(record, ledger.allowedEvidenceStatuses, context),
    validateNoVerifiedPlaceholders(record, context),
    validateVerifiedRequiredValues(record, ledger.projectRequiredFields, context),
  ];
  const failed = checks.find((check) => !check.ok);
  if (failed) return failed;

  if (record.evidence_status === 'verified') {
    const missingAssets = ['before_photo_path', 'after_photo_path']
      .filter((field) => !isPublicAsset(record[field]))
      .map((field) => ({ field, value: record[field] }));

    if (missingAssets.length) {
      return fail(`${context} is verified but references missing public assets.`, missingAssets);
    }
  }

  return { ok: true };
}

function validateGenericEvidenceArray(records, allowed, name, requiredFields = []) {
  for (const [index, record] of records.entries()) {
    const context = `${name}[${index}]`;
    if (requiredFields.length) {
      const requiredCheck = validateRequiredFields(record, requiredFields, context);
      if (!requiredCheck.ok) return requiredCheck;
    }
    const statusCheck = validateEvidenceStatus(record, allowed, context);
    if (!statusCheck.ok) return statusCheck;
    const placeholderCheck = validateNoVerifiedPlaceholders(record, context);
    if (!placeholderCheck.ok) return placeholderCheck;
    const verifiedValuesCheck = validateVerifiedRequiredValues(record, requiredFields, context);
    if (!verifiedValuesCheck.ok) return verifiedValuesCheck;
    if (name === 'repair_cost_ranges') {
      const repairCostCheck = validateVerifiedRepairCostRange(record, context);
      if (!repairCostCheck.ok) return repairCostCheck;
    }
    if (name === 'asset_requirements') {
      const assetRequirementCheck = validateVerifiedAssetRequirement(record, context);
      if (!assetRequirementCheck.ok) return assetRequirementCheck;
    }

    if (record.evidence_status === 'verified' && 'url' in record) {
      try {
        const parsed = new URL(record.url);
        if (!['http:', 'https:'].includes(parsed.protocol)) {
          return fail(`${context} has a non-web URL.`, { url: record.url });
        }
      } catch {
        return fail(`${context} has an invalid URL.`, { url: record.url });
      }
    }
  }
  return { ok: true };
}

function main() {
  const ledger = readLedger();
  const errors = [];

  for (const field of REQUIRED_TOP_LEVEL_ARRAYS) {
    if (!Array.isArray(ledger[field])) {
      errors.push(`${field} must exist and be an array.`);
    }
  }

  if (!Array.isArray(ledger.projectRequiredFields) || ledger.projectRequiredFields.length === 0) {
    errors.push('projectRequiredFields must be a non-empty array.');
  }

  if (!Array.isArray(ledger.allowedEvidenceStatuses) || !ledger.allowedEvidenceStatuses.includes('verified')) {
    errors.push('allowedEvidenceStatuses must include verified.');
  }

  if (errors.length === 0) {
    for (const [index, project] of ledger.projects.entries()) {
      const result = validateProject(project, index, ledger);
      if (!result.ok) errors.push(result);
    }

    const requiredMap = {
      warranty_terms: ledger.warrantyTermRequiredFields,
      repair_cost_ranges: ledger.repairCostRangeRequiredFields,
      public_review_sources: ledger.publicReviewSourceRequiredFields,
      asset_requirements: ledger.assetRequirementRequiredFields,
    };

    for (const name of ['warranty_terms', 'repair_cost_ranges', 'public_review_sources', 'asset_requirements']) {
      const result = validateGenericEvidenceArray(
        ledger[name],
        ledger.allowedEvidenceStatuses,
        name,
        requiredMap[name] || [],
      );
      if (!result.ok) errors.push(result);
    }
  }

  const summary = {
    ok: errors.length === 0,
    ledger: path.relative(ROOT, LEDGER_PATH),
    projects: ledger.projects?.length || 0,
    verifiedProjects: ledger.projects?.filter((item) => item.evidence_status === 'verified').length || 0,
    warrantyTerms: ledger.warranty_terms?.length || 0,
    repairCostRanges: ledger.repair_cost_ranges?.length || 0,
    publicReviewSources: ledger.public_review_sources?.length || 0,
    assetRequirements: ledger.asset_requirements?.length || 0,
    errors,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (!summary.ok) process.exit(1);
}

main();
