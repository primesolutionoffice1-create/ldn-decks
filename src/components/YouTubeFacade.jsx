'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './YouTubeFacade.module.css';

export default function YouTubeFacade({ video }) {
  const [active, setActive] = useState(false);
  const isShort = video.contentUrl.includes('/shorts/');

  return (
    <div className={isShort ? `${styles.frame} ${styles.short}` : styles.frame}>
      {active ? (
        <iframe
          className={styles.player}
          src={`${video.embedUrl}?autoplay=1&rel=0`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className={styles.playButton}
          onClick={() => setActive(true)}
        >
          <Image
            src={video.thumbnailUrl}
            alt=""
            fill
            sizes={isShort ? '360px' : '(max-width: 900px) 100vw, 900px'}
            quality={70}
            className={styles.thumb}
          />
          <svg className={styles.playIcon} viewBox="0 0 68 68" aria-hidden="true">
            <circle cx="34" cy="34" r="34" />
            <polygon points="27,20 27,48 50,34" />
          </svg>
          <span className={styles.srOnly}>Play video: {video.name}</span>
        </button>
      )}
      <noscript>
        <a className={styles.fallbackLink} href={video.contentUrl}>
          Watch {video.name} on YouTube
        </a>
      </noscript>
    </div>
  );
}
