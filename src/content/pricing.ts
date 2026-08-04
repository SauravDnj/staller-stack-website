export type PricingPlan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const pricingFaqs = [
  {
    question: "Can I switch plans as my needs change?",
    answer:
      "Yes — you can move up or down a tier at any time. We'll prorate the difference and adjust your active project allocation accordingly.",
  },
  {
    question: "What if my project doesn't fit a monthly retainer?",
    answer:
      "Most of our engagements start as fixed-scope projects and move to a retainer once we're in an ongoing build-and-support relationship. Tell us about your project on the contact page and we'll scope it properly instead of forcing it into a plan.",
  },
  {
    question: "Is there a setup or onboarding fee?",
    answer:
      "No hidden setup fees. Your first month covers onboarding, environment access, and kickoff planning alongside regular delivery work.",
  },
  {
    question: "What happens if I need more than the Enterprise plan offers?",
    answer:
      "We scope a custom engagement — dedicated pods, extended compliance work, or multi-year infrastructure programs — priced around your specific requirements.",
  },
  {
    question: "Can I cancel or pause a plan?",
    answer:
      "Plans run month-to-month with no long-term lock-in. Give us 30 days' notice and we'll hand off cleanly with full documentation.",
  },
] as const;

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹49,999",
    tagline: "Essential Technology Services",
    features: [
      "Up to 2 active projects",
      "Standard cloud hosting support",
      "Email support (business hours)",
      "Monthly progress reports",
      "Basic security audit (annual)",
      "Access to shared dev resources",
    ],
  },
  {
    name: "Growth",
    price: "₹1,49,999",
    tagline: "Complete Business Solutions",
    badge: "Popular",
    highlighted: true,
    features: [
      "All features in Starter Plan",
      "Up to 5 active projects",
      "Priority support (12-hour SLA)",
      "CI/CD pipeline management",
      "Dedicated project manager",
      "Quarterly security reviews",
    ],
  },
  {
    name: "Enterprise",
    price: "₹3,99,999",
    tagline: "Advanced Technology Partnership",
    features: [
      "All features in Growth Plan",
      "Unlimited active projects",
      "Dedicated engineering squad",
      "24/7 priority support",
      "Custom AI/ML model development",
      "Full compliance & audit program",
    ],
  },
];
