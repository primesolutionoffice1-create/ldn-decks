#!/usr/bin/env node
/**
 * Financing UI guard.
 *
 * Verifies that every required financing component is still wired up across
 * the site. Runs in CI on every PR. Fails the check (exit 1) and prints a
 * clear remediation hint if any wiring is missing.
 *
 * Add new requirements here in the same PR that introduces them. Removing
 * a requirement intentionally is fine — just delete it from CHECKS and
 * mention it in the PR description.
 *
 * Usage:
 *   node scripts/verify-financing-ui.mjs
 *   npm run verify:financing   (if added to package.json)
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');

const CHECKS = [
  {
    file: 'src/app/LayoutContent.jsx',
    needs: [
      { re: /import\s+FinancingAnnouncementBar\s+from\s+['"][^'"]+FinancingAnnouncementBar['"]/, label: 'imports FinancingAnnouncementBar' },
      { re: /<FinancingAnnouncementBar\s*\/?>/, label: 'renders <FinancingAnnouncementBar />' },
    ],
  },
  {
    file: 'src/app/page.tsx',
    needs: [
      { re: /import\s+FinancingTeaser\s+from\s+['"][^'"]+FinancingTeaser['"]/, label: 'imports FinancingTeaser' },
      { re: /<FinancingTeaser\s*\/?>/, label: 'renders <FinancingTeaser />' },
    ],
  },
  {
    file: 'src/components/Header.jsx',
    needs: [
      { re: /Financing Available/, label: 'contains "Financing Available" pill / link copy' },
      { re: /\/deck-payment-estimator/, label: 'links to /deck-payment-estimator' },
    ],
  },
  {
    file: 'src/app/monthly-payment-composite-deck-northern-virginia/page.js',
    needs: [
      { re: /import\s+EnhancifyPaymentCalculator\s+from\s+['"][^'"]+EnhancifyPaymentCalculator['"]/, label: 'imports EnhancifyPaymentCalculator' },
      { re: /<EnhancifyPaymentCalculator\s*\/?>/, label: 'renders <EnhancifyPaymentCalculator />' },
    ],
  },
  {
    file: 'src/app/trex-deck-cost-monthly-payment/page.js',
    needs: [
      { re: /import\s+EnhancifyPaymentCalculator\s+from\s+['"][^'"]+EnhancifyPaymentCalculator['"]/, label: 'imports EnhancifyPaymentCalculator' },
      { re: /<EnhancifyPaymentCalculator\s*\/?>/, label: 'renders <EnhancifyPaymentCalculator />' },
    ],
  },
];

const failures = [];
const passes = [];

for (const check of CHECKS) {
  const full = path.join(ROOT, check.file);
  let src;
  try {
    src = fs.readFileSync(full, 'utf8');
  } catch (e) {
    failures.push(`MISSING FILE: ${check.file} — could not read (${e.code || e.message}).`);
    continue;
  }
  for (const need of check.needs) {
    if (need.re.test(src)) {
      passes.push(`  ✓ ${check.file} ${need.label}`);
    } else {
      failures.push(`  ✗ ${check.file} no longer ${need.label}`);
    }
  }
}

if (failures.length > 0) {
  console.error('Financing UI guard FAILED.\n');
  console.error('The following required wiring is missing on this branch:\n');
  for (const f of failures) console.error(f);
  console.error(`
This branch removes financing UI that the project explicitly protects.

If the removal is intentional:
  1. Update scripts/verify-financing-ui.mjs in the same PR to reflect the new
     intended structure.
  2. Mention the change in the PR description.

If the removal is accidental (probably from a stale clone or a merge that
dropped imports), restore the wiring per CLAUDE.md "Financing UI must stay
wired" before pushing again.
`);
  process.exit(1);
}

console.error('Financing UI guard PASSED.');
for (const p of passes) console.error(p);
process.exit(0);
