import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-roi-calculator-northern-virginia',
  title: 'Deck ROI Calculator Northern Virginia | Estimate Home Value Increase',
  description: 'How much does a deck increase home value in NoVA? Use our interactive ROI calculator based on 2026 Northern Virginia real estate market data.',
});

export default function Layout({ children }) {
  return <>{children}</>;
}
