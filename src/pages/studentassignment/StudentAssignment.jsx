import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statcard/StatCard";
import AssignmentTable from "../../components/assignmenttable/AssignmentTable";
import "./StudentAssignment.css";

const assignments = [
  {
    name: "Admin panel (E commerce Dashboad)",
    topics: 7,
    dueDate: "September 10, 2026",
    status: "SUBMITTED",
  },
  {
    name: "QUICKSERVE WMA (Batch-20)",
    hackathon: true,
    topics: null,
    dueDate: "August 30, 2026",
    status: "NOT SUBMITTED",
    closed: true,
  },
  {
    name: "E-Commerce Website (React js)",
    topics: 4,
    dueDate: "August 17, 2026",
    status: "APPROVED",
  },
  {
    name: "Furniture E-Commerce Website",
    topics: 5,
    dueDate: "August 10, 2026",
    status: "SUBMITTED",
  },
  {
    name: "MaintainIQ (Batch-20)",
    hackathon: true,
    topics: null,
    dueDate: "July 12, 2026",
    status: "SUBMITTED",
    closed: true,
  },
  {
    name: "JavaScript Assignment - 25 Questions",
    topics: 8,
    dueDate: "July 10, 2026",
    status: "SUBMITTED",
  },
  {
    name: "Budgetting App",
    topics: 12,
    dueDate: "June 1, 2026",
    status: "APPROVED",
  },
  {
    name: "Amazon Clone",
    topics: 15,
    dueDate: "May 24, 2026",
    status: "APPROVED",
  },
];

export default function StudentAssignment() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Ahmed Raza" />

      <div className="dashboard-main">
        <Topbar
          breadcrumb={[
            "Home",
            "Modern Web Application Development",
            "Assignment",
          ]}
        />

        <div className="page-content">
          <div className="stats-row">
            <StatCard
              value={16}
              label="Assigned"
              icon="list"
              iconColor="blue"
            />
            <StatCard
              value={14}
              label="Submitted"
              icon="check"
              iconColor="green"
            />
            <StatCard
              value={2}
              label="Pending"
              icon="clock"
              iconColor="orange"
            />
          </div>

          <AssignmentTable rows={assignments} />
        </div>
      </div>
    </div>
  );
}