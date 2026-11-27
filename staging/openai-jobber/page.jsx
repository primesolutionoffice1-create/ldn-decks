"use client";
import { useEffect, useRef, useState } from "react";
const post = async (path, body) => {
  const r = await fetch("/api/" + path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const v = await r.json();
  return { ...v, httpStatus: r.status };
};
export default function Page() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const [scenario, setScenario] = useState("eligible"),
    [consent, setConsent] = useState(true),
    [result, setResult] = useState(null),
    [running, setRunning] = useState(false);
  const currentConsent = useRef(true);
  const submission = useRef(null);
  async function submit(e) {
    e.preventDefault();
    setRunning(true);
    try {
      const form = submission.current || {
        eventId: "QA_STAGE_BROWSER_" + crypto.randomUUID().replaceAll("-", ""),
        actionTimestampMs: Date.now(),
        scenario,
        consentAtSubmit: currentConsent.current,
      };
      submission.current = form;
      const accepted = await post("submit", form);
      setResult({ formAccepted: accepted.success, state: "pending" });
      for (let i = 0; i < 40; i++) {
        if (!currentConsent.current) {
          setResult({
            formAccepted: accepted.success,
            state: "consent_suppressed",
          });
          return;
        }
        const receipt = await post("status", accepted);
        if (receipt.state === "pending") {
          await new Promise((r) => setTimeout(r, 250));
          continue;
        }
        if (receipt.state !== "crm_request_confirmed") {
          setResult({
            formAccepted: accepted.success,
            ...(await post("stats", accepted)),
          });
          return;
        }
        if (!currentConsent.current) return;
        const claim = await post("dispatch", {
          ...accepted,
          receipt: receipt.receipt,
          consent: currentConsent.current,
        });
        if (claim.ok && currentConsent.current)
          await post("mock-event", {
            ...accepted,
            event: claim.event,
            token: claim.token,
          });
        setResult({
          formAccepted: accepted.success,
          ...(await post("stats", accepted)),
        });
        return;
      }
      setResult({ state: "pending_no_event" });
    } finally {
      setRunning(false);
    }
  }
  return (
    <main>
      <h1>LDN — Next.js → n8n → registru → browser</h1>
      <p style={{ background: "#fff1c9", padding: 18 }}>
        STAGING LOCAL · Date fictive · Mock Jobber/OpenAI · Fără mesaje reale
      </p>
      <p role="status">
        {hydrated
          ? "React staging client ready"
          : "React staging client loading"}
      </p>
      <form onSubmit={submit}>
        <label>
          Scenariu{" "}
          <select
            value={scenario}
            onChange={(e) => {
              setScenario(e.target.value);
              submission.current = null;
              setResult(null);
            }}
          >
            {[
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
            ].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </label>
        <label style={{ margin: 20 }}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              currentConsent.current = e.target.checked;
            }}
          />{" "}
          Consimțământ mock
        </label>
        <button disabled={running || !hydrated} style={{ padding: 12 }}>
          {running ? "Verific…" : "Trimite formularul fictiv"}
        </button>
      </form>
      <pre style={{ whiteSpace: "pre-wrap", background: "white", padding: 24 }}>
        {result ? JSON.stringify(result, null, 2) : "Pregătit pentru test."}
      </pre>
    </main>
  );
}
