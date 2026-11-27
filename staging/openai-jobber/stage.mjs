/* Disposable local Next + n8n + PostgreSQL staging. Never loads .env files. */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
const source = path.dirname(fileURLToPath(import.meta.url));
const manifest =
  process.argv[3] || path.join(os.tmpdir(), "ldn-openai-stage-manifest.json");
const cmd = process.argv[2] || "up";
if (cmd === "help" || cmd === "--help") {
  console.log(`Local-only Next React + real n8n + PostgreSQL staging.
Commands: node staging/openai-jobber/stage.mjs <up|test|production-check|refresh|logs|down> [manifest-path]
up: disposable OS-temp app, pinned Docker images, synthetic fixtures only.
test: full local integration and authentication assertions; reports in runtime/results.json.
production-check: separate production build/start must deny API even with STAGE_ONLY=true.
refresh: copy only these staging sources and reimport only the local graph.
down: stop/remove local containers and volumes, scrub generated compose secrets, retain sanitized reports.
No dotenv files or production credentials are loaded. No SDK, real Jobber, Ads, customer sends or cloud n8n.
Next+n8n+PostgreSQL run on an internal network; secret-free ingress publishes127.0.0.1:13387 only.
Production form/tracking files are never imported or modified by this harness.
Browser: wait for 'React staging client ready' before submitting; only fake QA_STAGE_ fixtures are accepted.`);
  process.exit(0);
}
const N8N =
  "docker.n8n.io/n8nio/n8n@sha256:9a83f64039070a846723cdf7d95b85db9ad1e6fadb38cad1ca12eceb04e04f33";
const PG =
  "postgres@sha256:f2f98726820d0342055351c6e9d36e705f5bfffb3dd53ff556325114b08afb6d";
