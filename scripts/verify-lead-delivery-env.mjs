const REQUIRED_EMAIL_VARS = ['EMAIL_USER', 'EMAIL_PASS', 'EMAIL_TO'];
const BACKUP_CHANNEL_VARS = ['GHL_INBOUND_WEBHOOK_URL', 'N8N_WEBSITE_INTAKE_WEBHOOK_URL'];

function isSet(name) {
  return Boolean(String(process.env[name] || '').trim());
}

function appPasswordLooksValid(value) {
  const compact = String(value || '').replace(/\s+/g, '');
  return compact.length >= 16 && !compact.includes('replace-with');
}

function urlLooksValid(value) {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function statusLine(label, ok, detail = '') {
  const state = ok ? 'OK' : 'MISSING/INVALID';
  console.log(`${label}: ${state}${detail ? ` (${detail})` : ''}`);
}

const emailPass = process.env.EMAIL_PASS || '';
const emailReady = REQUIRED_EMAIL_VARS.every(isSet) && appPasswordLooksValid(emailPass);
const hasBackupChannel = BACKUP_CHANNEL_VARS.some(isSet);

console.log('Lead delivery environment check');
console.log('No secret values are printed by this script.');
console.log('');

statusLine('EMAIL_USER', isSet('EMAIL_USER'), 'server-only Gmail sender');
statusLine('EMAIL_PASS', isSet('EMAIL_PASS') && appPasswordLooksValid(emailPass), 'server-only Gmail App Password');
statusLine('EMAIL_TO', isSet('EMAIL_TO'), 'lead notification recipient');
statusLine(
  'GHL_INBOUND_WEBHOOK_URL',
  !isSet('GHL_INBOUND_WEBHOOK_URL') || urlLooksValid(process.env.GHL_INBOUND_WEBHOOK_URL),
  isSet('GHL_INBOUND_WEBHOOK_URL') ? 'backup channel configured' : 'backup channel not configured',
);
statusLine(
  'N8N_WEBSITE_INTAKE_WEBHOOK_URL',
  !isSet('N8N_WEBSITE_INTAKE_WEBHOOK_URL') || urlLooksValid(process.env.N8N_WEBSITE_INTAKE_WEBHOOK_URL),
  isSet('N8N_WEBSITE_INTAKE_WEBHOOK_URL') ? 'backup channel configured' : 'backup channel not configured',
);

if (!emailReady) {
  console.error('');
  console.error('Lead email is not ready. Set EMAIL_USER, EMAIL_PASS, and EMAIL_TO in Vercel Production.');
  console.error('For Gmail SMTP, EMAIL_PASS must be a Google App Password, not the normal mailbox password.');
  process.exit(1);
}

if (!hasBackupChannel) {
  console.warn('');
  console.warn('Warning: no GHL or n8n backup channel is configured. Email is the only lead delivery path.');
}

console.log('');
console.log('Lead email environment looks ready.');
