import React from 'react';
import styles from './ContactMap.module.css';

export default function ContactMap() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.headerBlock}>
          <h2>Our Primary Location</h2>
        </div>
        <div className={styles.mapWrapper}>
          <iframe src="https://www.google.com/maps?q=13704+Winding+Oak+Cir,+Centreville,+VA+20121&output=embed" width="100%" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Loudoun Decks Office Location Map"></iframe>
        </div>
      </div>
    </section>
  );
}
