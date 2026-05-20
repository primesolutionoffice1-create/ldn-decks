# Phase 10 — Conversion Rate Optimization

You drive premium leads on a luxury-tier brand. Generic CRO doesn't apply: you don't optimize for "more leads" — you optimize for **higher-quality leads from owners who trust the brand enough to skip the bidding war**.

---

## Core CRO principles for luxury home improvement

1. **Trust before pricing.** Don't lead with $/sq ft; lead with TrexPro Platinum, Class A, 5.0★, and visible NAP.
2. **Reduce decision friction, not contact friction.** Give them tools to decide before requesting contact (calculators, comparisons, photos), then make the contact step low-friction.
3. **One primary CTA per page.** "Get a Free Estimate" everywhere. Phone CTA is secondary.
4. **Premium feel = white space, real photos, named projects.** No stock images. No clip-art badges.
5. **Match the funnel stage**: TOFU pages convert to email/calculator interaction; BOFU pages convert to phone/form.

---

## CTA hierarchy (apply globally)

| Tier | CTA | Where | Visual treatment |
|---|---|---|---|
| Primary | "Get My Free Estimate" → `/get-estimate` | Hero, mid-page, end | Brand-accent button, prominent |
| Secondary | tel link `(571) 655-7207` | Always next to primary | Underlined or button-secondary |
| Tertiary | "Use the Cost Calculator" → `/deck-cost-calculator` | Mid-page after pricing/cost discussions | Outline button |
| Mobile sticky | Persistent "Call" + "Get Quote" bar | Bottom of viewport on mobile | Always visible, brand-color background |

Currently you have multiple CTAs per page (good); standardize the hierarchy so the primary always reads "Get My Free Estimate" — the word **My** raises ownership feelings and beats "Get a Free Estimate" by 5–15% in tested home-improvement contexts.

---

## Form optimization (the `/get-estimate` form)

**Current form fields likely include:** Name, Email, Phone, Address, Service interest, Project description.

### The 5-field rule

Cap visible fields at 5 on the first step. Defer longer fields to a second step (optional, post-submission).

### Recommended `/get-estimate` form

**Step 1 (visible, required to send):**
1. Full name
2. Email
3. Phone (with click-to-call fallback)
4. ZIP code (auto-routes to county)
5. Project type (dropdown: Custom Deck / Composite Deck / Screened Porch / Pergola / Patio / Repair / Other)

**Step 2 (optional, post-submission thank-you):**
- Approximate sq ft
- Material preference
- Timeline urgency
- Budget range
- Best time to call
- Photos of existing space (drag-drop upload)

The split lets you capture leads even when they only fill in 5 fields. Then progressively profile via the thank-you page form.

### Field design specifics

- **No required asterisks on email AND phone**. Make ONE required (recommend phone for higher contact rate); the other optional. Most homeowners give both anyway.
- **Auto-format phone** as they type: `(571) 655-7207`
- **Inline validation** with green checkmarks; never red text until they submit
- **Submit button text**: "Get My Free Estimate" (matches the global CTA)
- **Trust line below button**: "We respond within 4 business hours · No obligation"
- **Privacy reassurance**: "We never share your info. Used only to schedule your consultation."

### Form analytics (already wired)

Per [tracking review](../seo-blueprint/), `trackFormSubmit()` fires `form_submit` → GA4 generate_lead. Verify Enhanced Conversions are enabled in GA4 (not just Google Ads). Click IDs are captured pre-GTM via `clickIds.js` ✓.

---

## Sticky mobile CTA bar

Mobile users land on city/service pages with intent to call. Currently you have `tel:` links sprinkled. Add a **fixed bottom bar** on mobile only:

```jsx
// src/components/MobileStickyCTA.jsx
'use client';
export default function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 bg-brand text-white p-3 flex gap-2 z-50 shadow-2xl">
      <a href="tel:+15716557207" className="flex-1 text-center py-3 rounded-md bg-white/10 font-semibold">
        ☎ Call
      </a>
      <a href="/get-estimate" className="flex-1 text-center py-3 rounded-md bg-accent font-semibold">
        Get Quote
      </a>
    </div>
  );
}
```

Mount in `app/layout.js`. Skip on `/get-estimate`, `/contact`, `/thank-you`.

---

## Trust modules (placement)

You have multiple trust signals scattered. Consolidate into 4 reusable modules:

### Module 1: Hero trust strip

Below the H1 + CTA, single line:

```
TrexPro Platinum  ·  Class A Virginia  ·  5.0★ from 41+ Reviews  ·  BBB A+
```

Make each segment a tooltip/link to the proof.

### Module 2: Mid-page trust block (3-up)

Three cards with icons:
1. 🏅 **Top-Tier Trex** — "TrexPro Platinum certified, fewer than 2% qualify."
2. 📋 **Permit-Handled** — "Class A Virginia license; we submit every permit."
3. ⭐ **Loved Locally** — "5.0★ Google rating from 41+ NoVA homeowners."

