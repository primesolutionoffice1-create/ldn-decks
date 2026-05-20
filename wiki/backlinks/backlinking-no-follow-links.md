---
type: "knowledge"
title: "Backlinking: No Follow Links"
folder: "backlinks"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Backlinking: No Follow Links

For 90%+ of websites, nofollow links are a complete waste of time. Don't worry about them. This lesson will explain why and when the rare exceptions apply.

A nofollow link tells Google that you don't want that specific link to pass any SEO authority to the destination page. That's it—that's the only purpose this attribute serves.

The nofollow attribute looks like this in HTML:

\<a href="https://example.com" rel="nofollow"\>Link text\</a\>

Here's the key concept that changes everything: **passing authority to other sites does not reduce the authority you have**. Your website doesn't lose SEO power when you link out to other sites.

Authority Distribution Mechanics

🔗 **Related Learning**: For a deeper understanding of how authority flows between websites, review the lesson "[[how-seo-authority-is-passed|How SEO Authority is Passed]]".

Let's say your page has 5 outbound links. Whether you make 0, 2, or all 5 of them nofollow doesn't change how much authority your remaining dofollow links pass. The total authority distributed remains the same—you're just choosing which links receive it.

When External Links Make Sense

The external links on your website should typically point to trusted, authoritative sources, non-competitive websites, and resources that benefit your users.

Since these links help your users and don't compete with your business, there's no logical reason to prevent them from receiving authority.

Internal Links and "Authority Sculpting"

You cannot effectively "sculpt" authority flow with internal nofollow links on your own website like some people will suggest. Google's algorithms are sophisticated enough that attempting to manipulate internal link authority distribution is ineffective.

The Rare Exceptions

NoFollow attributes do have legitimate uses, but they're uncommon:

* Paid blog posts  
* Sponsored content  
* Affiliate links (in some cases)

⚠️ **Google Guidelines**: Google specifically recommends using nofollow (or the newer "sponsored" attribute) for paid links to comply with their webmaster guidelines.

<!-- cross-link:start -->
## Related Chapters

- [[backlinking-overview|Backlinking Overview]]
- [[backlinking-anchors|Backlinking Anchors]]

<!-- cross-link:end -->

## Related

- [[Index]]
- [[Hot]]
- [[wiki/backlinks/_index|Backlinks Hub]]
- [[wiki/llm-seo/_index|LLM SEO Hub]]
