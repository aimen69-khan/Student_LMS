import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import Sidebar, { adminNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import StatCard from "../../components/statcard/StatCard";
import ActiveCourseCard from "../../components/activecoursecard/ActiveCourseCard";
import AnalyticsChart from "../../components/analyticschart/AnalyticsChart";
import DonutChart from "../../components/donutchart/DonutChart";
import AddTrainerModal from "../../components/addtrainermodal/AddTrainerModal";
import "./Teachers.css";

const STORAGE_KEY = "smit-admin-trainers";

const courseColors = [
  "#3f8cf4",
  "#a855f7",
  "#22c55e",
  "#eab308",
  "#ec4899",
  "#14b8a6",
];


const initialTrainers = [
  {
    id: 1,
    name: "Hassan Tariq",
    courses: ["Web & App Development"],
    progress: 68,
    campus: "Zaitoon Ashraf IT Park",
    city: "Karachi",
  },
  {
    id: 2,
    name: "Ayesha Malik",
    courses: ["Data Science"],
    progress: 45,
    campus: "Zaitoon Ashraf IT Park",
    city: "Karachi",
  },
];

function loadTrainers() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialTrainers;
  } catch {
    return initialTrainers;
  }
}

export default function Teachers() {
  const [trainers, setTrainers] = useState(loadTrainers);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trainers));
    } catch {
    }
  }, [trainers]);

  const handleAdd = (trainer) => {
    setTrainers((prev) => [trainer, ...prev]);
  };
  

  const avgProgress = useMemo(() => {
    if (trainers.length === 0) return 0;
    const total = trainers.reduce((sum, t) => sum + t.progress, 0);
    return Math.round(total / trainers.length);
  }, [trainers]);

  const coursesCovered = useMemo(() => {
    const set = new Set(trainers.flatMap((t) => t.courses));
    return set.size;
  }, [trainers]);

  const progressChartData = useMemo(
    () => ({
      xLabels: trainers.map((t) => t.name),
      series: [{ data: trainers.map((t) => t.progress), label: "Progress %" }],
    }),
    [trainers]
  );

  const courseDistribution = useMemo(() => {
    const counts = {};
    trainers.forEach((t) => {
      t.courses.forEach((course) => {
        counts[course] = (counts[course] || 0) + 1;
      });
    });

    const totalAssignments = Object.values(counts).reduce((a, b) => a + b, 0);

    return Object.entries(counts).map(([label, value], index) => ({
      id: index,
      value,
      label,
      color: courseColors[index % courseColors.length],
      percent: totalAssignments
        ? Math.round((value / totalAssignments) * 100)
        : 0,
    }));
  }, [trainers]);

  return (
    <div className="dashboard-layout">
      <Sidebar userName="Admin" navItems={adminNavItems} />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Teachers"]} />

        <div className="page-content">
          <div className="page-header-row">
            <h3 className="section-heading">Teachers</h3>
            <button className="add-new-btn" onClick={() => setShowModal(true)}>
              <Plus size={16} />
              Add new
            </button>
          </div>

          <div className="stats-row">
            <StatCard
              value={trainers.length}
              label="Total Trainers"
              icon="cap"
              iconColor="blue"
            />
            <StatCard
              value={`${avgProgress}%`}
              label="Avg. Training Progress"
              icon="check"
              iconColor="green"
            />
            <StatCard
              value={coursesCovered}
              label="Courses Covered"
              icon="book"
              iconColor="purple"
            />
          </div>

          {trainers.length > 0 && (
            <div className="teachers-charts-row">
              <AnalyticsChart
                type="bar"
                title="Trainer Progress Overview"
                xLabels={progressChartData.xLabels}
                series={progressChartData.series}
                colors={["#3f8cf4"]}
              />
              <DonutChart
                title="Course Distribution"
                centerValue={coursesCovered}
                centerLabel="Courses"
                data={courseDistribution}
              />
            </div>
          )}

          <div className="trainer-list">
            {trainers.map((trainer) => (
              <ActiveCourseCard
                key={trainer.id}
                title={trainer.name}
                status="ACTIVE"
                schedule={trainer.courses}
                progress={trainer.progress}
                meta={[
                  {
                    icon: "hash",
                    label: "Courses",
                    value: trainer.courses.length,
                  },
                  { icon: "pin", label: "Campus", value: trainer.campus },
                  { icon: "pin", label: "City", value: trainer.city },
                ]}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <AddTrainerModal
          onClose={() => setShowModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}