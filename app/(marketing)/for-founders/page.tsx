import Footer from "@/components/layout/Footer";
import FounderConfidenceStrip from "@/components/sections/FounderConfidenceStrip";
import FounderHero from "@/components/sections/FounderHero";
import FounderValuePillars from "@/components/sections/FounderValuePillars";

export default function FounderPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <FounderHero />
      <FounderValuePillars />
      <FounderConfidenceStrip />
      <Footer />
    </div>
  );
}
