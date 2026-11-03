import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';

const PATH = "/deck-builder-sterling-va";
const PAGE_URL = "https://ldndecks.com/deck-builder-sterling-va";
const PAGE_TITLE = "Deck Builder in Sterling, VA | Loudoun Decks";
const PAGE_DESCRIPTION = "Sterling deck builder for deck replacement, composite resurfacing, and screened porches, with Loudoun County permits and HOA planning.";

export const metadata = buildMetadata({
  path: PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: "/social/deck-builder-sterling-va-social.png",
});

const faqs = [
  {
    "q": "Who builds decks in Sterling, VA?",
    "a": "Loudoun Decks LLC is a Centreville-based residential deck contractor and a Virginia Class A contractor (DPOR license #2705191673), owned by Nicolae (Nick) Zugrav. Sterling is named under Loudoun County on the areas page."
  },
  {
    "q": "What should a deck project in Sterling plan for?",
    "a": "Many builder-grade wood decks in Sterling are now old enough to need structural review. Sugarland Run, Countryside, Cascades, Lowes Island, and Potomac Falls each need HOA-specific material, railing, and color planning. Sterling Park, Algonkian, Great Falls Chase, and Rivermere are part of the same planning picture. A resurfacing recommendation follows a frame inspection. Ledger, joist, post, and footing issues can shift the project to full replacement. Cascades has its own deck builder page."
  },
  {
    "q": "What deck services does Loudoun Decks offer in Sterling?",
    "a": "These are services named on the Loudoun Decks site, not a separate menu invented for Sterling. The work includes new custom decks, deck replacement, deck repair, and deck resurfacing when the existing frame is structurally sound. The homepage lists Trex, TimberTech, Fiberon, AZEK, and Wolf as composite and PVC options and labels the company a Trex Partner. Screened porches, open porches, and front porches are included, along with pergolas and gazebos. Patios, fencing, railings, under-deck patios, and fire pits are included when that scope is part of the project. Homeowners should verify current Trex profile details directly with Trex."
  },
  {
    "q": "How are permits and HOA packages handled for Sterling?",
    "a": "Loudoun Decks identifies permit triggers and structural-drawing needs, and prepares the county building permit and the HOA architectural review package so the two can run concurrently. What the written scope includes is confirmed in that scope. The permit note used here is the one published on the Loudoun Decks homepage. Decks over 256 sqft, attached to a house, or more than 16.5″ above grade require a permit. The same table lists Loudoun County plan review at 2–4 weeks through the LOLA online portal. Loudoun Decks handles every submission, so the homeowner does not log into the county portal."
  },
  {
    "q": "Which documented project does this Sterling page cite?",
    "a": "The documented project cited here is the December 2024 deck and balcony resurfacing gallery record in Sterling. The gallery page says resurfacing is appropriate only when the existing frame, ledger, footings, stairs, and rails are safe to reuse. The record is a gallery record, and formal case-study claims are not confirmed there."
  },
  {
    "q": "How do I contact Loudoun Decks about a Sterling deck?",
    "a": "Sterling is listed by name under Loudoun County on the areas page. Loudoun Decks serves Loudoun, Fairfax, and Prince William Counties, plus Arlington and Stafford. The office is in Centreville. Loudoun Decks LLC, 13704 Winding Oak Cir, Centreville, VA 20121. Phone (571) 655-7207. Email office@ldndecks.com. Free consultations and estimates are available for homeowners in the service area. The contact page says the team calls back within 1 business day."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function SterlingDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <LocalBusinessSchema city="Sterling" url={PAGE_URL} description={PAGE_DESCRIPTION} />
      <WebPageSchema
        dateModified="2026-11-03"
        url={PAGE_URL}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        speakable
      />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck builder in Sterling, VA</h1>
          <p data-speakable="true" style={{ color: '#ccc', fontSize: '1.1rem' }}>{PAGE_DESCRIPTION}</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Get Free Estimate</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>Virginia Class A contractor, DPOR license #2705191673. Office: 13704 Winding Oak Cir, Centreville, VA 20121.</p>
        </div>
      </section>
      <CityLeadFormSection
        city="Sterling"
        county="Loudoun County"
        service="deck replacement, composite deck, or screened porch"
      />
      <GeoAnswerBlock
        question="Who builds decks in Sterling, VA?"
        answer={faqs[0].a}
        facts={[faqs[1].a]}
        links={[
          { href: '/get-estimate', label: "Request a Sterling estimate" },
          { href: "/showcase/deck-resurfacing-sterling", label: "DECK/BALCONY RESURFACING" },
        ]}
      />
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img33.jpeg"
              alt="Deck photo on the Loudoun Decks Sterling, VA page"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Planning a deck in Sterling</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[0].a}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>{faqs[1].a}</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Services in Sterling</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[2].a}</p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
              <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"New custom decks"}</Link></li>
              <li key="/services/deck-replacement" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck replacement"}</Link></li>
              <li key="/services/deck-repair" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck repair"}</Link></li>
              <li key="/services/deck-resurfacing" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck resurfacing"}</Link></li>
              <li key="/services/porches" style={{ marginBottom: '0.5rem' }}><Link href="/services/porches" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Screened, open, and front porches"}</Link></li>
              <li key="/services/gazebo-pergola" style={{ marginBottom: '0.5rem' }}><Link href="/services/gazebo-pergola" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Pergolas and gazebos"}</Link></li>
              <li key="/services" style={{ marginBottom: '0.5rem' }}><Link href="/services" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Patios, fencing, railings, and outdoor living"}</Link></li>
              <li key="/areas-we-serve" style={{ marginBottom: '0.5rem' }}><Link href="/areas-we-serve" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Areas we serve"}</Link></li>
              <li key="/about/certifications-and-licenses" style={{ marginBottom: '0.5rem' }}><Link href="/about/certifications-and-licenses" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Licenses and Trex Partner note"}</Link></li>
              <li key="/contact" style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Contact"}</Link></li>
              <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Request an estimate"}</Link></li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2rem 0 1rem' }}>Permits and HOA paperwork</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"Loudoun Decks identifies permit triggers and structural-drawing needs, and prepares the county building permit and the HOA architectural review package so the two can run concurrently. What the written scope includes is confirmed in that scope."}</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"The permit note used here is the one published on the Loudoun Decks homepage. Decks over 256 sqft, attached to a house, or more than 16.5″ above grade require a permit. The same table lists Loudoun County plan review at 2–4 weeks through the LOLA online portal. Loudoun Decks handles every submission, so the homeowner does not log into the county portal."}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Homepage permit table</Link>
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>A documented project</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{faqs[4].a}</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            <Link href="/showcase/deck-resurfacing-sterling" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"DECK/BALCONY RESURFACING"}</Link>
          </p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Service area</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>{"Sterling is listed by name under Loudoun County on the areas page. Loudoun Decks serves Loudoun, Fairfax, and Prince William Counties, plus Arlington and Stafford. The office is in Centreville."}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            <Link key="/deck-builder-ashburn-va" href="/deck-builder-ashburn-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Ashburn</Link>
            <Link key="/deck-builder-herndon-va" href="/deck-builder-herndon-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Herndon</Link>
            <Link key="/deck-builder-cascades-va" href="/deck-builder-cascades-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Cascades</Link>
            <Link key="/deck-builder-reston-va" href="/deck-builder-reston-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Reston</Link>
            <Link key="/deck-builder-broadlands-va" href="/deck-builder-broadlands-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Broadlands</Link>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>Contact</h2>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>{"Loudoun Decks LLC, 13704 Winding Oak Cir, Centreville, VA 20121. Phone (571) 655-7207. Email office@ldndecks.com. Free consultations and estimates are available for homeowners in the service area. The contact page says the team calls back within 1 business day."}</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>FAQ</h2>
          {faqs.map((faq) => (
            <details key={faq.q} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Related pages</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
              <li key="/deck-builder-cascades-va" style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-cascades-va" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Cascades deck builder"}</Link></li>
              <li key="/showcase/deck-resurfacing-sterling" style={{ marginBottom: '0.5rem' }}><Link href="/showcase/deck-resurfacing-sterling" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Sterling resurfacing gallery"}</Link></li>
              <li key="/deck-permit-loudoun-county-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Loudoun County deck permit guide"}</Link></li>
              <li key="/near-you/loudoun-county" style={{ marginBottom: '0.5rem' }}><Link href="/near-you/loudoun-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Loudoun County deck builder hub"}</Link></li>
              <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"New custom decks"}</Link></li>
              <li key="/services/deck-replacement" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-replacement" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck replacement"}</Link></li>
              <li key="/services/deck-repair" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-repair" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck repair"}</Link></li>
              <li key="/services/deck-resurfacing" style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Deck resurfacing"}</Link></li>
              <li key="/services/porches" style={{ marginBottom: '0.5rem' }}><Link href="/services/porches" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Screened, open, and front porches"}</Link></li>
              <li key="/services/gazebo-pergola" style={{ marginBottom: '0.5rem' }}><Link href="/services/gazebo-pergola" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Pergolas and gazebos"}</Link></li>
              <li key="/services" style={{ marginBottom: '0.5rem' }}><Link href="/services" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Patios, fencing, railings, and outdoor living"}</Link></li>
              <li key="/areas-we-serve" style={{ marginBottom: '0.5rem' }}><Link href="/areas-we-serve" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Areas we serve"}</Link></li>
              <li key="/about/certifications-and-licenses" style={{ marginBottom: '0.5rem' }}><Link href="/about/certifications-and-licenses" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Licenses and Trex Partner note"}</Link></li>
              <li key="/contact" style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Contact"}</Link></li>
              <li key="/get-estimate" style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{"Request an estimate"}</Link></li>
          </ul>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Sterling" />
        </div>
      </section>
      <SimpleCTA title="Request a Sterling deck estimate" buttonText="Get Free Estimate" link="/get-estimate" />
      <NamedAuthor context="Sterling, VA" lastUpdated="2026-11-03" />
      <ContactHome
        pageContext={{
          city: "Sterling",
          county: "Loudoun County",
          service: "Sterling deck replacement, composite deck, or screened porch",
          pageType: 'local_city_landing_page',
        }}
      />
    </>
  );
}
