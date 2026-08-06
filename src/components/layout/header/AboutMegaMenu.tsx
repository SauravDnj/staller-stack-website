import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { aboutPage } from "@/content/about";
import { siteConfig, socialLinks } from "@/content/siteConfig";

export function AboutMegaMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <Container className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-4">
      <div className="lg:col-span-3">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-ss-teal">
          About Staller Stack
        </p>
        <h3 className="mt-3 max-w-xl font-display text-xl font-semibold text-ss-text">
          {aboutPage.heading}
        </h3>
        <p className="mt-3 max-w-xl text-sm text-ss-muted">
          {aboutPage.subtext}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/about" onClick={onNavigate} variant="outline">
            About Us <span aria-hidden>→</span>
          </Button>
          <Button href="/portfolio" onClick={onNavigate} variant="ghost">
            Portfolio <span aria-hidden>→</span>
          </Button>
          <Button href="/pricing" onClick={onNavigate} variant="ghost">
            Pricing <span aria-hidden>→</span>
          </Button>
          <Button href="/faq" onClick={onNavigate} variant="ghost">
            FAQ <span aria-hidden>→</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-between rounded-2xl border border-ss-border bg-ss-base p-6">
        <div>
          <p className="font-display text-base font-semibold text-ss-text">
            Let&apos;s Get Connected
          </p>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-ss-muted">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.address}</li>
          </ul>
          <ul className="mt-4 flex flex-col gap-1 font-mono text-xs uppercase tracking-wider text-ss-teal">
            {siteConfig.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onNavigate}
              className="text-xs text-ss-muted transition-colors hover:text-ss-mint"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
