import React from 'react';
import Link from 'next/link';
import styles from './ServiceContentExpansion.module.css';

/**
 * Parse simple markdown-style links [text](url) in a string
 * and return an array of React elements (strings and <Link> nodes).
 */
function parseLinks(text) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, linkText, href] = match;
    const isInternal = href.startsWith('/');
    parts.push(
      isInternal
        ? <Link key={match.index} href={href}>{linkText}</Link>
        : <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">{linkText}</a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

export default function ServiceContentExpansion({ sections }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {sections.map((section, idx) => (
          <div key={idx} className={styles.textBlock}>
            {section.title && <h3 className={styles.subTitle}>{section.title}</h3>}
            <div className={styles.content}>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className={styles.paragraph}>{parseLinks(p)}</p>
              ))}
            </div>
            {section.listItems && (
              <ul className={styles.detailsList}>
                {section.listItems.map((item, iIdx) => (
                  <li key={iIdx} className={styles.listItem}>
                    <strong>{item.label}:</strong> {parseLinks(item.text)}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
