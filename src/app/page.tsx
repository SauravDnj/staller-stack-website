import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { AiGuideSection } from "@/components/sections/AiGuideSection";
import { PlaybookGenerator } from "@/components/sections/PlaybookGenerator";
import { ManagedMode } from "@/components/sections/ManagedMode";
import { AutomationCarousel } from "@/components/sections/AutomationCarousel";
import { OrbitApproach } from "@/components/sections/OrbitApproach";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { RoiComparison } from "@/components/sections/RoiComparison";
import { Process } from "@/components/sections/Process";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { LiveConsole } from "@/components/sections/LiveConsole";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ProjectCta } from "@/components/sections/ProjectCta";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactPopup } from "@/components/sections/ContactPopup";
import { SectionNavDock } from "@/components/SectionNavDock";

export default function Home() {
  return (
    <>
      <SectionNavDock />
      <Hero />
      <About />
      <ServicesGrid />
      <TechMarquee />
      <AiGuideSection />
      <PlaybookGenerator />
      <ManagedMode />
      <AutomationCarousel />
      <OrbitApproach />
      <ImpactMetrics />
      <RoiComparison />
      <Process />
      <PortfolioPreview />
      <LiveConsole />
      <Testimonials />
      <CtaBanner />
      <ProjectCta />
      <ContactSection />
      <ContactPopup />
    </>
  );
}
