import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { About } from "@/components/sections/About";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { OrbitApproach } from "@/components/sections/OrbitApproach";
import { ImpactMetrics } from "@/components/sections/ImpactMetrics";
import { RoiComparison } from "@/components/sections/RoiComparison";
import { Process } from "@/components/sections/Process";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { LiveConsole } from "@/components/sections/LiveConsole";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SectionNavDock } from "@/components/SectionNavDock";

export default function Home() {
  return (
    <>
      <SectionNavDock />
      <Hero />
      <TrustBar />
      <About />
      <ServicesGrid />
      <TechMarquee />
      <OrbitApproach />
      <ImpactMetrics />
      <RoiComparison />
      <Process />
      <PortfolioPreview />
      <LiveConsole />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
