import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/sully-station-hoa-deck-rules',
  title: 'Sully Station HOA Deck Rules & Approval Guide | Loudoun Decks',
  description: 'Building or replacing a deck in Sully Station, Centreville? Architectural review for the 1,000-residence master-planned community on 1,100+ acres. 21-28 day timeline, material standards, Fairfax County permit coordination.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval to build a deck in Sully Station?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every deck, screened porch, pergola, or exterior structure in Sully Station requires approval through the Sully Station II Community Association's architectural review process before construction begins. This is separate from the Fairfax County building permit, and both run in parallel from contract day for the fastest project timeline." } },
    { "@type": "Question", name: "How long does Sully Station ARC review take?", acceptedAnswer: { "@type": "Answer", text: "Sully Station's review averages 21-28 days when the submission packet is complete on first round. The Association's master-planned process is standardized but more detailed than newer Loudoun communities given Sully Station's 1,000-unit scale and award-winning landscape design priorities. We carry the current submission template." } },
    { "@type": "Question", name: "What's Sully Station's architectural character?", acceptedAnswer: { "@type": "Answer", text: "Sully Station is an award-winning master-planned community covering 1,100+ landscaped acres in western Fairfax County, comprised of approximately 1,000 residences including single-family homes and townhomes. Home prices typically range $550,000 to $850,000. Architectural standards favor traditional design — warm-tone composites, composite balustrade or aluminum-traditional railings, proportions matching the home's existing footprint. The community's emphasis on landscape integration means new decks need to read as part of the home + landscape, not a bolt-on addition." } },
    { "@type": "Question", name: "What materials are approved in Sully Station?", acceptedAnswer: { "@type": "Answer", text: "Trex Transcend Spiced Rum, Havana Gold, Tiki Torch, Vintage Lantern are the most-requested colors. TimberTech AZEK Vintage Mahogany and PRO Legacy in similar warm tones also clear review consistently. Composite balustrade railings in deck-matching tones or aluminum-traditional railings in black or bronze. Cable rail is sometimes approved on lots backing to common-area landscape buffers — submit with photo documentation of the lot context." } },
    { "@type": "Question", name: "How much does a Sully Station deck cost?", acceptedAnswer: { "@type": "Answer", text: "Standard composite deck (350-500 sqft): $32,000-$52,000. Multi-level deck (450-650 sqft): $42,000-$68,000. Deck + screened porch combo: $52,000-$88,000. Full outdoor-living package (deck + outdoor kitchen + pergola): $75,000-$125,000+. Sully Station's $550k-$850k home values support mid-to-premium material choices." } },
    { "@type": "Question", name: "Are townhome decks treated differently in Sully Station?", acceptedAnswer: { "@type": "Answer", text: "Sully Station's townhome sub-sections follow the same ARC process as the detached-home sections, but the design vocabulary is narrower (smaller footprints, more standardized railing styles). Townhome rear decks typically run 180-280 sqft and $22-38k. Approval often clears in 18-21 days given the more constrained design space. We've completed many Sully Station townhome rear-deck builds." } },
    { "@type": "Question", name: "Can Loudoun Decks handle the Sully Station ARC paperwork?", acceptedAnswer: { "@type": "Answer", text: "Yes. Sully Station is one of our highest-volume Centreville sub-markets — our HQ at 13704 Winding Oak Cir is approximately 15 minutes from most Sully Station addresses. We maintain the current submission template, prepare the full ARC packet with material samples + structural drawings + landscape integration plan, file the Fairfax County building permit in parallel from contract day, and coordinate every inspection. Call 571-655-7207." } },
  ],
};

const S = { h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }, p: { marginBottom: '1rem', lineHeight: 1.7 } };

