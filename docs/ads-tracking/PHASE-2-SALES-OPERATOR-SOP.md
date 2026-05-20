# Phase 2 Sales Operator SOP

**Purpose:** keep the revenue-feedback system honest. The website can capture click IDs perfectly and Google Ads can ingest uploads perfectly, but Smart Bidding still learns garbage if sales stages and revenue values are entered inconsistently.

**Audience:** whoever updates Airtable after calls, estimates, proposals, wins, and losses.

**Time required:** 5-10 minutes per business day, plus 2 minutes after each important sales event.

---

## Daily rule

Open Airtable once per business day and clear the views in this order:

1. **New Leads — Today**
2. **Needs Qualification**
3. **Estimates Scheduled**
4. **Proposals Open**
5. **Missing Revenue Value**
6. **Missing Lost Reason**

Do not let leads sit in `New Lead` for more than 1 business day unless nobody has reached the customer.

---

## Stage definitions

Use these definitions exactly.

| Stage | Move into this stage when... | Required fields |
|---|---|---|
| `New Lead` | Website created the row automatically | none |
| `Qualified` | Real homeowner, in service area, relevant service, plausible budget/timeline | `service_type`, `city` or `zip`, `estimated_project_value` if known |
| `Estimate Scheduled` | A real estimate visit / consultation is on the calendar | appointment date in notes |
| `Estimate Completed` | The visit happened and enough info exists to quote | notes summary |
| `Proposal Sent` | A written quote/proposal was sent | estimated or quoted value |
| `Won` | Customer signed agreement and deposit or formal commitment is received | `closed_revenue_value` |
| `Lost` | Customer is not moving forward, not reachable, wrong fit, or spam | `lost_reason` |
| `Closed Paid` | Final payment is received | final paid amount, if different from `closed_revenue_value` |

If the real-world status is blurry, leave the lead in the earlier stage and add a short note. Do not advance stages optimistically.

---

## Qualification rules

Move `New Lead` → `Qualified` only if all are true:

- Customer is in or near the service area.
- Requested service matches Loudoun Decks work.
- Lead is a homeowner or decision-maker, not a vendor/job seeker.
- Budget is not obviously below viable project economics.
- Timeline is real enough to follow up.

Examples:

| Lead | Stage | Reason |
|---|---|---|
| "Need Trex deck replacement in Ashburn this summer" | Qualified | Service + geo + timeline fit |
| "How much for materials only?" | Lost | Materials-only intent |
| "Looking for deck installer job" | Lost | Jobs intent |
| "Need emergency board repair under $300" | Lost or Qualified depending profitability | Use business judgment |
| "Interested in screened porch, budget $35k, Fairfax" | Qualified | High-fit |

---

## Required value entry

| Field | When to enter | Rule |
|---|---|---|
| `estimated_project_value` | Qualified / Estimate Scheduled | Best current estimate; okay to revise |
| `closed_revenue_value` | Won | Contract amount, not guessed value |
| final paid amount | Closed Paid | Actual collected amount if different |

Use plain numbers:

```txt
42000
```

Do not enter:

```txt
$42,000
42k
TBD
```

If value is unknown, do not mark Won yet.

---

## Lost reason rules

Every `Lost` lead needs exactly one primary reason:

| Lost reason | Use when... |
|---|---|
| `Price` | Customer liked the offer but chose lower price / budget mismatch |
| `Timing` | Project postponed beyond 6 months |
| `No Response` | Reasonable follow-up attempts failed |
| `Wrong Service` | Materials-only, job seeker, tiny repair outside target, wrong trade |
| `Competitor` | Customer explicitly chose another contractor |
| `Financing` | Customer could not finance or approve payment |
| `Spam` | Bot, vendor, junk, fake |
| `Other` | Only if none apply; explain in notes |

Do not use `Other` lazily. If `Other` becomes common, add a new reason.

---

## Notes discipline

Good notes are short and factual:

```txt
5/13 called, wants composite replacement, Ashburn, rough budget 35-45k, estimate set for 5/17.
```

Bad notes:

```txt
Good lead maybe.
```

Never put payment card details, sensitive family info, or irrelevant personal details in notes.

---

## Fields sales may NOT edit

Do not edit these unless an engineer/PPC owner explicitly asks:

- `event_id`
- `gclid`
- `gbraid`
- `wbraid`
- `fbclid`
- `msclkid`
- `landing_page`
- `source`
- `medium`
- `campaign`
- `keyword`
- Conversion Uploads audit rows after upload

If something looks wrong, add a note and ask. Do not "fix" attribution manually.

---

## End-of-day checklist

```
Date: ______________________
Operator: __________________

[ ] No unreviewed New Leads older than 1 business day
[ ] All Qualified leads have service_type
[ ] All scheduled estimates have appointment note
[ ] All Won leads have closed_revenue_value
[ ] All Lost leads have lost_reason
[ ] No click ID / event_id fields manually edited
[ ] Any suspicious attribution rows flagged in notes
```

---

## Why this matters

Every clean stage transition teaches Google what a profitable homeowner looks like.

Every sloppy stage transition teaches Google confidently in the wrong direction.

The sales operator is not just updating a spreadsheet. They are training the bidding system.

