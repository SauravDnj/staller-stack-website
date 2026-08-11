"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tilt } from "@/components/ui/Tilt";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { TechIcon } from "@/components/ui/TechIcon";
import { Reveal } from "@/components/ui/Reveal";
import { RevealGroup, RevealItem } from "@/components/ui/RevealGroup";
import { AmbientVisual } from "@/components/ui/AmbientVisual";
import { ACCENT_CLASSES, ACCENT_HEX } from "@/lib/accentTheme";
import { services } from "@/content/services";

export function ServicesGrid() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--ss-teal)_12%,transparent),_transparent_60%)]" />
      <AmbientVisual
        visual="orbit"
        color="var(--ss-teal)"
        className="left-[-70px] top-1/2 hidden h-72 w-72 -translate-y-1/2 opacity-[0.25] lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 hidden h-72 w-72 lg:block"
      >
        <div
          className="bg-grid-animate absolute inset-0 opacity-20"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 75%)",
          }}
        />
      </div>
      <Container className="relative">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Our Solutions"
              title="Tailored Technology Solutions for Modern Businesses."
            />
          </Reveal>
          <Link href="/services" className="font-display text-sm text-ss-teal hover:text-ss-mint">
            More Services →
          </Link>
        </div>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-flow-dense lg:grid-cols-3">
          {services.map((service, index) => {
            const accentClasses = ACCENT_CLASSES[service.theme.accent];
            const accentHex = ACCENT_HEX[service.theme.accent];
            const featured = index === 0 || index === 4;
            const techPreview = service.techStack
              .flatMap((group) => group.items)
              .slice(0, featured ? 6 : 4);

            return (
              <RevealItem key={service.slug} className={featured ? "sm:col-span-2" : ""}>
                <Link href={`/services/${service.slug}`} className="block h-full">
                  <Tilt
                    strength={7}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ss-border bg-ss-surface/60 backdrop-blur-sm transition-colors duration-300 ${accentClasses.hoverBorder}`}
                  >
                    {featured && (
                      <div className="absolute inset-0">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(min-width: 1024px) 66vw, 100vw"
                          className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-50"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(180deg, color-mix(in srgb, ${accentHex} 10%, var(--ss-base) 55%) 0%, var(--ss-base) 90%)`,
                          }}
                        />
                      </div>
                    )}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-1"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${accentHex}, transparent)`,
                      }}
                    />
                    <div
                      className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${accentClasses.glowHover}`}
                    />
                    <div
                      className={`relative flex h-full flex-col p-8 ${featured ? "sm:p-10" : ""}`}
                      style={{ transform: "translateZ(24px)" }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-ss-border bg-ss-base">
                          <SpinningIcon>
                            <ServiceIcon icon={service.icon} />
                          </SpinningIcon>
                        </div>
                        <span className="font-mono text-xs text-ss-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3
                        className={`mt-6 font-display font-semibold text-ss-text ${featured ? "text-2xl" : "text-xl"}`}
                      >
                        {service.title}
                      </h3>
                      <p className={`mt-3 text-sm text-ss-muted ${featured ? "max-w-lg" : ""}`}>
                        {service.description}
                      </p>
                      {featured && (
                        <ul className="mt-6 flex flex-col gap-2">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-center gap-2 text-sm text-ss-muted"
                            >
                              <span className={`h-1 w-1 rounded-full ${accentClasses.dot}`} />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-6 flex flex-wrap gap-2 border-t border-ss-border pt-5">
                        {techPreview.map((tech) => (
                          <span
                            key={tech}
                            className="flex items-center gap-1.5 rounded-full border border-ss-border bg-ss-base px-3 py-1.5 font-mono text-xs text-ss-text"
                          >
                            <TechIcon name={tech} className="h-3.5 w-3.5 text-ss-teal" />
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span
                        className={`mt-6 inline-flex items-center gap-1.5 font-display text-sm ${accentClasses.text}`}
                      >
                        Explore Service
                        <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Tilt>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
