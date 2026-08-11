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
    slug: "llms-align-more-than-they-decide",
    category: "AI",
    title: "LLMs align more than they decide",
    excerpt:
      "A prompt experiment showed the same model arguing opposite architecture decisions with equal confidence—and why human judgment still owns the outcome.",
    readTime: "4 min read",
    sections: [
      {
        heading: "Same model, opposite answer",
        paragraphs: [
          "I gave a language model an architecture choice and framed one option as my preferred direction. It produced a confident, polished argument supporting that choice. I then restarted the conversation, preferred the opposite option, and received an equally confident argument for that position.",
          "Nothing about the underlying engineering problem changed. Only the direction implied by the prompt changed. The experiment exposed a useful distinction: a model can generate a coherent justification without independently deciding which trade-off matters most for a specific product."
        ]
      },
      {
        heading: "Confidence is not evaluation",
        paragraphs: [
          "Architecture decisions depend on constraints that rarely fit inside one prompt: team experience, operational load, migration cost, data sensitivity, failure recovery, and product deadlines. A fluent answer can hide missing evidence because fluency feels like certainty.",
          "Useful AI support should make assumptions visible, compare alternatives against explicit criteria, and identify evidence still needed. Asking for the strongest counterargument, failure modes, and conditions that would reverse the recommendation produces more value than asking for approval."
        ]
      },
      {
        heading: "Keep judgment outside the model",
        paragraphs: [
          "I use models to expand the option space, pressure-test decisions, and turn unclear trade-offs into inspectable lists. Final ownership remains human. That means checking claims against documentation, measuring system behavior, and recording why a decision fits current constraints.",
          "Models are strong collaborators when the workflow expects disagreement and verification. They become risky when persuasive language is treated as an architectural verdict."
        ]
      }
    ],
    takeaways: [
      "Ask models to compare explicit criteria, not validate a preferred answer.",
      "Request counterarguments and reversal conditions before deciding.",
      "Keep evidence, accountability, and final judgment with humans."
    ],
    url: "https://www.linkedin.com/posts/amanmulani_you-are-absolutely-right-if-this-instantly-activity-7445516076865544192-LAL9",
    linkedInReactions: null,
    linkedInComments: null,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "tdd-for-ai-agents",
    category: "AI",
    title: "Why agents make TDD non-negotiable",
    excerpt:
      "Coding agents need mechanical feedback loops. Unit, integration, and end-to-end tests become executable boundaries for trustworthy implementation.",
    readTime: "5 min read",
    sections: [
      {
        heading: "Agents move faster than review",
        paragraphs: [
          "Coding agents can produce broad changes quickly, but speed increases the amount of behavior a reviewer must verify. A plausible diff is not proof that requirements, edge cases, and existing contracts still hold.",
          "Tests give the agent a mechanical feedback loop. Instead of relying on confidence or visual inspection, the system receives a concrete signal about whether implementation matches expected behavior."
        ]
      },
      {
        heading: "Tests become executable boundaries",
        paragraphs: [
          "Unit tests protect local rules. Integration tests verify databases, queues, services, and external boundaries. End-to-end tests cover the few user journeys where a silent regression would be expensive. Together, they turn product expectations into constraints an agent can inspect and rerun.",
          "The test suite must still be designed carefully. Tests that mirror implementation details create false confidence and make refactoring harder. Strong tests describe observable behavior, permission boundaries, failure handling, and data integrity."
        ]
      },
      {
        heading: "A safer agent workflow",
        paragraphs: [
          "Start with a failing test or a reproducible check. Ask the agent to make the smallest change that passes it. Run targeted tests first, then broader validation, and review the diff for security, scope, and unintended edits.",
          "Agents do not remove the need for engineering judgment. They increase the value of fast, deterministic feedback and small reviewable changes."
        ]
      }
    ],
    takeaways: [
      "Give agents deterministic feedback before broad autonomy.",
      "Test behavior and privilege boundaries, not implementation shape.",
      "Keep changes small enough for human review."
    ],
    url: "https://www.linkedin.com/posts/amanmulani_agents-make-tdd-non-negotiable-activity-7469378177807872000-YsfU",
    linkedInReactions: null,
    linkedInComments: null,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "inside-an-ai-coding-tool",
    category: "AI",
    title: "What an AI coding tool did behind the scenes",
    excerpt:
      "A GPT-powered image-to-SVG experiment looked like direct generation until the workflow revealed bitmap tracing, tool use, and a large token bill.",
    readTime: "4 min read",
    sections: [
      {
        heading: "Output hid the workflow",
        paragraphs: [
          "I asked an AI coding tool to recreate an image as SVG. The result looked like direct vector generation, but inspecting the process showed a different path: image analysis, intermediary bitmap work, tracing, file operations, and repeated tool calls.",
          "This matters because users see one polished output while cost, latency, and failure risk live inside the hidden workflow. Product teams need to evaluate the complete execution path, not only the final artifact."
        ]
      },
      {
        heading: "Tool use changes system economics",
        paragraphs: [
          "Agentic tools can choose useful techniques that were not spelled out in the prompt. That flexibility is powerful, but every extra step can increase tokens, compute, storage, and attack surface. A task that feels small in the interface can become expensive underneath.",
          "Observability should capture model calls, tool calls, duration, retries, and produced artifacts. Cost limits and timeouts need to be product constraints rather than cleanup work after launch."
        ]
      },
      {
        heading: "Inspect process, not magic",
        paragraphs: [
          "When evaluating an AI feature, I ask what tools ran, what data crossed each boundary, what persisted, and how the result can be reproduced. Those questions make quality and security review possible.",
          "Useful AI products can still feel effortless. Engineering behind them should remain observable, bounded, and explainable."
        ]
      }
    ],
    takeaways: [
      "Measure complete agent workflow, not only final response.",
      "Bound tool calls with cost, time, and permission limits.",
      "Log enough execution detail to reproduce failures safely."
    ],
    url: "https://www.linkedin.com/posts/amanmulani_today-i-was-playing-around-with-gpt-54-via-activity-7436795049650118656--5ci",
    linkedInReactions: 24,
    linkedInComments: null,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "when-sse-beats-websockets",
    category: "Engineering",
    title: "When Server-Sent Events beat WebSockets",
    excerpt:
      "For one-way progress, logs, and AI response updates, plain HTTP streaming offered a smaller operational model with automatic reconnect behavior.",
    readTime: "5 min read",
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
    url: "https://www.linkedin.com/posts/aman-mulani_i-was-building-a-feature-where-the-ui-needed-activity-7424144231608352768-pPiR",
    linkedInReactions: 82,
    linkedInComments: 11,
    engagementAsOf: "August 11, 2026"
  },
  {
    slug: "isolating-python-dependency-conflicts",
    category: "Engineering",
    title: "Exploring conflicting Python dependencies",
    excerpt:
      "A subprocess-based proof of concept exposed real trade-offs around isolation, serialization, IPC, and runtime dependency management.",
    readTime: "5 min read",
    sections: [
      {
        heading: "One process, incompatible requirements",
        paragraphs: [
          "Python applications sometimes need libraries whose dependency ranges cannot coexist in one environment. I explored running conflicting components in separate subprocesses, each with its own environment, while keeping one parent application responsible for orchestration.",
          "The proof of concept worked, but it replaced a package conflict with a distributed-systems-shaped boundary. Calls now crossed processes, values needed serialization, errors needed transport, and startup behavior mattered."
        ]
      },
      {
        heading: "Isolation has a cost",
        paragraphs: [
          "Subprocess isolation can unblock legacy libraries or specialized runtimes. It also introduces inter-process communication, health checks, dependency provisioning, version drift, and harder debugging. Large payloads or chatty interfaces make the boundary expensive quickly.",
          "Security changes too. Child processes should receive minimum environment access, explicit inputs, controlled working directories, and strict timeouts. Passing shell strings, broad credentials, or untrusted serialized objects creates avoidable abuse paths."
        ]
      },
      {
        heading: "Use a narrow contract",
        paragraphs: [
          "A stable approach treats isolated code like a small service: define a narrow typed contract, return structured errors, record versions, and make process failure recoverable. If the boundary grows, a container or separately deployed service may become easier to operate.",
          "The experiment reinforced a broader rule: isolation solves compatibility only when communication and ownership remain simpler than fixing or replacing the dependency."
        ]
      }
    ],
    takeaways: [
      "Treat subprocess boundaries like service boundaries.",
      "Keep IPC typed, narrow, observable, and timeout-bound.",
      "Never pass broad secrets or untrusted shell input to child processes."
    ],
    url: "https://www.linkedin.com/posts/amanmulani_softwareengineering-python-engineering-activity-7332860690837274624-FZWI",
    linkedInReactions: null,
    linkedInComments: null,
    engagementAsOf: "August 11, 2026"
  }
];

