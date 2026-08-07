export type AiGuideOption = {
  value: string;
  label: string;
  emoji?: string;
  service?: string;
  serviceHref?: string;
  urgent?: boolean;
  redirectToPlaybook?: boolean;
};

export const aiGuideCopy = {
  eyebrow: "Not Sure Where to Start?",
  headingPrefix: "Take the",
  headingHighlight: "AI Guide",
  subtext:
    "Answer a few quick questions and we'll recommend the right service, sketch out the engagement, and get you a straight answer — no sales pitch required.",
  badge: "AI-GUIDED",
  launcherLabel: "AI Guide",
  progressLabel: (step: number, total: number) => `Step ${step} of ${total}`,
  backLabel: "Back",
  restartLabel: "Start Over",
  submitLabel: "Get My Recommendation",
  loadingLabel: "Thinking it through…",
  downloadLabel: "Download Summary",
  talkLabel: "Talk to Us",
};

export const segmentOptions: AiGuideOption[] = [
  { value: "startup", label: "Startup / Founder", emoji: "🚀" },
  { value: "smb", label: "SMB / Growing Business", emoji: "🏢" },
  { value: "enterprise", label: "Enterprise", emoji: "🏛️" },
  { value: "msp", label: "IT Service Provider / MSP", emoji: "🛠️" },
  { value: "agency", label: "Agency (Building for a Client)", emoji: "🎨" },
];

export const goalOptions: AiGuideOption[] = [
  { value: "build-new", label: "Build something new (product, app, platform)" },
  { value: "modernize", label: "Modernize or scale an existing system" },
  { value: "automate-ai", label: "Automate work with AI / agents" },
  { value: "security", label: "Improve security or get compliant (SOC 2, ISO, etc.)" },
  { value: "managed", label: "Get ongoing IT support / managed services" },
  { value: "unsure", label: "Not sure yet — I need guidance" },
];

type DrillDown = {
  question: string;
  options: AiGuideOption[];
};

export const drillDownByGoal: Record<string, DrillDown> = {
  "build-new": {
    question: "What are you building?",
    options: [
      { value: "website", label: "Website / marketing site", service: "Web Development & Maintenance", serviceHref: "/services/web-development" },
      { value: "webapp", label: "Web application / SaaS product", service: "Software Development", serviceHref: "/services/software-development" },
      { value: "mobile", label: "Mobile app (iOS/Android)", service: "Mobile Application Development & Maintenance", serviceHref: "/services/mobile-app-development" },
      { value: "internal-tool", label: "Internal business tool", service: "Software Development", serviceHref: "/services/software-development" },
      { value: "crm", label: "CRM for my sales team", service: "CRM Custom Software", serviceHref: "/services/crm-custom-software" },
      { value: "erp", label: "ERP / finance-inventory-ops system", service: "ERP Custom Software", serviceHref: "/services/erp-custom-software" },
    ],
  },
  modernize: {
    question: "What needs upgrading?",
    options: [
      { value: "cloud-infra", label: "Cloud infrastructure / deployment pipeline", service: "Cloud & DevOps", serviceHref: "/services/cloud-devops" },
      { value: "legacy-rewrite", label: "Legacy software rewrite", service: "Software Development", serviceHref: "/services/software-development" },
      { value: "erp-crm-migration", label: "Old ERP/CRM migration", service: "ERP Custom Software", serviceHref: "/services/erp-custom-software" },
      { value: "webapp-perf", label: "Performance & security of existing web app", service: "Web Development & Maintenance", serviceHref: "/services/web-development" },
    ],
  },
  "automate-ai": {
    question: "What kind of automation?",
    options: [
      { value: "predictive", label: "Predictive analytics / forecasting on my data", service: "AI & ML Solutions", serviceHref: "/services/ai-ml-solutions" },
      { value: "ai-agent", label: "Custom AI agent / chatbot / internal copilot", service: "AI Agent & Model Training", serviceHref: "/services/ai-agent-model-training" },
      { value: "workflow", label: "Workflow automation (approvals, tickets, ops)", service: "AI Agent & Model Training", serviceHref: "/services/ai-agent-model-training" },
      { value: "not-sure-ai", label: "Not sure — I just know AI could help", redirectToPlaybook: true },
    ],
  },
  security: {
    question: "What's the priority?",
    options: [
      { value: "pentest", label: "Penetration testing / vulnerability assessment", service: "Security & Compliance", serviceHref: "/services/security-compliance" },
      { value: "certification", label: "SOC 2 / ISO 27001 certification prep", service: "Security & Compliance", serviceHref: "/services/security-compliance" },
      { value: "zero-trust", label: "Zero-trust architecture / access management", service: "Security & Compliance", serviceHref: "/services/security-compliance" },
      { value: "incident", label: "Just had an incident, need help now", service: "Security & Compliance", serviceHref: "/services/security-compliance", urgent: true },
    ],
  },
  unsure: {
    question: "Which of these sounds closest to your situation?",
    options: [
      { value: "too-many-tickets", label: "We get too many support tickets", service: "AI Agent & Model Training", serviceHref: "/services/ai-agent-model-training" },
      { value: "app-slow", label: "Our app is slow or hard to maintain", service: "Web Development & Maintenance", serviceHref: "/services/web-development" },
      { value: "want-chatbot", label: "We want an AI chatbot or internal copilot", service: "AI Agent & Model Training", serviceHref: "/services/ai-agent-model-training" },
    ],
  },
};

export const managedServiceRouting = {
  msp: { service: "Managed Mode / Multi-Tenant Console", serviceHref: "/#managed-mode" },
  enterprise: { service: "Managed Mode / Multi-Tenant Console", serviceHref: "/#managed-mode" },
  startup: { service: "Ongoing Support & Optimization", serviceHref: "/contact" },
  smb: { service: "Ongoing Support & Optimization", serviceHref: "/contact" },
  agency: { service: "Ongoing Support & Optimization", serviceHref: "/contact" },
};

export const stageOptions: AiGuideOption[] = [
  { value: "idea", label: "Just an idea — need a plan" },
  { value: "requirements", label: "Have requirements, ready to build" },
  { value: "existing-system", label: "Existing product/system that needs work" },
  { value: "extra-capacity", label: "Have a dev team, need extra capacity" },
];

export const timelineOptions: AiGuideOption[] = [
  { value: "asap", label: "ASAP / within 2 weeks" },
  { value: "1-3-months", label: "Within 1–3 months" },
  { value: "3-6-months", label: "3–6 months out" },
  { value: "exploring", label: "Just exploring options" },
];

export const budgetOptions: AiGuideOption[] = [
  { value: "under-10k", label: "Under $10K" },
  { value: "10k-50k", label: "$10K – $50K" },
  { value: "50k-150k", label: "$50K – $150K" },
  { value: "150k-plus", label: "$150K+" },
  { value: "not-sure", label: "Not sure / need guidance" },
];

export const teamSizeOptions: AiGuideOption[] = [
  { value: "1-5", label: "Solo / 1–5 people" },
  { value: "6-50", label: "6–50 people" },
  { value: "51-500", label: "51–500 people" },
  { value: "500-plus", label: "500+ (Enterprise)" },
];

export const AI_GUIDE_TOTAL_STEPS = 9;
