export type Industry = {
  slug: string;
  name: string;
  description: string;
  icon:
    | "healthcare"
    | "fintech"
    | "ecommerce"
    | "education"
    | "realestate"
    | "logistics"
    | "manufacturing"
    | "travel"
    | "saas";
  challenges: string[];
  solutions: string[];
  relatedServiceSlugs: string[];
};

export const industries: Industry[] = [
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
    relatedServiceSlugs: ["web-development", "cloud-devops", "ai-ml-solutions"],
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
    relatedServiceSlugs: ["web-development", "cloud-devops"],
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
    relatedServiceSlugs: ["ai-ml-solutions", "cloud-devops", "web-development"],
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
    relatedServiceSlugs: ["web-development", "cloud-devops", "ai-ml-solutions"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
