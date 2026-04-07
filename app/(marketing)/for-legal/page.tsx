import Footer from "@/components/layout/Footer";
import LegalDefensibilityStrip from "@/components/sections/LegalDefensibilityStrip";
import LegalHero from "@/components/sections/LegalHero";
import LegalValuePillars from "@/components/sections/LegalValuePillars";

export default function LegalPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <LegalHero />
      <LegalValuePillars />
      <LegalDefensibilityStrip />
      <Footer />
    </div>
  );
}
