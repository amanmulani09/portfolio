// Content condensed from Aman Mulani's updated résumé.
export const profile = {
  name: "Aman Mulani",
  role: "AI & Full-Stack Engineer",
  email: "mulaniaman0504@gmail.com",
  linkedin: "https://www.linkedin.com/in/aman-mulani/",
  github: "https://github.com/amanmulani09",
  resume: "https://drive.google.com/file/d/1kYkDvaHlf5aIC6p7wbB5iiHYsIIBdmLT/view?usp=drivesdk",
  location: "India",
  headline: "I build AI agents and full-stack products for commerce and payments.",
  introduction: "Hi, I’m Aman. I own the work from interface and backend to deployment and production support.",
  summary: "I build AI agents and web applications for ecommerce and payments. From the first interface to the services behind it, I take products through to production.",
};

export const projects = [
  {
    id: "shopping-assistant",
    title: "AI Shopping Assistant",
    category: "THG Ingenuity · Production AI",
    summary: "Helping shoppers find what they need, across 10+ ecommerce brands.",
    impact: "$4,000+ saved per month",
    tech: ["Google ADK", "AG-UI", "FastAPI"],
    details: "Built and maintained the agent backend, client SDK, and UI integration. Integrated LLM APIs, tool calling, retrieval, and observability, and deployed assistant services on Google Cloud Run.",
    extra: "Built an Assistant Console for tenant-specific configuration, behavior customization, and feature management.",
  },
  {
    id: "multi-tenant-cms",
    title: "One CMS. Multiple brands.",
    category: "THG Ingenuity · Full-stack platform",
    summary: "A shared content platform that reduces duplicated infrastructure across business websites.",
    impact: "Shared services. Less duplication.",
    sourceUrl: "https://www.thgingenuity.com/commerce",
    sourceLabel: "THG platform overview",
    tech: ["Astro", "FastAPI", "GraphQL"],
    details: "Designed and built a multi-tenant CMS with shared services and components. Shipped storefront features and reusable widgets across Astro, FastAPI, and GraphQL.",
    extra: "Handled code reviews, testing, releases, and production delivery.",
  },
  {
    id: "push-provisioning",
    title: "Simpler payment integrations",
    category: "Razorpay · Payments",
    summary: "A configuration-driven platform for partner integrations and secure card tokenization.",
    impact: "One shared integration architecture",
    sourceUrl: "https://razorpay.com/blog/push-provisioning-a-new-era-in-card-tokenization/",
    sourceLabel: "Razorpay product overview",
    tech: ["Python", "FastAPI", "React"],
    details: "Designed and built a configuration-driven push provisioning platform. Developed Python and FastAPI services for card tokenization and lifecycle management, with validation built into service design.",
    extra: "Delivered frontend, API, and database features, with automated tests, CI/CD, and production monitoring.",
  },
  {
    id: "codo",
    title: "Codo",
    category: "Personal project · Developer tools",
    summary: "An AI code review agent that flags potential quality and security issues in pull requests.",
    impact: "Code review, inside GitHub",
    tech: ["GitHub Apps", "FastAPI", "Redis"],
    details: "Built a code review service using GitHub Apps, FastAPI, Redis, and LLMs to analyze pull requests and surface potential code quality and security issues.",
    extra: "Explore the implementation in the public repository.",
    url: "https://github.com/amanmulani09/codo",
    sourceUrl: "https://github.com/amanmulani09/codo",
    sourceLabel: "Explore Codo on GitHub",
  },
];

export const shoppingCaseStudy = {
  problem: "Bring shopping assistance into existing storefront journeys across multiple ecommerce brands.",
  contribution: "Owned the agent backend, client SDK, and UI integration. Built an Assistant Console for tenant-specific configuration and behavior.",
  result: "Deployed across 10+ brands and reduced Shopping Assistant costs by $4,000+ per month.",
  sourceUrl: "https://www.thgingenuity.com/commerce",
  flow: [
    { title: "Storefront", detail: "Client SDK + UI integration" },
    { title: "Shopping agent", detail: "Google ADK + AG-UI + FastAPI" },
    { title: "Connected capabilities", detail: "LLM APIs · Retrieval · Tool calling" },
  ],
};

export const experiences = [
  {
    company: "THG Ingenuity",
    initials: "THG",
    role: "Software Engineer, AI & Full-Stack",
    period: "Aug 2025 — Present",
    summary: "AI shopping agents, RAG applications, a multimodal AI Stylist, and shared ecommerce platforms.",
    details: "Own agent services, SDK and UI integration, evaluation, deployment, and production support. Automate support and operational workflows with Python, APIs, n8n, and LLMs.",
  },
  {
    company: "Razorpay",
    initials: "R",
    role: "Product Engineer, Full-Stack",
    period: "Apr 2024 — Aug 2025",
    summary: "Configuration-driven payment integrations, secure tokenization, and reliable full-stack services.",
    details: "Built React and TypeScript interfaces, Python and FastAPI services, APIs, and database features. Improved reliability through automated and integration tests, CI/CD, and monitoring.",
  },
  {
    company: "HMX Media",
    initials: "HMX",
    role: "Web Developer",
    period: "Aug 2022 — Mar 2024",
    summary: "Interactive web experiences, reusable UI libraries, and tools that automated localization work.",
    details: "Worked with React, JavaScript, Canvas, and WebGL on performance-sensitive interfaces and shared components.",
  },
];

export const skillGroups = [
  { label: "Applied AI", skills: ["AI agents", "RAG", "Google ADK", "AG-UI", "LLM APIs", "LangGraph", "MCP", "Evaluation"] },
  { label: "Full stack", skills: ["Python", "TypeScript", "React", "Next.js", "Astro", "FastAPI", "PostgreSQL", "Redis"] },
  { label: "Production", skills: ["GCP / Cloud Run", "AWS", "Docker", "GitHub Actions", "CI/CD", "Playwright", "Grafana"] },
];

export const education = {
  degree: "Bachelor of Computer Applications",
  school: "College of Computer Science and Information Technology",
  period: "2020 — 2023",
};
