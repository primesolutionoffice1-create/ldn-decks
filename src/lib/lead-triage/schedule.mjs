import { after } from 'next/server';
import { captureWebsiteLead } from './capture.mjs';
import { classifyStoredRecord } from './pipeline.mjs';

// Schedules triage after the contact-form response. Failures stay in this
// function so the existing email / CRM delivery is unchanged.
export function scheduleLeadTriage(payload) {
  try {
    after(async () => {
      try {
        const captured = await captureWebsiteLead(payload);
        if (captured?.record?.id && captured.created) {
          await classifyStoredRecord(captured.record.id);
        }
      } catch (error) {
        console.error('[lead-triage] background processing failed', error?.message || error);
      }
    });
  } catch (error) {
    console.error('[lead-triage] scheduling failed', error?.message || error);
  }
}
