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

export const orbitNodes = [
  { name: "React", role: "Frontend Framework" },
  { name: "Next.js", role: "Full-Stack React" },
  { name: "AWS", role: "Cloud Infrastructure" },
  { name: "Docker", role: "Containerization" },
  { name: "K8s", role: "Orchestration" },
  { name: "Python", role: "AI & Backend" },
  { name: "GraphQL", role: "API Layer" },
  { name: "Terraform", role: "Infrastructure as Code" },
];
