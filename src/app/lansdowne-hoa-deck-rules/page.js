import React from 'react';
import Image from 'next/image';
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
  path: '/lansdowne-hoa-deck-rules',
  title: 'Lansdowne HOA Deck Rules & Approval Guide | Loudoun Decks',
  description: 'Building or replacing a deck in Lansdowne, Leesburg? Architectural review process for Lansdowne Conservancy + Lansdowne Woods, 18-25 day timeline, material standards, and how it pairs with the Loudoun County building permit.',
  image: '/social/lansdowne-hoa-deck-rules-social.png',
});

const PATH = '/lansdowne-hoa-deck-rules';

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "@id": `https://ldndecks.com${PATH}#faq`,
  url: `https://ldndecks.com${PATH}`,
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval to build a deck in Lansdowne?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every deck, porch, pergola, or exterior structure in Lansdowne (both the Lansdowne Conservancy and Lansdowne Woods sub-communities) requires approval through the Lansdowne architectural review process before construction begins. This is separate from the Loudoun County building permit, and both run in parallel from the day you sign a contract." } },
    { "@type": "Question", name: "How long does Lansdowne architectural review take?", acceptedAnswer: { "@type": "Answer", text: "Lansdowne's review averages 18-25 days when the submission packet is complete on first submission. Incomplete packets — missing material samples, missing color specs, missing structural drawings — restart the clock. We prepare the packet around the current requirements for the relevant Lansdowne sub-community before it is submitted." } },
    { "@type": "Question", name: "What's the difference between Lansdowne Conservancy and Lansdowne Woods?", acceptedAnswer: { "@type": "Answer", text: "Lansdowne is a master-planned golf community split into multiple sub-communities. The Conservancy is the original estate-tier section with the most detailed architectural review (typically requires physical material samples submitted in person). Lansdowne Woods is a 55+ active-adult sub-community with its own slightly streamlined review process. Each sub-community has its own ARC and submission requirements — we file separately based on your specific section." } },
    { "@type": "Question", name: "What materials are approved in Lansdowne?", acceptedAnswer: { "@type": "Answer", text: "Lansdowne's architectural standards favor warm-tone composites and traditional balustrade railings consistent with the community's golf-course estate character. Trex Transcend Spiced Rum, Havana Gold, Tiki Torch, and Vintage Lantern are reliably approved. TimberTech AZEK Vintage Mahogany and PRO Legacy in similar warm tones also clear review. Aluminum-traditional railings are preferred over cable rail in most Lansdowne sections (cable is sometimes approved on specific lots backing to common-area woods). Color specs must match the manufacturer's actual sample card — printed renderings without the physical sample slow review." } },
    { "@type": "Question", name: "How much does a Lansdowne deck typically cost?", acceptedAnswer: { "@type": "Answer", text: "Lansdowne deck projects routinely land in the premium tier: $45,000-$95,000 for a typical 400-600 sqft composite deck with screened porch or multi-level. Estate-tier Lansdowne Conservancy projects with integrated outdoor kitchens, fire features, and pergolas reach $75,000-$150,000. Pricing reflects the larger lot sizes, the multi-level designs that suit the rolling terrain, and the premium material expectations." } },
    { "@type": "Question", name: "Can Loudoun Decks handle the Lansdowne approval paperwork?", acceptedAnswer: { "@type": "Answer", text: "Yes. We prepare the full architectural review packet with physical material samples and color specs, file the Loudoun County building permit in parallel, and coordinate inspection sequencing through the project lifecycle. Call 571-655-7207." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function LansdowneHoaDeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema dateModified="2026-06-04" url={`https://ldndecks.com${PATH}`} name="Lansdowne HOA Deck Rules &amp; Approval Guide" description="Building or replacing a deck in Lansdowne, Leesburg? Architectural review process for the Conservancy and Lansdowne Woods, 18-25 day timeline, material standards, county permit coordination." speakable />
      <ArticleSchema
        title="Lansdowne HOA Deck Rules and Approval Guide"
        description="Lansdowne HOA deck approval, Loudoun County permit coordination, material samples, structural review points, and local deck builder support."
        path={PATH}
        image="/images/img17.jpeg"
        datePublished="2026-05-27"
        dateModified="2026-06-04"
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img17.jpeg" alt="Premium composite deck in the Lansdowne community, Leesburg, Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Lansdowne HOA Deck Rules &amp; Approval Guide</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Architectural review + Loudoun County permit for Lansdowne Conservancy and Lansdowne Woods &mdash; Leesburg, VA</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Building or Replacing a Deck in Lansdowne</h2>
          <p style={S.p}>Lansdowne is one of Loudoun County&apos;s largest and most established master-planned communities, organized into multiple sub-communities anchored by the Lansdowne Golf Club. The original Lansdowne Conservancy estates were built starting in the late 1990s; Lansdowne Woods (a 55+ active-adult community) and the newer expansion sections followed in the 2000s and 2010s. Many of these homes are now reaching the 15-20 year mark where the original pressure-treated builder deck is at end of design life — making Lansdowne one of our busiest markets for deck replacement and full-tear-down rebuilds.</p>
          <p style={S.p}>Whether you&apos;re replacing an existing deck or building a new outdoor-living space from scratch, the Lansdowne approval path follows the same two-track structure: community architectural review + Loudoun County building permit. Both run in parallel from contract day. See our <Link href="/deck-builder-leesburg-va" style={{ color: 'var(--color-primary)' }}>Leesburg deck builder page</Link> for broader context on the area.</p>

          <h2 style={S.h2}>How Lansdowne Architectural Review Works</h2>
          <p style={S.p}>Lansdowne&apos;s ARC reviews each project against community-specific architectural standards. A deck submission considers:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Decking material brand + line (Trex Transcend, TimberTech AZEK, etc.) + color name/code</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Railing style (Lansdowne favors aluminum-traditional and composite balustrade over cable in most sections)</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Deck size, height, and footprint relative to the home&apos;s existing footprint</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Setback verification against the community-specific minimums</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Stairs and how they integrate with existing landscape + irrigation</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Physical material samples (Conservancy requirement — color renderings alone slow review)</li>
          </ul>
          <p style={S.p}>Average review time on a complete packet: <strong>18-25 days</strong>. Lansdowne Woods (55+ section) typically clears faster (14-21 days) given its slightly streamlined process. The best way to reduce revision risk is a packet that includes the right sub-community form, manufacturer color cards, structural drawings, and county-ready details before the ARC clock starts.</p>

          <h2 style={S.h2}>Two Approvals You Need</h2>
          <p style={S.p}>A Lansdowne deck project requires <strong>two separate approvals running in parallel</strong>. The <strong>HOA architectural review</strong> controls appearance — material, color, style. The <strong>Loudoun County building permit</strong> controls structure and safety — footings, framing, ledger flashing, railings, stairs. We file both packages from the day you sign so the two approvals converge instead of stacking serially. Full county-side process: <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)' }}>Loudoun County deck permit guide</Link>.</p>
          <p style={S.p}>For elevated Lansdowne decks, the HOA packet should match the county structure packet: ledger attachment, flashing, stair geometry, footing layout, and load path all need to be clear. Review the <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)' }}>ledger board flashing guide</Link>, <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)' }}>Virginia deck stair code guide</Link>, and <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)' }}>deck stair construction diagram</Link> before finalizing the ARC scope.</p>

          <h2 style={S.h2}>Materials Approved in Lansdowne</h2>
          <p style={S.p}>Lansdowne&apos;s aesthetic standards favor warm-tone composites and traditional railing systems consistent with the community&apos;s golf-course estate character. Common approved selections:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Trex Transcend:</strong> Spiced Rum, Havana Gold, Tiki Torch, Vintage Lantern</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>TimberTech AZEK Vintage:</strong> Mahogany, Cypress, Coastline (the last sometimes restricted to lots not facing the golf course)</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>TimberTech PRO Legacy:</strong> Pecan, Mocha</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Railings:</strong> aluminum-traditional in black or bronze; composite balustrade in tones matching the deck</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Cable rail:</strong> sometimes approved on specific lots backing to common-area woods — submit with photo documentation of the lot context</li>
          </ul>

          <h2 style={S.h2}>Typical Lansdowne Deck Projects + Pricing</h2>
          <p style={S.p}>Lansdowne&apos;s larger lots and estate-tier home values support some of our most ambitious Loudoun County builds:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Standard composite deck</strong> (400-500 sqft): $42,000-$58,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Multi-level deck</strong> (500-700 sqft): $58,000-$85,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck + screened porch combo</strong>: $65,000-$95,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Estate-tier full outdoor-living package</strong> (deck + outdoor kitchen + pergola + fire feature): $95,000-$150,000+</li>
          </ul>

          <h2 style={S.h2}>How Loudoun Decks Handles Lansdowne Approvals</h2>
          <p style={S.p}>We prepare the full Lansdowne ARC packet with physical material samples and color cards, file the Loudoun County permit in parallel from contract day, manage every revision request, and coordinate footing + framing + final inspections. The homeowner never logs into LandMARC or makes an in-person ARC trip. See more on our <Link href="/deck-builder-leesburg-va" style={{ color: 'var(--color-primary)' }}>Leesburg deck builder page</Link> and <Link href="/near-you/loudoun-county" style={{ color: 'var(--color-primary)' }}>Loudoun County overview</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ — Lansdowne HOA deck approval</h2>
          {faqSchema.mainEntity.map((q, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{q.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>→ <Link href="/deck-builder-leesburg-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Leesburg deck builder</Link></li>
            <li>→ <Link href="/loudoun-county-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County HOA deck rules</Link></li>
            <li>→ <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link></li>
            <li>→ <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Ledger board flashing guide</Link></li>
            <li>→ <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck stair construction diagram</Link></li>
            <li>→ <Link href="/multi-level-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Multi-level deck builder NoVA</Link></li>
            <li>→ <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite deck cost guide</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Lansdowne deck project? We handle every approval." buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Lansdowne (Leesburg) and Loudoun County" lastUpdated="2026-06-04" />
      <RelatedGuides currentPath="/lansdowne-hoa-deck-rules" />
      <ContactHome />
    </>
  );
}
