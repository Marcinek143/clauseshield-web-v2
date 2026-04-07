import FleetMapPreview from "./FleetMapPreview";
import LivePipeline from "./LivePipeline";
import ShieldInsightsCard from "./ShieldInsightsCard";

export default function DashboardSidebar() {
  return (
    <div className="space-y-8">
      <LivePipeline />
      <ShieldInsightsCard />
      <FleetMapPreview />
    </div>
  );
}
