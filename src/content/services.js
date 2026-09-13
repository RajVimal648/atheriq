/**
 * Service catalogue. Every service detail page is generated from one entry
 * here, so adding a service means adding an object - no new template needed.
 *
 * Field guide:
 *   slug            URL segment under /services/
 *   group        grouping used by the mega menu and /services page
 *   card        short description used on cards across the site
 * metaTitle/Desc  <title> and meta description (keep description <= 160 chars)
 *   lead     hero paragraph
 *   overview        2-3 paragraphs of business-language explanation
 *   capabilities    "What We Provide" - concrete deliverables
 *   benefits        business outcomes, not feature restatements
 *   stack     technology names shown on the page
 *   faqs            page-specific questions (also emitted as FAQPage schema)
 *   related    slugs of services to cross-link (internal linking / SEO)
 */

export const serviceGroups = [
  { id: "development", title: "Development", blurb: "Websites, applications and software built around how your business actually operates." },
  { id: "cloud", title: "Cloud", blurb: "Architecture, migration and deployment on Microsoft Azure and AWS." },
  { id: "integration", title: "Integration", blurb: "Connecting CRM, ERP, APIs and the systems your teams already use." },
  { id: "growth", title: "Digital Growth", blurb: "Technical SEO and performance work that makes your site easier to find and easier to buy from." },
  { id: "intelligent", title: "Intelligent Solutions", blurb: "Practical AI features and automation inside real business applications." },
];