export default function SullyStationHoaDeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <WebPageSchema url="https://ldndecks.com/sully-station-hoa-deck-rules" name="Sully Station HOA Deck Rules &amp; Approval Guide" description="Building or replacing a deck in Sully Station, Centreville? Architectural review for the 1,000-residence master-planned community on 1,100+ acres. 21-28 day timeline, material standards, Fairfax County permit coordination." speakable />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '380px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image src="/images/img17.jpeg" alt="Composite deck on a Sully Station home in Centreville, Virginia" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" quality={70} priority />
          </div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>Sully Station HOA Deck Rules &amp; Approval Guide</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Architectural review + Fairfax County permit for Sully Station &mdash; Centreville, VA</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Design Consultation</Link>
          </div>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={S.h2}>Building or Replacing a Deck in Sully Station</h2>
          <p style={S.p}>Sully Station is an award-winning master-planned community covering 1,100+ landscaped acres in western Fairfax County — approximately 1,000 residences split across single-family homes and townhomes, with multiple pools, trails, and community centers. Home prices typically range $550,000 to $850,000. Established in the late 1980s through 1990s, Sully Station&apos;s housing stock is now at the 25-35 year mark, which means the original pressure-treated builder decks are well past design life. Sully Station is one of our most active Centreville sub-markets for deck replacement, resurface, and full-tear-down composite rebuilds.</p>
          <p style={S.p}>Sully Station&apos;s approval path runs through the community ARC + the Fairfax County building permit. Our Centreville HQ at 13704 Winding Oak Cir is approximately 15 minutes from most Sully Station addresses — see our <Link href="/deck-builder-centreville-va" style={{ color: 'var(--color-primary)' }}>Centreville deck builder page</Link> for broader context on the HQ sub-markets.</p>

          <h2 style={S.h2}>How Sully Station Architectural Review Works</h2>
          <p style={S.p}>The Sully Station II Community Association ARC reviews every deck submission against community-specific architectural standards. The review considers:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Decking material brand + line + color (must match approved category)</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Railing style — composite balustrade or aluminum-traditional preferred</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Deck size, height, and footprint vs the home&apos;s existing footprint</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Setback verification against the lot&apos;s certified plat</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Landscape integration — Sully Station&apos;s award-winning landscape design philosophy means new decks need to read as part of the home + landscape</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}>Stairs, lighting, and how the deck reads from common-area sight lines</li>
          </ul>
          <p style={S.p}>Average review on a complete packet: <strong>21-28 days</strong>. Townhome sub-sections typically clear faster (18-21 days). Common revision triggers: missing material samples, missing color code, landscape integration not addressed in the submission. We carry the current Sully Station submission template and our packets clear first-round review.</p>

          <h2 style={S.h2}>Two Approvals You Need</h2>
          <p style={S.p}>A Sully Station deck project requires <strong>two separate approvals running in parallel</strong>. The <strong>HOA architectural review</strong> controls appearance + landscape integration. The <strong>Fairfax County building permit</strong> controls structure and safety — footings, framing, ledger, railings, stairs. We file both packages from the day you sign so the approvals converge instead of stacking serially. Full county process: <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)' }}>Fairfax County deck permit guide</Link>.</p>

          <h2 style={S.h2}>Sully Station&apos;s Approved Material Palette</h2>
          <p style={S.p}>Sully Station&apos;s traditional design vocabulary favors warm-tone composites and classic railing systems:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Trex Transcend:</strong> Spiced Rum, Havana Gold, Tiki Torch, Vintage Lantern</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Trex Enhance:</strong> Saddle, Toasted Sand, Foggy Wharf (budget-conscious tier)</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>TimberTech AZEK Vintage Mahogany</strong> + <strong>PRO Legacy Pecan/Mocha</strong></li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Railings:</strong> composite balustrade matching deck tone, or aluminum-traditional in black or bronze</li>
            <li style={{ marginBottom: '0.4rem', lineHeight: 1.7 }}><strong>Cable rail:</strong> sometimes approved on lots backing to common-area landscape buffers — submit with photo documentation</li>
          </ul>

          <h2 style={S.h2}>Typical Sully Station Deck Projects + Pricing</h2>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Townhome rear deck</strong> (180-280 sqft): $22,000-$38,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Standard composite deck</strong> (350-500 sqft): $32,000-$52,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Multi-level deck</strong> (450-650 sqft): $42,000-$68,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Deck + screened porch combo</strong>: $52,000-$88,000</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Full outdoor-living package</strong>: $75,000-$125,000+</li>
            <li style={{ marginBottom: '0.5rem', lineHeight: 1.7 }}><strong>Re-deck / resurface of original builder deck</strong> (if framing is sound): $18,000-$32,000</li>
          </ul>

          <h2 style={S.h2}>How Loudoun Decks Handles Sully Station Approvals</h2>
          <p style={S.p}>Sully Station is approximately 15 minutes from our Centreville HQ at 13704 Winding Oak Cir, which makes Sully Station one of our fastest-response sub-markets. We maintain the current Sully Station submission template, prepare the full ARC packet with material samples + structural drawings + landscape integration plan, file the Fairfax County permit in parallel from contract day, and coordinate every inspection (footing, framing, final). See more on our <Link href="/deck-builder-centreville-va" style={{ color: 'var(--color-primary)' }}>Centreville deck builder page</Link> and <Link href="/near-you/fairfax-county" style={{ color: 'var(--color-primary)' }}>Fairfax County overview</Link>.</p>

          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>FAQ — Sully Station HOA deck approval</h2>
          {faqSchema.mainEntity.map((q, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{q.name}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{q.acceptedAnswer.text}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 1.8 }}>
            <li>→ <Link href="/deck-builder-centreville-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Centreville deck builder (our HQ city)</Link></li>
            <li>→ <Link href="/virginia-run-hoa-deck-rules" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia Run HOA deck rules (Centreville premier)</Link></li>
            <li>→ <Link href="/deck-permit-fairfax-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Fairfax County permit guide</Link></li>
            <li>→ <Link href="/deck-resurfacing-vs-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck resurfacing vs replacement</Link></li>
            <li>→ <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Composite deck cost guide</Link></li>
          </ul>
        </div>
      </article>
      <SimpleCTA title="Sully Station deck project? Our HQ is 15 minutes away." buttonText="Get Free Estimate" link="/contact" />
      <NamedAuthor context="Sully Station (Centreville) and Fairfax County" lastUpdated="2026-05-27" />
      <ContactHome />
    </>
  );
}
