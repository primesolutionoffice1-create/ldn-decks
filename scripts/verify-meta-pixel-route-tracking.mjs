import crypto from 'node:crypto';
import net from 'node:net';

const ENDPOINT = process.env.CDP_ENDPOINT || 'http://127.0.0.1:9223';
const TARGET_URL = process.env.TARGET_URL || 'http://localhost:3001/deck-safety-inspection-checklist?utm_source=facebook&utm_medium=carousel&utm_campaign=local_runtime_test';
const FALLBACK_PATH = '/contact';

async function getJson(path) {
  const res = await fetch(`${ENDPOINT}${path}`);
  if (!res.ok) throw new Error(`${path} ${res.status}`);
  return res.json();
}

function encodeFrame(text) {
  const payload = Buffer.from(text);
  const mask = crypto.randomBytes(4);
  let header;
  if (payload.length < 126) {
    header = Buffer.alloc(2);
    header[1] = 0x80 | payload.length;
  } else if (payload.length < 65536) {
    header = Buffer.alloc(4);
    header[1] = 0x80 | 126;
    header.writeUInt16BE(payload.length, 2);
  } else {
    throw new Error('payload too large');
  }
  header[0] = 0x81;
  const masked = Buffer.alloc(payload.length);
  for (let i = 0; i < payload.length; i += 1) masked[i] = payload[i] ^ mask[i % 4];
  return Buffer.concat([header, mask, masked]);
}

function decodeFrames(buffer) {
  const messages = [];
  let offset = 0;
  while (offset + 2 <= buffer.length) {
    const first = buffer[offset];
    const second = buffer[offset + 1];
    const opcode = first & 0x0f;
    let len = second & 0x7f;
    let headerLen = 2;
    if (len === 126) {
      if (offset + 4 > buffer.length) break;
      len = buffer.readUInt16BE(offset + 2);
      headerLen = 4;
    } else if (len === 127) {
      if (offset + 10 > buffer.length) break;
      const bigLen = buffer.readBigUInt64BE(offset + 2);
      if (bigLen > BigInt(Number.MAX_SAFE_INTEGER)) throw new Error('frame too large');
      len = Number(bigLen);
      headerLen = 10;
    }
    const masked = Boolean(second & 0x80);
    const maskLen = masked ? 4 : 0;
    if (offset + headerLen + maskLen + len > buffer.length) break;
    let payload = buffer.subarray(offset + headerLen + maskLen, offset + headerLen + maskLen + len);
    if (masked) {
      const mask = buffer.subarray(offset + headerLen, offset + headerLen + 4);
      payload = Buffer.from(payload.map((b, i) => b ^ mask[i % 4]));
    }
    if (opcode === 1) messages.push(payload.toString('utf8'));
    offset += headerLen + maskLen + len;
  }
  return { messages, rest: buffer.subarray(offset) };
}

async function connect(wsUrl) {
  const u = new URL(wsUrl);
  const host = u.hostname;
  const port = Number(u.port || 80);
  const socket = net.createConnection({ host, port });
  await new Promise((resolve, reject) => {
    socket.once('connect', resolve);
    socket.once('error', reject);
  });
  const key = crypto.randomBytes(16).toString('base64');
  socket.write(
    `GET ${u.pathname}${u.search} HTTP/1.1\r\n` +
    `Host: ${host}:${port}\r\n` +
    'Upgrade: websocket\r\n' +
    'Connection: Upgrade\r\n' +
    `Sec-WebSocket-Key: ${key}\r\n` +
    'Sec-WebSocket-Version: 13\r\n\r\n'
  );
  let handshake = Buffer.alloc(0);
  await new Promise((resolve, reject) => {
    const onData = (chunk) => {
      handshake = Buffer.concat([handshake, chunk]);
      const idx = handshake.indexOf('\r\n\r\n');
      if (idx < 0) return;
      socket.off('data', onData);
      const head = handshake.subarray(0, idx).toString('utf8');
      if (!head.includes('101')) {
        reject(new Error(`bad handshake: ${head}`));
        return;
      }
      const rest = handshake.subarray(idx + 4);
      if (rest.length) socket.unshift(rest);
      resolve();
    };
    socket.on('data', onData);
    socket.once('error', reject);
  });
  return socket;
}

