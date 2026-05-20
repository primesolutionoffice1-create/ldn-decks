import React from 'react';
import styles from './StatsRow.module.css';

const statsData = [
  { value: '100+', label: 'Deck & Fence Build' },
  { value: '50+', label: 'Qualified Experts' },
  { value: '30+', label: 'Years of Experience' },
  { value: '200+', label: 'Happy Customers' }
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
