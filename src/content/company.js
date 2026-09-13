/**
 * Company narrative content: differentiators, delivery process, industries,
 * engagement models and careers. Editable business copy - no markup here.
 */

/** Home page: "Why Businesses Choose AtherIQ". Claims here must stay verifiable. */
export const differentiators = [
  {
    icon: "compass",
    title: "Business-focused development",
    text: "We start with the commercial problem and the people who live with it daily, then choose the technology. A brief that arrives as a feature list gets turned back into outcomes before we quote.",
  },
  {
    icon: "layers",
    title: "Scalable architecture",
    text: "Data models, service boundaries and hosting are sized for where the business is going, not only for launch day — without paying for scale you will not use for two years.",
  },
  {
    icon: "cloud",
    title: "Modern cloud platforms",
    text: "We build and deploy on Microsoft Azure and AWS using managed services, infrastructure as code and automated pipelines, so environments are reproducible and releases are routine.",
  },
  {
    icon: "puzzle",
    title: "Integration-first approach",
    text: "New systems almost never arrive on empty ground. We plan how a build connects to your CRM, ERP, payment providers and internal tools before development starts, not afterwards.",
  },
  {
    icon: "headset",
    title: "Responsive communication",
    text: "A named point of contact, work visible in a shared tracker, and a straight answer when something slips. You should never have to ask twice for a status update.",
  },
  {
    icon: "shield",
    title: "Long-term technical support",
 text: "Applications need patching, dependency upgrades, monitoring and the occasional awkward fix. We stay available after launch on a support arrangement scoped to what you actually need.",
  },
];

/** Seven-step summary used on the home page. */
export const processSteps = [
  { no: "01", title: "Discover", text: "Understand the business goals, current systems, constraints and what success needs to look like." },
  { no: "02", title: "Plan", text: "Define architecture, technology choices, scope, sequencing and an implementation strategy you can sign off." },
  { no: "03", title: "Design", text: "Design interfaces and workflows around the people who will use them daily, not around a layout trend." },
  { no: "04", title: "Develop", text: "Build in reviewable increments with secure, maintainable code and a working demo at the end of each stage." },
  { no: "05", title: "Test", text: "Validate functionality, performance, security and behaviour on real devices and realistic data volumes." },
  { no: "06", title: "Deploy", text: "Release through automated pipelines with a tested cutover plan and a rollback path that has been rehearsed." },
  { no: "07", title: "Support", text: "Monitor, maintain and improve — patching, upgrades, incident response and the next round of changes." },
];

/** Ten-stage detail used on /process. */
export const lifecycle = [
  {
    no: "01",
    title: "Requirement Discovery",
    text: "Structured sessions with the people who own the process and the people who run it. We document the exceptions as carefully as the standard path, because that is where projects overrun.",
    outputs: ["Requirement document", "Scope boundaries", "Assumptions and open questions"],
  },
  {
    no: "02",
 title: "Business Analysis",
    text: "Mapping the current workflow against the proposed one, quantifying the manual effort being removed and identifying which requirements are genuinely essential for the first release.",
    outputs: ["Process maps", "Prioritised requirements", "Phase one definition"],
  },
  {
 no: "03",
    title: "Solution Architecture",
    text: "Data model, service boundaries, integration points, hosting topology, security model and non-functional requirements agreed in writing before development begins.",
    outputs: ["Architecture diagram", "Data model", "Integration map", "Technology decision record"],
  },
  {
    no: "04",
    title: "UI / UX Design",
    text: "Wireframes for the primary journeys, then interface design applied to a component system so every screen is consistent and the build is predictable.",
    outputs: ["Wireframes", "Interface designs", "Component library", "Responsive behaviour spec"],
  },
  {
    no: "05",
    title: "Development",
 text: "Delivery in increments, each ending in something demonstrable. Code review on every change, version control discipline, and coding standards agreed at the start rather than argued about later.",
    outputs: ["Working increments", "Source repository access", "Code review history"],
  },
  {
  no: "06",
    title: "API & System Integration",
    text: "Connecting the build to CRM, ERP, payment providers, internal databases and third-party services, with authentication, retries, idempotency and monitoring designed in.",
    outputs: ["API documentation", "Integration tests", "Credential and secret handling plan"],
  },
  {
    no: "07",
    title: "Testing & Quality Assurance",
    text: "Functional testing against the requirements, cross-browser and real-device checks, performance testing at realistic data volumes, accessibility review and security checks on inputs and access control.",
    outputs: ["Test results", "Defect log", "Performance baseline", "Accessibility review"],
  },
  {
    no: "08",
    title: "Deployment",
    text: "Release through an automated pipeline into a staging environment first, then production, with a written cutover plan, data migration steps and a rehearsed rollback.",
    outputs: ["CI/CD pipeline", "Cutover plan", "Rollback procedure", "Environment documentation"],
  },
  {
    no: "09",
    title: "Monitoring & Measurement",
    text: "Application and infrastructure metrics, log aggregation, uptime checks and alerting configured so problems are detected by the monitoring rather than reported by users.",
    outputs: ["Dashboards", "Alert rules", "Log retention policy"],
  },
  {
    no: "10",
    title: "Maintenance & Improvement",
    text: "Security patching, dependency upgrades, cost reviews, defect resolution and a prioritised backlog for the next round of changes, under an agreed support arrangement.",
    outputs: ["Support agreement", "Change backlog", "Periodic review"],
  },
];

