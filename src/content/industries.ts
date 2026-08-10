import type { AccentKey, VisualKey } from "@/content/services";

/** Fallback theme for industries that haven't gotten their full content
 * pass yet (see the optional fields below) — keeps their pages themed
 * instead of unstyled while later phases fill in the rest. */
export const DEFAULT_INDUSTRY_THEME: { accent: AccentKey; visual: VisualKey } = {
  accent: "teal",
  visual: "mesh",
};

export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon:
    | "ai"
    | "automation"
    | "healthcare"
    | "fintech"
    | "ecommerce"
    | "education"
    | "realestate"
    | "logistics"
    | "manufacturing"
    | "travel"
    | "saas"
    | "insurance"
    | "legal"
    | "media"
    | "telecom"
    | "government";
  challenges: string[];
  solutions: string[];
  relatedServiceSlugs: string[];
  /** Everything below is optional — populated progressively, industry by
   * industry, as each one gets its full page treatment. Pages fall back to
   * a simpler layout for industries where these aren't set yet. */
  theme?: { accent: AccentKey; visual: VisualKey };
  overview?: string;
  stats?: { label: string; value: string }[];
  problemsSolved?: { challenge: string; solution: string }[];
  faqs?: { question: string; answer: string }[];
  seo?: { metaTitle: string; metaDescription: string; keywords: string[] };
};

