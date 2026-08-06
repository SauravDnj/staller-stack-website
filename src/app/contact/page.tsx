import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { ProjectCta } from "@/components/sections/ProjectCta";
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

      <section className="pb-24 sm:pb-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-8 lg:col-span-2">
            <div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-ss-teal">
                Our Office
              </h2>
              <ul className="mt-4 flex flex-col gap-3 text-ss-muted">
                <li>{siteConfig.address}</li>
                <li>{siteConfig.phone}</li>
                <li>{siteConfig.email}</li>
                <li>{siteConfig.hours}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm uppercase tracking-[0.2em] text-ss-teal">
                Follow Us
              </h2>
              <div className="mt-4 flex gap-5">
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
            </div>
          </Reveal>
        </Container>
      </section>

      <ProjectCta />
    </>
  );
}
