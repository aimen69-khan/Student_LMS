import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statcard/StatCard";
import AttendanceOverview from "../../components/attendanceoverview/AttendanceOverview";
import AttendanceTable from "../../components/attendancetable/AttendanceTable";
import "./StudentAttendance.css";


const records = [
  { classNo: 1, date: "Wed, Sep 2, 2026", status: "PRESENT" },
  { classNo: 2, date: "Fri, Sep 4, 2026", status: "PRESENT" },
  { classNo: 3, date: "Mon, Sep 7, 2026", status: "PRESENT" },
  { classNo: 4, date: "Wed, Sep 9, 2026", status: "PRESENT" },
];

export default function StudentAttendance() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Ahmed Raza" />

      <div className="dashboard-main">
        <Topbar
          breadcrumb={[
            "Home",
            "Modern Web Application Development",
            "Attendance",
          ]}
        />

        <div className="page-content">
          <div className="stats-row">
            <StatCard
              value={109}
              label="Total Classes"
              icon="calendar"
              iconColor="gray"
            />
            <StatCard
              value={106}
              label="Present"
              icon="check"
              iconColor="green"
            />
            <StatCard value={0} label="Leave" icon="x" iconColor="orange" />
            <StatCard value={3} label="Absent" icon="x" iconColor="red" />
          </div>

          <AttendanceOverview
            message="Your attendance is good. Keep it up!"
            percent={97}
          />

          <AttendanceTable rows={records} month="Sep 2026" />
        </div>
      </div>
    </div>
  );
}