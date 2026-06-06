import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import HowItWorksTriple from '@/components/HowItWorksTriple';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import ServiceVisual from '@/components/ServiceVisual';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import Image from 'next/image';
import Link from 'next/link';
import styles from './NearYouPage.module.css';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

export const metadata = buildMetadata({
  path: '/near-you',
  title: 'Deck Builder Near Me | Northern Virginia (5 Counties)',
  description: 'Find a trusted deck builder near you in Northern Virginia. Loudoun Decks serves Loudoun, Fairfax, Prince William, Arlington & Stafford counties — custom decks, patios & porches.',
  image: '/social/deck-builder-near-you-social.png',
});

const chooseItems = [
  {
    title: "Trusted Local Experience",
    desc: "Hundreds of projects completed across Northern Virginia with over 10 years of experience. We handle permits for every project when required."
  },
  {
    title: "Quality Materials & Craftsmanship",
    desc: "We use premium materials and follow county building standards to ensure every structure is built to last."
  },
  {
    title: "Clear Communication",
    desc: "From initial design to final completion, we keep you updated every step of the way to ensure your vision is realized."
  }
];

export default function NearYouPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/near-you" name="Deck Builder Near Me | Northern Virginia (5 Counties)" description="Find a trusted deck builder near you in Northern Virginia. Loudoun Decks serves Loudoun, Fairfax, Prince William, Arlington &amp; Stafford counties — custom decks, patios &amp; porches." speakable />
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder Near You"
        description="Looking for a Professional Deck Builder Near You in Northern Virginia? Loudoun Decks is a trusted local company serving homeowners across Loudoun, Fairfax, Prince William, Arlington, and Stafford counties."
      />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introWrapper}>
            <div className={styles.introContent}>
              <h2>Custom Outdoor Living in Your Neighborhood</h2>
              <p>
                Loudoun Decks designs and builds custom decks, patios, porches, and outdoor spaces that enhance the beauty and value of your home. 
                Whether you’re planning a new deck, upgrading to composite, or improving your outdoor living area, our licensed team delivers quality craftsmanship and reliable service from start to finish.
              </p>
              <div className={styles.ctaWrapper}>
                <Link href="/get-estimate" className={styles.primaryBtn}>Request Estimate</Link>
              </div>
            </div>
            <div className={styles.introImage}>
              <Image 
                src="/images/img01.jpeg" 
                alt="Beautiful custom deck in Northern Virginia" 
                width={600} 
                height={500} 
                className={styles.roundImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.countiesSection}>
        <div className={styles.container}>
          <div className={styles.countiesContent}>
            <h2 className={styles.sectionTitle}>Counties We Serve</h2>
            <p className={styles.sectionDesc}>
              We proudly work throughout Northern Virginia, including Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County.
              If you live within these counties, our team can assist with deck builds, resurfacing, patios, pergolas, porches, and outdoor renovations.
            </p>
          </div>
        </div>
      </section>

      <ServiceVisual image="/images/img11.jpeg" />

      <ServiceAreasGrid />

      <section className={styles.countiesSection}>
        <div className={styles.container}>
          <div className={styles.countiesContent}>
            <h2 className={styles.sectionTitle}>Local Planning Shortcuts</h2>
            <p className={styles.sectionDesc}>
              Before choosing a local deck builder, compare cost, proof, credentials, permits, and project fit.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
              {[
                ['/deck-cost-calculator', 'Deck Cost Calculator'],
                ['/deck-payment-estimator', 'Deck Payment Estimator'],
                ['/reviews', 'Customer Reviews'],
                ['/bbb-accredited-deck-builder-virginia', 'BBB Accredited Builder'],
                ['/before-and-after', 'Before & After Projects'],
                ['/get-estimate', 'Request Written Estimate'],
              ].map(([href, text]) => (
                <Link key={href} href={href} style={{ display: 'block', padding: '1rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, color: 'var(--color-primary)', fontWeight: 700, textDecoration: 'none' }}>
                  {text} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorksTriple />

      <WhyChooseDetails 
        title="Why Homeowners Choose Loudoun Decks"
        items={chooseItems}
      />

      <RelatedGuides currentPath="/near-you" />
      <ContactHome />
    </main>
  );
}
