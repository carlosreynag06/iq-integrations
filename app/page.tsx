import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ValidationSection } from "@/components/sections/ValidationSection";
import { ChatPreview } from "@/components/ui/ChatPreview";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <CapabilitiesSection />
        <PhilosophySection />
        <ProcessSection />
        <ValidationSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ChatPreview />
    </>
  );
}
