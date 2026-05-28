import React from 'react';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import styles from './TrexPerformance.module.css';

export async function generateMetadata() {
  return buildMetadata({
    path: '/trex-performance-products',
    title: 'Trex Performance Outdoor Living Products | Loudoun Decks',
    description: 'Explore the full range of Trex performance-engineered outdoor living products. From high-durability composite decking to elegant railing systems, discover the Trex difference with Loudoun Decks.',
  });
}

export default function TrexPerformancePage() {
  return (
    <main className={styles.main}>
      <WebPageSchema url="https://ldndecks.com/trex-performance-products" name="Trex Performance Outdoor Living Products | Loudoun Decks" description="Explore the full range of Trex performance-engineered outdoor living products. From high-durability composite decking to elegant railing systems, discover the Trex difference with Loudoun Decks." speakable />
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1>Trex Performance-Engineered™ <br /><span>Outdoor Living Products</span></h1>
          <p className={styles.subtitle}>
            Explore the industry-leading technology behind the world’s #1 decking brand. 
            Loudoun Decks is a proud Trex partner, delivering engineering excellence to your backyard.
          </p>
        </div>
      </section>

      <section className={styles.iframeSection}>
        <div className={styles.container}>
          <div className={styles.iframeWrapper}>
            <iframe 
              id="dealer-frame" 
              src="https://dealer.trex.com/?utm_id=001RN00000MDR90YAH&max_width=1200" 
              className={styles.iframe}
              title="Trex Performance Products"
            ></iframe>
          </div>
        </div>
      </section>

      <div className={styles.ctaBanner}>
        <div className={styles.container}>
          <h2>Ready to Build with the Best?</h2>
          <p>Get a free estimate for your Trex composite deck today.</p>
          <a href="/contact" className={styles.ctaButton}>Get My Free Quote</a>
        </div>
      </div>

      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />


      <RelatedGuides currentPath="/trex-performance-products" />


      <ContactHome />
    </main>
  );
}
