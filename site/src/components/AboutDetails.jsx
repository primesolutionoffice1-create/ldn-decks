import React from 'react';
import Link from 'next/link';
import styles from './AboutDetails.module.css';

export default function AboutDetails() {
  return (
    <section className={styles.detailsSection}>
      <div className={styles.container}>
         
         <div className={styles.grid}>
           {/* Left Block */}
           <div className={styles.block}>
             <h2 className={styles.heading}>What We Do</h2>
             <p>Loudoun Decks designs and builds outdoor living spaces for residential properties. Our services include:</p>
             <ul className={styles.checkList}>
               <li>Custom deck construction</li>
               <li>Deck resurfacing</li>
               <li>Patios</li>
               <li>Porches</li>
               <li>Pergolas and gazebos</li>
             </ul>
             <p>Each project is planned around the homeowner’s goals, available space, and intended use of the outdoor area. You can <Link href="/houzz-deck-projects" style={{ color: 'var(--site-color)', fontWeight: 600 }}>view our Houzz profile</Link> to see examples of our work across Northern Virginia.</p>
           </div>
  
           {/* Right Block */}
           <div className={styles.block}>
             <h2 className={styles.heading}>Serving Northern Virginia</h2>
             <p>Loudoun Decks works exclusively in Northern Virginia, serving Loudoun County, Fairfax County, and Prince William County.</p>
             <p>We regularly work in communities such as Ashburn, Leesburg, Sterling, Centreville, Reston, Woodbridge, and Manassas. Our website includes location‑specific pages to help homeowners find relevant information for their area.</p>
           </div>
         </div>

         {/* Full width bottom block */}
         <div className={styles.bottomBlock}>
           <h2 className={styles.heading}>Why Homeowners Choose Loudoun Decks</h2>
           <p className={styles.subtitle}>Homeowners contact us because they are looking for:</p>
           
           <div className={styles.chooseGrid}>
              <div className={styles.chooseCard}>
                 <h4>Local Focused</h4>
                 <p>A trusted, local company entirely dedicated and focused exclusively on outdoor living.</p>
              </div>
              <div className={styles.chooseCard}>
                 <h4>Transparent Setup</h4>
                 <p>Clear, direct, and transparent information before breaking ground on any project.</p>
              </div>
              <div className={styles.chooseCard}>
                 <h4>Custom Fitted</h4>
                 <p>Outdoor spaces explicitly designed to fit their home architecture and family lifestyle.</p>
              </div>
              <div className={styles.chooseCard}>
                 <h4>No Obligation</h4>
                 <p>A straightforward, pressure-free estimate process that removes the initial friction.</p>
              </div>
           </div>

           <div className={styles.missionCard}>
             <p>Our core goal is to help homeowners make informed decisions about their outdoor living projects.</p>
           </div>
         </div>

      </div>
    </section>
  );
}
