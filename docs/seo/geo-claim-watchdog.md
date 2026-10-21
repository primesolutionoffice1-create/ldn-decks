# GEO claim watchdog

The check is `npm run seo:geo-claim-watch`. GitHub Actions workflow `GEO Claim Watchdog` runs it every day at 11:50 UTC and on manual dispatch. The schedule runs only from `main`.

It reads https://ldndecks.com. It does not submit the estimate form and it does not contact manufacturers.

A passing run confirms the current public rules:

- one homepage H1, `Custom Deck Builder Near You in Northern Virginia`;
- the homepage title stays `Custom Deck Builder in Northern Virginia | Loudoun Decks`;
- financing remains visible;
- license `#2705191673` and `foundingDate` `2022` remain;
- Alexandria, Falls Church, and Stafford remain on the homepage;
- the warranty page still says Loudoun Decks does not state a TrexPro level;
- `With Platinum installer` and a homepage `10+ years` tenure claim stay absent;
- composite planning dollars stay labeled as external benchmarks, not a Loudoun Decks price, and the written-estimate sentence stays;
- `llms.txt` does not present a dollar figure without that disclaimer;
- the resurfacing page does not emit `AggregateOffer`;
- production `robots.txt` does not disallow the whole site.

This is not a ranking or citation monitor. Search Console, GA4, and the price register are still outside it. The first scheduled run is not implied by adding the file; activation is the first successful Actions run.
