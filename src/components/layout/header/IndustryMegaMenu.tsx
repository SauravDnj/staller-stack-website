import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IndustryIcon } from "@/components/ui/IndustryIcon";
import { industries } from "@/content/industries";

export function IndustryMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
            Industries We Empower
          </p>
          <Link
            href="/industries"
            onClick={onNavigate}
            className="font-display text-sm text-ss-teal hover:text-ss-mint"
          >
            View All Industries →
          </Link>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-1 sm:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-xl p-4 transition-colors hover:bg-ss-base"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ss-border bg-ss-base">
                <IndustryIcon icon={industry.icon} />
              </div>
              <div>
                <p className="font-display text-sm font-semibold text-ss-text">
                  {industry.name}
                </p>
                <p className="mt-1 text-xs text-ss-muted">
                  {industry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-ss-border bg-ss-base p-6">
        <div>
          <p className="font-display text-base font-semibold text-ss-text">
            Let&apos;s Get Connected
          </p>
          <p className="mt-2 text-sm text-ss-muted">
            Innovation in action — browse the projects and platforms we&apos;ve
            built, each crafted for performance and measurable results.
          </p>
        </div>
        <Button
          href="/portfolio"
          onClick={onNavigate}
          variant="outline"
          className="mt-6 w-full justify-center"
        >
          Explore All Case Studies <span aria-hidden>→</span>
        </Button>
      </div>
    </Container>
  );
}
