# Rollback

- Last production commit before this lot: `f782f17dd7981413b0aceb465c83d0e0cc537a24` (`f782f17d`).
- Production deploy path: GitHub squash merge to `main`, then the existing Vercel production deployment. Do not start a second deploy.
- If this lot ships a severe regression, revert the squash commit with a normal revert pull request, or promote the previous Ready Vercel deployment for `f782f17d` through the existing Vercel control. Do not force-push `main`.
- After a rollback, confirm the live homepage title, the financing pill, `/get-estimate`, and `/areas-we-serve` respond with the restored HTML.
