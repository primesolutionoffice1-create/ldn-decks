import { NextResponse } from 'next/server';
import { clearSeoAdminCookie, isSeoAdmin, setSeoAdminCookie } from '@/lib/seoAdminAuth';

export async function GET(request) {
  return NextResponse.json({ authenticated: isSeoAdmin(request) });
}

export async function POST(request) {
  const { password } = await request.json().catch(() => ({}));

  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
  }

  return setSeoAdminCookie(NextResponse.json({ success: true }));
}

export async function DELETE() {
  return clearSeoAdminCookie(NextResponse.json({ success: true }));
}
