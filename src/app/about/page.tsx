import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { StoryValues } from "@/components/sections/StoryValues";
import { StatsBar } from "@/components/sections/StatsBar";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: "About Us | Staller Stack",
  description:
    "Staller Stack is a full-service IT company helping startups, SMBs, and enterprises transform their digital landscape through web, cloud, cybersecurity, and AI expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        heading={aboutPage.heading}
        subtext={aboutPage.subtext}
      />
      <StoryValues />
      <StatsBar />
      <TeamGrid />
      <CtaBanner />
    </>
  );
}
