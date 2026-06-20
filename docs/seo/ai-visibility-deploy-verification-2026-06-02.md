# AI Visibility Deploy Verification - 2026-06-02

## Scope

Verified and deployed the AI/LLM visibility layer for LDN Decks. No Google Ads, GTM, GA4, DataForSEO account settings, GBP settings, budgets, bidding, keywords, ads, conversion actions, or external account configuration were changed.

## Commands Run

- `npm run seo:verify-robots`
- `npx vercel deploy --prod`
- `npm run seo:daily-check`

## Deploy Result

- Production deployment: `dpl_EZuvHPjACzupevCdC3UGzev9iMWW`
- Production URL: `https://ldn-decks-9j57-9v510advr-primesolutionoffice1-creates-projects.vercel.app`
- Aliased domain: `https://ldndecks.com`
- Vercel build: pass
- Static pages generated in cloud: 342

## Live AI/LLM Verification

- `https://ldndecks.com/llms.txt`: 200
- `llms.txt` line count: 297
- `https://ldndecks.com/llms-full.txt`: 200
- `llms-full.txt` line count: 304
- `llms.txt` includes the primary conversion path: Get a Written Estimate
- `llms.txt` includes trust/reputation paths: BBB, Yelp, reviews, before-and-after, Houzz
- `llms.txt` includes safety/content relevance path: Deck Safety Inspection Checklist

## Robots + IndexNow Verification

- Robots verification: 6 passed, 0 failed
- AI bots declared: yes
- Sitemap declared: yes
- Sitemap URL count: 260
- Image sitemap reachable: yes
- IndexNow key file matches: yes

## Post-Deploy Daily Check

- Sitemap reachable: yes
- Sitemap URL count: 260
- Robots allows crawl: yes
- Core page indexability and canonicals: pass
- `/social` public profile links: pass
- IndexNow submission: accepted
- IndexNow submitted URLs: 260

## Interpretation

The AI visibility layer is live and discoverable. The reason earlier changes may not have been visible was stale production/cache state; a fresh production deploy has now published the verified local state to `ldndecks.com`.

## Remaining Gates

- Scaling gate remains RED because Google Ads qualified-call attribution is not proven.
- Project-proof depth remains gated by missing owner-verified project evidence.

## Execution Ledger

- Task 701: Ran robots/IndexNow verification for AI crawler visibility.
- Task 702: Confirmed robots verification passed 6/6 with AI bots declared and sitemap count 260.
- Task 703: Detected live `llms.txt` was not matching the desired fresh local state closely enough for AI visibility verification.
- Task 704: Deployed the verified working tree to Vercel production.
- Task 705: Confirmed Vercel production build passed with 342 static pages generated and alias `ldndecks.com` updated.
- Task 706: Verified live `llms.txt` and `llms-full.txt` return 200 after deployment.
- Task 707: Confirmed live `llms.txt` includes estimate, trust, reputation, and safety-inspection discovery paths.
- Task 708: Re-ran post-deploy daily SEO check.
- Task 709: Confirmed post-deploy sitemap, robots, canonicals, profile links, and IndexNow submission pass.
