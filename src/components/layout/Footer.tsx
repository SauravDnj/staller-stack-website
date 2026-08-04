import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  footerCompanyLinks,
  footerLegalLinks,
  footerServiceLinks,
  marqueeKeywords,
  siteConfig,
  socialLinks,
} from "@/content/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ss-border bg-ss-surface-2">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logos/logo-light-text.webp"
            alt={siteConfig.name}
            width={220}
            height={62}
            className="h-9 w-auto"
          />
          <p className="max-w-xs text-sm text-ss-muted">
            {siteConfig.description}
          </p>
          <ul className="mt-2 flex flex-col gap-1 font-mono text-xs uppercase tracking-wider text-ss-teal">
            {siteConfig.badges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ss-text">
            Services
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {footerServiceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ss-muted transition-colors hover:text-ss-mint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ss-text">
            Company
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ss-muted transition-colors hover:text-ss-mint"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.2em] text-ss-text">
            Our Office
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-ss-muted">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="overflow-hidden border-y border-ss-border py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-ss-muted">
          {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center gap-8">
              {word}
              <span className="text-ss-teal">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-ss-muted sm:flex-row">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {footerLegalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ss-mint"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-ss-mint"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
