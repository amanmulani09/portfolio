import type {
  Experience,
  FieldNote,
  LinkedInPost,
  Metric,
  Principle,
  Profile,
  Project,
  ProjectId,
  SkillGroup,
  Testimonial
} from "../types/portfolio";

export const linkedinPosts: LinkedInPost[] = [
  {
    slug: "react-loop-behind-ai-agents",
    category: "AI",
    title: "The loop behind practical AI agents",
    excerpt:
      "ReAct reduces an agent to a repeatable cycle: reason, use a tool, inspect the result, and continue—with explicit stopping conditions.",
    readTime: "4 min read",
    publishedAt: "2026-08-04T15:30:26.404Z",
    sections: [
      {
        heading: "Start with the loop",
        paragraphs: [
          "Most agents can be understood as a small control loop: think about the next step, act through a tool, observe the result, and repeat. ReAct makes that cycle visible instead of treating an agent as one opaque model call.",
          "The loop matters because a language model cannot inspect live systems or change external state on its own. Tools provide those capabilities; the agent decides when to call them and uses each result as new context."
        ]
      },
      {
        heading: "Tools need boundaries",
        paragraphs: [
          "Tool calling adds power and risk at the same time. Every action needs a narrow schema, minimum permissions, validated inputs, safe outputs, timeouts, and a clear record of what happened.",
          "Scratchpads, iteration limits, and stopping conditions are not framework trivia. They prevent a useful loop from becoming an unbounded sequence of calls, cost, or unintended actions."
        ]
      },
      {
        heading: "Frameworks hide the same flow",
        paragraphs: [
          "LangChain, LangGraph, Google ADK, and the OpenAI Agents SDK package this flow differently, but the core execution model remains familiar. Building the loop once in plain Python makes those abstractions easier to evaluate.",
          "Good agent architecture is therefore less about selecting a fashionable framework and more about controlling state, tools, observations, retries, and completion criteria."
        ]
      }
    ],
    takeaways: [
      "Model agents as an explicit think, act, observe loop.",
      "Give every tool narrow permissions and validated contracts.",
      "Define iteration limits and stopping conditions before adding autonomy."
    ],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7490428946996535296/",
    linkedInReactions: 26,
    linkedInComments: 3,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "reliable-rag-starts-outside-the-model",
    category: "AI",
    title: "Reliable RAG starts outside the model",
    excerpt:
      "Grounded answers depend on retrieval quality, embeddings, chunking, and context management—not model fluency alone.",
    readTime: "5 min read",
    publishedAt: "2026-06-02T04:26:29.172Z",
    sections: [
      {
        heading: "Ground answers in source material",
        paragraphs: [
          "An insurance customer-care assistant needs policy evidence, not a plausible answer assembled from model memory. Retrieval-augmented generation creates that grounding by finding relevant source passages before generating a response.",
          "The model still matters, but it can only reason over context the retrieval layer supplies. Missing, noisy, or irrelevant evidence produces weak answers no matter how capable the model appears."
        ]
      },
      {
        heading: "Retrieval quality is system quality",
        paragraphs: [
          "Chunk size, overlap, embedding choice, metadata, and search strategy decide what reaches the prompt. These choices should be evaluated with representative questions and known relevant documents rather than tuned by intuition.",
          "Context management matters after retrieval. Results need ranking, deduplication, source labels, and size limits so the model receives useful evidence without losing the question inside excess text."
        ]
      },
      {
        heading: "Trust needs visible evidence",
        paragraphs: [
          "A production RAG system should expose its sources, decline when evidence is insufficient, and separate retrieved instructions from trusted system rules. Policy documents can contain stale or adversarial text, so retrieval is also a security boundary.",
          "Reliable AI comes from measuring retrieval and generation separately. That makes failures inspectable and shows whether the fix belongs in data preparation, search, prompting, or model behavior."
        ]
      }
    ],
    takeaways: [
      "Evaluate retrieval independently from final model answers.",
      "Treat chunking, embeddings, and ranking as product decisions.",
      "Show sources and fail safely when evidence is insufficient."
    ],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7467431422002282496/",
    linkedInReactions: 38,
    linkedInComments: 1,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "frontend-production-checklist",
    category: "Engineering",
    title: "A production checklist for AI-speed frontend work",
    excerpt:
      "AI makes code generation fast; production discipline still owns configuration, performance, accessibility, observability, and rollback risk.",
    readTime: "4 min read",
    publishedAt: "2026-02-11T14:13:24.552Z",
    sections: [
      {
        heading: "Speed changes the bottleneck",
        paragraphs: [
          "AI can produce frontend code faster than a team can review and operate it. The bottleneck moves from typing code to proving that the release is configured, observable, accessible, and safe under production conditions.",
          "A short pre-release checklist creates a repeatable boundary. It catches routine failures before they become late-night rollbacks."
        ]
      },
      {
        heading: "Protect configuration and runtime",
        paragraphs: [
          "Verify environment variables without hardcoding secrets, run the production build cleanly, and confirm API base URLs. Review feature flags so unfinished work cannot leak into production.",
          "Remove debug output, keep error boundaries and fallback UI in place, and confirm analytics events. These checks reduce information leakage and make failures easier to diagnose."
        ]
      },
      {
        heading: "Ship user-facing quality",
        paragraphs: [
          "Code splitting, lazy loading, bundle size, image optimization, and Lighthouse checks protect performance. Alt text, labels, focus order, and keyboard navigation protect access to the product.",
          "Fast shipping is useful only when users receive stable behavior. AI can shorten implementation time; it does not remove engineering ownership."
        ]
      }
    ],
    takeaways: [
      "Run production builds and configuration checks before release.",
      "Treat secrets, feature flags, and API targets as release boundaries.",
      "Verify performance, accessibility, fallbacks, and analytics."
    ],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7427354072929910784/",
    linkedInReactions: 22,
    linkedInComments: null,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "redis-caching-system-design",
    category: "Engineering",
    title: "Redis caching as a system design choice",
    excerpt:
      "Server-side caching can reduce database load, latency, and infrastructure cost—but only when keys, TTLs, invalidation, and access boundaries are deliberate.",
    readTime: "5 min read",
    publishedAt: "2026-02-10T04:29:15.861Z",
    sections: [
      {
        heading: "Serve hot data from memory",
        paragraphs: [
          "Read-heavy systems often ask the database for the same data repeatedly. Redis can absorb those hot reads in memory, lowering response time and reducing pressure on the primary data layer.",
          "The common flow is small: check the cache, return on a hit, or fetch from the database on a miss, store the result with a TTL, and return it. That simple path can improve latency and make traffic spikes more predictable."
        ]
      },
      {
        heading: "Caching shifts complexity",
        paragraphs: [
          "A cache improves performance by introducing another copy of data. Keys, TTLs, invalidation, serialization, and failure behavior now become part of correctness rather than optional tuning.",
          "Cache keys must include tenant, user, locale, permission, or version dimensions when those affect the response. Otherwise a fast cache can become a cross-user data leak."
        ]
      },
      {
        heading: "Design for misses and outages",
        paragraphs: [
          "The database path remains the source of truth, so cache misses must stay correct and bounded. Add timeouts, stampede protection, observability, and sensible degradation when Redis is unavailable.",
          "Caching is a system design choice because it affects cost, scale, consistency, and user experience together. Measure hit rate and latency, then keep only entries whose operational value exceeds their invalidation cost."
        ]
      }
    ],
    takeaways: [
      "Cache repeated, expensive reads—not everything.",
      "Include authorization context in cache keys and policies.",
      "Plan TTLs, invalidation, stampede control, and Redis failure behavior."
    ],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7426844680199229440/",
    linkedInReactions: 32,
    linkedInComments: 1,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "when-sse-beats-websockets",
    category: "Engineering",
    title: "When Server-Sent Events beat WebSockets",
    excerpt:
      "For one-way progress, logs, and AI response updates, plain HTTP streaming offered a smaller operational model with automatic reconnect behavior.",
    readTime: "5 min read",
    publishedAt: "2026-02-02T17:38:38.745Z",
    sections: [
      {
        heading: "Start with communication direction",
        paragraphs: [
          "I needed the server to stream progress updates to a browser. WebSockets were the familiar default, but the data moved in one direction: server to client. Server-Sent Events matched that requirement with less protocol and connection-management code.",
          "SSE runs over HTTP, uses a text event format, and works with the browser EventSource API. Built-in reconnection and event identifiers cover common progress, notification, log, and AI-response flows."
        ]
      },
      {
        heading: "Smaller operational surface",
        paragraphs: [
          "WebSockets are right when client and server both need frequent low-latency messages. For one-way updates, they can add connection lifecycle, heartbeat, proxy, and scaling concerns without delivering product value.",
          "SSE still needs engineering discipline. Servers must handle disconnects, avoid buffering, send safe event payloads, and enforce authentication before opening streams. Reconnection must not leak data across users or replay sensitive events without authorization."
        ]
      },
      {
        heading: "Choose by constraints",
        paragraphs: [
          "Protocol choice should follow traffic shape. I compare direction, message frequency, payload type, browser support, infrastructure behavior, and recovery needs before choosing.",
          "For progress bars, background-job status, logs, and streamed model output, SSE often gives the best complexity-to-value ratio. Bidirectional collaboration, games, or control channels still favor WebSockets."
        ]
      }
    ],
    takeaways: [
      "Use SSE for browser-bound one-way event streams.",
      "Use WebSockets when both sides need frequent messages.",
      "Authenticate streams and validate replay behavior."
    ],
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7424144231608352768/",
    linkedInReactions: 82,
    linkedInComments: 11,
    engagementAsOf: "August 11, 2026"
  }
];

