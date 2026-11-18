'use server';

import { headers } from 'next/headers';
import { sendMetaLeadEvent } from './metaCapi';
import { createLeadConfirmationToken, verifyLeadConfirmationToken } from './leadConfirmationToken';
import { sendGhlLead } from './ghl';
import { sendN8nWebsiteLead } from './n8nLeadForwarder';
import { sendLeadNotificationEmail } from './emailDelivery';
import { normalizeLeadAttribution } from '@/lib/leadAttribution';
import { deriveServerLeadSource, sanitizeLeadUrl } from '@/lib/leadPrivacy';

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>\"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;', "'": '&#39;' }[c]));
}

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

    const normalized = new FormData();
    for (const [key, value] of formData.entries()) normalized.append(key, value);
    formData = normalized;
    normalizeLeadAttribution(formData);

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
    const eventId = formData.get('event_id');
    const submittedSourceUrl = formData.get('source_url');
    const submittedReferrer = formData.get('referrer');
    const formName = formData.get('form_name');
    const pageType = formData.get('page_type');
    const pageCity = formData.get('page_city');
    const pageCounty = formData.get('page_county');

    // Request headers are authoritative for the current form page. Client URL
    // fields are sanitized fallbacks and never carry query strings or hashes.
    let ipAddress = null;
    let userAgent = null;
    let requestReferrer = '';
    try {
      const h = await headers();
      const xff = h.get('x-forwarded-for') || '';
      ipAddress = xff.split(',')[0].trim() || h.get('x-real-ip') || null;
      userAgent = h.get('user-agent') || null;
      requestReferrer = h.get('referer') || '';
    } catch {
      // headers() can throw outside request scope (build/tests). Delivery still
      // works and the sanitized submitted source remains available as fallback.
    }
    const sourceUrl = deriveServerLeadSource({ requestReferrer, submittedSourceUrl });
    const referrer = sanitizeLeadUrl(submittedReferrer);
    formData.set('source_url', sourceUrl);
    formData.set('referrer', referrer);

    let fullAddress = '';
    if (address || city || state || zip) {
       fullAddress = `${address || ''}, ${city || ''}, ${state || ''} ${zip || ''}`;
    }

    // Click IDs surfaced for CRM ingestion + manual offline-conversion uploads.
    // Empty when the visitor arrived organically; populated when paid traffic.
    const clickIdRows = [
      eventId && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>event_id:</strong> ${escapeHtml(eventId)}</p>`,
      sourceUrl && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>submit_page:</strong> ${escapeHtml(sourceUrl)}</p>`,
      referrer && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>referrer:</strong> ${escapeHtml(referrer)}</p>`,
      formName && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>form_name:</strong> ${escapeHtml(formName)}</p>`,
      pageType && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>page_type:</strong> ${escapeHtml(pageType)}</p>`,
      pageCity && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>page_city:</strong> ${escapeHtml(pageCity)}</p>`,
      pageCounty && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>page_county:</strong> ${escapeHtml(pageCounty)}</p>`,
      gclid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>gclid:</strong> ${escapeHtml(gclid)}</p>`,
      gbraid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>gbraid:</strong> ${escapeHtml(gbraid)}</p>`,
      wbraid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>wbraid:</strong> ${escapeHtml(wbraid)}</p>`,
      fbclid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>fbclid:</strong> ${escapeHtml(fbclid)}</p>`,
      msclkid && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>msclkid:</strong> ${escapeHtml(msclkid)}</p>`,
      utmSource && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_source:</strong> ${escapeHtml(utmSource)}</p>`,
      utmMedium && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_medium:</strong> ${escapeHtml(utmMedium)}</p>`,
      utmCampaign && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_campaign:</strong> ${escapeHtml(utmCampaign)}</p>`,
      utmContent && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_content:</strong> ${escapeHtml(utmContent)}</p>`,
      utmTerm && `<p style="color:#666;font-size:11px;margin:2px 0"><strong>utm_term:</strong> ${escapeHtml(utmTerm)}</p>`,
    ].filter(Boolean).join('');
    const attributionBlock = clickIdRows
      ? `<hr style="border:none;border-top:1px solid #ddd;margin:16px 0"/><p style="color:#666;font-size:11px;margin:0 0 4px"><strong>Attribution (submitted source metadata)</strong></p>${clickIdRows}`
      : '';

    const recipient = process.env.EMAIL_TO || process.env.EMAIL_USER;

    const mailOptions = {
      from: `Loudoun Decks <${process.env.EMAIL_FROM || process.env.EMAIL_USER || 'office@ldndecks.com'}>`,
      to: recipient,
      ...(email ? { replyTo: email } : {}),
      subject: `New Lead: ${service} from ${name}`,
      html: `
        <h2>New Website Contact Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email || 'Not provided')}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service Requested:</strong> ${escapeHtml(service)}</p>
        ${timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>` : ''}
        ${budgetRange ? `<p><strong>Budget Range:</strong> ${escapeHtml(budgetRange)}</p>` : ''}
        ${materialInterest ? `<p><strong>Material Interest:</strong> ${escapeHtml(materialInterest)}</p>` : ''}
        ${homeownerStatus ? `<p><strong>Homeowner / Decision Maker:</strong> ${escapeHtml(homeownerStatus)}</p>` : ''}
        ${hoa ? `<p><strong>HOA / Permit Status:</strong> ${escapeHtml(hoa)}</p>` : ''}
        ${fullAddress ? `<p><strong>Address:</strong> ${escapeHtml(fullAddress)}</p>` : ''}
        <h3>Message:</h3>
        <p>${escapeHtml(message)}</p>
        ${attributionBlock}
      `,
    };

    const emailResult = await sendLeadNotificationEmail(mailOptions);
    if (!emailResult.ok && emailResult.skipped) {
      console.error('[sendContactEmail] email delivery skipped', emailResult);
    } else if (!emailResult.ok) {
      console.error('[sendContactEmail] email delivery failed', emailResult);
    }

    const ghlResult = await sendGhlLead(formData);
    if (!ghlResult.ok && !ghlResult.skipped) {
      console.error('[sendContactEmail] GHL website lead forward failed', ghlResult);
    }

    const n8nResult = await sendN8nWebsiteLead(formData, { ipAddress, userAgent });
    if (!n8nResult.ok && !n8nResult.skipped) {
      console.error('[sendContactEmail] n8n website intake forward failed', n8nResult);
    }

    const delivered = emailResult.ok || ghlResult.ok || n8nResult.ok;
    if (!emailResult.ok && delivered) {
      console.error('[sendContactEmail] lead accepted but email notification failed', {
        email: emailResult,
        ghl: {
          ok: ghlResult.ok,
          skipped: Boolean(ghlResult.skipped),
          status: ghlResult.status,
        },
        n8n: {
          ok: n8nResult.ok,
          skipped: Boolean(n8nResult.skipped),
          status: n8nResult.status,
        },
      });
    }

    if (!delivered) {
      console.error('[sendContactEmail] all website lead delivery sinks failed', {
        email: emailResult,
        ghl: ghlResult,
        n8n: n8nResult,
      });
      return { success: false, error: 'Failed to send lead' };
    }

    return {
      success: true,
      confirmationToken: createLeadConfirmationToken(eventId),
      deliveryAcknowledgments: { email: Boolean(emailResult.ok), ghl: Boolean(ghlResult.ok), n8n: Boolean(n8nResult.ok) },
    };
  } catch (error) {
    console.error('Email error:', error?.message || error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendConfirmedMetaLeadEvent(formData, confirmationToken) {
  const optionalTrackingConsent = formData.get('optional_tracking_consent');
  const eventId = formData.get('event_id');
  if (optionalTrackingConsent !== 'accepted' || !eventId || !confirmationToken) {
    return { success: false, skipped: true };
  }

  const proof = verifyLeadConfirmationToken(eventId, confirmationToken);
  if (!proof.ok) {
    return { success: false, skipped: true, error: 'invalid confirmation proof' };
  }

  const rawName = String(formData.get('name') || '').trim();
  const firstName = formData.get('firstName') || rawName.split(' ')[0] || '';
  const lastName = formData.get('lastName') || rawName.split(' ').slice(1).join(' ') || '';

  let ipAddress = null;
  let userAgent = null;
  let requestReferrer = '';
  try {
    const h = await headers();
    const xff = h.get('x-forwarded-for') || '';
    ipAddress = xff.split(',')[0].trim() || h.get('x-real-ip') || null;
    userAgent = h.get('user-agent') || null;
    requestReferrer = h.get('referer') || '';
  } catch {
    // The transport still degrades safely when request headers are unavailable.
  }

  const eventSourceUrl = deriveServerLeadSource({
    requestReferrer,
    submittedSourceUrl: formData.get('source_url'),
  }) || 'https://ldndecks.com/contact';

  return sendMetaLeadEvent({
    email: formData.get('email'),
    phone: formData.get('phone'),
    firstName,
    lastName,
    city: formData.get('city'),
    state: formData.get('state'),
    zip: formData.get('zip'),
    fbclid: formData.get('fbclid'),
    fbp: formData.get('_fbp'),
    eventId,
    eventSourceUrl,
    ipAddress,
    userAgent,
    optionalTrackingConsent,
  });
}
