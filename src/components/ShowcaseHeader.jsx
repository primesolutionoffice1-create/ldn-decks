import React from 'react';
import styles from './ShowcaseHeader.module.css';

export default function ShowcaseHeader() {
  return (
    <section className={styles.headerSection}>
      <div className={styles.container}>
         <div className={styles.subtextWrapper}>
           <span className={styles.subtext}>Deck Projects Showcase</span>
           <span className={styles.line}></span>
         </div>
         <h1 className={styles.title}>Our Decks Projects Showcase</h1>
         <p className={styles.description}>
           Explore our stunning Decks projects showcase! At Loudoun Decks, we take pride in our beautifully crafted decks that transform outdoor spaces. From custom decks and patios to durable fences and gazebos, each project showcases our commitment to quality and customer satisfaction.
         </p>
         <p className={styles.description}>
           Explore our Portfolio to see the craftsmanship and attention to detail we bring to every project. Let our work inspire your next outdoor space, then request a written estimate when you are ready to plan your deck.
         </p>
      </div>
    </section>
  );
}
