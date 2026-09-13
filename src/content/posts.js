/**
 * Blog articles. Each entry generates /blog/<slug> with BlogPosting schema.
 *
 * `body` is HTML fragments using the site's .prose styles. Written as editorial
 * content, not marketing copy - the blog exists to earn organic traffic on
 * genuine technical questions.
 */

export const categories = [
  { id: "web-development", label: "Web Development" },
  { id: "cloud", label: "Cloud" },
  { id: "azure", label: "Azure" },
  { id: "aws", label: "AWS" },
  { id: "ai", label: "AI" },
  { id: "seo", label: "SEO" },
  { id: "crm", label: "CRM" },
  { id: "erp", label: "ERP" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "engineering", label: "Software Engineering" },
];

export const posts = [
  {
 slug: "erp-integration-checklist-before-you-start",
  title: "The ERP Integration Checklist Worth Completing Before You Start",
    category: "erp",
    date: "2026-08-28",
    readingTime: 8,
    author: "AtherIQ Engineering",
    featured: true,
    excerpt:
      "Most ERP integration overruns are decided before any code is written. Six questions that separate an integration that holds up from one that quietly corrupts your stock figures.",
    metaDescription:
      "Six questions to settle before starting an ERP integration: record ownership, sync frequency, failure handling, identity matching, volume and environments.",
    body: `
<p>ERP integration projects rarely fail on the code. They fail because two systems were connected before anyone agreed what should happen when they disagree. The integration works in testing, goes live, and three weeks later somebody notices that the website is showing stock the warehouse does not have.</p>
<p>The questions below take a couple of workshops to answer properly. They are considerably cheaper to answer then than after go-live.</p>

<h2>1. Which system owns each field?</h2>
<p>Not each record — each field. It is common for the ERP to own pricing and stock while the CRM owns the contact's phone number and the e-commerce platform owns their delivery preferences. Write the ownership map down as a table, field by field, and get it signed off by someone from operations as well as IT.</p>
<p>Where two systems both legitimately write to the same field, you need a tie-break rule: last-write-wins, ERP-always-wins, or flag for manual review. All three are defensible. Having no rule is not.</p>

<h2>2. Does this flow need to be real time?</h2>
<p>Real-time synchronisation is more expensive to build and considerably more expensive to operate than a scheduled job. It is worth it for some flows and wasteful for others.</p>
<p>Stock levels on a fast-moving catalogue usually justify near real-time updates, because the cost of overselling is a refund and a lost customer. A product description or a category name is fine on a nightly batch. Order creation should be immediate; historical order reconciliation should not be.</p>
<p>Decide flow by flow. Applying one answer across the whole integration is how projects end up with a scheduled job hammering an ERP every thirty seconds for data that changes twice a month.</p>

<h2>3. What happens when it fails?</h2>
<p>It will fail. The ERP will be down for a maintenance window, a network will drop mid-request, or a partner API will start returning 503s. The question is what your integration does about it.</p>
<p>At minimum you need three things. Retries with exponential backoff, so a transient failure resolves itself. A dead-letter queue, so anything that exhausts its retries lands somewhere visible rather than disappearing. And alerting on that queue, so somebody knows within minutes rather than at month end.</p>
<p>Idempotency deserves specific attention. If a retry causes a second copy of the same order to be created in the ERP, your retry logic has become a data corruption mechanism. Every write operation needs a deterministic key the receiving system can use to recognise a duplicate.</p>

<h2>4. How are records matched across systems?</h2>
<p>The ERP has a customer number. The CRM has a contact ID. The website has an email address. None of these match, and email addresses are shared between colleagues more often than anyone expects.</p>
<p>You need a matching strategy and somewhere to store the cross-reference. The cleanest approach is usually a mapping table in the integration layer holding the identifier for each system against a single internal key. Matching on email or company name alone will merge records that should be separate.</p>

<h2>5. What volume are we actually dealing with?</h2>
<p>An integration that handles two hundred orders a day comfortably may collapse at two thousand, and the failure mode is usually the ERP rather than the integration code — older systems frequently have concurrency limits that nobody documented.</p>
<p>Get real numbers before designing: records today, expected peak, growth over the next two years, and the seasonal shape. Then confirm what the ERP's API can sustain. Rate limiting on your side protects the ERP from load it was never sized for, which is a friendlier outcome than discovering the limit during a sale.</p>

<h2>6. Is there a non-production environment?</h2>
<p>If the answer is no, that is the first piece of work. Testing an integration against production data is not a decision anyone makes deliberately; it is a decision that gets made by default when the project is already late.</p>
<p>A non-production ERP instance with representative data lets you test the failure cases — the duplicate, the malformed record, the timeout mid-transaction — which is exactly the testing that never happens when the only available environment is live.</p>

<h2>Where this leaves you</h2>
<p>An integration built on documented answers to these six questions is straightforward engineering. Built without them, it becomes a system nobody trusts, quietly reconciled by hand, which is where it started.</p>
<p>The deliverable to insist on before development begins is a written integration map: every data flow, its direction, its owner, its frequency, its failure behaviour and its matching rule. It is a short document. It is also the difference between an integration you can extend and one you have to replace.</p>
`,
    related: ["crm-integration-what-actually-breaks", "azure-or-aws-choosing"],
  },

  {
 slug: "core-web-vitals-fixes-that-move-the-number",
    title: "Core Web Vitals: The Fixes That Actually Move the Number",
    category: "seo",
    date: "2026-08-14",
    readingTime: 7,
    author: "AtherIQ Engineering",
    featured: false,
    excerpt:
      "Most Core Web Vitals advice is a list of everything that could theoretically matter. In practice, a handful of causes account for the majority of failing pages.",
  metaDescription:
      "A practical guide to fixing Core Web Vitals: the real causes behind failing LCP, CLS and INP scores, and which changes are worth doing first.",
    body: `
<p>Run any business website through PageSpeed Insights and you will get a list of thirty recommendations. Most of them are worth a few milliseconds. A small number account for almost all of the problem.</p>
<p>Here is where the time actually goes, by metric.</p>

<h2>Largest Contentful Paint</h2>
<p>LCP measures when the biggest visible element finishes rendering. On most business sites that is the hero image or the hero heading. Four causes cover the overwhelming majority of failures.</p>
<p><strong>An oversized hero image.</strong> A 2.4 MB JPEG scaled down by the browser to 1200px wide is the single most common cause. Serve appropriately sized variants through <code>srcset</code>, use WebP or AVIF, and set <code>fetchpriority="high"</code> on the hero so the browser does not queue it behind less important requests.</p>
<p><strong>Render-blocking CSS.</strong> Every stylesheet in the head delays first paint. One optimised stylesheet beats six, and anything below the fold can load asynchronously.</p>
<p><strong>Web fonts.</strong> A font that blocks text rendering will hold your LCP hostage. Use <code>font-display: swap</code>, preconnect to the font origin, and subset to the character ranges you actually serve. Self-hosting removes a DNS lookup and a connection entirely.</p>
<p><strong>Slow server response.</strong> If time to first byte is above about 600ms, nothing on the front end will save you. Look at database queries on the page, missing caching, and whether the origin is geographically anywhere near your users.</p>

<h2>Cumulative Layout Shift</h2>
<p>CLS is the easiest of the three to fix and the most irritating to users. Content that moves after they have started reading — or worse, as they reach for a button — is a direct usability problem.</p>
<p>Almost all of it comes from three sources. Images and iframes without <code>width</code> and <code>height</code> attributes, so the browser cannot reserve space. Banners, cookie notices and promotional bars injected above existing content after load. And web fonts whose fallback has substantially different metrics, causing a reflow when the real font arrives.</p>
<p>The fixes are mechanical: set explicit dimensions or an <code>aspect-ratio</code> on every image, reserve space for anything injected dynamically, and use <code>size-adjust</code> on your font fallback to match metrics. This is usually a day of work and it typically takes CLS to near zero.</p>

<h2>Interaction to Next Paint</h2>
<p>INP replaced First Input Delay and is a harder metric, because it measures every interaction rather than only the first. It is fundamentally a JavaScript problem.</p>
<p>The usual causes are long tasks blocking the main thread, expensive event handlers doing layout work synchronously, and third-party scripts — analytics, chat widgets, tag managers, heat mapping — competing for the same thread as your interface.</p>
<p>Start by auditing what third-party scripts are actually on the page and what each one is worth. It is common to find four analytics tools where one is being read. After that, break up long tasks, debounce expensive handlers, and move heavy work off the main thread where you can.</p>

<h2>The order to do this in</h2>
<p>If you are starting from a failing page, this sequence gives the most improvement per hour spent:</p>
<ol>
<li>Fix image sizing and formats. Usually the largest single LCP gain.</li>
<li>Set dimensions on all media. Usually resolves most of CLS.</li>
<li>Audit and remove unused third-party scripts. Helps INP and LCP together.</li>
<li>Reduce and defer CSS and JavaScript.</li>
<li>Address server response time and caching.</li>
</ol>

<h2>Measure field data, not just lab data</h2>
<p>Lighthouse runs a simulation on your machine. The Chrome User Experience Report reflects what your actual visitors experienced, on their devices and connections, and that is what Google uses. A site can score 98 in Lighthouse and still fail Core Web Vitals in the field.</p>
<p>Use Search Console's Core Web Vitals report as the source of truth, and treat Lighthouse as a debugging tool for finding causes rather than as the scoreboard. Field data lags by 28 days, so make the changes, then wait before drawing conclusions.</p>
`,
    related: ["technical-seo-audit-priorities", "erp-integration-checklist-before-you-start"],
  },

  {
    slug: "azure-or-aws-choosing",
    title: "Azure or AWS: How to Choose Without a Sales Deck",
    category: "cloud",
    date: "2026-07-30",
    readingTime: 6,
    author: "AtherIQ Engineering",
  featured: false,
    excerpt:
    "Both platforms will run your application well. The decision is usually settled by what you already own, who will operate it, and where your data has to live.",
    metaDescription:
      "A practical comparison of Microsoft Azure and AWS for business applications: identity, existing skills, licensing, managed services and operating cost.",
    body: `
<p>Comparisons of Azure and AWS tend to turn into feature tables, which is the least useful way to make the decision. Both platforms have compute, managed databases, object storage, serverless functions, container orchestration and a CDN. Both will run your application reliably. The differences that actually determine the right answer are elsewhere.</p>

<h2>What identity system do you already run?</h2>
<p>This is usually the deciding factor and it rarely appears in comparisons. If your organisation runs Microsoft 365 and Entra ID, Azure lets your applications use that identity directly. Staff sign in with existing accounts, group membership drives application permissions, and offboarding someone in one place removes their access everywhere.</p>
<p>Achieving the same on AWS is entirely possible, but it is a federation setup you build and maintain rather than something that is already true. If Microsoft identity is your backbone, Azure removes a category of work.</p>

<h2>What does your team already know?</h2>
<p>A platform your team can operate confidently at 2am beats a marginally better-suited one they are learning under pressure. If your developers are .NET-focused and have used Visual Studio and Azure DevOps for years, Azure's tooling will feel like an extension of what they do. If your team has been running Linux and Terraform on AWS for five years, moving to Azure buys you nothing and costs you a year of fluency.</p>

<h2>What are you actually paying for?</h2>
<p>Headline compute pricing between the two is close enough that it should not drive the decision. Two things do move the number materially.</p>
<p>The first is licensing. Azure Hybrid Benefit lets organisations with existing Windows Server and SQL Server licences apply them to Azure, which can be a substantial reduction for Microsoft-heavy estates. There is no equivalent on AWS.</p>
<p>The second is data egress. Both platforms charge to move data out. If your architecture moves large volumes out of the cloud regularly, model that cost specifically — it is the line item that surprises people.</p>

<h2>Where does the data have to live?</h2>
<p>If you have data residency requirements, check region availability for the specific services you need, not just for the platform. Regional coverage differs, and not every service is available in every region on either provider.</p>

<h2>Where the platforms genuinely differ</h2>
<p>AWS has more services and more depth in specialist areas, particularly around data engineering and machine learning infrastructure. It has been in market longer, which shows in the breadth of community answers to obscure problems.</p>
<p>Azure integrates more smoothly with the Microsoft ecosystem — Entra ID, Microsoft 365, Power Platform, SQL Server, .NET — and its enterprise agreements often suit organisations already buying Microsoft licensing at volume.</p>
<p>For a standard business application — a web front end, an API, a relational database, background jobs, object storage and a CDN — both platforms do this well and the architecture looks broadly similar on either.</p>

<h2>A reasonable default</h2>
<p>If you are a Microsoft organisation running .NET workloads with Entra ID: choose Azure. If you are already on AWS with a team that knows it: stay. If you are starting fresh with a Linux and open-source stack and no Microsoft dependency: AWS is a fine default, and Azure is a fine alternative.</p>
<p>What matters more than the choice is committing to it. Splitting a small estate across two providers doubles the operational surface — two identity models, two networking models, two billing structures, two sets of expertise to maintain — for benefits that only materialise at considerable scale.</p>
`,
    related: ["erp-integration-checklist-before-you-start", "when-custom-software-is-wrong-answer"],
  },

  {
    slug: "when-custom-software-is-wrong-answer",
    title: "When Custom Software Is the Wrong Answer",
    category: "engineering",
    date: "2026-07-16",
    readingTime: 6,
    author: "AtherIQ Engineering",
    featured: false,
    excerpt:
    "We build custom software. We also turn down projects where an off-the-shelf product would serve the client better. Here is how that line gets drawn.",
    metaDescription:
      "How to decide between custom software and an off-the-shelf product: total cost of ownership, process uniqueness, and the questions worth asking first.",
  body: `
<p>There is an obvious conflict of interest in a development company advising you on whether to build custom software. We will state our position plainly: a good number of the enquiries we receive would be better served by configuring an existing product, and we say so.</p>
<p>Here is the reasoning we apply, so you can apply it yourself.</p>

<h2>Is the process genuinely unusual?</h2>
<p>Most business processes are variations on patterns that thousands of companies share. Quoting, invoicing, inventory, ticketing, scheduling, expense approval — these are solved problems with mature products behind them, and the products have absorbed decades of edge cases you have not thought of yet.</p>
<p>What is often unusual is one step in the middle of an otherwise standard process. That is an integration or an extension, not a ground-up build.</p>
<p>The test worth applying: if you described your process to a competitor, would they recognise it? If yes, a product probably exists. If your process is a genuine differentiator that competitors could not easily copy, custom software may be protecting something real.</p>

<h2>What is the three-year cost of each option?</h2>
<p>The comparison people make is build cost against annual licence cost, which flatters custom software considerably. The honest comparison includes, on the custom side: initial build, hosting, monitoring, security patching, dependency upgrades, defect fixes, the enhancements you will want in year two, and the risk that whoever built it is unavailable when you need a change.</p>
<p>On the product side: licences at your actual seat count including growth, implementation and configuration, integration work, training, and the price increases that arrive at renewal.</p>
<p>Run both over three years. Sometimes custom wins clearly, particularly at high seat counts where per-user pricing compounds. Sometimes it does not, and that is worth knowing before you commit.</p>

<h2>How much of the product would you actually use?</h2>
<p>A common argument against off-the-shelf software is that it does far more than you need. That is usually not a real cost — unused features sit there harmlessly.</p>
<p>The real question is the inverse: what percentage of what you need does the product cover? At 90%, configure it and integrate the gap. At 60%, you are heading for a heavily customised implementation that will be painful to upgrade and will cost more than a focused custom build. Somewhere between those, judgement applies.</p>

<h2>Who will maintain it?</h2>
<p>Custom software is an asset with an ongoing obligation attached. Someone has to apply security patches, upgrade dependencies as they reach end of life, respond when it breaks, and make changes as the business changes.</p>
<p>If you have no internal technical capability and no intention of retaining a development partner, a product with a vendor behind it is the lower-risk choice — even if it fits less well.</p>

<h2>Where custom software genuinely wins</h2>
<p>It is the right answer when the process is a real differentiator, when integration across several systems is the core requirement, when per-seat licensing has become disproportionate at your headcount, when the data cannot go to a third-party platform for regulatory reasons, or when you have evaluated the products and they genuinely do not fit.</p>
<p>Those are common enough that we stay busy. They are just not universal, and pretending otherwise would cost our clients money.</p>

<h2>The middle path</h2>
<p>The most economical answer is frequently neither extreme: keep the packaged product for the standard 80%, and build a focused custom application for the part that is genuinely yours, integrated through APIs.</p>
<p>You get the vendor's maintenance on the commodity work and full control over the part that matters. It requires a well-designed integration layer, which is real work — but it is considerably less work than rebuilding an ERP because one module did not fit.</p>
`,
    related: ["erp-integration-checklist-before-you-start", "crm-integration-what-actually-breaks"],
  },

  {
  slug: "crm-integration-what-actually-breaks",
    title: "CRM Integration: What Actually Breaks in Production",
    category: "crm",
    date: "2026-06-25",
  readingTime: 5,
    author: "AtherIQ Engineering",
    featured: false,
    excerpt:
      "The integration passed testing and went live. Five failure modes that show up weeks later, and how to design them out beforehand.",
metaDescription:
      "The five CRM integration failures that appear after go-live: duplicates, silent failures, expiring credentials, rate limits and lost lead attribution.",
    body: `
<p>CRM integrations are straightforward to build and surprisingly easy to get subtly wrong. The failures below rarely appear in testing, because testing uses clean data at low volume over a short window. They appear at week three.</p>

<h2>1. Duplicate records</h2>
<p>The same person submits an enquiry twice, or their email address differs by a capital letter, or a retry fires after the original request actually succeeded. Now there are two records and the pipeline is counting both.</p>
<p>Two things prevent this. A deterministic matching rule — normalised email plus company, or an external identifier you control — checked before creation rather than after. And idempotency keys on write operations, so a retry updates the existing record rather than creating a second one.</p>

<h2>2. Silent failures</h2>
<p>An integration that fails loudly is a minor operational issue. One that fails silently is a business problem discovered when someone asks why last month's lead numbers dropped.</p>
<p>Every integration needs three things: structured logging of every operation with its outcome, a dead-letter queue for anything that exhausts its retries, and an alert when that queue is non-empty. The alert should reach a person, not a dashboard nobody has open.</p>

<h2>3. Expiring credentials</h2>
<p>OAuth refresh tokens expire. API keys get rotated. Certificates reach their end date. Each of these takes a working integration offline at a moment nobody planned for.</p>
<p>Track expiry dates as calendar items with an owner. Monitor for authentication errors specifically, rather than treating them as generic failures, because a 401 means something different from a 503 and should page someone. Where the platform supports it, use long-lived service credentials designed for machine-to-machine access rather than a token tied to an individual's account — which will break the day that person leaves.</p>

<h2>4. Rate limits</h2>
<p>Every CRM API has limits, and they are usually generous enough that development never encounters them. Then a bulk import runs, or a data migration, or a retry storm following a brief outage, and suddenly every request is being rejected.</p>
<p>Design for it: client-side rate limiting below the documented ceiling, exponential backoff with jitter on 429 responses, and bulk endpoints for bulk operations instead of a loop of single-record calls. Jitter matters — without it, everything that failed together retries together.</p>

<h2>5. Lost lead attribution</h2>
<p>This one is not a technical failure, which is why it survives so long. The integration works perfectly and every lead reaches the CRM, but the source field is empty or defaults to "Web". Marketing spend can no longer be tied to outcomes.</p>
<p>Capture attribution at the point of form submission — UTM parameters, referrer, landing page, campaign — and carry it through the integration into fields the CRM reports on. It is a small amount of work at build time and effectively impossible to reconstruct afterwards.</p>

<h2>The pattern</h2>
<p>None of these are exotic. They are the ordinary consequences of building for the path where everything works, then meeting production traffic, real data and time.</p>
<p>The design questions worth asking before you build: what happens on a duplicate, what happens on a failure, what happens when credentials expire, what happens at ten times the volume, and what will the business need to report on later. Answer those five and the integration will hold up.</p>
`,
    related: ["erp-integration-checklist-before-you-start", "when-custom-software-is-wrong-answer"],
  },
];

export const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));
export const categoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? id;

/** Newest first. */
export const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));
export const featuredPost = posts.find((p) => p.featured) ?? sortedPosts[0];
