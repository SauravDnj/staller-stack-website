export const heroContent = {
  eyebrow: "AI Center of Excellence",
  heading: "Building the Future with Smart Technology.",
  rotatingWords: [
    "Smart Technology.",
    "Cloud Infrastructure.",
    "AI Automation.",
    "Secure Systems.",
    "Scalable Products.",
  ],
  subtext:
    "We design, develop, and deploy digital solutions that accelerate growth — from cloud infrastructure to intelligent automation.",
  primaryCta: { label: "Get Started", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
};

export const heroTerminal = {
  title: "staller@ai-core: ~/deploy",
  lines: [
    { text: "$ whoami" },
    { text: "Staller Stack" },
    { text: "AI Center of Excellence" },
    { text: "$ cat status.json" },
    { text: "{" },
    { text: '  "clients": "500+",' },
    { text: '  "uptime": "99.98%",' },
    { text: '  "stack": "Cloud, AI, Security",' },
    { text: '  "status": "online"' },
    { text: "}" },
    { text: "$ ls ~/services" },
    { text: "web-dev  cloud-infra  ai-automation  security  devops" },
    { text: "$ npm run deploy" },
    { text: "Building AI Core v4.2..." },
    { text: "Deploying to 12 edge regions..." },
    { text: "✓ Deployment successful", holdMs: 2400 },
  ],
  tags: ["Next.js", "AWS", "Kubernetes", "TensorFlow"],
  status: {
    title: "Currently deploying",
    subtitle: "AI Core v4.2 — 12 edge regions",
    badge: "Terraform",
  },
};

export const trustBar = {
  heading: "Join Over 1000+ Companies with Staller Stack Here",
  logos: [
    "TechNova",
    "CloudAxis",
    "DataForge",
    "NetShield",
    "SecurePulse",
    "AppVault",
    "InnoStack",
    "ScaleOps",
  ],
};

export const aboutStats = {
  eyebrow: "Get to Know Us",
  heading: "Driving Excellence & Innovation: Your Trusted Technology Partner.",
  paragraph:
    "Staller Stack is a full-service IT solutions company helping startups, SMBs, and enterprises transform their digital landscape. With deep expertise across web development, cloud architecture, security & compliance, and artificial intelligence, we don't just build software — we engineer growth. Founded with a mission to make enterprise-grade technology accessible, our team of 50+ engineers, architects, and strategists has delivered 500+ successful projects across 15 countries.",
  stats: [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 50, suffix: "M", label: "Reach Worldwide" },
    { value: 3, suffix: "X", label: "Faster Growth" },
  ],
  image: "/images/stallerstack/about/team-collaboration-wide.webp",
};

export const process = {
  eyebrow: "Our Process",
  heading: "Seamless Process, Exceptional Results.",
  subtext:
    "We follow a proven methodology that turns complex requirements into elegant, scalable solutions — on time, every time.",
  steps: [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We start by deeply understanding your business — the goals, the pain points, the users, and the technical landscape. Through workshops, audits, and research, we build a strategic roadmap that aligns technology with your vision.",
    },
    {
      step: "02",
      title: "Development & Delivery",
      description:
        "Our engineering squads work in agile sprints, delivering working software every two weeks. Continuous integration, automated testing, and regular demos ensure you see progress and can course-correct in real time.",
    },
    {
      step: "03",
      title: "Support & Optimization",
      description:
        "Launch is just the beginning. We provide ongoing monitoring, performance optimization, security patching, and feature enhancements — ensuring your product evolves as your business grows.",
    },
  ],
};

export const liveConsole = {
  eyebrow: "Live Console",
  heading: "From Idea to Production, in Real Time.",
  subtext:
    "Every release runs through the same automated pipeline our engineers rely on — built, tested, and shipped with zero-downtime deploys.",
  stages: [
    { label: "Build", detail: "Compiling & bundling assets" },
    { label: "Test", detail: "Running 1,240 automated checks" },
    { label: "Deploy", detail: "Rolling out to global edge nodes" },
    { label: "Live", detail: "Serving production traffic" },
  ],
  log: [
    { text: "$ ci run --pipeline production" },
    { text: "✓ Installed dependencies", suffix: "1.2s" },
    { text: "✓ Type-checked 312 files", suffix: "3.4s" },
    { text: "✓ Passed 1,240 tests", suffix: "8.1s" },
    { text: "✓ Built optimized bundle", suffix: "2.7s" },
    { text: "✓ Deployed to edge network", suffix: "4.0s" },
    { text: "→ Build succeeded", suffix: "READY", holdMs: 2400 },
  ],
  highlights: [
    { value: "99.99%", label: "Deploy success rate" },
    { value: "<60s", label: "Average build time" },
    { value: "0", label: "Downtime incidents" },
  ],
};

export const playbookGenerator = {
  eyebrow: "AI-Guided Automation",
  headingPrefix: "Try the",
  headingHighlight: "Playbook Generator",
  subtext: "Describe what you want to automate — we'll turn it into a step-by-step playbook you can review, adapt, and approve.",
  badge: "AI-GUIDED",
  cardTitle: "Describe Your Automation",
  promptsLabel: "Prompts",
  submitLabel: "Generate Playbook",
  ctaHelper: "We'll map this into a working playbook and get back to you within 48 hours.",
  categories: [
    {
      key: "ai-ml",
      label: "AI & ML",
      color: "teal" as const,
      examples: [
        "Automatically triage and route inbound support tickets using AI classification.",
        "Summarize weekly sales calls and surface follow-up actions automatically.",
      ],
    },
    {
      key: "security",
      label: "Security & Compliance",
      color: "amber" as const,
      examples: [
        "I need to automate incident response for phishing emails detected in our organization.",
        "Automatically isolate any endpoint that trips 3+ failed MFA attempts in 5 minutes.",
      ],
    },
    {
      key: "cloud-devops",
      label: "Cloud & DevOps",
      color: "indigo" as const,
      examples: [
        "Auto-scale our Kubernetes cluster and page on-call when latency exceeds 400ms.",
        "Roll back the last deploy automatically if the error rate spikes above 2%.",
      ],
    },
    {
      key: "web-app",
      label: "Web & App Dev",
      color: "cyan" as const,
      examples: [
        "Automatically run visual regression tests on every pull request.",
        "Send a Slack digest of new sign-ups and failed payments every morning.",
      ],
    },
  ],
};

