import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Sidebar, { teacherNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import TeacherQuizTable from "../../components/teacherquiztable/TeacherQuizTable";
import AddQuizModal from "../../components/addquizmodal/AddQuizModal";
import "./TeacherQuiz.css";

const STORAGE_KEY = "smit-teacher-quizzes";


const initialQuizzes = [
  {
    id: 1,
    title: "Javascript (Quiz-4)",
    module: "Modern Front-End Development",
    questions: 40,
    dueDate: "September 20, 2026",
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "CSS Quiz",
    module: "Front-End Development",
    questions: 40,
    dueDate: "August 5, 2026",
    status: "CLOSED",
  },
  {
    id: 3,
    title: "HTML Quiz",
    module: "Web Designing",
    questions: 40,
    dueDate: "July 20, 2026",
    status: "CLOSED",
  },
];

function loadQuizzes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialQuizzes;
  } catch {
    return initialQuizzes;
  }
}

export default function TeacherQuiz() {
  const [quizzes, setQuizzes] = useState(loadQuizzes);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(quizzes));
    } catch {
      // storage full or disabled — fail silently, keep working in-memory
    }
  }, [quizzes]);

  const handleAdd = (newQuiz) => {
    setQuizzes((prev) => [newQuiz, ...prev]);
  };

  const handleDelete = (id) => {
    setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="dashboard-layout">
      <Sidebar userName="Teacher" navItems={teacherNavItems} />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Quiz"]} />

        <div className="page-content">
          <div className="page-header-row">
            <h3 className="section-heading">Quizzes</h3>
            <button className="add-new-btn" onClick={() => setShowModal(true)}>
              <Plus size={16} />
              Add new
            </button>
          </div>

          <TeacherQuizTable rows={quizzes} onDelete={handleDelete} />
        </div>
      </div>

      {showModal && (
        <AddQuizModal onClose={() => setShowModal(false)} onAdd={handleAdd} />
      )}
    </div>
  );
}