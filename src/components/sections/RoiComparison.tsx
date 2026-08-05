"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { IconTile } from "@/components/ui/IconTile";
import { roiComparison, roiSavings } from "@/content/roi";

const whyItWorks: { title: string; description: string; color: "teal" | "cyan" | "amber" }[] = [
  {
    title: "One accountable team",
    description: "No hand-offs between disconnected vendors — the people who scope it are the people who ship it.",
    color: "teal",
  },
  {
    title: "Reusable foundations",
    description: "Battle-tested infrastructure and design-system patterns mean less time rebuilding the basics.",
    color: "cyan",
  },
  {
    title: "Automation-first delivery",
    description: "CI/CD, monitoring, and security scans are built in from day one, not bolted on later.",
    color: "amber",
  },
];

export function RoiComparison() {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((row) => (row + 1) % roiComparison.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-y border-ss-border bg-ss-surface-2/40 py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Business Value"
            title={
              <>
                <span className="text-gradient">High Impact</span>, Low Overhead
              </>
            }
            description="Predictable delivery, fewer vendors, and a team that owns the outcome — not just the ticket."
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-ss-border bg-ss-surface p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ss-muted">
              {roiSavings.label}
            </p>
            <p className="mt-2 font-display text-4xl font-semibold text-ss-teal sm:text-5xl">
              <AnimatedCounter
                value={roiSavings.value}
                prefix={roiSavings.prefix}
                suffix={roiSavings.suffix}
                decimals={roiSavings.decimals}
              />
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap pb-3 text-left font-mono text-[11px] uppercase tracking-wider text-ss-muted">
                      Category
                    </th>
                    <th className="whitespace-nowrap pb-3 text-center font-mono text-[11px] uppercase tracking-wider text-ss-muted">
                      Typical Approach
                    </th>
                    <th className="whitespace-nowrap pb-3 text-center font-mono text-[11px] uppercase tracking-wider text-ss-muted">
                      Staller Stack
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roiComparison.map((row, index) => (
                    <tr
                      key={row.category}
                      className={`transition-colors duration-500 ${
                        index === activeRow ? "bg-ss-base/80" : ""
                      }`}
                    >
                      <td className="rounded-l-lg p-3 text-ss-muted">{row.category}</td>
                      <td className="whitespace-nowrap p-3 text-center text-red-400/80 line-through decoration-red-400/50">
                        {row.before}
                      </td>
                      <td className="whitespace-nowrap rounded-r-lg p-3 text-center font-semibold text-ss-teal">
                        {row.after}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            {whyItWorks.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-ss-border bg-ss-surface p-6"
              >
                <IconTile color={item.color} size="md">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8.5 12 2.5 2.5 4.5-5" />
                  </svg>
                </IconTile>
                <div>
                  <h3 className="font-display text-base font-semibold text-ss-text">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ss-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
