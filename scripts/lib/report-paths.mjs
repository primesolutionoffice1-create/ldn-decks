import fs from 'node:fs';
import path from 'node:path';

function firstWritableDir(candidates, fallback) {
  for (const candidate of candidates.filter(Boolean)) {
    try {
      fs.mkdirSync(candidate, { recursive: true });
      fs.accessSync(candidate, fs.constants.W_OK);
      return candidate;
    } catch {}
  }

  fs.mkdirSync(fallback, { recursive: true });
  return fallback;
}

export function resolveVaultReportsDir(repoRoot) {
  return firstWritableDir(
    [
      process.env.LDN_VAULT_REPORTS,
      path.resolve(repoRoot, '../../ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports'),
      path.resolve(process.env.HOME || '', 'ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports'),
    ],
    path.resolve(repoRoot, 'scripts/output'),
  );
}

export function resolveGbpOpsDir(repoRoot) {
  return firstWritableDir(
    [
      process.env.LDN_GBP_OPS_DIR,
      path.resolve(repoRoot, '../../ldn-decks-growth-brain-vaults/ldn-decks/wiki/deliverables/local-seo-fixes/gbp'),
      path.resolve(process.env.HOME || '', 'ldn-decks-growth-brain-vaults/ldn-decks/wiki/deliverables/local-seo-fixes/gbp'),
    ],
    path.resolve(repoRoot, 'scripts/output/gbp'),
  );
}
