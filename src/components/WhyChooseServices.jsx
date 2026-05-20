import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseServices.module.css';

export default function WhyChooseServices() {
  return (
    <section className={styles.servicesSection}>
       <div className={styles.container}>
          <div className={styles.grid}>
             <div className={styles.textContent}>
                <h2>Outdoor Living Services We Provide</h2>
                <p className={styles.servicesText}>We specialize in residential outdoor living projects, including:</p>
                <ul className={styles.servicesList}>
                   <li>Custom deck construction</li>
                   <li>Deck resurfacing</li>
                   <li>Patios</li>
                   <li>Porches</li>
                   <li>Pergolas and gazebos</li>
                </ul>
                <p className={styles.footerText}>Each project is planned around the homeowner’s space and how the outdoor area will be used.</p>
             </div>
             
             <div className={styles.imageContent}>
                <div className={styles.imageWrapper}>
                   <Image src="/images/img31.jpeg" alt="Outdoor Living Services" fill className={styles.img} sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}