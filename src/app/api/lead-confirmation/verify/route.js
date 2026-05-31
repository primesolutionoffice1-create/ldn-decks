import { NextResponse } from 'next/server';
import { verifyLeadConfirmationToken } from '@/server/leadConfirmationToken';

export async function POST(request) {
  try {
    const { eventId, token } = await request.json();
    const result = verifyLeadConfirmationToken(eventId, token);

    return NextResponse.json(
      { ok: result.ok, reason: result.ok ? undefined : result.reason },
      { headers: { 'Cache-Control': 'no-store' } }
    );
  } catch {
    return NextResponse.json(
      { ok: false, reason: 'invalid_request' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}
