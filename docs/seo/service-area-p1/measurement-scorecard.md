# Measurement scorecard

Prepared 18 October 2026. Access was not available, so every value below is `unavailable`, not zero. Do not attribute future movement to this lot alone. Compare similar periods and note seasonality, ads changes, and other releases.

Checkpoints to read manually: launch day, day 7 for indexation and page integrity, day 28 for early signals, and day 56–90 for a more stable read. No recurring monitor was created.

| Metric | Source | Definition | Filter | Period | Access |
| --- | --- | --- | --- | --- | --- |
| Clicks, impressions, CTR, average position | Google Search Console | Search appearance for the property | Page and query | 28 days versus the previous 28 days | unavailable |
| Geographic queries | Google Search Console | Queries that mention a community name | Query contains a declared place name | Same paired periods | unavailable. A place name in a query is not the searcher's location. Anonymized queries can be omitted. Average position is aggregated. |
| Visits to affected pages | GA4 | Sessions on `/`, `/contact`, `/get-estimate`, `/areas-we-serve` | Landing page | Same paired periods | unavailable |
| Phone click | GA4 | Click intent on a `tel:` link | Existing event only | Same paired periods | unavailable. A click is not a connected call. |
| Confirmed lead | CRM | A request with a real project, a location inside the published area, and a usable name, email, or phone | Exclude honeypot and duplicate `event_id` | Same paired periods | unavailable. A submit click is not a received request. |
| Local pack | Manual observation | Same queries and map points on each checkpoint | Declared communities only | Launch, day 28, day 56–90 | not run |
| AI answers | Manual observation | Fixed questions, platform, date, and cited URL | Mention, citation, or link | Repeat the same set | not run. One answer is not a stable position. |

Affected routes for the first read: `/`, `/contact`, `/get-estimate`, `/areas-we-serve`, `/deck-financing`, `/press`, `/referral-partners`, `/deck-resurfacing-northern-virginia`.
