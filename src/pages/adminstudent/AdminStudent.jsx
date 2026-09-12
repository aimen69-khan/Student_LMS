import Sidebar, { adminNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statcard/StatCard";
import AnalyticsChart from "../../components/analyticschart/AnalyticsChart";
import DonutChart from "../../components/donutchart/DonutChart";
import "./AdminStudents.css";


const enrollmentGrowth = {
  xLabels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [{ data: [210, 230, 250, 270, 290, 312], label: "Total Students" }],
};

const attendanceTrend = {
  xLabels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  series: [{ data: [85, 88, 87, 90, 91, 92], label: "Avg. Attendance %" }],
};

const scoreByCourse = {
  xLabels: ["Web & App", "Data Science", "Digital Marketing"],
  series: [{ data: [82, 76, 88], label: "Avg. Quiz Score %" }],
};

const enrollmentByCourse = [
  { id: 0, value: 45, color: "#3f8cf4", label: "Web & App Development", percent: 45 },
  { id: 1, value: 30, color: "#a855f7", label: "Data Science", percent: 30 },
  { id: 2, value: 25, color: "#22c55e", label: "Digital Marketing", percent: 25 },
];

export default function AdminStudents() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Admin" navItems={adminNavItems} />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Students"]} />

        <div className="page-content">
          <div className="stats-row">
            <StatCard
              value={312}
              label="Total Students"
              icon="list"
              iconColor="blue"
            />
            <StatCard
              value={24}
              label="New This Month"
              icon="cap"
              iconColor="green"
            />
            <StatCard
              value="92%"
              label="Avg. Attendance"
              icon="calendar"
              iconColor="orange"
            />
            <StatCard
              value="81%"
              label="Avg. Quiz Score"
              icon="check"
              iconColor="purple"
            />
          </div>

          <div className="students-charts-grid">
            <AnalyticsChart
              type="line"
              title="Student Enrollment Growth"
              xLabels={enrollmentGrowth.xLabels}
              series={enrollmentGrowth.series}
              colors={["#22c55e"]}
            />
            <AnalyticsChart
              type="line"
              title="Average Attendance Trend"
              xLabels={attendanceTrend.xLabels}
              series={attendanceTrend.series}
              colors={["#3f8cf4"]}
            />
          </div>

          <div className="students-charts-row">
            <AnalyticsChart
              type="bar"
              title="Average Quiz Score by Course"
              xLabels={scoreByCourse.xLabels}
              series={scoreByCourse.series}
              colors={["#a855f7"]}
            />
            <DonutChart
              title="Enrollment by Course"
              centerValue="312"
              centerLabel="Students"
              data={enrollmentByCourse}
            />
          </div>
        </div>
      </div>
    </div>
  );
}