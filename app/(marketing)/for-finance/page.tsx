import Footer from "@/components/layout/Footer";
import FinanceAuditStrip from "@/components/sections/FinanceAuditStrip";
import FinanceHero from "@/components/sections/FinanceHero";
import FinanceValuePillars from "@/components/sections/FinanceValuePillars";

export default function FinancePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <FinanceHero />
      <FinanceValuePillars />
      <FinanceAuditStrip />
      <Footer />
    </div>
  );
}
