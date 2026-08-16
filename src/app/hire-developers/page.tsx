import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { TiltCard } from "@/components/ui/TiltCard";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { PageHeader } from "@/components/sections/PageHeader";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { EngagementModel } from "@/components/sections/EngagementModel";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { hireDevelopersPage, hireRoles } from "@/content/hireDevelopers";
import { ACCENT_CLASSES } from "@/lib/accentTheme";
import type { AccentKey } from "@/content/services";

export const metadata: Metadata = {
  title: "Hire Developers | Staller Stack",
  description:
    "Hire vetted AI/ML, full-stack, mobile, cloud, backend, frontend, and QA engineers — dedicated or team-augmented, matched to your stack in days.",
};

const ROLE_ACCENTS: AccentKey[] = ["teal", "cyan", "mint", "blue", "indigo", "amber", "teal"];

export default function HireDevelopersPage() {
  return (
    <>
      <PageHeader
        eyebrow={hireDevelopersPage.eyebrow}
        heading={hireDevelopersPage.heading}
        subtext={hireDevelopersPage.subtext}
      />

      <StatsStrip stats={hireDevelopersPage.stats} accent="teal" />

      <section className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Roles You Can Hire
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ss-muted">
              Every engineer is vetted for both technical depth and communication — ready to
              join your standups from week one.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hireRoles.map((role, index) => {
              const accent = ROLE_ACCENTS[index % ROLE_ACCENTS.length];
              const accentClasses = ACCENT_CLASSES[accent];
              return (
                <RevealItem key={role.title}>
                  <div id={role.slug} className="h-full scroll-mt-28">
                  <TiltCard className="h-full" accent={accent}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                      <SpinningIcon>
                        <ServiceIcon icon={role.icon} />
                      </SpinningIcon>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold text-ss-text">
                      {role.title}
                    </h3>
                    <p className="mt-3 text-sm text-ss-muted">{role.description}</p>
                    <ul className="mt-6 flex flex-col gap-2">
                      {role.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-ss-muted"
                        >
                          <span className={`h-1 w-1 rounded-full ${accentClasses.dot}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2 border-t border-ss-border pt-5">
                      {role.skills.map((skill) => (
                        <span
                          key={skill}
                          className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-base px-3 py-1.5 font-mono text-xs text-ss-text"
                        >
                          <TechIcon name={skill} className="h-3.5 w-3.5 text-ss-teal" />
                          {skill}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className={`mt-6 inline-block font-display text-sm ${accentClasses.text} hover:opacity-80`}
                    >
                      Hire {role.title} →
                    </Link>
                  </TiltCard>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Container>
      </section>

      <ProcessSteps steps={hireDevelopersPage.process} accent="teal" title="How Hiring Works" />

      <EngagementModel items={hireDevelopersPage.engagementModel} accent="cyan" />

      <section className="border-t border-ss-border py-24 sm:py-32">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold text-ss-text">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-8">
            <FaqAccordion items={hireDevelopersPage.faqs} accent="teal" />
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
