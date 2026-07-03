import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import MethodChart from "@/features/dashboard/components/MethodChart";
import RequestTrend from "@/features/dashboard/components/RequestTrend";
import StatsCard from "@/features/dashboard/components/StatsCard";
import StatusChart from "@/features/dashboard/components/StatusChart";

import { stats } from "@/features/dashboard/data/dashboardData";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="rounded-3xl border border-dashed bg-white p-20 text-center">
        <div className="grid gap-6 lg:grid-cols-2">
          <MethodChart />

          <StatusChart />
        </div>

          <RequestTrend />
      </div>
    </div>
  );
}
