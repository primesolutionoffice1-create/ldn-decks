import React from 'react';
import styles from './TrustBanner.module.css';

const DEFAULT_ITEMS = [
  {
    icon: '🏆',
    title: 'Trex & TimberTech Options',
    detail: 'Material and warranty details reviewed by product line',
  },
  {
    icon: '⭐',
    title: 'Google Reviews',
    detail: 'Public Google review profile',
  },
  {
    icon: '🛡️',
    title: 'Written Warranty Terms',
    detail: 'Review workmanship coverage in the project agreement',
  },
  {
    icon: '✅',
    title: 'Virginia Class A Contractor, Lic. #2705191673',
    detail: '',
  },
];

function normalizeTrustItem(item) {
  if (typeof item === 'string') {
    return { title: item.trim(), detail: '', icon: '' };
  }
  if (!item || typeof item !== 'object') return null;
  const title = typeof item.title === 'string' ? item.title.trim() : '';
  if (!title) return null;
  return {
    title,
    detail: typeof item.detail === 'string' ? item.detail.trim() : '',
    icon: typeof item.icon === 'string' ? item.icon : '',
  };
}

export default function TrustBanner({ items, ariaLabel = 'Trust highlights' }) {
  const rows = (items ?? DEFAULT_ITEMS).map(normalizeTrustItem).filter(Boolean);
  if (!rows.length) return null;

  return (
    <div className={styles.banner} role="list" aria-label={ariaLabel} data-trust-banner>
      {rows.map((item, index) => (
        <React.Fragment key={item.title}>
          {index > 0 ? <div className={styles.divider} aria-hidden="true"></div> : null}
          <div className={styles.item} role="listitem">
            {item.icon ? (
              <div className={styles.icon} aria-hidden="true">{item.icon}</div>
            ) : null}
            <div className={styles.text}>
              <strong>{item.title}</strong>
              {item.detail ? <span>{item.detail}</span> : null}
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