const proxySource = `const http = require('node:http');
const server = http.createServer((req, res) => {
  const n8n = req.url.startsWith('/n8n/');
  const upstream = http.request({host:n8n?'n8n':'next', port:n8n?5678:3000,
    path:n8n?req.url.slice(4):req.url, method:req.method, headers:{...req.headers}}, response => {
    res.writeHead(response.statusCode,response.headers); response.pipe(res);
  });
  upstream.on('error',()=>{res.writeHead(502);res.end('local upstream unavailable');});req.pipe(upstream);
});
server.on('upgrade',(req,socket,head)=>{
  if(!req.url.startsWith('/_next/hmr')){socket.destroy();return;}
  const upstream=http.request({host:'next',port:3000,path:req.url,method:'GET',headers:{...req.headers}});
  upstream.on('upgrade',(response,remote,remoteHead)=>{
    socket.write('HTTP/1.1 '+response.statusCode+' '+response.statusMessage+'\\r\\n');
    for(const [name,value] of Object.entries(response.headers))socket.write(name+': '+value+'\\r\\n');
    socket.write('\\r\\n');if(head.length)remote.write(head);if(remoteHead.length)socket.write(remoteHead);
    socket.pipe(remote);remote.pipe(socket);socket.on('error',()=>remote.destroy());remote.on('error',()=>socket.destroy());
  });
  upstream.on('error',()=>socket.destroy());upstream.end();
});
server.listen(3000,'0.0.0.0');`;
function run(args, { cwd, quiet = false } = {}) {
  const r = spawnSync(args[0], args.slice(1), {
    cwd,
    encoding: "utf8",
    stdio: quiet ? "pipe" : "inherit",
  });
  if (r.status !== 0)
    throw Error(
      "Local command failed: " + args[0] + " " + args.slice(1, 3).join(" "),
    );
  return r.stdout;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const compose = (m, ...args) =>
  run([
    "docker",
    "compose",
    "-p",
    m.project,
    "-f",
    path.join(m.dir, "compose.json"),
    ...args,
  ]);
if (cmd === "down") {
  const m = JSON.parse(await fs.readFile(manifest));
  compose(m, "down", "--volumes");
  await fs.rm(path.join(m.dir, "compose.json"), { force: true });
  console.log(
    "Local staging stopped; generated secret configuration removed; sanitized evidence retained at " +
      m.dir,
  );
  process.exit(0);
}
if (cmd === "up") {
  try {
    const previous = JSON.parse(await fs.readFile(manifest));
    await fs.access(path.join(previous.dir, "compose.json"));
    throw Error(
      "Existing staging manifest is active; use refresh or down, not a duplicate up.",
    );
  } catch (error) {
    if (error.message?.startsWith("Existing staging")) throw error;
  }

  const dir = await fs.mkdtemp(path.join(os.tmpdir(), "ldn-openai-next-")),
    project = "ldn-openai-" + crypto.randomBytes(4).toString("hex");
  await fs.writeFile(
    path.join(dir, "next.config.mjs"),
    "export default {allowedDevOrigins:['127.0.0.1','localhost']};\n",
  );
  const app = path.join(dir, "app");
  await fs.mkdir(path.join(app, "api", "[...path]"), { recursive: true });
  for (const file of ["page.jsx", "layout.jsx"])
    await fs.copyFile(path.join(source, file), path.join(app, file));
  await fs.copyFile(
    path.join(source, "route.js"),
    path.join(app, "api", "[...path]", "route.js"),
  );
  await fs.copyFile(
    path.join(source, "workflow.json"),
    path.join(dir, "workflow.json"),
  );
  const root = JSON.parse(
    await fs.readFile(path.join(source, "..", "..", "package.json")),
  );
  await fs.writeFile(
    path.join(dir, "package.json"),
    JSON.stringify({
      private: true,
      type: "module",
      scripts: {
        dev: "next dev --webpack --hostname 0.0.0.0",
        build: "next build",
        start: "next start --hostname 0.0.0.0",
      },
      dependencies: {
        next: root.dependencies.next,
        react: root.dependencies.react,
        "react-dom": root.dependencies["react-dom"],
        pg: "8.16.3",
      },
    }),
  );
  const nodeDigest =
    "node@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5";
  const password = crypto.randomBytes(24).toString("hex"),
    bridge = crypto.randomBytes(32).toString("hex");
  const config = {
    services: {
      postgres: {
        image: PG,
        environment: {
          POSTGRES_USER: "stage",
          POSTGRES_PASSWORD: password,
          POSTGRES_DB: "stage",
        },
        networks: ["isolated"],
        healthcheck: {
          test: ["CMD-SHELL", "pg_isready -U stage"],
          interval: "2s",
          timeout: "2s",
          retries: 20,
        },
      },
      next: {
        image: nodeDigest,
        working_dir: "/app",
        command: ["npm", "run", "dev"],
        volumes: [dir + ":/app"],
        environment: {
          STAGE_ONLY: "true",
          STAGE_BRIDGE_KEY: bridge,
          STAGE_DATABASE_URL: `postgres://stage:${password}@postgres:5432/stage`,
          STAGE_N8N_URL: "http://n8n:5678/webhook/ldn-stage-intake",
          NEXT_TELEMETRY_DISABLED: "1",
          NODE_ENV: "development",
        },
        networks: ["isolated"],
        depends_on: { postgres: { condition: "service_healthy" } },
      },
      n8n: {
        image: N8N,
        volumes: [dir + "/workflow.json:/fixtures/workflow.json:ro"],
        environment: {
          N8N_DIAGNOSTICS_ENABLED: "false",
          N8N_VERSION_NOTIFICATIONS_ENABLED: "false",
          N8N_TEMPLATES_ENABLED: "false",
          N8N_BLOCK_ENV_ACCESS_IN_NODE: "false",
          NODE_FUNCTION_ALLOW_BUILTIN: "crypto",
          STAGE_BRIDGE_KEY: bridge,
          N8N_ENCRYPTION_KEY: crypto.randomBytes(32).toString("hex"),
          N8N_SECURE_COOKIE: "false",
          GENERIC_TIMEZONE: "America/New_York",
        },
        networks: ["isolated"],
      },
    },
    networks: { isolated: { internal: true }, ingress: {} },
  };
  await fs.writeFile(path.join(dir, "proxy.cjs"), proxySource);
  config.services.ingress = {
    image: nodeDigest,
    command: ["node", "/proxy.cjs"],
    volumes: [path.join(dir, "proxy.cjs") + ":/proxy.cjs:ro"],
    ports: ["127.0.0.1:13387:3000"],
    networks: ["isolated", "ingress"],
    depends_on: ["next", "n8n"],
  };
  const m = {
    dir,
    project,
    next: "http://127.0.0.1:13387",
    n8n: "http://127.0.0.1:13387/n8n",
    nodeImage: nodeDigest,
    n8nImage: N8N,
    postgresImage: PG,
  };
  await fs.writeFile(manifest, JSON.stringify(m, null, 2), { mode: 0o600 });
  // Dependency installation uses a disposable normal network before runtime exists. No secrets are passed.
  run([
    "docker",
    "run",
    "--rm",
    "-v",
    dir + ":/app",
    "-w",
    "/app",
    nodeDigest,
    "npm",
    "install",
    "--ignore-scripts",
    "--no-audit",
    "--no-fund",
  ]);
  await fs.writeFile(
    path.join(dir, "compose.json"),
    JSON.stringify(config, null, 2),
    { mode: 0o600 },
  );
  compose(m, "up", "-d", "postgres", "next", "n8n", "ingress");
  for (let i = 0; i < 90; i++) {
    try {
      if (
        (await fetch(m.n8n + "/healthz", { signal: AbortSignal.timeout(2000) }))
          .ok
      )
        break;
    } catch {}
    await sleep(1000);
  }
  compose(
    m,
    "exec",
    "-T",
    "n8n",
    "n8n",
    "import:workflow",
    "--input=/fixtures/workflow.json",
  );
  compose(
    m,
    "exec",
    "-T",
    "n8n",
    "n8n",
    "publish:workflow",
    "--id=LDNLocalOpenAIStage",
  );
  compose(m, "restart", "n8n");
  for (let i = 0; i < 90; i++) {
    try {
      if (
        (await fetch(m.next, { signal: AbortSignal.timeout(3000) })).ok &&
        (await fetch(m.n8n + "/healthz", { signal: AbortSignal.timeout(2000) }))
          .ok
      )
        break;
    } catch {}
    await sleep(1000);
  }
  console.log("STAGING_READY " + manifest);
  process.exit(0);
}
const m = JSON.parse(await fs.readFile(manifest));
if (cmd === "refresh") {
  await fs.writeFile(
    path.join(m.dir, "next.config.mjs"),
    "export default {allowedDevOrigins:['127.0.0.1','localhost']};\n",
  );
  await fs.writeFile(path.join(m.dir, "proxy.cjs"), proxySource);
  for (const file of ["page.jsx", "layout.jsx"])
    await fs.copyFile(path.join(source, file), path.join(m.dir, "app", file));
  await fs.copyFile(
    path.join(source, "route.js"),
    path.join(m.dir, "app", "api", "[...path]", "route.js"),
  );
  await fs.copyFile(
    path.join(source, "workflow.json"),
    path.join(m.dir, "workflow.json"),
  );
  const pkg = JSON.parse(await fs.readFile(path.join(m.dir, "package.json")));
  pkg.scripts.dev = "next dev --webpack --hostname 0.0.0.0";
  await fs.writeFile(path.join(m.dir, "package.json"), JSON.stringify(pkg));
  compose(
    m,
    "exec",
    "-T",
    "n8n",
    "n8n",
    "import:workflow",
    "--input=/fixtures/workflow.json",
  );
  compose(
    m,
    "exec",
    "-T",
    "n8n",
    "n8n",
    "publish:workflow",
    "--id=LDNLocalOpenAIStage",
  );
  compose(m, "restart", "next", "n8n", "ingress");
  console.log("Staging files refreshed; allow local servers to become ready.");
  process.exit(0);
}
if (cmd === "production-check") {
  const script = `const fs=require('node:fs');const cp=require('node:child_process');
  const dir='/app/.production-check';fs.mkdirSync(dir,{recursive:true});fs.cpSync('/app/app',dir+'/app',{recursive:true});fs.copyFileSync('/app/package.json',dir+'/package.json');try{fs.symlinkSync('../node_modules',dir+'/node_modules');}catch{}
  const env={...process.env,NODE_ENV:'production',NEXT_TELEMETRY_DISABLED:'1'};
  const build=cp.spawnSync(process.execPath,['/app/node_modules/next/dist/bin/next','build','--webpack'],{cwd:dir,env,encoding:'utf8'});if(build.status!==0){console.error(build.stdout,build.stderr);process.exit(1);}
  const server=cp.spawn(process.execPath,['/app/node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','3100'],{cwd:dir,env,stdio:'ignore'});
  (async()=>{try{for(let i=0;i<50;i++){try{const response=await fetch('http://127.0.0.1:3100/api/submit',{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});const body=await response.json();if(response.status!==404||body.error!=='staging_disabled')throw Error('production did not fail closed');console.log(JSON.stringify({productionModeDenied:true,stagingFlagStillTrue:env.STAGE_ONLY==='true',buildPassed:true}));return;}catch(e){if(e.message==='production did not fail closed')throw e;await new Promise(r=>setTimeout(r,200));}}throw Error('production server unavailable');}catch(e){console.error(e.message);process.exitCode=1;}finally{server.kill('SIGTERM');}})();`;
  const result = run(
    [
      "docker",
      "compose",
      "-p",
      m.project,
      "-f",
      path.join(m.dir, "compose.json"),
      "exec",
      "-T",
      "next",
      "node",
      "-e",
      script,
    ],
    { quiet: true },
  );
  await fs.writeFile(path.join(m.dir, "production-check.json"), result);
  console.log(result);
  process.exit(0);
}
if (cmd === "test") {
  const results = [];
  let serial = 0;
  const api = async (p, b) => {
    const r = await fetch(m.next + "/api/" + p, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(b),
    });
    return { ...(await r.json()), httpStatus: r.status };
  };
  const assert = (v, msg) => {
    if (!v) throw Error(msg);
  };
  const fixture = async (scenario = "eligible") => {
    const p = {
      eventId: "QA_STAGE_TEST_" + Date.now() + "_" + ++serial,
      scenario,
      actionTimestampMs: Date.now(),
      consentAtSubmit: true,
    };
    return { payload: p, ...(await api("submit", p)) };
  };
  async function status(s) {
    for (let i = 0; i < 80; i++) {
      const r = await api("status", s);
      if (!["pending"].includes(r.state)) return r;
      await sleep(100);
    }
    throw Error("receipt_timeout");
  }
  async function dispatch(s, { consent = true } = {}) {
    const r = await status(s);
    if (r.state !== "crm_request_confirmed" || !consent) return r;
    const c = await api("dispatch", { ...s, receipt: r.receipt, consent });
    if (c.ok) await api("mock-event", { ...s, event: c.event, token: c.token });
    return c;
  }
  async function test(name, fn) {
    try {
      await fn();
      results.push({ name, status: "PASS" });
    } catch (e) {
      results.push({ name, status: "FAIL", error: e.message });
    }
  }
  await test("eligible real n8n execution -> one request/event", async () => {
    const s = await fixture();
    await dispatch(s);
    const t = await api("stats", s);
    assert(
      t.requests === 1 &&
        t.events === 1 &&
        t.request_attempts === 1 &&
        t.event_attempts === 1 &&
        /^\d+$/.test(t.execution_id),
      "missing actual n8n execution/request/event",
    );
    assert(
      !t.qualified && !t.visit_scheduled && t.customer_sends === 0,
      "business stage leak",
    );
  });
  for (const scenario of [
    "failed",
    "conflict",
    "shared_phone",
    "insufficient",
    "lost_response",
  ])
    await test(scenario + " -> no browser conversion", async () => {
      const s = await fixture(scenario);
      assert(s.success, "form not accepted");
      await dispatch(s);
      const t = await api("stats", s);
      assert(t.events === 0 && t.event_attempts === 0, "premature event");
      if (["failed", "lost_response"].includes(scenario))
        assert(t.request_attempts === 1, "provider retried");
      if (["conflict", "shared_phone", "insufficient"].includes(scenario))
        assert(
          t.requests === 0 &&
            t.request_attempts === 0 &&
            t.state === "identity_review_required",
          "identity escaped",
        );
    });
  await test("delayed receipt waits then emits once", async () => {
    const s = await fixture("delayed");
    await dispatch(s);
    const t = await api("stats", s);
    assert(
      t.requests === 1 &&
        t.events === 1 &&
        t.request_attempts === 1 &&
        t.event_attempts === 1,
      "delayed failed",
    );
  });
  await test("serial and concurrent replay retain unique claim", async () => {
    const s = await fixture();
    await Promise.all(
      Array.from({ length: 8 }, () => api("submit", s.payload)),
    );
    await Promise.all(Array.from({ length: 8 }, () => dispatch(s)));
    await dispatch(s);
    const t = await api("stats", s);
    assert(
      t.requests === 1 &&
        t.events === 1 &&
        t.request_attempts === 1 &&
        t.event_attempts === 1,
      "duplicate effects",
    );
  });
  await test("payload conflict held", async () => {
    const s = await fixture();
    const r = await api("submit", {
      ...s.payload,
      actionTimestampMs: s.payload.actionTimestampMs + 1,
    });
    assert(r.httpStatus === 409, "payload conflict accepted");
  });
  await test("revoked consent suppresses browser dispatch", async () => {
    const s = await fixture();
    await dispatch(s, { consent: false });
    assert((await api("stats", s)).events === 0, "revocation ignored");
  });
  await test("original refusal cannot be replayed after later acceptance", async () => {
    const payload = {
      eventId: "QA_STAGE_DENIED_" + Date.now(),
      scenario: "eligible",
      actionTimestampMs: Date.now(),
      consentAtSubmit: false,
    };
    const s = { ...payload, ...(await api("submit", payload)) };
    await dispatch(s, { consent: true });
    assert((await api("stats", s)).events === 0, "retroactive consent replay");
  });
  await test("forged browser receipt denied", async () => {
    const s = await fixture();
    await status(s);
    const r = await api("dispatch", { ...s, receipt: "forged", consent: true });
    assert(r.httpStatus === 409, "forged receipt accepted");
  });
  await test("unauthenticated bridge denied", async () => {
    const r = await api("bridge/claim", {
      eventId: "QA_STAGE_FAKE",
      executionId: "1",
    });
    assert(r.httpStatus === 401, "bridge unauthenticated");
  });
  const cfg = JSON.parse(await fs.readFile(path.join(m.dir, "compose.json"))),
    secret = cfg.services.next.environment.STAGE_BRIDGE_KEY;
  const signed = async (
    p,
    b,
    {
      timestamp = Date.now(),
      nonce = crypto.randomUUID(),
      signaturePath = p,
    } = {},
  ) => {
    const raw = JSON.stringify(b),
      sig = crypto
        .createHmac("sha256", secret)
        .update(`${timestamp}.${nonce}.POST./api/${signaturePath}.${raw}`)
        .digest("hex");
    const r = await fetch(m.next + "/api/" + p, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-stage-time": String(timestamp),
        "x-stage-nonce": nonce,
        "x-stage-signature": sig,
      },
      body: raw,
    });
    return r.status;
  };
  await test("stale authenticated bridge denied", async () =>
    assert(
      (await signed(
        "bridge/claim",
        { eventId: "QA_STAGE_STALE", executionId: "1" },
        { timestamp: Date.now() - 120000 },
      )) === 401,
      "stale accepted",
    ));
  await test("nonce replay denied atomically", async () => {
    const n = crypto.randomUUID(),
      t = Date.now(),
      b = {
        eventId: "QA_STAGE_NONCE",
        executionId: "1",
        intakeNonce: crypto.randomUUID(),
      };
    const r = await Promise.all([
      signed("bridge/claim", b, { nonce: n, timestamp: t }),
      signed("bridge/claim", b, { nonce: n, timestamp: t }),
    ]);
    assert(r.filter((v) => v === 401).length === 1, "nonce not unique");
  });
  await test("signature bound to path", async () =>
    assert(
      (await signed(
        "bridge/complete",
        { eventId: "QA_STAGE_PATH", executionId: "1" },
        { signaturePath: "bridge/claim" },
      )) === 401,
      "path mismatch accepted",
    ));
  const sql = (query) =>
    run(
      [
        "docker",
        "compose",
        "-p",
        m.project,
        "-f",
        path.join(m.dir, "compose.json"),
        "exec",
        "-T",
        "postgres",
        "psql",
        "-U",
        "stage",
        "-d",
        "stage",
        "-Atc",
        query,
      ],
      { quiet: true },
    ).trim();
  await test("claim winner owns callback under concurrency", async () => {
    const id = "QA_STAGE_OWNER_" + Date.now(),
      time = Date.now(),
      proof = crypto
        .createHmac("sha256", secret)
        .update(`submission:${id}:${time}`)
        .digest("hex");
    sql(
      `INSERT INTO stage_operations(event_id,digest,scenario,action_ms,proof,consent_at_submit) VALUES('${id}','local-fixture','eligible',${time},'${proof}',true)`,
    );
    await Promise.all(
      ["10001", "10002"].map((executionId) =>
        signed("bridge/claim", {
          eventId: id,
          executionId,
          intakeNonce: crypto.randomUUID(),
        }),
      ),
    );
    const winner = sql(
        `SELECT execution_id FROM stage_operations WHERE event_id='${id}'`,
      ),
      loser = winner === "10001" ? "10002" : "10001";
    assert(
      (await signed("bridge/mock-jobber-create", {
        eventId: id,
        executionId: loser,
      })) === 409,
      "loser created request",
    );
    assert(
      (await signed("bridge/mock-jobber-create", {
        eventId: id,
        executionId: winner,
      })) === 200,
      "winner create denied",
    );
    assert(
      (await signed("bridge/complete", {
        eventId: id,
        executionId: loser,
        actionTimestampMs: time,
        state: "crm_request_confirmed",
        requestId: "MOCK-REQUEST-" + id,
      })) === 409,
      "loser completed",
    );
    assert(
      (await signed("bridge/complete", {
        eventId: id,
        executionId: winner,
        actionTimestampMs: time,
        state: "crm_request_confirmed",
        requestId: "MOCK-REQUEST-" + id,
      })) === 200,
      "winner completion denied",
    );
  });
  await test("signed malformed intake timestamp rejected before effects", async () => {
    const id = "QA_STAGE_NAN_" + Date.now(),
      body = JSON.stringify({ eventId: id, actionTimestampMs: Date.now() }),
      nonce = crypto.randomUUID(),
      t = "NaN";
    const sig = crypto
      .createHmac("sha256", secret)
      .update(`${t}.${nonce}.POST./webhook/ldn-stage-intake.${body}`)
      .digest("hex");
    await fetch(m.n8n + "/webhook/ldn-stage-intake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-stage-time": t,
        "x-stage-nonce": nonce,
        "x-stage-signature": sig,
      },
      body,
    });
    assert(
      sql(`SELECT count(*) FROM stage_mock_requests WHERE event_id='${id}'`) ===
        "0",
      "malformed intake caused effects",
    );
  });
  await test("original intake nonce cannot be replayed through real n8n", async () => {
    const id = "QA_STAGE_INTAKE_" + Date.now(),
      time = Date.now(),
      proof = crypto
        .createHmac("sha256", secret)
        .update(`submission:${id}:${time}`)
        .digest("hex");
    sql(
      `INSERT INTO stage_operations(event_id,digest,scenario,action_ms,proof,consent_at_submit) VALUES('${id}','local-fixture','eligible',${time},'${proof}',true)`,
    );
    const body = JSON.stringify({ eventId: id, actionTimestampMs: time }),
      nonce = crypto.randomUUID(),
      t = String(Date.now()),
      sig = crypto
        .createHmac("sha256", secret)
        .update(`${t}.${nonce}.POST./webhook/ldn-stage-intake.${body}`)
        .digest("hex");
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-stage-time": t,
        "x-stage-nonce": nonce,
        "x-stage-signature": sig,
      },
      body,
    };
    await fetch(m.n8n + "/webhook/ldn-stage-intake", request);
    await fetch(m.n8n + "/webhook/ldn-stage-intake", request);
    assert(
      sql(`SELECT count(*) FROM stage_nonces WHERE nonce='intake:${nonce}'`) ===
        "1",
      "intake nonce not registered",
    );
    assert(
      sql(`SELECT count(*) FROM stage_mock_requests WHERE event_id='${id}'`) ===
        "1",
      "intake replay duplicated request",
    );
  });
  const report = {
    mode: "ACTUAL_NEXT_N8N_POSTGRES_LOCAL_MOCK",
    passed: results.filter((r) => r.status === "PASS").length,
    total: results.length,
    results,
    images: { next: m.nodeImage, n8n: m.n8nImage, postgres: m.postgresImage },
    native_received_events: null,
    attributed_conversions: null,
  };
  await fs.writeFile(
    path.join(m.dir, "results.json"),
    JSON.stringify(report, null, 2),
  );
  console.log(JSON.stringify(report, null, 2));
  if (report.passed !== report.total) process.exitCode = 1;
} else if (cmd === "logs") compose(m, "logs", "--tail", "80");
else throw Error("Use up, test, logs, or down");
