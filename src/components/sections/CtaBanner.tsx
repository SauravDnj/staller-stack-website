import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { ctaBanner } from "@/content/home";
import { siteConfig } from "@/content/siteConfig";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_color-mix(in_srgb,var(--ss-mint)_14%,transparent),_transparent_65%)]" />
      <AmbientGlow />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-ss-text sm:text-4xl lg:text-5xl">
            Ready to Transform{" "}
            <span className="text-gradient">Your Business?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ss-muted">
            {ctaBanner.subtext}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={ctaBanner.primaryCta.href}>
              {ctaBanner.primaryCta.label}
            </Button>
            <Button href={ctaBanner.secondaryCta.href} variant="outline">
              {ctaBanner.secondaryCta.label}
            </Button>
          </div>
          <div className="mx-auto mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-ss-border bg-ss-surface/60 px-4 py-2 font-mono text-xs uppercase tracking-wider text-ss-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-ss-mint" />
            {siteConfig.badges.join(" · ")}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
