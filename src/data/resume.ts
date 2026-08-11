import type {
  Experience,
  FieldNote,
  Metric,
  Principle,
  Profile,
  Project,
  ProjectId,
  SkillGroup,
  Testimonial
} from "../types/portfolio";

export const profile: Profile = {
  name: "Aman Mulani",
  role: "AI Engineer · LLM Products, Agents & Production RAG",
  headline: "I turn ambiguous AI problems into reliable products that ship.",
  introduction:
    "I design and ship production LLM products, RAG pipelines, autonomous agents, and full-stack systems—owning the path from concept to dependable operation.",
  location: "India",
  email: "mulaniaman0504@gmail.com",
  linkedin: "https://www.linkedin.com/in/aman-mulani-6b122314b/",
  github: "https://github.com/amanmulani09",
  resume: "/Aman-Mulani-Full-Stack-AI-Resume.pdf",
  availability: "Open to AI engineering, LLM product, and full-stack conversations",
  currently: [
    { label: "Building", value: "AI shopping experiences for THG storefronts" },
    { label: "Shipping", value: "Production RAG and agent systems" },
    { label: "Optimizing", value: "Reliability, security, latency, and cost" }
  ]
};

export const metrics: Metric[] = [
  {
    value: "4+",
    label: "years shipping software",
    detail: "Production AI, payments, ecommerce, and interactive full-stack systems.",
    icon: "rocket"
  },
  {
    value: "~40%",
    label: "faster discovery",
    detail: "Information-discovery time reduced by an internal RAG knowledge assistant.",
    icon: "chart"
  },
  {
    value: "~60%",
    label: "fewer config incidents",
    detail: "Schema validation in GitHub Actions blocks invalid configuration before release.",
    icon: "gauge"
  },
  {
    value: "2",
    label: "flagship storefronts live",
    detail: "AI shopping assistant deployed on Myprotein and Lookfantastic experiences.",
    icon: "globe"
  }
];

export const principles: Principle[] = [
  {
    index: "01",
    title: "Production before prototype theater",
    body: "A useful AI system needs dependable tools, memory, observability, and failure handling—not only a convincing demo."
  },
  {
    index: "02",
    title: "Retrieval is a product decision",
    body: "Embedding models, chunking, ranking, latency, and cost shape what users experience. I treat those trade-offs as product work."
  },
  {
    index: "03",
    title: "Security is part of correctness",
    body: "Payments, agents, and automation all cross privilege boundaries. Auditability, validation, and controlled actions belong in the design."
  },
  {
    index: "04",
    title: "Own the whole outcome",
    body: "I take ambiguous problems from architecture through delivery, measurement, and operation while keeping the product simple to use."
  }
];

