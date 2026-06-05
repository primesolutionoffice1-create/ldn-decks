# Project Instructions for Claude

These instructions OVERRIDE default behavior. Follow them exactly.

## Repository structure — keep it flat (single app at the root)

This repository is **one Next.js application that lives directly at the repository root**.

- All website code stays in the root: `src/`, `public/`, `next.config.mjs`, `package.json`, etc.
- Do **NOT** move the app into a `site/` subfolder.
- Do **NOT** convert this repository into a monorepo.
- Do **NOT** add a `brains/` folder or any other non-website vault/content to this repository.
- If you ever find the app has been moved into a subfolder, move it back to the root.

## Git workflow — pull request only, no direct pushes to `main`

`main` is branch-protected. Direct pushes to `main` are blocked. All changes go through pull requests.

1. **Always start clean.** `git fetch origin && git checkout main && git pull --rebase origin main` before doing anything.
2. **Branch per task.** Create a short-lived branch named `feat/<slug>`, `fix/<slug>`, `content/<slug>`, or `seo/<slug>`. Examples: `feat/header-financing-pill`, `fix/mobile-bar-overlap`, `content/snow-load-education`.
3. **Run `npm run build` locally before pushing.** If the build fails, do not push. Fix it first.
4. **Push the branch, open a PR against `main`.** Use the GitHub PR template. Include a concise summary, build status, and what you changed.
5. **Wait for required status checks to pass.** Do not bypass checks. If a check fails, push fixes to the same branch.
6. **Merge via the GitHub PR.** Use "Squash and merge" unless the PR has a deliberate multi-commit narrative worth preserving.
7. **Delete the branch after merge.** Both remote (auto on GitHub) and local (`git branch -d <name>`).
8. **Never force-push to `main`.** Never use `--no-verify`, `--no-gpg-sign`, or any other check-bypass flags unless the user explicitly asks for them.

Vercel auto-deploys `main` on every merge. A broken `main` ships to production within minutes, so the pre-push build and the required status checks are not optional.

## Why this changed

Earlier this repo allowed direct pushes to `main` to keep things fast. That broke down when multiple agents started working on it in parallel — work from one agent was overwritten by another agent pushing from a stale clone. The PR workflow forces every push to be based on the latest `main` and gives each change a visible diff to review before it lands.

## Financing UI must stay wired

The site has a financing campaign that must remain visible across the site. The following imports and renders are required and protected by `scripts/verify-financing-ui.mjs` (run by CI on every PR):

| File | Required |
| --- | --- |
| `src/app/LayoutContent.jsx` | imports and renders `FinancingAnnouncementBar` |
| `src/app/page.tsx` | imports and renders `FinancingTeaser` |
| `src/components/Header.jsx` | contains the "Financing Available" pill (desktop) and mobile drawer entry |
| `src/app/monthly-payment-composite-deck-northern-virginia/page.js` | imports and renders `EnhancifyPaymentCalculator` |
| `src/app/trex-deck-cost-monthly-payment/page.js` | imports and renders `EnhancifyPaymentCalculator` |

If you intentionally need to remove or relocate one of these, update `scripts/verify-financing-ui.mjs` in the same PR so the check reflects the new structure. Do **not** silently delete a wiring without updating the script.
