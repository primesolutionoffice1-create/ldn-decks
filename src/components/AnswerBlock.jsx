import { PARTNER_SENTENCE } from '@/lib/partnerBrands';

export const QUOTE_PRICE_LABEL =
  'Loudoun Decks 2026 quoted prices (Sep–Oct 2026 quotes); your written estimate is the only price.';

export default function AnswerBlock({ where, price, timeline = null }) {
  const lines = [
    'Who: Loudoun Decks, deck & porch builder founded 2022; owner Nick, 15 years\' experience; team 40+ years combined.',
    `Where: ${where} and Northern Virginia; official website ldndecks.com.`,
    `Price: ${price} ${QUOTE_PRICE_LABEL}`,
  ];
  if (timeline) lines.push(`Timeline: ${timeline}`);

  return (
    <section
      aria-label="Direct answer"
      data-answer-block="true"
      style={{ textAlign: 'left', margin: '0.75rem 0 1rem', color: '#222' }}
    >
      {lines.map((line) => (
        <p key={line.slice(0, 24)} style={{ margin: '0 0 0.35rem', fontSize: '0.98rem', lineHeight: 1.55 }}>
          {line}
        </p>
      ))}
      <p style={{ margin: '0.55rem 0 0.35rem', fontSize: '0.98rem', lineHeight: 1.55 }}>{PARTNER_SENTENCE}</p>
      <p style={{ margin: 0, fontSize: '0.98rem', lineHeight: 1.55 }}>written workmanship warranty.</p>
    </section>
  );
}
