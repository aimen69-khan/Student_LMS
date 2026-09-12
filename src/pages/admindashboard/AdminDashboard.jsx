import { Users, CalendarCheck, Award, BookOpen } from "lucide-react";
import Sidebar, { adminNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import HighlightCard from "../../components/highlightcard/HighLightCard";
import MiniStatCard from "../../components/ministatcard/MiniStatCard";
import DonutChart from "../../components/donutchart/DonutChart";
import AnalyticsChart from "../../components/analyticschart/AnalyticsChart";
import GaugeCard from "../../components/gaugecard/GaugeCard";
import "./AdminDashboard.css";



const studentStatus = [
  { id: 0, value: 68, color: "#3f8cf4", label: "Active", percent: 68 },
  { id: 1, value: 18, color: "#22c55e", label: "Completed", percent: 18 },
  { id: 2, value: 14, color: "#eab308", label: "On Leave", percent: 14 },
];

const monthlyPerformance = {
  xLabels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [
    { data: [88, 91, 89, 94, 92, 96], label: "Attendance %" },
    { data: [74, 78, 76, 80, 79, 84], label: "Avg. Quiz Score %" },
  ],
};

export default function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Admin" navItems={adminNavItems} />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Dashboard"]} />

        <div className="page-content">
          <div className="admin-top-row">
            <HighlightCard
              greeting="Welcome back, Admin"
              message="Overall student performance this month"
              value="84%"
              valueLabel="Average pass rate"
            />

            <MiniStatCard
              icon={Users}
              iconColor="blue"
              label="Total Students"
              value="312"
              change={8}
              data={[280, 290, 295, 300, 305, 312]}
              sparklineColor="#3f8cf4"
            />
            <MiniStatCard
              icon={CalendarCheck}
              iconColor="green"
              label="Avg. Attendance"
              value="92%"
              change={4}
              data={[85, 88, 87, 90, 91, 92]}
              sparklineColor="#22c55e"
            />
            <MiniStatCard
              icon={Award}
              iconColor="purple"
              label="Avg. Quiz Score"
              value="81%"
              change={6}
              data={[70, 74, 76, 78, 79, 81]}
              sparklineColor="#a855f7"
            />
            <MiniStatCard
              icon={BookOpen}
              iconColor="orange"
              label="Active Courses"
              value="6"
              data={[4, 4, 5, 5, 6, 6]}
              sparklineColor="#eab308"
            />
          </div>

          <div className="admin-charts-row">
            <DonutChart
              title="Student Status"
              centerValue="68%"
              centerLabel="Active"
              data={studentStatus}
            />

            <AnalyticsChart
              type="bar"
              title="Attendance & Quiz Performance"
              xLabels={monthlyPerformance.xLabels}
              series={monthlyPerformance.series}
              colors={["#3f8cf4", "#eab308"]}
            />
          </div>

          <div className="admin-gauges-row">
            <GaugeCard
              label="This Month"
              value={92}
              valueLabel="Avg. Attendance"
              changeText="+4% vs last month"
              color="#3f8cf4"
            />
            <GaugeCard
              label="This Year"
              value={88}
              valueLabel="Avg. Attendance"
              changeText="+6% vs last year"
              color="#eab308"
            />
          </div>
        </div>
      </div>
    </div>
  );
}