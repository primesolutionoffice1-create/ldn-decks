#!/usr/bin/env python3
"""
Generate Open Graph / social preview images for ldndecks.com.

Pillow only (no other dependencies). Reads scripts/social-images/manifest.json
and writes one PNG per entry into public/social/.

Usage:
  python3 scripts/social-images/generate.py                    # render from manifest
  python3 scripts/social-images/generate.py --rebuild-manifest # re-derive manifest from src/, then render
  python3 scripts/social-images/generate.py --only about-loudoun-decks-social
  python3 scripts/social-images/generate.py --out /tmp/preview  # render elsewhere

The manifest is meant to be hand-edited (title / subtitle / eyebrow / photo).
Running with --rebuild-manifest overwrites it from page metadata.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
FONT_DIR = HERE / "fonts"
MANIFEST = HERE / "manifest.json"
SOCIAL_DIR = ROOT / "public" / "social"
SRC_DIR = ROOT / "src"

DEFAULT_SIZE = (1200, 630)
MAX_BYTES = 350 * 1024

# ---------------------------------------------------------------------------
# Brand
# ---------------------------------------------------------------------------

WORDMARK = "LOUDOUN DECKS"
DOMAIN = "ldndecks.com"
PHONE = "(571) 655-7207"
RIGHT_TXT = f"{PHONE}  ·  {DOMAIN}"
BOTTOM_LEFT = "Virginia Class A Contractor · NADRA Member · Northern Virginia"

ACCENT = {
    "oak": (0xD8, 0xA4, 0x68),
    "sage": (0x9F, 0xB7, 0x9A),
    "steel": (0x8F, 0xB3, 0xD9),
    "gold": (0xE0, 0xBE, 0x7A),
}

# category -> (eyebrow label, accent key, photo pool)
CATEGORIES = {
    "cost": ("COST GUIDE", "gold", "decks"),
    "financing": ("FINANCING", "gold", "decks"),
    "hoa": ("HOA DECK RULES", "steel", "decks"),
    "permit": ("PERMITS & CODES", "steel", "decks"),
    "city": ("SERVICE AREA", "oak", "decks"),
    "screened-porch": ("SCREENED PORCHES", "sage", "porch"),
    "porch": ("PORCHES", "sage", "porch"),
    "outdoor-living": ("OUTDOOR LIVING", "sage", "porch"),
    "repair": ("DECK REPAIR", "oak", "decks"),
    "maintenance": ("DECK CARE", "oak", "decks"),
    "resurfacing": ("DECK RESURFACING", "oak", "decks"),
    "railing": ("RAILINGS", "oak", "decks"),
    "lighting": ("DECK LIGHTING", "oak", "decks"),
    "materials": ("MATERIALS", "oak", "decks"),
    "design": ("DESIGN IDEAS", "oak", "decks"),
    "tools": ("PLANNING TOOLS", "oak", "decks"),
    "about": ("ABOUT", "oak", "general"),
    "contact": ("CONTACT", "oak", "general"),
    "blog": ("GUIDES", "oak", "general"),
    "services": ("SERVICES", "oak", "decks"),
    "other": ("NORTHERN VIRGINIA", "oak", "general"),
}

GENERIC_SUBTITLE = {
    "screened-porch": "Screened porches and covered outdoor rooms built for Northern Virginia homes.",
    "porch": "Porches and covered outdoor rooms built for Northern Virginia homes.",
    "outdoor-living": "Decks, porches and outdoor living spaces built for Northern Virginia homes.",
    "city": "Custom composite decks and porches built for Northern Virginia homes.",
    "_": "Custom composite decks, porches and outdoor living spaces for Northern Virginia homes.",
}

# Project photos. "region" restricts the source area (fractions of the source
# image) before cover-cropping; "anchor" is the crop focus point inside it.
PHOTOS = {
    "chantilly": {
        "path": "public/images/cable-railing-deck-chantilly-va.png",
        "region": (0.0, 0.0, 1.0, 1.0),
        "anchor": (0.5, 0.5),
    },
    "homepage-top": {
        # collage: keep only the top composition, avoid the white void bottom-right
        "path": "public/images/homepage-intro-timbertech-deck.png",
        "region": (0.0, 0.0, 1.0, 0.575),
        "anchor": (0.3, 0.5),
    },
    "gainesville": {
        "path": "public/images/projects/gainesville-foggy-wharf/01-gainesville-trex-foggy-wharf-deck.jpg",
        "region": (0.0, 0.0, 1.0, 1.0),
        "anchor": (0.5, 0.45),
    },
    "purcellville-porch": {
        # text watermark sits bottom-right: crop stays inside the upper 84%
        "path": "public/images/projects/purcellville-screened-porch/purcellville-screened-porch-01-retouched.png",
        "region": (0.0, 0.0, 1.0, 0.84),
        "anchor": (0.5, 0.8),
    },
    "nova-porch": {
        "path": "public/images/screened-porch-contractor-northern-virginia.png",
        "region": (0.0, 0.0, 1.0, 1.0),
        "anchor": (0.5, 0.5),
    },
}

# Gainesville is defined above (usable via manifest edits) but kept out of the
# automatic pools: chair cover + leaves read as a casual snapshot at card size.
PHOTO_POOLS = {
    "decks": ["chantilly", "homepage-top", "chantilly", "nova-porch", "homepage-top", "purcellville-porch"],
    "porch": ["purcellville-porch", "nova-porch"],
    "general": ["purcellville-porch", "chantilly", "nova-porch"],
}

# ---------------------------------------------------------------------------
# Manifest building
# ---------------------------------------------------------------------------

# Phrases that must never appear on a social card (credentials / ratings / prices).
BANNED_PATTERNS = [
    r"trex\s*-?\s*pro\s*-?\s*platinum",
    r"trex\s*platinum",
    r"trex\s*-?\s*pro\b",
    r"platinum",
    r"\bbbb\b",
    r"\baccredited\b",
    r"\b(five|5)\s*-?\s*stars?\b",
    r"\b\d(\.\d)?\s*-?\s*stars?\b",
    r"\bstar[- ]rated\b",
    r"\btop[- ]rated\b",
    r"\bhighest[- ]rated\b",
    r"\bbest[- ]rated\b",
    r"\baward[- ]winning\b",
    r"\bbest of houzz\b",
    r"\b#\s*1\b",
    r"\bverified contractor\b",
    r"\bcertified\b",
    r"\b\d[\d,]*\+?\s+(google\s+)?reviews?\b",
    r"\brating\b",
    r"\$\s?\d",
    r"\b\d{1,3}(,\d{3})+\b",       # 12,000-style figures (almost always prices)
    r"\bper\s+(sq\.?\s*ft|square\s+foot)\b",
]
BANNED_RE = re.compile("|".join(BANNED_PATTERNS), re.IGNORECASE)

# Titles that are rewritten to a plain topic (filename stem -> title).
TITLE_OVERRIDES = {
    "bbb-accredited-deck-builder-social": "Licensed & Insured Deck Builder in Northern Virginia",
    "ldn-decks-reviews-yelp-social": "Loudoun Decks Reviews",
    "trex-performance-products-social": "Trex Performance Products",
    "certifications-licenses-social": "Certifications & Licenses",
    "trades-scholarship-social": "Loudoun Decks Trades Scholarship",
}

BRAND_SUFFIX_RE = re.compile(r"\s*[|—–-]\s*(Loudoun Decks|LDN Decks)\s*$", re.IGNORECASE)


def classify(stem: str) -> str:
    s = stem
    if "hoa" in s:
        return "hoa"
    if "permit" in s or "footing-code" in s or "-code-" in s:
        return "permit"
    if any(k in s for k in ("financing", "monthly-payment", "credit-score", "payment-estimator")):
        return "financing"
    if any(k in s for k in ("cost", "price", "tariff", "roi-", "add-value", "budget")):
        return "cost"
    if "screened-porch" in s:
        return "screened-porch"
    if "porch" in s:
        return "porch"
    if any(k in s for k in ("covered-deck", "pergola", "gazebo", "patio", "outdoor-kitchen", "outdoor-living",
                            "pool-deck", "three-season", "under-deck", "fire-pit", "enclosure", "rooftop")):
        return "outdoor-living"
    if "resurfac" in s:
        return "resurfacing"
    if "railing" in s:
        return "railing"
    if "lighting" in s:
        return "lighting"
    if "repair" in s or "replacement" in s or "remodel" in s:
        return "repair"
    if any(k in s for k in ("maintenance", "winterize", "stain", "washing", "cleaning", "inspection",
                            "safety", "warranty", "lifespan")):
        return "maintenance"
    if any(k in s for k in ("trex", "timbertech", "azek", "composite-vs", "wood-vs", "vs-wood", "materials",
                            "eco-friendly", "composite-decks", "wood-decks", "new-decks", "multi-level",
                            "second-story", "cable-railing")):
        return "materials"
    if "design-ideas" in s or "trends" in s or "pet-friendly" in s or "what-size" in s:
        return "design"
    if any(k in s for k in ("calculator", "planning-tools", "estimator", "timeline", "process", "questions",
                            "checklist", "best-time", "choose-deck-builder", "building-guide")):
        return "tools"
    if any(k in s for k in ("deck-builder", "deck-builders", "-hub", "near-you", "areas-we-serve")):
        return "city"
    if any(k in s for k in ("about", "team", "certifications", "why-choose", "reviews", "leave-review", "press",
                            "referral", "scholarship", "social-profiles", "houzz", "bbb", "yelp", "before-and-after",
                            "showcase")):
        return "about"
    if any(k in s for k in ("contact", "get-estimate", "thank-you")):
        return "contact"
    if any(k in s for k in ("blog", "education-hub", "faqs")):
        return "blog"
    if "service" in s or any(k in s for k in ("fence", "windows", "entry-doors", "siding")):
        return "services"
    return "other"


def title_from_stem(stem: str) -> tuple[str, str]:
    s = re.sub(r"-social$|-pinterest$", "", stem)
    sub = ""
    if s.endswith("-northern-virginia"):
        s = s[: -len("-northern-virginia")]
        sub = "Northern Virginia"
    words = []
    small = {"a", "an", "and", "or", "vs", "the", "in", "of", "for", "to", "by", "is", "on"}
    for i, w in enumerate(s.split("-")):
        if w.lower() == "va":
            words.append("VA")
        elif w.lower() == "hoa":
            words.append("HOA")
        elif w.lower() == "vs":
            words.append("vs")
        elif w.lower() in small and i:
            words.append(w.lower())
        else:
            words.append(w.capitalize())
    return " ".join(words), sub


STRING_RE = re.compile(r"""(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)""", re.S)


def _unescape(m: re.Match) -> str:
    raw = m.group(1) if m.group(1) is not None else (m.group(2) if m.group(2) is not None else m.group(3))
    return raw.replace("\\'", "'").replace('\\"', '"').replace("\\n", " ")


def _resolve_value(expr: str, source: str, depth: int = 0) -> str | None:
    expr = expr.strip().rstrip(",").strip()
    if not expr or depth > 3:
        return None
    m = STRING_RE.match(expr)
    if m and m.end() == len(expr):
        return _unescape(m)
    # identifier -> const identifier = '...';
    if re.fullmatch(r"[A-Za-z_$][\w$]*", expr):
        dm = re.search(r"(?:const|let|var)\s+" + re.escape(expr) + r"\s*=\s*(.*?);", source, re.S)
        if dm:
            return _resolve_value(dm.group(1), source, depth + 1)
        return None
    # concatenation of literals
    parts = [_unescape(m) for m in STRING_RE.finditer(expr)]
    if parts and re.fullmatch(r"[\s+]*(" + STRING_RE.pattern + r"[\s+]*)+", expr, re.S):
        return "".join(parts)
    return None


def _field(block: str, name: str, source: str) -> str | None:
    # `name: '...'` / `name: "..."` / `name: `...`` / `name: identifier` (works for one-line objects too)
    m = re.search(r"\b" + name + r"\s*:\s*(" + STRING_RE.pattern + r"|[A-Za-z_$][\w$]*)", block)
    if m:
        return _resolve_value(m.group(1), source)
    # ES2015 shorthand: `{ path, title, description, image }`
    if re.search(r"[{,]\s*" + name + r"\s*[,}]", block):
        return _resolve_value(name, source)
    return None


def _enclosing_block(source: str, pos: int) -> str:
    """Return the smallest {...} object literal enclosing pos."""
    depth = 0
    start = None
    i = pos
    while i >= 0:
        c = source[i]
        if c == "}":
            depth += 1
        elif c == "{":
            if depth == 0:
                start = i
                break
            depth -= 1
        i -= 1
    if start is None:
        return ""
    depth = 0
    for j in range(start, len(source)):
        if source[j] == "{":
            depth += 1
        elif source[j] == "}":
            depth -= 1
            if depth == 0:
                return source[start : j + 1]
    return source[start:]


def find_page_metadata(stem: str) -> tuple[str | None, str | None, str | None]:
    """Locate the page that references /social/<stem>.png and pull title/description."""
    needle = f"/social/{stem}.png"
    candidates = []
    for path in SRC_DIR.rglob("*"):
        if path.suffix not in {".js", ".jsx", ".ts", ".tsx", ".mjs"}:
            continue
        if "image-sitemap" in path.parts or path.name in {"seo.js", "seo.ts"} or "admin" in path.parts:
            continue
        try:
            text = path.read_text(encoding="utf-8")
        except Exception:
            continue
        if needle in text:
            candidates.append((path, text))
    if not candidates:
        # unreferenced image: fall back to the page whose route matches the filename
        route_stem = re.sub(r"-social$|-pinterest$", "", stem)
        for ext in ("js", "jsx", "tsx", "ts"):
            page = SRC_DIR / "app" / route_stem / f"page.{ext}"
            if page.exists():
                text = page.read_text(encoding="utf-8")
                m = re.search(r"metadata\s*=\s*(?:buildMetadata\()?\{", text)
                if m:
                    block = _enclosing_block(text, m.end() - 1)
                    title = _field(block, "title", text)
                    desc = _field(block, "description", text)
                    if title or desc:
                        return title, desc, page.relative_to(ROOT).as_posix()
        return None, None, None

    route_stem = re.sub(r"-social$|-pinterest$", "", stem)

    def score(item):
        path, _ = item
        rel = path.relative_to(SRC_DIR).as_posix()
        s = 0
        if path.name.startswith("page."):
            s += 10
        if path.name.startswith("layout."):
            s += 5
        if f"/{route_stem}/" in rel:
            s += 20
        return -s

    candidates.sort(key=score)
    for path, text in candidates:
        pos = text.find(needle)
        # walk up to the object literal that carries `image:` and (hopefully) title/description
        block = _enclosing_block(text, pos)
        title = _field(block, "title", text)
        desc = _field(block, "description", text)
        if title is None and desc is None:
            # e.g. openGraph: { images: [...] } nested — try the parent block
            parent = _enclosing_block(text, max(text.rfind("{", 0, text.find(block)) - 1, 0))
            title = _field(parent, "title", text)
            desc = _field(parent, "description", text)
        if title or desc:
            return title, desc, path.relative_to(ROOT).as_posix()
    return None, None, candidates[0][0].relative_to(ROOT).as_posix()


def clean_title(raw: str) -> str:
    t = BRAND_SUFFIX_RE.sub("", raw.strip())
    t = re.sub(r"\s*\|\s*(Loudoun Decks|LDN Decks)\s*(\||$)", " | ", t).strip(" |")
    # multi-segment SEO titles: keep the first segment
    if "|" in t:
        t = t.split("|")[0].strip()
    t = re.sub(r"\s+", " ", t)
    return t.strip(" -–—:")


def scrub_claims(text: str) -> tuple[str, bool]:
    """Remove sentences that contain banned claims. Returns (text, changed)."""
    if not text:
        return "", False
    sentences = re.split(r"(?<=[.!?])\s+", text.strip())
    kept = [s for s in sentences if not BANNED_RE.search(s)]
    changed = len(kept) != len(sentences)
    return " ".join(kept).strip(), changed


def scrub_title(text: str) -> tuple[str, bool]:
    if not BANNED_RE.search(text):
        return text, False
    t = BANNED_RE.sub("", text)
    t = re.sub(r"\s{2,}", " ", t)
    t = re.sub(r"\s+([,:;])", r"\1", t)
    t = re.sub(r"^[\s,:;&-]+|[\s,:;&-]+$", "", t)
    t = re.sub(r"\s*&\s*&\s*", " & ", t)
    return t.strip(), True


def build_manifest() -> dict:
    entries = []
    notes = []
    for png in sorted(SOCIAL_DIR.glob("*.png")):
        stem = png.stem
        category = classify(stem)
        label, accent, pool = CATEGORIES[category]
        if pool == "decks" and ("porch" in stem or category in ("outdoor-living",)):
            pool = "porch"
        title, desc, source = find_page_metadata(stem)
        derived = False
        if not title:
            title, sub = title_from_stem(stem)
            derived = True
            if not desc:
                desc = sub or ""
        title = clean_title(title)
        original_title = title
        if stem in TITLE_OVERRIDES:
            title = TITLE_OVERRIDES[stem]
        else:
            title, changed = scrub_title(title)
            if changed:
                notes.append(f"title scrubbed: {stem}: {original_title!r} -> {title!r}")
        if stem in TITLE_OVERRIDES and original_title != title:
            notes.append(f"title overridden: {stem}: {original_title!r} -> {title!r}")
        subtitle, changed = scrub_claims(desc or "")
        if changed:
            notes.append(f"subtitle scrubbed: {stem}")
        if not subtitle:
            subtitle = GENERIC_SUBTITLE.get(category, GENERIC_SUBTITLE["_"])
        try:
            with Image.open(png) as im:
                size = list(im.size)
        except Exception:
            size = list(DEFAULT_SIZE)
        if size != list(DEFAULT_SIZE) and not stem.endswith("-pinterest"):
            size = list(DEFAULT_SIZE)
        entries.append(
            {
                "file": png.name,
                "category": category,
                "eyebrow": label,
                "accent": accent,
                "photo": pick_photo(stem, pool),
                "title": title,
                "subtitle": subtitle,
                "size": size,
                "source": source,
                "title_derived_from_filename": derived,
            }
        )
    return {
        "_readme": "Edit title/subtitle/eyebrow/accent/photo freely. Regenerate images with "
        "`npm run social:images`. `--rebuild-manifest` overwrites this file from page metadata.",
        "accents": list(ACCENT.keys()),
        "photos": list(PHOTOS.keys()),
        "notes": notes,
        "images": entries,
    }


def pick_photo(stem: str, pool: str) -> str:
    names = PHOTO_POOLS[pool]
    h = int(hashlib.sha1(stem.encode()).hexdigest(), 16)
    return names[h % len(names)]


# ---------------------------------------------------------------------------
# Rendering
# ---------------------------------------------------------------------------

_font_cache: dict[tuple[str, int], ImageFont.FreeTypeFont] = {}


def font(weight: str, size: int) -> ImageFont.FreeTypeFont:
    key = (weight, size)
    if key not in _font_cache:
        path = FONT_DIR / f"Inter-{weight}.ttf"
        if not path.exists():
            sys.exit(f"Missing font {path}. See scripts/social-images/README.md")
        _font_cache[key] = ImageFont.truetype(str(path), size)
    return _font_cache[key]


_photo_cache: dict[str, Image.Image] = {}


def load_photo(name: str) -> Image.Image:
    if name not in _photo_cache:
        spec = PHOTOS[name]
        im = Image.open(ROOT / spec["path"]).convert("RGB")
        w, h = im.size
        l, t, r, b = spec["region"]
        _photo_cache[name] = im.crop((int(l * w), int(t * h), int(r * w), int(b * h)))
    return _photo_cache[name]


def cover_crop(im: Image.Image, size: tuple[int, int], anchor: tuple[float, float]) -> Image.Image:
    W, H = size
    w, h = im.size
    target = W / H
    if w / h > target:
        ch = h
        cw = int(round(h * target))
    else:
        cw = w
        ch = int(round(w / target))
    ax, ay = anchor
    x0 = int(round((w - cw) * ax))
    y0 = int(round((h - ch) * ay))
    x0 = max(0, min(x0, w - cw))
    y0 = max(0, min(y0, h - ch))
    return im.crop((x0, y0, x0 + cw, y0 + ch)).resize((W, H), Image.LANCZOS)


def _gradient_mask(size: tuple[int, int], horizontal: bool, start: float, end: float,
                   a0: float, a1: float, ease: float = 1.0) -> Image.Image:
    """1-D alpha ramp: alpha a0 at `start` -> a1 at `end` (pixel coords), constant outside."""
    W, H = size
    n = W if horizontal else H
    ramp = bytearray(n)
    for i in range(n):
        if i <= start:
            a = a0
        elif i >= end:
            a = a1
        else:
            t = (i - start) / (end - start)
            t = t ** ease
            a = a0 + (a1 - a0) * t
        ramp[i] = int(round(max(0.0, min(1.0, a)) * 255))
    if horizontal:
        line = Image.frombytes("L", (n, 1), bytes(ramp))
        return line.resize((W, H))
    line = Image.frombytes("L", (1, n), bytes(ramp))
    return line.resize((W, H))


def overlay(base: Image.Image, color: tuple[int, int, int], mask: Image.Image) -> Image.Image:
    solid = Image.new("RGB", base.size, color)
    return Image.composite(solid, base, mask)


def draw_tracked(draw: ImageDraw.ImageDraw, xy, text, fnt, fill, tracking_em: float, anchor="la"):
    x, y = xy
    track = fnt.size * tracking_em
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill, anchor=anchor)
        x += fnt.getlength(ch) + track
    return x - track


def tracked_width(text, fnt, tracking_em: float) -> float:
    track = fnt.size * tracking_em
    return sum(fnt.getlength(ch) for ch in text) + track * (len(text) - 1)


def wrap(text: str, fnt: ImageFont.FreeTypeFont, max_w: int) -> list[str] | None:
    """Greedy word wrap. Returns None if a single word cannot fit."""
    lines, cur = [], ""
    for word in text.split():
        if fnt.getlength(word) > max_w:
            return None
        trial = f"{cur} {word}".strip()
        if fnt.getlength(trial) <= max_w:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def fit_title(text: str, max_w: int, max_lines: int, sizes=(66, 62, 58, 54, 50, 46, 44)):
    for s in sizes:
        f = font("Bold", s)
        lines = wrap(text, f, max_w)
        if lines is not None and len(lines) <= max_lines:
            return f, lines
    raise ValueError(f"title does not fit in {max_lines} lines at >= {sizes[-1]}px: {text!r}")


def fit_subtitle(text: str, fnt: ImageFont.FreeTypeFont, max_w: int, max_lines: int) -> list[str]:
    lines = wrap(text, fnt, max_w)
    if lines is None:
        raise ValueError(f"subtitle contains a word wider than the column: {text!r}")
    if len(lines) <= max_lines:
        return lines
    # truncate at a word boundary with an ellipsis
    words = text.split()
    for n in range(len(words), 0, -1):
        candidate = " ".join(words[:n]).rstrip(",.;:") + "…"
        lines = wrap(candidate, fnt, max_w)
        if lines is not None and len(lines) <= max_lines:
            return lines
    raise ValueError(f"subtitle cannot be truncated to fit: {text!r}")


def render(entry: dict) -> Image.Image:
    W, H = entry.get("size") or DEFAULT_SIZE
    portrait = H > W
    margin = 64
    safe = 40
    accent = ACCENT[entry.get("accent", "oak")]
    white = (255, 255, 255)

    for key in ("title", "subtitle", "eyebrow"):
        if BANNED_RE.search(entry.get(key, "")):
            raise ValueError(f"{key} contains a banned claim/price: {entry.get(key)!r}")

    # --- photo -------------------------------------------------------------
    spec = PHOTOS[entry["photo"]]
    photo = cover_crop(load_photo(entry["photo"]), (W, H), tuple(spec["anchor"]))
    photo = photo.filter(ImageFilter.GaussianBlur(0.4))  # tames sensor noise -> smaller PNG
    img = photo.point(lambda v: int(v * 0.88))  # ~12% global darken

    ink = (10, 14, 20)
    if portrait:
        # portrait pins: full-width darkening from the middle down
        img = overlay(img, ink, _gradient_mask((W, H), False, H * 0.30, H * 0.78, 0.0, 0.94, 1.15))
        img = overlay(img, ink, _gradient_mask((W, H), False, H - 260, H, 0.0, 0.85))
        col_w = W - 2 * margin
        text_x = margin
    else:
        # left column: hold ~0.94 across the text start, fade out past the column edge
        img = overlay(img, ink, _gradient_mask((W, H), True, 150, 860, 0.94, 0.0, 1.25))
        img = overlay(img, ink, _gradient_mask((W, H), False, H - 230, H, 0.0, 0.85))
        col_w = 760 - margin
        text_x = margin

    # All text goes on a transparent layer so RGBA fills blend properly.
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    # --- wordmark ----------------------------------------------------------
    wm_font = font("SemiBold", 24)
    wm_y = 56 if not portrait else margin
    draw_tracked(draw, (margin, wm_y), WORDMARK, wm_font, (255, 255, 255, 235), 0.18)
    draw.rectangle((margin, wm_y + 40, margin + 44, wm_y + 43), fill=accent)

    # --- bottom row --------------------------------------------------------
    bl_font = font("Medium", 19)
    br_font = font("SemiBold", 22)
    bottom_y = H - 55 if not portrait else H - margin - 4
    left_txt = BOTTOM_LEFT
    right_w = br_font.getlength(RIGHT_TXT)
    if portrait:
        # stack: domain above the credentials line
        draw.text((margin, bottom_y - 34), RIGHT_TXT, font=br_font, fill=white, anchor="ls")
        draw.text((margin, bottom_y), left_txt, font=bl_font, fill=(255, 255, 255, 178), anchor="ls")
    else:
        draw.text((margin, bottom_y + 14), left_txt, font=bl_font, fill=(255, 255, 255, 178), anchor="ls")
        draw.text((W - margin, bottom_y + 14), RIGHT_TXT, font=br_font, fill=white, anchor="rs")
        if margin + bl_font.getlength(left_txt) + 32 > W - margin - right_w:
            raise ValueError("bottom row overlaps")

    # --- eyebrow + title + subtitle (bottom-anchored block) ------------------
    eb_font = font("Medium", 20)
    title_font, title_lines = fit_title(entry["title"], col_w, 3 if not portrait else 5)
    sub_font = font("Regular", 24)
    sub_lines = fit_subtitle(entry["subtitle"], sub_font, col_w, 2 if not portrait else 3)

    title_lh = int(round(title_font.size * 1.08))
    sub_lh = int(round(sub_font.size * 1.32))
    block_h = 20 + 18 + len(title_lines) * title_lh + 18 + len(sub_lines) * sub_lh
    block_bottom = (H - 55 - 60) if not portrait else (bottom_y - 90)
    y = block_bottom - block_h
    min_top = wm_y + 44 + 40
    if y < min_top:
        raise ValueError(f"text block too tall for {entry['file']}")

    draw_tracked(draw, (text_x, y), entry["eyebrow"], eb_font, accent, 0.14)
    y += 20 + 18
    for line in title_lines:
        draw.text((text_x, y), line, font=title_font, fill=white, anchor="la")
        y += title_lh
    y += 18
    for line in sub_lines:
        draw.text((text_x, y), line, font=sub_font, fill=(255, 255, 255, 184), anchor="la")
        y += sub_lh

    # safety: nothing beyond the column / canvas
    for line in title_lines:
        assert title_font.getlength(line) <= col_w
    assert text_x + col_w <= W - safe
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def save_png(img: Image.Image, path: Path) -> int:
    # 350 KB cap is for 1200x630; scale it by pixel count for the portrait pins
    cap = int(MAX_BYTES * (img.width * img.height) / (DEFAULT_SIZE[0] * DEFAULT_SIZE[1]))
    img.save(path, "PNG", optimize=True)
    size = path.stat().st_size
    if size > cap:
        # Quantise to an adaptive 256-colour palette with dithering. Keeps the
        # photo looking natural while landing comfortably under the size cap.
        for colors in (256, 192, 128):
            q = img.quantize(colors=colors, method=Image.Quantize.FASTOCTREE, dither=Image.Dither.FLOYDSTEINBERG)
            q.save(path, "PNG", optimize=True)
            size = path.stat().st_size
            if size <= cap:
                break
    return size


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--rebuild-manifest", action="store_true", help="re-derive manifest.json from src/ pages")
    ap.add_argument("--only", action="append", help="render only these stems (repeatable)")
    ap.add_argument("--out", type=Path, default=SOCIAL_DIR, help="output directory (default public/social)")
    ap.add_argument("--manifest-only", action="store_true", help="rebuild manifest and exit")
    args = ap.parse_args()

    if args.rebuild_manifest or not MANIFEST.exists():
        manifest = build_manifest()
        MANIFEST.write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"manifest written: {MANIFEST} ({len(manifest['images'])} images)")
        for n in manifest["notes"]:
            print("  note:", n)
        if args.manifest_only:
            return 0
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))

    args.out.mkdir(parents=True, exist_ok=True)
    only = set(args.only or [])
    total = 0
    biggest = (0, "")
    errors = []
    for entry in manifest["images"]:
        stem = Path(entry["file"]).stem
        if only and stem not in only:
            continue
        try:
            img = render(entry)
        except ValueError as e:
            errors.append(f"{entry['file']}: {e}")
            continue
        out = args.out / entry["file"]
        size = save_png(img, out)
        total += 1
        if size > biggest[0]:
            biggest = (size, entry["file"])
        cap = int(MAX_BYTES * (img.width * img.height) / (DEFAULT_SIZE[0] * DEFAULT_SIZE[1]))
        if size > cap:
            errors.append(f"{entry['file']}: {size // 1024} KB exceeds {cap // 1024} KB")
    print(f"rendered {total} images -> {args.out}; largest {biggest[1]} at {biggest[0] // 1024} KB")
    if errors:
        print("FAILED:", file=sys.stderr)
        for e in errors:
            print("  " + e, file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
