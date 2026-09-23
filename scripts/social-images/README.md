# Social / Open Graph images

Generates the 1200x630 preview cards in `public/social/*.png` (plus the three
1000x1500 Pinterest pins) from real project photos with the Inter typeface.

## Run

```bash
npm run social:images                         # render every image in manifest.json
python3 scripts/social-images/generate.py --only about-loudoun-decks-social   # one image
python3 scripts/social-images/generate.py --out /tmp/og-preview               # render elsewhere
python3 scripts/social-images/generate.py --rebuild-manifest                  # re-derive manifest from src/ pages
```

Requirements: Python 3 with Pillow (`python3 -c "import PIL"`). No other dependencies.

## How it works

- `manifest.json` lists every image: `title`, `subtitle`, `eyebrow`, `accent`
  (`oak` / `sage` / `steel` / `gold`), `photo` (a key from `PHOTOS` in
  `generate.py`) and `size`. Edit it by hand to change the wording of a card,
  then re-run `npm run social:images`.
- `--rebuild-manifest` scans `src/app/**` for the page that references
  `/social/<name>.png`, pulls its metadata `title` / `description`, strips the
  brand suffix, drops any sentence containing credential, rating or price
  claims, and applies the `TITLE_OVERRIDES` map. It overwrites `manifest.json`,
  so re-apply manual edits afterwards (or add them to `TITLE_OVERRIDES`).
- The renderer hard-fails if a title cannot fit in three lines at 44px or
  larger, if a subtitle cannot be truncated to two lines, if a bottom-row
  element would overlap, or if any text still contains a banned claim.
- Output is PNG with `optimize=True`; images above 350 KB are quantised to an
  adaptive palette with dithering to stay under the cap.

## Fonts

`fonts/` contains the static Inter TTFs (Bold, SemiBold, Medium, Regular) from
https://github.com/rsms/inter/releases (Inter 4.1), licensed under the SIL Open
Font License 1.1 (`fonts/OFL-LICENSE.txt`). The site itself loads Inter via
`next/font`, so the cards match the brand.

## Photos

Backgrounds are cover-cropped (never stretched) from:

- `public/images/cable-railing-deck-chantilly-va.png`
- `public/images/homepage-intro-timbertech-deck.png` (top composition only)
- `public/images/projects/purcellville-screened-porch/purcellville-screened-porch-01-retouched.png` (cropped above the watermark)
- `public/images/screened-porch-contractor-northern-virginia.png`

Photos rotate deterministically per filename within each category so cards
differ without being random between runs.
