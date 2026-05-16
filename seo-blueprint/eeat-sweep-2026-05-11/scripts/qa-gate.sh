#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../../" && pwd)"
PAGE_FILE="$ROOT/src/app/services/deck-repair/page.js"
BASE_URL="${BASE_URL:-http://localhost:3000}"
PAGE_URL="$BASE_URL/services/deck-repair"

failures=0

section() {
  printf '\n== %s ==\n' "$1"
}

pass() {
  printf '  \033[32mPASS\033[0m %s\n' "$1"
}

fail() {
  printf '  \033[31mFAIL\033[0m %s\n' "$1"
  failures=$((failures + 1))
}

warn() {
  printf '  \033[33mWARN\033[0m %s\n' "$1"
}

count_pattern() {
  local pattern="$1"
  local file="$2"
  if [[ -f "$file" ]]; then
    grep -E "$pattern" "$file" | wc -l | tr -d ' '
  else
    echo 0
  fi
}

section "Source file"
if [[ -f "$PAGE_FILE" ]]; then
  pass "Found $PAGE_FILE"
else
  fail "Missing $PAGE_FILE. Are you on feat/deck-repair-hub-finalization?"
fi

section "Source placeholder gates"
if [[ -f "$PAGE_FILE" ]]; then
  for label in \
    "data-evidence-needed:data-evidence-needed" \
    "DO NOT PUBLISH:DO NOT PUBLISH" \
    "VERIFY FINAL COST:VERIFY FINAL COST" \
    "INSERT placeholders:\\[INSERT " \
    "Evidence-needed marker text:evidence-needed"; do
    name="${label%%:*}"
    pattern="${label#*:}"
    count="$(count_pattern "$pattern" "$PAGE_FILE")"
    if [[ "$count" == "0" ]]; then
      pass "No $name markers in source"
    else
      fail "$count $name marker(s) remain in source"
    fi
  done
fi

if [[ "$failures" != "0" ]]; then
  section "Result"
  fail "DEPLOY GATE FAILED at source-placeholder stage with $failures issue(s). Resolve evidence placeholders before running build/server checks."
  exit 1
fi

section "Build"
if [[ "${SKIP_BUILD:-0}" == "1" ]]; then
  warn "Skipping npm run build because SKIP_BUILD=1"
elif (cd "$ROOT" && npm run build >/tmp/deck-repair-qa-build.log 2>&1); then
  pass "npm run build completed"
else
  fail "npm run build failed. See /tmp/deck-repair-qa-build.log"
fi

section "Local server"
if curl -fsS "$BASE_URL" >/tmp/deck-repair-qa-home.html 2>/dev/null; then
  pass "Server reachable at $BASE_URL"
else
  fail "Server not reachable at $BASE_URL. Start it with: npm run dev"
fi

HTML="/tmp/deck-repair-qa-page.html"
section "Route status"
for path in "/services/deck-repair" "/deck-repair" "/deck-repair-loudoun-county"; do
  code="$(curl -s -o /tmp/deck-repair-route.html -w "%{http_code}" "$BASE_URL$path" || true)"
  if [[ "$code" == "200" ]]; then
    pass "$path returns 200"
  else
    fail "$path returned $code"
  fi
done

if curl -fsS "$PAGE_URL" > "$HTML" 2>/dev/null; then
  section "Rendered placeholder gates"
  for label in \
    "data-evidence-needed:data-evidence-needed" \
    "DO NOT PUBLISH:DO NOT PUBLISH" \
    "VERIFY FINAL COST:VERIFY FINAL COST" \
    "INSERT placeholders:\\[INSERT " \
    "Evidence-needed marker text:evidence-needed"; do
    name="${label%%:*}"
    pattern="${label#*:}"
    count="$(count_pattern "$pattern" "$HTML")"
    if [[ "$count" == "0" ]]; then
      pass "No $name markers in rendered HTML"
    else
      fail "$count $name marker(s) remain in rendered HTML"
    fi
  done

  section "Internal links"
  required_links=(
    "/deck-repair"
    "/deck-repair-loudoun-county"
    "/services/deck-inspection"
    "/services/deck-maintenance"
    "/services/deck-replacement"
    "/services/deck-resurfacing"
    "/deck-resurfacing-vs-replacement"
    "/deck-safety-inspection-checklist"
    "/deck-cost-calculator"
    "/composite-deck-cost-northern-virginia"
    "/trex-vs-timbertech-vs-azek"
    "/deck-permit-loudoun-county-virginia"
    "/deck-permit-fairfax-county-virginia"
    "/deck-permit-prince-william-county-virginia"
    "/team"
    "/contact"
  )
  for link in "${required_links[@]}"; do
    if grep -q "href=\"$link\"" "$HTML"; then
      pass "Rendered link present: $link"
    else
      fail "Rendered link missing: $link"
    fi
  done

  section "Image paths"
  image_paths=(
    "/showcase/repair-01-hero-before.jpg"
    "/showcase/repair-01-hero-after.jpg"
    "/showcase/repair-02-ledger-failure.jpg"
    "/showcase/repair-03-post-rot.jpg"
    "/showcase/repair-04-stair-rebuild-before.jpg"
    "/showcase/repair-04-stair-rebuild-after.jpg"
    "/showcase/repair-05-railing-repair.jpg"
    "/showcase/repair-06-resurface-before.jpg"
    "/showcase/repair-07-resurface-after.jpg"
    "/showcase/repair-08-joist-sistering.jpg"
  )
  for image in "${image_paths[@]}"; do
    code="$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$image" || true)"
    if [[ "$code" == "200" ]]; then
      pass "$image resolves"
    else
      fail "$image returned $code"
    fi
  done

  section "JSON-LD"
  if python3 - "$HTML" <<'PY'
import json
import re
import sys
from pathlib import Path

html = Path(sys.argv[1]).read_text(errors="ignore")
blocks = re.findall(r'<script[^>]*application/ld\+json[^>]*>(.*?)</script>', html, flags=re.S)
errors = 0
types = []
for idx, block in enumerate(blocks, 1):
    try:
        obj = json.loads(block)
        types.append(obj.get("@type", "unknown") if isinstance(obj, dict) else "list")
    except Exception as exc:
        print(f"JSON-LD block {idx} failed: {exc}")
        errors += 1
faq_count = sum(1 for t in types if t == "FAQPage")
service_count = sum(1 for t in types if t == "Service")
print(f"JSON-LD blocks: {len(blocks)}")
print(f"Types: {', '.join(map(str, types))}")
print(f"FAQPage count: {faq_count}")
print(f"Service count: {service_count}")
sys.exit(0 if errors == 0 and faq_count == 1 and service_count >= 1 else 1)
PY
  then
    pass "JSON-LD parses; exactly one FAQPage; Service schema present"
  else
    fail "JSON-LD parse/count validation failed"
  fi
else
  warn "Skipping rendered HTML checks because $PAGE_URL could not be fetched"
fi

section "Result"
if [[ "$failures" == "0" ]]; then
  pass "DEPLOY GATE PASSED"
  exit 0
else
  fail "DEPLOY GATE FAILED with $failures issue(s)"
  exit 1
fi