export function getLinkedInPost(slug: string) {
  return linkedinPosts.find((post) => post.slug === slug);
}

export const profile: Profile = {
  name: "Aman Mulani",
  role: "AI + Full-Stack Engineer",
  headline: "I build practical AI products from idea to production.",
  introduction:
    "I build AI features, RAG systems, backend services, and React interfaces that are simple to use and reliable in production.",
  location: "India",
  email: "mulaniaman0504@gmail.com",
  linkedin: "https://www.linkedin.com/in/aman-mulani/",
  github: "https://github.com/amanmulani09",
  resume: "/Aman-Mulani-Full-Stack-AI-Resume.pdf",
  availability: "Open to AI and full-stack product engineering roles",
  currently: [
    { label: "Building", value: "AI product features and agent workflows" },
    { label: "Shipping", value: "RAG systems, APIs, and web tools" },
    { label: "Improving", value: "Reliability, security, speed, and cost" }
  ]
};

export const metrics: Metric[] = [
  {
    value: "4+",
    label: "years shipping software",
    detail: "Building web apps, backend services, automation, and AI features since 2022.",
    icon: "rocket"
  },
  {
    value: "3",
    label: "product organizations",
    detail: "Professional engineering roles at HMX Media, Razorpay, and THG Ingenuity.",
    icon: "building"
  },
  {
    value: "4",
    label: "engineering domains",
    detail: "Interactive web, payments, ecommerce, and AI systems.",
    icon: "layers"
  },
  {
    value: "E2E",
    label: "delivery scope",
    detail: "From user interface and API design to release, monitoring, and support.",
    icon: "workflow"
  }
];