export function getLinkedInPost(slug: string) {
  return linkedinPosts.find((post) => post.slug === slug);
}

export const profile: Profile = {
  name: "Aman Mulani",
  role: "AI + Full-Stack Engineer · Multi-Agent Systems",
  headline: "I turn AI capability into full-stack products people can depend on.",
  introduction:
    "I design and ship multi-agent systems, RAG architectures, and AI workflows—backed by Python and FastAPI services, React and TypeScript interfaces, data platforms, and production operations.",
  location: "India",
  email: "mulaniaman0504@gmail.com",
  linkedin: "https://www.linkedin.com/in/aman-mulani/",
  github: "https://github.com/amanmulani09",
  resume: "/Aman-Mulani-Full-Stack-AI-Resume.pdf",
  availability: "Open to AI, multi-agent, and full-stack product engineering conversations",
  currently: [
    { label: "Building", value: "Multi-agent analysis and AI product systems" },
    { label: "Shipping", value: "RAG architectures, APIs, and full-stack tools" },
    { label: "Optimizing", value: "Reliability, security, latency, and cost" }
  ]
};

export const metrics: Metric[] = [
  {
    value: "4+",
    label: "years shipping software",
    detail: "Frontends, backend services, payment platforms, ecommerce, and production AI systems.",
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
    value: "6",
    label: "selected public systems",
    detail: "Three employer-backed product stories followed by three inspectable AI projects on GitHub.",
    icon: "globe"
  }
];

