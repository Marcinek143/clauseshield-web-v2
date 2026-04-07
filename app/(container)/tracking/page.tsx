import LogisticsJourneySection from "@/components/tracking/LogisticsJourneySection";
import TrackingFooter from "@/components/tracking/TrackingFooter";
import TrackingMapCard from "@/components/tracking/TrackingMapCard";
import TrackingSearchSection from "@/components/tracking/TrackingSearchSection";
import TrackingSidebar from "@/components/tracking/TrackingSidebar";
import TrackingTermsSection from "@/components/tracking/TrackingTermsSection";

export default function TrackingPage() {
  return (
    <div className="tracking-page bg-surface font-body text-on-surface antialiased min-h-screen">
      <main className="pt-4 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <TrackingSearchSection />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <TrackingMapCard />
          <TrackingSidebar />
        </div>
        <LogisticsJourneySection />
        <TrackingTermsSection />
      </main>
      <TrackingFooter />
    </div>
  );
}
