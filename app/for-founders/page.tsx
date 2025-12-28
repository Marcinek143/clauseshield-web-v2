import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import FounderHero from "../../components/sections/FounderHero";
import FounderValuePillars from "../../components/sections/FounderValuePillars";
import FounderConfidenceStrip from "../../components/sections/FounderConfidenceStrip";

export default function FounderPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <FounderHero />
      <FounderValuePillars />
      <FounderConfidenceStrip />
      <Footer />
    </div>
  );
}
