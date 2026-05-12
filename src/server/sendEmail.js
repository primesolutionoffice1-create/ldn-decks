'use server';

import nodemailer from 'nodemailer';
import { sendMetaLeadEvent } from './metaCapi';

export async function sendContactEmail(formData) {
  try {
    // Honeypot guard — both ContactForm and ContactHome render a hidden
    // company_website input. Real users never fill it; bots that auto-fill
    // every input do. Return success so the bot moves on instead of
    // retrying. No email is sent, no Meta CAPI event is fired, no client
    // tracking is triggered downstream (the client still navigates to
    // /thank-you, but Smart Bidding sees zero bot-driven conversions in
    // the offline-import pipeline because no gclid/event_id record exists
    // in the inbox / CRM).
    if (formData.get('company_website')) {
      console.log('[sendContactEmail] honeypot triggered, silently dropping submission');
      // Return success-shaped response with `skipped` flag so the client
      // hook doesn't fire trackFormSubmit and doesn't navigate to /thank-you
      // (which would otherwise fire lead_confirmed). Bot sees no error,
      // moves on. No conversion enters the analytics pipeline.
      return { success: true, skipped: true };
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      debug: false,
      logger: false
    });

    const name = formData.get('name') || `${formData.get('firstName')} ${formData.get('lastName')}`;
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service') || 'General Inquiry';
    const message = formData.get('message');
    const address = formData.get('address');
    const city = formData.get('city');
    const state = formData.get('state');
    const zip = formData.get('zip');
    const gclid = formData.get('gclid');
    const gbraid = formData.get('gbraid');
    const wbraid = formData.get('wbraid');
    const fbclid = formData.get('fbclid');
    const msclkid = formData.get('msclkid');

    let fullAddress = '';
    if (address || city || state || zip) {
       fullAddress = `${address || ''}, ${city || ''}, ${state || ''} ${zip || ''}`;
    }

    // Click IDs surfaced for CRM ingestion + manual offline-conversion uploads.
    // Empty when the visitor arrived organically; populated when paid traffic.
    const clickIdRows = [
      gclid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>gclid:</strong> ${gclid}</p>`,
      gbraid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>gbraid:</strong> ${gbraid}</p>`,
      wbraid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>wbraid:</strong> ${wbraid}</p>`,
      fbclid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>fbclid:</strong> ${fbclid}</p>`,
      msclkid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>msclkid:</strong> ${msclkid}</p>`,
    ].filter(Boolean).join('');
    const attributionBlock = clickIdRows
      ? `<hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/><p style="color:#666;font-size:11px;margin:0 0 4px"><strong>Attribution (paid ad click)</strong></p>${clickIdRows}`
      : '';

    const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;
    console.log(`Attempting to send lead email to: ${recipient}`);

    const mailOptions = {
      from: `Loudoun Decks <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New Lead: ${service} from ${name}`,
      html: `
        <h2>New Website Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service Requested:</strong> ${service}</p>
        ${fullAddress ? `<p><strong>Address:</strong> ${fullAddress}</p>` : ''}
        <h3>Message:</h3>
        <p>${message}</p>
        ${attributionBlock}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Fire Meta CAPI server-side (non-blocking, env-gated — no-ops if creds absent).
    // Same event_id as the client-side form_submit + lead_confirmed events,
    // so Meta dedupes any of the three that fire within the 7-day window.
    const eventId = formData.get('event_id');
    sendMetaLeadEvent({
      email,
      phone,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      city,
      state,
      zip,
      fbclid,
      fbp: formData.get('_fbp'),
      eventId,
      eventSourceUrl: formData.get('source_url') || 'https://ldndecks.com/contact',
    }).catch((err) => console.error('Meta CAPI fire-and-forget error:', err));

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
