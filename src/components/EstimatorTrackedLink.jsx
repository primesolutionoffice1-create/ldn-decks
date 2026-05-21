'use client';

import Link from 'next/link';
import { trackEstimatorEvent } from '@/lib/tracking';

export default function EstimatorTrackedLink({
  href,
  ctaLocation,
  children,
  className,
  style,
  ...rest
}) {
  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={() => trackEstimatorEvent('estimator_cta_clicked', {
        ctaLocation,
      })}
      {...rest}
    >
      {children}
    </Link>
  );
}
