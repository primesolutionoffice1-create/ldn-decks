import React from 'react';
import styles from './ServiceInclusions.module.css';

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function ServiceInclusions({ title, description, items }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        
        <div className={styles.grid}>
          {items.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>
                <CheckIcon />
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
