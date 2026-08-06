export type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "code" | "cloud" | "shield" | "brain" | "cpu" | "smartphone" | "layers" | "database" | "users";
  process: { title: string; description: string }[];
  deliverables: string[];
  techStack: { category: string; items: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-ml-solutions",
    title: "AI & ML Solutions",
    description:
      "Intelligent automation, predictive analytics, and custom machine learning models designed to transform raw data into strategic business advantages.",
    bullets: [
      "Predictive Analytics & Forecasting",
      "NLP & Computer Vision Models",
      "MLOps Pipeline Deployment",
    ],
    icon: "brain",
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
    ],
  },
  {
    slug: "ai-agent-model-training",
    title: "AI Agent & Model Training",
    description:
      "Custom AI agents, fine-tuned LLMs, and end-to-end model training pipelines — built to automate real workflows and reason over your own data, not just answer generic prompts.",
    bullets: [
      "Custom LLM Fine-Tuning & RAG",
      "Autonomous Agent Workflows",
      "Evaluation, Guardrails & Monitoring",
    ],
    icon: "cpu",
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
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile Application Development & Maintenance",
    description:
      "Native and cross-platform mobile apps designed for app-store-quality polish — built, shipped, and kept running with ongoing updates as OS versions and user needs evolve.",
    bullets: [
      "iOS, Android & React Native",
      "App Store & Play Store Launch Support",
      "Ongoing OS & Dependency Maintenance",
    ],
    icon: "smartphone",
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
    ],
  },
  {
    slug: "web-development",
    title: "Web Development & Maintenance",
    description:
      "Custom web applications and marketing sites — built with modern frameworks, pixel-perfect design, and performance at the core, then kept fast and secure long after launch.",
    bullets: [
      "React, Next.js & Node.js",
      "Mobile-First Responsive Design",
      "Ongoing Performance & Security Patching",
    ],
    icon: "code",
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
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "End-to-end cloud architecture, automated CI/CD pipelines, and infrastructure-as-code solutions that make your deployments seamless and your systems resilient.",
    bullets: [
      "AWS / Azure / Google Cloud",
      "Kubernetes & Docker Orchestration",
      "24/7 Monitoring & Auto-Scaling",
    ],
    icon: "cloud",
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
    ],
  },
  {
    slug: "software-development",
    title: "Software Development",
    description:
      "Custom software engineering for internal tools, platforms, and products that off-the-shelf software can't handle — architected to fit how your business actually works.",
    bullets: [
      "Custom Platforms & Internal Tools",
      "API & Systems Integration",
      "Legacy System Modernization",
    ],
    icon: "layers",
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
    ],
  },
  {
    slug: "erp-custom-software",
    title: "ERP Custom Software",
    description:
      "Tailored enterprise resource planning systems that unify finance, inventory, procurement, and operations into one system built around your actual processes, not a generic template.",
    bullets: [
      "Modular Finance, Inventory & HR",
      "Legacy ERP Migration & Data Cleanup",
      "Custom Reporting & Approval Workflows",
    ],
    icon: "database",
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
    ],
  },
  {
    slug: "crm-custom-software",
    title: "CRM Custom Software",
    description:
      "Custom-built CRM platforms that match your actual sales and support process — pipeline stages, automations, and reporting shaped around how your team really sells.",
    bullets: [
      "Custom Pipeline & Lead Scoring",
      "Sales & Support Automation",
      "Email, Calendar & VoIP Integrations",
    ],
    icon: "users",
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
    ],
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    description:
      "Comprehensive security assessments, penetration testing, and compliance implementation to safeguard your digital assets against evolving threats.",
    bullets: [
      "Advanced Threat Detection",
      "SOC 2 & ISO 27001 Compliance",
      "Zero-Trust Architecture Design",
    ],
    icon: "shield",
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
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
