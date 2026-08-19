import { FaLinkedin, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { Button } from "@/components/ui/Button";
import { socialLinks, headerCta } from "@/content/siteConfig";

const SOCIAL_ICONS: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  "Twitter / X": FaXTwitter,
  GitHub: FaGithub,
  Instagram: FaInstagram,
};

export function BlogSidebar() {
  return (
    <div className="flex flex-col gap-6 lg:sticky lg:top-28">
      <div className="relative overflow-hidden rounded-2xl border border-ss-border bg-gradient-to-br from-ss-teal/20 via-ss-surface-2 to-ss-surface-2 p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-ss-teal/20 blur-[80px]"
        />
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ss-mint">
          Free Consultation
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-ss-text">
          Schedule Your Success Session Now
        </h3>
        <p className="mt-3 text-sm text-ss-muted">
          Not sure where to begin? Our team will guide you through the right
          approach for your project.
        </p>
        <Button href={headerCta.href} className="mt-6 w-full justify-center">
          Book a Consultation
        </Button>
      </div>

      <div className="rounded-2xl border border-ss-border bg-ss-surface p-8">
        <h3 className="font-display text-lg font-semibold text-ss-text">
          Follow Us for More Insights
        </h3>
        <p className="mt-2 text-sm text-ss-muted">
          Get the latest on AI, web, and mobile development as we publish it.
        </p>
        <div className="mt-6 flex gap-3">
          {socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.label];
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-ss-border text-ss-muted transition-colors duration-300 hover:border-ss-teal hover:text-ss-mint"
              >
                {Icon && <Icon className="h-5 w-5" />}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
