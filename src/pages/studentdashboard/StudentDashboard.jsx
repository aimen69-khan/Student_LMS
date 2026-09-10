import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statcard/StatCard";
import ActiveCourseCard from "../../components/activecoursecard/ActiveCourseCard";
import ClassSchedule from "../../components/classschedule/ClassSchedule";
import ActivityPanel from "../../components/activitypanel/ActivityPanel";
import FeeTable from "../../components/feetable/FeeTable";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Ahmed Raza" />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Modern Web Application Development"]} />

        <div className="dashboard-grid">
          <div className="dashboard-primary">
            <div className="stats-row">
              <StatCard
                value={106}
                total={109}
                label="Attendance"
                icon="clock"
                iconColor="green"
              />
              <StatCard
                value={7}
                total={13}
                label="Assignment"
                icon="cap"
                iconColor="purple"
              />
            </div>

            <h3 className="section-heading">Active Course</h3>
            <ActiveCourseCard
              title="Modern Web Application Development"
              status="ENROLLED"
              schedule={[
                "Mon 01:00 PM - 03:00 PM",
                "Wed 01:00 PM - 03:00 PM",
                "Fri 01:00 PM - 03:00 PM",
              ]}
              progress={73}
              batch={20}
              roll={778115}
              campus="Zaitoon Ashraf IT Park"
              city="Karachi"
            />

            <h3 className="section-heading">Fee</h3>
            <FeeTable
              rows={[
                {
                  month: "Sep 2026",
                  amount: "Rs: 1000 /-",
                  type: "Monthly",
                  dueDate: "08-Sep-2026",
                  voucherId: "202609778115",
                  status: "PAID",
                },
              ]}
            />
          </div>

          <div className="dashboard-secondary">
            <ClassSchedule
              days={[
                { label: "Sun", date: "06", active: false },
                { label: "Mon", date: "07", active: true },
                { label: "Tue", date: "08", active: false },
                { label: "Wed", date: "09", active: true },
                { label: "Thu", date: "10", active: false },
                { label: "Fri", date: "11", active: true },
                { label: "Sat", date: "12", active: false },
              ]}
            />
            <ActivityPanel />
          </div>
        </div>
      </div>
    </div>
  );
}