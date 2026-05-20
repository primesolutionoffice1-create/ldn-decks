import React from 'react';
import styles from './ProjectProcess.module.css';

const CheckIcon = () => (
   <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#FFF"/>
   </svg>
);

export default function ProjectProcess() {
  return (
    <section className={styles.processSection}>
       <div className={styles.container}>
          <h2 className={styles.title}>A Straightforward Project Process</h2>
          <p className={styles.subtitle}>Homeowners choose Loudoun Decks because we keep the process clear and easy to understand.</p>
          <div className={styles.approachDivider}>OUR APPROACH INCLUDES:</div>
          
          <div className={styles.grid}>
             <div className={styles.stepCard}>
                <div className={styles.iconCircle}>
                   <CheckIcon />
                </div>
                <h3>Free consultation</h3>
                <p>Free consultation to discuss ideas and review the space</p>
             </div>
             
             <div className={styles.stepCard}>
                <div className={styles.iconCircle}>
                   <CheckIcon />
                </div>
                <h3>On-site visit</h3>
                <p>On-site visit to measure and plan the project</p>
             </div>
             
             <div className={styles.stepCard}>
                <div className={styles.iconCircle}>
                   <CheckIcon />
                </div>
                <h3>Clear next steps</h3>
                <p>Clear next steps before construction begins</p>
             </div>
          </div>
       </div>
    </section>
  );
}
