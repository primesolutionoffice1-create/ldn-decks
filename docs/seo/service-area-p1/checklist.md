# Execution checklist

| Phase | Status | Evidence | Next step |
| --- | --- | --- | --- |
| A. Inventory and baseline | verified | `inventory.md`, `baseline.json` | Compare live HTML after deploy |
| B. Shared geographic model | verified | `src/lib/serviceArea.js`, decision log | Wait for owner confirmation before any restriction |
| C. Homepage, contact, estimate, areas, nav, financing | verified | Local production HTML and viewport checks | Confirm the same strings on the live deploy |
| D. Schema and technical SEO | verified | `seo:validate-schema`; homepage JSON-LD parsed in the browser | CI link audit on the PR build |
| E. Crawler and GEO audit | verified as read-only | `robots.js` unchanged; no geo CLI | Do not install an unknown binary |
| F. DataForSEO and new city pages | out-of-scope | No budget and no new evidence packet | Do not publish city-name swaps |
| G. Tests | verified | `verification.md` | Re-run if a later commit changes the lot |
| H. PR, preview, production | in-progress | Local checks passed | One PR, required checks, then the automatic Vercel deploy |