export const principles: Principle[] = [
  {
    index: "01",
    title: "Build for real users",
    body: "A good demo is not enough. I focus on clear user flows, reliable APIs, useful data, and graceful failure handling."
  },
  {
    index: "02",
    title: "Make AI answers trustworthy",
    body: "For RAG systems, I care about the source data, retrieval quality, citations, speed, and cost behind every answer."
  },
  {
    index: "03",
    title: "Keep actions controlled",
    body: "Payments, agents, and automation need clear permissions, validation, logs, and human-visible boundaries."
  },
  {
    index: "04",
    title: "Own the result",
    body: "I like taking unclear problems through design, implementation, release, and improvement while keeping the product easy to use."
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
    title: "Multi-agent systems need real boundaries",
    category: "Agent architecture",
    readTime: "3 min",
    excerpt:
      "More agents do not create a better system. Clear responsibilities, typed handoffs, and failure boundaries do.",
    paragraphs: [
      "A multi-agent pipeline is useful when separate capabilities need different tools, prompts, data contracts, and failure handling. Splitting one prompt into several model calls is not architecture by itself.",
      "Single-responsibility agents make orchestration visible: one stage captures data, another analyses evidence, and another produces a report. Typed contracts make every handoff inspectable and testable.",
      "The orchestration layer should still own timeouts, retries, observability, and authority. Agents remain bounded workers inside a product system—not independent services with unlimited control."
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
      "Production systems fail across connected layers: interfaces, APIs, data, retrieval, model behavior, tools, integrations, and infrastructure can all degrade differently.",
      "Tracing and evaluation make those layers visible. They show whether a problem comes from missing context, a weak prompt, a tool failure, or an operational bottleneck.",
      "The goal is not a larger dashboard. It is faster diagnosis, safer iteration, and a product that remains dependable under real traffic."
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "An internal RAG assistant helped teams find information about 40% faster and reduced repeated support questions.",
    name: "Information discovery",
    context: "THG Ingenuity · Production RAG outcome"
  },
  {
    quote:
      "Release-time schema validation caught bad configuration earlier and reduced related production incidents by about 60%.",
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
      "Building AI, automation, and full-stack ecommerce tools for customer-facing and internal products.",
    highlights: [
      "Build Python services, TypeScript interfaces, automation, and production workflows.",
      "Shipped an internal RAG assistant that made information discovery ~40% faster, plus schema validation that cut config incidents by ~60%."
    ]
  },
  {
    kind: "work",
    company: "Razorpay",
    role: "Product Engineer, Full-Stack",
    period: "Apr 2024 — Aug 2025",
    summary:
      "Built secure payment workflows for Push Provisioning, card tokenization, lifecycle events, and monitoring.",
    highlights: [
      "Led a white-labeled platform that made new banking integrations repeatable through configuration.",
      "Built Python and FastAPI services with strong validation, audit trails, monitoring, and alerts."
    ]
  },
  {
    kind: "work",
    company: "HMX Media",
    role: "Web Developer",
    period: "Aug 2022 — Mar 2024",
    summary:
      "Built automation, interactive web experiences, and shared frontend tools with React, TypeScript, Canvas, and WebGL.",
    highlights: [
      "Built an internal CLI tool that replaced a manual content-localization workflow.",
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
    id: "thg-commerce",
    title: "THG Commerce Storefront",
    eyebrow: "THG Ingenuity · Current experience · Public platform context",
    short:
      "Ecommerce engineering across storefront work, internal knowledge search, release validation, and production support.",
    thesis:
      "Commerce platforms work best when teams can ship safely, find answers quickly, and catch bad configuration before release.",
    outcome:
      "Full-stack delivery supported by an internal RAG assistant and release-time schema validation.",
    role: "Software Engineer · AI and full-stack",
    timeline: "Aug 2025 — Present",
    team: "THG Ingenuity product teams",
    status: "Current production experience",
    sourceUrl: "https://www.thgingenuity.com/commerce",
    sourceLabel: "THG Commerce overview",
    sourceKind: "public",
    problem:
      "Enterprise commerce teams manage many storefronts, shared platform features, brand settings, and release paths. Small configuration mistakes can affect customer journeys, and scattered internal knowledge slows delivery.",
    solution:
      "At THG Ingenuity, I work across TypeScript interfaces, Python services, automation, and release workflows. My work includes an internal RAG assistant and schema-validation pipelines that block invalid configuration before release.",
    impact:
      "The RAG assistant helped teams find information about 40% faster, while validation automation reduced configuration-related incidents by about 60%.",
    constraints: [
      "Storefronts must work across brands, regions, and device sizes",
      "Configuration changes need validation before reaching production",
      "Internal knowledge needs grounded answers and controlled access",
      "Public discussion must not expose proprietary architecture, customer data, or private repositories"
    ],
    decisions: [
      {
        index: "D1",
        title: "Validate configuration before release",
        body:
          "Schema checks catch configuration mistakes during delivery, before they can affect customers.",
        signal: "Release safety"
      },
      {
        index: "D2",
        title: "Ground answers in source material",
        body:
          "The assistant retrieves relevant internal evidence before answering, which reduces time spent searching through scattered documentation.",
        signal: "Faster discovery"
      },
      {
        index: "D3",
        title: "Connect the layers",
        body:
          "Interface, service, automation, and release work stay connected so issues are easier to trace and fix.",
        signal: "End-to-end delivery"
      }
    ],
    workflow: ["Storefront need", "Service or UI change", "Validation and review", "Production feedback"],
    architecture: [
      "Customer-facing storefronts run on shared commerce platform capabilities",
      "TypeScript interfaces and Python services support product workflows",
      "Schema checks validate configuration during delivery",
      "Internal RAG retrieval helps teams find trusted knowledge",
      "Logs, monitoring, and feedback guide fixes and improvements"
    ],
    results: [
      { value: "~40%", label: "faster discovery" },
      { value: "~60%", label: "fewer config incidents" },
      { value: "Production", label: "commerce delivery" }
    ],
    tech: ["TypeScript", "React", "Python", "RAG", "Schema validation", "CI/CD", "Observability"],
    accent: "#b6dc7b",
    icon: "globe",
    confidentiality:
      "THG Commerce platform context comes from the linked public overview. Personal contribution and outcomes come from Aman’s résumé; implementation details, clients, data, and internal systems remain intentionally abstracted.",
    learning:
      "Commerce reliability improves when product delivery, internal knowledge, validation, and support are treated as connected work.",
    next: "push-provisioning"
  },
  {
    id: "push-provisioning",
    title: "Push Provisioning",
    eyebrow: "Razorpay · Card tokenization · Public product context",
    short:
      "A configurable platform for bank-led card activation, merchant token provisioning, lifecycle workflows, and monitoring.",
    thesis:
      "Regulated payment products scale better when new bank integrations use controlled configuration instead of repeated custom builds.",
    outcome:
      "A reusable full-stack integration model for secure bank, merchant, and tokenization workflows.",
    role: "Product Engineer · Full-stack platform",
    timeline: "Apr 2024 — Aug 2025",
    team: "Razorpay product and payments teams",
    status: "Shipped professional experience",
    sourceUrl: "https://razorpay.com/blog/push-provisioning-a-new-era-in-card-tokenization/",
    sourceLabel: "Push Provisioning article",
    sourceKind: "public",
    additionalSources: [
      {
        label: "TokenHQ product article",
        url: "https://razorpay.com/blog/razorpay-token-hq-card-tokenisation-solution/"
      }
    ],
    problem:
      "Card-tokenization rules changed how saved-card experiences worked. Banks needed a secure way to activate and provision cards across merchants, while each integration had its own branding, settings, network rules, and lifecycle events.",
    solution:
      "I led a white-labeled, config-driven Push Provisioning platform and built Python and FastAPI services for tokenization and lifecycle workflows. Logging, monitoring, alerts, and clear integration boundaries were part of the product design.",
    impact:
      "New bank journeys could be handled through repeatable configuration and shared platform behavior instead of separate custom builds. Public Razorpay material describes the broader Push Provisioning and TokenHQ products; private metrics are not disclosed.",
    constraints: [
      "Card and identity workflows must follow strict security and regulatory rules",
      "Banks need distinct branding and journey settings without platform forks",
      "Token lifecycle events need monitoring and recovery paths",
      "Public case-study content cannot reveal partner data, credentials, or internal payment architecture"
    ],
    decisions: [
      {
        index: "D1",
        title: "Turn integrations into configuration",
        body:
          "Typed configuration captured bank-specific branding and behavior while shared services kept one reusable platform path.",
        signal: "Repeatable onboarding"
      },
      {
        index: "D2",
        title: "Keep privilege boundaries explicit",
        body:
          "Verification, tokenization, provisioning, and lifecycle operations stayed separated so sensitive actions could be validated and audited.",
        signal: "Controlled authority"
      },
      {
        index: "D3",
        title: "Make failures visible",
        body:
          "Structured logging, monitoring, and alerts made integration failures easier to diagnose without exposing sensitive payment data.",
        signal: "Operational visibility"
      }
    ],
    workflow: ["Bank card activation", "Customer verification", "Merchant selection", "Token provisioning"],
    architecture: [
      "A white-labeled interface adapts bank-specific content and configuration",
      "FastAPI services validate requests and coordinate provisioning workflows",
      "TokenHQ capabilities connect merchant and card-network tokenization paths",
      "Webhook and lifecycle handling keep card state changes synchronized",
      "Structured logs and alerts support audit, monitoring, and incident response"
    ],
    results: [
      { value: "Config", label: "bank integrations" },
      { value: "Multi-party", label: "payment workflow" },
      { value: "Observable", label: "lifecycle operations" }
    ],
    tech: ["Python", "FastAPI", "TypeScript", "REST APIs", "Webhooks", "Tokenization", "Observability"],
    accent: "#82aaa1",
    icon: "credit-card",
    confidentiality:
      "Product behavior is summarized from Razorpay’s public Push Provisioning and TokenHQ articles. Personal contribution comes from Aman’s résumé. Partner integrations, internal architecture, credentials, and card data are excluded.",
    learning:
      "Security-sensitive platforms are easier to scale when variation is modeled clearly and every privileged action is visible.",
    next: "hmx-interactive"
  },
  {
    id: "hmx-interactive",
    title: "Interactive 3D Commerce",
    eyebrow: "HMX Media · Sharp Kitchen + Royal Enfield · Public case studies",
    short:
      "Mobile-first WebGL experiences that let customers explore and configure complex products in the browser.",
    thesis:
      "Immersive product interfaces only work when visuals, speed, and touch interaction are engineered together.",
    outcome:
      "Browser-based 3D product experiences and shared frontend systems for appliance and automotive products.",
    role: "Web Developer · Interactive frontend",
    timeline: "Aug 2022 — Mar 2024",
    team: "HMX Media interactive teams",
    status: "Shipped professional experience",
    sourceUrl: "https://www.hmxmedia.com/case-studies/sharp-kitchen/",
    sourceLabel: "Sharp Kitchen case study",
    sourceKind: "public",
    additionalSources: [
      {
        label: "Royal Enfield case study",
        url: "https://www.hmxmedia.com/case-studies/royal-enfield/"
      }
    ],
    problem:
      "Photorealistic 3D product configuration must stay responsive on mobile browsers and slower connections while supporting product options, camera movement, and rich visual states.",
    solution:
      "At HMX Media, I delivered React, TypeScript, Canvas, and WebGL experiences and contributed to shared UI systems. Sharp Kitchen and Royal Enfield are public examples of this type of browser-based configuration work.",
    impact:
      "These experiences made detailed appliance and motorcycle exploration available on consumer devices without requiring a native app. My individual contribution is described at résumé level; HMX’s linked pages show the complete team outcomes.",
    constraints: [
      "High-quality 3D assets must load within mobile performance budgets",
      "Interactions need to stay smooth across pointer and touch input",
      "Product variants and visual state require predictable frontend contracts",
      "Client assets, project ownership boundaries, and proprietary engine details remain confidential"
    ],
    decisions: [
      {
        index: "D1",
        title: "Design mobile-first interaction",
        body:
          "Controls, camera movement, and configuration states were built for touch constraints from the start.",
        signal: "Any-device access"
      },
      {
        index: "D2",
        title: "Treat asset weight as product behavior",
        body:
          "Loading speed and runtime performance shaped how scenes, materials, and interface states were delivered.",
        signal: "Fast loading"
      },
      {
        index: "D3",
        title: "Reuse interaction patterns",
        body:
          "Shared TypeScript and React components kept controls and feedback consistent across complex product experiences.",
        signal: "Shared frontend"
      }
    ],
    workflow: ["Choose product", "Load 3D scene", "Configure options", "Inspect final selection"],
    architecture: [
      "React and TypeScript manage interface and configuration state",
      "Canvas and WebGL render interactive product scenes in the browser",
      "Optimized assets and data handling protect mobile performance",
      "Shared UI components connect controls to visual scene state",
      "Responsive input handling supports touch, pointer, and device variation"
    ],
    results: [
      { value: "2", label: "public showcases" },
      { value: "Mobile-first", label: "browser delivery" },
      { value: "Real-time 3D", label: "product interaction" }
    ],
    tech: ["React", "TypeScript", "WebGL", "Canvas", "Node.js", "3D asset delivery"],
    accent: "#b99a70",
    icon: "layers",
    confidentiality:
      "Product capabilities come from HMX Media’s public Sharp Kitchen and Royal Enfield case studies. This page avoids client assets, proprietary engine details, private code, and unverified claims of sole ownership.",
    learning:
      "High-quality visuals matter only when loading, performance, and interaction stay dependable on real devices.",
    next: "chitra-ai"
  },
  {
    id: "chitra-ai",
    title: "Chitra.ai",
    eyebrow: "Multi-agent video analysis · Public GitHub project",
    short:
      "A FastAPI service that analyzes video and audio through focused agents, then scores the result and sends a report.",
    thesis:
      "Multi-agent systems are easier to trust when each agent has one clear job.",
    outcome:
      "An end-to-end video analysis project with isolated agents, typed handoffs, Docker packaging, tests, and staged CI/CD.",
    role: "Creator · AI and backend architecture",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Architecture and implementation",
    sourceUrl: "https://github.com/amanmulani09/chitra.ai",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Video analysis combines audio transcription, image understanding, scoring, reporting, external APIs, and long-running failures. It becomes hard to test when everything is packed into one model call.",
    solution:
      "I built a layered FastAPI service where Data Capture, Analysis, and Report agents each own one stage. Pydantic contracts connect the stages, and a service layer runs the stateless pipeline.",
    impact:
      "The project shows a multi-agent system that is testable, container-ready, and separate from its API layer.",
    constraints: [
      "Video and audio require different extraction and model capabilities",
      "External AI and email services introduce latency, cost, and failure points",
      "Secrets must enter at runtime rather than being baked into images",
      "The pipeline should scale horizontally without local session state"
    ],
    decisions: [
      {
        index: "D1",
        title: "Give every agent one responsibility",
        body:
          "Data Capture validates and transcribes, Analysis interprets and scores, and Report formats and delivers. Each capability has a clear owner.",
        signal: "Focused agents"
      },
      {
        index: "D2",
        title: "Connect stages with typed contracts",
        body:
          "Pydantic models define what moves between agents, so invalid data fails at a clear boundary.",
        signal: "Explicit handoffs"
      },
      {
        index: "D3",
        title: "Keep orchestration stateless",
        body:
          "Request state lives only for the duration of the pipeline, allowing identical containers to scale behind a load balancer.",
        signal: "Horizontal scale"
      }
    ],
    workflow: ["Video and audio", "Capture agent", "Analysis agent", "Report agent"],
    architecture: [
      "FastAPI validates requests and delegates through a thin API layer",
      "A service layer coordinates three dependency-injected agents",
      "Whisper transcribes audio while GPT-4o analyzes visual and text evidence",
      "SendGrid delivers the generated report after scoring and prioritization",
      "Docker and GitHub Actions support test, UAT, and production promotion"
    ],
    results: [
      { value: "3", label: "specialized agents" },
      { value: "2", label: "modalities analyzed" },
      { value: "UAT→Prod", label: "promotion model" }
    ],
    tech: ["Python", "FastAPI", "GPT-4o", "Whisper", "Pydantic", "Docker", "GitHub Actions"],
    accent: "#b6dc7b",
    icon: "sparkles",
    confidentiality:
      "This case study uses only architecture and behavior documented in the public repository. No API keys, private media, or production data are included.",
    learning:
      "Multi-agent architecture adds value when it creates clear responsibility boundaries, not just more model calls.",
    next: "rag-architectures"
  },
  {
    id: "rag-architectures",
    title: "RAG Architecture Lab",
    eyebrow: "Retrieval engineering · Public GitHub project",
    short:
      "A practical RAG lab covering hybrid search, reranking, prompt-injection handling, and layered service design.",
    thesis:
      "RAG quality depends on the retrieval design, not just the language model.",
    outcome:
      "A public code lab comparing simple retrieval patterns with a layered RAG application.",
    role: "Creator · Retrieval and system design",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Active architecture lab",
    sourceUrl: "https://github.com/amanmulani09/RAG",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Simple RAG demos often hide the decisions that matter: search strategy, reranking, prompt-injection handling, document APIs, vector storage, and separation between model and application code.",
    solution:
      "I implemented focused examples for hybrid search, reranking, retrieval, and injection handling, plus a layered app that separates API routes, models, RAG services, repositories, and chat orchestration.",
    impact:
      "The repository turns RAG concepts into code paths that can be compared, tested, and extended.",
    constraints: [
      "Retrieval experiments need repeatable inputs and comparable boundaries",
      "Prompt injection must be treated as untrusted data behavior",
      "Vector storage should remain behind a repository abstraction",
      "HTTP, retrieval, and model concerns should not collapse into one module"
    ],
    decisions: [
      {
        index: "D1",
        title: "Compare retrieval patterns directly",
        body:
          "Basic, hybrid, and reranked retrieval are separate implementations, so trade-offs stay visible.",
        signal: "Comparable retrieval"
      },
      {
        index: "D2",
        title: "Layer the application",
        body:
          "API, service, RAG, model, and repository modules keep web code separate from retrieval and model behavior.",
        signal: "Replaceable layers"
      },
      {
        index: "D3",
        title: "Model injection as a system risk",
        body:
          "Injection handling is treated as a system concern, not only a prompt-writing concern.",
        signal: "Safer context"
      }
    ],
    workflow: ["Documents", "Chunk and embed", "Retrieve and rerank", "Grounded response"],
    architecture: [
      "Document endpoints accept and validate source material",
      "Chunking and embedding services prepare searchable context",
      "A vector repository isolates persistence from retrieval logic",
      "Retrieval services select and rank relevant evidence",
      "Chat and LLM services compose answers through clear application boundaries"
    ],
    results: [
      { value: "2", label: "architecture tracks" },
      { value: "Hybrid", label: "search patterns" },
      { value: "Layered", label: "service design" }
    ],
    tech: ["Python", "RAG", "Hybrid search", "Reranking", "FastAPI", "Vector stores"],
    accent: "#82aaa1",
    icon: "layers",
    confidentiality:
      "Examples, documents, and architecture come from the public repository. No internal knowledge base or private retrieval data is represented.",
    learning:
      "Useful RAG work starts with evidence flow: what enters the index, what gets retrieved, and how untrusted context is controlled.",
    next: "codo"
  },
  {
    id: "codo",
    title: "Codo",
    eyebrow: "AI code review · Public GitHub project",
    short:
      "A GitHub App that reviews pull requests, posts focused inline findings, summarizes risk, and reports a status check.",
    thesis:
      "AI code review should help humans focus without taking control away from them.",
    outcome:
      "An automated pull-request review workflow focused on correctness, security, resource leaks, and error handling.",
    role: "Creator · Agent and platform engineering",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Public GitHub App project",
    sourceUrl: "https://github.com/amanmulani09/codo",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Pull requests can hide bugs and security risks, but automated review becomes counterproductive when it floods developers with style comments or asks for too much repository access.",
    solution:
      "I built a GitHub App that reacts to pull-request events, analyzes the diff, posts inline comments and a summary, and exposes repository-level controls through a small YAML configuration.",
    impact:
      "Codo shows an AI review product designed around useful findings, scoped access, repeat reviews, and human-applied fixes.",
    constraints: [
      "Pull-request code and comments are untrusted model inputs",
      "Repository permissions must stay limited to review needs",
      "Findings must prioritize signal over speculative noise",
      "Repeated reviews should update prior output instead of spamming the pull request"
    ],
    decisions: [
      {
        index: "D1",
        title: "Integrate through a scoped GitHub App",
        body:
          "The app requests only the access needed to read pull requests, post review comments, and report status checks.",
        signal: "Least privilege"
      },
      {
        index: "D2",
        title: "Review diffs, not abstract code",
        body:
          "Findings attach to affected lines and include severity and suggested fixes so reviewers can evaluate them in context.",
        signal: "Actionable output"
      },
      {
        index: "D3",
        title: "Make noise configurable",
        body:
          "Teams can control severity thresholds, nits, tone, and ignored paths while safe defaults work without setup.",
        signal: "Reviewer control"
      }
    ],
    workflow: ["Pull request event", "Scoped diff context", "AI review", "Human decision"],
    architecture: [
      "GitHub App events enter a Python application through webhook handling",
      "Repository configuration controls review scope and severity",
      "A review worker analyzes the diff and produces structured findings",
      "GitHub API calls publish summaries, inline comments, and status checks",
      "Human reviewers decide whether suggested fixes are applied"
    ],
    results: [
      { value: "3", label: "severity levels" },
      { value: "Inline", label: "review findings" },
      { value: "Human", label: "final authority" }
    ],
    tech: ["Python", "GitHub Apps", "Claude", "Webhooks", "YAML configuration"],
    accent: "#a98698",
    icon: "bot",
    confidentiality:
      "The case study describes the public repository and README. No private source code, installation tokens, or customer pull requests are shown.",
    learning:
      "AI review earns trust by staying quiet when uncertain, being precise when useful, and respecting repository permissions.",
    next: "thg-commerce"
  },
];

const projectsById = new Map(projects.map((project) => [project.id, project]));

export function getProjectById(projectId: ProjectId): Project {
  return projectsById.get(projectId) ?? projects[0];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Agentic AI & LLM",
    icon: "sparkles",
    skills: ["Multi-agent systems", "Agent orchestration", "LangGraph", "LangChain", "ReAct", "Google ADK", "Vertex AI", "GPT-4o", "Whisper", "Tool calling", "Memory", "MCP / FastMCP"]
  },
  {
    label: "RAG, Evals & Safety",
    icon: "gauge",
    skills: ["RAG", "Hybrid search", "Reranking", "Embeddings", "Pinecone", "Prompt-injection boundaries", "DeepEval", "Langfuse", "Tracing"]
  },
  {
    label: "Backend & Data",
    icon: "code",
    skills: ["Python", "TypeScript", "FastAPI", "Node.js", "SQL", "PostgreSQL", "Redis", "SQLAlchemy", "Pydantic", "REST", "GraphQL"]
  },
  {
    label: "Frontend & Product UI",
    icon: "layers",
    skills: ["React", "Next.js", "Astro", "Lit", "React Native", "PWA", "Tailwind CSS", "Canvas", "WebGL"]
  },
  {
    label: "Cloud, Delivery & Observability",
    icon: "globe",
    skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Gunicorn", "Uvicorn", "Grafana", "Sentry", "Structured logging", "Production operations"]
  }
];
