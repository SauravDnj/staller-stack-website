export type Service = {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  icon: "code" | "cloud" | "shield" | "brain";
  process: { title: string; description: string }[];
  deliverables: string[];
  techStack: string[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "web-app-development",
    title: "Web & App Development",
    description:
      "Custom web applications, responsive websites, and cross-platform mobile apps — built with modern frameworks, pixel-perfect design, and performance at the core.",
    bullets: [
      "React, Next.js & Node.js",
      "Mobile-First Responsive Design",
      "REST & GraphQL API Integration",
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
          "Cross-browser/device testing, staged rollout, and full documentation handover to your team.",
      },
    ],
    deliverables: [
      "Production-ready web or mobile application",
      "Component library and design system",
      "API documentation",
      "Deployment runbooks",
      "30-day post-launch support window",
    ],
    techStack: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "PostgreSQL", "React Native"],
    faqs: [
      {
        question: "How long does a typical web or app build take?",
        answer:
          "Most engagements run 8–16 weeks depending on scope, with a working prototype ready in the first 2–3 weeks.",
      },
      {
        question: "Do you build both web and mobile from one codebase?",
        answer:
          "Where it makes sense — React Native lets us share logic across iOS, Android, and often the web, cutting build time without compromising native feel.",
      },
      {
        question: "What happens after launch?",
        answer:
          "Every project includes a 30-day support window, and we offer ongoing maintenance retainers after that.",
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
    techStack: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
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
    slug: "cybersecurity",
    title: "Cybersecurity",
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
    techStack: ["Burp Suite", "OWASP ZAP", "AWS GuardDuty", "Snyk", "HashiCorp Vault"],
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
    techStack: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "Kafka", "MLflow"],
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
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
