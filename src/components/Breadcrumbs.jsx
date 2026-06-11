"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Breadcrumbs.module.css';
import { labelFor } from '@/lib/breadcrumbLabels';
import JsonLd from './JsonLd';

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const canonicalBreadcrumbHrefs = {
    service: '/services',
    'outdoor-living': '/outdoor-living-northern-virginia',
    patios: '/services/patios',
    pergolas: '/services/gazebo-pergola',
    'screened-porches': '/screened-porch-builder-northern-virginia',
  };

  const breadcrumbs = pathSegments.map((segment, index) => {
    const generatedHref = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const href = index === 0 ? canonicalBreadcrumbHrefs[segment] || generatedHref : generatedHref;
    const label = labelFor(segment);

    return { label, href };
  });

  const SITE_URL = "https://ldndecks.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL
      },
      ...breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.label,
        "item": `${SITE_URL}${crumb.href}`
      }))
    ]
  };

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <JsonLd data={jsonLd} />
      <div className={styles.container}>
        <div className={styles.item}>
          <Link href="/" className={styles.link}>Home</Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <span className={styles.separator}>/</span>
              {index === breadcrumbs.length - 1 ? (
                <span className={styles.current}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className={styles.link}>{crumb.label}</Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}
