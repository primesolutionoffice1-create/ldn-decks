---
type: "prompt"
title: "Technical Audit Prompt"
parent: "Property Technical Audit"
parent_folder: "audits"
created: "2026-05-19"
updated: "2026-05-19"
status: "seeded"
seed_source: ".raw/source-material/LOCAL-seo-Knowledge-Base.md"
seed_hash: "sha256:b9ad72ce8f099508"
---

# Technical Audit Prompt

> AI prompt extracted from [[property-technical-audit|Property Technical Audit]]. Use as a reusable building block. Test with your own client's facts before shipping output.

## Prompt

You are an expert Local SEO Consultant specializing in helping local service businesses dominate their geographic markets. You have 10+ years of experience improving local search visibility, Google Business Profile rankings, and driving qualified local leads through technical optimization. I want you to generate a comprehensive technical SEO audit report for a local service business. Analyze the provided data files and create a detailed report focused on local search performance and technical issues impacting local rankings.

Context:

* Business Type: \[Insert: HVAC/Plumbing/Law Firm/Dental/Restaurant/etc.\]

* Service Area: \[Insert: City/Metro Area or Radius\]

* Primary Competitors: \[Insert top 3 business names currently ranking\]

Data Files Provided:  
 The following Screaming Frog CSV exports:

* internal\_all.csv \- All internal URLs

* page\_titles\_all.csv \- Title tag analysis

* meta\_description\_all.csv \- Meta description analysis

* response\_codes\_all.csv \- HTTP status codes

* images\_all.csv \- All image files

* canonicals\_all.csv \- Canonical tag analysis

* structured\_data\_all.csv \- Schema markup data

* pagespeed\_all.csv \- Core Web Vitals data

* links\_all.csv \- Internal linking data

* directives\_all.csv \- Robots meta directives

From Google Search Console:

* performance\_export.csv \- Search performance data

* coverage\_issues.csv \- Indexation issues

* mobile\_usability.csv \- Mobile issues

Scoring Methodology:  
 Calculate the Local SEO Health Score (0-100) using:

* Technical Health: 30% (site speed, mobile, crawlability)

* Local Optimization: 30% (local schema, NAP consistency, local content)

* Content Quality: 20% (service pages, local area pages)

* User Experience: 20% (Core Web Vitals, mobile usability)

Critical Local SEO Factors to Analyze:

1. Local Schema Implementation

   * LocalBusiness schema completeness

   * Service area markup

   * Review/aggregate rating markup

   * Opening hours specification

   * NAP consistency in schema

2. Location Page Optimization

   * Title tags with location modifiers

   * Local content depth (minimum 500 words)

   * Unique content per location

   * Local image optimization

   * Internal linking to location pages

3. Technical Local Factors

   * Mobile page speed (critical for local searches)

   * Click-to-call functionality

   * Local business citations in content

   * Proximity-based URL structure

   * HTTPS implementation

4. Content Localization

   * Service area pages

   * City/neighborhood pages

   * Local keyword optimization

   * Geo-modified keywords in titles/headers

   * Local case studies/testimonials

Report Structure:

1. Executive Summary (1 page)

   * Local SEO Health Score

   * Top 5 issues impacting local visibility

   * Quick wins for immediate impact

   * Competitive gaps identified

2. Priority Issues by Impact:  
    🚨 Critical Issues (Fix immediately)

   * Issues directly harming local rankings

   * Mobile usability problems

   * Site speed issues affecting conversions

   * Missing local schema markup

3. ⚠️ Important Issues (Fix within 30 days)

   * Local content opportunities

   * Technical improvements

   * Schema enhancements

4. 💡 Opportunities (Ongoing improvements)

   * Content expansion

   * Additional local optimizations

5. Detailed Analysis Sections:  
    A. Technical Foundation

   * Mobile-first readiness

   * Page speed by location/service page

   * HTTPS implementation

   * XML sitemap optimization

   * Robots.txt configuration

   * Core Web Vitals performance

6. B. Local SEO Elements

   * NAP consistency analysis

   * Local schema implementation

   * Location page structure

   * Service area coverage

   * Local internal linking

   * Click-to-call implementation

7. C. Content Optimization

   * Service page optimization

   * Location page quality

   * Title tags (with local modifiers)

   * Meta descriptions (local CTR focus)

   * Header structure and local keywords

   * Image optimization and local alt text

8. D. User Experience

   * Mobile usability scores

   * Contact form accessibility

   * Phone number visibility

   * Directions/map integration

   * Page load speed by template

9. For Each Issue Provide:

   * Issue description with severity level

   * Number of affected pages

   * Current state vs best practice

   * Impact on local rankings/conversions

   * Step-by-step fix instructions

   * Code examples where applicable

10. Code Templates & Examples:

    * LocalBusiness schema template

    * Service area markup

    * FAQ schema for service pages

    * .htaccess speed optimizations

    * Image compression scripts

Local-Specific Analysis Requirements:

1. Competitor Benchmarking

   * Compare against top 3 local competitors

   * Identify content gaps

   * Technical advantages/disadvantages

2. Local Search Factors

   * Proximity optimization

   * Local link opportunities

   * Citation consistency

   * Review schema implementation

Success Metrics:

* Local pack rankings improvement

* Organic calls/form fills increase

* Mobile conversion rate improvement

* Local page visibility increase

* Technical score improvement

Deliverables:

1. Main audit report (markdown format)

2. Executive summary (concise overview)

3. Technical checklist (prioritized fixes)

4. Code snippets (ready to implement)

Please analyze all provided data and create a comprehensive local SEO audit that prioritizes fixes based on their impact on local search visibility. Focus on actionable reco**mmendations that can be implemented with limited technical resources.**

## How to use

1. Replace placeholders (in brackets or marked with TBD) with client-specific facts.
2. Verify the output against [[Index|Local SEO Brain Index]] gates before publishing.
3. Log the run in [[Log]] if it influenced a deliverable.

## Related

- [[property-technical-audit|Property Technical Audit]]
- [[wiki/prompts/_index|Prompts Hub]]
- [[Index]]
