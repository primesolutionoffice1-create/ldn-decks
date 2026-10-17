// Illustration only. The homepage financing slider and the mobile planning
// strip must use the same assumptions so the two numbers cannot drift.
// Actual rate, term, and payment are set by the lender.
export const SAMPLE_APR = 0.09;
export const SAMPLE_TERM_YEARS = 10;
export const SAMPLE_PROJECT_AMOUNT = 30000;

export function calcMonthlyPayment(principal, apr, years) {
  const monthlyRate = apr / 12;
  const months = years * 12;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

export function sampleMonthlyPayment(principal = SAMPLE_PROJECT_AMOUNT) {
  return Math.round(calcMonthlyPayment(principal, SAMPLE_APR, SAMPLE_TERM_YEARS));
}
