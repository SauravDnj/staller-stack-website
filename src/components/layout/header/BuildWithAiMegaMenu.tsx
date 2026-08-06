"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AiOfferingIcon } from "@/components/ui/AiOfferingIcon";
import { aiServices, aiSolutions } from "@/content/aiOfferings";

type Tab = "service" | "solution";

export function BuildWithAiMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("service");
  const items = activeTab === "service" ? aiServices : aiSolutions;

  return (
    <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-1 rounded-full border border-ss-border bg-ss-base p-1">
            <button
              type="button"
              onClick={() => setActiveTab("service")}
              className={`rounded-full px-4 py-2 font-display text-sm transition-colors ${
                activeTab === "service"
                  ? "bg-ss-teal text-ss-base"
                  : "text-ss-muted hover:text-ss-text"
              }`}
            >
              AI Services
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("solution")}
              className={`rounded-full px-4 py-2 font-display text-sm transition-colors ${
                activeTab === "solution"
                  ? "bg-ss-teal text-ss-base"
                  : "text-ss-muted hover:text-ss-text"
              }`}
            >
              AI Solutions
            </button>
          </div>
          <Link
            href="/build-with-ai"
            onClick={onNavigate}
            className="font-display text-sm text-ss-teal hover:text-ss-mint"
          >
            View All Build With AI →
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-1 sm:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/build-with-ai/${item.slug}`}
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-ss-base"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ss-border bg-ss-base">
                <AiOfferingIcon icon={item.icon} className="h-4 w-4 text-ss-mint" />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ss-text">
                  {item.name}
                </p>
                <p className="mt-1 text-xs text-ss-muted">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-ss-border bg-ss-base p-6">
        <div>
          <p className="font-display text-base font-semibold text-ss-text">
            Not sure which AI capability fits?
          </p>
          <p className="mt-2 text-sm text-ss-muted">
            Tell us the problem you&apos;re solving and we&apos;ll map it to
            the right AI service or solution — no obligation.
          </p>
        </div>
        <Button
          href="/contact"
          onClick={onNavigate}
          variant="outline"
          className="mt-6 w-full justify-center"
        >
          Talk to an AI Specialist <span aria-hidden>→</span>
        </Button>
      </div>
    </Container>
  );
}
