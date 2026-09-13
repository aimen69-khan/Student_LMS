import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/Statcard/StatCard";
import ProgressItem from "../../components/progressitem/ProgressItem";
import modules from "../../components/studentprogressdata/StudentProgressData";
import "./StudentProgress.css";


export default function StudentProgress() {
  return (
    <div className="dashboard-layout">
      <Sidebar userName="Ahmed Raza" />

      <div className="dashboard-main">
        <Topbar
          breadcrumb={[
            "Home",
            "Modern Web Application Development",
            "Progress",
          ]}
        />

        <div className="page-content">
          <div className="stats-row">
            <StatCard
              value={81}
              label="Total Topics"
              icon="book"
              iconColor="green"
            />
            <StatCard
              value={56}
              label="Completed Topics"
              icon="cap"
              iconColor="purple"
            />
            <StatCard
              value={25}
              label="Pending Topics"
              icon="clock"
              iconColor="red"
            />
          </div>

          <div className="progress-list">
            {modules.map((module) => (
              <ProgressItem key={module.title} {...module} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}