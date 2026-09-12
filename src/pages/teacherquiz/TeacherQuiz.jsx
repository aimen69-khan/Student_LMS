import { useState } from "react";
import { Plus } from "lucide-react";
import Sidebar from "../../components/tsidebar/TSidebar";
import Topbar from "../../components/topbar/Topbar";
import TeacherQuizTable from "../../components/teacherquiztable/TeacherQuizTable";
import AddQuizModal from "../../components/addquizmodal/AddQuizModal";
import "./TeacherQuiz.css";


const initialQuizzes = [
  {
    id: 1,
    title: "Javascript (Quiz-4)",
    module: "Modern Front-End Development",
    questions: 40,
    dueDate: "September 15, 2026",
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "Javascript (Quiz-3)",
    module: "Modern Front-End Development",
    questions: 40,
    dueDate: "August 20, 2026",
    status: "ACTIVE",
  },
  {
    id: 3,
    title: "Javascript (Quiz-2)",
    module: "Modern Front-End Development",
    questions: 40,
    dueDate: "July 30, 2026",
    status: "CLOSED",
  },
  {
    id: 4,
    title: "Javascript (Quiz-1)",
    module: "Modern Front-End Development",
    questions: 40,
    dueDate: "June 20, 2026",
    status: "CLOSED",
  },
  {
    id: 6,
    title: "CSS Quiz",
    module: "Front-End Development",
    questions: 40,
    dueDate: "April 5, 2026",
    status: "CLOSED",
  },
  {
    id: 7,
    title: "HTML Quiz",
    module: "Web Designing",
    questions: 40,
    dueDate: "March 20, 2026",
    status: "CLOSED",
  },
];

export default function TeacherQuiz() {
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (newQuiz) => {
    setQuizzes((prev) => [newQuiz, ...prev]);
  };

  const handleDelete = (id) => {
    setQuizzes((prev) => prev.filter((quiz) => quiz.id !== id));
  };

  return (
    <div className="dashboard-layout">
      <Sidebar userName="Teacher" />

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