export type HireRole = {
  slug: string;
  title: string;
  description: string;
  icon: "code" | "cloud" | "shield" | "brain" | "cpu" | "smartphone" | "layers" | "database" | "users";
  skills: string[];
  highlights: string[];
};

export const hireRoles: HireRole[] = [
  {
    slug: "ai-ml-engineers",
    title: "AI & ML Engineers",
    description:
      "Data scientists and ML engineers who ship production models, not just notebooks — predictive analytics, NLP, and computer vision.",
    icon: "brain",
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "AWS"],
    highlights: [
      "Production model deployment",
      "MLOps & retraining pipelines",
      "Data pipeline engineering",
    ],
  },
  {
    slug: "full-stack-developers",
    title: "Full-Stack Developers",
    description:
      "End-to-end engineers comfortable across React/Next.js frontends and Node.js/Python backends who own a feature from database to deploy.",
    icon: "code",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "GraphQL"],
    highlights: [
      "Feature ownership end-to-end",
      "API design & integration",
      "Performance-first builds",
    ],
  },
  {
    slug: "mobile-app-developers",
    title: "Mobile App Developers",
    description:
      "iOS, Android, and cross-platform engineers who ship app-store-quality apps and keep them running through OS updates.",
    icon: "smartphone",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    highlights: [
      "App Store & Play Store launches",
      "Native performance tuning",
      "Cross-platform architecture",
    ],
  },
  {
    slug: "cloud-devops-engineers",
    title: "Cloud & DevOps Engineers",
    description:
      "Infrastructure engineers who build CI/CD pipelines, automate deployments, and keep production resilient at scale.",
    icon: "cloud",
    skills: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "Prometheus"],
    highlights: [
      "Infrastructure as code",
      "Zero-downtime deployments",
      "24/7 monitoring setup",
    ],
  },
  {
    slug: "backend-developers",
    title: "Backend Developers",
    description:
      "Server-side engineers focused on scalable APIs, database design, and systems that hold up under real production load.",
    icon: "database",
    skills: ["Node.js", "Python", ".NET", "PostgreSQL", "Redis", "Docker"],
    highlights: [
      "Scalable API architecture",
      "Database design & optimization",
      "Systems integration",
    ],
  },
  {
    slug: "frontend-developers",
    title: "Frontend Developers",
    description:
      "UI engineers who turn designs into pixel-perfect, accessible, high-performance interfaces across web and admin platforms.",
    icon: "layers",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Figma"],
    highlights: [
      "Pixel-perfect implementation",
      "Accessibility & performance",
      "Design system building",
    ],
  },
  {
    slug: "qa-automation-engineers",
    title: "QA & Automation Engineers",
    description:
      "Quality engineers who build automated test suites and catch regressions before your users do.",
    icon: "shield",
    skills: ["Cypress", "Jest", "Selenium", "Appium", "Postman", "JMeter"],
    highlights: [
      "Automated regression suites",
      "CI-integrated testing",
      "Load & performance testing",
    ],
  },
];

export const hireDevelopersPage = {
  eyebrow: "Staff Augmentation",
  heading: "Hire Vetted Developers, Embedded in Your Team.",
  subtext:
    "Skip the months-long hiring cycle. Add senior engineers to your team in days — dedicated, accountable, and managed by us so you can stay focused on the product.",
  stats: [
    { label: "Developers Vetted", value: "150+" },
    { label: "Avg. Match Time", value: "5 days" },
    { label: "Engagement Retention", value: "92%" },
    { label: "Time Zones Covered", value: "Global" },
  ],
  process: [
    {
      title: "Share Requirements",
      description:
        "Tell us the role, stack, and team fit you need — no lengthy RFP or job posting required.",
    },
    {
      title: "Meet Vetted Candidates",
      description:
        "We shortlist pre-vetted engineers matched to your requirements within days, not weeks.",
    },
    {
      title: "Interview & Trial",
      description:
        "Talk to candidates directly and start with a paid trial period if you want extra confidence.",
    },
    {
      title: "Onboard & Scale",
      description:
        "Your hire joins your workflow and tools — add more developers anytime as scope grows.",
    },
  ],
  engagementModel: [
    {
      title: "Dedicated Hire",
      description:
        "A full-time engineer embedded in your team, working your hours and reporting to your leads.",
    },
    {
      title: "Team Augmentation",
      description:
        "Add one or more specialists to an existing team to cover a skills gap or accelerate a deadline.",
    },
    {
      title: "Project-Based Team",
      description:
        "A fully staffed, managed team delivering a defined project scope, timeline, and budget.",
    },
  ],
  faqs: [
    {
      question: "How fast can a developer start?",
      answer:
        "Most roles are matched within 3-5 business days, with the developer able to start the following week.",
    },
    {
      question: "Are developers full-time and dedicated to us?",
      answer:
        "Yes — dedicated hires work exclusively on your team during agreed hours, not split across multiple clients.",
    },
    {
      question: "What if the developer isn't the right fit?",
      answer:
        "We offer a replacement guarantee during the initial trial period — if it's not working, we find a better match at no extra cost.",
    },
    {
      question: "Can we hire more than one role at a time?",
      answer:
        "Yes — many clients start with one role and scale up a small embedded team as needs grow.",
    },
    {
      question: "Do hires work in our timezone?",
      answer:
        "We match for timezone overlap as a standard part of the process, so daily standups and reviews aren't a scheduling problem.",
    },
    {
      question: "What's the minimum engagement length?",
      answer:
        "Most engagements start at one month with no long-term lock-in — extend, scale, or wind down on a month's notice.",
    },
  ],
};