export const services = [
  /* ---------------------------------------------------------------- DEVELOPMENT */
  {
    slug: "web-development",
    group: "development",
    name: "Web Development",
  short: "Web Development",
    icon: "browser",
    card: "Modern, responsive and scalable websites and web applications, built on standards that keep them fast and maintainable.",
    metaTitle: "Website & Web Application Development Company | AtherIQ",
    metaDescription:
      "Website and web application development services. Responsive, accessible, SEO-ready builds in React, Angular, .NET and Node.js.",
    lead: "We build websites and web applications that load quickly, rank well and stay maintainable long after launch.",
    overview: [
      "A business website has two jobs: explain what you do clearly enough that the right visitor recognises themselves in it, and make the next step obvious. A web application has a harder job again — it has to hold up under daily use by people who did not choose the software and cannot work around it.",
      "AtherIQ builds both. We start from the content and the workflows rather than the layout, decide what actually needs to run in the browser, and keep the rendered output lean so that search engines and slow connections are both well served.",
      "Every build ships with semantic markup, a sensible URL structure, responsive layouts tested from 375px upward, and a component structure your team or ours can extend without rewriting the front end.",
    ],
    capabilities: [
      { title: "Corporate & marketing websites", text: "Multi-page business sites with a clear information architecture, editable content and metadata structured for search." },
      { title: "Web applications", text: "Authenticated dashboards, portals, admin panels and internal tools with role-based access and audit-friendly data handling." },
{ title: "Progressive & responsive front ends", text: "Mobile-first layouts in React or Angular, or server-rendered views where that is the faster and simpler answer." },
    { title: "Content management integration", text: "Headless or traditional CMS setups so marketing teams can publish without a developer in the loop." },
      { title: "Accessibility & standards", text: "Semantic HTML, keyboard navigation, focus states, form labelling and colour contrast checked against WCAG guidance." },
    { title: "Performance engineering", text: "Image optimisation, lazy loading, critical CSS, caching strategy and Core Web Vitals measurement before and after launch." },
    ],
    benefits: [
      { title: "Search visibility built in", text: "Clean markup, fast rendering and structured metadata mean you are not retrofitting SEO six months after launch." },
 { title: "Lower cost of change", text: "A documented component structure keeps the second and third round of changes as cheap as the first." },
      { title: "Works on the devices your customers use", text: "Layouts, forms and navigation are tested across phone, tablet, laptop and large-desktop breakpoints." },
   { title: "Ready for integration", text: "Front ends are built to talk to APIs, CRMs and payment providers rather than being rebuilt when you add them." },
    ],
  stack: ["React", "Angular", "JavaScript", "HTML", "CSS", ".NET", "Node.js", "REST APIs", "SQL Server", "PostgreSQL"],
    faqs: [
   { q: "Can you build a custom website for my business?", a: "Yes. We build custom websites from scratch rather than customising off-the-shelf themes, so the structure matches your services, your audience and the way you sell — not a template's assumptions." },
      { q: "Do you redesign existing websites?", a: "Frequently. We audit the current site's content, structure, performance and search footprint first, then plan the redesign so existing rankings and URLs are preserved or properly redirected." },
      { q: "Will I be able to update the content myself?", a: "Yes, where you want that. We can integrate a CMS so your team edits pages, blog posts and metadata directly, or keep content in structured files if a developer-managed workflow suits you better." },
    { q: "What is the difference between a website and a web application?", a: "A website presents information and captures enquiries. A web application lets users log in and do work — manage records, run reports, process transactions. The engineering, security and testing requirements are different, and we scope them differently." },
    ],
related: ["ecommerce-development", "seo", "api-integration", "custom-software-development"],
  },

  {
    slug: "mobile-app-development",
    group: "development",
    name: "Mobile App Development",
    short: "Mobile Apps",
    icon: "mobile",
    card: "Business-focused Android and iOS applications, connected to your existing systems and built for real-world network conditions.",
    metaTitle: "Mobile App Development Services (Android & iOS) | AtherIQ",
    metaDescription:
   "Android and iOS mobile app development. Customer-facing and internal business apps, integrated with your APIs, CRM and cloud back end.",
    lead: "Android and iOS applications designed around a business process, not around a feature list.",
    overview: [
      "Most business mobile apps fail for one of two reasons: they duplicate a website that already worked fine on a phone, or they were built without a plan for the back end they depend on. Both are avoidable at the scoping stage.",
      "We start by asking what the app does that the browser cannot — offline capability, camera and scanning, push notifications, location, device hardware, or simply being on the home screen of someone who uses it every day. If the answer is thin, we will say so.",
      "From there we design the data flow first: what the app stores locally, what it syncs, how it behaves on a poor connection, and how it authenticates against your existing systems.",
    ],
    capabilities: [
      { title: "Customer-facing apps", text: "Ordering, booking, account management, loyalty and self-service applications published to the Play Store and App Store." },
      { title: "Internal & field apps", text: "Applications for sales teams, field engineers, delivery staff and warehouse operations, including offline-first data capture." },
      { title: "Back-end & API layer", text: "The services the app depends on — authentication, sync, notifications and business logic — designed alongside the client." },
      { title: "System integration", text: "Connections into CRM, ERP, payment gateways and internal databases so the app reflects live business data." },
    { title: "Release management", text: "Store listings, build signing, staged rollouts, crash reporting and versioning strategy for future updates." },
      { title: "Post-launch support", text: "OS version upgrades, dependency updates, defect fixes and incremental feature releases." },
    ],
    benefits: [
      { title: "Fewer manual steps", text: "Field and floor staff capture data once, at source, instead of re-keying it into a desktop system later." },
      { title: "Works where the signal does not", text: "Offline-first design means work continues on a weak connection and syncs cleanly when it returns." },
      { title: "One source of truth", text: "The app reads and writes to the same systems as the rest of the business, so reporting stays consistent." },
      { title: "A maintainable release path", text: "Versioning, crash reporting and a documented build process keep updates routine rather than risky." },
    ],
  stack: ["React Native", "Android", "iOS", "REST APIs", ".NET", "Node.js", "Azure", "AWS", "MongoDB", "SQL Server"],
    faqs: [
      { q: "Can you develop mobile applications for both Android and iOS?", a: "Yes. We usually recommend a cross-platform build so one codebase serves both stores, which reduces cost and keeps feature parity. Where an app depends heavily on platform-specific hardware or performance, we will advise native instead." },
      { q: "Can the app connect to our existing systems?", a: "That is normally the point. We integrate with CRM, ERP, inventory systems, payment gateways and internal databases through APIs, so the app works with live business data rather than a separate copy of it." },
      { q: "Do you handle app store publishing?", a: "Yes. We prepare the store listings, handle signing and provisioning, submit the build and manage the review process. Accounts remain registered in your company's name." },
      { q: "Can you take over an existing mobile app?", a: "Usually. We start with a code and dependency review to establish what state it is in, then give you an honest assessment of whether it is better to continue the codebase or replace it." },
    ],
  related: ["api-integration", "custom-software-development", "cloud", "crm-integration"],
  },

  {
    slug: "custom-software-development",
    group: "development",
    name: "Custom Software Development",
    short: "Custom Software",
    icon: "code",
    card: "Software shaped around specific business workflows, for the processes no off-the-shelf product handles properly.",
    metaTitle: "Custom Software Development Services | AtherIQ",
    metaDescription:
      "Custom business software built around your workflows. Internal systems, portals and line-of-business applications in .NET, Python and Node.js.",
    lead: "When the process is the competitive advantage, the software should fit the process — not the other way round.",
    overview: [
      "Every business runs a handful of processes that no packaged product models correctly. Those gaps usually get filled by spreadsheets, shared inboxes and one person who knows how it all fits together. It works until volume, staff turnover or an audit exposes it.",
 "Custom software is the right answer when the process is genuinely yours, when the manual workaround has a measurable cost, or when three separate tools are being reconciled by hand. It is the wrong answer when a configured off-the-shelf product would do — and we will tell you when that is the case.",
      "We build line-of-business applications with the unglamorous parts included: permissions, audit trails, data validation, error handling, reporting and a migration path for the data currently living in those spreadsheets.",
    ],
    capabilities: [
      { title: "Requirement & process analysis", text: "Sessions with the people who actually run the process, documenting the exceptions as carefully as the happy path." },
    { title: "Solution architecture", text: "Data model, service boundaries, integration points, hosting topology and a security model agreed before development starts." },
      { title: "Line-of-business applications", text: "Order management, scheduling, quotations, approvals, inventory, compliance tracking and internal portals." },
      { title: "Role-based access & audit", text: "Granular permissions, activity logging and data-change history for accountability and compliance requirements." },
      { title: "Reporting & dashboards", text: "Operational reporting built on the live data model, with exports for the finance and management reporting you already produce." },
   { title: "Data migration", text: "Extraction, cleansing and import of existing records from spreadsheets, legacy databases or retiring applications." },
    ],
    benefits: [
      { title: "The workaround disappears", text: "Work that lived in spreadsheets and email threads moves into a system with validation, ownership and history." },
      { title: "Process knowledge stops being personal", text: "Rules encoded in software survive staff changes in a way that tribal knowledge does not." },
      { title: "You own the asset", text: "Source code, data and infrastructure are yours. No per-seat licence that reprices as you grow." },
 { title: "It changes when the business changes", text: "A system built for your process can be extended as the process evolves, rather than constraining it." },
    ],
    stack: [".NET", "C#", "Python", "Node.js", "React", "Angular", "SQL Server", "PostgreSQL", "Docker", "Azure DevOps"],
    faqs: [
      { q: "How do you decide between custom software and an off-the-shelf product?", a: "We look at how unusual the process really is, what the packaged options cost at your seat count over three years, and how much configuration they would need. If a product fits with light configuration, that is the cheaper answer and we will say so." },
  { q: "Can you build software that works with the systems we already have?", a: "Yes. Most custom builds we deliver sit alongside existing CRM, ERP, accounting or inventory systems and exchange data with them through APIs or scheduled synchronisation." },
      { q: "Who owns the source code?", a: "You do. Ownership of the code, the data and the hosting accounts transfers to your business, and we hand over repository access and documentation as part of delivery." },
{ q: "Can you take over software built by another team?", a: "Yes, subject to a review. We assess the codebase, dependencies, test coverage and deployment process first, then set out what maintenance would involve before committing." },
    ],
    related: ["api-integration", "erp-integration", "cloud", "ai-automation"],
  },

  {
    slug: "ecommerce-development",
    group: "development",
    name: "E-Commerce Development",
    short: "E-Commerce",
    icon: "cart",
    card: "Secure, scalable commerce platforms with the catalogue, checkout, payment and fulfilment integrations retail actually needs.",
 metaTitle: "E-Commerce Website Development Services | AtherIQ",
    metaDescription:
      "E-commerce development and integration. Product catalogues, secure checkout, payment gateways, ERP and inventory sync built to convert.",
    lead: "Commerce platforms built around catalogue, checkout and fulfilment — the three places online stores actually lose money.",
    overview: [
   "An online store is a supply chain with a web page attached. The storefront matters, but the revenue leaks are almost always elsewhere: a checkout with too many steps, stock levels that do not match the warehouse, or a product feed that search engines cannot read.",
"We build and integrate commerce platforms with those three areas as the priority. Catalogue structure is designed for both merchandising and search. Checkout is measured and shortened. Inventory, pricing and order status are synchronised with the systems that hold the real numbers.",
      "Whether that means a custom-built storefront, a headless front end on an existing commerce back end, or extending a platform you already run, we scope to what your catalogue size and order volume actually justify.",
    ],
    capabilities: [
      { title: "Storefront development", text: "Category, listing and product pages structured for merchandising, filtering and search visibility." },
      { title: "Checkout & payments", text: "Streamlined checkout flows with Razorpay, Stripe, PayPal, UPI and card gateway integration, plus saved addresses and guest checkout." },
 { title: "Catalogue & inventory management", text: "Product data models covering variants, pricing tiers, bundles and stock, synchronised with ERP or warehouse systems." },
   { title: "Order & fulfilment integration", text: "Order routing, shipping provider integration, tracking updates and returns handling connected to your operations." },
      { title: "Commerce SEO", text: "Product schema, canonical handling for variants and filters, clean URLs, XML feeds and page-speed work on listing pages." },
      { title: "Customer accounts", text: "Registration, order history, wishlists, re-ordering and B2B features such as account pricing and purchase approvals." },
  ],
    benefits: [
      { title: "Fewer abandoned carts", text: "A shorter, clearer checkout with the payment methods your customers expect removes the most common drop-off points." },
      { title: "Stock that matches reality", text: "Inventory synchronisation prevents overselling and the refunds and support load that follow it." },
      { title: "Product pages that get found", text: "Structured product data and fast listing pages give search engines what they need to show rich results." },
      { title: "Room to grow the catalogue", text: "A data model designed for variants and bundles from the start avoids a rebuild at ten times the SKU count." },
    ],
    stack: ["React", "Next.js", "Node.js", ".NET", "PostgreSQL", "MongoDB", "Redis", "Razorpay", "Stripe", "AWS", "Azure"],
    faqs: [
      { q: "Can you integrate an e-commerce site with our ERP or inventory system?", a: "Yes, and for most established retailers it is the part that matters most. We synchronise products, pricing, stock levels and orders so the storefront reflects what is actually in the warehouse." },
 { q: "Which payment gateways do you work with?", a: "We integrate the major gateways including Razorpay, Stripe, PayPal and bank-provided payment pages, along with UPI and card options. Gateway credentials stay on the server side and are never exposed in front-end code." },
      { q: "Can you improve an existing online store instead of rebuilding it?", a: "Often that is the better investment. We audit checkout, page speed, catalogue structure and search visibility, then prioritise the changes with the clearest revenue impact." },
 { q: "Do you build B2B commerce as well as retail?", a: "Yes. B2B needs account-specific pricing, credit terms, bulk ordering, quote requests and purchase approvals — we model those as first-class requirements rather than bolting them on." },
    ],
    related: ["erp-integration", "seo", "api-integration", "cloud"],
  },

  /* ---------------------------------------------------------------- INTEGRATION */
  {
    slug: "crm-integration",
    group: "integration",
    name: "CRM Solutions & Integration",
    short: "CRM Solutions",
    icon: "users",
    card: "CRM development, customisation and integration so customer data flows between your website, applications and sales process.",
    metaTitle: "CRM Development & Integration Services | AtherIQ",
    metaDescription:
      "CRM development, customisation and integration. Connect your CRM to your website, ERP and applications with reliable two-way data sync.",
  lead: "A CRM is only as useful as the data reaching it. We connect yours to the systems where that data is actually created.",
    overview: [
      "Most CRM problems are not CRM problems. The platform is fine; the issue is that leads arrive by email, quotes live in a spreadsheet, invoices sit in the accounting system and nobody trusts the pipeline report because three of those never reach the CRM.",
      "We work on both sides of that: customising the CRM so it models your sales process properly, and building the integrations that keep it fed automatically from your website forms, applications, ERP and third-party tools.",
      "Where a packaged CRM genuinely does not fit — unusual sales cycles, regulated data, or a process that spans several businesses — we build custom CRM modules or a bespoke system instead.",
    ],
    capabilities: [
      { title: "CRM customisation", text: "Custom fields, objects, stages, layouts and validation rules that match how your team actually qualifies and closes work." },
      { title: "CRM API integration", text: "Reliable two-way integration with Salesforce, HubSpot, Zoho, Dynamics 365 and other platforms with published APIs." },
      { title: "Lead capture & routing", text: "Website forms, quote requests, chat and campaign sources feeding straight into the CRM with source attribution intact." },
      { title: "Customer data synchronisation", text: "Contact, account and order data kept consistent between CRM, ERP, billing and support systems, with conflict rules defined up front." },
 { title: "Sales workflow automation", text: "Stage transitions, task creation, notifications, approvals and follow-up sequences triggered by real events in your systems." },
      { title: "Custom CRM modules & reporting", text: "Bespoke modules for requirements the platform does not cover, plus reporting that reconciles with your finance numbers." },
    ],
    benefits: [
      { title: "Pipeline you can trust", text: "When every lead and order reaches the CRM automatically, the forecast stops being a manual reconstruction." },
 { title: "No more double entry", text: "Sales teams stop re-keying data that already exists in another system, and the errors that came with it stop too." },
      { title: "Faster response to enquiries", text: "Leads route to the right owner the moment they are submitted, rather than after somebody checks a shared inbox." },
      { title: "A complete customer record", text: "Sales, support and finance see the same history, so conversations start from what actually happened." },
    ],
stack: ["Salesforce", "HubSpot", "Zoho", "Dynamics 365", "REST APIs", "Webhooks", ".NET", "Node.js", "Azure Functions", "SQL Server"],
    faqs: [
      { q: "Can you integrate my existing CRM with our website and applications?", a: "Yes. That is one of our most common projects. We connect website forms, portals, mobile apps and internal systems to the CRM so records are created and updated automatically, with the source of each lead preserved." },
      { q: "What if two systems disagree about the same customer record?", a: "We define ownership rules before building: which system is authoritative for which field, what happens on conflict, and how duplicates are matched and merged. Getting this agreed early is what makes a sync reliable." },
      { q: "Can you build a custom CRM instead of using a platform?", a: "Yes, when the process justifies it. For most businesses a mainstream CRM plus good integration is cheaper and lower-risk, so we will make that recommendation where it applies." },
 { q: "How do you handle failed synchronisations?", a: "Integrations are built with retries, dead-letter handling and logging, so a temporary API outage does not silently lose records. Failures are visible and replayable rather than discovered weeks later." },
    ],
    related: ["erp-integration", "api-integration", "ai-automation", "custom-software-development"],
  },

{
    slug: "erp-integration",
    group: "integration",
    name: "ERP Integration",
    short: "ERP Integration",
    icon: "layers",
    card: "Connect ERP with your website, e-commerce, CRM and internal applications so operational data moves without manual handling.",
    metaTitle: "ERP Integration Services & Consulting | AtherIQ",
    metaDescription:
      "ERP integration services connecting your ERP with websites, e-commerce, CRM, mobile apps and APIs for consistent operational data.",
    lead: "Your ERP holds the numbers the business runs on. Integration is what gets them to everywhere else they are needed.",
    overview: [
      "ERP systems are usually the most reliable data source a business has and the hardest one to reach. Stock, pricing, customers, invoices and production status are all in there — while the website, the CRM and the mobile app run on stale copies typed in by hand.",
    "We build the integration layer between the ERP and everything around it. That means agreeing which system owns which record, choosing between real-time APIs and scheduled synchronisation for each data flow, and handling the failure cases properly so a network blip does not corrupt a stock figure.",
      "We work with published ERP APIs and connectors where they exist, and with database-level or file-based exchange where a legacy or heavily customised ERP leaves no other option.",
    ],
    capabilities: [
      { title: "Integration architecture", text: "A documented map of data flows, ownership, direction, frequency and failure handling before a line of integration code is written." },
      { title: "ERP to e-commerce", text: "Products, pricing, stock, customers and orders synchronised between the ERP and your storefront in both directions." },
      { title: "ERP to CRM", text: "Account, order and invoice history surfaced in the CRM so sales conversations reflect the real commercial position." },
      { title: "Middleware & API layer", text: "A service layer that isolates other systems from ERP specifics, so future changes do not ripple across every application." },
   { title: "Scheduled & event-driven sync", text: "Real-time webhooks where immediacy matters, batch jobs where it does not, with monitoring on both." },
      { title: "Data reconciliation & logging", text: "Audit logs, reconciliation reports and alerting so discrepancies surface immediately instead of at month end." },
    ],
    benefits: [
   { title: "One version of the numbers", text: "Stock, pricing and order status are the same wherever anyone looks, because they come from the same place." },
      { title: "Manual re-keying stops", text: "Staff time spent copying data between systems is recovered, along with the error rate that came with it." },
      { title: "Faster order-to-fulfilment", text: "Orders land in the ERP as they are placed rather than in an end-of-day batch typed in by someone." },
      { title: "Change without a rebuild", text: "An integration layer means replacing a front end or a CRM later does not mean rebuilding every connection." },
    ],
    stack: ["REST APIs", "SOAP", "Webhooks", "Azure Service Bus", "Azure Functions", "AWS Lambda", ".NET", "Python", "SQL Server", "PostgreSQL"],
    faqs: [
      { q: "Can you integrate ERP with our website or application?", a: "Yes. We connect ERP systems to websites, e-commerce platforms, mobile apps, CRM and internal tools, using the ERP's API where one is available and database or file-based exchange where it is not." },
      { q: "Our ERP is old and heavily customised. Is integration still possible?", a: "Usually. Older systems often lack a modern API, but there is almost always a supported route — a database view, a staging table, scheduled file exchange or a vendor connector. We assess the options before quoting." },
      { q: "Should data sync in real time or on a schedule?", a: "It depends on the data. Stock and order status usually justify near real-time. Master data such as product catalogues is often fine on a scheduled sync. We decide flow by flow rather than applying one rule to everything." },
      { q: "How do you avoid breaking the ERP?", a: "Integrations are read-heavy by default, write operations are scoped narrowly and tested in a non-production environment first, and rate limiting protects the ERP from load it was not sized for." },
    ],
    related: ["crm-integration", "api-integration", "ecommerce-development", "cloud"],
  },

  {
    slug: "api-integration",
    group: "integration",
    name: "API Development & Integration",
    short: "API Integration",
    icon: "plug",
    card: "Design, build and integrate APIs that connect applications, databases, third-party services and business systems reliably.",
    metaTitle: "API Development & Integration Services | AtherIQ",
    metaDescription:
      "REST API development and third-party API integration. Secure, documented, versioned APIs connecting your applications and business systems.",
    lead: "APIs are the contracts between your systems. We design them to be clear, secure and stable enough to build on.",
    overview: [
      "Integration work goes wrong in predictable ways: an undocumented endpoint changes, an authentication token expires with nothing watching, a retry storm takes down a partner's service, or nobody can say what a field means because the contract only ever existed in a developer's head.",
      "We treat the API as a product with a specification, versioning, authentication, rate limiting and documentation — whether it is an interface you are publishing to partners or one you are consuming from a third party.",
      "For inbound integration work we handle the parts that are easy to skip and expensive to skip: idempotency, retry policy, error handling, credential rotation and monitoring that tells you an integration is failing before your customers do.",
    ],
    capabilities: [
      { title: "REST API design & development", text: "Resource modelling, versioning strategy, pagination, filtering and consistent error contracts, documented with OpenAPI." },
      { title: "Third-party API integration", text: "Payment gateways, shipping and logistics providers, messaging and email services, accounting platforms and government or banking portals." },
      { title: "Authentication & authorisation", text: "OAuth 2.0, JWT, API keys and mutual TLS, with credentials held server-side and rotated on a defined schedule." },
      { title: "Webhooks & event handling", text: "Signed inbound webhooks with replay protection, plus outbound event delivery with retries and dead-letter queues." },
      { title: "API gateway & rate limiting", text: "Throttling, quotas, caching and routing through Azure API Management or AWS API Gateway." },
      { title: "Monitoring & documentation", text: "Health checks, latency and error-rate alerting, structured logging, and reference documentation your team can actually use." },
    ],
    benefits: [
      { title: "Integrations that fail loudly", text: "Monitoring and alerting mean a broken connection is a notification, not a customer complaint three days later." },
   { title: "Safe to change", text: "Versioned contracts let you evolve an API without breaking every consumer that depends on it." },
 { title: "Faster onboarding", text: "Documented endpoints and predictable conventions cut the time any new developer or partner needs to integrate." },
   { title: "Credentials stay protected", text: "Keys and secrets live in server-side configuration and secret stores, never in front-end code or repositories." },
    ],
  stack: ["REST", "OpenAPI", "GraphQL", "OAuth 2.0", "JWT", ".NET Web API", "Node.js", "Python", "Azure API Management", "AWS API Gateway"],
    faqs: [
      { q: "Can you integrate third-party APIs into our application?", a: "Yes. We integrate payment, shipping, communication, accounting, mapping and industry-specific APIs, including handling authentication, retries and the error cases most integrations skip." },
      { q: "Can you build an API for our existing system?", a: "Yes. We commonly put a documented, secured API layer in front of a legacy application or database so newer systems can consume its data without depending on its internals." },
      { q: "How do you keep API keys and secrets secure?", a: "Secrets are stored in a managed secret store such as Azure Key Vault or AWS Secrets Manager, injected as configuration at runtime, never committed to source control and never exposed to the browser." },
      { q: "What happens if a third-party service goes down?", a: "We design for it: timeouts, exponential backoff, circuit breakers and queued retries, so a partner outage degrades one feature rather than taking your application with it." },
    ],
    related: ["crm-integration", "erp-integration", "cloud", "custom-software-development"],
  },

  /* ---------------------------------------------------------------------- CLOUD */
  {
    slug: "cloud",
    group: "cloud",
    name: "Cloud Services",
    short: "Cloud Services",
    icon: "cloud",
    card: "Cloud architecture, migration, deployment and cost optimisation on Microsoft Azure and Amazon Web Services.",
    metaTitle: "Cloud Services: Architecture, Migration & Deployment | AtherIQ",
    metaDescription:
      "Cloud consulting and engineering on Azure and AWS. Architecture, application migration, deployment automation, monitoring and cost optimisation.",
    lead: "Cloud architecture, migration and deployment work — sized to what your application actually needs, not to a reference diagram.",
    overview: [
      "Cloud projects tend to fail in one of two directions. Either an application is lifted onto virtual machines unchanged and the monthly bill arrives with none of the promised flexibility, or it is re-architected into a dozen managed services that the team cannot operate.",
      "We aim for the middle. Start with what the application does, how much traffic it genuinely serves, what its recovery requirements are, and who will run it after go-live. Then choose the smallest architecture that meets those requirements with room to grow.",
      "We work across Microsoft Azure and AWS, and we are equally willing to tell you that your current hosting is fine and the money is better spent elsewhere.",
    ],
    capabilities: [
      { title: "Cloud architecture & assessment", text: "Workload review, target architecture, cost modelling and a migration plan with sequencing and rollback points." },
      { title: "Application migration", text: "Moving web applications, APIs and databases to the cloud with a tested cutover plan and minimal service interruption." },
      { title: "Deployment automation", text: "Infrastructure as code and CI/CD pipelines so environments are reproducible and releases are routine." },
      { title: "Containers & orchestration", text: "Docker packaging and Kubernetes or managed container services where the workload justifies the operational overhead." },
      { title: "Security & networking", text: "Network segmentation, private endpoints, identity and access management, secret storage and encryption in transit and at rest." },
      { title: "Monitoring & cost optimisation", text: "Metrics, log aggregation, alerting, autoscaling policies and right-sizing reviews that keep spend proportionate to load." },
    ],
    benefits: [
      { title: "Capacity that follows demand", text: "Autoscaling handles seasonal and campaign traffic without provisioning for the peak all year." },
      { title: "Predictable releases", text: "Automated pipelines and reproducible environments remove the manual steps where deployments usually break." },
      { title: "A real recovery position", text: "Backups, redundancy and a documented, tested restore process — rather than an assumption that it will work." },
      { title: "Spend you can explain", text: "Tagging, budgets and right-sizing reviews turn the cloud bill into something with line items you recognise." },
    ],
    stack: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Azure DevOps", "Linux", "Nginx", "PostgreSQL"],
    faqs: [
      { q: "Can you migrate an existing application to the cloud?", a: "Yes. We assess the application, its dependencies and its data first, then plan the migration in stages with a tested cutover and a rollback option at each step." },
      { q: "Azure or AWS — which should we choose?", a: "It usually comes down to what you already run. Microsoft-centric organisations with Active Directory and .NET workloads tend to get more from Azure; teams already on AWS or using its specific managed services should generally stay. Both are capable platforms." },
      { q: "Will moving to the cloud reduce our costs?", a: "Not automatically. A lift-and-shift onto oversized instances often costs more than the servers it replaced. Savings come from right-sizing, autoscaling and using managed services instead of running everything yourself — which we plan for explicitly." },
      { q: "Can you manage our cloud infrastructure after migration?", a: "Yes. We offer ongoing support covering monitoring, patching, deployments, cost reviews and incident response, scoped to the level of cover you need." },
    ],
    related: ["azure", "aws", "api-integration", "custom-software-development"],
  },

  {
    slug: "azure",
    group: "cloud",
    name: "Microsoft Azure Services",
    short: "Microsoft Azure",
    icon: "azure",
    card: "Application deployment, infrastructure and integration services built on the Microsoft Azure platform.",
    metaTitle: "Microsoft Azure Services & Cloud Consulting | AtherIQ",
    metaDescription:
      "Microsoft Azure services: App Service, Azure SQL, Functions, AKS, Storage and Azure DevOps. Application deployment, migration and cloud architecture.",
    lead: "Azure application deployment, infrastructure and DevOps work for businesses already invested in the Microsoft stack.",
    overview: [
      "If your organisation already runs Microsoft 365, Active Directory and .NET applications, Azure removes a lot of friction. Identity carries across, licensing often works in your favour, and the tooling your developers already use has first-class support.",
      "We build and deploy applications on Azure using managed services wherever they reduce operational load — App Service instead of VMs, Azure SQL instead of a self-managed database server, Functions for event-driven work that does not justify an always-on host.",
      "The emphasis is on outcomes rather than the service list: an application that deploys reliably, scales when it needs to, recovers from failure and costs a predictable amount each month.",
    ],
    capabilities: [
      { title: "Azure App Service", text: "Web application and API hosting with deployment slots, custom domains, managed certificates and staged releases." },
      { title: "Azure SQL & data services", text: "Managed SQL databases with automated backups, geo-replication options, performance tuning and a defined retention policy." },
      { title: "Azure Functions", text: "Event-driven and scheduled processing for integrations, background jobs and webhook handling without a permanently running host." },
      { title: "Azure Kubernetes Service & Container Registry", text: "Container orchestration, private image registries and rolling deployments for workloads that need them." },
      { title: "Storage, networking & security", text: "Blob storage, virtual networks, private endpoints, Key Vault for secrets, and Entra ID integration for application sign-in." },
      { title: "Azure DevOps & pipelines", text: "Repositories, build and release pipelines, environment approvals and infrastructure as code with Bicep or Terraform." },
    ],
    benefits: [
      { title: "Identity you already manage", text: "Entra ID integration means staff sign in with existing accounts, and offboarding removes access everywhere at once." },
      { title: "Less infrastructure to run", text: "Managed services handle patching, backups and failover, so your team spends its time on the application instead." },
      { title: "Releases without downtime", text: "Deployment slots and staged pipelines let you validate a release in production infrastructure before it takes traffic." },
      { title: "Costs you can forecast", text: "Reserved capacity, autoscale rules and budget alerts keep the monthly bill inside a range you have agreed." },
    ],
    stack: ["Azure App Service", "Azure SQL", "Azure Functions", "Azure Kubernetes Service", "Azure Container Registry", "Azure Storage", "Azure Key Vault", "Azure DevOps", "Entra ID", ".NET"],
    faqs: [
      { q: "Do you provide Microsoft Azure services?", a: "Yes. We design, deploy and support applications on Azure, covering App Service, Azure SQL, Functions, Storage, AKS, networking and Azure DevOps pipelines." },
      { q: "Can you move our on-premises application to Azure?", a: "Yes. We assess the application and its dependencies, choose between rehosting and re-platforming for each component, and run the migration in stages with a tested cutover." },
      { q: "Can you set up CI/CD with Azure DevOps?", a: "Yes. We build pipelines covering source control, automated builds, testing, environment approvals and deployment to App Service or AKS, with infrastructure defined as code." },
  { q: "Do we need to be a Microsoft organisation to use Azure?", a: "No, but the case is strongest if you are. If you already run Microsoft 365, Active Directory or .NET workloads, Azure integrates with them directly. If you do not, AWS may suit you equally well and we will say so." },
  ],
    related: ["cloud", "aws", "custom-software-development", "api-integration"],
  },

  {
    slug: "aws",
group: "cloud",
    name: "AWS Services",
    short: "AWS",
    icon: "aws",
    card: "AWS architecture, deployment and infrastructure engineering for applications that need to scale predictably.",
    metaTitle: "AWS Cloud Services & Application Deployment | AtherIQ",
    metaDescription:
      "AWS cloud services covering EC2, S3, RDS, Lambda, API Gateway, CloudFront and IAM. Architecture, deployment, monitoring and scaling.",
    lead: "AWS architecture and deployment work, with the security and cost controls in place from the first environment.",
    overview: [
    "AWS gives you a service for almost every requirement, which is both the advantage and the trap. Projects go wrong when the architecture uses fifteen services where four would do, or when IAM and networking are treated as something to tidy up later.",
      "We design AWS environments around the workload: compute sized to real traffic, managed databases rather than self-run instances where it makes sense, and serverless for work that is genuinely event-driven.",
      "Security and cost controls go in from the beginning — least-privilege IAM, private subnets, encryption, tagging and budget alerts — because retrofitting them across a live estate is considerably more expensive.",
],
    capabilities: [
      { title: "Compute & hosting", text: "EC2, ECS and Elastic Beanstalk for containerised and traditional applications, with autoscaling and load balancing." },
      { title: "Serverless applications", text: "Lambda functions behind API Gateway for event-driven processing, scheduled jobs and integration endpoints." },
      { title: "Databases & storage", text: "RDS for PostgreSQL, MySQL and SQL Server, DynamoDB for high-throughput key-value workloads, S3 for object storage and static assets." },
  { title: "Content delivery & networking", text: "CloudFront distributions, Route 53 DNS, VPC design with public and private subnets, security groups and gateways." },
      { title: "Identity & security", text: "Least-privilege IAM roles and policies, Secrets Manager, KMS encryption, CloudTrail auditing and GuardDuty monitoring." },
      { title: "Monitoring & operations", text: "CloudWatch metrics, logs, dashboards and alarms, plus deployment automation through CodePipeline or GitHub Actions." },
],
    benefits: [
      { title: "Scales with traffic, not with guesswork", text: "Autoscaling groups and serverless components absorb spikes without provisioning for the annual peak year-round." },
   { title: "Global delivery", text: "CloudFront puts static assets and cached responses close to users, cutting load times for distributed audiences." },
      { title: "Least privilege by default", text: "IAM roles scoped to what each component needs limits the blast radius when something is compromised." },
      { title: "Costs attributed properly", text: "Tagging and budget alerts show which application, environment or team is generating spend." },
    ],
    stack: ["EC2", "S3", "RDS", "Lambda", "API Gateway", "CloudFront", "IAM", "CloudWatch", "ECS", "Route 53"],
    faqs: [
   { q: "Do you provide AWS services?", a: "Yes. We design, deploy and support applications on AWS using EC2, ECS, Lambda, RDS, S3, API Gateway, CloudFront and the supporting networking, identity and monitoring services." },
      { q: "Can you migrate an application from another host to AWS?", a: "Yes. We assess the application, plan the target architecture, migrate the data with a tested cutover, and keep the previous environment available until the new one has proved itself." },
      { q: "Can you reduce our existing AWS bill?", a: "Frequently. Common wins are oversized instances, unattached storage, missing lifecycle policies on S3, idle non-production environments and on-demand pricing where reserved or savings plans would apply. We start with a review before recommending changes." },
      { q: "Do you use infrastructure as code?", a: "Yes. Environments are defined in Terraform or CloudFormation so they can be rebuilt reliably, reviewed like application code and kept consistent between staging and production." },
    ],
    related: ["cloud", "azure", "api-integration", "ecommerce-development"],
  },

  /* --------------------------------------------------------------------- GROWTH */
  {
    slug: "seo",
    group: "growth",
    name: "SEO Services",
  short: "SEO Services",
    icon: "search",
    card: "Technical and content-focused SEO that makes your site easier to crawl, faster to load and more likely to convert.",
    metaTitle: "SEO Services: Technical SEO & Organic Growth | AtherIQ",
    metaDescription:
      "SEO services combining technical SEO, site performance, content structure and analytics to grow qualified organic traffic and enquiries.",
    lead: "SEO delivered by the people who build the site — because most ranking problems are engineering problems.",
    overview: [
      "A large share of what holds a site back in search is structural: slow pages, thin or duplicated content, a URL scheme that fragments authority, missing metadata, broken internal linking, or JavaScript that hides content from crawlers.",
      "Because we build and maintain sites as well as optimise them, we can fix those causes rather than reporting them. Technical audit findings turn into commits, not a slide deck for somebody else to action.",
    "We focus on qualified traffic. Ranking for terms that never become enquiries is a vanity exercise; we prioritise the queries where someone is actively looking for the service you sell.",
    ],
    capabilities: [
      { title: "Technical SEO audit", text: "Crawlability, indexation, canonical handling, redirect chains, status codes, duplicate content, sitemap and robots.txt review." },
      { title: "On-page optimisation", text: "Title tags, meta descriptions, heading hierarchy, internal linking, image alt text and semantic markup across every template." },
      { title: "Site performance & Core Web Vitals", text: "Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift measured, diagnosed and fixed in the codebase." },
      { title: "Structured data", text: "Organisation, Service, Article, FAQ, Product and Breadcrumb schema implemented and validated for eligible rich results." },
    { title: "Content structure & keyword mapping", text: "Mapping search intent to pages, identifying gaps and cannibalisation, and structuring content around how people actually search." },
      { title: "Local SEO & analytics", text: "Google Business Profile setup, local schema where applicable, Search Console and Analytics configuration with conversion tracking." },
    ],
    benefits: [
    { title: "Traffic that converts", text: "Targeting commercial-intent queries means enquiries rather than sessions that bounce in ten seconds." },
   { title: "Fixes, not findings", text: "Audit recommendations are implemented in the code by the team that wrote it, so they actually ship." },
    { title: "Faster pages help everything", text: "Performance work improves rankings, conversion rate and ad quality scores at the same time." },
      { title: "Measurement you can act on", text: "Search Console and Analytics configured so you can see which pages and queries produce enquiries." },
    ],
    stack: ["Google Search Console", "Google Analytics 4", "Lighthouse", "Core Web Vitals", "Schema.org", "Screaming Frog", "PageSpeed Insights"],
    faqs: [
      { q: "Can you improve the SEO of an existing website?", a: "Yes. We start with a technical audit covering indexation, performance, content structure and internal linking, then work through the findings in priority order — largest impact and lowest risk first." },
      { q: "How long does SEO take to show results?", a: "Technical fixes such as indexation and page speed can show movement within weeks. Competitive commercial rankings usually take several months of consistent work. Anyone promising first-page results in thirty days is guessing." },
      { q: "Do you guarantee first-page rankings?", a: "No, and we would treat any such guarantee as a warning sign. Search results are controlled by Google, not by an agency. What we commit to is the work: technical fixes, content structure, measurement and reporting you can verify." },
    { q: "Is SEO included when you build a website?", a: "The technical foundation is: semantic markup, clean URLs, metadata, structured data, sitemap, performance budgets and Search Console setup. Ongoing content and link work is a separate engagement." },
    ],
    related: ["web-development", "ecommerce-development", "ai-automation", "api-integration"],
  },

  /* ---------------------------------------------------------------- INTELLIGENT */
  {
    slug: "ai-automation",
    group: "intelligent",
    name: "AI & Automation",
    short: "AI & Automation",
    icon: "spark",
    card: "Practical AI features and workflow automation added to business applications, where they measurably reduce manual work.",
 metaTitle: "AI Integration & Business Automation Services | AtherIQ",
    metaDescription:
      "AI integration and business process automation. Document processing, assisted search, classification and workflow automation inside your applications.",
    lead: "AI features and automation applied where there is a manual process worth removing — not as a badge on the homepage.",
    overview: [
      "The useful applications of AI in business software are narrower and more boring than the marketing suggests, and considerably more valuable: reading documents so somebody does not have to, drafting a first response, classifying incoming requests, summarising a long history, and answering questions over your own content.",
      "We build those features into applications you already run. The requirement we start from is a task someone currently does by hand, repeatedly, with a measurable cost.",
      "We are equally direct about the limits. Language models are probabilistic, they can be confidently wrong, and any workflow where the cost of an error is high needs a human review step. We design that in rather than discovering it in production.",
 ],
    capabilities: [
 { title: "Document & data extraction", text: "Reading invoices, forms, contracts and reports into structured data, with confidence scoring and human review for low-confidence results." },
      { title: "Assisted search & Q&A", text: "Retrieval over your own documents and records so staff and customers get answers with a citation back to the source." },
      { title: "Classification & routing", text: "Automatically categorising enquiries, tickets and documents, and routing them to the right team or workflow." },
      { title: "Drafting & summarisation", text: "First-draft replies, summaries of long threads or case histories, and content generation with human approval before anything is sent." },
      { title: "Workflow automation", text: "Rule-based automation of approvals, notifications, data transfers and scheduled tasks — often the higher-value half of the work." },
      { title: "Integration & governance", text: "Model access through server-side APIs, prompt and output logging, cost controls, and a data policy agreed before anything is sent to a provider." },
    ],
    benefits: [
      { title: "Manual handling drops", text: "Repetitive reading, sorting and re-typing moves to software, and staff time goes to the exceptions instead." },
   { title: "Faster response times", text: "Enquiries are classified and routed the moment they arrive rather than after a person triages the queue." },
      { title: "Accuracy where it matters", text: "Human review on low-confidence and high-cost decisions keeps automation from becoming a liability." },
      { title: "Costs stay bounded", text: "Usage monitoring, caching and model selection per task keep per-request cost visible and controlled." },
    ],
    stack: ["Claude API", "OpenAI API", "Python", "Node.js", ".NET", "Vector databases", "Azure Functions", "AWS Lambda", "REST APIs"],
    faqs: [
      { q: "Do we need AI in our application?", a: "Only if there is a specific manual task worth removing. We start by looking for repetitive work with a measurable cost. If there is not one, we will tell you that adding AI is not worth the spend." },
      { q: "Where does our data go?", a: "That is decided before anything is built. We agree what may be sent to a model provider, what must stay inside your infrastructure, and whether data is excluded from provider training — then document it and configure accordingly." },
      { q: "What if the AI gets something wrong?", a: "We assume it will, some of the time. Workflows are designed with confidence thresholds, human review on high-cost decisions, and logging so incorrect outputs can be traced and corrected." },
      { q: "Is automation the same as AI?", a: "No, and the distinction matters commercially. A lot of the value in these projects comes from ordinary rule-based automation, which is cheaper, deterministic and easier to audit. We use AI only for the parts that genuinely need it." },
    ],
    related: ["custom-software-development", "api-integration", "crm-integration", "cloud"],
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
export const serviceUrl = (slug) => `/services/${slug}`;
export const servicesIn = (group) => services.filter((s) => s.group === group);
