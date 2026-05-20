import React from 'react';
import styles from './ServiceVisual.module.css';
import Image from 'next/image';

export default function ServiceVisual({ image }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt="New Deck Design" 
            fill 
            className={styles.img}
            sizes="100vw"
          />
          <div className={styles.overlay}>
             <h2 className={styles.text}>Built for Life Outdoors</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
