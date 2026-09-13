/**
 * Portfolio projects.
 *
 * IMPORTANT: no fabricated client names, revenue figures, percentages or
 * performance statistics. `outcome` describes what was delivered and what it
 * enables - not invented metrics. Replace descriptions with client-approved
 * detail (and add real figures) once permission is in place.
 */

export const projects = [
  {
    slug: "code-helper",
    title: "Code Helper",
    category: "AI / Developer Productivity",
    icon: "spark",
    summary:
      "A developer-focused tool that assists with coding workflows, technical problem solving and day-to-day productivity.",
    problem:
      "Development teams lose time to work that is repetitive but not quite mechanical: reading unfamiliar code, drafting boilerplate, checking an approach against existing conventions, and writing up what changed. Each instance is small; across a team and a sprint it is significant.",
    solution:
      "We built an assistant around the developer's actual workflow rather than a generic chat window. It takes project context into account, returns answers grounded in the codebase it has been given, and keeps model access on the server side so credentials and source never leave controlled infrastructure. Usage and cost are logged per request.",
    outcome:
      "The tool is in active use for code explanation, drafting and review support. Its architecture separates the model provider from the application layer, so the underlying model can be changed without reworking the product.",
    stack: ["Python", "Node.js", "Claude API", "REST APIs", "Vector search", "Docker"],
    services: ["ai-automation", "custom-software-development", "api-integration"],
  },
  {
    slug: "azure-applications",
    title: "Azure Application Platform",
    category: "Cloud / Enterprise Applications",
    icon: "azure",
    summary:
      "Business applications designed, deployed and operated on Microsoft Azure managed services.",
  problem:
      "Applications running on manually configured servers are difficult to release to and difficult to recover. Deployments depend on a person following a document, environments drift apart, and there is rarely a tested answer to what happens when a server is lost.",
    solution:
      "We moved application hosting onto Azure App Service with Azure SQL behind it, added Key Vault for secret storage and Entra ID for sign-in, and defined the infrastructure as code. Releases run through Azure DevOps pipelines into a staging slot, are validated there, then swapped into production. Application Insights provides metrics, logs and alerting.",
    outcome:
      "Deployments are repeatable and reversible, environments can be rebuilt from source, secrets are out of configuration files, and failures surface through alerting rather than user reports.",
    stack: [".NET", "Azure App Service", "Azure SQL", "Azure Key Vault", "Azure DevOps", "Bicep"],
    services: ["azure", "cloud", "custom-software-development"],
  },
  {
    slug: "ecommerce-platform",
 title: "E-Commerce Platform",
    category: "E-Commerce",
    icon: "cart",
    summary:
      "A commerce platform covering catalogue, checkout, payments, orders and back-office operations.",
    problem:
 "Online stores assembled from a theme and a handful of plugins tend to hold together until the catalogue grows or a sale drives traffic. The usual failure points are a checkout with unnecessary steps, stock figures that disagree with the warehouse, and listing pages too slow to rank.",
  solution:
      "We built the storefront around a product data model that handles variants, bundles and tiered pricing properly, integrated a payment gateway with server-side credential handling, and connected inventory and order status to the operational system of record. Listing and product pages are server-rendered with product and breadcrumb schema; images are optimised and lazily loaded.",
    outcome:
      "Catalogue, checkout and fulfilment operate from consistent data, product pages are eligible for rich results in search, and the catalogue can grow without a structural rebuild.",
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "Payment gateway APIs", "AWS"],
    services: ["ecommerce-development", "seo", "api-integration"],
  },
  {
    slug: "crm-integration",
    title: "CRM Integration",
    category: "Business Integration",
    icon: "users",
    summary:
      "Integration connecting CRM workflows with existing business applications and customer-facing systems.",
    problem:
      "Leads arrived through several channels and reached the CRM inconsistently, so the pipeline was reconstructed by hand and the reported source of each enquiry was unreliable. Sales and finance held different versions of the same customer.",
    solution:
    "We built an integration layer between the website, the internal applications and the CRM. Enquiries create or update records automatically with the original source attached. Account and order data synchronises on agreed ownership rules, with defined behaviour for conflicts and duplicates. Failed operations retry, then land in a dead-letter queue with alerting rather than disappearing.",
  outcome:
      "Enquiries reach the CRM without manual entry, source attribution survives to the pipeline report, and integration failures are visible and replayable instead of silent.",
    stack: [".NET", "REST APIs", "Webhooks", "Azure Functions", "Azure Service Bus", "SQL Server"],
    services: ["crm-integration", "api-integration", "erp-integration"],
  },
];

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));
