export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  client?: string;
  timeline?: string;
  industrySlug?: string;
  challenge?: string;
  solution?: string;
  results?: { label: string; value: string }[];
  purpose?: string;
  functionality?: string;
  keyFeatures?: string[];
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
    category: "Security & Compliance",
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
  {
    slug: "ecobuild-backend",
    category: "SaaS Admin Dashboard",
    title: "Ecobuild Backend",
    description:
      "A responsive operations dashboard for tracking earnings, orders, and income with real-time charts, a reusable UI component library, and full mobile-to-desktop coverage.",
    image: "/images/project/ecobuild-backend.jpg",
    techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "Chart.js"],
    industrySlug: "saas-startups",
    purpose:
      "Ecobuild Backend is the internal operations console behind the product — the single screen where the team checks earnings, orders, and income without digging through spreadsheets or waiting on a weekly report. Every number that matters to day-to-day decisions — total earnings, order volume, income broken down by month or year — surfaces the moment someone opens the dashboard, instead of living scattered across a dozen disconnected tools.\n\nBeyond reporting, it doubles as a reusable UI foundation for the rest of the product. Every new screen the team ships — a form, a data table, a map view, a settings page — is assembled from the same shared component library rather than built from scratch, so the interface stays visually consistent and new features ship faster as the platform grows.",
    functionality:
      "On login, users land on a dashboard summarizing total earnings, orders, and income, with a month/year toggle for quick comparisons. A growth chart tracks performance over time, and a popular-items widget highlights top performers. The collapsible sidebar organizes the rest of the system — data tables, forms, cards, maps, and charts — into clearly labeled sections so new modules slot in without cluttering the main navigation.",
    keyFeatures: [
      "At-a-glance stat cards for total earnings, orders, and income (monthly & yearly toggle)",
      "Total growth and popular items trend charts on the dashboard home",
      "Modular sidebar with forms, data tables, cards, maps, and chart building blocks",
      "Collapsible navigation with nested menus for scaling to new sections",
      "Consistent design system so every new screen matches the rest of the product",
      "Fully responsive layout — identical functionality on laptop, tablet, and phone",
    ],
  },
  {
    slug: "instacare",
    category: "Healthcare Workforce Platform",
    title: "InstaCare",
    description:
      "A shift marketplace and scheduling platform connecting care facilities with nursing staff — covering open-shift browsing, live clock-in tracking, and facility-side workforce dashboards.",
    image: "/images/project/instacare.jpg",
    techStack: ["React", "Node.js", "Socket.IO", "Firebase", "Expo"],
    industrySlug: "healthcare",
    purpose:
      "InstaCare solves the daily headache of healthcare staffing: getting the right CNA, LPN, or RN into an open shift before it goes unfilled. Care facilities post shifts with pay rates, hours, and cancellation guarantees, and nursing staff browse and claim them from a mobile marketplace the moment they go live — no phone tag with a scheduling coordinator required.\n\nOn the facility side, managers get a live view of the floor: who's clocked in, who's running late, which shifts are still open, and which have already been filled or cancelled. That visibility turns staffing from a reactive scramble into something a single dashboard can manage, even across multiple care centers running shifts around the clock.",
    functionality:
      "Staff open the marketplace, filter shifts by date and location, and claim one directly from their phone. Facility managers watch the \"Who's On\" board update in real time as people clock in and out, track the day's shift pipeline from open through completed, and pull from a directory of available employees filtered by role and time window when a last-minute gap needs filling.",
    keyFeatures: [
      "Mobile shift marketplace with facility name, pay rate, hours, and distance",
      "Live \"Who's On\" board showing real-time clock-in / clock-out status",
      "Shift pipeline tracking — open, confirmed, in progress, completed, call-offs, cancellations, late arrivals",
      "Available-employee directory filterable by role (CNA, LPN, RN) and shift window",
      "Facility news feed and team reminders alongside the daily shift count",
      "Built for multi-facility operators managing several care centers at once",
    ],
  },
  {
    slug: "milagros-jewelry",
    category: "E-Commerce",
    title: "Milagros Jewelry",
    description:
      "A fine-jewelry storefront built around a natural-diamond catalog and a step-by-step custom ring designer, with full category navigation and price/shape filtering.",
    image: "/images/project/milagros-jewelry.jpg",
    techStack: ["Next.js", "React", "Tailwind CSS", "Stripe", "Shopify"],
    industrySlug: "ecommerce-retail",
    purpose:
      "Milagros Jewelry needed a storefront that could sell both off-the-shelf pieces and fully custom engagement rings without splitting the experience into two separate sites. Shoppers browsing necklaces, earrings, or bracelets and shoppers designing a one-of-a-kind ring move through the same catalog, the same navigation, and the same checkout.\n\nThe custom ring designer is the centerpiece: a guided, step-by-step flow that walks a shopper from diamond shape through setting, metal, and final price — turning what's usually an in-store, appointment-only process into something anyone can do from their phone in a few minutes.",
    functionality:
      "Shoppers land on a mega-navigation covering diamonds, engagement rings, wedding bands, jewelry categories, and buying-guide content, with filters to sort the catalog by price or shape. The ring designer runs as its own guided flow — pick a shape, choose a setting, select a metal, and watch the price update live — before adding the finished design straight to cart alongside any ready-made piece.",
    keyFeatures: [
      "Step-by-step custom ring designer — shape, setting, metal, and price range",
      "Mega-navigation across diamonds, engagement rings, wedding bands, gemstones, and education content",
      "Product grid with price/shape sort and filter controls",
      "Site-wide promotional banner for time-limited offers",
      "Wishlist, account, and cart access from every page",
      "Fully responsive storefront across desktop, tablet, and mobile",
    ],
  },
  {
    slug: "my-homes-ng",
    category: "Real Estate Marketplace",
    title: "My Homes NG",
    description:
      "A property rental marketplace with flexible lease types, a check-in/check-out booking flow, interactive map search, and 360° virtual tours.",
    image: "/images/project/my-homes-ng.jpg",
    techStack: ["Next.js", "React", "Google Maps", "Node.js", "PostgreSQL"],
    industrySlug: "real-estate",
    purpose:
      "My Homes NG helps renters find and book a home without the back-and-forth typical of listing sites. Instead of emailing an agent and waiting days for an availability answer, renters search by dates and guest count, filter by lease type, and see what's actually bookable right now.\n\nThe lease-type filtering — short let, medium lease, long lease, or rent financing — reflects how renters in the Nigerian market actually shop, where a short stay and a year-long lease are fundamentally different transactions. Map search and 360° tours let renters shortlist properties with confidence before ever scheduling an in-person visit.",
    functionality:
      "Renters enter check-in/check-out dates and guest count, browse results on an interactive map or in a scrollable grid, and reserve a property directly against its live availability calendar. Each listing supports a 360° virtual tour, so a renter can walk through the space remotely before committing to a viewing or a booking.",
    keyFeatures: [
      "Search and reserve flow with check-in/check-out dates and guest count",
      "Flexible listing types — short let, medium lease, long lease, and rent financing",
      "Live availability calendar per property with direct reservation",
      "Interactive map search with neighborhood pins",
      "360° virtual tours for remote property walkthroughs",
      "Responsive property grid with pricing and ratings across desktop, tablet, and mobile",
    ],
  },
  {
    slug: "school-breeze",
    category: "Education SaaS",
    title: "School Breeze",
    description:
      "An all-in-one school and music-academy management platform — scheduling, CRM, billing, and an AI assistant on the admin side, with a companion student mobile app.",
    image: "/images/project/school-breeze.jpg",
    techStack: ["React", "Node.js", "PostgreSQL", "Expo", "TypeScript"],
    industrySlug: "education",
    purpose:
      "School Breeze gives small schools and academies the back office a much bigger institution would have. A \"mission control\" dashboard surfaces revenue, active students, and this week's lesson count the moment an admin logs in, instead of piecing that picture together from a calendar app, a spreadsheet, and a group chat.\n\nThe same dashboard doubles as a triage list — reschedule requests, unread parent messages, and new inquiries all land in one priority queue, so nothing sits unanswered. Students and parents get their own companion app, so lesson schedules, practice goals, and homework don't have to be relayed secondhand through a teacher.",
    functionality:
      "Admins see revenue, active students, and weekly lessons on login, work through a priority queue of reschedules and messages, and track a pipeline of new inquiries, scheduled consults, and trial follow-ups through to enrollment. On the student side, the mobile app surfaces the next lesson, a practice-goal tracker, pending homework, and school announcements in one place.",
    keyFeatures: [
      "Mission control dashboard — revenue, active students, and weekly lesson counts at a glance",
      "Priority queue surfacing reschedule requests, inbox messages, and pending replies",
      "Built-in CRM and pipeline view for new inquiries, scheduled consults, and trial follow-ups",
      "Ask Breeze AI assistant for quick answers inside the admin panel",
      "Student mobile app with upcoming lessons, practice-goal tracking, homework, and announcements",
      "Financials and automations to handle billing without manual follow-up",
    ],
  },
  {
    slug: "view-park",
    category: "Parking Management",
    title: "View Park",
    description:
      "A multi-lot parking management system for tracking live occupancy, subscribers, and entrances, with a companion mobile app for on-site staff.",
    image: "/images/project/view-park.jpg",
    techStack: ["React", "Node.js", "Socket.IO", "PostgreSQL", "Expo"],
    industrySlug: "saas-startups",
    purpose:
      "View Park gives parking operators one place to see what's happening across every lot they manage — how full each one is right now, how many exceptions or unusual entries need attention, and who holds an active subscription. Instead of a manager physically checking each lot or waiting on an end-of-day report, occupancy and activity update live on a single screen.\n\nField staff carry the mobile companion app to work the floor: looking up a subscriber by license plate, managing a contract on the spot, or checking a transit record without radioing back to the office. Multi-lot support means a single operator can run this across an entire portfolio of locations from one account.",
    functionality:
      "The dashboard shows live occupancy, active/exception/entrance counts, and a historical trend chart per lot, with individual occupancy sliders for operators managing several locations at once. The mobile app mirrors the parts field staff need most — subscriber lookup by plate number, contract management, transit history, and coupons — so lot-level work never requires going back to a desktop.",
    keyFeatures: [
      "Live occupancy tracking per lot with historical trend charts",
      "Active / exceptions / entrances counters updated in real time",
      "Subscriber and contract management with license-plate search",
      "Multi-lot support with individual occupancy sliders per location",
      "Mobile companion app for on-site staff — subscribers, transits, coupons, and contracts",
      "Built to scale from a single lot to a multi-location parking portfolio",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