export const principles: Principle[] = [
  {
    index: "01",
    title: "Production before prototype theater",
    body: "Useful software needs dependable interfaces, APIs, data flows, observability, and failure handling—not only a convincing demo."
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
      "Production RAG, automation, and full-stack ecommerce systems across customer-facing and internal products.",
    highlights: [
      "Build AI and full-stack systems across Python services, TypeScript interfaces, automation, and production operations.",
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

const allProjects: Project[] = [
  {
    id: "thg-commerce",
    title: "THG Commerce Storefront",
    eyebrow: "THG Ingenuity · Current experience · Public platform context",
    short:
      "Storefront and platform engineering across customer-facing ecommerce, internal knowledge retrieval, release validation, and production operations.",
    thesis:
      "Global commerce stays dependable when storefront delivery, platform configuration, internal knowledge, and operational feedback work as one system.",
    outcome:
      "Production full-stack delivery backed by an internal RAG assistant and release-time schema validation, with contribution claims limited to résumé-backed work.",
    role: "Software Engineer · AI and full-stack",
    timeline: "Aug 2025 — Present",
    team: "THG Ingenuity product teams",
    status: "Current production experience",
    sourceUrl: "https://www.thgingenuity.com/commerce",
    sourceLabel: "THG Commerce overview",
    sourceKind: "public",
    problem:
      "Enterprise commerce spans storefront experiences, shared platform capabilities, brand configuration, knowledge access, and release operations. Small errors can propagate across customer-facing journeys, while fragmented internal information slows diagnosis and delivery.",
    solution:
      "At THG Ingenuity, I contribute across TypeScript interfaces, Python services, automation, and production operations. My résumé-backed work includes an internal RAG knowledge assistant and schema-validation pipelines that block invalid configuration before release.",
    impact:
      "The knowledge assistant reduced information-discovery time by approximately 40%, while validation automation reduced configuration-related production incidents by approximately 60%.",
    constraints: [
      "Storefront behavior must remain reliable across brands, regions, and device sizes",
      "Configuration changes need validation before reaching production",
      "Internal knowledge sources require grounded retrieval and controlled access",
      "Public discussion must not expose proprietary architecture, customer data, or private repositories"
    ],
    decisions: [
      {
        index: "D1",
        title: "Validate configuration before release",
        body:
          "Schema checks move configuration failures into CI, where teams can correct them before customer-facing systems are affected.",
        signal: "Release safety"
      },
      {
        index: "D2",
        title: "Ground internal answers in source material",
        body:
          "The knowledge assistant retrieves relevant internal evidence before producing an answer, reducing time spent searching across fragmented documentation.",
        signal: "Faster discovery"
      },
      {
        index: "D3",
        title: "Own delivery across layers",
        body:
          "Interface, service, automation, and operational concerns stay connected so issues can be traced to the layer that owns them.",
        signal: "End-to-end delivery"
      }
    ],
    workflow: ["Storefront need", "Platform and service change", "Validation and review", "Production observation"],
    architecture: [
      "Customer-facing storefronts sit on THG Commerce platform capabilities",
      "TypeScript interfaces and Python services support product workflows",
      "Configuration contracts are checked during automated delivery pipelines",
      "Internal RAG retrieval helps teams find grounded operational knowledge",
      "Logs, monitoring, and production feedback guide diagnosis and iteration"
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
      "Commerce reliability improves when product delivery, internal knowledge, validation, and operations are treated as connected engineering work.",
    next: "push-provisioning"
  },
  {
    id: "push-provisioning",
    title: "Push Provisioning",
    eyebrow: "Razorpay · Card tokenization · Public product context",
    short:
      "A config-driven, white-labelled platform for bank-led card activation, multi-merchant token provisioning, lifecycle workflows, and operational visibility.",
    thesis:
      "Regulated payment platforms scale when new integrations become controlled configuration—not repeated custom builds.",
    outcome:
      "A reusable full-stack integration model for security-sensitive bank, merchant, and tokenization workflows with observability built into delivery.",
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
      "RBI card-tokenization rules changed how saved-card experiences could work. Banks needed a secure way to activate and provision cards across merchants, while every integration introduced branding, configuration, network, lifecycle, and operational requirements.",
    solution:
      "I led a white-labelled, config-driven Push Provisioning platform and built Python and FastAPI services around card tokenization and lifecycle workflows. Structured logs, monitoring, alerts, and controlled integration boundaries were treated as product requirements.",
    impact:
      "New bank journeys could be expressed through repeatable configuration and shared platform behavior instead of separate product builds. Public Razorpay material documents the broader Push Provisioning and TokenHQ capabilities; private implementation metrics remain undisclosed.",
    constraints: [
      "Card and identity workflows cross strict security and regulatory boundaries",
      "Banks require distinct branding and journey configuration without platform forks",
      "Token lifecycle events must remain observable and recoverable",
      "Public case-study content cannot reveal partner data, credentials, or internal payment architecture"
    ],
    decisions: [
      {
        index: "D1",
        title: "Turn integrations into configuration",
        body:
          "Typed configuration captured bank-specific branding and behavior while shared services preserved one platform path.",
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
        title: "Build operations into the product",
        body:
          "Structured logging, monitoring, and alerting made integration failures diagnosable without exposing sensitive payment data.",
        signal: "Operational visibility"
      }
    ],
    workflow: ["Bank card activation", "Customer verification", "Merchant selection", "Token provisioning"],
    architecture: [
      "A white-labelled interface adapts bank-specific content and configuration",
      "FastAPI services validate requests and coordinate provisioning workflows",
      "TokenHQ capabilities connect merchant and card-network tokenization paths",
      "Webhook and lifecycle handling keep card state changes synchronized",
      "Structured telemetry supports audit, monitoring, and incident response"
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
      "Security-sensitive platforms become easier to scale when variability is modeled explicitly and every privileged transition remains observable.",
    next: "hmx-interactive"
  },
  {
    id: "hmx-interactive",
    title: "Interactive 3D Commerce",
    eyebrow: "HMX Media · Sharp Kitchen + Royal Enfield · Public case studies",
    short:
      "Mobile-first WebGL product experiences that let customers explore, configure, and understand complex products directly in the browser.",
    thesis:
      "Immersive product interfaces only work when visual quality, input responsiveness, and download cost are engineered together.",
    outcome:
      "Performance-sensitive web experiences and shared frontend systems supporting browser-based 3D configuration across appliance and automotive products.",
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
      "Photorealistic 3D product configuration must remain responsive on mobile browsers and slower connections while supporting product swaps, options, camera interaction, and rich visual states.",
    solution:
      "During my HMX Media role, I delivered performance-sensitive React, TypeScript, Canvas, and WebGL experiences and contributed to shared UI systems. Sharp Kitchen and Royal Enfield are public examples of the browser-based configuration work represented here.",
    impact:
      "The experiences made detailed appliance and motorcycle exploration available from consumer devices without requiring a native application. Individual contribution is described only at résumé level; HMX’s linked pages document complete team outcomes.",
    constraints: [
      "High-quality 3D assets must load within browser and mobile performance budgets",
      "Interaction needs to remain responsive across pointer and touch input",
      "Product variants and visual state require predictable frontend contracts",
      "Client assets, project ownership boundaries, and proprietary engine details remain confidential"
    ],
    decisions: [
      {
        index: "D1",
        title: "Design mobile-first interaction",
        body:
          "Controls, camera movement, and configuration states were built around touch constraints rather than adapted after desktop delivery.",
        signal: "Any-device access"
      },
      {
        index: "D2",
        title: "Treat asset weight as product behavior",
        body:
          "Loading and runtime performance shaped how scenes, materials, and interface states were delivered to the browser.",
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
      "Optimized assets and data handling protect mobile load performance",
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
      "Visual fidelity has product value only when asset delivery, runtime performance, and interaction remain dependable on real devices.",
    next: "chitra-ai"
  },
  {
    id: "chitra-ai",
    title: "Chitra.ai",
    eyebrow: "Multi-agent video analysis · Public GitHub project",
    short:
      "A stateless multi-agent pipeline that combines audio transcription, visual analysis, scoring, and report delivery behind a FastAPI service.",
    thesis:
      "Multi-agent systems stay understandable when each agent owns one capability and typed contracts connect the pipeline.",
    outcome:
      "An end-to-end video and audio analysis architecture with isolated agents, Docker packaging, tests, and staged CI/CD.",
    role: "Creator · AI and backend architecture",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Architecture and implementation",
    sourceUrl: "https://github.com/amanmulani09/chitra.ai",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Video analysis spans multiple concerns—audio transcription, image understanding, scoring, reporting, external APIs, and long-running failure paths—that become difficult to test when packed into one model call.",
    solution:
      "I built a layered FastAPI service where Data Capture, Analysis, and Report agents each own one stage. Pydantic contracts connect the agents, while a service layer orchestrates the stateless pipeline.",
    impact:
      "The project demonstrates a multi-agent system that remains testable, container-ready, and separable from its HTTP interface.",
    constraints: [
      "Video and audio require different extraction and model capabilities",
      "External AI and email services introduce latency, cost, and failure boundaries",
      "Secrets must enter at runtime rather than being baked into images",
      "The pipeline should scale horizontally without local session state"
    ],
    decisions: [
      {
        index: "D1",
        title: "Give every agent one responsibility",
        body:
          "Data Capture validates and transcribes, Analysis interprets and scores, and Report formats and delivers. Each external capability has a clear owner.",
        signal: "Focused agents"
      },
      {
        index: "D2",
        title: "Connect stages with typed contracts",
        body:
          "Pydantic models define the shapes passed between agents so invalid data fails at a known boundary instead of leaking through the pipeline.",
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
      "AnalysisService coordinates three dependency-injected agents",
      "Whisper transcribes audio while GPT-4o analyses visual and text evidence",
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
      "Multi-agent architecture adds value when it creates clean capability boundaries—not when it only adds more model calls.",
    next: "rag-architectures"
  },
  {
    id: "rag-architectures",
    title: "RAG Architecture Lab",
    eyebrow: "Retrieval engineering · Public GitHub project",
    short:
      "A collection of practical RAG implementations covering hybrid search, reranking, prompt-injection handling, and layered service architecture.",
    thesis:
      "RAG quality depends on retrieval architecture, data boundaries, and evaluation—not only on the language model.",
    outcome:
      "A public implementation lab comparing basic retrieval patterns with a layered, service-oriented RAG application.",
    role: "Creator · Retrieval and system design",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Active architecture lab",
    sourceUrl: "https://github.com/amanmulani09/RAG",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Simple RAG demos hide the decisions that matter in production: retrieval strategy, reranking, injection boundaries, document APIs, vector repositories, and separation between model and application logic.",
    solution:
      "I implemented focused examples for hybrid search, reranking, retrieval, and injection handling, then a layered application separating API routes, models, RAG services, repositories, and chat orchestration.",
    impact:
      "The repository turns RAG patterns into inspectable code paths that can be compared, tested, and extended independently.",
    constraints: [
      "Retrieval experiments need comparable boundaries and repeatable inputs",
      "Prompt injection must be treated as untrusted data behavior",
      "Vector storage should remain behind a repository abstraction",
      "HTTP, retrieval, and model concerns should not collapse into one module"
    ],
    decisions: [
      {
        index: "D1",
        title: "Compare retrieval patterns directly",
        body:
          "Basic, hybrid, and reranked retrieval live as explicit implementations so trade-offs remain visible instead of hidden behind a framework default.",
        signal: "Comparable retrieval"
      },
      {
        index: "D2",
        title: "Layer the application",
        body:
          "API, service, RAG, model, and repository modules keep web concerns separate from retrieval and language-model behavior.",
        signal: "Replaceable layers"
      },
      {
        index: "D3",
        title: "Model injection as a system risk",
        body:
          "Injection handling is represented as its own implementation concern rather than relying on prompt wording as the only control.",
        signal: "Safer context"
      }
    ],
    workflow: ["Documents", "Chunk and embed", "Retrieve and rerank", "Grounded response"],
    architecture: [
      "Document endpoints accept and validate source material",
      "Chunking and embedding services prepare searchable context",
      "A vector repository isolates persistence from retrieval logic",
      "Retrieval services select and rank relevant evidence",
      "Chat and LLM services compose answers through stable application boundaries"
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
      "Useful RAG work starts with evidence flow: what enters the index, what gets retrieved, and which boundaries keep untrusted context controlled.",
    next: "codo"
  },
  {
    id: "codo",
    title: "Codo",
    eyebrow: "AI code review · Public GitHub project",
    short:
      "A GitHub App that reviews pull requests automatically, posts focused inline findings, summarizes risk, and reports a status check.",
    thesis:
      "AI review should narrow human attention while keeping repository permissions and final code changes under human control.",
    outcome:
      "An automated pull-request review workflow focused on correctness, security, resource leaks, and broken error handling.",
    role: "Creator · Agent and platform engineering",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Public GitHub App project",
    sourceUrl: "https://github.com/amanmulani09/codo",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Pull requests can hide correctness defects and security risks, but automated review becomes counterproductive when it floods developers with style noise or gains unnecessary repository authority.",
    solution:
      "I built a GitHub App that reacts to pull-request events, analyses the diff, posts inline comments and a summary, and exposes repository-level controls through a small YAML configuration.",
    impact:
      "Codo demonstrates an AI review product designed around actionable findings, scoped access, repeat reviews, and human-applied fixes.",
    constraints: [
      "Pull-request code and comments are untrusted model input",
      "Repository permissions must stay limited to review needs",
      "Findings must prioritize signal over speculative noise",
      "Repeated reviews should update prior output instead of spamming a pull request"
    ],
    decisions: [
      {
        index: "D1",
        title: "Integrate through a scoped GitHub App",
        body:
          "The app requests read access to code and pull requests plus permission to post review comments and status checks—nothing broader.",
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
      "A review worker analyses the diff and produces structured findings",
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
      "AI review earns trust by being quiet when uncertain, precise when useful, and constrained by repository permissions.",
    next: "thg-commerce"
  },
  {
    id: "pgkhata",
    title: "PGKhata",
    eyebrow: "Full-stack tenant management · Public GitHub project",
    short:
      "A mobile-first PWA for managing PG properties, tenants, rooms, beds, rent, complaints, and multilingual workflows.",
    thesis:
      "Operational software works when the data model, API, authentication, and mobile interface reflect the real workflow together.",
    outcome:
      "A complete React, FastAPI, and PostgreSQL application with protected routes, tested APIs, and six-language interface support.",
    role: "Creator · Full-stack product engineering",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Full-stack implementation",
    sourceUrl: "https://github.com/amanmulani09/pgkhata",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "PG accommodation management spans properties, room and bed inventory, tenants, rent, complaints, user access, and regional language needs that are difficult to manage through disconnected records.",
    solution:
      "I built a mobile-first React PWA backed by FastAPI, SQLAlchemy, Pydantic, and PostgreSQL, with protected frontend routes and domain-specific API modules.",
    impact:
      "The project demonstrates end-to-end ownership from responsive product UI and localization through authentication, relational models, API tests, and deployment configuration.",
    constraints: [
      "Property, room, bed, tenant, and rent records need consistent relationships",
      "Administrative routes require authentication and authorization boundaries",
      "Mobile usage should remain primary rather than an afterthought",
      "Localization must cover interface flows across multiple Indian languages"
    ],
    decisions: [
      {
        index: "D1",
        title: "Model the accommodation domain directly",
        body:
          "Separate property, room, bed, tenant, rent, and user models keep operational relationships explicit in PostgreSQL.",
        signal: "Clear domain model"
      },
      {
        index: "D2",
        title: "Keep frontend and API contracts typed",
        body:
          "TypeScript types and Pydantic schemas define the data exchanged between React screens and FastAPI endpoints.",
        signal: "End-to-end contracts"
      },
      {
        index: "D3",
        title: "Test at the API boundary",
        body:
          "Backend tests cover authentication, properties, tenants, rents, rooms, beds, and users—the workflows most likely to break together.",
        signal: "Workflow confidence"
      }
    ],
    workflow: ["Property setup", "Tenant and bed allocation", "Rent tracking", "Operational dashboard"],
    architecture: [
      "React and TypeScript deliver the mobile-first PWA",
      "Protected routes and auth context control administrative screens",
      "FastAPI endpoints expose property, tenant, rent, complaint, and user workflows",
      "SQLAlchemy models and PostgreSQL preserve relational state",
      "Pytest exercises domain APIs across authentication and management flows"
    ],
    results: [
      { value: "6", label: "interface languages" },
      { value: "PWA", label: "mobile-first product" },
      { value: "Full stack", label: "typed end to end" }
    ],
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Tailwind CSS"],
    accent: "#b99a70",
    icon: "building",
    confidentiality:
      "This case study uses only public repository structure and product documentation. No real tenant, payment, or authentication data is included.",
    learning:
      "Full-stack quality comes from treating interface flows, API contracts, and relational state as one product—not three separate codebases.",
    next: "shodh"
  },
  {
    id: "shodh",
    title: "Shodh",
    eyebrow: "Python developer tooling · Public GitHub project",
    short:
      "A published Python CLI and library that crawls websites, detects broken links, reports 404s, and exports results to CSV.",
    thesis:
      "Developer tools become useful when the default path is fast, quiet, typed, and easy to automate.",
    outcome:
      "A lightweight link-checking package available as both a command-line tool and a programmatic Python API.",
    role: "Creator · Backend and developer-tool engineering",
    timeline: "Open-source project",
    team: "Solo ownership",
    status: "Published package",
    sourceUrl: "https://github.com/amanmulani09/shodh",
    sourceLabel: "View source on GitHub",
    sourceKind: "github",
    problem:
      "Broken-link checks often require heavy crawlers or manual inspection when developers need a fast way to scan a site, identify 404s, and export actionable results.",
    solution:
      "I built Shodh with requests, selectolax, and Click, exposing the same scanning engine through a concise CLI and a callback-friendly Python API.",
    impact:
      "The package provides typed crawling, quiet mode, configurable timeouts, CSV export, tests, linting, and strict type-checking in a small installable tool.",
    constraints: [
      "Crawling must avoid URL fragments and repeated work",
      "Network failures and timeouts need predictable reporting",
      "CLI output should remain useful in both interactive and automated runs",
      "The library API should expose results without coupling callers to terminal output"
    ],
    decisions: [
      {
        index: "D1",
        title: "Share one engine across CLI and library",
        body:
          "The command-line interface and programmatic API call the same scan behavior so features and fixes stay consistent.",
        signal: "One core"
      },
      {
        index: "D2",
        title: "Prefer a lightweight parser",
        body:
          "Selectolax keeps HTML link extraction fast without pulling in a heavy browser runtime.",
        signal: "Fast scans"
      },
      {
        index: "D3",
        title: "Ship quality checks with the package",
        body:
          "Pytest, Ruff, and strict mypy settings make typing and behavior part of the package contract.",
        signal: "Maintainable tool"
      }
    ],
    workflow: ["Website URL", "Crawl and parse", "Detect broken links", "CLI or CSV report"],
    architecture: [
      "Click parses CLI options and controls interactive output",
      "A shared scan API crawls pages with configurable timeout behavior",
      "Selectolax extracts links while fragment URLs are ignored",
      "Structured results support callbacks and CSV export",
      "Tests, Ruff, and mypy verify behavior and type safety"
    ],
    results: [
      { value: "CLI + API", label: "two interfaces" },
      { value: "CSV", label: "export format" },
      { value: "Typed", label: "strict Python" }
    ],
    tech: ["Python", "Click", "selectolax", "requests", "Pytest", "Ruff", "mypy"],
    accent: "#859cb5",
    icon: "globe",
    confidentiality:
      "Shodh is an MIT-licensed public repository. Examples use placeholder websites and contain no private crawl data.",
    learning:
      "Small developer tools feel polished when automation, library use, testing, and terminal ergonomics share one clear core.",
    next: "chitra-ai"
  }
];

const featuredProjectIds = new Set<ProjectId>([
  "thg-commerce",
  "push-provisioning",
  "hmx-interactive",
  "chitra-ai",
  "rag-architectures",
  "codo"
]);

export const projects = allProjects.filter((project) => featuredProjectIds.has(project.id));

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
