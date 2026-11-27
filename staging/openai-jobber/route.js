import crypto from "node:crypto";
import pg from "pg";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
let pool;
let initPromise;
const db = () =>
  (pool ||= new pg.Pool({
    connectionString: process.env.STAGE_DATABASE_URL,
    max: 10,
  }));
const key = () => process.env.STAGE_BRIDGE_KEY;
const send = (data, status = 200) =>
  Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
const sign = (v) => crypto.createHmac("sha256", key()).update(v).digest("hex");
const digest = (v) =>
  crypto.createHash("sha256").update(JSON.stringify(v)).digest("hex");
function guard() {
  if (
    process.env.NODE_ENV === "production" ||
    process.env.VERCEL_ENV === "production" ||
    process.env.STAGE_ONLY !== "true" ||
    !key() ||
    !process.env.STAGE_DATABASE_URL?.startsWith("postgres://stage:")
  )
    throw Error("STAGING_DISABLED");
}
async function init() {
  return (initPromise ||= db().query(
    `CREATE TABLE IF NOT EXISTS stage_operations(event_id text PRIMARY KEY,digest text NOT NULL,scenario text NOT NULL,action_ms bigint NOT NULL,state text NOT NULL DEFAULT 'pending',disposition text NOT NULL DEFAULT 'unreviewed',execution_id text,request_id text,dispatch_state text NOT NULL DEFAULT 'none',proof text NOT NULL,consent_at_submit boolean NOT NULL);CREATE TABLE IF NOT EXISTS stage_provider_attempts(id bigserial PRIMARY KEY,event_id text NOT NULL);CREATE TABLE IF NOT EXISTS stage_event_attempts(id bigserial PRIMARY KEY,event_id text NOT NULL);CREATE TABLE IF NOT EXISTS stage_nonces(nonce text PRIMARY KEY,created_at timestamptz NOT NULL DEFAULT now());CREATE TABLE IF NOT EXISTS stage_mock_requests(event_id text PRIMARY KEY,request_id text UNIQUE NOT NULL);CREATE TABLE IF NOT EXISTS stage_mock_events(event_id text PRIMARY KEY,action_ms bigint NOT NULL,event_type text NOT NULL DEFAULT 'lead_created',received_at timestamptz NOT NULL DEFAULT now());CREATE TABLE IF NOT EXISTS stage_mock_mail_calls(id bigserial PRIMARY KEY,event_id text NOT NULL,execution_id text NOT NULL);CREATE TABLE IF NOT EXISTS stage_mock_mail_attempts(id bigserial PRIMARY KEY,event_id text NOT NULL,execution_id text NOT NULL);CREATE TABLE IF NOT EXISTS stage_mock_mail_received(event_id text PRIMARY KEY,execution_id text NOT NULL);CREATE TABLE IF NOT EXISTS stage_diagnostics(event_id text PRIMARY KEY,execution_id text NOT NULL,decision text NOT NULL,reason text NOT NULL,headline text NOT NULL,service text NOT NULL,authoritative_reject boolean NOT NULL,budget_known boolean NOT NULL,authoritative_score integer);CREATE TABLE IF NOT EXISTS stage_executions(event_id text PRIMARY KEY,execution_id text NOT NULL);`,
  ));
}
const proofFor = (id, time) => sign(`submission:${id}:${time}`);
async function operation(id, proof) {
  const r = await db().query(
    "SELECT * FROM stage_operations WHERE event_id=$1",
    [id],
  );
  const row = r.rows[0];
  if (
    !row ||
    typeof proof !== "string" ||
    !/^[a-f0-9]{64}$/.test(proof) ||
    !crypto.timingSafeEqual(Buffer.from(proof), Buffer.from(row.proof))
  )
    return null;
  return row;
}
async function authenticate(req, raw, path) {
  const t = req.headers.get("x-stage-time"),
    nonce = req.headers.get("x-stage-nonce"),
    sig = req.headers.get("x-stage-signature");
  if (
    !t ||
    !/^\d+$/.test(t) ||
    Math.abs(Date.now() - Number(t)) > 60000 ||
    !nonce ||
    !/^[-a-zA-Z0-9]{16,100}$/.test(nonce) ||
    !sig ||
    !/^([a-f0-9]{64})$/.test(sig)
  )
    return false;
  const expected = sign(`${t}.${nonce}.POST.${path}.${raw}`);
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected)))
    return false;
  const r = await db().query(
    "INSERT INTO stage_nonces(nonce) VALUES($1) ON CONFLICT DO NOTHING RETURNING nonce",
    [nonce],
  );
  return r.rowCount === 1;
}
function signedRequest(path, body) {
  const raw = JSON.stringify(body),
    t = String(Date.now()),
    nonce = crypto.randomUUID();
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-stage-time": t,
      "x-stage-nonce": nonce,
      "x-stage-signature": sign(`${t}.${nonce}.POST.${path}.${raw}`),
    },
    body: raw,
  };
}
export async function POST(req, { params }) {
  try {
    guard();
    await init();
    const path = "/api/" + (await params).path.join("/");
    const raw = await req.text();
    if (raw.length > 10000) return send({ error: "too_large" }, 413);
    const data = JSON.parse(raw);
    if (path.startsWith("/api/bridge/")) {
      if (!(await authenticate(req, raw, path)))
        return send({ error: "unauthorized_or_replay" }, 401);
      const { eventId, executionId } = data;
      if (
        !/^QA_STAGE_[A-Za-z0-9_-]{1,120}$/.test(eventId || "") ||
        !/^\d+$/.test(String(executionId))
      )
        return send({ error: "invalid_bridge_payload" }, 400);
      if (path === "/api/bridge/claim") {
        if (!/^[a-f0-9-]{36}$/.test(data.intakeNonce || ""))
          return send({ error: "invalid_intake_nonce" }, 400);
        const intake = await db().query(
          "INSERT INTO stage_nonces(nonce) VALUES($1) ON CONFLICT DO NOTHING RETURNING nonce",
          ["intake:" + data.intakeNonce],
        );
        if (!intake.rowCount) return send({ error: "intake_replay" }, 401);
        const r = await db().query(
          "UPDATE stage_operations SET state='processing',execution_id=$2 WHERE event_id=$1 AND state='pending' RETURNING *",
          [eventId, String(executionId)],
        );
        if (!r.rowCount)
          return send({
            accepted: false,
            state: "duplicate_or_unknown",
            eventId,
          });
        const row = r.rows[0];
        await db().query(
          "INSERT INTO stage_executions(event_id,execution_id) VALUES($1,$2) ON CONFLICT DO NOTHING",
          [eventId, String(executionId)],
        );
        return send({
          accepted: row.state === "processing",
          state: row.state,
          eventId,
          scenario: row.scenario,
          actionTimestampMs: Number(row.action_ms),
          executionId: String(executionId),
        });
      }
      if (path === "/api/bridge/disposition") {
        if (
          !["accept", "reject", "review"].includes(data.decision) ||
          ![
            "eligible_service",
            "authoritative_reject",
            "other_service_manual_review",
          ].includes(data.reason) ||
          (data.authoritativeReject === true && data.decision !== "reject") ||
          !["Warm", "Low confidence"].includes(data.headline) ||
          !["Other", "Deck replacement"].includes(data.service)
        ) {
          return send({ error: "invalid_disposition" }, 409);
        }
        const c = await db().connect();
        try {
          await c.query("BEGIN");
          const r = await c.query(
            "SELECT * FROM stage_operations WHERE event_id=$1 FOR UPDATE",
            [eventId],
          );
          const row = r.rows[0];
          if (
            !row ||
            row.state !== "processing" ||
            row.execution_id !== String(executionId) ||
            row.disposition !== "unreviewed"
          )
            throw Error("not_disposition_owner");
          const state =
            data.decision === "reject"
              ? "rejected"
              : data.decision === "review"
                ? "manual_review_required"
                : "processing";
          await c.query(
            "UPDATE stage_operations SET disposition=$2,state=$3 WHERE event_id=$1",
            [eventId, data.decision, state],
          );
          if (data.decision !== "accept") {
            await c.query(
              "INSERT INTO stage_diagnostics(event_id,execution_id,decision,reason,headline,service,authoritative_reject,budget_known,authoritative_score) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)",
              [
                eventId,
                String(executionId),
                data.decision,
                data.reason,
                data.headline,
                data.service,
                data.authoritativeReject === true,
                data.budgetKnown === true,
                Number.isInteger(data.authoritativeScore)
                  ? data.authoritativeScore
                  : null,
              ],
            );
          }
          await c.query("COMMIT");
          return send({
            accepted: data.decision === "accept",
            state,
            decision: data.decision,
            eventId,
            executionId: String(executionId),
            scenario: row.scenario,
            actionTimestampMs: Number(row.action_ms),
          });
        } catch {
          await c.query("ROLLBACK");
          return send({ error: "invalid_disposition_transition" }, 409);
        } finally {
          c.release();
        }
      }
      if (path === "/api/bridge/mock-mail") {
        await db().query(
          "INSERT INTO stage_mock_mail_calls(event_id,execution_id) VALUES($1,$2)",
          [eventId, String(executionId)],
        );
        const row = (
          await db().query("SELECT * FROM stage_operations WHERE event_id=$1", [
            eventId,
          ])
        ).rows[0];
        if (
          !row ||
          row.state !== "processing" ||
          row.disposition !== "accept" ||
          row.execution_id !== String(executionId) ||
          row.scenario !== "mail_positive_control" ||
          data.syntheticApproval !== true
        ) {
          return send({ error: "mock_mail_gate_closed" }, 409);
        }
        // Instrumented local stand-in for an EXTERNAL send; no SMTP or mail credentials exist.
        await db().query(
          "INSERT INTO stage_mock_mail_attempts(event_id,execution_id) VALUES($1,$2)",
          [eventId, String(executionId)],
        );
        const c = await db().connect();
        try {
          await c.query("BEGIN");
          await c.query(
            "INSERT INTO stage_mock_mail_received(event_id,execution_id) VALUES($1,$2)",
            [eventId, String(executionId)],
          );
          await c.query(
            "UPDATE stage_operations SET state='mock_mail_control_complete' WHERE event_id=$1",
            [eventId],
          );
          await c.query("COMMIT");
          return send({
            ok: true,
            state: "mock_mail_control_complete",
            eventId,
          });
        } catch {
          await c.query("ROLLBACK");
          return send({ error: "mock_mail_already_recorded" }, 409);
        } finally {
          c.release();
        }
      }
      if (path === "/api/bridge/mock-jobber-create") {
        const row = (
          await db().query("SELECT * FROM stage_operations WHERE event_id=$1", [
            eventId,
          ])
        ).rows[0];
        if (
          !row ||
          row.state !== "processing" ||
          row.disposition !== "accept" ||
          row.execution_id !== String(executionId)
        )
          return send({ error: "not_owner" }, 409);
        await db().query(
          "INSERT INTO stage_provider_attempts(event_id) VALUES($1)",
          [eventId],
        );
        if (row.scenario === "failed")
          return send({ error: "mock_provider_unavailable" }, 503);
        if (row.scenario === "delayed")
          await new Promise((r) => setTimeout(r, 600));
        const requestId = "MOCK-REQUEST-" + eventId;
        await db().query(
          "INSERT INTO stage_mock_requests(event_id,request_id) VALUES($1,$2) ON CONFLICT DO NOTHING",
          [eventId, requestId],
        );
        if (row.scenario === "lost_response")
          return send({ error: "mock_committed_response_lost" }, 504);
        return send({ requestId, eventId });
      }
      if (path === "/api/bridge/complete") {
        const c = await db().connect();
        try {
          await c.query("BEGIN");
          const r = await c.query(
            "SELECT * FROM stage_operations WHERE event_id=$1 FOR UPDATE",
            [eventId],
          );
          const row = r.rows[0];
          if (
            !row ||
            row.execution_id !== String(executionId) ||
            row.state !== "processing" ||
            row.disposition !== "accept" ||
            String(data.actionTimestampMs) !== String(row.action_ms) ||
            ![
              "crm_request_confirmed",
              "unknown",
              "identity_review_required",
            ].includes(data.state)
          )
            throw Error("invalid_transition");
          if (data.requestId) {
            if (data.requestId !== `MOCK-REQUEST-${eventId}`)
              throw Error("invalid_request");
            const provider = await c.query(
              "SELECT request_id FROM stage_mock_requests WHERE event_id=$1",
              [eventId],
            );
            if (provider.rows[0]?.request_id !== data.requestId)
              throw Error("missing_provider_receipt");
          }
          if (data.state === "crm_request_confirmed" && !data.requestId)
            throw Error("missing_receipt");
          await c.query(
            "UPDATE stage_operations SET state=$2,request_id=$3 WHERE event_id=$1",
            [eventId, data.state, data.requestId || null],
          );
          await c.query("COMMIT");
          return send({ ok: true, state: data.state, eventId });
        } catch (e) {
          await c.query("ROLLBACK");
          return send({ error: "invalid_transition" }, 409);
        } finally {
          c.release();
        }
      }
      return send({ error: "unknown_bridge_route" }, 404);
    }
    if (path === "/api/submit") {
      const { eventId, scenario, actionTimestampMs, consentAtSubmit } = data;
      if (
        !/^QA_STAGE_[A-Za-z0-9_-]{1,120}$/.test(eventId || "") ||
        ![
          "eligible",
          "failed",
          "conflict",
          "shared_phone",
          "insufficient",
          "delayed",
          "lost_response",
          "vendor_other_reject",
          "legitimate_other",
          "mail_positive_control",
        ].includes(scenario) ||
        !Number.isSafeInteger(actionTimestampMs) ||
        actionTimestampMs <= 0
      )
        return send({ error: "synthetic_fixture_only" }, 400);
      const d = digest({
          eventId,
          scenario,
          actionTimestampMs,
          consentAtSubmit: consentAtSubmit === true,
        }),
        proof = proofFor(eventId, actionTimestampMs);
      const r = await db().query(
        "INSERT INTO stage_operations(event_id,digest,scenario,action_ms,proof,consent_at_submit) VALUES($1,$2,$3,$4,$5,$6) ON CONFLICT DO NOTHING RETURNING event_id",
        [
          eventId,
          d,
          scenario,
          actionTimestampMs,
          proof,
          consentAtSubmit === true,
        ],
      );
      if (!r.rowCount) {
        const row = (
          await db().query(
            "SELECT digest FROM stage_operations WHERE event_id=$1",
            [eventId],
          )
        ).rows[0];
        if (row.digest !== d)
          return send({ state: "payload_conflict_review" }, 409);
        return send({ success: true, eventId, proof, replay: true });
      }
      // n8n is a real local engine. Only this fixed Docker-internal target is allowed.
      if (
        process.env.STAGE_N8N_URL !== "http://n8n:5678/webhook/ldn-stage-intake"
      )
        throw Error("invalid_n8n_target");
      const request = signedRequest("/webhook/ldn-stage-intake", {
        eventId,
        actionTimestampMs,
      });
      fetch(process.env.STAGE_N8N_URL, request)
        .then((r) => {
          if (!r.ok) throw Error("n8n_failed");
        })
        .catch(() =>
          db().query(
            "UPDATE stage_operations SET state='unknown' WHERE event_id=$1 AND state='pending'",
            [eventId],
          ),
        );
      return send({ success: true, eventId, proof });
    }
    const row = await operation(data.eventId, data.proof || "");
    if (!row) return send({ error: "invalid_proof" }, 401);
    if (path === "/api/status")
      return send({
        eventId: row.event_id,
        state: row.state === "processing" ? "pending" : row.state,
        receipt:
          row.state === "crm_request_confirmed"
            ? sign(`receipt:${row.event_id}:${row.request_id}:${row.action_ms}`)
            : null,
      });
    if (path === "/api/dispatch") {
      const receipt = sign(
        `receipt:${row.event_id}:${row.request_id}:${row.action_ms}`,
      );
      if (
        !row.consent_at_submit ||
        data.consent !== true ||
        data.receipt !== receipt ||
        row.state !== "crm_request_confirmed"
      )
        return send({ state: "unverified" }, 409);
      const r = await db().query(
        "UPDATE stage_operations SET dispatch_state='claimed' WHERE event_id=$1 AND state='crm_request_confirmed' AND dispatch_state='none' RETURNING event_id",
        [row.event_id],
      );
      if (!r.rowCount) return send({ state: "already_claimed" }, 409);
      return send({
        ok: true,
        event: {
          event_type: "lead_created",
          event_id: row.event_id,
          action_timestamp_ms: Number(row.action_ms),
          opt_out: true,
        },
        token: sign(`dispatch:${row.event_id}`),
      });
    }
    if (path === "/api/mock-event") {
      const e = data.event;
      if (
        !e ||
        e.event_id !== row.event_id ||
        e.event_type !== "lead_created" ||
        e.action_timestamp_ms !== Number(row.action_ms) ||
        e.opt_out !== true ||
        Object.keys(e).sort().join(",") !==
          "action_timestamp_ms,event_id,event_type,opt_out" ||
        row.dispatch_state !== "claimed" ||
        data.token !== sign(`dispatch:${row.event_id}`)
      )
        return send({ error: "invalid_event" }, 409);
      await db().query(
        "INSERT INTO stage_event_attempts(event_id) VALUES($1)",
        [row.event_id],
      );
      const r = await db().query(
        "INSERT INTO stage_mock_events(event_id,action_ms) VALUES($1,$2) ON CONFLICT DO NOTHING RETURNING event_id",
        [row.event_id, row.action_ms],
      );
      return send({ ok: true, received_mock: Boolean(r.rowCount) });
    }
    if (path === "/api/stats") {
      const r = await db().query(
        "SELECT (SELECT count(*)::int FROM stage_mock_mail_calls WHERE event_id=$1) mail_transport_calls,(SELECT count(*)::int FROM stage_mock_events WHERE event_id=$1 AND event_type='lead_qualified') qualified_conversions,(SELECT count(*)::int FROM stage_mock_mail_attempts WHERE event_id=$1) mail_attempts,(SELECT count(*)::int FROM stage_mock_mail_received WHERE event_id=$1) customer_sends,(SELECT count(*)::int FROM stage_diagnostics WHERE event_id=$1) internal_diagnostics,(SELECT decision FROM stage_diagnostics WHERE event_id=$1) diagnostic_decision,(SELECT reason FROM stage_diagnostics WHERE event_id=$1) diagnostic_reason,(SELECT execution_id FROM stage_diagnostics WHERE event_id=$1) diagnostic_execution_id,(SELECT headline FROM stage_diagnostics WHERE event_id=$1) diagnostic_headline,(SELECT service FROM stage_diagnostics WHERE event_id=$1) diagnostic_service,(SELECT authoritative_reject FROM stage_diagnostics WHERE event_id=$1) diagnostic_authoritative_reject,(SELECT budget_known FROM stage_diagnostics WHERE event_id=$1) diagnostic_budget_known,(SELECT authoritative_score FROM stage_diagnostics WHERE event_id=$1) diagnostic_authoritative_score,(SELECT count(*)::int FROM stage_provider_attempts WHERE event_id=$1) request_attempts,(SELECT count(*)::int FROM stage_event_attempts WHERE event_id=$1) event_attempts,(SELECT count(*)::int FROM stage_mock_requests WHERE event_id=$1) requests,(SELECT count(*)::int FROM stage_mock_events WHERE event_id=$1) events,(SELECT execution_id FROM stage_executions WHERE event_id=$1) execution_id",
        [row.event_id],
      );
      return send({
        ...r.rows[0],
        state: row.state,
        dispatch_state: row.dispatch_state,
        qualified: false,
        visit_scheduled: false,
        disposition: row.disposition,
        customer_writes: r.rows[0].customer_sends,
      });
    }
    return send({ error: "not_found" }, 404);
  } catch (e) {
    return send(
      {
        error:
          e.message === "STAGING_DISABLED"
            ? "staging_disabled"
            : "staging_error",
      },
      e.message === "STAGING_DISABLED" ? 404 : 500,
    );
  }
}
