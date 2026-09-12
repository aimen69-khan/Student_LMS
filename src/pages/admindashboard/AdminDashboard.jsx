import Sidebar, { adminNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statcard/StatCard";
import AnalyticsChart from "../../components/analyticschart/AnalyticsChart";
import "./AdminDashboard.css";


const attendanceTrend = {
  xLabels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [{ data: [88, 91, 89, 94, 92, 96], label: "Attendance %", area: true }],
};

const scoreByCourse = {
  xLabels: ["Web & App", "Data Science", "Digital Marketing"],
  series: [{ data: [82, 76, 88], label: "Avg. Quiz Score %" }],
};

export default function AdminDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Admin" navItems={adminNavItems} />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Dashboard"]} />

        <div className="page-content">
          <div className="stats-row">
            <StatCard
              value={312}
              label="Total Students"
              icon="list"
              iconColor="blue"
            />
            <StatCard
              value={14}
              label="Total Teachers"
              icon="cap"
              iconColor="purple"
            />
            <StatCard
              value={6}
              label="Active Courses"
              icon="book"
              iconColor="green"
            />
          </div>

          <AnalyticsChart
            type="line"
            title="Average Student Attendance (last 6 months)"
            xLabels={attendanceTrend.xLabels}
            series={attendanceTrend.series}
            colors={["#22c55e"]}
          />

          <AnalyticsChart
            type="bar"
            title="Average Quiz Score by Course"
            xLabels={scoreByCourse.xLabels}
            series={scoreByCourse.series}
            colors={["#3f8cf4"]}
          />
        </div>
      </div>
    </div>
  );
}