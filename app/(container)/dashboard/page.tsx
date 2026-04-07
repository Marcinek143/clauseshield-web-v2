import CostDynamicsCard from "@/components/dashboard/CostDynamicsCard";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import RecentClauseAudits from "@/components/dashboard/RecentClauseAudits";

export default function DashboardPage() {
  return (
    <div className="dashboard-page bg-surface text-on-surface min-h-screen">
      <main className="pt-4 pb-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <DashboardHeader />
        <DashboardMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CostDynamicsCard />
            <RecentClauseAudits />
          </div>
          <DashboardSidebar />
        </div>
      </main>
      <DashboardFooter />
    </div>
  );
}
