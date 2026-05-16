import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/deck-builder-centreville-va',
  title: 'Deck Builder in Centreville, VA | Trex | Loudoun Decks',
  description: 'Loudoun Decks is headquartered in Centreville, VA. 5.0★ Google (41+ reviews). Custom Trex & composite decks, porches, patios. Visit our showroom. (571) 655-7207.',
});

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Where is Loudoun Decks located?", acceptedAnswer: { "@type": "Answer", text: "Our office and showroom are at 13704 Winding Oak Cir, Centreville, VA 20121. We're headquartered in Centreville and serve all of Northern Virginia Loudoun, Fairfax, Prince William, Arlington, and Stafford counties." } },
    { "@type": "Question", name: "How much does a deck cost in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Centreville deck projects typically range from $20,000-$55,000. Composite decks average $35-$65/sqft installed. Centreville's mix of townhomes and single-family homes means project sizes range from 200 sqft to 600+ sqft." } },
    { "@type": "Question", name: "Do I need a permit in Centreville?", acceptedAnswer: { "@type": "Answer", text: "Centreville is in Fairfax County. Standard building permits required for all decks attached to the house or over 30 inches above grade. Plan review: 3-6 weeks. We handle everything." } },
  ],
};

export default function CentrevilleDeckBuilderPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img33.jpeg"
              alt="Premium custom deck built by LDN Decks in Centreville, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              priority
            />
          </div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville Expanding Your Outdoor Potential</h2>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Loudoun Decks is headquartered right here in Centreville. Visit our showroom for material samples.</p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Call (571) 655-7207</CallLink>
            <Link href="/contact" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 2rem', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>Visit Our Showroom</Link>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#aaa' }}>★★★★★ 5.0 on Google · 41 reviews · 13704 Winding Oak Cir, Centreville, VA 20121</p>
        </div>
      </section>
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Your Local Centreville Deck Builder</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We don&apos;t just serve Centreville we live and work here. Our office and material showroom are at <strong>13704 Winding Oak Cir, Centreville, VA 20121</strong>. When you work with Loudoun Decks, your project manager is minutes away, not across the metro area.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>We&apos;ve built throughout Centreville&apos;s diverse neighborhoods from Virginia Run and Sully Station to Centre Ridge and Centreville Farms. We know the Fairfax County permitting process, the local HOA requirements, and the specific lot conditions that affect deck construction in Centreville.</p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Visit Our Showroom</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Loudoun Decks Showroom</p>
            <p style={{ marginBottom: '0.25rem' }}>13704 Winding Oak Cir, Centreville, VA 20121</p>
            <p style={{ marginBottom: '0.25rem' }}>Phone: <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>(571) 655-7207</CallLink></p>
            <p style={{ marginBottom: '0.5rem' }}>Hours: Mon–Sat 8:00 AM – 6:00 PM (by appointment recommended)</p>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>See and touch samples of Trex Transcend, Trex Enhance, TimberTech AZEK, railing systems, lighting options, and color swatches. Compare materials side by side before deciding.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services in Centreville</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { title: 'Custom Composite Decks', range: '$20k–$55k', link: '/services/new-decks' },
              { title: 'Deck Resurfacing', range: '$15k–$30k+', link: '/services/deck-resurfacing' },
              { title: 'Screened Porches', range: '$25k–$65k', link: '/services/porches' },
              { title: 'Pergolas & Gazebos', range: '$10k–$30k', link: '/services/gazebo-pergola' },
              { title: 'Outdoor Kitchens', range: '$15k–$80k', link: '/outdoor-kitchen-builder-northern-virginia' },
              { title: 'Fencing', range: '$5k–$15k', link: '/services/fence' },
              { title: 'Patios', range: '$8k–$25k', link: '/services/patios' },
              { title: 'Deck Staining', range: '$600–$2k', link: '/deck-staining-northern-virginia' },
            ].map((item) => (
              <Link key={item.title} href={item.link} style={{ display: 'block', background: '#f9f9f9', borderRadius: 8, padding: '1rem', textDecoration: 'none', color: 'inherit' }}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 600 }}>{item.range}</p>
              </Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Centreville Neighborhoods We&apos;ve Built In</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {['Virginia Run', 'Sully Station', 'Centre Ridge', 'Centreville Farms', 'London Towne', 'Bull Run', 'Cub Run', 'Rocky Run', 'Compton Village', 'Newgate', 'Fair Lakes', 'Clifton'].map((n) => (
              <span key={n} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.85rem', color: '#555' }}>{n}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Centreville Project</h2>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.5rem', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>$44,000 420 sqft Deck + 180 sqft Screened Porch, Virginia Run</h3>
            <p style={{ lineHeight: 1.7 }}>Combined project: open Trex Transcend deck (Spiced Rum) for grilling connected to screened porch with EZE-Breeze windows and beadboard ceiling. Trex Signature railings, 10 LED stair lights. Fairfax County permit + Virginia Run HOA approved in one submission. 4.5-week build.</p>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>FAQ</h2>
          {[
            { q: "Where is Loudoun Decks located?", a: "13704 Winding Oak Cir, Centreville, VA 20121. Office + material showroom. Open Mon-Sat 8AM-6PM by appointment." },
            { q: "How much does a deck cost in Centreville?", a: "$20,000-$55,000 for most projects. Composite: $35-$65/sqft installed." },
            { q: "Do I need a permit?", a: "Yes Centreville is Fairfax County. Building permits required. Plan review: 3-6 weeks. We handle everything." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Also Serving Nearby</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {[
              ['/deck-builder-chantilly-va', 'Chantilly'],
              ['/deck-builder-fairfax-va', 'Fairfax'],
              ['/deck-builder-vienna-va', 'Vienna'],
              ['/deck-builder-oakton-va', 'Oakton'],
              ['/deck-builder-manassas-va', 'Manassas'],
              ['/deck-builder-gainesville-va', 'Gainesville'],
              ['/deck-builder-south-riding-va', 'South Riding'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>{text}</Link>
            ))}
          </div>
        </div>
      </article>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Centreville" /></div></section>
      <SimpleCTA title="Visit Our Centreville Showroom" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-centreville-va" />
      <ContactHome />
    </>
  );
}
