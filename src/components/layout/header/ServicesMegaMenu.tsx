"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SpinningIcon } from "@/components/ui/SpinningIcon";
import { services } from "@/content/services";

export function ServicesMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];

  return (
    <Container className="grid grid-cols-1 gap-6 py-8 lg:grid-cols-12">
      {/* Left: category sidebar — click (or hover) to swap the content pane */}
      <div className="lg:col-span-3">
        <p className="px-3 font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
          Our Solutions
        </p>
        <div className="mt-4 flex flex-col gap-1">
          {services.map((service) => {
            const isActive = service.slug === activeSlug;
            return (
              <button
                key={service.slug}
                type="button"
                onMouseEnter={() => setActiveSlug(service.slug)}
                onClick={() => setActiveSlug(service.slug)}
                aria-pressed={isActive}
                className={`flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                  isActive ? "bg-ss-teal text-ss-base" : "text-ss-text hover:bg-ss-base"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                      isActive
                        ? "border-ss-base/30 bg-ss-base/10"
                        : "border-ss-border bg-ss-base"
                    }`}
                  >
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <span className="font-display text-sm font-semibold">
                    {service.title}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Middle: content for the active category */}
      <div className="border-t border-ss-border pt-6 lg:col-span-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-ss-border bg-ss-base">
            <SpinningIcon>
              <ServiceIcon icon={active.icon} />
            </SpinningIcon>
          </div>
          <h3 className="font-display text-lg font-semibold text-ss-text">
            {active.title}
          </h3>
        </div>
        <p className="mt-4 text-sm text-ss-muted">{active.description}</p>
        <ul className="mt-6 flex flex-col gap-3">
          {active.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-center gap-3 text-sm text-ss-text"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ss-teal" />
              {bullet}
            </li>
          ))}
        </ul>
        <Link
          href={`/services/${active.slug}`}
          onClick={onNavigate}
          className="mt-8 inline-flex items-center gap-2 font-display text-sm text-ss-teal hover:text-ss-mint"
        >
          Explore {active.title} <span aria-hidden>→</span>
        </Link>
      </div>

      {/* Right: promo panel */}
      <div className="flex flex-col justify-between rounded-2xl border border-ss-border bg-ss-base p-6 lg:col-span-3">
        <div>
          <p className="font-display text-base font-semibold text-ss-text">
            Not sure where to start?
          </p>
          <p className="mt-2 text-sm text-ss-muted">
            Tell us about your project and we&apos;ll match you with the
            right team — no obligation, no sales pressure.
          </p>
          <ul className="mt-5 flex flex-col gap-2 text-xs text-ss-muted">
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-ss-teal" />
              Free 30-minute consultation
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-ss-teal" />
              Response within one business day
            </li>
          </ul>
        </div>
        <Button
          href="/contact"
          onClick={onNavigate}
          className="mt-6 w-full justify-center"
        >
          Start Your Project <span aria-hidden>→</span>
        </Button>
      </div>
    </Container>
  );
}
