/**
 * Site-wide FAQs (rendered on /contact and the home page, and emitted as
 * FAQPage structured data). Service-specific questions live on the service
 * entries in services.js instead.
 */

export const faqs = [
  {
    q: "Can you build a custom website for my business?",
    a: "Yes. We build custom websites rather than customising off-the-shelf themes, so the structure reflects your services and how you actually sell. Every build includes responsive layouts, semantic markup, metadata and the technical SEO foundation.",
  },
  {
    q: "Can you develop mobile applications?",
    a: "Yes, for both Android and iOS. We usually recommend a cross-platform build so one codebase serves both stores, and advise native where an app depends heavily on device hardware or platform-specific performance.",
  },
  {
    q: "Can you integrate my existing CRM?",
    a: "Yes. We connect websites, portals, mobile apps and internal systems to CRM platforms including Salesforce, HubSpot, Zoho and Dynamics 365, so records are created and updated automatically with lead source preserved.",
  },
  {
    q: "Can you integrate ERP with my website or application?",
    a: "Yes. We build the integration layer between ERP systems and e-commerce, CRM, mobile and internal applications, using the ERP's API where one exists and database or file-based exchange where it does not.",
  },
  {
    q: "Do you provide Microsoft Azure services?",
    a: "Yes. We work across App Service, Azure SQL, Functions, Storage, Kubernetes Service, Key Vault, networking and Azure DevOps — covering architecture, deployment, migration and ongoing support.",
  },
  {
    q: "Do you provide AWS services?",
    a: "Yes. We design and deploy on AWS using EC2, ECS, Lambda, RDS, S3, API Gateway, CloudFront and the supporting IAM, networking and monitoring services, with infrastructure defined as code.",
  },
  {
    q: "Can you migrate an existing application to the cloud?",
    a: "Yes. We assess the application, its dependencies and its data, choose between rehosting and re-platforming for each component, then migrate in stages with a tested cutover and a rollback option at each step.",
  },
  {
    q: "Can you improve the SEO of an existing website?",
    a: "Yes. We begin with a technical audit covering indexation, performance, content structure and internal linking, then implement the fixes in priority order. Because we also build sites, findings become code changes rather than a report.",
  },
  {
    q: "Can you integrate third-party APIs?",
    a: "Yes. Payment gateways, shipping and logistics providers, messaging and email services, accounting platforms and industry-specific APIs — including authentication, retry handling and the monitoring that tells you when an integration breaks.",
  },
  {
    q: "Can you maintain an application built by another team?",
    a: "Usually. We start with a review of the codebase, dependencies, test coverage and deployment process, then set out honestly what maintenance would involve before committing to it.",
  },
  {
    q: "How do projects usually start?",
    a: "With a conversation, at no cost. We discuss what you are trying to build or improve, what already exists, and what your constraints are. If it is a fit we follow up with a written scope and a quotation; if it is not, we will say so.",
  },
  {
    q: "Who owns the code and the infrastructure?",
    a: "You do. Source code, data and cloud accounts belong to your business. Repository access and documentation are handed over as part of delivery, and remain yours regardless of whether we continue working together.",
  },
];

/** Shorter set used on the home page so the section stays readable. */
export const homeFaqs = faqs.slice(0, 6);
