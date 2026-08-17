import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  footerAiLinks,
  footerCompanyLinks,
  footerHireLinks,
  footerLegalLinks,
  footerServiceLinks,
  marqueeKeywords,
  siteConfig,
  socialLinks,
} from "@/content/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-brand relative overflow-hidden border-t border-ss-border bg-ss-surface-2">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,_color-mix(in_srgb,var(--ss-teal)_16%,transparent),_transparent_70%)]" />
        <div
          className="bg-grid-animate absolute inset-0 opacity-30"
          style={{
            maskImage:
              "radial-gradient(ellipse 90% 80% at 50% 0%, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 50% 0%, black 30%, transparent 85%)",
          }}
        />
        <div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full opacity-[0.12] blur-[100px]"
          style={{
            background: "var(--ss-teal)",
            animation: "drift 26s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate",
          }}
        />
        <div
          className="absolute -right-16 bottom-0 h-64 w-64 rounded-full opacity-[0.10] blur-[100px]"
          style={{
            background: "var(--ss-cyan)",
            animation:
              "drift 32s var(--ease-io, cubic-bezier(.4,0,.2,1)) infinite alternate-reverse",
          }}
        />
      </div>

      <Container className="relative grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2.5" aria-label={siteConfig.name}>
            <Image
              src="/images/logos/logo-icon.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <span className="font-display text-xl font-semibold tracking-wide text-ss-text">
              StallerStack
            </span>
          </Link>
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
            AI Services &amp; Solutions
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {footerAiLinks.map((link) => (
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
            Hire Developers
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {footerHireLinks.map((link) => (
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

      <div className="relative overflow-hidden border-y border-ss-border py-4">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-display text-sm uppercase tracking-[0.3em] text-ss-muted">
          {[...marqueeKeywords, ...marqueeKeywords].map((word, i) => (
            <span key={`${word}-${i}`} className="flex items-center gap-8">
              {word}
              <span className="text-ss-teal">✦</span>
            </span>
          ))}
        </div>
      </div>

      <Container className="relative flex flex-col items-center justify-center gap-4 border-b border-ss-border py-8 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-wider text-ss-muted">Find Us On</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://clutch.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/client/clutch.png"
              alt="Clutch"
              width={860}
              height={283}
              className="h-5 w-auto sm:h-6"
            />
          </a>
          <a
            href="https://www.upwork.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/client/upwork.png"
              alt="Upwork"
              width={2400}
              height={717}
              className="h-5 w-auto sm:h-6"
            />
          </a>
          <a
            href="https://www.fiverr.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-xl bg-white px-4 py-2.5 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/images/client/fiverr.png"
              alt="Fiverr"
              width={3840}
              height={2160}
              className="h-5 w-auto sm:h-6"
            />
          </a>
        </div>
      </Container>

      <Container className="relative flex flex-col items-center justify-between gap-4 py-8 text-sm text-ss-muted sm:flex-row">
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
