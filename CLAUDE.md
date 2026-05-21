# Project Instructions for Claude

These instructions OVERRIDE default behavior. Follow them exactly.

## Repository structure — keep it flat (single app at the root)

This repository is **one Next.js application that lives directly at the repository root**.

- All website code stays in the root: `src/`, `public/`, `next.config.mjs`, `package.json`, etc.
- Do **NOT** move the app into a `site/` subfolder.
- Do **NOT** convert this repository into a monorepo.
- Do **NOT** add a `brains/` folder or any other non-website vault/content to this repository.
- If you ever find the app has been moved into a subfolder, move it back to the root.

## Git workflow — push to `main` only

- Commit and push changes **directly to the `main` branch**.
- Do **NOT** create pull requests or long-lived feature branches for this project.
- Always `git fetch` and merge the latest `main` before pushing — `main` is updated frequently.
- Run `npm run build` and confirm it succeeds **before** pushing — `main` auto-deploys to production via Vercel.
