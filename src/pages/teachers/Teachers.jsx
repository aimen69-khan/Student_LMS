import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Sidebar, { adminNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import ActiveCourseCard from "../../components/activecoursecard/ActiveCourseCard";
import AddTrainerModal from "../../components/addtrainermodal/AddTrainerModal";
import "./Teachers.css";

const STORAGE_KEY = "smit-admin-trainers";


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
      // storage full or disabled — fail silently, keep working in-memory
    }
  }, [trainers]);

  const handleAdd = (trainer) => {
    setTrainers((prev) => [trainer, ...prev]);
  };

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