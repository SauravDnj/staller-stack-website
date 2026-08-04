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
    { text: "}", holdMs: 2400 },
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
    "CyberPulse",
    "AppVault",
    "InnoStack",
    "ScaleOps",
  ],
};

export const aboutStats = {
  eyebrow: "Get to Know Us",
  heading: "Driving Excellence & Innovation: Your Trusted Technology Partner.",
  paragraph:
    "Staller Stack is a full-service IT solutions company helping startups, SMBs, and enterprises transform their digital landscape. With deep expertise across web development, cloud architecture, cybersecurity, and artificial intelligence, we don't just build software — we engineer growth. Founded with a mission to make enterprise-grade technology accessible, our team of 50+ engineers, architects, and strategists has delivered 500+ successful projects across 15 countries.",
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

export const ctaBanner = {
  heading: "Ready to Transform Your Business?",
  subtext:
    "Let's build something extraordinary together. Get a free consultation and discover how Staller Stack can accelerate your digital journey.",
  primaryCta: { label: "Get a Free Consultation", href: "/contact" },
  secondaryCta: { label: "View Our Work", href: "/portfolio" },
};