export const industries: Industry[] = [
  {
    slug: "artificial-intelligence-ml",
    name: "Artificial Intelligence & Machine Learning",
    description: "AI product teams building predictive, generative, and automation features into their platforms.",
    icon: "ai",
    challenges: [
      "Turning a promising model prototype into a reliable production system",
      "Keeping inference costs and latency under control as usage scales",
      "Maintaining model accuracy as real-world data drifts from training data",
    ],
    solutions: [
      "Production-grade MLOps pipelines with automated retraining and drift monitoring",
      "Cost-optimized inference architecture across cloud and edge deployment",
      "Data pipeline engineering that keeps training data representative over time",
      "A/B testing infrastructure to validate model improvements before full rollout",
    ],
    relatedServiceSlugs: ["ai-ml-solutions", "ai-agent-model-training", "cloud-devops"],
    theme: { accent: "cyan", visual: "pulse" },
    overview:
      "A model that performs well in a notebook and a model that holds up in production are two different engineering problems. We build the MLOps pipelines, inference architecture, and data engineering it takes to close that gap — production-grade monitoring for drift, cost-optimized deployment across cloud and edge, and A/B testing infrastructure so every model improvement is validated before it reaches every user.",
    stats: [
      { label: "Avg. Model Accuracy Lift", value: "27%" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "Production Models Shipped", value: "40+" },
      { label: "Retraining Cadence", value: "Automated" },
    ],
    problemsSolved: [
      {
        challenge: "Turning a promising model prototype into a reliable production system.",
        solution: "Production-grade MLOps pipelines with automated retraining and drift monitoring built in from the first deployment.",
      },
      {
        challenge: "Keeping inference costs and latency under control as usage scales.",
        solution: "Cost-optimized inference architecture across cloud and edge deployment, sized to actual usage patterns rather than worst-case guesses.",
      },
      {
        challenge: "Maintaining model accuracy as real-world data drifts from training data.",
        solution: "Data pipeline engineering that keeps training data representative over time, with drift monitoring that catches degradation early.",
      },
      {
        challenge: "Rolling out model improvements without knowing if they actually help in production.",
        solution: "A/B testing infrastructure that validates model improvements against real user outcomes before a full rollout.",
      },
    ],
    faqs: [
      {
        question: "We have a model that works in a notebook — can you help productionize it?",
        answer: "Yes — this is one of the most common starting points. We wrap it in production-grade APIs, add monitoring, and build the MLOps pipeline around it.",
      },
      {
        question: "How do you keep inference costs predictable as usage grows?",
        answer: "We design inference architecture — batching, caching, model size, cloud vs. edge — around your actual usage patterns rather than over-provisioning by default.",
      },
      {
        question: "How is this different from your AI Agents & Automation service?",
        answer: "This covers predictive models, computer vision, and NLP built for a specific analytical outcome. AI Agents & Automation covers autonomous, task-executing agents and workflow automation.",
      },
      {
        question: "How do you validate that a new model version is actually better?",
        answer: "A/B testing infrastructure routes a portion of real traffic to the new model and compares outcomes against the current version before a full rollout.",
      },
    ],
    seo: {
      metaTitle: "AI & Machine Learning Development Services | Staller Stack",
      metaDescription:
        "Production-grade AI and machine learning development — MLOps pipelines, cost-optimized inference, and drift monitoring built for models that hold up at scale.",
      keywords: [
        "AI development services",
        "machine learning development",
        "MLOps pipeline development",
        "production ML systems",
        "model deployment services",
        "AI infrastructure development",
      ],
    },
  },
  {
    slug: "ai-agents-automation",
    name: "AI Agents & Automation",
    description: "Teams automating workflows with autonomous agents instead of static scripts or manual review.",
    icon: "automation",
    challenges: [
      "Agents that hallucinate or take unintended actions in production",
      "Integrating agents with existing internal tools and legacy APIs",
      "Proving ROI and safety before expanding an agent's scope of authority",
    ],
    solutions: [
      "Fine-tuned or RAG-grounded agents scoped to well-defined, auditable tasks",
      "Tool-calling integrations that connect agents to your existing systems",
      "Evaluation harnesses and human-approval checkpoints for high-risk actions",
      "Phased rollout from human-in-the-loop to increasing autonomy as trust builds",
    ],
    relatedServiceSlugs: ["ai-agent-model-training", "ai-ml-solutions", "software-development"],
    theme: { accent: "cyan", visual: "orbit" },
    overview:
      "The gap between a slick agent demo and a production system your team actually trusts is where most automation projects stall. We build AI agents scoped to specific, auditable tasks — grounded in your own data, wired into the tools you already use, and rolled out with the human checkpoints needed to earn trust before autonomy expands. The goal isn't a chatbot for its own sake; it's fewer manual hours and measurably better throughput on the workflows that are actually costing you time.",
    stats: [
      { label: "Avg. Manual Hours Reduced", value: "35%+" },
      { label: "Typical Engagement", value: "6-12 wks" },
      { label: "Agents Deployed", value: "20+" },
      { label: "Rollout Model", value: "Human-in-the-Loop" },
    ],
    problemsSolved: [
      {
        challenge: "Agents that hallucinate or take unintended actions once they're live in production.",
        solution:
          "RAG-grounded agents scoped to well-defined, auditable tasks, with guardrails that constrain what actions they're able to take.",
      },
      {
        challenge: "Integrating agents with existing internal tools, legacy APIs, and approval workflows.",
        solution:
          "Tool-calling integrations built directly against your existing systems, so agents act inside your current workflow instead of a parallel one.",
      },
      {
        challenge: "Proving ROI and safety before expanding an agent's scope or level of autonomy.",
        solution:
          "Evaluation harnesses and human-approval checkpoints on higher-risk actions, so trust — and autonomy — builds on measured results.",
      },
      {
        challenge: "Leadership buy-in stalls without a clear, low-risk starting point.",
        solution:
          "A phased rollout that starts human-in-the-loop and expands autonomy only as accuracy and safety metrics prove it out.",
      },
    ],
    faqs: [
      {
        question: "How do you stop an agent from taking the wrong action?",
        answer:
          "Every agent is scoped to a specific, auditable task with defined tool access, and higher-risk actions route through a human-approval checkpoint until accuracy is proven.",
      },
      {
        question: "Can an agent work with our internal tools, not just public APIs?",
        answer:
          "Yes — we build tool-calling integrations directly against your internal systems, including legacy APIs that weren't designed with AI agents in mind.",
      },
      {
        question: "How do we measure whether an agent is actually working?",
        answer:
          "We define evaluation metrics — accuracy, time saved, error rate — before deployment, and instrument the agent to report against them continuously.",
      },
      {
        question: "What's the difference between this and your AI & ML Solutions service?",
        answer:
          "AI Agents & Automation covers autonomous, task-executing agents and workflow automation. AI & ML Solutions covers predictive models, computer vision, and NLP built for a specific analytical outcome.",
      },
    ],
    seo: {
      metaTitle: "AI Agent Development & Workflow Automation | Staller Stack",
      metaDescription:
        "Production-grade AI agents for workflow automation — RAG-grounded, tool-integrated, and rolled out with the guardrails it takes to earn trust and scale autonomy.",
      keywords: [
        "AI agent development",
        "workflow automation",
        "RAG development",
        "AI automation services",
        "autonomous agents",
        "LLM agent integration",
      ],
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Patient care platforms and secure digital health workflows.",
    icon: "healthcare",
    challenges: [
      "Meeting HIPAA and regional data-privacy requirements without slowing down releases",
      "Legacy EHR systems that don't talk to newer patient-facing tools",
      "Protecting sensitive patient data across a growing number of connected devices",
    ],
    solutions: [
      "HIPAA-aligned cloud infrastructure with encrypted data at rest and in transit",
      "Patient portals and telehealth apps built for accessibility and reliability",
      "EHR integration layers (HL7/FHIR-compatible APIs) that connect old and new systems",
      "AI-assisted triage and documentation tools that reduce clinician workload",
    ],
    relatedServiceSlugs: ["security-compliance", "cloud-devops", "ai-ml-solutions", "web-development"],
    theme: { accent: "teal", visual: "pulse" },
    overview:
      "Healthcare software carries a different weight than most categories — the systems you ship touch patient data, clinical workflows, and outcomes that matter. We build HIPAA-aligned platforms for care teams and patients alike: telehealth apps, patient portals, and the EHR integration layers that let new tools talk to the systems your organization already depends on. Compliance isn't a checklist we run at the end — it's designed into the architecture from the first sprint.",
    stats: [
      { label: "HIPAA-Aligned Builds", value: "100%" },
      { label: "Typical Engagement", value: "10-18 wks" },
      { label: "HL7/FHIR Integrations Shipped", value: "15+" },
      { label: "Encryption Coverage", value: "100%" },
    ],
    problemsSolved: [
      {
        challenge: "Meeting HIPAA and regional data-privacy requirements without slowing every release to a crawl.",
        solution:
          "HIPAA-aligned cloud infrastructure with encryption at rest and in transit, and access controls designed to pass audit without becoming a release bottleneck.",
      },
      {
        challenge: "Legacy EHR systems that don't talk to newer patient-facing tools.",
        solution:
          "HL7/FHIR-compatible integration layers that let modern portals and apps exchange data with the EHR systems already in place.",
      },
      {
        challenge: "Protecting sensitive patient data as the number of connected devices and integrations keeps growing.",
        solution:
          "Zero-trust access architecture and audit logging across every connected device and integration point, not just the core application.",
      },
      {
        challenge: "Clinician teams stretched thin by manual documentation and triage work.",
        solution:
          "AI-assisted triage and documentation tools that reduce administrative load without removing a clinician from the decision loop.",
      },
    ],
    faqs: [
      {
        question: "Do you build to HIPAA compliance from the start, or add it later?",
        answer:
          "From the start. Encryption, access controls, and audit logging are part of the initial architecture, not a pass we do before launch.",
      },
      {
        question: "Can you integrate with our existing EHR system?",
        answer:
          "In most cases, yes — we build HL7/FHIR-compatible integration layers designed to work with major EHR platforms without requiring you to replace your core system.",
      },
      {
        question: "Who owns the patient data once the platform is built?",
        answer:
          "You do. We build the infrastructure and access controls; the data, and full control over it, stays with your organization.",
      },
      {
        question: "Do you sign a BAA (Business Associate Agreement)?",
        answer: "Yes — a signed BAA is standard for any healthcare engagement involving PHI.",
      },
    ],
    seo: {
      metaTitle: "Healthcare Software Development | HIPAA-Compliant Platforms | Staller Stack",
      metaDescription:
        "HIPAA-aligned healthcare software development — patient portals, telehealth platforms, and HL7/FHIR EHR integrations built for compliance and scale.",
      keywords: [
        "healthcare software development",
        "HIPAA compliant software",
        "telehealth app development",
        "EHR integration",
        "HL7 FHIR development",
        "patient portal development",
      ],
    },
  },
  {
    slug: "fintech-banking",
    name: "Fintech & Banking",
    description: "Secure transaction systems, lending, and payment infrastructure.",
    icon: "fintech",
    challenges: [
      "Staying compliant with PCI-DSS and evolving financial regulations",
      "Detecting fraud in real time without adding friction for legitimate users",
      "Modernizing core banking systems without disrupting live transactions",
    ],
    solutions: [
      "PCI-DSS compliant application architecture from day one",
      "Real-time fraud detection using ensemble ML models",
      "Zero-trust security design for transaction and account-management systems",
      "Cloud-native migration paths for legacy core banking infrastructure",
    ],
    relatedServiceSlugs: ["security-compliance", "ai-ml-solutions", "cloud-devops", "web-development"],
    theme: { accent: "indigo", visual: "mesh" },
    overview:
      "Financial products live or die on trust — a single security incident or a slow, confusing checkout can undo years of brand-building. We build banking, lending, and payments platforms engineered around that reality from day one: PCI-DSS-aligned architecture, real-time fraud detection, and infrastructure that treats every transaction as something that has to work correctly, every time. Whether you're modernizing a legacy core banking system or shipping a new fintech product, we bring the security posture and delivery discipline the category demands.",
    stats: [
      { label: "PCI-DSS Aligned Builds", value: "100%" },
      { label: "Typical Engagement", value: "10-16 wks" },
      { label: "Fraud Model Precision", value: "94%+" },
      { label: "Uptime SLA Target", value: "99.9%" },
    ],
    problemsSolved: [
      {
        challenge: "Staying compliant with PCI-DSS and evolving financial regulations while still shipping on a normal release cadence.",
        solution:
          "PCI-DSS-aligned application architecture and secure coding practices built in from day one, not retrofitted before an audit.",
      },
      {
        challenge: "Detecting fraud in real time without adding friction that drives legitimate customers away.",
        solution:
          "Real-time fraud detection using ensemble ML models tuned to your actual transaction patterns and false-positive tolerance.",
      },
      {
        challenge: "Modernizing core banking systems without risking downtime on live, in-flight transactions.",
        solution:
          "Cloud-native migration paths that move core banking infrastructure incrementally, with a rollback plan at every stage.",
      },
      {
        challenge: "Proving security and reliability to regulators, partners, and increasingly security-conscious customers.",
        solution:
          "Zero-trust security design for every transaction and account-management surface, documented for audit from the start.",
      },
    ],
    faqs: [
      {
        question: "Can you help us become PCI-DSS compliant, or do we need a separate compliance vendor?",
        answer:
          "We build PCI-DSS-aligned architecture directly into the application — secure data handling, tokenization, and access controls — and can work alongside your compliance vendor or QSA for the formal audit.",
      },
      {
        question: "How do you handle fraud detection without slowing down legitimate transactions?",
        answer:
          "We tune fraud models against your actual transaction data and risk tolerance, so friction only appears where risk genuinely warrants it.",
      },
      {
        question: "We're still running a legacy core banking system — can you work with that?",
        answer:
          "Yes. Most fintech engagements start with an integration layer around the legacy core, then migrate functionality incrementally rather than a risky rip-and-replace.",
      },
      {
        question: "What compliance frameworks do you build for besides PCI-DSS?",
        answer:
          "Depending on your market, we design for SOC 2, GDPR, and relevant regional banking regulations alongside PCI-DSS — tell us your jurisdiction and licensing and we'll scope accordingly.",
      },
    ],
    seo: {
      metaTitle: "Fintech & Banking Software Development | Staller Stack",
      metaDescription:
        "PCI-DSS-aligned fintech and banking software — real-time fraud detection, secure payments infrastructure, and core banking modernization built for production.",
      keywords: [
        "fintech software development",
        "banking software development",
        "PCI-DSS compliant development",
        "fraud detection system",
        "payment infrastructure development",
        "core banking modernization",
      ],
    },
  },
  {
    slug: "ecommerce-retail",
    name: "E-Commerce & Retail",
    description: "Storefronts, inventory, and personalization engines that convert.",
    icon: "ecommerce",
    challenges: [
      "Handling traffic spikes during sales events without downtime",
      "Personalizing the shopping experience at scale",
      "Keeping inventory in sync across web, app, and in-store channels",
    ],
    solutions: [
      "Auto-scaling cloud infrastructure built for peak-season traffic",
      "AI-driven product recommendation and search engines",
      "Headless commerce storefronts for fast, flexible frontends",
      "Real-time inventory sync APIs across every sales channel",
    ],
    relatedServiceSlugs: ["web-development", "mobile-app-development", "cloud-devops", "ai-ml-solutions"],
    theme: { accent: "amber", visual: "wave" },
    overview:
      "Retail technology has to survive the moments that matter most — a flash sale, a holiday traffic spike, a viral product moment — without buckling. We build storefronts, personalization engines, and inventory systems designed for that reality: auto-scaling infrastructure that holds up under peak load, AI-driven recommendations that lift conversion, and inventory sync that keeps web, app, and in-store channels telling the same story.",
    stats: [
      { label: "Peak Traffic Handled", value: "10x+" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "Avg. Conversion Lift", value: "15%+" },
      { label: "Channels Synced", value: "Web, App & In-Store" },
    ],
    problemsSolved: [
      {
        challenge: "Handling traffic spikes during sales events without downtime or checkout failures.",
        solution:
          "Auto-scaling cloud infrastructure load-tested specifically for peak-season traffic, not just average-day load.",
      },
      {
        challenge: "Personalizing the shopping experience at scale without a small team drowning in manual merchandising.",
        solution:
          "AI-driven product recommendation and search engines that personalize automatically as catalog and traffic grow.",
      },
      {
        challenge: "Keeping inventory in sync across web, app, and in-store channels.",
        solution: "Real-time inventory sync APIs that keep every sales channel accurate, down to the individual SKU.",
      },
      {
        challenge: "A frontend that can't move as fast as merchandising and marketing need it to.",
        solution:
          "Headless commerce storefronts that decouple the frontend from the commerce backend, so campaigns ship without a full deploy cycle.",
      },
    ],
    faqs: [
      {
        question: "Can you handle a Black Friday-level traffic spike?",
        answer:
          "Yes — we load-test specifically for peak-season traffic, not just average-day load, and design auto-scaling infrastructure around your actual historical spike data.",
      },
      {
        question: "Do we need to rebuild our entire storefront, or can you work with our existing platform?",
        answer:
          "Depends on the platform and goals — sometimes it's a headless frontend on top of your existing commerce backend, sometimes a fuller rebuild. We'll assess and recommend the lower-risk path.",
      },
      {
        question: "How does the recommendation engine get better over time?",
        answer:
          "It's trained continuously on your actual behavioral and purchase data, with retraining pipelines built in so recommendations improve as you gather more signal.",
      },
      {
        question: "Can inventory stay in sync if we sell through multiple channels and marketplaces?",
        answer: "Yes — the sync APIs are built to keep web, app, in-store, and marketplace listings consistent in real time.",
      },
    ],
    seo: {
      metaTitle: "E-Commerce & Retail Software Development | Staller Stack",
      metaDescription:
        "E-commerce development built for peak load — auto-scaling storefronts, AI product recommendations, and real-time inventory sync across every channel.",
      keywords: [
        "ecommerce development",
        "retail software development",
        "headless commerce development",
        "ecommerce personalization",
        "inventory sync software",
        "auto-scaling ecommerce infrastructure",
      ],
    },
  },
  {
    slug: "education",
    name: "Education",
    description: "Online learning platforms and student management systems.",
    icon: "education",
    challenges: [
      "Keeping students engaged in remote and hybrid learning environments",
      "Protecting student data under FERPA and similar regulations",
      "Scaling video and live-session infrastructure during peak class hours",
    ],
    solutions: [
      "Interactive learning platforms with progress tracking and analytics",
      "Secure single sign-on and role-based access for student data",
      "Scalable video and livestream infrastructure for classes at any size",
      "LMS integrations that connect existing tools with new experiences",
    ],
    relatedServiceSlugs: ["web-development", "cloud-devops", "security-compliance"],
    theme: { accent: "blue", visual: "wave" },
    overview:
      "Keeping students engaged and their data protected are usually pulling in opposite directions — more engagement tools mean more surfaces to secure. We build learning platforms that handle both: interactive, analytics-backed experiences that hold attention in remote and hybrid settings, secured under FERPA-aligned access controls, running on video infrastructure that doesn't buckle when every class starts at the same hour.",
    stats: [
      { label: "FERPA-Aligned Builds", value: "100%" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "Concurrent Live Sessions", value: "1,000+" },
      { label: "LMS Integrations Shipped", value: "10+" },
    ],
    problemsSolved: [
      {
        challenge: "Keeping students engaged in remote and hybrid learning environments.",
        solution:
          "Interactive learning platforms with progress tracking and analytics that give instructors a real signal on who's falling behind.",
      },
      {
        challenge: "Protecting student data under FERPA and similar regional regulations.",
        solution: "Secure single sign-on and role-based access control designed around FERPA's data-handling requirements from the start.",
      },
      {
        challenge: "Video and live-session infrastructure that buckles during peak class hours.",
        solution: "Scalable video and livestream infrastructure built to hold up when every class in the district starts within the same hour.",
      },
      {
        challenge: "Existing tools and LMS platforms that don't share data with new experiences you want to build.",
        solution: "LMS integrations that connect the tools you already run with new student- and instructor-facing experiences.",
      },
    ],
    faqs: [
      {
        question: "Can this integrate with the LMS we already use?",
        answer:
          "In most cases yes — we build integrations against major LMS platforms rather than requiring your institution to migrate.",
      },
      {
        question: "How do you handle FERPA compliance for student data?",
        answer:
          "Role-based access control, secure SSO, and audit logging are built into the architecture, aligned to FERPA's data-handling requirements.",
      },
      {
        question: "Can the platform handle live sessions for a large number of concurrent students?",
        answer: "Yes — the video and livestream infrastructure is built to scale to peak class-hour concurrency, not just average load.",
      },
      {
        question: "Do you build for K-12, higher ed, or both?",
        answer: "Both — the compliance and scale requirements differ somewhat, and we scope the architecture to your specific institution type.",
      },
    ],
    seo: {
      metaTitle: "Education Software Development | LMS & E-Learning Platforms | Staller Stack",
      metaDescription:
        "FERPA-aligned education software development — interactive learning platforms, scalable livestream infrastructure, and LMS integrations built for scale.",
      keywords: [
        "education software development",
        "e-learning platform development",
        "LMS integration",
        "FERPA compliant software",
        "online learning platform",
        "edtech development",
      ],
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Listing platforms, virtual tours, and property management tools.",
    icon: "realestate",
    challenges: [
      "Delivering high-resolution media and virtual tours without slow load times",
      "Managing leads across multiple listing sources and channels",
      "Keeping listing data in sync across portals and internal systems",
    ],
    solutions: [
      "3D and virtual-tour platforms optimized for fast global delivery",
      "CRM integrations that centralize lead capture and follow-up",
      "CDN-backed media pipelines for photos, video, and floor plans",
      "Listing-sync APIs that keep every channel accurate in real time",
    ],
    relatedServiceSlugs: ["web-development", "crm-custom-software", "cloud-devops"],
    theme: { accent: "mint", visual: "orbit" },
    overview:
      "A listing is only as good as how fast it loads and how easy it is to act on. We build the platforms real estate teams run on — 3D and virtual-tour experiences that don't stall on a slow connection, CRM integrations that stop leads from falling through the cracks, and listing-sync APIs that keep every portal and internal system telling the same story.",
    stats: [
      { label: "Media Load Time", value: "<2 sec" },
      { label: "Typical Engagement", value: "6-12 wks" },
      { label: "Listing Sources Synced", value: "Unlimited" },
      { label: "Lead Response Time Cut", value: "40%+" },
    ],
    problemsSolved: [
      {
        challenge: "Delivering high-resolution media and virtual tours without slow load times that lose the buyer's attention.",
        solution:
          "3D and virtual-tour platforms built on CDN-backed media pipelines, optimized for fast global delivery on any connection.",
      },
      {
        challenge: "Managing leads that come in scattered across multiple listing sources and marketing channels.",
        solution: "CRM integrations that centralize lead capture and follow-up into a single pipeline your agents actually use.",
      },
      {
        challenge: "Keeping listing data accurate across portals, your own site, and internal systems.",
        solution: "Listing-sync APIs that push updates everywhere at once, so a price or status change never goes stale on a third-party portal.",
      },
      {
        challenge: "Photos, video, and floor plans that bloat page weight and hurt conversion.",
        solution: "CDN-backed media pipelines purpose-built for real estate's mix of large images, video walkthroughs, and floor plans.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with MLS and third-party listing portals?",
        answer:
          "Yes — listing-sync APIs are built to push updates to MLS feeds and major portals so your data stays consistent everywhere it appears.",
      },
      {
        question: "Do virtual tours require special hardware to create?",
        answer:
          "No special hardware requirement on our end — we build the platform to ingest whatever capture method you use, from 360° cameras to drone footage.",
      },
      {
        question: "Can this connect to the CRM we already use?",
        answer: "In most cases yes — we build integrations against your existing CRM rather than requiring a switch.",
      },
      {
        question: "How do you keep media-heavy pages fast?",
        answer: "CDN delivery, image optimization, and lazy-loading are built in by default, not added as an afterthought.",
      },
    ],
    seo: {
      metaTitle: "Real Estate Software Development | Listing & CRM Platforms | Staller Stack",
      metaDescription:
        "Real estate software development — 3D virtual tours, CRM lead integrations, and listing-sync APIs built for fast, accurate, multi-channel delivery.",
      keywords: [
        "real estate software development",
        "property listing platform",
        "virtual tour development",
        "real estate CRM integration",
        "listing sync API",
        "real estate technology",
      ],
    },
  },
  {
    slug: "logistics-supply-chain",
    name: "Logistics & Supply Chain",
    description: "Shipment tracking, fleet management, and route optimization.",
    icon: "logistics",
    challenges: [
      "Getting real-time visibility into shipments and fleet status",
      "Optimizing routes as fuel costs and delivery windows tighten",
      "Modernizing legacy warehouse and transport management systems",
    ],
    solutions: [
      "IoT-integrated dashboards for live shipment and fleet tracking",
      "ML-based route optimization that adapts to traffic and demand",
      "Cloud data pipelines connecting warehouses, carriers, and customers",
      "Mobile driver apps for proof-of-delivery and real-time updates",
    ],
    relatedServiceSlugs: ["ai-ml-solutions", "cloud-devops", "mobile-app-development"],
    theme: { accent: "blue", visual: "pulse" },
    overview:
      "Supply chains run on visibility — the moment you lose track of a shipment or a vehicle, costs start compounding. We build the tracking dashboards, route-optimization models, and driver-facing apps that give logistics teams real-time visibility into fleets and freight, plus the cloud data pipelines that connect warehouses, carriers, and customers into a single, current picture instead of a dozen disconnected spreadsheets.",
    stats: [
      { label: "Avg. Route Efficiency Gain", value: "18%+" },
      { label: "Typical Engagement", value: "8-16 wks" },
      { label: "Live Tracking Latency", value: "<5 sec" },
      { label: "Systems Connected", value: "Warehouse to Customer" },
    ],
    problemsSolved: [
      {
        challenge: "Getting real-time visibility into shipments and fleet status instead of relying on manual check-ins.",
        solution:
          "IoT-integrated dashboards that surface live shipment and fleet status without a dispatcher chasing phone updates.",
      },
      {
        challenge: "Optimizing routes as fuel costs and delivery windows keep tightening.",
        solution:
          "ML-based route optimization that adapts to live traffic, demand, and delivery-window constraints, not a static route plan.",
      },
      {
        challenge: "Legacy warehouse and transport management systems that don't share data with anything newer.",
        solution:
          "Cloud data pipelines that connect warehouses, carriers, and customers into one current picture, without ripping out the legacy WMS/TMS.",
      },
      {
        challenge: "Drivers and field teams working off paper or disconnected apps for proof-of-delivery.",
        solution:
          "Mobile driver apps for proof-of-delivery and real-time status updates that flow straight back into the tracking dashboard.",
      },
    ],
    faqs: [
      {
        question: "Can this integrate with our existing WMS or TMS?",
        answer:
          "Yes — we typically build a cloud data pipeline around the existing warehouse or transport management system rather than replacing it outright.",
      },
      {
        question: "How real-time is 'real-time' tracking, in practice?",
        answer:
          "IoT-integrated dashboards typically update in under 5 seconds from device to dashboard, depending on connectivity at the source.",
      },
      {
        question: "Do drivers need special hardware for the mobile app?",
        answer:
          "No — the driver app is designed to run on standard smartphones; no proprietary hardware required unless you already have GPS/IoT tracking devices in the fleet.",
      },
      {
        question: "How does route optimization account for real-world disruptions like traffic or weather?",
        answer:
          "The model ingests live traffic and demand signals, not just static distances, so routes adjust as conditions change through the day.",
      },
    ],
    seo: {
      metaTitle: "Logistics & Supply Chain Software Development | Staller Stack",
      metaDescription:
        "Real-time fleet tracking, ML-based route optimization, and warehouse-to-customer data pipelines built for logistics and supply chain teams.",
      keywords: [
        "logistics software development",
        "supply chain software",
        "fleet tracking software",
        "route optimization software",
        "warehouse management integration",
        "IoT logistics dashboard",
      ],
    },
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Production tracking and process automation on the shop floor.",
    icon: "manufacturing",
    challenges: [
      "Getting real-time visibility into shop-floor production and downtime",
      "Predicting equipment failures before they halt production",
      "Connecting legacy SCADA/PLC systems to modern reporting tools",
    ],
    solutions: [
      "IIoT dashboards for live production and downtime tracking",
      "Predictive maintenance models built on sensor and machine data",
      "Secure OT/IT network segmentation for shop-floor systems",
      "Production tracking systems that integrate with existing equipment",
    ],
    relatedServiceSlugs: ["ai-ml-solutions", "cloud-devops", "security-compliance"],
    theme: { accent: "cyan", visual: "mesh" },
    overview:
      "Downtime on the shop floor is one of the most expensive problems in manufacturing, and most of it is preventable with earlier visibility. We build IIoT dashboards and predictive maintenance models that catch equipment issues before they halt a line, plus the secure integration layers that connect legacy SCADA/PLC systems to modern reporting — without requiring a rip-and-replace of equipment that still works.",
    stats: [
      { label: "Avg. Unplanned Downtime Cut", value: "25%+" },
      { label: "Typical Engagement", value: "10-16 wks" },
      { label: "Sensor Data Points Ingested", value: "1M+/day" },
      { label: "Legacy Systems Integrated", value: "SCADA/PLC" },
    ],
    problemsSolved: [
      {
        challenge: "Getting real-time visibility into shop-floor production and downtime.",
        solution: "IIoT dashboards that surface live production and downtime data without a supervisor walking the floor to check status.",
      },
      {
        challenge: "Predicting equipment failures before they halt production.",
        solution: "Predictive maintenance models built on sensor and machine data that flag degradation before it becomes a failure.",
      },
      {
        challenge: "Connecting legacy SCADA/PLC systems to modern reporting tools without ripping them out.",
        solution: "Secure OT/IT network segmentation and integration layers that let legacy equipment feed modern dashboards safely.",
      },
      {
        challenge: "Production tracking that doesn't reflect what's actually happening on the equipment in use.",
        solution: "Production tracking systems built to integrate directly with the equipment already on your line, not a generic overlay.",
      },
    ],
    faqs: [
      {
        question: "Can this work with our existing SCADA/PLC systems?",
        answer: "Yes — most manufacturing engagements build an integration and segmentation layer around the existing OT systems rather than replacing them.",
      },
      {
        question: "How accurate are the predictive maintenance models?",
        answer: "Accuracy depends on sensor coverage and historical failure data — we assess what's available before committing to a target, and improve the model as more data accumulates.",
      },
      {
        question: "Does connecting OT systems to IT infrastructure introduce security risk?",
        answer: "It can, if done carelessly. We design OT/IT network segmentation specifically to prevent shop-floor systems from becoming an attack surface.",
      },
      {
        question: "Do we need new sensors, or can you work with what's already installed?",
        answer: "We start by assessing existing sensor and equipment data — new sensors are only recommended where there's a real gap in visibility.",
      },
    ],
    seo: {
      metaTitle: "Manufacturing Software Development | IIoT & Predictive Maintenance | Staller Stack",
      metaDescription:
        "IIoT dashboards, predictive maintenance models, and secure OT/IT integration for manufacturing — built to reduce downtime without replacing existing equipment.",
      keywords: [
        "manufacturing software development",
        "IIoT dashboard development",
        "predictive maintenance software",
        "SCADA integration",
        "OT IT integration",
        "smart manufacturing software",
      ],
    },
  },
  {
    slug: "travel-hospitality",
    name: "Travel & Hospitality",
    description: "Booking engines and guest experience platforms that scale.",
    icon: "travel",
    challenges: [
      "Handling booking spikes around peak travel seasons",
      "Managing distribution across multiple channels and OTAs",
      "Processing payments securely across currencies and regions",
    ],
    solutions: [
      "Scalable booking engines built for seasonal demand swings",
      "Channel-manager integrations that keep availability accurate everywhere",
      "AI-personalized guest experiences from booking through checkout",
      "PCI-compliant payment flows for multi-currency transactions",
    ],
    relatedServiceSlugs: ["web-development", "cloud-devops", "security-compliance"],
    theme: { accent: "mint", visual: "wave" },
    overview:
      "Travel demand is inherently seasonal and spiky, and a booking engine that only works on an average Tuesday isn't good enough. We build booking platforms sized for peak-season swings, channel-manager integrations that keep availability accurate across every OTA, and guest experiences personalized from the first search through checkout — with payment flows built to handle multiple currencies and regions correctly.",
    stats: [
      { label: "Peak Booking Load Handled", value: "8x+" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "OTA Channels Synced", value: "10+" },
      { label: "Currencies Supported", value: "Multi-Currency" },
    ],
    problemsSolved: [
      {
        challenge: "Handling booking spikes around peak travel seasons without the engine falling over.",
        solution: "Scalable booking engines built and load-tested specifically for seasonal demand swings, not steady-state traffic.",
      },
      {
        challenge: "Managing distribution and availability across multiple channels and OTAs.",
        solution: "Channel-manager integrations that keep availability and pricing accurate everywhere your inventory is listed.",
      },
      {
        challenge: "Generic booking flows that don't reflect guest preferences or booking history.",
        solution: "AI-personalized guest experiences that tailor recommendations from booking through checkout, not just a static offer page.",
      },
      {
        challenge: "Processing payments securely across currencies and regions without adding checkout friction.",
        solution: "PCI-compliant, multi-currency payment flows designed to feel native regardless of where the guest is booking from.",
      },
    ],
    faqs: [
      {
        question: "Can you integrate with the channel manager and OTAs we already use?",
        answer: "Yes — channel-manager integrations are built against the OTAs and distribution systems you're already listed on.",
      },
      {
        question: "How do you handle traffic during major booking spikes like holiday sales?",
        answer: "We load-test specifically against your historical peak data and design auto-scaling infrastructure to match, not just average-day traffic.",
      },
      {
        question: "Can guests pay in their local currency?",
        answer: "Yes — the payment flow is built PCI-compliant and multi-currency from the start, not added as a regional patch later.",
      },
      {
        question: "Do you build for hotels, vacation rentals, or both?",
        answer: "Both — the booking logic differs (inventory-based vs. calendar-based), and we scope the platform to your specific model.",
      },
    ],
    seo: {
      metaTitle: "Travel & Hospitality Software Development | Booking Engines | Staller Stack",
      metaDescription:
        "Scalable booking engine development for travel and hospitality — channel-manager integrations, AI-personalized guest experiences, and multi-currency payments.",
      keywords: [
        "travel software development",
        "hospitality software development",
        "booking engine development",
        "channel manager integration",
        "OTA integration",
        "hotel booking software",
      ],
    },
  },
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    description: "MVP builds and product validation for fast-moving teams.",
    icon: "saas",
    challenges: [
      "Getting from idea to a testable MVP before runway runs out",
      "Scaling infrastructure cost-effectively as usage grows unpredictably",
      "Reaching an investor- and enterprise-ready security posture early",
    ],
    solutions: [
      "Rapid MVP builds scoped around your riskiest assumptions first",
      "Usage-based, auto-scaling cloud architecture that grows with you",
      "SOC 2-ready security baselines built in from the first sprint",
      "Embedded analytics and AI features that become product differentiators",
    ],
    relatedServiceSlugs: ["web-development", "cloud-devops", "ai-ml-solutions", "software-development"],
    theme: { accent: "teal", visual: "orbit" },
    overview:
      "Early-stage teams don't have runway to spend on the wrong build. We scope MVPs around your riskiest assumption first, ship fast enough to get real user signal before the budget runs out, and architect for the scale you'll actually hit — not the scale you're hoping for on a pitch deck. When you're ready to sell into the enterprise, the security posture is already there.",
    stats: [
      { label: "Avg. Time to MVP", value: "6-10 wks" },
      { label: "Typical Engagement", value: "6-10 wks" },
      { label: "MVPs Shipped", value: "25+" },
      { label: "Security Baseline", value: "SOC 2-Ready" },
    ],
    problemsSolved: [
      {
        challenge: "Getting from idea to a testable MVP before runway runs out.",
        solution: "Rapid MVP builds scoped around your riskiest assumptions first, so you learn what matters before spending on what doesn't.",
      },
      {
        challenge: "Scaling infrastructure cost-effectively as usage grows unpredictably.",
        solution: "Usage-based, auto-scaling cloud architecture that grows with actual traffic instead of over-provisioning from day one.",
      },
      {
        challenge: "Reaching an investor- and enterprise-ready security posture early, before it becomes a deal blocker.",
        solution: "SOC 2-ready security baselines built in from the first sprint, not bolted on during your first enterprise sales cycle.",
      },
      {
        challenge: "Needing a product differentiator beyond feature parity with competitors.",
        solution: "Embedded analytics and AI features scoped as real product differentiators, not tacked-on gimmicks.",
      },
    ],
    faqs: [
      {
        question: "How fast can you actually ship an MVP?",
        answer: "Most MVPs scoped around a single core assumption ship in 6-10 weeks — faster if the scope is tightly constrained.",
      },
      {
        question: "We don't have a technical co-founder — can you be our build partner?",
        answer: "Yes — we regularly work as the technical execution partner for non-technical founding teams, from architecture decisions through delivery.",
      },
      {
        question: "What does 'SOC 2-ready' actually mean at MVP stage?",
        answer:
          "It means the access controls, logging, and infrastructure choices we make from day one won't need to be re-architected when you start your formal SOC 2 audit later.",
      },
      {
        question: "Can you help us prepare for a technical due-diligence review before a funding round?",
        answer: "Yes — we can review and document the architecture ahead of investor technical diligence.",
      },
    ],
    seo: {
      metaTitle: "SaaS & Startup MVP Development | Staller Stack",
      metaDescription:
        "Rapid MVP development for SaaS and startups — scoped around your riskiest assumptions, built on auto-scaling infrastructure with SOC 2-ready security baked in.",
      keywords: [
        "SaaS MVP development",
        "startup software development",
        "MVP development agency",
        "SOC 2 ready architecture",
        "startup technical partner",
        "SaaS product development",
      ],
    },
  },
  {
    slug: "insurance",
    name: "Insurance",
    description: "Claims automation, underwriting platforms, and digital-first policy management.",
    icon: "insurance",
    challenges: [
      "Manual claims processing that slows payouts and frustrates policyholders",
      "Underwriting models that don't reflect real-time risk signals",
      "Legacy policy administration systems that resist integration with modern tools",
    ],
    solutions: [
      "AI-assisted claims triage and fraud detection that speeds up legitimate payouts",
      "ML-based underwriting models trained on real risk and claims data",
      "API layers that connect legacy policy systems to modern customer portals",
      "Self-service policyholder portals for quotes, claims, and renewals",
    ],
    relatedServiceSlugs: ["ai-ml-solutions", "software-development", "security-compliance"],
    theme: { accent: "indigo", visual: "orbit" },
    overview:
      "Every manual step in a claims process is a policyholder waiting longer than they should. We build the AI-assisted triage tools, real-time underwriting models, and self-service portals that shrink that gap — plus the API layers that let legacy policy administration systems talk to modern customer-facing experiences instead of getting replaced wholesale.",
    stats: [
      { label: "Avg. Claims Processing Time Cut", value: "30%+" },
      { label: "Typical Engagement", value: "10-16 wks" },
      { label: "Fraud Flags Auto-Triaged", value: "90%+" },
      { label: "Legacy Systems Integrated", value: "Policy Admin" },
    ],
    problemsSolved: [
      {
        challenge: "Manual claims processing that slows payouts and frustrates policyholders.",
        solution: "AI-assisted claims triage and fraud detection that speeds up legitimate payouts while flagging the ones that need review.",
      },
      {
        challenge: "Underwriting models that don't reflect real-time risk signals.",
        solution: "ML-based underwriting models trained on real risk and claims data, not static actuarial tables alone.",
      },
      {
        challenge: "Legacy policy administration systems that resist integration with modern tools.",
        solution: "API layers that connect legacy policy systems to modern customer portals without a full core-system replacement.",
      },
      {
        challenge: "Policyholders forced to call in for quotes, claims status, or renewals.",
        solution: "Self-service policyholder portals for quotes, claims, and renewals that cut call-center volume and improve satisfaction.",
      },
    ],
    faqs: [
      {
        question: "Can this integrate with our existing policy administration system?",
        answer: "Yes — we typically build an API layer around the existing PAS rather than requiring a core-system replacement.",
      },
      {
        question: "How does AI-assisted claims triage reduce fraud without delaying legitimate claims?",
        answer: "The model flags anomalous patterns for review while routing clean, low-risk claims through an accelerated path — most legitimate claims move faster, not slower.",
      },
      {
        question: "What data do you need to build an underwriting model?",
        answer: "Historical policy, claims, and risk data — we assess what's available and identify gaps before committing to a model design.",
      },
      {
        question: "Do you build for P&C, life, or health insurance?",
        answer: "All three — the regulatory and data specifics differ, and we scope the architecture to your specific line of business.",
      },
    ],
    seo: {
      metaTitle: "Insurance Software Development | Claims & Underwriting Automation | Staller Stack",
      metaDescription:
        "AI-assisted claims triage, ML underwriting models, and legacy policy system integration built for insurance carriers and MGAs.",
      keywords: [
        "insurance software development",
        "claims automation software",
        "underwriting software development",
        "insurtech development",
        "policy administration integration",
        "insurance fraud detection",
      ],
    },
  },
  {
    slug: "legal-tech",
    name: "Legal Tech",
    description: "Document automation, case management, and AI-assisted research platforms for legal teams.",
    icon: "legal",
    challenges: [
      "Hours spent on manual document review and contract analysis",
      "Case and matter data scattered across disconnected tools",
      "Meeting strict confidentiality and data-handling requirements",
    ],
    solutions: [
      "AI-assisted contract review and clause extraction that cuts review time",
      "Centralized case management platforms with role-based access control",
      "Encrypted document workflows that meet client confidentiality standards",
      "Custom research and precedent-search tools built on your firm's own data",
    ],
    relatedServiceSlugs: ["ai-agent-model-training", "software-development", "security-compliance"],
    theme: { accent: "amber", visual: "mesh" },
    overview:
      "Billable hours spent on document review are hours not spent on the work that actually needs a lawyer's judgment. We build AI-assisted contract review, centralized case management, and precedent-search tools trained on your own firm's data — wrapped in encrypted workflows that meet the confidentiality standards clients expect from day one.",
    stats: [
      { label: "Avg. Review Time Cut", value: "40%+" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "Document Types Automated", value: "10+" },
      { label: "Data Handling", value: "Encrypted End-to-End" },
    ],
    problemsSolved: [
      {
        challenge: "Hours spent on manual document review and contract analysis.",
        solution: "AI-assisted contract review and clause extraction that cuts review time without removing attorney judgment from the process.",
      },
      {
        challenge: "Case and matter data scattered across disconnected tools and spreadsheets.",
        solution: "Centralized case management platforms with role-based access control that give the whole team one source of truth.",
      },
      {
        challenge: "Meeting strict confidentiality and data-handling requirements clients expect.",
        solution: "Encrypted document workflows built to meet client confidentiality standards from intake through archival.",
      },
      {
        challenge: "Research and precedent search that relies on generic tools instead of the firm's own institutional knowledge.",
        solution: "Custom research and precedent-search tools built on your firm's own case history and work product.",
      },
    ],
    faqs: [
      {
        question: "Does the AI contract review replace attorney review entirely?",
        answer: "No — it surfaces flagged clauses and extracts key terms to speed up review; final judgment stays with the attorney.",
      },
      {
        question: "How is client confidentiality protected?",
        answer: "Documents are handled through encrypted workflows with role-based access control, and we can scope infrastructure to meet specific client or jurisdictional requirements.",
      },
      {
        question: "Can the precedent-search tool work with our firm's existing document archive?",
        answer: "Yes — it's built to train on your own case history and work product rather than a generic public dataset.",
      },
      {
        question: "Can this integrate with the case management software we already use?",
        answer: "In most cases yes — we assess your existing tools and build integrations rather than requiring a full switch.",
      },
    ],
    seo: {
      metaTitle: "Legal Tech Software Development | AI Contract Review & Case Management | Staller Stack",
      metaDescription:
        "AI-assisted contract review, centralized case management, and encrypted document workflows built for law firms and legal teams.",
      keywords: [
        "legal tech software development",
        "AI contract review software",
        "case management software development",
        "legal document automation",
        "law firm technology",
        "legal research software",
      ],
    },
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    description: "Streaming platforms, content management, and audience engagement at scale.",
    icon: "media",
    challenges: [
      "Delivering high-quality video to a global audience without buffering",
      "Personalizing content recommendations as the catalog and audience grow",
      "Managing rights, licensing, and content metadata across platforms",
    ],
    solutions: [
      "CDN-backed streaming architecture built for global, low-latency delivery",
      "AI-driven recommendation engines that personalize content discovery",
      "Content management systems that keep metadata and rights data in sync",
      "Auto-scaling infrastructure that handles traffic spikes around major releases",
    ],
    relatedServiceSlugs: ["cloud-devops", "ai-ml-solutions", "web-development"],
    theme: { accent: "blue", visual: "mesh" },
    overview:
      "A single buffering moment during a big release is enough to send a viewer to a competitor's app. We build CDN-backed streaming architecture engineered for global, low-latency delivery, AI recommendation engines that keep audiences engaged as your catalog grows, and the rights and metadata systems that keep licensing straight across every platform you distribute on.",
    stats: [
      { label: "Global Streaming Latency", value: "<3 sec" },
      { label: "Typical Engagement", value: "10-16 wks" },
      { label: "Peak Concurrent Streams", value: "100K+" },
      { label: "Catalog Metadata Accuracy", value: "99%+" },
    ],
    problemsSolved: [
      {
        challenge: "Delivering high-quality video to a global audience without buffering.",
        solution: "CDN-backed streaming architecture built for global, low-latency delivery regardless of where the viewer is watching from.",
      },
      {
        challenge: "Personalizing content recommendations as the catalog and audience keep growing.",
        solution: "AI-driven recommendation engines that personalize content discovery automatically as your catalog scales.",
      },
      {
        challenge: "Managing rights, licensing, and content metadata consistently across platforms.",
        solution: "Content management systems that keep metadata and rights data in sync across every platform you distribute on.",
      },
      {
        challenge: "Traffic spikes around major releases that overwhelm standard infrastructure.",
        solution: "Auto-scaling infrastructure specifically load-tested for the traffic pattern of a major release, not steady-state viewing.",
      },
    ],
    faqs: [
      {
        question: "Can your streaming architecture handle a global audience, or just regional?",
        answer: "It's built CDN-backed specifically for global, low-latency delivery — regional-only is also supported if that's your actual audience.",
      },
      {
        question: "How does the recommendation engine handle a fast-growing catalog?",
        answer: "It's trained continuously on viewing behavior and retrains as new content and audience data come in, so recommendations don't go stale.",
      },
      {
        question: "Can this manage complex rights and licensing windows across regions?",
        answer: "Yes — the CMS is built to track rights and licensing metadata per region and platform, not just a single global flag.",
      },
      {
        question: "How do you prepare infrastructure for a major release traffic spike?",
        answer: "We load-test against projected release-day traffic specifically, and design auto-scaling to match that pattern rather than average daily load.",
      },
    ],
    seo: {
      metaTitle: "Media & Entertainment Software Development | Streaming Platforms | Staller Stack",
      metaDescription:
        "CDN-backed streaming architecture, AI recommendation engines, and rights/metadata management built for media and entertainment platforms at scale.",
      keywords: [
        "media software development",
        "streaming platform development",
        "video streaming architecture",
        "content recommendation engine",
        "rights management software",
        "OTT platform development",
      ],
    },
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    description: "Network operations platforms, customer self-service, and usage analytics for telecom providers.",
    icon: "telecom",
    challenges: [
      "Legacy OSS/BSS systems that slow down new product launches",
      "Predicting and preventing network outages before customers notice",
      "Reducing churn in a market where switching providers is easy",
    ],
    solutions: [
      "Modernized OSS/BSS layers that plug into existing carrier infrastructure",
      "Predictive maintenance models trained on network performance data",
      "Churn-prediction and retention automation built on usage analytics",
      "Self-service customer portals for billing, plans, and support",
    ],
    relatedServiceSlugs: ["cloud-devops", "ai-ml-solutions", "software-development"],
    theme: { accent: "indigo", visual: "wave" },
    overview:
      "Switching carriers has never been easier for customers, which puts pressure on every part of the stack — product launch speed, network reliability, and how well self-service actually solves problems instead of routing to a call center. We modernize the OSS/BSS layers slowing down new launches, build predictive maintenance models that catch network issues before customers notice, and ship the retention automation and self-service portals that keep churn down.",
    stats: [
      { label: "Avg. Churn Reduction", value: "12%+" },
      { label: "Typical Engagement", value: "12-20 wks" },
      { label: "Network Events Monitored", value: "Real-Time" },
      { label: "Legacy Systems Modernized", value: "OSS/BSS" },
    ],
    problemsSolved: [
      {
        challenge: "Legacy OSS/BSS systems that slow down new product launches.",
        solution: "Modernized OSS/BSS layers that plug into existing carrier infrastructure without a full-stack replacement.",
      },
      {
        challenge: "Predicting and preventing network outages before customers notice.",
        solution: "Predictive maintenance models trained on network performance data that flag degradation before it becomes an outage.",
      },
      {
        challenge: "Reducing churn in a market where switching providers takes minutes.",
        solution: "Churn-prediction and retention automation built on usage analytics, targeting intervention before the customer decides to leave.",
      },
      {
        challenge: "Customers routed to call centers for issues that could be self-served.",
        solution: "Self-service customer portals for billing, plans, and support that resolve common issues without a support call.",
      },
    ],
    faqs: [
      {
        question: "Can you modernize OSS/BSS without disrupting live service?",
        answer: "Yes — we typically build a modernization layer that integrates with existing carrier infrastructure and migrate incrementally, not a risky cutover.",
      },
      {
        question: "How accurate is churn prediction in practice?",
        answer: "Accuracy depends on the usage and billing signals available — we assess your data during scoping and set realistic targets before building.",
      },
      {
        question: "What network data do you need for predictive maintenance?",
        answer: "Historical performance and event data from your network monitoring systems — we work with what's already being collected where possible.",
      },
      {
        question: "Can the self-service portal handle plan changes and billing disputes, not just FAQs?",
        answer: "Yes — it's built to handle real account actions like plan changes, billing inquiries, and support tickets, not just static help content.",
      },
    ],
    seo: {
      metaTitle: "Telecommunications Software Development | OSS/BSS Modernization | Staller Stack",
      metaDescription:
        "OSS/BSS modernization, predictive network maintenance, and churn-reduction automation built for telecom and network operators.",
      keywords: [
        "telecom software development",
        "OSS BSS modernization",
        "telecommunications software",
        "churn prediction software",
        "network monitoring software",
        "telecom customer portal",
      ],
    },
  },
  {
    slug: "government-public-sector",
    name: "Government & Public Sector",
    description: "Citizen-facing digital services and secure, compliant public-sector systems.",
    icon: "government",
    challenges: [
      "Legacy systems that weren't designed for modern citizen expectations",
      "Meeting strict accessibility, security, and compliance requirements",
      "Delivering services reliably during high-demand enrollment periods",
    ],
    solutions: [
      "Accessible, standards-compliant citizen portals for permits, filings, and requests",
      "Security-hardened architecture that meets public-sector compliance standards",
      "Auto-scaling infrastructure that holds up during peak filing or enrollment periods",
      "Legacy system integration that modernizes services without a risky rip-and-replace",
    ],
    relatedServiceSlugs: ["security-compliance", "cloud-devops", "software-development"],
    theme: { accent: "teal", visual: "mesh" },
    overview:
      "Citizens expect the same ease of use from a government portal that they get from any consumer app — and agencies have to deliver that while meeting accessibility, security, and compliance standards private companies don't face. We build standards-compliant citizen portals, security-hardened infrastructure, and legacy system integrations that modernize service delivery without the risk of a full rip-and-replace.",
    stats: [
      { label: "Accessibility Standard", value: "WCAG 2.1 AA" },
      { label: "Typical Engagement", value: "12-20 wks" },
      { label: "Peak Filing Load Handled", value: "10x+" },
      { label: "Security Posture", value: "Compliance-Hardened" },
    ],
    problemsSolved: [
      {
        challenge: "Legacy systems that weren't designed for modern citizen expectations.",
        solution: "Accessible, standards-compliant citizen portals for permits, filings, and requests that meet current usability expectations.",
      },
      {
        challenge: "Meeting strict accessibility, security, and compliance requirements.",
        solution: "Security-hardened architecture designed to meet public-sector compliance standards from the initial build, not retrofitted before review.",
      },
      {
        challenge: "Delivering services reliably during high-demand enrollment or filing periods.",
        solution: "Auto-scaling infrastructure that holds up during peak filing or enrollment periods instead of degrading under load.",
      },
      {
        challenge: "Modernizing services without the risk of a full legacy system replacement.",
        solution: "Legacy system integration that modernizes the citizen-facing experience without a risky rip-and-replace of core systems.",
      },
    ],
    faqs: [
      {
        question: "Do you build to WCAG accessibility standards by default?",
        answer: "Yes — WCAG 2.1 AA accessibility is a default requirement for citizen-facing work, not an optional add-on.",
      },
      {
        question: "Can you work within government procurement and security review processes?",
        answer: "Yes — we're familiar with the documentation and security review expectations common to public-sector procurement and can support that process.",
      },
      {
        question: "How do you handle a legacy system that can't be taken offline for migration?",
        answer: "We typically build an integration layer that runs alongside the legacy system and migrate functionality incrementally, minimizing service disruption.",
      },
      {
        question: "Can the infrastructure handle a filing deadline traffic spike?",
        answer: "Yes — auto-scaling infrastructure is designed and load-tested against your specific peak filing or enrollment periods.",
      },
    ],
    seo: {
      metaTitle: "Government & Public Sector Software Development | Staller Stack",
      metaDescription:
        "Accessible, security-hardened citizen portals and legacy system modernization built for government and public-sector agencies.",
      keywords: [
        "government software development",
        "public sector software",
        "citizen portal development",
        "govtech development",
        "WCAG compliant government website",
        "legacy government system modernization",
      ],
    },
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