Place after the H2 "Why Northern Virginia Homeowners Choose Loudoun Decks" on every commercial page.

### Module 3: Visual badge row

Logo strip with 5–6 badges (TrexPro Platinum, Class A, BBB A+, NADRA member, NARI member, Houzz Pro). Below the trust block. Each links to the respective directory profile.

### Module 4: Review excerpt block

3 named-customer quotes (first name, city, project). Use real reviews. Place above end-of-page CTA.

```
"They handled the Brambleton ARC submission, the Loudoun permit, and built our
600 sq ft Trex deck in 4 weeks. Final walkthrough was meticulous — they fixed
two cosmetic issues I'd missed. Worth every penny."
— Sarah M., Brambleton (Trex Transcend Spiced Rum, 2025)
```

---

## Photo and gallery strategy

### Hero photos

- **Real projects, real homes.** No stock decks. No drone-overhead shots that look generic.
- **Match the architectural style** to your target market: shoot on craftsman, transitional, and colonial homes since those dominate NoVA.
- **Sunlight angle**: shoot at golden hour (early morning or late afternoon) for warmer feel.
- **Show people**: 30% of hero shots include the homeowner family using the deck. Adds authenticity.

### Project gallery

You have `/showcase`. Make it filterable by:
- City (drop-down)
- Material (Trex Transcend, TimberTech, AZEK, Cedar, IPE)
- Size (S < 300, M 300–600, L > 600)
- Style (Modern, Craftsman, Transitional, Colonial)

Each project page (`/showcase/[slug]`) gets:
- 8–12 high-res photos
- 1 before/after pair
- Project sheet: city, material, sq ft, build duration, HOA, total cost range
- VideoObject schema if video walkthrough exists
- Customer testimonial (first name, city)

### Before/after specifically

Before/after slider (use a small JS lib like `react-compare-slider`) on `/before-and-after`. This is the single most-engaging content type in home improvement.

---

## Heatmap + scroll-depth tracking (set up)

Recommend Microsoft Clarity (free, GDPR-compliant) over Hotjar:

```html
<!-- Add via GTM custom tag -->
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
</script>
```

What to watch:
- **Scroll depth** on city pages (do users reach the FAQ?)
- **Rage clicks** on cost calculator (broken inputs, slow response)
- **Form abandonment** (which field do they stop at?)
- **CTA click distribution** (hero vs mid vs end — where do conversions originate?)

Review Clarity once weekly for the first month, then biweekly.

---

## Conversion path: 5 user journeys to optimize

### Journey 1: TOFU blog reader → estimate request

```
/blog/composite-deck-cost-loudoun-county-2026
  → reads cost guide
  → clicks "Use the Cost Calculator" (mid-page)
  → /deck-cost-calculator
  → enters params, sees estimated cost
  → clicks "Get a Real Quote" (post-result CTA)
  → /get-estimate
  → submits form
  → /thank-you
  → optional second-step form
```

**Optimization:** ensure the cost calculator's post-result CTA is the dominant element after they see the number. Tested as 30%+ conversion lift in similar funnels.

### Journey 2: City-page direct → call

```
/deck-builder-ashburn-va
  → reads above-fold + trust strip
  → taps phone CTA (mobile)
  → call connects to (571) 655-7207
```

**Optimization:** Make the phone CTA prominent in hero on mobile. `trackPhoneClick()` already fires.

### Journey 3: Comparison page → service page → estimate

```
/trex-vs-timbertech-vs-azek
  → reads comparison
  → clicks "We're TrexPro Platinum, here's our composite deck service" (linked anchor in body)
  → /composite-decks
  → reads service page
  → clicks "Get My Composite Deck Estimate" (hero or end)
  → /get-estimate
  → submits
```

**Optimization:** ensure every comparison page has a strong "now what?" CTA pointing to the relevant service page (not just the homepage).

### Journey 4: Permit/HOA page → service page → estimate

```
/loudoun-county-hoa-deck-rules
  → reads regulatory content
  → clicks "We handle ARC submission as part of every build" (linked anchor)
  → /services/new-decks
  → reads
  → clicks "Get My Free Estimate"
```

**Optimization:** The HOA/permit pages over-index on people in **active research mode**. They convert at 2–3× the rate of TOFU blog readers. Make the "we handle this for you" CTA prominent — it's the value prop they want.

### Journey 5: Showcase project page → estimate

```
/showcase/[city-project-name]
  → views project gallery
  → reads project sheet
  → reads customer testimonial
  → clicks "Get a Quote for a Similar Project" (project-page-specific CTA)
  → /get-estimate?project={project_id}
```

**Optimization:** Personalize the form ("I'd like a quote similar to the [Project Name] you built in [City]"). High-intent, high-conversion.

---

## Heatmap-driven A/B test ideas

Once Clarity is collecting data:

1. **Headline test on homepage**: "Northern Virginia's TrexPro Platinum Deck Builder" vs current. Measure: estimate-form submissions.
2. **Form field count**: 5 fields vs 7 fields on `/get-estimate`. Measure: submission rate vs lead quality (manual review).
3. **Trust-strip placement**: above CTA vs below CTA. Measure: scroll depth + click-through to gallery.
4. **CTA copy**: "Get My Free Estimate" vs "Schedule My Free Consultation" vs "Get a 24-Hour Quote". Measure: click rate.
5. **Pricing transparency**: show price ranges on service pages vs hide them. Measure: estimate request rate (this is luxury — counter-intuitive results possible).
6. **Photo quantity** on city pages: 4 photos vs 8 photos vs photo carousel. Measure: time on page + scroll depth.

Run each test for 3–4 weeks minimum to hit statistical significance.

---

## The financing widget (the highest-ROI new feature)

[Phase 3 §C2](03-ARCHITECTURE.md) calls for a `/deck-payment-estimator`. Implementation:

1. **Pick a financing partner**: Hearth (most popular for contractors), GreenSky, Service Finance, FTL Finance, or Synchrony. Application + approval typically 1–2 weeks.

2. **Get the partner's payment-estimator widget** (most provide a JS embed) OR build your own with their published rates.

3. **Place on:**
   - `/deck-financing-northern-virginia` (primary)
   - `/deck-cost-calculator` (after the estimate result, "see monthly payments")
   - `/composite-decks` (after the cost section)
   - All service pages (small widget mid-page after cost)

4. **Form for the estimator:**
   - Loan amount (auto-fill from cost calculator if available)
   - Term (default 84 months)
   - Outputs: monthly payment, total interest, AP

5. **CTA after estimator:** "Apply Now (Pre-Approval in Minutes)" linking to partner's apply URL with your partner ID.

This single feature beats every NoVA competitor on financing transparency — the gap identified in [02-COMPETITOR-INTEL.md](02-COMPETITOR-INTEL.md).

---

## Trust by stage of funnel

| Stage | What they want to see |
|---|---|
| TOFU (blog, cost guides) | Author bio + Person schema (you have NamedAuthor) |
| MOFU (service pages, comparisons) | TrexPro Platinum + Class A + 5.0★ + warranty + financing |
| BOFU (city pages, get-estimate) | Local proof: HOA approvals, named projects in their city, named customer quotes |
| Post-conversion (thank-you) | "What happens next" timeline + trust reinforcement + optional second-step form |

The thank-you page (`/thank-you`) currently has 67 visible words and `og:image` pointing at home hero. Upgrade:

```
H1: Thanks — your estimate request is in.

Body:
  • You'll hear from us within 4 business hours.
  • We'll schedule a free in-home consultation at your convenience.
  • At the consultation, we'll bring material samples and produce a 3D rendering and fixed quote within 5 business days.

[Optional second-step form: Tell us more about your project]
  - Approximate sq ft
  - Material preference
  - Timeline urgency

While you wait:
  → See recent NoVA deck projects (/showcase)
  → Read our HOA approval guide for [their city/county] (links to /loudoun-county-hoa-deck-rules etc.)
  → Use the deck cost calculator (/deck-cost-calculator)
```

`trackLeadConfirmed()` already fires here ✓ — keep that.

---

## Speed to lead

90% of leads convert to paying customers in the first 5 minutes after submission, vs 1% after 30 minutes (Harvard Business Review study). Your standard:

- **Auto-acknowledge email** sent within 30 seconds (already done if SendGrid/Postmark wired in `src/server/sendEmail.js`)
- **SMS auto-reply** within 2 minutes ("Thanks — Nick or someone from the team will call you within 4 business hours")
- **First call attempt** within 4 business hours, all 7 days
- **Personalized email** within 12 hours if call didn't connect, with consultation booking link

---

## What NOT to do

- **No exit-intent popups.** Looks desperate; not on-brand for luxury.
- **No countdown timers** on quote requests. Same reason.
- **No fake "we have only 2 spots left this month".** Trust killer.
- **No live chat** unless you can staff it 7AM–7PM. Empty chat is worse than no chat.
- **No "as seen on" badges** unless you've actually been featured. Easy fact-check kills trust.
- **No spam triggers** in subject lines (FREE, ACT NOW, GUARANTEED — all in caps).

---

## Phase-1 CRO checklist (week 1)

- [ ] Standardize primary CTA copy to "Get My Free Estimate" everywhere
- [ ] Add mobile sticky CTA bar
- [ ] Fix form field count to 5 on `/get-estimate`
- [ ] Add Microsoft Clarity via GTM
- [ ] Replace `/thank-you` page with the upgraded version
- [ ] Pick financing partner; apply
- [ ] Audit existing trust modules; consolidate to the 4 modules above

Move to [Roadmaps](11-30-DAY-ROADMAP.md).