/** Approach principles used on /about. */
export const principles = [
  {
    icon: "target",
    title: "Understand the business first",
    text: "Before any technology decision we want to know how the business makes money, where the friction is and who is affected. A technically excellent system solving the wrong problem is still a failure.",
  },
  {
    icon: "cog",
    title: "Choose appropriate technology",
    text: "The best tool is usually the boring one your team can hire for and operate. We reach for something newer only when it solves a problem the established option genuinely cannot.",
  },
  {
  icon: "layers",
    title: "Build for the next change",
    text: "Software is read and modified far more often than it is written. Clear structure, sensible naming and documented decisions cost a little now and save a great deal later.",
  },
  {
    icon: "shield",
    title: "Treat security as part of the build",
    text: "Input validation, access control, secret management and encryption belong in the original scope. Retrofitting them across a live system is slower, riskier and considerably more expensive.",
  },
  {
    icon: "chart",
  title: "Measure what shipped",
    text: "Performance budgets, error rates and conversion tracking are set up at launch, so the conversation after go-live is about evidence rather than impressions.",
  },
  {
    icon: "heart",
    title: "Say the unwelcome thing early",
    text: "If a requirement is going to be expensive, a deadline is unrealistic or an off-the-shelf product would serve you better than a custom build, you will hear it from us at the quoting stage.",
  },
];

