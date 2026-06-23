'use server';

import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { sendMetaLeadEvent } from './metaCapi';
import { createLeadConfirmationToken } from './leadConfirmationToken';
import { sendN8nWebsiteLead } from './n8nLeadForwarder';

export async function sendContactEmail(formData) {
  try {
    // Honeypot guard — both ContactForm and ContactHome render a hidden
    // ldn_extra_field input. Real users never fill it; bots that auto-fill
    // every input do. Return success so the bot moves on instead of
    // retrying. No email is sent, no Meta CAPI event is fired, no client
    // tracking is triggered downstream (the client still navigates to
    // /thank-you, but Smart Bidding sees zero bot-driven conversions in
    // the offline-import pipeline because no gclid/event_id record exists
    // in the inbox / CRM).
    const honeypotValue = [
      formData.get('ldn_extra_field'),
      formData.get('company_website'),
      formData.get('companyWebsite'),
    ].find((value) => String(value || '').trim());

    if (honeypotValue) {
      console.log('[sendContactEmail] honeypot field populated, silently dropping submission');
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
    const timeline = formData.get('timeline');
    const budgetRange = formData.get('budgetRange') || formData.get('budget');
    const materialInterest = formData.get('materialInterest');
    const homeownerStatus = formData.get('homeownerStatus');
    const hoa = formData.get('hoa');
    const address = formData.get('address');
    const city = formData.get('city');
    const state = formData.get('state');
    const zip = formData.get('zip');
    const gclid = formData.get('gclid');
    const gbraid = formData.get('gbraid');
    const wbraid = formData.get('wbraid');
    const fbclid = formData.get('fbclid');
    const msclkid = formData.get('msclkid');
    const utmSource = formData.get('utm_source');
    const utmMedium = formData.get('utm_medium');
    const utmCampaign = formData.get('utm_campaign');
    const utmContent = formData.get('utm_content');
    const utmTerm = formData.get('utm_term');

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
      utmSource && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_source:</strong> ${utmSource}</p>`,
      utmMedium && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_medium:</strong> ${utmMedium}</p>`,
      utmCampaign && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_campaign:</strong> ${utmCampaign}</p>`,
      utmContent && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_content:</strong> ${utmContent}</p>`,
      utmTerm && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_term:</strong> ${utmTerm}</p>`,
    ].filter(Boolean).join('');
    const attributionBlock = clickIdRows
      ? `<hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/><p style="color:#666;font-size:11px;margin:0 0 4px"><strong>Attribution (paid ad click)</strong></p>${clickIdRows}`
      : '';

    const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;
    console.log('[sendContactEmail] attempting to send lead email');

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
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        ${budgetRange ? `<p><strong>Budget Range:</strong> ${budgetRange}</p>` : ''}
        ${materialInterest ? `<p><strong>Material Interest:</strong> ${materialInterest}</p>` : ''}
        ${homeownerStatus ? `<p><strong>Homeowner / Decision Maker:</strong> ${homeownerStatus}</p>` : ''}
        ${hoa ? `<p><strong>HOA / Permit Status:</strong> ${hoa}</p>` : ''}
        ${fullAddress ? `<p><strong>Address:</strong> ${fullAddress}</p>` : ''}
        <h3>Message:</h3>
        <p>${message}</p>
        ${attributionBlock}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Capture IP + User-Agent from the request for Meta CAPI match quality.
    // headers() comes from next/headers — server-action context. The first
    // address in x-forwarded-for is the client (Vercel / proxies prepend
    // their own hops); fall back to the direct connection if absent.
    let ipAddress = null;
    let userAgent = null;
    try {
      const h = await headers();
      const xff = h.get('x-forwarded-for') || '';
      ipAddress = xff.split(',')[0].trim() || h.get('x-real-ip') || null;
      userAgent = h.get('user-agent') || null;
    } catch (e) {
      // headers() can throw if called outside a request-scoped context
      // (e.g., during build / unit test). CAPI degrades gracefully —
      // missing IP / UA drops EMQ score ~1.5 points but doesn't error.
    }

    const n8nResult = await sendN8nWebsiteLead(formData, { ipAddress, userAgent });
    if (!n8nResult.ok && !n8nResult.skipped) {
      console.error('[sendContactEmail] n8n website intake forward failed', n8nResult);
    }

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
      ipAddress,
      userAgent,
    }).catch((err) => console.error('Meta CAPI fire-and-forget error:', err?.message || err));

    return {
      success: true,
      confirmationToken: createLeadConfirmationToken(eventId),
    };
  } catch (error) {
    console.error('Email error:', error?.message || error);
    return { success: false, error: 'Failed to send email' };
  }
}