export const fieldNotes: FieldNote[] = [
  {
    index: "NOTE 01",
    title: "Production RAG is a retrieval problem first",
    category: "RAG systems",
    readTime: "3 min",
    excerpt:
      "Model quality cannot rescue weak chunking, stale context, or retrieval that ignores latency and cost.",
    paragraphs: [
      "A production knowledge assistant is shaped by what enters context. Embedding choice, document boundaries, chunk size, metadata, ranking, and freshness determine whether an answer begins from useful evidence.",
      "The right configuration is not universal. It depends on the questions people ask, the source material, the acceptable latency, and the cost envelope the product must hold.",
      "That is why I treat retrieval evaluation and operational feedback as ongoing product work rather than a one-time setup step."
    ]
  },
  {
    index: "NOTE 02",
    title: "Agents need explicit operating boundaries",
    category: "Agentic systems",
    readTime: "3 min",
    excerpt:
      "Tool calling and memory create leverage, but they also create authority that must be constrained and observable.",
    paragraphs: [
      "An agent becomes useful when it can take structured actions and maintain context across a conversation. Those same capabilities expand the number of failure and abuse paths.",
      "Clear tool contracts, scoped permissions, validated inputs, session boundaries, and traceable decisions help keep autonomy aligned with user intent.",
      "Human review still matters most around irreversible actions, sensitive data, and decisions whose confidence cannot be verified automatically."
    ]
  },
  {
    index: "NOTE 03",
    title: "Observability closes the product loop",
    category: "Reliability",
    readTime: "2 min",
    excerpt:
      "Structured logs, traces, evaluations, and alerts turn opaque AI behavior into something a team can improve.",
    paragraphs: [
      "AI systems fail across more layers than a conventional request path: retrieval, model behavior, tools, memory, integrations, and generated output can all degrade differently.",
      "Tracing and evaluation make those layers visible. They show whether a problem comes from missing context, a weak prompt, a tool failure, or an operational bottleneck.",
      "The goal is not a larger dashboard. It is faster diagnosis, safer iteration, and a product that remains dependable under real traffic."
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "An internal RAG assistant reduced information-discovery time by approximately 40% while deflecting repetitive support queries.",
    name: "Information discovery",
    context: "THG Ingenuity · Production RAG outcome"
  },
  {
    quote:
      "Schema-validation pipelines now block invalid configuration before release, cutting configuration-related production incidents by approximately 60%.",
    name: "Release safety",
    context: "THG Ingenuity · Production engineering outcome"
  }
];

export const experiences: Experience[] = [
  {
    kind: "work",
    company: "THG Ingenuity",
    role: "Software Engineer, AI & Full-Stack",
    period: "Aug 2025 — Present",
    summary:
      "Production AI shopping, RAG, automation, and full-stack ecommerce systems across customer-facing and internal products.",
    highlights: [
      "Own an embeddable AI shopping assistant built with Lit, FastAPI, Google ADK agents, Vertex AI, tool calling, and session memory.",
      "Shipped an internal RAG knowledge assistant that reduced information-discovery time by ~40%, plus schema validation that cut config incidents by ~60%."
    ]
  },
  {
    kind: "work",
    company: "Razorpay",
    role: "Product Engineer, Full-Stack",
    period: "Apr 2024 — Aug 2025",
    summary:
      "Config-driven Push Provisioning, card tokenization services, lifecycle management, and observability for security-sensitive payment workflows.",
    highlights: [
      "Led a white-labeled platform that turned new banking integrations from custom builds into repeatable configuration.",
      "Built Python and FastAPI services where correctness, auditability, structured logging, monitoring, and alerting were hard requirements."
    ]
  },
  {
    kind: "work",
    company: "HMX Media",
    role: "Web Developer",
    period: "Aug 2022 — Mar 2024",
    summary:
      "Automation, interactive web experiences, and shared frontend systems using React, TypeScript, Node.js, Canvas, and WebGL.",
    highlights: [
      "Built an internal CLI automation tool that replaced a manual per-asset content-localization process.",
      "Delivered performance-sensitive Canvas and WebGL experiences and contributed to shared UI libraries."
    ]
  },
  {
    kind: "education",
    company: "College of Computer Science and Information Technology",
    role: "Bachelor of Computer Applications (BCA)",
    period: "Degree",
    summary:
      "Foundation in computer applications, software development, and computing systems.",
    highlights: []
  }
];

export const projects: Project[] = [
  {
    id: "shopping-assistant",
    title: "AI Shopping Assistant",
    eyebrow: "Production agentic commerce · THG Ingenuity",
    short:
      "An embeddable conversational product-discovery assistant running on customer-facing THG storefronts.",
    thesis:
      "Product discovery works better when agents combine explicit tools, durable session context, and a storefront experience users can trust.",
    outcome:
      "A production AI shopping experience live on Myprotein and Lookfantastic storefronts.",
    role: "Owner · AI and full-stack engineering",
    timeline: "2025 — Now",
    team: "Cross-functional ecommerce team",
    status: "Live in production",
    problem:
      "Storefront customers need help navigating large product catalogs through natural conversation without losing accuracy, context, or the ability to verify what the system recommends.",
    solution:
      "I own an embeddable Lit chat widget backed by FastAPI services and Google ADK agents on Vertex AI. Tool calling connects conversational intent to product discovery, while session memory preserves context across turns.",
    impact:
      "The assistant supports conversational product discovery on customer-facing Myprotein and Lookfantastic experiences.",
    constraints: [
      "Customer-facing recommendations must remain grounded in available product data",
      "Tool execution and session memory require explicit privilege and data boundaries",
      "An embeddable widget must integrate cleanly across multiple storefront environments",
      "Latency, failure handling, and observability affect trust as much as model output"
    ],
    decisions: [
      {
        index: "D1",
        title: "Use tools for product truth",
        body:
          "Structured tool calls separate catalog actions from free-form generation so recommendations remain tied to available product information.",
        signal: "Grounded discovery"
      },
      {
        index: "D2",
        title: "Keep memory session-scoped",
        body:
          "Conversation context is attached to a bounded session so follow-up questions work without creating uncontrolled long-lived state.",
        signal: "Context with limits"
      },
      {
        index: "D3",
        title: "Design for storefront integration",
        body:
          "A Lit-based widget keeps the customer experience portable while FastAPI and Vertex AI services own agent orchestration.",
        signal: "Embeddable system"
      }
    ],
    workflow: ["Customer intent", "Agent reasoning", "Catalog tools", "Product discovery"],
    architecture: [
      "The Lit widget captures conversational intent inside the storefront",
      "FastAPI services validate requests and manage session context",
      "Google ADK agents select bounded product-discovery tools",
      "Vertex AI produces a response grounded in tool results",
      "Operational signals expose latency, failures, and conversation health"
    ],
    results: [
      { value: "2", label: "named storefronts live" },
      { value: "AI", label: "agent-led discovery" },
      { value: "Live", label: "customer-facing production" }
    ],
    tech: ["Lit", "FastAPI", "Google ADK", "Vertex AI", "Tool calling", "Session memory"],
    accent: "#a98698",
    icon: "bot",
    confidentiality:
      "This visualization describes the public system model from my résumé without reproducing proprietary storefront screens, catalog data, or internal tools.",
    learning:
      "Production agents earn trust through bounded actions, visible context, and dependable integration—not through autonomy alone.",
    next: "rag-assistant"
  },
  {
    id: "rag-assistant",
    title: "RAG Knowledge Assistant",
    eyebrow: "Internal knowledge product · THG Ingenuity",
    short:
      "A production retrieval assistant over internal documentation that made information faster to find and reduced repetitive support work.",
    thesis:
      "Reliable answers begin with retrieval choices that balance evidence quality, latency, and cost for the questions people actually ask.",
    outcome:
      "Approximately 40% faster information discovery with repetitive support queries deflected.",
    role: "System design and end-to-end delivery",
    timeline: "2025 — Now",
    team: "Internal platform stakeholders",
    status: "Shipped internally",
    problem:
      "Teams were spending too much time locating answers across internal documentation and repeating support questions that existing knowledge already contained.",
    solution:
      "I designed and shipped an LLM and Pinecone-based RAG assistant, owning embedding-model selection, chunking strategy, and retrieval trade-offs across accuracy, latency, and cost.",
    impact:
      "The system reduced information-discovery time by approximately 40% and deflected repetitive support queries.",
    constraints: [
      "Internal documentation varies in structure, quality, and freshness",
      "Retrieval accuracy must be balanced against latency and operating cost",
      "Access boundaries matter when indexing and returning company knowledge",
      "Evaluation must distinguish retrieval failures from generation failures"
    ],
    decisions: [
      {
        index: "D1",
        title: "Evaluate embeddings against real questions",
        body:
          "Embedding-model selection was treated as an evidence problem tied to expected queries rather than a generic model ranking.",
        signal: "Relevant context"
      },
      {
        index: "D2",
        title: "Tune document boundaries",
        body:
          "Chunking strategy preserved enough context for useful answers without flooding prompts with unrelated material.",
        signal: "Higher signal"
      },
      {
        index: "D3",
        title: "Balance three production constraints",
        body:
          "Retrieval choices were evaluated across accuracy, latency, and cost so quality improvements remained operationally sustainable.",
        signal: "Production fit"
      }
    ],
    workflow: ["Internal question", "Semantic retrieval", "Grounded context", "Useful answer"],
    architecture: [
      "Documentation is prepared with metadata and deliberate chunk boundaries",
      "Embeddings create a searchable representation in Pinecone",
      "The query retrieves and ranks the most relevant evidence",
      "An LLM composes a response from bounded retrieved context",
      "Feedback and operational signals guide retrieval iteration"
    ],
    results: [
      { value: "~40%", label: "faster discovery" },
      { value: "RAG", label: "grounded assistance" },
      { value: "Less", label: "repetitive support" }
    ],
    tech: ["LLM APIs", "Pinecone", "Embeddings", "Chunking", "Retrieval evaluation", "Python"],
    accent: "#82aaa1",
    icon: "layers",
    confidentiality:
      "The interface is an original system visualization. Internal documents, prompts, access rules, and company data are not exposed.",
    learning:
      "The most important RAG decisions happen before generation: what gets indexed, retrieved, ranked, and allowed into context.",
    next: "chitra-ai"
  },
  {
    id: "chitra-ai",
    title: "Chitra.ai",
    eyebrow: "Multimodal video analysis · Independent project",
    short:
      "An end-to-end service that analyzes video and speech and produces scored, prioritized insight reports.",
    thesis:
      "Multimodal analysis becomes useful when raw video and speech are converted into ranked evidence people can act on.",
    outcome:
      "A production-oriented service with automated build-and-release pipelines across staging and production.",
    role: "Creator · Architecture through production",
    timeline: "Independent project",
    team: "Solo ownership",
    status: "Built end to end",
    problem:
      "Video contains visual and spoken signals that are slow to inspect manually and difficult to convert into a prioritized report.",
    solution:
      "I built a Python and FastAPI service using OpenAI models to analyze video and speech, score findings, prioritize insights, and produce structured reports.",
    impact:
      "The project covers the complete lifecycle from architecture and multimodal processing through Docker packaging and automated staging and production releases.",
    constraints: [
      "Video and speech require different extraction and analysis paths",
      "Insights need explicit scoring and prioritization to remain useful",
      "Long-running media workflows require reliable failure handling",
      "Staging and production releases must remain repeatable"
    ],
    decisions: [
      {
        index: "D1",
        title: "Separate modalities before synthesis",
        body:
          "Video and speech signals are processed through focused stages before being combined into a single report.",
        signal: "Clear evidence"
      },
      {
        index: "D2",
        title: "Rank what matters",
        body:
          "Scoring and prioritization turn a flat collection of observations into an ordered set of useful insights.",
        signal: "Actionable output"
      },
      {
        index: "D3",
        title: "Automate the release path",
        body:
          "Docker and CI/CD keep staging and production builds consistent as the analysis pipeline evolves.",
        signal: "Repeatable delivery"
      }
    ],
    workflow: ["Video input", "Speech and frame analysis", "Insight scoring", "Prioritized report"],
    architecture: [
      "FastAPI receives and validates the media-analysis request",
      "Video and speech are prepared for separate multimodal analysis",
      "OpenAI models extract structured observations",
      "A scoring layer ranks findings by priority",
      "CI/CD delivers the containerized service across environments"
    ],
    results: [
      { value: "2", label: "modalities analyzed" },
      { value: "CI/CD", label: "automated releases" },
      { value: "1", label: "prioritized report" }
    ],
    tech: ["Python", "FastAPI", "OpenAI", "Docker", "CI/CD"],
    accent: "#b6dc7b",
    icon: "sparkles",
    confidentiality:
      "The visualization represents the public project workflow and does not include private media, model credentials, or production data.",
    learning:
      "Multimodal output becomes a product only when evidence is structured, scored, and delivered through a dependable workflow.",
    next: "codo"
  },
  {
    id: "codo",
    title: "Codo",
    eyebrow: "Autonomous code review · Independent project",
    short:
      "A GitHub App agent that reviews pull requests for correctness issues, security risks, and potential bugs before human review.",
    thesis:
      "AI code review should narrow human attention without gaining more repository authority than the task requires.",
    outcome:
      "An autonomous review workflow combining GitHub Apps, LangChain, FastAPI, and Redis.",
    role: "Creator · Agent and platform engineering",
    timeline: "Independent project",
    team: "Solo ownership",
    status: "Built end to end",
    problem:
      "Pull requests can hide correctness defects, security risks, and subtle bugs that consume reviewer time or escape into production.",
    solution:
      "I built an autonomous agent that integrates through GitHub Apps, analyzes pull-request context, and flags high-value issues before human review.",
    impact:
      "The project demonstrates a review agent with explicit repository integration, asynchronous state, and security-focused output.",
    constraints: [
      "Repository access must be scoped to the minimum permissions required",
      "Untrusted pull-request content can influence model behavior",
      "Comments must prioritize actionable findings over noisy speculation",
      "Webhook events and review state need reliable coordination"
    ],
    decisions: [
      {
        index: "D1",
        title: "Use GitHub App permissions",
        body:
          "Repository access is modeled through an installable app so privileges can be explicit, scoped, and auditable.",
        signal: "Least privilege"
      },
      {
        index: "D2",
        title: "Treat code as untrusted input",
        body:
          "Pull-request content is evidence to analyze, not instruction that can redefine the agent or its allowed actions.",
        signal: "Prompt safety"
      },
      {
        index: "D3",
        title: "Optimize for reviewer attention",
        body:
          "The agent focuses on correctness, security, and probable bugs so human review starts with the highest-risk areas.",
        signal: "Useful signal"
      }
    ],
    workflow: ["Pull request", "Scoped context", "Agent analysis", "Human review"],
    architecture: [
      "GitHub App webhooks deliver pull-request events to FastAPI",
      "Repository permissions bound which context the service can read",
      "LangChain coordinates analysis focused on correctness and security",
      "Redis supports review state and asynchronous coordination",
      "Findings return to the pull request for human judgment"
    ],
    results: [
      { value: "3", label: "risk classes reviewed" },
      { value: "App", label: "scoped GitHub access" },
      { value: "Human", label: "final review authority" }
    ],
    tech: ["Python", "LangChain", "FastAPI", "Redis", "GitHub Apps"],
    accent: "#b99a70",
    icon: "code",
    confidentiality:
      "This visual uses an invented pull request and file path. No private repository code, credentials, or review data are shown.",
    learning:
      "Review agents are valuable when they reduce noise, respect repository boundaries, and leave final judgment with people.",
    next: "shopping-assistant"
  }
];

const projectsById = new Map(projects.map((project) => [project.id, project]));

export function getProjectById(projectId: ProjectId): Project {
  return projectsById.get(projectId) ?? projects[0];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "AI / LLM",
    icon: "sparkles",
    skills: ["LangGraph", "LangChain", "Google ADK", "Vertex AI", "RAG", "Tool calling", "Memory", "MCP / FastMCP", "Pinecone", "vLLM"]
  },
  {
    label: "Evals & Observability",
    icon: "gauge",
    skills: ["DeepEval", "Langfuse", "Grafana", "Sentry", "Structured logging", "Tracing"]
  },
  {
    label: "Languages & Backend",
    icon: "code",
    skills: ["Python", "TypeScript", "SQL", "FastAPI", "Node.js", "PostgreSQL", "Redis", "REST", "GraphQL"]
  },
  {
    label: "Frontend",
    icon: "layers",
    skills: ["React", "Next.js", "Astro", "Lit", "React Native", "Canvas", "WebGL"]
  },
  {
    label: "Cloud & DevOps",
    icon: "globe",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Production operations"]
  }
];
