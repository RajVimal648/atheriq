/**
 * Technology stack, grouped for the /technologies page and the home page.
 * Only list what AtherIQ genuinely supports in production - remove entries
 * rather than leaving aspirational ones in place.
 */

export const techGroups = [
  {
id: "frontend",
    title: "Frontend",
    icon: "browser",
    blurb: "Interfaces built with standards first and framework code only where it earns its place.",
    items: [
      { name: "React", note: "Component-driven UIs and single-page applications" },
      { name: "Angular", note: "Structured enterprise front ends with TypeScript" },
      { name: "JavaScript", note: "Modern ES modules, no unnecessary tooling" },
      { name: "TypeScript", note: "Type safety on larger front-end codebases" },
      { name: "HTML", note: "Semantic markup as the accessibility and SEO baseline" },
   { name: "CSS", note: "Responsive layout with Grid, Flexbox and custom properties" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
 icon: "server",
    blurb: "Application and API layers chosen for the workload rather than for novelty.",
    items: [
  { name: ".NET", note: "ASP.NET Core web applications and Web APIs" },
      { name: "C#", note: "Primary language for enterprise and Azure-hosted services" },
      { name: "Python", note: "Automation, data processing and AI integration work" },
   { name: "Node.js", note: "Event-driven services, APIs and build tooling" },
   { name: "REST APIs", note: "Versioned, documented service contracts" },
    ],
  },
  {
    id: "database",
    title: "Databases",
    icon: "database",
    blurb: "Relational by default, document stores where the access pattern justifies them.",
    items: [
   { name: "SQL Server", note: "Transactional workloads and reporting" },
      { name: "PostgreSQL", note: "Open-source relational workloads at scale" },
      { name: "MySQL", note: "Web application and commerce back ends" },
      { name: "MongoDB", note: "Document storage for flexible schemas" },
      { name: "Redis", note: "Caching, sessions and rate limiting" },
    ],
  },
  {
 id: "cloud",
    title: "Cloud",
    icon: "cloud",
    blurb: "Two platforms, supported properly, rather than a logo wall of every provider.",
    items: [
      { name: "Microsoft Azure", note: "App Service, Azure SQL, Functions, AKS, Storage, Key Vault" },
      { name: "AWS", note: "EC2, S3, RDS, Lambda, API Gateway, CloudFront, IAM" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
 icon: "refresh",
 blurb: "Reproducible environments and releases that do not depend on one person's laptop.",
    items: [
      { name: "Docker", note: "Consistent packaging across environments" },
      { name: "Kubernetes", note: "Orchestration where the workload justifies it" },
      { name: "CI/CD", note: "Automated build, test and release pipelines" },
      { name: "GitHub", note: "Source control, reviews and GitHub Actions" },
{ name: "Azure DevOps", note: "Repos, boards and release pipelines" },
      { name: "Terraform", note: "Infrastructure defined as reviewable code" },
    ],
  },
  {
    id: "integration",
    title: "Integration",
    icon: "plug",
    blurb: "The connective layer between applications, platforms and third-party services.",
 items: [
      { name: "REST & Web APIs", note: "Primary integration style across our work" },
    { name: "Webhooks", note: "Event-driven integration with signature verification" },
      { name: "OAuth 2.0 / JWT", note: "Delegated authorisation and token-based auth" },
      { name: "Azure Service Bus", note: "Reliable messaging between decoupled systems" },
      { name: "Third-party APIs", note: "Payments, logistics, messaging, accounting, CRM" },
    ],
  },
  {
    id: "ai",
 title: "AI & Automation",
    icon: "spark",
    blurb: "Model access through server-side APIs, with logging and cost controls in place.",
    items: [
      { name: "Claude API", note: "Document processing, drafting and assisted search" },
      { name: "OpenAI API", note: "Alternative model provider where preferred" },
      { name: "Vector search", note: "Retrieval over your own documents and records" },
      { name: "Workflow automation", note: "Rule-based automation of approvals and data flows" },
    ],
  },
];

/** Flat list used for the home-page marquee row and internal search. */
export const allTech = techGroups.flatMap((g) => g.items.map((i) => i.name));
