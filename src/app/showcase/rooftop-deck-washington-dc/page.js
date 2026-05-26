import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactHome from '@/components/ContactHome';
import styles from '../[slug]/ProjectPage.module.css';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export async function generateMetadata() {
  return buildMetadata({
    path: '/showcase/rooftop-deck-washington-dc',
    title: 'Rooftop Deck Construction Washington DC | Custom Outdoor Living',
    description: 'Premier rooftop deck builder in Washington DC. See our latest custom rooftop construction featuring premium materials, structural engineering, and stunning city views.',
    image: '/showcase/img07.jpeg',
  });
}

export default function RooftopDCPage() {
  return (
    <main className={styles.projectMain}>
      <WebPageSchema url="https://ldndecks.com/showcase/rooftop-deck-washington-dc" name="Rooftop Deck Construction Washington DC | Custom Outdoor Living" description="Premier rooftop deck builder in Washington DC. See our latest custom rooftop construction featuring premium materials, structural engineering, and stunning city views." speakable />
      <section className={styles.hero}>
        <div className={styles.container}>
          <Link href="/showcase" className={styles.backLink}>← Back to Showcase</Link>
          <h1 className={styles.title}>ROOFTOP DECK CONSTRUCTION</h1>
          <p className={styles.location}>Washington, DC</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.imageGrid}>
            <div className={styles.mainImage}>
              <Image 
                src="/showcase/img07.jpeg" 
                alt="Rooftop Deck Washington DC" 
                width={1200} 
                height={800} 
                className={styles.img}
                priority
              />
            </div>
            <div className={styles.sidebar}>
              <div className={styles.detailsBox}>
                <h3>Project Details</h3>
                <ul>
                  <li><strong>Location:</strong> Washington, DC</li>
                  <li><strong>Date:</strong> March 2025</li>
                  <li><strong>Type:</strong> Rooftop Outdoor Living</li>
                  <li><strong>Status:</strong> Completed</li>
                </ul>
                <Link href="/contact" className={styles.ctaButton}>Get a Rooftop Deck Quote</Link>
              </div>
            </div>
          </div>

          <div className={styles.description}>
            <h2>Luxury Rooftop Living in the District</h2>
            <p>
              This custom rooftop deck project in Washington, DC showcases the intersection of structural engineering and high-end outdoor design. 
              Building in DC requires navigating unique urban constraints, including strict weight-bearing protocols and specialized fire-rated materials.
            </p>
            <p>
              Loudoun Decks handled the entire process, from engineering schematics to final installation. The result is a stunning, private oasis 
              that provides a perfect retreat from the city below, featuring durable composite materials that withstand the intense exposure of a rooftop environment.
            </p>
            <h3>Our DC Deck Services</h3>
            <p>
              Whether you are looking for a rooftop deck, a private balcony reconstruction, or a custom urban patio, our team brings Northern Virginia's 
              highest standard of craftsmanship to Washington DC homeowners. We specialize in Trex, TimberTech, and premium hardwood solutions 
              tailored for urban architecture.
            </p>
          </div>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />


      <ContactHome />
    </main>
  );
}
