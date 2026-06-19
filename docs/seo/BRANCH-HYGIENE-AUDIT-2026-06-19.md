# Branch Hygiene Audit - 2026-06-19

This audit records the local dirty state found in `/Users/ldndecks/ldn-decks-next` on 2026-06-19 before any new implementation work. It is a control document only. It does not approve reverting, deleting, merging, deploying, or changing live Ads/GTM/Meta settings.

## Source State

- Working tree checked: `/Users/ldndecks/ldn-decks-next`
- Current branch there: `main`
- Local relation to remote: `ahead 3, behind 20`
- Local working tree: dirty, with a large mix of modified and untracked files
- Clean control worktree created: `/private/tmp/ldn-jun19-branch-hygiene`
- Control branch: `codex/jun19-branch-hygiene`
- Clean base: `origin/main` at `ec0e48b`

## Dirty Tree Inventory

| Category | Count | Notes |
|---|---:|---|
| Ads / attribution docs and imports | 38 | Google Ads import CSVs, Ads tracking runbooks, evidence requests, templates |
| SEO docs / evidence / blueprint | 382 | Owner proof docs, citation packets, DataForSEO docs, scaling/evidence reports |
| Social image assets | 191 | `public/social/*.png` generated OG/social assets |
| Scripts / validators / generators | 92 | SEO, Ads, evidence, proof, DataForSEO, reporting validators/generators |
| Runtime app/code | 131 | `src/app`, components, hooks, server, lib changes |
| Core generated/config files | 4 | `package.json`, `public/llms*.txt`, deleted `public/robots.txt` |
| Data files | 2 | `src/data/localServicePages.js`, `src/data/verifiedProofSnippets.json` |

## Risk

The current local `main` is not safe for direct commits because it mixes:

- Google Ads import work
- SEO evidence system work
- public social image generation
- runtime page/content changes
- tracking/contact form changes
- admin/DataForSEO tooling
- generated docs and reports

Committing this as one unit would make review, rollback, and deployment risk unnecessarily high.

## Recommended Separation Order

### 1. Ads Import / Attribution Branch

Branch: `codex/jun19-ads-import-attribution-cleanup`

Scope:

- `google-ads-import/**`
- `docs/ads-tracking/**`
- Ads-specific validation scripts only if required

Validation:

```bash
npm run ads:validate-imports
npm run measurement:gate
npm run scaling:readiness
```

Do not include runtime page edits, social images, generic SEO reports, or owner-proof docs unless the file is directly required by the Ads validator.

### 2. SEO Evidence / Owner Proof Docs Branch

Branch: `codex/jun19-seo-evidence-docs`

Scope:

- `docs/seo/**`
- `docs/seo-ops/**`
- `seo-blueprint/evidence/**`

Validation:

```bash
npm run seo:validate-owner-intake
npm run seo:proof-preflight
npm run seo:weekly
```

Do not include runtime app pages or public social images in this branch.

### 3. SEO Tooling / Validator Branch

Branch: `codex/jun19-seo-tooling-validators`

Scope:

- `scripts/**`
- `package.json` only if script entries changed

Validation:

```bash
npm run lint
npm run seo:validate-schema
npm run seo:strict-crawl
```

This branch should be reviewed before any branch that depends on new script commands.

### 4. Runtime SEO Content Branch

Branch: `codex/jun19-runtime-seo-pages`

Scope:

- `src/app/**`
- `src/components/**`
- `src/data/**`
- page/content changes only

Validation:

```bash
npm run lint
npm run build
npm run seo:validate-schema
npm run seo:strict-crawl
```

This is higher deployment risk than docs-only work and should not include Ads import CSVs or generated report archives.

### 5. Tracking / Contact Runtime Branch

Branch: `codex/jun19-tracking-runtime-review`

Scope:

- `src/components/ContactForm.jsx`
- `src/hooks/useLeadSubmit.js`
- `src/lib/tracking.js`
- `src/server/sendEmail.js`
- any tracking-specific app/layout changes

Validation:

```bash
npm run lint
npm run build
npm run measurement:gate
```

Do not activate Meta CAPI, Smart Bidding, budget scaling, or primary phone-click bidding from this branch.

### 6. Social / OG Asset Branch

Branch: `codex/jun19-og-social-assets`

Scope:

- `public/social/**`
- OG/social image manifest changes if any

Validation:

```bash
npm run seo:audit-og
npm run build
```

This branch may be large because of images. Keep it separate from runtime and Ads work.

## Operating Rule

Do not revert user work. Do not `git reset --hard`. Do not commit from dirty `main`. Use clean worktrees or path-scoped stashes/patches, then validate each branch independently.

## Immediate Next Step

Start with the Ads import/attribution branch because it is the smallest high-leverage slice and directly affects lead quality decisions. If it validates cleanly, open a focused PR before touching runtime SEO pages or generated social assets.
