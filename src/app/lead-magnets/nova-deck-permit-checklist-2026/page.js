import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/lead-magnets/nova-deck-permit-checklist-2026',
  title: '2026 NoVA Deck Permit Checklist — Printable Guide',
  description: 'Free printable 2026 Northern Virginia deck permit checklist covering Loudoun, Fairfax, Prince William, and Arlington counties. HOA review, site plan, footings, framing, final inspection.',
  image: '/social/nova-deck-permit-checklist-social.png',
  noIndex: true,
});

// Print-friendly lead-magnet page. Kept noindex so it doesn't compete with
// the indexable permit guides at /deck-permit-loudoun-county-virginia etc.
// Users open this page, hit Cmd-P → "Save as PDF" and get a printable
// reference. A pre-rendered PDF copy lives at
// /downloads/nova-deck-permit-checklist-2026.pdf for one-click download.

const Item = ({ children }) => (
  <li style={{ marginBottom: 8 }}><label style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><input type="checkbox" style={{ marginTop: 4 }} aria-label="checklist item" /><span>{children}</span></label></li>
);

const H2 = ({ children }) => (
  <h2 style={{ borderBottom: '2px solid #d14817', paddingBottom: 4, marginTop: 28, marginBottom: 12, fontSize: 18, color: '#222' }}>{children}</h2>
);

