export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  client: string;
  timeline: string;
  industrySlug: string;
  techStack: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "enterprise-cloud-migration-platform",
    category: "Cloud & DevOps",
    title: "Enterprise Cloud Migration Platform",
    description:
      "Migrated a 200+ microservices architecture from on-premise to AWS for a Fortune 500 logistics company, achieving 40% cost reduction and 99.99% uptime.",
    image: "/images/stallerstack/portfolio/cloud-migration.webp",
    client: "Fortune 500 Logistics Provider",
    timeline: "8 months",
    industrySlug: "logistics-supply-chain",
    techStack: ["AWS", "Kubernetes", "Terraform", "Docker", "PostgreSQL"],
    challenge:
      "The client's 200+ microservices ran on aging on-premise hardware with no auto-scaling, manual deployments, and increasingly frequent outages during peak shipping seasons.",
    solution:
      "We designed a phased, zero-downtime migration to AWS using infrastructure-as-code, containerized every service with Kubernetes, and built CI/CD pipelines so deployments went from days to minutes.",
    results: [
      { label: "Cost Reduction", value: "40%" },
      { label: "Uptime", value: "99.99%" },
      { label: "Deploy Time", value: "Days → Minutes" },
      { label: "Microservices Migrated", value: "200+" },
    ],
  },
  {
    slug: "ai-powered-fraud-detection-system",
    category: "AI / ML",
    title: "AI-Powered Fraud Detection System",
    description:
      "Built a real-time fraud detection engine processing 2M+ transactions daily using ensemble ML models, reducing false positives by 65%.",
    image: "/images/stallerstack/portfolio/fraud-detection.webp",
    client: "Digital Payments Platform",
    timeline: "5 months",
    industrySlug: "fintech-banking",
    techStack: ["Python", "TensorFlow", "Kafka", "AWS SageMaker", "GraphQL"],
    challenge:
      "The client's rule-based fraud system flagged far too many legitimate transactions, frustrating customers and burying the fraud team in manual reviews.",
    solution:
      "We built an ensemble of gradient-boosted and neural network models trained on historical transaction patterns, deployed behind a low-latency streaming pipeline that scores transactions in under 100ms.",
    results: [
      { label: "False Positives", value: "-65%" },
      { label: "Daily Transactions Scored", value: "2M+" },
      { label: "Scoring Latency", value: "<100ms" },
      { label: "Fraud Caught", value: "+38%" },
    ],
  },
  {
    slug: "secure-banking-mobile-app",
    category: "Cybersecurity",
    title: "Secure Banking Mobile App",
    description:
      "Developed a PCI-DSS compliant mobile banking application with biometric authentication, end-to-end encryption, and real-time threat monitoring for 500K+ users.",
    image: "/images/stallerstack/portfolio/secure-banking.webp",
    client: "Regional Retail Bank",
    timeline: "10 months",
    industrySlug: "fintech-banking",
    techStack: ["React Native", "Node.js", "AWS KMS", "PostgreSQL", "Auth0"],
    challenge:
      "The bank needed a mobile-first banking experience that met PCI-DSS requirements while still feeling fast and modern to a user base migrating away from branch banking.",
    solution:
      "We built a React Native app with biometric login, end-to-end encrypted messaging for support, and a real-time threat-monitoring layer that flags anomalous device or location activity before a session completes.",
    results: [
      { label: "Active Users", value: "500K+" },
      { label: "Compliance", value: "PCI-DSS Certified" },
      { label: "App Store Rating", value: "4.8/5" },
      { label: "Support Tickets", value: "-30%" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
