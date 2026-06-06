import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-footing-code-northern-virginia',
  title: 'Deck Footing & Code Guide for Northern Virginia | LDN Decks',
  description: 'How deck footings and the Virginia Residential Code work in Northern Virginia — frost-depth footings, ledger attachment, joist spans, guardrails, and the inspections your deck must pass.',
  image: '/social/deck-footing-code-northern-virginia-social.png',
});

const faqs = [
  {
    q: 'How deep do deck footings need to be in Northern Virginia?',
    a: 'Deck footings in Northern Virginia are set below the frost line and onto firm, undisturbed soil — in practice that usually means digging in the range of about 24 to 36 inches deep. The exact depth and footing diameter are confirmed by your county inspector at the footing inspection, before any concrete is poured.',
  },
  {
    q: 'What building code applies to decks in Virginia?',
    a: 'Decks are governed by the Virginia Residential Code — the state-adopted version of the International Residential Code (IRC). Loudoun, Fairfax, and Prince William counties all enforce it. It covers footings, ledger attachment, beam and joist sizing, lateral-load connections, guardrails, and stairs.',
  },
  {
    q: 'Why can’t a deck ledger be attached to brick or siding?',
    a: 'A ledger board must transfer the deck’s load into the home’s structural framing — the rim (band) joist. Brick veneer and siding are cladding, not structure, and cannot carry that load. A ledger lagged only to veneer or siding is one of the most common causes of deck collapses, which is why code and inspectors require a structural connection with proper flashing.',
  },
  {
    q: 'Do composite decks need closer joist spacing?',
    a: 'Often, yes. Composite boards from Trex, TimberTech, and AZEK typically require joists at 16 inches on center for boards run straight, and 12 inches on center for diagonal (45-degree) installations or for stair treads. Always confirm the spacing against the specific board line’s installation instructions.',
  },
  {
    q: 'What inspections does a deck have to pass?',
    a: 'A permitted deck in Northern Virginia is typically inspected three times: a footing inspection (holes checked before concrete is poured), a framing inspection (ledger, beams, joists, and connectors checked before decking goes down), and a final inspection (guards, stairs, and the finished structure). The deck is not approved until the final inspection passes.',
  },
  {
    q: 'Do I need a permit just to repair or resurface a deck?',
    a: 'Cosmetic board or railing swaps on a sound structure often do not require a permit, but anything structural — new footings, beams, joists, a new ledger, or changing the deck’s size or height — does. When in doubt, your county building office (or we) can confirm before work starts.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const S = {
  h2: { fontSize: '2rem', fontWeight: 800, margin: '3rem 0 1.25rem', color: 'var(--color-dark)', borderLeft: '5px solid var(--color-primary)', paddingLeft: '1rem', lineHeight: 1.25 },
  h3: { fontSize: '1.3rem', fontWeight: 700, margin: '2rem 0 0.75rem' },
  p: { marginBottom: '1.1rem', lineHeight: 1.8, color: '#333', fontSize: '1.05rem' },
  list: { paddingLeft: '1.4rem', marginBottom: '1.75rem' },
  li: { marginBottom: '0.6rem', lineHeight: 1.7, color: '#333' },
  callout: { background: '#f0f7ff', borderLeft: '4px solid #0070f3', padding: '1.25rem 1.5rem', borderRadius: '0 8px 8px 0', margin: '1.75rem 0' },
  link: { color: 'var(--color-primary)', fontWeight: 600 },
};

export default function DeckFootingCodePage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-footing-code-northern-virginia" name="Deck Footing &amp; Code Guide for Northern Virginia | LDN Decks" description="How deck footings and the Virginia Residential Code work in Northern Virginia — frost-depth footings, ledger attachment, joist spans, guardrails, and the inspections your deck must pass." speakable />
      <ArticleSchema
        title="Deck Footing & Code Guide for Northern Virginia"
        description="How deck footings and the Virginia Residential Code work in Northern Virginia — frost-depth footings, ledger attachment, joist and beam spans, lateral-load connections, guardrails, stairs, and required inspections."
        path="/deck-footing-code-northern-virginia"
        datePublished="2026-05-21"
        dateModified="2026-05-21"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4.5rem 0 3.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Deck Planning Guide &middot; Northern Virginia
          </p>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            Deck Footing &amp; Code Guide for Northern Virginia
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.12rem', lineHeight: 1.6, margin: 0, maxWidth: 680 }}>
            What actually holds a deck up — and what the inspector checks. Footings, the ledger connection, spans, guardrails, and the three inspections every permitted deck passes.
          </p>
        </div>
      </section>

      {/* Quick answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Quick answer</p>
          <p style={{ margin: 0, lineHeight: 1.7 }}>
            A code-compliant deck in Northern Virginia stands on footings dug below the frost line (commonly around 24&ndash;36&quot; deep), a ledger bolted to the home&apos;s structural rim joist with proper flashing, correctly sized beams and joists, a lateral-load connection, and guardrails at least 36&quot; tall. It is verified by three inspections — footing, framing, and final. <CallLink style={S.link}>Call (571) 655-7207</CallLink> to talk through a build.
          </p>
        </div>
      </section>

      <article style={{ padding: '3.5rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <p style={S.p}>
            Most of what makes a deck safe is invisible once the boards go down. This guide explains the structure and the code behind a Northern Virginia deck in plain terms — so you understand what your builder is doing and what the county inspector is looking for. Decks here are governed by the <strong>Virginia Residential Code</strong>, the state-adopted version of the International Residential Code (IRC), and Loudoun, Fairfax, and Prince William counties all enforce it.
          </p>

          <h2 style={S.h2}>Footing depth and the Northern Virginia frost line</h2>
          <p style={S.p}>
            A footing carries the deck&apos;s weight into the ground. It has to do two things: bear on firm, undisturbed soil, and sit <strong>below the frost line</strong> so seasonal freeze-and-thaw can&apos;t lift it. When a footing is too shallow, frost heave pushes one post up over the winter and the deck racks, the boards gap, and the ledger strains.
          </p>
          <p style={S.p}>
            Northern Virginia&apos;s frost depth is modest compared with the upper Midwest, but it is real. In practice, deck footings here are commonly dug in the range of <strong>24 to 36 inches deep</strong>. Use the <Link href="/tools/deck-footing-depth-calculator-virginia" style={S.link}>Deck Footing Depth Calculator Virginia</Link> for early planning, then confirm the exact depth and diameter with the county inspector at the footing inspection before any concrete is poured.
          </p>

          <h2 style={S.h2}>Footing types: piers, form tubes, and helical piles</h2>
          <p style={S.p}>The right footing depends on the soil, the load, and access to the site:</p>
          <ul style={S.list}>
            <li style={S.li}><strong>Poured concrete piers</strong> — a hole dug to depth, often with a flared base form, filled with concrete and a post base set on top. The most common residential deck footing.</li>
            <li style={S.li}><strong>Flared-base form footings</strong> — a bell-shaped form increases the bearing area at the bottom, useful for heavier multi-level decks or softer soil.</li>
            <li style={S.li}><strong>Helical (screw) piles</strong> — steel piles driven to load-bearing capacity. Useful where digging is impractical, on steep or wet lots, or where a deep, reliable footing is needed without large excavations.</li>
          </ul>
          <div style={S.callout}>
            <p style={{ margin: 0, lineHeight: 1.7 }}>
              <strong>Soil matters.</strong> Some Northern Virginia lots have clay that holds water and shifts, and newer subdivisions can have fill soil that hasn&apos;t fully settled. A good builder accounts for this in the footing design rather than using one default everywhere.
            </p>
          </div>

          <h2 style={S.h2}>The ledger connection — the deck&apos;s number-one failure point</h2>
          <p style={S.p}>
            When an attached deck fails, the cause is most often the <strong>ledger</strong> — the board that fastens the deck to the house. The ledger must transfer load into the home&apos;s <strong>structural rim (band) joist</strong>. It cannot be attached to brick veneer or to siding alone — those are cladding, not structure, and a ledger lagged only to veneer is a genuine collapse risk.
          </p>
          <ul style={S.list}>
            <li style={S.li}>Fastened to the structural rim joist with through-bolts or approved structural lag screws — never standard nails or deck screws.</li>
            <li style={S.li}>Flashed so water drains out and away, not behind the ledger where it rots the band joist.</li>
            <li style={S.li}>Paired with a <strong>lateral-load connection</strong> — tension devices that tie the deck framing back into the house framing, which the IRC requires on attached decks.</li>
          </ul>
          <p style={S.p}>
            If a deck cannot get a sound ledger connection — for example, behind certain veneers — the safer answer is a <strong>freestanding deck</strong> on its own posts. That is a design decision worth making early.
          </p>

          <h2 style={S.h2}>Joists, beams, and spans</h2>
          <p style={S.p}>
            Joist and beam sizing is driven by <strong>span</strong> — how far the lumber reaches between supports — along with the wood species and the spacing. Larger joists span farther; closer spacing carries more load. Your builder works this from code span tables, but two practical points matter for homeowners:
          </p>
          <ul style={S.list}>
            <li style={S.li}><strong>Composite decking usually needs closer joists.</strong> Trex, TimberTech, and AZEK typically call for joists 16&quot; on center for straight boards and 12&quot; on center for diagonal layouts and stairs. A frame built for wood is not automatically ready for composite.</li>
            <li style={S.li}><strong>Cantilevers are limited.</strong> Joists and beams can only overhang their supports by a code-limited amount — a deck that &quot;floats&quot; too far past its beam is a red flag.</li>
          </ul>
          <p style={S.p}>
            Planning a composite deck? Our <Link href="/composite-decks" style={S.link}>composite decking overview</Link> and the <Link href="/trex-vs-timbertech-vs-azek" style={S.link}>Trex vs. TimberTech vs. AZEK comparison</Link> cover the material side of the decision.
          </p>

          <h2 style={S.h2}>Guardrails, stairs, and the 4-inch rule</h2>
          <p style={S.p}>
            The code rules most homeowners actually notice are about fall protection:
          </p>
          <ul style={S.list}>
            <li style={S.li}><strong>Guardrails</strong> are required on any deck surface more than 30 inches above grade, and must be at least <strong>36 inches tall</strong>.</li>
            <li style={S.li}><strong>The 4-inch sphere rule</strong> — balusters must be spaced so a 4-inch sphere cannot pass through, so a small child cannot slip between them.</li>
            <li style={S.li}><strong>Stairs</strong> have their own limits on riser height and tread depth, and guards/handrails are required on stair runs. The inspector confirms the exact dimensions of your run at the final inspection.</li>
            <li style={S.li}><strong>Guards must resist load</strong> — a code-compliant rail is engineered to take a concentrated load, not just look solid.</li>
          </ul>

          <h2 style={S.h2}>The three inspections your deck must pass</h2>
          <p style={S.p}>A permitted deck in Northern Virginia is typically inspected three times. Each one is a checkpoint that cannot be skipped:</p>
          <ul style={S.list}>
            <li style={S.li}><strong>1. Footing inspection</strong> — the holes are checked for depth, diameter, and soil <em>before</em> concrete is poured. Pour early and you may be digging it back out.</li>
            <li style={S.li}><strong>2. Framing inspection</strong> — the ledger, flashing, beams, joists, post connections, and lateral-load hardware are checked <em>before</em> the decking covers them up.</li>
            <li style={S.li}><strong>3. Final inspection</strong> — guards, stairs, and the finished structure are checked. The deck is not legally approved until this passes.</li>
          </ul>
          <p style={S.p}>
            When we build, scheduling and meeting these inspections is part of the job — see how the permit itself works in your county&apos;s guide: <Link href="/deck-permit-loudoun-county-virginia" style={S.link}>Loudoun</Link>, <Link href="/deck-permit-fairfax-county-virginia" style={S.link}>Fairfax</Link>, or <Link href="/deck-permit-prince-william-county-virginia" style={S.link}>Prince William</Link>.
          </p>

          <h2 style={S.h2}>Common code mistakes we see</h2>
          <ul style={S.list}>
            <li style={S.li}>Shallow footings that heave the first hard winter.</li>
            <li style={S.li}>A ledger lagged to siding or brick veneer with no structural connection.</li>
            <li style={S.li}>Missing or improper ledger flashing — the slow rot you don&apos;t see until the band joist fails.</li>
            <li style={S.li}>No lateral-load connection on an attached deck.</li>
            <li style={S.li}>A wood-spaced frame later topped with composite that needed closer joists.</li>
            <li style={S.li}>Guardrails under 36&quot; or balusters spaced wider than the 4-inch rule allows.</li>
            <li style={S.li}>Pouring footings before the footing inspection — and having to redo them.</li>
          </ul>

          <h2 style={S.h2}>How code and your county permit fit together</h2>
          <p style={S.p}>
            The Virginia Residential Code is the <em>standard</em>; the county <strong>permit</strong> is the process that confirms your specific deck meets it. The permit application includes drawings showing footings, framing, and dimensions; the inspections verify the build matches the approved plan. A deck built without a permit skips that verification — which is why unpermitted decks complicate home sales, insurance claims, and resale appraisals.
          </p>
          <p style={S.p}>
            We handle the drawings, the submission, and all three inspections as part of every build, so the code side is engineered in from the start. You can also see what a project costs in the <Link href="/composite-deck-cost-northern-virginia" style={S.link}>Northern Virginia deck cost guide</Link>, estimate a monthly payment with the <Link href="/deck-payment-estimator" style={S.link}>deck payment estimator</Link>, and time the build with our guide to the <Link href="/best-time-to-build-a-deck-northern-virginia" style={S.link}>best time to build a deck</Link>.
          </p>

          <h2 style={S.h2}>Deck Footing &amp; Code FAQs</h2>
          {faqs.map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 10, padding: '1.25rem', marginBottom: '0.75rem', background: '#fff' }}>
              <summary style={{ fontWeight: 700, cursor: 'pointer', fontSize: '1.02rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.75, color: '#444' }}>{faq.a}</p>
            </details>
          ))}

          {/* Trust + CTA */}
          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: 14, padding: '2.75rem 2rem', textAlign: 'center', marginTop: '3rem' }}>
            <h2 style={{ color: '#fff', fontSize: '1.7rem', fontWeight: 800, marginTop: 0, marginBottom: '0.75rem', border: 0, padding: 0 }}>
              Build it right the first time
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', maxWidth: 600, margin: '0 auto 1.75rem', lineHeight: 1.65, fontSize: '1.05rem' }}>
              We engineer footings, ledger connections, and framing to the Virginia Residential Code and handle every county inspection. Review photo examples in our <Link href="/before-and-after" style={{ color: '#fff', fontWeight: 600 }}>before &amp; after gallery</Link> and what homeowners say on our <Link href="/reviews" style={{ color: '#fff', fontWeight: 600 }}>reviews page</Link>.
            </p>
            <Link href="/get-estimate" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1rem 2.25rem', borderRadius: 10, fontWeight: 800, textDecoration: 'none', display: 'inline-block', fontSize: '1.05rem' }}>
              Get a Free Estimate
            </Link>
          </div>

        </div>
      </article>

      <SimpleCTA title="Ready for a Code-Compliant Deck?" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-footing-code-northern-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </>
  );
}
