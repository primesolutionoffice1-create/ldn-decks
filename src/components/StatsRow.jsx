import React from 'react';
import styles from './StatsRow.module.css';

const statsData = [
  { value: 'DPOR', label: 'License verification' },
  { value: 'BBB', label: 'Public profile' },
  { value: 'Trex', label: 'Installer profile' },
  { value: 'Houzz', label: 'Portfolio profile' }
];

export default function StatsRow() {
  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
         <div className={styles.grid}>
           {statsData.map((stat, idx) => (
             <div key={idx} className={styles.statBox}>
               <h3 className={styles.statValue}>{stat.value}</h3>
               <span className={styles.statLabel}>{stat.label}</span>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}