/** Industries served. Descriptions stay capability-based - no unsupported claims. */
export const industries = [
  {
    slug: "ecommerce",
 name: "E-Commerce & Retail",
    icon: "cart",
 text: "Storefronts, catalogue and inventory synchronisation, payment and logistics integration, and the performance work that listing pages live or die by.",
    needs: ["Catalogue and stock sync", "Checkout optimisation", "Payment gateway integration", "Product schema and commerce SEO"],
  },
  {
    slug: "education",
    name: "Education",
    icon: "graduation",
    text: "Institutional websites, admissions and enquiry workflows, student and parent portals, and integration with existing academic or fee management systems.",
    needs: ["Admissions and enquiry portals", "Student and parent access", "Content management", "Accessibility compliance"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "heart",
    text: "Appointment and enquiry systems, practice and clinic websites, and internal tools — built with access control, audit trails and data handling treated as primary requirements.",
    needs: ["Appointment and enquiry handling", "Role-based access control", "Audit logging", "Careful data handling"],
  },
  {
    slug: "finance",
    name: "Finance & Professional Services",
    icon: "chart",
    text: "Client portals, document workflows, onboarding journeys and reporting tools, with the security and traceability these sectors are held to.",
    needs: ["Secure client portals", "Document workflows", "Onboarding automation", "Reporting and reconciliation"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Distribution",
    icon: "building",
    text: "ERP integration, order and inventory visibility, field and warehouse applications, and connecting operational systems to customer-facing channels.",
    needs: ["ERP integration", "Inventory visibility", "Field and warehouse apps", "Order automation"],
  },
  {
 slug: "startups",
    name: "Startups",
    icon: "rocket",
    text: "A first product built small enough to launch and structured well enough to extend — with honest advice about which requirements can wait until after you have users.",
    needs: ["MVP scoping", "Fast, credible launch", "Cloud setup that scales later", "Analytics from day one"],
  },
  {
    slug: "professional-services",
    name: "Agencies & Consultancies",
    icon: "briefcase",
    text: "Websites that explain complex services clearly, CRM integration for enquiry handling, and internal tools for project, resource and time tracking.",
    needs: ["Service-led websites", "CRM and lead routing", "Internal operations tools", "Content and SEO"],
  },
  {
 slug: "smb",
    name: "Small & Medium Businesses",
    icon: "users",
    text: "Practical systems that replace spreadsheets and manual handovers, delivered in phases so cost stays proportionate to the return.",
  needs: ["Replacing spreadsheet processes", "Quotation and order tracking", "Website and enquiry capture", "Phased delivery"],
  },
  {
 slug: "enterprise",
    name: "Enterprise",
    icon: "server",
    text: "Integration between established systems, application modernisation, cloud migration, and delivery that fits existing governance and change control.",
    needs: ["System integration", "Application modernisation", "Cloud migration", "Governance and documentation"],
},
];

/** Engagement models shown on /about and /request-a-quote. */
export const engagementModels = [
  {
    title: "Fixed scope, fixed price",
    text: "Best when requirements are well understood and stable. We define the scope in writing, quote against it, and handle changes through a documented change process.",
    fit: "Websites, defined integrations, contained applications",
  },
  {
    title: "Dedicated team",
    text: "A team allocated to your roadmap on a monthly basis, working through a shared backlog. Suits ongoing product development where priorities shift between sprints.",
    fit: "Product development, long-running programmes",
  },
  {
    title: "Support & maintenance retainer",
    text: "An agreed monthly allocation covering monitoring, patching, dependency upgrades, defect fixes and small enhancements, with response expectations set in advance.",
    fit: "Live applications, cloud infrastructure, existing sites",
  },
];

/** Careers content. No fabricated vacancies - roles below are open-application placeholders. */
export const careers = {
  intro:
    "AtherIQ is an engineering-led company. We are more interested in how you think through a problem than in how many frameworks you can name, and we would rather hire someone curious and careful than someone who has memorised an interview book.",
  culture: [
    {
      icon: "code",
      title: "Engineering culture",
      text: "Code review on every change, decisions written down, and the freedom to disagree with a technical direction if you can argue it. Nobody is expected to ship something they think is wrong.",
    },
    {
      icon: "graduation",
      title: "Learning",
      text: "Time allocated for reading, certification study and building things that are not on a client roadmap. Cloud and platform certifications are supported.",
    },
  {
      icon: "workflow",
      title: "How we work",
      text: "Small teams with direct client contact, so you see the reasoning behind requirements instead of receiving them as tickets. Clear priorities, and realistic estimates that we defend on your behalf.",
    },
    {
      icon: "chart",
      title: "Growth",
      text: "A defined path from delivery into architecture, technical leadership or client-facing consulting, reviewed openly rather than decided behind a closed door.",
    },
  ],
  // Replace with genuine vacancies when hiring. These are open-application areas.
  openings: [
    {
      title: "Full Stack Developer",
      area: "Engineering",
      type: "Open application",
      location: "India",
      text: "React or Angular on the front end, .NET or Node.js on the back end, and a working understanding of relational databases and REST APIs.",
    },
    {
      title: "Cloud / DevOps Engineer",
      area: "Cloud",
      type: "Open application",
      location: "India",
      text: "Azure or AWS, infrastructure as code, CI/CD pipelines, containers and production monitoring. Experience running things you did not build is valued.",
    },
    {
      title: "Mobile Application Developer",
      area: "Engineering",
      type: "Open application",
      location: "India",
      text: "Cross-platform or native mobile development, API integration, offline-first data handling and app store release experience.",
    },
    {
    title: "SEO & Digital Growth Specialist",
      area: "Growth",
      type: "Open application",
      location: "India",
      text: "Technical SEO, Core Web Vitals, structured data, content strategy and analytics. Comfortable reading HTML and talking to developers in their terms.",
    },
  ],
};
