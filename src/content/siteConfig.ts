export const siteConfig = {
  name: "Staller Stack",
  tagline: "Business Solutions",
  shortPitch: "Smart Tech. Solid Stack.",
  description:
    "Staller Stack is a full-service IT company delivering world-class web development, cloud solutions, cybersecurity, and AI innovation to businesses worldwide.",
  url: "https://stallerstack.com",
  email: "hello@stallerstack.com",
  phone: "+91 (22) 4856-7890",
  address: "42 Tech Park, Andheri East, Mumbai, Maharashtra 400069, India",
  hours: "Mon–Fri 10:00 AM – 7:00 PM IST",
  badges: ["ISO 27001 Certified", "AWS Partner"],
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export type MegaMenuKey = "services" | "industry" | "about";

export type PrimaryNavEntry =
  | { type: "link"; label: string; href: string }
  | { type: "mega"; label: string; key: MegaMenuKey };

export const primaryNav: PrimaryNavEntry[] = [
  { type: "link", label: "Home", href: "/" },
  { type: "mega", label: "Services", key: "services" },
  { type: "mega", label: "Industry", key: "industry" },
  { type: "mega", label: "About Us", key: "about" },
  { type: "link", label: "Portfolio", href: "/portfolio" },
];

export const headerCta: NavItem = { label: "Let's Talk", href: "/contact" };

export const footerServiceLinks: NavItem[] = [
  { label: "Web & App Development", href: "/services/web-app-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Cybersecurity", href: "/services/cybersecurity" },
  { label: "AI & ML Solutions", href: "/services/ai-ml-solutions" },
];

export const footerCompanyLinks: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "FAQ", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const socialLinks: NavItem[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter / X", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
];

export const marqueeKeywords = [
  "Innovation",
  "Technology",
  "Growth",
  "Security",
  "Intelligence",
  "Scale",
  "Cloud",
  "AI",
];
