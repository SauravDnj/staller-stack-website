import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { CaseStudyList } from "@/components/sections/CaseStudyList";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Portfolio | Staller Stack",
  description:
    "Real projects, real outcomes — explore how Staller Stack has helped enterprises migrate to the cloud, detect fraud with AI, and ship secure fintech products.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proud Projects"
        heading="Breaking Boundaries, Building Solutions."
        subtext="A selection of engagements where we turned ambitious requirements into measurable business outcomes."
      />
      <CaseStudyList />
      <CtaBanner />
    </>
  );
}
