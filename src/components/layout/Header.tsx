"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  headerCta,
  primaryNav,
  siteConfig,
  type MegaMenuKey,
} from "@/content/siteConfig";
import { MegaMenuPanel } from "@/components/layout/header/MegaMenuPanel";
import { ServicesMegaMenu } from "@/components/layout/header/ServicesMegaMenu";
import { IndustryMegaMenu } from "@/components/layout/header/IndustryMegaMenu";
import { BuildWithAiMegaMenu } from "@/components/layout/header/BuildWithAiMegaMenu";
import { AboutMegaMenu } from "@/components/layout/header/AboutMegaMenu";
import { MobileMegaSection } from "@/components/layout/header/MobileMegaSection";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { aiServices, aiSolutions } from "@/content/aiOfferings";

const CLOSE_DELAY = 150;

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<MegaMenuKey | null>(null);
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMobileOpen(false);
    setOpenMenu(null);
  }

  function openNow(key: MegaMenuKey) {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(key);
  }

  function scheduleClose() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY);
  }

  function cancelClose() {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  }

  const closeAll = () => setOpenMenu(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className={`header-legacy sticky top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || openMenu
          ? "border-ss-border bg-ss-surface-2/95 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label={siteConfig.name}>
          <Image
            src="/images/logos/logo-light-text.webp"
            alt={siteConfig.name}
            width={220}
            height={62}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-display text-sm tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-ss-mint"
                      : "text-ss-text hover:text-ss-teal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isOpen = openMenu === item.key;
            return (
              <div
                key={item.key}
                onMouseEnter={() => openNow(item.key)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  onClick={() => openNow(item.key)}
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1.5 font-display text-sm tracking-wide transition-colors ${
                    isOpen ? "text-ss-mint" : "text-ss-text hover:text-ss-teal"
                  }`}
                >
                  {item.label}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden
                    className="text-xs"
                  >
                    ▾
                  </motion.span>
                </button>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button href={headerCta.href}>
            {headerCta.label}
            <span aria-hidden>→</span>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-ss-text transition-transform ${
                isMobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ss-text transition-opacity ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-ss-text transition-transform ${
                isMobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </Container>

      {/* Desktop mega menus */}
      <div
        className="hidden lg:block"
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        <MegaMenuPanel isOpen={openMenu === "services"}>
          <ServicesMegaMenu onNavigate={closeAll} />
        </MegaMenuPanel>
        <MegaMenuPanel isOpen={openMenu === "industry"}>
          <IndustryMegaMenu onNavigate={closeAll} />
        </MegaMenuPanel>
        <MegaMenuPanel isOpen={openMenu === "buildWithAi"}>
          <BuildWithAiMegaMenu onNavigate={closeAll} />
        </MegaMenuPanel>
        <MegaMenuPanel isOpen={openMenu === "about"}>
          <AboutMegaMenu onNavigate={closeAll} />
        </MegaMenuPanel>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ss-border bg-ss-surface-2 lg:hidden"
          >
            <Container className="flex max-h-[75vh] flex-col gap-1 overflow-y-auto py-6">
              {primaryNav.map((item) => {
                if (item.type === "link") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-3 py-3 font-display text-base ${
                        isActive(item.href)
                          ? "text-ss-mint"
                          : "text-ss-text hover:text-ss-teal"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                if (item.key === "services") {
                  return (
                    <MobileMegaSection key={item.key} label={item.label}>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                        >
                          {service.title}
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="rounded-lg px-3 py-2 text-sm text-ss-teal"
                      >
                        View All Services →
                      </Link>
                    </MobileMegaSection>
                  );
                }

                if (item.key === "industry") {
                  return (
                    <MobileMegaSection key={item.key} label={item.label}>
                      {industries.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                        >
                          {industry.name}
                        </Link>
                      ))}
                      <Link
                        href="/industries"
                        className="rounded-lg px-3 py-2 text-sm text-ss-teal"
                      >
                        View All Industries →
                      </Link>
                    </MobileMegaSection>
                  );
                }

                if (item.key === "buildWithAi") {
                  return (
                    <MobileMegaSection key={item.key} label={item.label}>
                      <p className="px-3 pt-1 font-mono text-xs uppercase tracking-[0.2em] text-ss-teal">
                        AI Services
                      </p>
                      {aiServices.map((offering) => (
                        <Link
                          key={offering.slug}
                          href={`/build-with-ai/${offering.slug}`}
                          className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                        >
                          {offering.name}
                        </Link>
                      ))}
                      <p className="px-3 pt-3 font-mono text-xs uppercase tracking-[0.2em] text-ss-teal">
                        AI Solutions
                      </p>
                      {aiSolutions.map((offering) => (
                        <Link
                          key={offering.slug}
                          href={`/build-with-ai/${offering.slug}`}
                          className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                        >
                          {offering.name}
                        </Link>
                      ))}
                      <Link
                        href="/build-with-ai"
                        className="rounded-lg px-3 py-2 text-sm text-ss-teal"
                      >
                        View All Build With AI →
                      </Link>
                    </MobileMegaSection>
                  );
                }

                return (
                  <MobileMegaSection key={item.key} label={item.label}>
                    <Link
                      href="/about"
                      className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/portfolio"
                      className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                    >
                      Portfolio
                    </Link>
                    <Link
                      href="/pricing"
                      className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/faq"
                      className="rounded-lg px-3 py-2 text-sm text-ss-muted hover:text-ss-mint"
                    >
                      FAQ
                    </Link>
                  </MobileMegaSection>
                );
              })}
              <Button href={headerCta.href} className="mt-4 w-fit">
                {headerCta.label}
                <span aria-hidden>→</span>
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
