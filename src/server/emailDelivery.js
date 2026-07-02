'use server';

import nodemailer from 'nodemailer';

function emailConfigSummary() {
  return {
    hasResendApiKey: Boolean(process.env.RESEND_API_KEY),
    hasEmailUser: Boolean(process.env.EMAIL_USER),
    hasEmailPass: Boolean(process.env.EMAIL_PASS),
    hasEmailTo: Boolean(process.env.EMAIL_TO),
  };
}

function classifyEmailDeliveryError(error) {
  const message = String(error?.message || error || '');
  if (
    message.includes('535-5.7.8')
    || message.includes('Username and Password not accepted')
    || message.includes('BadCredentials')
  ) {
    return {
      type: 'gmail_bad_credentials',
      message: 'Gmail SMTP rejected EMAIL_USER/EMAIL_PASS. Use a Google App Password, not the account password.',
    };
  }

  if (message.includes('Invalid login')) {
    return {
      type: 'smtp_invalid_login',
      message: 'SMTP rejected the configured login. Verify EMAIL_USER and EMAIL_PASS in hosting env vars.',
    };
  }

  return {
    type: 'email_delivery_failed',
    message: 'Email delivery failed. Check hosting logs and provider status.',
  };
}

function hasGmailSmtpCredentials() {
  return Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

function hasResendCredentials() {
  return Boolean(process.env.RESEND_API_KEY);
}

function senderAddress() {
  return process.env.EMAIL_FROM || process.env.EMAIL_USER || 'office@ldndecks.com';
}

async function sendWithResend(mailOptions) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: mailOptions.from,
      to: Array.isArray(mailOptions.to) ? mailOptions.to : [mailOptions.to],
      reply_to: mailOptions.replyTo ? [mailOptions.replyTo] : undefined,
      subject: mailOptions.subject,
      html: mailOptions.html,
      text: mailOptions.text,
    }),
  });

  if (!res.ok) {
    const responseText = await res.text().catch(() => '');
    throw new Error(`Resend email API failed with status ${res.status}: ${responseText.slice(0, 240)}`);
  }

  return { ok: true, provider: 'resend', status: res.status };
}

async function sendWithGmailSmtp(mailOptions) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    debug: false,
    logger: false,
  });

  await transporter.sendMail(mailOptions);
  return { ok: true, provider: 'gmail_smtp' };
}

export async function sendLeadNotificationEmail(mailOptions) {
  if (!mailOptions?.to) {
    return {
      ok: false,
      skipped: true,
      reason: 'missing_email_recipient',
      config: emailConfigSummary(),
    };
  }

  const normalizedMailOptions = {
    ...mailOptions,
    from: mailOptions.from || `LDN Decks <${senderAddress()}>`,
  };

  if (hasResendCredentials()) {
    console.log('[emailDelivery] attempting lead email via Resend');
    try {
      return await sendWithResend(normalizedMailOptions);
    } catch (error) {
      const classifiedError = classifyEmailDeliveryError(error);
      const result = {
        ok: false,
        provider: 'resend',
        errorType: 'resend_delivery_failed',
        errorMessage: classifiedError.message,
      };
      console.error('[emailDelivery] Resend delivery failed', result);
      return result;
    }
  }

  if (!hasGmailSmtpCredentials()) {
    return {
      ok: false,
      skipped: true,
      reason: 'missing_email_credentials',
      config: emailConfigSummary(),
    };
  }

  console.log('[emailDelivery] attempting lead email via Gmail SMTP');
  try {
    return await sendWithGmailSmtp(normalizedMailOptions);
  } catch (error) {
    const classifiedError = classifyEmailDeliveryError(error);
    const result = {
      ok: false,
      provider: 'gmail_smtp',
      errorType: classifiedError.type,
      errorMessage: classifiedError.message,
    };
    console.error('[emailDelivery] Gmail SMTP delivery failed', classifiedError);
    return result;
  }
}
