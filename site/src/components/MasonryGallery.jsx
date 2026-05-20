import React from 'react';
import Image from 'next/image';
import styles from './MasonryGallery.module.css';

export default function MasonryGallery({ images, title = "Showcase of our work" }) {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        {title && <h2 className={styles.galleryTitle}>{title}</h2>}
        <div className={styles.masonryGrid}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.masonryItem}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={img} 
                  alt={`Project ${idx + 1}`} 
                  width={600} 
                  height={800} 
                  className={styles.galleryImg} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
