# LDN PromoModal CTA Bypass Fix - 2026-06-06

Status: fixed locally
Mode: local-only
Company: LDN Decks
Repo: `/Users/ldndecks/ldn-decks-next`
Live impact: none applied

## Decision

Fix the PromoModal bypass before any deploy approval.

Reason: the 10-hour board found that six primary CTAs routed correctly through `/get-estimate`, but `PromoModal.jsx` still opened the contact modal from the delayed popup. That bypass could skip the server-confirmed `/get-estimate` measurement path.

## Files Changed

- `src/components/PromoModal.jsx`

## Change

- Removed `useContact` import.
- Removed `openContact()` usage.
- Removed `handleGetEstimate()`.
- Added `Link` from `next/link`.
- Replaced the popup `Get Free Estimate` button with:

```jsx
<Link href="/get-estimate" onClick={() => setIsOpen(false)} className={styles.estimateBtn}>
  Get Free Estimate
</Link>
```

## Validation

```bash
rg -n "useContact|openContact|handleGetEstimate|<button onClick=.*Estimate|Get Free Estimate" src/components/PromoModal.jsx
npm run lint
npm run build
```

Results:

- `PromoModal.jsx` has no `useContact`, `openContact`, or `handleGetEstimate` references.
- `npm run lint`: passed
- `npm run build`: passed
- Static pages generated: 811
- TypeScript/Webpack errors: 0 observed

## Measurement Gate Effect

The delayed PromoModal estimate CTA now routes through `/get-estimate`, matching the other primary estimate CTAs and preserving the server-confirmed lead path.

## Approval Status

No commit, push, or deploy was performed.

Deploy is still approval-gated.

```text
Recommended change: deploy the corrected LDN branch after final deploy readiness review.
Reason: local CTA/measurement fixes are now complete, but production is unchanged.
Expected impact: production estimate CTAs route through the confirmed measurement path.
Risk level: MEDIUM
Rollback plan: revert to previous Vercel deployment if post-deploy QA fails.
Approval required: YES
```

## Next Action

Update the LDN deployment readiness packet to include `PromoModal.jsx`, then decide whether the owner approves deploy or wants more local QA first.

