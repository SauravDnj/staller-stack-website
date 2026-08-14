import { siteConfig } from "@/content/siteConfig";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { allAiOfferings } from "@/content/aiOfferings";
import { projects } from "@/content/portfolio";
import { teamMembers } from "@/content/team";
import { pricingPlans, pricingFaqs } from "@/content/pricing";
import { generalFaqs } from "@/content/faq";
import {
  segmentOptions,
  goalOptions,
  drillDownByGoal,
} from "@/content/aiGuide";
import { aiGuideInternalSpec } from "@/content/aiGuideSpec";

function section(title: string, body: string) {
  return `## ${title}\n${body.trim()}\n`;
}

export function buildKnowledgeBase(): string {
  const company = section(
    "Company",
    `${siteConfig.name} — ${siteConfig.tagline}. ${siteConfig.description}
Contact: ${siteConfig.email} | ${siteConfig.phone} | ${siteConfig.address}
Hours: ${siteConfig.hours}
Badges: ${siteConfig.badges.join(", ")}`,
  );

  const servicesText = section(
    "Services",
    services
      .map(
        (s) =>
          `- ${s.title} (/services/${s.slug}): ${s.description} Key capabilities: ${s.bullets.join("; ")}.`,
      )
      .join("\n"),
  );

  const industriesText = section(
    "Industries Served",
    industries
      .map(
        (i) =>
          `- ${i.name}: ${i.description} Common challenges: ${i.challenges.join("; ")}. How we help: ${i.solutions.join("; ")}.`,
      )
      .join("\n"),
  );

  const aiOfferingsText = section(
    "AI Offerings Catalog (Build With AI)",
    allAiOfferings.map((o) => `- ${o.name} (/build-with-ai/${o.slug}): ${o.description}`).join("\n"),
  );

  const portfolioText = section(
    "Portfolio / Case Studies",
    projects
      .map((p) => {
        const client = p.client && p.timeline ? ` for ${p.client} (${p.timeline})` : "";
        const results = p.results?.length
          ? ` Results: ${p.results.map((r) => `${r.label} ${r.value}`).join(", ")}.`
          : "";
        return `- ${p.title}${client}: ${p.description}${results}`;
      })
      .join("\n"),
  );

  const teamText = section(
    "Team",
    teamMembers.map((t) => `- ${t.name} — ${t.role}`).join("\n"),
  );

  const pricingText = section(
    "Pricing Plans",
    pricingPlans
      .map((p) => `- ${p.name} (${p.price}/mo) — ${p.tagline}. Includes: ${p.features.join("; ")}.`)
      .join("\n") +
      "\n\nPricing FAQs:\n" +
      pricingFaqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n"),
  );

  const faqText = section(
    "General FAQs",
    generalFaqs.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n"),
  );

  const aiGuideText = section(
    "The AI Guide (on-site wizard)",
    `The site has an "AI Guide" — a guided questionnaire visitors can take (accessible via the floating AI Guide button or the homepage) that recommends a service based on their situation.
Segments it asks about: ${segmentOptions.map((s) => s.label).join(", ")}.
Goals it asks about: ${goalOptions.map((g) => g.label).join(", ")}.
Example routing: ${Object.entries(drillDownByGoal)
      .map(([goal, d]) => `for "${goal}" it asks "${d.question}"`)
      .join("; ")}.
If a visitor seems unsure what they need, suggest they try the AI Guide.`,
  );

  return [
    company,
    servicesText,
    industriesText,
    aiOfferingsText,
    portfolioText,
    teamText,
    pricingText,
    faqText,
    aiGuideText,
    section("Internal Reference (background context only — see system instructions)", aiGuideInternalSpec),
  ].join("\n");
}
