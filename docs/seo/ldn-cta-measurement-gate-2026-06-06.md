# LDN Decks — CTA Measurement Gate Audit
**Date:** 2026-06-06 | **Hour:** 1-2

---

## Summary

All 7 estimate CTAs reviewed in this gate are now `<Link href="/get-estimate">`, including the delayed **PromoModal.jsx** CTA. The contact drawer remains available only for general contact navigation, not primary estimate conversion.

---

## Full openContact / useContact Inventory

| File | Usage Type | CTA Text | Classification | Action Required |
|---|---|---|---|---|
| Header.jsx:81 | Drawer control (isContactOpen, closeContact, toggleContact) | N/A — drawer panel mgmt | ALLOWED — not a CTA | None |
| Header.jsx:126 | `<Link href="/get-estimate">` | "Get A Free Estimate" | FIXED — routes correctly | None |
| StickyMobileCTA.jsx | `<Link href="/get-estimate">` | "Quote" | FIXED — routes correctly | None |
| ServicesHeader.jsx | `<Link href="/get-estimate">` | "Get a Free Estimate" | FIXED — routes correctly | None |
| HowItWorksTriple.jsx | `<Link href="/get-estimate">` | "Get Free Estimate Now" | FIXED — routes correctly | None |
| ServiceProcessHorizontal.jsx | `<Link href="/get-estimate">` | "Get Free Estimate" | FIXED — routes correctly | None |
| HeroCTA.jsx | `<Link href="/get-estimate">` | "Request Free Estimate" | FIXED — routes correctly | None |
| **PromoModal.jsx** | `<Link href="/get-estimate">` | **"Get Free Estimate"** | **FIXED — routes correctly** | None |
| ContactForm.jsx:11 | `closeContact` — closes drawer after submit | N/A | ALLOWED — functional | None |
| Footer.jsx:106 | `<button onClick={openContact}>` | "Contact Us" | ALLOWED — general nav | None |
| SimpleCTA.jsx:21 | `<button onClick={openContact}>` | CTA fallback | DEAD CODE — no active callers pass `link="/contact"` | None |

---

## PromoModal CTA — Fixed Details

**File:** `src/components/PromoModal.jsx`  
**Trigger:** Fires 10 seconds after any page load. Shows once per browser session (sessionStorage dedup).  
**Previous CTA path:** `handleGetEstimate()` → `setIsOpen(false)` + `openContact()` → contact modal opened  
**Current CTA path:** `<Link href="/get-estimate" onClick={() => setIsOpen(false)}>`  
**Impact:** Users who see the promo modal and click "Get Free Estimate" now enter the same `/get-estimate` server-confirmed conversion path as the other primary estimate CTAs.

**Fix applied locally:**
```jsx
import Link from 'next/link';

<Link href="/get-estimate" onClick={() => setIsOpen(false)} className={styles.estimateBtn}>
  Get Free Estimate
</Link>
```

```text
Local change completed: PromoModal CTA now routes to /get-estimate instead of openContact
Reason: Promo modal "Get Free Estimate" click previously bypassed server-confirmed GA4 conversion chain
Expected impact: Promo modal conversions can now register through the same server-confirmed path
Risk level: LOW — purely a routing change, modal still closes on click
Rollback plan: Revert PromoModal.jsx to prior useContact/openContact button behavior if needed
Approval required: NO for local fix; YES for production deploy
```

---

## Measurement Gate Status

| Gate | Status | Blocking condition |
|---|---|---|
| Primary CTAs (6/6) | GREEN | None — all fixed |
| PromoModal CTA | GREEN | None — fixed locally |
| CQ-01–CQ-10 evidence | YELLOW | No real call data entered in worksheet yet |
| Ads Scaling Gate | RED/BLOCKED | Depends on Measurement Gate turning GREEN |
