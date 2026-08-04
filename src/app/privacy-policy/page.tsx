import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Staller Stack",
  description:
    "How Staller Stack collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" heading="Privacy Policy" />
      <LegalDocument document={privacyPolicy} />
    </>
  );
}
