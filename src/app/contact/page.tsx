import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig, socialLinks } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Staller Stack",
  description:
    "Get in touch with Staller Stack for a free consultation on your next web, cloud, security, or AI project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Let's Talk"
        heading="Let's Build Something Extraordinary."
        subtext="Tell us about your project and we'll get back to you within one business day."
      />

      <section className="pb-16">
        <Container>
          <Reveal className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center text-sm text-ss-muted">
            <span>{siteConfig.address}</span>
            <span>{siteConfig.phone}</span>
            <span>{siteConfig.email}</span>
            <span>{siteConfig.hours}</span>
          </Reveal>
          <div className="mt-4 flex justify-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ss-muted transition-colors hover:text-ss-mint"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
