# Google Search Console Indexing Guide

## Quick Status Check

If only 1 page is indexed out of 10+ pages, this is common for new sites. Here's how to fix it:

---

## Step 1: Verify Sitemap is Accessible

1. Visit `https://myenum.in/sitemap.xml` in your browser
2. Confirm you see all 16 pages listed:
   - `/` (Homepage)
   - `/about`
   - `/services`
   - `/product`
   - `/contact`
   - `/partnership`
   - `/features`
   - `/privacy`
   - `/terms`
   - `/undermaintenance`
   - `/tamil-nadu`
   - `/kerala`
   - `/karnataka`
   - `/uk`
   - `/germany`

---

## Step 2: Submit/Resubmit Sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Select your property: `myenum.in`
3. Navigate to **Sitemaps** (left sidebar)
4. Enter `sitemap.xml` in the "Add a new sitemap" field
5. Click **SUBMIT**
6. If already submitted, you can remove and resubmit to force a refresh

---

## Step 3: Request Indexing for Individual Pages

1. In Google Search Console, use the **URL Inspection Tool** (top search bar)
2. Enter each URL you want indexed (e.g., `https://myenum.in/services`)
3. Click **Request Indexing**
4. Repeat for all important pages:
   - `/services`
   - `/about`
   - `/contact`
   - `/product`
   - `/features`
   - `/tamil-nadu`
   - `/kerala`
   - `/karnataka`
   - `/uk`
   - `/germany`

**Note:** You can request indexing for ~5-10 URLs per day. Don't spam this feature.

---

## Step 4: Check for Indexing Issues

1. In GSC, go to **Pages** (under Indexing section)
2. Look for:
   - **Discovered - currently not indexed** = Google knows about the page but hasn't crawled it yet (common, wait 1-4 weeks)
   - **Crawled - currently not indexed** = Google crawled but decided not to index (content quality issue)
   - **Duplicate without user-selected canonical** = Google picked a different canonical URL
   - **Excluded by noindex tag** = Check your pages don't have noindex (you already verified they don't)

---

## Step 5: Build Internal Links

Google discovers pages through links. Ensure all pages are linked from:

- **Homepage**: Link to `/services`, `/about`, `/product`, location pages
- **Footer**: Already has location links (check `/components/footer.tsx`)
- **Navigation**: Header now includes Locations dropdown
- **Content**: Link between related pages within content

---

## Step 6: Build External Links (Backlinks)

External links help Google discover and trust your site:

1. Submit to local business directories (India & UK)
2. Create profiles on LinkedIn, Twitter, Facebook with website link
3. Guest post on relevant blogs
4. Share content on social media
5. Get listed on Clutch, GoodFirms, or other B2B directories

---

## Timeline Expectations

| Timeframe | What to Expect |
|-----------|----------------|
| 1-7 days | Sitemap processed, some pages indexed |
| 2-4 weeks | Most pages indexed |
| 1-3 months | Full indexing + ranking signals stabilize |

---

## What We Fixed

1. **Updated sitemap.ts** - Added `/undermaintenance` page and improved priority settings
2. **Enhanced location pages** - Added unique, valuable content to `/tamil-nadu`, `/kerala`, `/karnataka`, `/uk`, `/germany`
3. **Improved navigation** - Added Locations dropdown menu in header
4. **Verified robots.txt** - Already correctly configured at `/app/robots.ts`

---

## Quick Checklist

- [ ] Visit `https://myenum.in/sitemap.xml` - confirm all pages listed
- [ ] Deploy updated code to production
- [ ] Submit/resubmit sitemap in GSC
- [ ] Request indexing for 5-10 key URLs
- [ ] Check GSC Pages report for errors
- [ ] Wait 2-4 weeks for full indexing
- [ ] Build backlinks to help discovery

---

## Contact

If issues persist after 4 weeks, check:
- Server logs for Googlebot crawl activity
- Page speed (use PageSpeed Insights)
- Content uniqueness (run through Copyscape)
- Mobile-friendliness (Google Mobile-Friendly Test)
