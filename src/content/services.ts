export type AccentKey = "teal" | "mint" | "cyan" | "indigo" | "amber" | "blue";
export type VisualKey = "orbit" | "mesh" | "wave" | "pulse";
export type HeroVariant = "centered" | "split" | "diagonal";

export type Service = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  icon: "code" | "cloud" | "shield" | "brain" | "cpu" | "smartphone" | "layers" | "database" | "users";
  theme: { accent: AccentKey; visual: VisualKey; heroVariant: HeroVariant };
  stats: { label: string; value: string }[];
  process: { title: string; description: string }[];
  deliverables: string[];
  engagementModel: { title: string; description: string }[];
  techStack: { category: string; items: string[] }[];
  faqs: { question: string; answer: string }[];
  seo: { metaTitle: string; metaDescription: string; keywords: string[] };
};

export const services: Service[] = [
  {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    description:
      "Intelligent automation, predictive analytics, and custom machine learning models designed to transform raw data into strategic business advantages.",
    intro:
      "From predictive dashboards to computer vision pipelines, we design AI and machine learning systems that hold up under real production load — not just a promising notebook demo. Every engagement pairs data science with the MLOps discipline it takes to keep models accurate long after launch.",
    bullets: [
      "Predictive Analytics & Forecasting",
      "NLP & Computer Vision Models",
      "MLOps Pipeline Deployment",
    ],
    icon: "brain",
    theme: { accent: "indigo", visual: "mesh", heroVariant: "centered" },
    stats: [
      { label: "Avg. Model Accuracy Lift", value: "27%" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "Production Models Shipped", value: "40+" },
      { label: "Retraining Cadence", value: "Automated" },
    ],
    process: [
      {
        title: "Data Assessment",
        description:
          "We audit your data sources, quality, and volume to scope what's realistically achievable.",
      },
      {
        title: "Model Prototyping",
        description:
          "Rapid prototypes trained on real data to validate the approach before full investment.",
      },
      {
        title: "Production Engineering",
        description:
          "Models wrapped in production-grade APIs with monitoring for drift and performance.",
      },
      {
        title: "MLOps & Iteration",
        description:
          "Continuous retraining pipelines so the model keeps improving as new data arrives.",
      },
    ],
    deliverables: [
      "Trained model(s) with documented performance benchmarks",
      "Production API endpoints",
      "MLOps pipeline for retraining",
      "Monitoring dashboard for drift and accuracy",
      "Technical handover documentation",
    ],
    engagementModel: [
      {
        title: "Proof of Concept",
        description:
          "A scoped 2-3 week sprint to validate feasibility on your real data before committing to a full production build.",
      },
      {
        title: "Production Build",
        description:
          "Project-based engagement covering model development, API delivery, and MLOps pipeline — typically 8-14 weeks.",
      },
      {
        title: "Ongoing MLOps Retainer",
        description:
          "Monthly retainer for monitoring, retraining, and iteration as your data and business needs evolve.",
      },
    ],
    techStack: [
      { category: "Languages & Libraries", items: ["Python", "Jupyter", "NumPy", "Pandas"] },
      { category: "ML Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "ONNX"] },
      { category: "MLOps & Deployment", items: ["MLflow", "AWS SageMaker", "Docker", "Weights & Biases", "Kubernetes"] },
      { category: "Data & Pipelines", items: ["Apache Kafka", "PostgreSQL", "Apache Airflow", "Apache Spark"] },
    ],
    faqs: [
      {
        question: "Do we need a large dataset to get started?",
        answer:
          "Not always — we can often start with a proof-of-concept on your existing data and identify gaps to close before scaling.",
      },
      {
        question: "How do you prevent model performance from degrading over time?",
        answer:
          "We build drift-monitoring and retraining pipelines into every production deployment, not just the initial model.",
      },
      {
        question: "Can this integrate with our existing systems?",
        answer:
          "Yes — models are delivered as API endpoints designed to slot into your current application stack.",
      },
      {
        question: "What's the difference between this and your AI Agent service?",
        answer:
          "AI & ML Solutions covers predictive models, computer vision, and NLP built for a specific business outcome. If you need a conversational agent or LLM-based automation, see our AI Agent & Model Training service.",
      },
      {
        question: "How do you measure ROI on an AI/ML engagement?",
        answer:
          "We define success metrics — accuracy, cost savings, or time saved — before development starts, and report against them after launch.",
      },
    ],
    seo: {
      metaTitle: "AI & ML Solutions | Machine Learning Development Services | Staller Stack",
      metaDescription:
        "Custom AI and machine learning solutions — predictive analytics, computer vision, NLP, and MLOps pipelines built for production, not just prototypes.",
      keywords: [
        "AI development services",
        "machine learning solutions",
        "predictive analytics",
        "MLOps",
        "computer vision development",
        "NLP development",
        "custom AI models",
      ],
    },
  },
  {
    slug: "ai-agent-model-training",
    title: "AI Agent & Model Training",
    description:
      "Custom AI agents, fine-tuned LLMs, and end-to-end model training pipelines — built to automate real workflows and reason over your own data, not just answer generic prompts.",
    intro:
      "We build AI agents that take real action, not just chatbots that answer questions. Fine-tuned models, retrieval-grounded reasoning, and scoped tool access come together into agents your team can actually trust with production workflows.",
    bullets: [
      "Custom LLM Fine-Tuning & RAG",
      "Autonomous Agent Workflows",
      "Evaluation, Guardrails & Monitoring",
    ],
    icon: "cpu",
    theme: { accent: "cyan", visual: "orbit", heroVariant: "split" },
    stats: [
      { label: "Avg. Task Automation Rate", value: "60%" },
      { label: "Typical Engagement", value: "6-12 wks" },
      { label: "Guardrail Checkpoints", value: "Human-in-loop" },
      { label: "Model Iteration Cycle", value: "Weekly evals" },
    ],
    process: [
      {
        title: "Use-Case Scoping",
        description:
          "We identify the workflows worth automating and the guardrails an agent needs before writing any training code.",
      },
      {
        title: "Data Curation & Fine-Tuning",
        description:
          "Domain data cleaned, labeled, and used to fine-tune or RAG-ground the base model for your context.",
      },
      {
        title: "Agent Orchestration",
        description:
          "Tools, memory, and multi-step reasoning wired together so the agent can take action, not just respond.",
      },
      {
        title: "Evaluation & Guardrails",
        description:
          "Automated eval suites and human-in-the-loop review gates before anything runs unsupervised.",
      },
    ],
    deliverables: [
      "Fine-tuned or RAG-grounded model",
      "Agent orchestration layer with scoped tool access",
      "Evaluation harness with benchmark scores",
      "Guardrail and escalation-rule documentation",
      "Deployment and monitoring runbook",
    ],
    engagementModel: [
      {
        title: "Use-Case Pilot",
        description:
          "A focused pilot on one high-value workflow to prove the agent pattern before scaling to others.",
      },
      {
        title: "Agent Build & Fine-Tuning",
        description:
          "Full engagement covering data curation, fine-tuning or RAG grounding, and orchestration — typically 6-12 weeks.",
      },
      {
        title: "Evaluation & Guardrail Retainer",
        description:
          "Ongoing monitoring, eval-suite maintenance, and guardrail tuning as usage and edge cases grow.",
      },
    ],
    techStack: [
      { category: "Languages", items: ["Python", "TypeScript"] },
      { category: "Agent Frameworks", items: ["LangChain", "LangGraph", "LlamaIndex", "n8n"] },
      { category: "Models & Vector Stores", items: ["OpenAI API", "Anthropic API", "Pinecone", "Hugging Face", "ONNX"] },
      { category: "Evaluation & Tooling", items: ["MLflow", "Docker", "Jupyter", "Weights & Biases"] },
    ],
    faqs: [
      {
        question: "Do you train models from scratch or fine-tune existing ones?",
        answer:
          "Almost always fine-tuning or RAG on top of a strong foundation model — training from scratch rarely makes economic sense outside highly specialized domains.",
      },
      {
        question: "How do you keep an autonomous agent from doing something wrong?",
        answer:
          "Every agent ships with scoped tool permissions, confidence thresholds, and human-approval checkpoints for high-risk actions.",
      },
      {
        question: "Can this work with our existing data and tools?",
        answer:
          "Yes — agents are built to call your existing APIs and internal tools rather than replace them.",
      },
      {
        question: "What's the difference between this and a chatbot integration?",
        answer:
          "A chatbot answers questions; an agent takes multi-step action — calling tools, updating systems, and escalating when it's uncertain. We scope which one actually fits your workflow before building.",
      },
      {
        question: "Which LLM providers do you work with?",
        answer:
          "We're provider-agnostic — OpenAI, Anthropic, and open-weight models via Hugging Face are all in active use, chosen per latency, cost, and data-residency needs.",
      },
    ],
    seo: {
      metaTitle: "AI Agent Development & LLM Fine-Tuning Services | Staller Stack",
      metaDescription:
        "Custom AI agents, fine-tuned LLMs, and RAG pipelines built to automate real workflows with guardrails and evaluation baked in.",
      keywords: [
        "AI agent development",
        "LLM fine-tuning",
        "RAG development",
        "autonomous agents",
        "AI model training services",
        "LangChain development",
        "custom LLM solutions",
      ],
    },
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development & Maintenance",
    description:
      "Native and cross-platform mobile apps designed for app-store-quality polish — built, shipped, and kept running with ongoing updates as OS versions and user needs evolve.",
    intro:
      "We design and build mobile apps that feel native on day one and keep working through every OS update after — from the first Figma prototype through App Store approval and beyond.",
    bullets: [
      "iOS, Android & React Native",
      "App Store & Play Store Launch Support",
      "Ongoing OS & Dependency Maintenance",
    ],
    icon: "smartphone",
    theme: { accent: "mint", visual: "pulse", heroVariant: "diagonal" },
    stats: [
      { label: "Apps Shipped", value: "50+" },
      { label: "Avg. Store Approval Time", value: "< 2 wks" },
      { label: "Platforms Covered", value: "iOS & Android" },
      { label: "Crash-Free Session Target", value: "99.5%" },
    ],
    process: [
      {
        title: "Product & Platform Scoping",
        description:
          "Native vs. cross-platform trade-offs decided upfront based on your budget, timeline, and target devices.",
      },
      {
        title: "UI/UX & Prototyping",
        description:
          "Interactive prototypes tested on real devices before development begins, so navigation and gestures feel native.",
      },
      {
        title: "Build & Sprint Reviews",
        description:
          "Two-week sprints with installable builds you can test on your own device, not just a staging link.",
      },
      {
        title: "Launch & Maintenance",
        description:
          "Store submission handled end-to-end, then ongoing patches for OS updates, crashes, and store policy changes.",
      },
    ],
    deliverables: [
      "Published iOS and/or Android application",
      "Source code and CI build pipeline",
      "App Store / Play Store listing assets",
      "Crash reporting and analytics integration",
      "Maintenance retainer for OS and dependency updates",
    ],
    engagementModel: [
      {
        title: "MVP Sprint",
        description:
          "A scoped 6-10 week build to get a lean, store-ready version of your app in front of real users fast.",
      },
      {
        title: "Full Product Build",
        description:
          "Project-based engagement for feature-complete apps, typically 12-20 weeks depending on platform scope.",
      },
      {
        title: "Maintenance Retainer",
        description:
          "Ongoing monthly retainer covering OS updates, crash fixes, and store policy compliance after launch.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["Flutter", "React Native", "Kotlin", "Swift"] },
      { category: "Platform & Tooling", items: ["Expo", "Firebase", "Fastlane", "GitHub Actions", "Figma"] },
      { category: "Quality Assurance", items: ["Appium", "Selenium", "Postman", "Jest"] },
    ],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "Cross-platform (React Native) covers most business apps well; we recommend native only when you need deep hardware access or platform-specific performance.",
      },
      {
        question: "Who handles App Store and Play Store submission?",
        answer:
          "We do — including store listing copy, screenshots, and responding to review rejections.",
      },
      {
        question: "What happens when iOS or Android release a new OS version?",
        answer:
          "Maintenance retainers include compatibility testing and patches ahead of major OS releases, not after something breaks.",
      },
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes — most projects ship cross-platform via React Native or Flutter for cost efficiency, with native Kotlin/Swift reserved for apps needing deep hardware access.",
      },
      {
        question: "What happens if our app gets rejected from the App Store?",
        answer:
          "We handle the resubmission — diagnosing the rejection reason and fixing it, usually within the same review cycle.",
      },
    ],
    seo: {
      metaTitle: "Mobile App Development Company | iOS & Android Apps | Staller Stack",
      metaDescription:
        "Native and cross-platform mobile app development — React Native, Flutter, iOS, and Android — with App Store launch support and ongoing maintenance.",
      keywords: [
        "mobile app development company",
        "iOS app development",
        "Android app development",
        "React Native development",
        "Flutter app development",
        "app maintenance services",
      ],
    },
  },
  {
    slug: "web-development",
    title: "Web Development & Maintenance",
    description:
      "Custom web applications and marketing sites — built with modern frameworks, pixel-perfect design, and performance at the core, then kept fast and secure long after launch.",
    intro:
      "We build web applications and marketing sites that load fast, rank well, and hold up as your product grows — architected with the same rigor whether it's a five-page site or a full SaaS platform.",
    bullets: [
      "React, Next.js & Node.js",
      "Mobile-First Responsive Design",
      "Ongoing Performance & Security Patching",
    ],
    icon: "code",
    theme: { accent: "teal", visual: "wave", heroVariant: "centered" },
    stats: [
      { label: "Avg. Lighthouse Score", value: "95+" },
      { label: "Sites & Apps Delivered", value: "80+" },
      { label: "Typical Launch Timeline", value: "8-16 wks" },
      { label: "Post-Launch Support", value: "30 days incl." },
    ],
    process: [
      {
        title: "Discovery & Architecture",
        description:
          "Requirements, user flows, and system architecture mapped before a line of code is written.",
      },
      {
        title: "Design & Prototyping",
        description:
          "Wireframes and interactive prototypes validated with stakeholders early, before development begins.",
      },
      {
        title: "Agile Development",
        description:
          "Two-week sprints with working demos, so you see real progress continuously — not just at the end.",
      },
      {
        title: "QA, Launch & Handover",
        description:
          "Cross-browser testing, staged rollout, and full documentation handover to your team.",
      },
    ],
    deliverables: [
      "Production-ready web application",
      "Component library and design system",
      "API documentation",
      "Deployment runbooks",
      "30-day post-launch support window",
    ],
    engagementModel: [
      {
        title: "Marketing Site Build",
        description:
          "Fixed-scope engagement for brochure and marketing sites, typically 3-6 weeks from design to launch.",
      },
      {
        title: "Web App Development",
        description:
          "Project-based build for full web applications with a custom backend, typically 8-16 weeks.",
      },
      {
        title: "Ongoing Maintenance",
        description:
          "Monthly retainer for performance, security patching, and feature iteration after launch.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"] },
      { category: "Frameworks", items: ["Angular", "Vue.js", "Express.js", "GraphQL"] },
      { category: "Backend", items: ["Node.js", "Python", "PHP", ".NET"] },
      { category: "Quality Assurance", items: ["Selenium", "SonarQube", "JMeter", "Cypress", "Jest"] },
    ],
    faqs: [
      {
        question: "How long does a typical website or web app build take?",
        answer:
          "Most engagements run 8–16 weeks depending on scope, with a working prototype ready in the first 2–3 weeks.",
      },
      {
        question: "Do you handle ongoing maintenance after launch?",
        answer:
          "Every project includes a 30-day support window, and we offer ongoing maintenance retainers after that.",
      },
      {
        question: "Can you take over an existing codebase?",
        answer:
          "Yes — we start with a codebase audit to flag risk areas before committing to a timeline.",
      },
      {
        question: "Do you work with an existing design, or do you design too?",
        answer:
          "Both — we can build from your Figma files directly, or run the design phase in-house as part of the engagement.",
      },
      {
        question: "Is the site built for SEO from day one?",
        answer:
          "Yes — semantic markup, performance budgets, and metadata are part of every build, not an afterthought.",
      },
    ],
    seo: {
      metaTitle: "Web Development Company | Custom Websites & Web Apps | Staller Stack",
      metaDescription:
        "Custom web development with React, Next.js, and Node.js — responsive design, performance-first builds, and ongoing maintenance.",
      keywords: [
        "web development company",
        "custom website development",
        "Next.js development",
        "React development services",
        "web app development",
        "website maintenance services",
      ],
    },
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "End-to-end cloud architecture, automated CI/CD pipelines, and infrastructure-as-code solutions that make your deployments seamless and your systems resilient.",
    intro:
      "We architect cloud infrastructure and CI/CD pipelines that make deployments boring — in the best way. Infrastructure-as-code, phased migrations, and 24/7 monitoring keep your systems resilient as you scale.",
    bullets: [
      "AWS / Azure / Google Cloud",
      "Kubernetes & Docker Orchestration",
      "24/7 Monitoring & Auto-Scaling",
    ],
    icon: "cloud",
    theme: { accent: "blue", visual: "orbit", heroVariant: "split" },
    stats: [
      { label: "Migrations Completed", value: "30+" },
      { label: "Avg. Uptime Post-Migration", value: "99.9%" },
      { label: "Typical Cost Reduction", value: "20-35%" },
      { label: "Deployment Frequency", value: "Multiple daily" },
    ],
    process: [
      {
        title: "Infrastructure Audit",
        description:
          "We map your current environment, cost drivers, and risk points before proposing anything.",
      },
      {
        title: "Migration & IaC Design",
        description:
          "Infrastructure-as-code blueprints built for your target cloud, tested in staging first.",
      },
      {
        title: "Phased Cutover",
        description:
          "Traffic shifted gradually with rollback plans at every stage — no big-bang downtime windows.",
      },
      {
        title: "Monitoring & Optimization",
        description:
          "Dashboards, alerts, and auto-scaling tuned post-migration to control cost and reliability.",
      },
    ],
    deliverables: [
      "Infrastructure-as-code repository (Terraform)",
      "CI/CD pipelines",
      "Monitoring and alerting dashboards",
      "Disaster-recovery runbook",
      "Cost-optimization report",
    ],
    engagementModel: [
      {
        title: "Infrastructure Audit",
        description:
          "A focused 1-2 week assessment of your current environment, cost drivers, and risk points.",
      },
      {
        title: "Migration & IaC Build",
        description:
          "Project-based engagement to migrate and codify your infrastructure, typically 6-12 weeks.",
      },
      {
        title: "Managed Cloud Retainer",
        description:
          "Ongoing monitoring, patching, and on-call support as a managed service.",
      },
    ],
    techStack: [
      { category: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Cloudflare"] },
      { category: "Containers & IaC", items: ["Docker", "Kubernetes", "Terraform", "Nginx"] },
      { category: "CI/CD & Automation", items: ["GitHub Actions", "Jenkins", "Ansible", "GitLab", "CircleCI"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana", "Elasticsearch"] },
    ],
    faqs: [
      {
        question: "Will we experience downtime during migration?",
        answer:
          "We plan phased cutovers with rollback points, so production traffic typically sees zero unplanned downtime.",
      },
      {
        question: "Which cloud provider do you recommend?",
        answer:
          "It depends on your existing stack, compliance needs, and team familiarity — we recommend a provider after the infrastructure audit, not before.",
      },
      {
        question: "Do you manage infrastructure after migration?",
        answer:
          "Yes — ongoing monitoring, patching, and 24/7 alerting are available as a managed service.",
      },
      {
        question: "Do you support multi-cloud environments?",
        answer:
          "Yes — we design for AWS, Azure, and Google Cloud individually or in combination, based on your compliance and redundancy needs.",
      },
      {
        question: "Can you reduce our current cloud spend?",
        answer:
          "Usually — the infrastructure audit typically surfaces 20-35% in avoidable cost from oversized instances, idle resources, or inefficient architecture.",
      },
    ],
    seo: {
      metaTitle: "Cloud & DevOps Services | AWS, Azure & Kubernetes Experts | Staller Stack",
      metaDescription:
        "Cloud architecture, CI/CD pipelines, and infrastructure-as-code on AWS, Azure, and Google Cloud — with Kubernetes orchestration and 24/7 monitoring.",
      keywords: [
        "cloud consulting services",
        "DevOps services",
        "AWS migration",
        "Kubernetes consulting",
        "CI/CD pipeline setup",
        "infrastructure as code",
        "cloud cost optimization",
      ],
    },
  },
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Custom software engineering for internal tools, platforms, and products that off-the-shelf software can't handle — architected to fit how your business actually works.",
    intro:
      "When off-the-shelf software forces your team into workarounds, we build custom platforms shaped around how your business actually operates — architected to integrate with what you already run, not replace it wholesale.",
    bullets: [
      "Custom Platforms & Internal Tools",
      "API & Systems Integration",
      "Legacy System Modernization",
    ],
    icon: "layers",
    theme: { accent: "indigo", visual: "mesh", heroVariant: "diagonal" },
    stats: [
      { label: "Custom Platforms Delivered", value: "45+" },
      { label: "Legacy Systems Modernized", value: "15+" },
      { label: "Typical Engagement", value: "10-20 wks" },
      { label: "Sprint Cadence", value: "2 weeks" },
    ],
    process: [
      {
        title: "Requirements & Systems Mapping",
        description:
          "We map existing systems, data flows, and integration points before proposing an architecture.",
      },
      {
        title: "Architecture & Tech Selection",
        description:
          "A stack chosen for your team's ability to maintain it, not just what's trending.",
      },
      {
        title: "Iterative Build",
        description:
          "Working software delivered in increments, with real users testing along the way.",
      },
      {
        title: "Handover & Documentation",
        description:
          "Full technical documentation and knowledge transfer so your team isn't locked into ours.",
      },
    ],
    deliverables: [
      "Production-ready custom software platform",
      "System architecture documentation",
      "Integration APIs for existing tools",
      "Automated test suite",
      "Technical handover and training session",
    ],
    engagementModel: [
      {
        title: "Discovery & Architecture",
        description:
          "A scoped 2-3 week phase to map systems and lock architecture before full development begins.",
      },
      {
        title: "Iterative Build",
        description:
          "Project-based development in two-week sprints, typically 10-20 weeks depending on scope.",
      },
      {
        title: "Ongoing Development Retainer",
        description:
          "Monthly retainer for continued feature development and support after initial launch.",
      },
    ],
    techStack: [
      { category: "Backend", items: ["Node.js", "Python", ".NET", "Express.js"] },
      { category: "Database & Caching", items: ["PostgreSQL", "Redis", "MongoDB", "MySQL"] },
      { category: "DevOps & Delivery", items: ["Docker", "GitHub Actions", "Postman", "Jest"] },
    ],
    faqs: [
      {
        question: "When does custom software make more sense than off-the-shelf?",
        answer:
          "When your workflow doesn't fit existing tools without heavy workarounds, or when licensing costs scale faster than the value you get.",
      },
      {
        question: "Can you integrate with our existing legacy systems?",
        answer:
          "Yes — legacy integration is one of the most common reasons clients come to us; we build adapters rather than forcing a rip-and-replace.",
      },
      {
        question: "How do you handle scope changes mid-project?",
        answer:
          "Two-week sprints mean scope changes get absorbed at sprint boundaries instead of derailing the whole timeline.",
      },
      {
        question: "Can you take over a project from another development team?",
        answer:
          "Yes — we start with a codebase audit to flag risk areas and technical debt before committing to a timeline or quote.",
      },
      {
        question: "How do you decide what tech stack to use?",
        answer:
          "Based on your team's ability to maintain it long-term and the specific integration requirements — not whatever is trending.",
      },
    ],
    seo: {
      metaTitle: "Custom Software Development Company | Staller Stack",
      metaDescription:
        "Custom software engineering for internal tools, platforms, and legacy modernization — architected around your actual business processes.",
      keywords: [
        "custom software development company",
        "software engineering services",
        "legacy system modernization",
        "API integration services",
        "custom platform development",
      ],
    },
  },
  {
    slug: "erp-custom-software",
    title: "ERP Custom Software",
    description:
      "Tailored enterprise resource planning systems that unify finance, inventory, procurement, and operations into one system built around your actual processes, not a generic template.",
    intro:
      "We build ERP systems that unify finance, inventory, procurement, and operations around your actual processes — not a rigid template you have to bend your business to fit.",
    bullets: [
      "Modular Finance, Inventory & HR",
      "Legacy ERP Migration & Data Cleanup",
      "Custom Reporting & Approval Workflows",
    ],
    icon: "database",
    theme: { accent: "amber", visual: "wave", heroVariant: "centered" },
    stats: [
      { label: "ERP Modules Delivered", value: "Finance to HR" },
      { label: "Data Migration Accuracy", value: "99.9%" },
      { label: "Typical Rollout", value: "12-24 wks" },
      { label: "Rollout Approach", value: "Phased by dept." },
    ],
    process: [
      {
        title: "Process Discovery",
        description:
          "We map your existing operational processes across departments before designing a single module.",
      },
      {
        title: "Module Architecture",
        description:
          "Finance, inventory, procurement, and HR modules scoped and sequenced around your highest-impact processes first.",
      },
      {
        title: "Data Migration & Integration",
        description:
          "Historical data cleaned and migrated, integrated with your existing accounting and operational tools.",
      },
      {
        title: "Rollout & Training",
        description:
          "Phased department-by-department rollout with hands-on training, not a single risky go-live.",
      },
    ],
    deliverables: [
      "Production ERP system with core modules",
      "Data migration from legacy systems",
      "Role-based access and approval workflows",
      "Custom reporting dashboards",
      "Admin and end-user training documentation",
    ],
    engagementModel: [
      {
        title: "Process Discovery",
        description:
          "A 2-4 week phase mapping your operational processes across departments before any module is designed.",
      },
      {
        title: "Modular ERP Build",
        description:
          "Project-based delivery sequenced by department impact, typically 12-24 weeks for core modules.",
      },
      {
        title: "Admin & Support Retainer",
        description:
          "Ongoing retainer for new modules, reporting changes, and system administration support.",
      },
    ],
    techStack: [
      { category: "Backend", items: ["Node.js", ".NET", "Python"] },
      { category: "Database & Reporting", items: ["PostgreSQL", "Power BI", "MySQL"] },
      { category: "ERP Platforms", items: ["Odoo", "SAP"] },
      { category: "Quality Assurance", items: ["SonarQube", "JMeter", "Postman"] },
    ],
    faqs: [
      {
        question: "Can you migrate data from our existing ERP or spreadsheets?",
        answer:
          "Yes — data migration and cleanup is typically the first phase, before any new module goes live.",
      },
      {
        question: "Do we need to roll out every module at once?",
        answer:
          "No — we sequence modules by impact, so you see value from finance or inventory before HR or procurement is even built.",
      },
      {
        question: "Can it integrate with our existing accounting software?",
        answer:
          "Yes, ERP builds are designed with integration APIs for your existing accounting, payroll, and CRM tools.",
      },
      {
        question: "Can we roll out finance before HR or inventory?",
        answer:
          "Yes — modules are sequenced by business impact, so you see value from the highest-priority department first.",
      },
      {
        question: "Will our team need extensive training?",
        answer:
          "We build hands-on training and admin documentation into every rollout phase, so adoption doesn't rely on a single onboarding day.",
      },
    ],
    seo: {
      metaTitle: "Custom ERP Software Development | Staller Stack",
      metaDescription:
        "Tailored ERP systems for finance, inventory, procurement, and HR — custom-built enterprise resource planning software with legacy migration support.",
      keywords: [
        "custom ERP development",
        "ERP software development company",
        "enterprise resource planning software",
        "ERP migration services",
        "custom business management software",
      ],
    },
  },
  {
    slug: "crm-custom-software",
    title: "CRM Custom Software",
    description:
      "Custom-built CRM platforms that match your actual sales and support process — pipeline stages, automations, and reporting shaped around how your team really sells.",
    intro:
      "We build CRM platforms shaped around how your team actually sells and supports customers — custom pipeline stages, automation, and reporting instead of paying for workarounds inside a generic tool.",
    bullets: [
      "Custom Pipeline & Lead Scoring",
      "Sales & Support Automation",
      "Email, Calendar & VoIP Integrations",
    ],
    icon: "users",
    theme: { accent: "mint", visual: "pulse", heroVariant: "split" },
    stats: [
      { label: "CRMs Delivered", value: "25+" },
      { label: "Avg. Lead Response Time Cut", value: "40%" },
      { label: "Typical Engagement", value: "8-14 wks" },
      { label: "Integrations Supported", value: "Email, Cal, VoIP" },
    ],
    process: [
      {
        title: "Sales Process Mapping",
        description:
          "Your actual pipeline stages, hand-off points, and reporting needs mapped before any screen is designed.",
      },
      {
        title: "Core CRM Build",
        description:
          "Contact, deal, and pipeline management built around your process, not a generic out-of-the-box template.",
      },
      {
        title: "Automation & Integrations",
        description:
          "Email, calendar, and VoIP integrations plus automated follow-ups and lead scoring.",
      },
      {
        title: "Rollout & Adoption",
        description:
          "Team onboarding and iteration based on real usage in the first weeks, not just a training deck.",
      },
    ],
    deliverables: [
      "Production-ready CRM platform",
      "Custom pipeline and reporting dashboards",
      "Email, calendar & VoIP integrations",
      "Automated workflow and lead-scoring rules",
      "Team onboarding and admin documentation",
    ],
    engagementModel: [
      {
        title: "Sales Process Mapping",
        description:
          "A 1-2 week discovery phase to map your pipeline stages and reporting needs before design starts.",
      },
      {
        title: "Core CRM Build",
        description:
          "Project-based engagement for pipeline, automation, and integrations, typically 8-14 weeks.",
      },
      {
        title: "Adoption & Iteration Retainer",
        description:
          "Ongoing retainer to refine workflows and add features based on real usage after rollout.",
      },
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Next.js"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Database", items: ["PostgreSQL", "Redis"] },
      { category: "Integrations", items: ["Twilio", "SendGrid", "Zendesk", "Mailchimp"] },
    ],
    faqs: [
      {
        question: "How is this different from using Salesforce or HubSpot?",
        answer:
          "Off-the-shelf CRMs are great until your process doesn't fit their model — custom CRM makes sense when you're paying for workarounds instead of features.",
      },
      {
        question: "Can it integrate with our existing email and calendar?",
        answer:
          "Yes — integrations with Gmail/Outlook, calendar, and VoIP providers are standard on every build.",
      },
      {
        question: "What if our sales process changes later?",
        answer:
          "Since it's your codebase, pipeline stages and automation rules can evolve with your process instead of being locked to a vendor's roadmap.",
      },
      {
        question: "Why not just use Salesforce or HubSpot?",
        answer:
          "Off-the-shelf CRMs work well until your process doesn't fit their model — custom CRM makes sense once you're paying for workarounds instead of features you actually need.",
      },
      {
        question: "Can you migrate our existing CRM data?",
        answer:
          "Yes — contact, deal, and pipeline history are migrated and validated as part of the build, not a separate afterthought.",
      },
    ],
    seo: {
      metaTitle: "Custom CRM Software Development | Staller Stack",
      metaDescription:
        "Custom-built CRM platforms with pipeline management, sales automation, and email/calendar/VoIP integrations — shaped around your sales process.",
      keywords: [
        "custom CRM development",
        "CRM software development company",
        "sales pipeline software",
        "custom sales automation",
        "CRM integration services",
      ],
    },
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    description:
      "Comprehensive security assessments, penetration testing, and compliance implementation to safeguard your digital assets against evolving threats.",
    intro:
      "We find the gaps before attackers do. Penetration testing, risk assessments, and compliance implementation come together into a security posture that holds up under audit and under real attack.",
    bullets: [
      "Advanced Threat Detection",
      "SOC 2 & ISO 27001 Compliance",
      "Zero-Trust Architecture Design",
    ],
    icon: "shield",
    theme: { accent: "cyan", visual: "orbit", heroVariant: "diagonal" },
    stats: [
      { label: "Vulnerabilities Remediated", value: "500+" },
      { label: "Compliance Frameworks", value: "SOC 2, ISO 27001" },
      { label: "Avg. Critical-Fix Turnaround", value: "< 1 wk" },
      { label: "Security Reviews", value: "Quarterly avail." },
    ],
    process: [
      {
        title: "Risk Assessment",
        description:
          "Full audit of your attack surface — from application code to cloud configuration to employee access.",
      },
      {
        title: "Penetration Testing",
        description:
          "Simulated attacks against web, mobile, and infrastructure layers to find real, exploitable gaps.",
      },
      {
        title: "Remediation & Hardening",
        description:
          "We fix what we find and harden the architecture against that same class of issue recurring.",
      },
      {
        title: "Compliance & Ongoing Monitoring",
        description:
          "Documentation for SOC 2 / ISO 27001 audits, plus continuous threat monitoring after go-live.",
      },
    ],
    deliverables: [
      "Penetration-test report with severity ratings",
      "Remediation roadmap",
      "Compliance documentation (SOC 2 / ISO 27001 ready)",
      "Incident-response runbook",
      "Quarterly security review",
    ],
    engagementModel: [
      {
        title: "Risk Assessment",
        description:
          "A scoped 1-2 week audit of your attack surface across application, cloud, and access layers.",
      },
      {
        title: "Penetration Test & Remediation",
        description:
          "Project-based engagement covering testing, reporting, and fixes, typically 3-6 weeks.",
      },
      {
        title: "Continuous Monitoring Retainer",
        description:
          "Ongoing quarterly reviews and threat monitoring for regulated or high-risk environments.",
      },
    ],
    techStack: [
      { category: "Testing Tools", items: ["Burp Suite", "OWASP ZAP", "Postman"] },
      { category: "Cloud Security", items: ["AWS GuardDuty", "HashiCorp Vault", "Cloudflare"] },
      { category: "Code & Dependency Security", items: ["Snyk", "SonarQube", "GitHub Actions"] },
    ],
    faqs: [
      {
        question: "How often should we run a penetration test?",
        answer:
          "At minimum annually, or after any major architecture change — we also offer quarterly reviews for regulated industries.",
      },
      {
        question: "Can you help us pass a SOC 2 or ISO 27001 audit?",
        answer:
          "Yes — we build the technical controls and documentation auditors look for, not just a report at the end.",
      },
      {
        question: "What if you find a critical vulnerability?",
        answer:
          "We flag it immediately, outside the standard reporting cycle, with a same-week remediation plan.",
      },
      {
        question: "Do you offer compliance-only engagements without a full pentest?",
        answer:
          "Yes — we scope compliance documentation and control implementation separately for teams that already have recent test results.",
      },
      {
        question: "How is a vulnerability disclosed if found mid-engagement?",
        answer:
          "Critical findings are flagged immediately outside the standard reporting cycle, with a same-week remediation plan — we don't hold findings for the final report.",
      },
    ],
    seo: {
      metaTitle: "Security & Compliance Services | Penetration Testing | Staller Stack",
      metaDescription:
        "Penetration testing, security assessments, and SOC 2 / ISO 27001 compliance implementation to protect your systems and pass audits with confidence.",
      keywords: [
        "penetration testing services",
        "security compliance consulting",
        "SOC 2 compliance",
        "ISO 27001 implementation",
        "cybersecurity assessment",
        "zero trust architecture",
      ],
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
