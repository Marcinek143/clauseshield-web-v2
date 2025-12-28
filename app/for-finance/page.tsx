import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import FinanceHero from "../../components/sections/FinanceHero";
import FinanceValuePillars from "../../components/sections/FinanceValuePillars";
import FinanceAuditStrip from "../../components/sections/FinanceAuditStrip";

export default function FinancePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <FinanceHero />
      <FinanceValuePillars />
      <FinanceAuditStrip />
      <Footer />
    </div>
  );
}