export default function NovaPermitChecklist2026() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 24px', color: '#222', fontSize: 14, lineHeight: 1.5 }}>
      <header style={{ borderBottom: '3px solid #d14817', paddingBottom: 16, marginBottom: 16 }}>
        <p style={{ margin: 0, color: '#666', fontSize: 12, letterSpacing: 1, textTransform: 'uppercase' }}>Loudoun Decks · ldndecks.com · (571) 655-7207</p>
        <h1 style={{ margin: '8px 0 4px', fontSize: 28, color: '#111' }}>2026 NoVA Deck Permit Checklist</h1>
        <p style={{ margin: 0, color: '#444' }}>Loudoun · Fairfax · Prince William · Arlington counties</p>
      </header>

      <section style={{ marginBottom: 16, padding: '12px 16px', background: '#fff7f1', border: '1px solid #f3d3bd', borderRadius: 8, display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ margin: 0, fontSize: 13, color: '#7a3210' }}><strong>Want to keep this offline?</strong> Download the printable PDF version.</p>
        <a href="/downloads/nova-deck-permit-checklist-2026.pdf" download style={{ background: '#d14817', color: '#fff', padding: '8px 14px', borderRadius: 6, textDecoration: 'none', fontWeight: 600, fontSize: 13 }}>↓ Download PDF</a>
      </section>

      <section>
        <p>This checklist walks you through every step required to legally build a deck in Northern Virginia in 2026 — from HOA architectural review through the final county inspection. Every box you can&apos;t check is a potential delay. Bring this with you to your design consultation and we&apos;ll help you close the gaps before contract.</p>
      </section>

      <H2>Stage 1 — Pre-design (before signing anything)</H2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Item>Confirmed HOA jurisdiction and pulled their architectural review packet (Brambleton, Broadlands, Ashburn Village, Belmont, One Loudoun, Stone Ridge, Lansdowne, Sully Station, Virginia Run, etc.)</Item>
        <Item>Located property survey or plat map (county GIS portal usually has it)</Item>
        <Item>Identified rear setback distance (typically 25 ft Loudoun, 20–25 ft Fairfax — verify your zoning)</Item>
        <Item>Identified easements (utility, drainage, conservation) — never build over them</Item>
        <Item>Confirmed septic field location (if applicable) — decks over leach fields are usually prohibited</Item>
        <Item>Photographed existing yard, drainage patterns, attachment area on the house</Item>
        <Item>Decided rough deck size, elevation, and material tier (PT pine vs Trex vs TimberTech)</Item>
      </ul>

      <H2>Stage 2 — Contractor verification</H2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Item>Verified Virginia Class A Contractor License (required for any project over $10,000 — search at <a href="https://dpor.virginia.gov">dpor.virginia.gov</a>)</Item>
        <Item>Confirmed contractor carries general liability insurance ($1M minimum recommended)</Item>
        <Item>Confirmed contractor carries workers comp coverage</Item>
        <Item>Read at least 10 recent Google reviews and one BBB profile</Item>
        <Item>Got 2 written estimates (NOT phone quotes) — itemized line items, not lump sums</Item>
        <Item>Confirmed contractor pulls the permit (NOT &quot;owner pulls&quot; — owner-pull voids warranty and shifts liability)</Item>
      </ul>

      <H2>Stage 3 — Site plan + permit application</H2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Item>Site plan drawn to scale showing property boundaries, house footprint, proposed deck footprint, setbacks, easements</Item>
        <Item>Framing plan (joist size, spacing, beam size, post locations, footing locations)</Item>
        <Item>Elevation drawing (deck height above grade, railing height, stair geometry)</Item>
        <Item>Ledger board attachment detail (flashing, lag bolts, spacing, manufacturer specs)</Item>
        <Item>Footing schedule (diameter, depth — typically 36&quot; below grade in NoVA for frost protection)</Item>
        <Item>Material specifications (lumber grade, composite brand/line, fastener type)</Item>
        <Item>Submitted application via the county portal:
          <ul style={{ margin: '6px 0 0 0', paddingLeft: 18, color: '#555', fontSize: 13 }}>
            <li>Loudoun: LandMARC portal (2–4 weeks plan review)</li>
            <li>Fairfax: PLUS portal (3–5 weeks plan review)</li>
            <li>Prince William: ePortal (2–4 weeks plan review)</li>
            <li>Arlington: APS portal (2–3 weeks plan review)</li>
          </ul>
        </Item>
        <Item>Paid permit fee ($150–$500 depending on county and deck size)</Item>
      </ul>

      <H2>Stage 4 — HOA architectural review (parallel with permit)</H2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Item>Completed HOA application form (varies by community)</Item>
        <Item>Submitted site plan + elevation + material specs to ARB / DRC</Item>
        <Item>Submitted color samples or photos for railing, fascia, and decking material</Item>
        <Item>Paid HOA review fee (usually $25–$100)</Item>
        <Item>Confirmed approval timeline (Brambleton 14–21 days, Broadlands 14–21, Ashburn Village 18–21, Lansdowne 18–25, Virginia Run 21–35 in-person committee)</Item>
        <Item>Received written ARB / DRC approval letter — DO NOT START WORK WITHOUT IT</Item>
      </ul>

      <H2>Stage 5 — Construction inspections (during build)</H2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Item>Footing inspection scheduled BEFORE concrete is poured (inspector verifies hole depth, diameter, rebar)</Item>
        <Item>Framing inspection scheduled BEFORE decking is laid (inspector verifies ledger flashing, joist spacing, beam attachment, post hardware, blocking)</Item>
        <Item>Stair framing complete with code-compliant rise/run (Virginia residential stair geometry uses max 8.25&quot; rise and min 9&quot; tread depth)</Item>
        <Item>Railing height verified (minimum 36&quot; for residential decks 30&quot;+ above grade; baluster spacing &lt; 4&quot;)</Item>
      </ul>

      <H2>Stage 6 — Final inspection + closeout</H2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <Item>Final inspection passed (inspector signs off on completed deck)</Item>
        <Item>Permit closed in county system (verify online — many homeowners assume this is automatic, it isn&apos;t)</Item>
        <Item>HOA notified of completion (some communities require photos of completed work)</Item>
        <Item>Contractor provided written warranty (most NoVA contractors offer 1–5 yr workmanship + manufacturer warranty on materials)</Item>
        <Item>Final lien waivers signed by contractor + subs</Item>
        <Item>Permit close-out letter saved with home records (matters at resale)</Item>
      </ul>

      <H2>Common reasons projects get delayed</H2>
      <ul style={{ paddingLeft: 18 }}>
        <li><strong>Owner pulls permit to save $150:</strong> voids warranty, shifts liability, and triggers re-inspection if work doesn&apos;t match the plan.</li>
        <li><strong>HOA review starts AFTER permit approval:</strong> serial workflow adds 3–6 weeks. Always submit HOA + county simultaneously.</li>
        <li><strong>Ledger flashing not shown on plans:</strong> instant red flag at framing inspection — reviewers know this is the #1 source of catastrophic deck failure.</li>
        <li><strong>Footing depth too shallow:</strong> 36&quot; below grade is the NoVA frost-line minimum; 24&quot; concrete cylinders fail every time.</li>
        <li><strong>Setback violation:</strong> pulled survey at the last minute, deck encroaches on the rear setback — tear-out and rebuild.</li>
      </ul>

      <H2>What Loudoun Decks does differently</H2>
      <p>We file the county permit and the HOA architectural package in parallel from contract day. We&apos;ve handled the review process in every major NoVA HOA — packets typically clear first-round review because we maintain current submission templates per community. We also coordinate all three inspections (footing, framing, final) so you never have to be the inspection scheduler.</p>
      <p>Call us at <CallLink>(571) 655-7207</CallLink> or visit <a href="https://ldndecks.com/get-estimate">ldndecks.com/get-estimate</a> for a free 3D design consultation. Bring this checklist with you and we&apos;ll work through every line item together.</p>

      <footer style={{ marginTop: 32, paddingTop: 16, borderTop: '1px solid #ccc', fontSize: 11, color: '#666' }}>
        <p style={{ margin: '4px 0' }}>© 2026 Loudoun Decks · 14140 Parke Long Ct, Suite K, Chantilly, VA 20151 · Virginia Class A Contractor</p>
        <p style={{ margin: '4px 0' }}>This checklist is general guidance. Verify your specific county and HOA requirements before contracting.</p>
        <p style={{ margin: '4px 0' }}>Download a copy: <a href="https://ldndecks.com/downloads/nova-deck-permit-checklist-2026.pdf">ldndecks.com/downloads/nova-deck-permit-checklist-2026.pdf</a></p>
      </footer>
    </main>
  );
}
