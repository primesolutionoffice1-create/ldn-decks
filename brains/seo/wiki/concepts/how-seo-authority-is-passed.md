---
type: "knowledge"
title: "How SEO Authority Is Passed"
folder: "concepts"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# How SEO Authority Is Passed

Understanding how SEO authority flows through links is crucial for effective optimization. Many SEOs misunderstand this fundamental concept, which can lead to poor linking strategies and wasted opportunities.

**Link authority** (colloquially known as "link juice") represents the trust and quality signals that pass from one page to another through hyperlinks. Despite what Google may claim, links remain a critical ranking factor—especially for pages beyond the first few search results.

💡 **Quick Note:** While user engagement data influences rankings on pages 1-2, deeper pages (7-9) rely heavily on link authority since few users venture that far into search results.

Types of Links and Their Behavior

Not all links are created equal. Here's how different link types behave:

Link Placement Types

* **Editorial links** \- Links within the main body content  
* **Navigation bar links** \- Links in the top navigation menu  
* **Footer links** \- Links at the bottom of the page  
* **Sidebar links** \- Links in side rails or sidebars  
* **Author bio links** \- Links in author biography sections

The Critical Rule

**Only editorial links in the main body content pass significant authority.** All other link placements, whether follow or nofollow, pass minimal to no authority.

⚠️ **Important:** Only the **first link** to any URL on a page passes authority. Since Google typically crawls pages from top to bottom, navigation links are often encountered first—and they don't pass meaningful authority\!

How Authority Distribution Works

Let's understand how link authority gets distributed across a page:

![[images/image11.png]]

Example 1: Simple Distribution

Imagine a page with **100 authority points** and **5 follow links** in the body content:

* Each link passes approximately **20 authority points**  
* Total authority passed: 100 points

![[images/image12.png]]

Example 2: Mixed Link Types

Same page with **4 follow links** and **1 nofollow link**:

* Each follow link still passes **20 authority points**  
* The nofollow link passes **0 points**  
* Total authority passed: Only 80 points  
* **20 points are lost** due to the nofollow link

![[images/image13.png]]

Example 3: Different Placements

Page with mixed link placements:

* 3 body follow links: **20 points each**  
* 1 body nofollow link: **0 points**  
* 1 navigation follow link: **\~1 point** (minimal)  
* Total meaningful authority passed: \~61 points

Key Takeaways for Your Strategy

1\. Avoid Navigation Links for Target Pages

Since navigation links appear first and pass minimal authority, avoid placing pages you're trying to rank in the main navigation. This prevents you from passing meaningful internal link authority to these pages later in the content.

2\. External Links Don't Decrease Your Authority

Linking to other websites (whether follow or nofollow) doesn't reduce your page's authority. In fact, linking to high-authority sites (DR 90+) can actually improve your rankings by establishing topical relevance.

3\. Internal Links \= External Links

Internal links work exactly like external links for passing authority. Use them strategically to build authority for important pages within your site.

4\. Authority Sculpting Penalties

Google penalizes attempts to "sculpt" authority by nofollowing most links. The total number of links on a page determines authority distribution, regardless of follow/nofollow status.

<!-- cross-link:start -->
## Related Chapters

- [[key-google-rank-factors|Key Google Rank Factors]]
- [[backlinking-overview|Backlinking Overview]]
- [[content-internal-anchor-text-guidelines|Internal Anchor Text Guidelines]]
- [[local-link-overview|Local Link Overview]]

- [[content-outbound-authority-links|Outbound Authority Links]]

<!-- cross-link:end -->

## Related

- [[Index]]
- [[Hot]]
- [[wiki/concepts/_index|Concepts Hub]]
- [[wiki/frameworks/_index|Frameworks Hub]]
