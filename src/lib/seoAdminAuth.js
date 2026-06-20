import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

const COOKIE_NAME = 'ldn_seo_admin';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function adminPassword() {
  return process.env.ADMIN_PASSWORD || process.env.NEXTAUTH_SECRET || null;
}

function sign(value, secret) {
  return crypto.createHmac('sha256', secret).update(value).digest('base64url');
}

function createSessionToken(secret) {
  const issuedAt = Math.floor(Date.now() / 1000);
  const nonce = crypto.randomBytes(16).toString('base64url');
  const payload = `${issuedAt}.${nonce}`;
  return `${payload}.${sign(payload, secret)}`;
}

function isValidSessionToken(token, secret) {
  if (!token || !secret) return false;
  const parts = String(token).split('.');
  if (parts.length !== 3) return false;

  const [issuedAtRaw, nonce, signature] = parts;
  if (!issuedAtRaw || !nonce || !signature) return false;

  const issuedAt = Number(issuedAtRaw);
  if (!Number.isFinite(issuedAt)) return false;
  const age = Math.floor(Date.now() / 1000) - issuedAt;
  if (age < 0 || age > SESSION_MAX_AGE_SECONDS) return false;

  const payload = `${issuedAtRaw}.${nonce}`;
  const expected = sign(payload, secret);
  if (signature.length !== expected.length) return false;
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

export function isSeoAdmin(request) {
  const expected = adminPassword();
  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  return isValidSessionToken(cookie, expected);
}

export function requireSeoAdmin(request) {
  if (isSeoAdmin(request)) return null;
  return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
}

export function setSeoAdminCookie(response) {
  const secret = adminPassword();
  response.cookies.set(COOKIE_NAME, createSessionToken(secret), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return response;
}

export function clearSeoAdminCookie(response) {
  response.cookies.set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
  return response;
}
