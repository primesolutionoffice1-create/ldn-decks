import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Craftsmanship in Motion</h2>
          <p className={styles.subtitle}>
            See how Loudoun Decks transforms Northern Virginia backyards into luxury outdoor living spaces.
          </p>
        </div>
        <div className={styles.videoWrapper}>
          <video 
            className={styles.video} 
            controls 
            preload="metadata"
            poster="/home-page-ldn.webp"
          >
            <source src="/introvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
