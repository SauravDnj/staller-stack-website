import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { StoryValues } from "@/components/sections/StoryValues";
import { FounderSpotlight } from "@/components/sections/FounderSpotlight";
import { StatsBar } from "@/components/sections/StatsBar";
import { MissionVision } from "@/components/sections/MissionVision";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { aboutPage } from "@/content/about";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "About Us | Staller Stack",
  description:
    "Staller Stack is a full-service IT company helping startups, SMBs, and enterprises transform their digital landscape through web, cloud, security, and AI expertise.",
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
      <FounderSpotlight />
      <StatsBar />
      <MissionVision />
      <WhyChooseUs />

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
              Get In Touch
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ss-text sm:text-3xl">
              Visit or Reach Us Directly
            </h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
                Office
              </p>
              <p className="mt-2 text-sm text-ss-text">{siteConfig.address}</p>
            </div>
            <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
                Phone
              </p>
              <p className="mt-2 text-sm text-ss-text">{siteConfig.phone}</p>
            </div>
            <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
                Email
              </p>
              <p className="mt-2 text-sm text-ss-text">{siteConfig.email}</p>
            </div>
            <div className="rounded-2xl border border-ss-border bg-ss-surface/60 p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">
                Hours
              </p>
              <p className="mt-2 text-sm text-ss-text">{siteConfig.hours}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
