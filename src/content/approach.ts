export type ApproachTab = {
  key: "unify" | "automate" | "scale";
  label: string;
  heading: string;
  description: string;
  stat: { value: string; label: string };
  features: string[];
};

export const approachTabs: ApproachTab[] = [
  {
    key: "unify",
    label: "Unify",
    heading: "Connect Your Entire Stack",
    description:
      "One platform to integrate every tool, framework, and cloud service your business relies on — no more duct-taped systems or data silos.",
    stat: { value: "20+", label: "Technologies Unified" },
    features: [
      "Single source of truth across teams",
      "Real-time data sync across platforms",
      "Zero vendor lock-in architecture",
    ],
  },
  {
    key: "automate",
    label: "Automate",
    heading: "AI-Powered Automation",
    description:
      "Machine learning handles the repetitive work — from CI/CD pipelines to threat detection — so your team can focus on what actually moves the business forward.",
    stat: { value: "90%", label: "Less Manual Work" },
    features: [
      "Intelligent workflow orchestration",
      "Predictive scaling & monitoring",
      "Human-in-the-loop oversight",
    ],
  },
  {
    key: "scale",
    label: "Scale",
    heading: "Grow Without Limits",
    description:
      "Infrastructure and architecture built to handle 10x growth from day one — so scaling up never means starting over.",
    stat: { value: "10x", label: "Faster Time to Market" },
    features: [
      "Cloud-native, auto-scaling infrastructure",
      "Modular architecture for rapid iteration",
      "24/7 monitoring & support",
    ],
  },
];

export type OrbitNode = { name: string; role: string; icon: string };

/** Each tab drives its own ring of technologies, so the diagram actually changes with the selected approach. */
export const orbitNodesByTab: Record<ApproachTab["key"], OrbitNode[]> = {
  unify: [
    { name: "React", role: "Frontend Framework", icon: "react" },
    { name: "Next.js", role: "Full-Stack Framework", icon: "nextdotjs" },
    { name: "Node.js", role: "Backend Runtime", icon: "nodedotjs" },
    { name: "GraphQL", role: "Unified API Layer", icon: "graphql" },
    { name: "PostgreSQL", role: "Single Source of Truth", icon: "postgresql" },
    { name: "TypeScript", role: "Shared Type Safety", icon: "typescript" },
  ],
  automate: [
    { name: "Python", role: "AI & ML Pipelines", icon: "python" },
    { name: "TensorFlow", role: "Model Training", icon: "tensorflow" },
    { name: "Docker", role: "Containerized Builds", icon: "docker" },
    { name: "GitHub Actions", role: "CI/CD Pipelines", icon: "githubactions" },
    { name: "Jenkins", role: "Workflow Orchestration", icon: "jenkins" },
    { name: "Terraform", role: "Infrastructure as Code", icon: "terraform" },
  ],
  scale: [
    { name: "Kubernetes", role: "Auto-Scaling Orchestration", icon: "kubernetes" },
    { name: "AWS", role: "Global Cloud Infrastructure", icon: "amazonaws" },
    { name: "Google Cloud", role: "Multi-Cloud Resilience", icon: "googlecloud" },
    { name: "Redis", role: "High-Speed Caching", icon: "redis" },
    { name: "Prometheus", role: "Real-Time Monitoring", icon: "prometheus" },
    { name: "Grafana", role: "24/7 Observability", icon: "grafana" },
  ],
};
