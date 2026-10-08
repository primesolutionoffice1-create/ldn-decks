import { OFFICE_EMAIL, summaryRecipient } from './config.mjs';
import { jobLabel } from './questions.mjs';

export function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function leadJobLabel(record) {
  const choice = record.classification?.answers?.service_type?.choice
    || record.classification?.answers?.new_vs_replacement?.choice;
  return jobLabel(choice);
}

export function sourceLabel(source) {
  if (source === 'website') return 'Website form';
  if (source === 'loudoun_permit') return 'Loudoun permit';
  if (source === 'fairfax_permit') return 'Fairfax permit';
  return source || 'Unknown';
}

function draftBlock(record) {
  if (!record.draft?.text) return '<p><em>No draft stored.</em></p>';
  const channel = record.draft.channel === 'internal_call_note'
    ? 'Internal call note — do not email'
    : 'Draft reply — not sent';
  return `<p><strong>${escapeHtml(channel)}</strong></p><pre style="white-space:pre-wrap;font-family:Georgia,serif">${escapeHtml(record.draft.text)}</pre>`;
}

export function buildSummaryEmail({ dateKey, top, counts, mode, cutoff, permitNotes = [], to = summaryRecipient() }) {
  const subject = `Loudoun Decks morning leads — ${dateKey} (${top.length} ready)`;
  const items = top.length === 0
    ? '<p>No leads cleared the cutoff today.</p>'
    : top.map((record, index) => `
      <h3>${index + 1}. ${escapeHtml(record.contactName || record.address || 'Permit prospect')} — ${escapeHtml(record.city || 'City unknown')}</h3>
      <ul>
        <li><strong>Source:</strong> ${escapeHtml(sourceLabel(record.source))}</li>
        <li><strong>City:</strong> ${escapeHtml(record.city || '—')}</li>
        <li><strong>Job type:</strong> ${escapeHtml(leadJobLabel(record))}</li>
        <li><strong>Score:</strong> ${escapeHtml(record.classification?.rank ?? '—')}</li>
        <li><strong>Phone:</strong> ${escapeHtml(record.phone || '—')}</li>
        <li><strong>Email:</strong> ${escapeHtml(record.email || '—')}</li>
      </ul>
      ${draftBlock(record)}
    `).join('');
  const notes = permitNotes.filter(Boolean).map((note) => `<li>${escapeHtml(note)}</li>`).join('');
  const html = `
    <h2>Morning lead triage for ${escapeHtml(dateKey)}</h2>
    <p>These drafts are stored for the office. <strong>Nothing in this email was sent to a customer.</strong></p>
    <p>Mode: ${escapeHtml(mode)}. Confidence cutoff: ${escapeHtml(cutoff)}.</p>
    <p>Today: ${counts.passed || 0} passed, ${counts.needs_human_review || 0} need a person, ${counts.rejected || 0} set aside, ${counts.pending || 0} still waiting, ${counts.error || 0} errors.</p>
    ${items}
    ${notes ? `<h3>Permit sources</h3><ul>${notes}</ul>` : ''}
    <p>Review the queue at /admin/lead-triage. Reply from ${escapeHtml(OFFICE_EMAIL)} when you are ready.</p>
  `;
  const text = [
    `Morning lead triage for ${dateKey}.`,
    'Nothing in this summary was sent to a customer.',
    `Passed ${counts.passed || 0}, review ${counts.needs_human_review || 0}, rejected ${counts.rejected || 0}.`,
    ...top.map((record, index) => [
      `${index + 1}. ${sourceLabel(record.source)} | ${record.city || '—'} | ${leadJobLabel(record)} | score ${record.classification?.rank ?? '—'}`,
      record.draft?.text || '(no draft)',
    ].join('\n')),
  ].join('\n\n');
  return {
    from: `Loudoun Decks <${OFFICE_EMAIL}>`,
    to,
    subject,
    html,
    text,
  };
}