export const managedMode = {
  badge: "Multi-Tenant Management",
  headingPrefix: "Pioneering",
  headingHighlight: "Managed Mode",
  headingSuffix: "for Enterprise & MSP",
  subtext: "Manage multiple departments, subsidiaries, or customer tenants from a single console — built for large enterprises and managed service providers.",
  features: [
    {
      title: "Hierarchical Organization",
      description: "Create unlimited tenants in a tree structure. Manage departments, subsidiaries, or customer environments with complete isolation.",
      color: "teal" as const,
    },
    {
      title: "One-Click Context Switching",
      description: "Switch into any tenant instantly. Access their dashboards, workflows, and configurations without credential sharing.",
      color: "mint" as const,
    },
    {
      title: "Workflow Sharing & Templates",
      description: "Share playbooks and configurations across tenants — they receive templates to adapt for their own environment.",
      color: "indigo" as const,
    },
    {
      title: "Tag-Based Bulk Operations",
      description: "Organize tenants with tags — region, tier, industry. Execute workflows across whole groups with a single action.",
      color: "amber" as const,
    },
  ],
  perfectFor: {
    label: "Perfect For",
    groups: [
      {
        title: "Large Enterprises",
        color: "teal" as const,
        bullets: ["Manage global departments", "Control subsidiary operations", "Centralized governance"],
      },
      {
        title: "Managed Service Providers",
        color: "cyan" as const,
        bullets: ["Unlimited customer tenants", "Sub-MSP partnerships", "Scalable service delivery"],
      },
    ],
  },
  console: {
    title: "Staller Console",
    stats: [
      { label: "Tenants", value: "42" },
      { label: "Active Users", value: "1.2K" },
      { label: "Regions", value: "12" },
    ],
    tree: {
      root: "Staller Console",
      branches: [
        { name: "Enterprise Org", children: ["Finance", "Engineering"] },
        { name: "MSP Partner A", children: ["Client A1", "Client A2"] },
        { name: "MSP Partner B", children: ["Client B1", "Client B2"] },
      ],
    },
    floatingBadge: "Unlimited Tenants",
  },
  cta: { label: "Explore MSP Capabilities", href: "/contact" },
};

export const automationUseCases = {
  badge: "Security Automation",
  headingPrefix: "AI-Powered",
  headingSuffix: "Automation Use Cases",
  subtext: "AI-driven automation solutions for every aspect of your technology operations.",
  cases: [
    {
      title: "Identity & Access Management",
      description: "Automate user provisioning, access reviews, and privileged account management across your organization.",
      icon: "key",
      color: "teal" as const,
      bullets: ["Automated provisioning", "Access governance", "Privileged access"],
    },
    {
      title: "Threat Intelligence",
      description: "Aggregate, analyze, and act on threat intelligence feeds to proactively defend against emerging threats.",
      icon: "activity",
      color: "indigo" as const,
      bullets: ["Feed aggregation", "Automated triage", "Proactive defense"],
    },
    {
      title: "Cloud Security Posture",
      description: "Continuous monitoring and automated remediation of cloud security configurations and compliance drift.",
      icon: "cloud",
      color: "cyan" as const,
      bullets: ["Continuous monitoring", "Auto-remediation", "Compliance checks"],
    },
    {
      title: "Zero Trust Security",
      description: "Implement and manage Zero Trust architecture with continuous verification and adaptive access control.",
      icon: "shield",
      color: "mint" as const,
      bullets: ["Continuous verification", "Adaptive access", "Micro-segmentation"],
    },
    {
      title: "Vulnerability Management",
      description: "Automated vulnerability scanning, risk prioritization, and remediation tracking across your entire infrastructure.",
      icon: "search",
      color: "amber" as const,
      bullets: ["Automated scanning", "Risk prioritization", "Remediation tracking"],
    },
    {
      title: "Incident Response",
      description: "Automatically contain threats and execute response playbooks the moment an incident is detected.",
      icon: "zap",
      color: "teal" as const,
      bullets: ["Automated containment", "Playbook execution", "Real-time alerts"],
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automate build, test, and deploy pipelines with zero-downtime releases and instant rollback.",
      icon: "git-branch",
      color: "cyan" as const,
      bullets: ["Automated testing", "Zero-downtime deploys", "Rollback automation"],
    },
    {
      title: "AI Support Triage",
      description: "Automatically classify, route, and prioritize inbound support tickets using AI classification.",
      icon: "inbox",
      color: "mint" as const,
      bullets: ["Smart classification", "Auto-routing", "Priority scoring"],
    },
  ],
  cta: { label: "Explore All Automation Use Cases", href: "/services/security-compliance" },
};

export const ctaBanner = {
  heading: "Ready to Transform Your Business?",
  subtext:
    "Let's build something extraordinary together. Get a free consultation and discover how Staller Stack can accelerate your digital journey.",
  primaryCta: { label: "Get a Free Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
};
