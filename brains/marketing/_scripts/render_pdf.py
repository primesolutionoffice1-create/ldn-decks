#!/usr/bin/env python3
"""Render the ULTIMATE BEAST Plan PDF with full editorial-template slot fill.

Why this exists
---------------
The canonical ``render_beast_pdf.py`` in the marketing-brain skill only fills
basic placeholders (``client_name``, ``site_url``, ``date``, ``plan_body``,
``plan_css``) and keeps an ``HTML_ALLOWED_VARS`` allowlist that defaults to
escaping everything else as a defense against hostile placeholder values.
The editorial template at ``assets/beast-pdf.html`` references ~50 structured
slots (cover, TL;DR, KPI strip, tables, callouts, FLOW two-col blocks, day
blocks, signoff). Without those slots filled, the rendered PDF shows literal
``{{slot_name}}`` strings on the cover and inside section bodies.

This v2 renderer reads a pre-composed slot JSON (typically written by an
editorial-composer subagent against the BEAST plan markdown and populated
wiki notes), substitutes every placeholder, and shells out to WeasyPrint
the same way the canonical renderer does.

Trust posture
-------------
The slot JSON contains HTML fragments. We DO NOT escape them — the composing
subagent is trusted first-party. The HTML must come from the composer, not
from end-user input. ``--base-url about:blank`` is still passed to WeasyPrint
so any stray ``url(...)`` in the HTML cannot exfiltrate.

Usage
-----
    python _scripts/render_pdf.py \
        --vault <vault-root> \
        --slots <slot-json-path>            # default: <vault>/.raw/sources/beast-plan-slots-<date>.json
        --template <template-html-path>     # default: skill's beast-pdf.html
        --css <css-path>                    # default: skill's editorial-pdf.css
        --out <pdf-path>                    # default: <vault>/<client-slug>-Beast-Plan.pdf
        --weasyprint <path>                 # default: ~/.local/bin/weasyprint
"""

from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from datetime import date
from pathlib import Path

PLACEHOLDER_RE = re.compile(r"\{\{\s*([a-zA-Z0-9_.-]+)\s*\}\}")

DEFAULT_SKILL = Path.home() / ".claude" / "skills" / "marketing-brain"
DEFAULT_WEASY = Path.home() / ".local" / "bin" / "weasyprint"


def substitute(text: str, slots: dict[str, str]) -> tuple[str, list[str]]:
    """Substitute every ``{{key}}`` with ``slots[key]``. Returns the rendered
    text and a list of keys that were referenced in the template but missing
    from ``slots`` (for diagnostic reporting)."""
    missing: list[str] = []

    def repl(m: re.Match[str]) -> str:
        key = m.group(1)
        if key in slots:
            return str(slots[key])
        missing.append(key)
        return m.group(0)

    return PLACEHOLDER_RE.sub(repl, text), missing


def detect_client_slug(vault: Path) -> str:
    manifest = vault / ".raw" / ".manifest.json"
    if manifest.exists():
        try:
            data = json.loads(manifest.read_text(encoding="utf-8"))
            hist = data.get("scaffold_history") or []
            if hist:
                slug = hist[-1].get("client_slug")
                if slug:
                    return slug
        except (OSError, ValueError):
            pass
    return vault.name


def find_default_slots(vault: Path) -> Path:
    slots_dir = vault / ".raw" / "sources"
    candidates = sorted(slots_dir.glob("beast-plan-slots-*.json"), reverse=True)
    if not candidates:
        sys.exit(f"ERROR: no slot JSON found in {slots_dir}; pass --slots explicitly.")
    return candidates[0]


def main(argv: list[str] | None = None) -> int:
    os.umask(0o077)
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--vault", required=True, type=Path)
    p.add_argument("--slots", default=None, type=Path)
    p.add_argument("--template", default=DEFAULT_SKILL / "assets" / "beast-pdf.html", type=Path)
    p.add_argument("--css", default=DEFAULT_SKILL / "assets" / "editorial-pdf.css", type=Path)
    p.add_argument("--out", default=None, type=Path)
    p.add_argument("--weasyprint", default=DEFAULT_WEASY, type=Path)
    p.add_argument("--keep-html", action="store_true", help="Keep the rendered intermediate HTML next to the PDF.")
    args = p.parse_args(argv)

    vault = args.vault.expanduser().resolve()
    slots_path = (args.slots or find_default_slots(vault)).expanduser().resolve()
    template_path = args.template.expanduser().resolve()
    css_path = args.css.expanduser().resolve()
    weasy = args.weasyprint.expanduser()

    for path, label in [(slots_path, "slots JSON"), (template_path, "template HTML"), (css_path, "CSS")]:
        if not path.exists():
            sys.exit(f"ERROR: {label} not found at {path}")

    slug = detect_client_slug(vault)
    out_pdf = (args.out or (vault / f"{slug}-Beast-Plan.pdf")).expanduser().resolve()

    slots: dict[str, str] = json.loads(slots_path.read_text(encoding="utf-8"))
    slots.setdefault("date", date.today().isoformat())
    slots["plan_css"] = css_path.read_text(encoding="utf-8")

    template = template_path.read_text(encoding="utf-8")
    rendered, missing = substitute(template, slots)

    if missing:
        unique_missing = sorted(set(missing))
        print(f"WARN: {len(unique_missing)} placeholder(s) referenced in template but missing from slots:")
        for k in unique_missing:
            print(f"  - {k}")

    tmp_html = out_pdf.with_suffix(".html")
    tmp_html.parent.mkdir(parents=True, exist_ok=True)
    tmp_html.write_text(rendered, encoding="utf-8")

    # Probe the weasyprint binary's identity (defense against shim replacement)
    if not weasy.exists() or not os.access(weasy, os.X_OK):
        sys.exit(f"ERROR: weasyprint not found / not executable at {weasy}")
    probe = subprocess.run([str(weasy), "--version"], capture_output=True, text=True, timeout=10)
    if probe.returncode != 0 or "weasyprint" not in (probe.stdout + probe.stderr).lower():
        sys.exit(f"ERROR: {weasy} did not identify as WeasyPrint.")

    cmd = [str(weasy), "--base-url", "about:blank", str(tmp_html), str(out_pdf)]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        print(proc.stderr, file=sys.stderr)
        return proc.returncode
    if proc.stderr.strip():
        print(proc.stderr, file=sys.stderr)

    if not args.keep_html:
        tmp_html.unlink(missing_ok=True)

    size_kb = out_pdf.stat().st_size / 1024
    # Cheap page count: count /Type /Page tokens (subtract /Type /Pages container).
    data = out_pdf.read_bytes()
    pages = data.count(b"/Type /Page") - data.count(b"/Type /Pages")
    print(f"Wrote {out_pdf} ({size_kb:.1f} KB, {pages} pages)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
