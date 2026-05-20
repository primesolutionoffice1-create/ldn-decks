import React from 'react';
import Image from 'next/image';
import styles from './ServiceMain.module.css';

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function ServiceMain({ title, subtitle, description, listTitle, listItems, image1, image2 }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Images Layer */}
        <div className={styles.imagesCol}>
          <div className={styles.frameOutline}></div>
          <div className={styles.subImgWrapper}>
            <Image src={image2 || "/intro_sub.png"} alt="Service Detail" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, 400px" />
          </div>
          <div className={styles.mainImgWrapper}>
            <Image src={image1 || "/intro_main.png"} alt="Service Build" fill className={styles.imgProps} sizes="(max-width: 768px) 100vw, 600px" />
          </div>
        </div>

        {/* Content Layer */}
        <div className={styles.contentCol}>
          <div className={styles.labelWrapper}>
            <span className={styles.label}>{subtitle}</span>
            <span className={styles.line}></span>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>

          {listTitle && <h4 className={styles.listTitle}>{listTitle}</h4>}
          <ul className={styles.list}>
            {listItems.map((item, idx) => (
              <li key={idx}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
