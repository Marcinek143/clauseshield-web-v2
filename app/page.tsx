import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CallToAction from "../components/sections/CallToAction";
import FeatureSection from "../components/sections/FeatureSection";
import Hero from "../components/sections/Hero";
import Personas from "../components/sections/Personas";
import SocialProof from "../components/sections/SocialProof";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Header />
      <Hero />
      <SocialProof />
      <Personas />
      <FeatureSection
        sectionClassName="py-20 bg-white dark:bg-navy-900 border-y border-slate-200 dark:border-navy-700"
        containerClassName="layout-container max-w-[1080px] mx-auto px-4 md:px-10"
        icon="policy"
        iconWrapperClassName="size-12 rounded-xl bg-cyan-100 dark:bg-cyan/10 text-cyan-600 dark:text-cyan border border-cyan/20 flex items-center justify-center"
        title="Instant Risk Detection"
        description="Stop manually reviewing 50-page documents. Our AI scans for non-standard clauses, missing indemnities, and unfavorable terms in seconds, highlighting exactly what needs your attention."
        items={[
          "Customizable risk playbooks",
          "Historical precedent analysis",
          "One-click redlining suggestions",
        ]}
        imageClassName="bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuABux0TNcvgSfvb4xPRtr826EhJXffPH853TLm02ru6pV_dLeG1BCF38CRPpdpkZ4Wu5raIunLCx3GtyXRKDO0l_S58KT_HUSyOpaYA7U-KHVMZXql8koj-FBucpAV6h9NYp9so7MX2TLOjKZ6jbO-yLOS6TDxB-1J3XAyInIa9f3KiLlDNqKziDZnxWXHYJJyXhV_phDupQFNO_gyyKA2kyzjvLxPD5o26Y7nhl3qoXuT_HSiV-Iqj34jsBT-IzRxPcKepxMfmoQ')]"
        imageAlt="Close up of digital document with red highlighted text indicating risk"
      />
      <FeatureSection
        sectionClassName="py-20 px-4 md:px-10"
        containerClassName="layout-container max-w-[1080px] mx-auto"
        reverse
        icon="receipt_long"
        iconWrapperClassName="size-12 rounded-xl bg-blue-100 dark:bg-primary/10 text-primary border border-primary/20 flex items-center justify-center"
        title="Automate Invoice Processing"
        description="Ensure every dollar leaving your company is compliant. We match invoices against contract terms automatically to prevent overbilling and duplicate payments."
        items={[
          "3-way matching automation",
          "Line-item level extraction",
          "ERP integration (SAP, Oracle, NetSuite)",
        ]}
        imageClassName="bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBUbv8t2qKM4qIsREvA7SBHjAAVAt-tyWyJiKvqkIt-Ce2bgVo-_gFDuLgWdQ93kE6r4_SVdTtmQ2ZX37zspTSHGxbZdVMZnCfc--dnzaHIqBBAUJz-wi2c3Vjitx8AE0pcHueuNrKrcCMXb0FxFXLyMOTW4pgyhBkiZ9v-8gmv5KKox3uEuLmZQL6iMqLrGBmXy4WGAOpEV8mVK5fTVZ-jE4plbM84r0RGyVQOdbgLH9nbEq6s9Y9MV04NU2wox5C7oizvZjSRQ')]"
        imageAlt="Data visualization of financial growth and invoice processing statistics"
      />
      <CallToAction />
      <Footer />
    </div>
  );
}
