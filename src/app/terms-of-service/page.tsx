import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Staller Stack",
  description: "The terms that govern your use of the Staller Stack website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHeader eyebrow="Legal" heading="Terms of Service" />
      <LegalDocument document={termsOfService} />
    </>
  );
}