function countPageViews(queue) {
  return queue.filter((args) => args[0] === 'track' && args[1] === 'PageView').length;
}

async function main() {
  const targets = await getJson('/json/list');
  const target = targets.find((item) => item.type === 'page') || targets[0];
  if (!target?.webSocketDebuggerUrl) throw new Error('No page websocket target');

  const socket = await connect(target.webSocketDebuggerUrl);
  let nextId = 0;
  let rest = Buffer.alloc(0);
  const pending = new Map();
  const events = [];

  socket.on('data', (chunk) => {
    rest = Buffer.concat([rest, chunk]);
    const decoded = decodeFrames(rest);
    rest = decoded.rest;
    for (const text of decoded.messages) {
      const msg = JSON.parse(text);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(JSON.stringify(msg.error)));
        else resolve(msg.result);
      } else if (msg.method) {
        events.push(msg);
      }
    }
  });

  function send(method, params = {}) {
    const id = ++nextId;
    socket.write(encodeFrame(JSON.stringify({ id, method, params })));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  }

  async function evalJs(expression) {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (result.exceptionDetails) {
      const detail = result.exceptionDetails.exception?.description ||
        result.exceptionDetails.exception?.value ||
        result.exceptionDetails.text ||
        'Runtime exception';
      throw new Error(detail);
    }
    return result.result.value;
  }

  async function waitForEvent(method, timeout = 20000) {
    const start = Date.now();
    while (Date.now() - start < timeout) {
      const idx = events.findIndex((event) => event.method === method);
      if (idx >= 0) return events.splice(idx, 1)[0];
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    throw new Error(`Timed out waiting for ${method}`);
  }

  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');
  await send('Network.setBlockedURLs', { urls: ['*://connect.facebook.net/*', '*://www.facebook.com/tr*'] });
  await send('Page.navigate', { url: TARGET_URL });
  await waitForEvent('Page.loadEventFired');
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const initial = JSON.parse(await evalJs(`JSON.stringify({
    href: location.href,
    fbqType: typeof window.fbq,
    queue: Array.isArray(window.fbq && window.fbq.queue) ? window.fbq.queue.map(args => Array.from(args)) : null
  })`));
  const beforeClickLength = initial.queue?.length ?? -1;

  const clickedHref = await evalJs(`(function(){
    const links = Array.from(document.querySelectorAll('a'));
    const a = links.find(link => {
      const href = link.getAttribute('href') || link.href || '';
      if (!href || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) return false;
      try {
        const url = new URL(href, location.href);
        return url.origin === location.origin && url.pathname !== location.pathname;
      } catch {
        return false;
      }
    });
    if (!a) {
      history.pushState({}, '', '${FALLBACK_PATH}');
      window.dispatchEvent(new PopStateEvent('popstate'));
      return '${FALLBACK_PATH}';
    }
    const target = a.href;
    a.click();
    return target;
  })()`);

  const clickStart = Date.now();
  while (Date.now() - clickStart < 10000) {
    const href = await evalJs('location.href');
    if (href !== initial.href) break;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const afterClick = JSON.parse(await evalJs(`JSON.stringify({
    href: location.href,
    fbqType: typeof window.fbq,
    queue: Array.isArray(window.fbq && window.fbq.queue) ? window.fbq.queue.map(args => Array.from(args)) : null
  })`));

  socket.end();

  const initialPageViews = countPageViews(initial.queue || []);
  const afterPageViews = countPageViews(afterClick.queue || []);
  const passed =
    initial.fbqType === 'function' &&
    initialPageViews === 1 &&
    beforeClickLength === 2 &&
    afterClick.href !== initial.href &&
    afterPageViews === 2 &&
    (afterClick.queue?.length || 0) === beforeClickLength + 1;

  const result = {
    status: passed ? 'PASS' : 'FAIL',
    targetUrl: TARGET_URL,
    initialHref: initial.href,
    afterClickHref: afterClick.href,
    beforeClickLength,
    clickedHref,
    afterClickLength: afterClick.queue?.length ?? -1,
    initialPageViews,
    afterPageViews,
    initialQueue: initial.queue,
    afterClickQueue: afterClick.queue,
  };
  console.log(JSON.stringify(result, null, 2));
  if (!passed) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
