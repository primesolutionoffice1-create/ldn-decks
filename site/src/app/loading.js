// Minimal loading skeleton shown while route segments stream.
// Kept visual-neutral: no spinners, no animations that conflict with site palette.
export default function Loading() {
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px',
        color: '#888',
        fontSize: '0.95rem',
      }}
    >
      Loading…
    </div>
  );
}
