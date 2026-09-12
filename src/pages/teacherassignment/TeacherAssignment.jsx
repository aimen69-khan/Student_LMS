import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Sidebar, { teacherNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import TeacherAssignmentItem from "../../components/teacherassignmentitem/TeacherAssignmentItem";
import AddAssignmentModal from "../../components/addassignmentmodal/AddAssignmentModal";
import "./TeacherAssignment.css";

const STORAGE_KEY = "smit-teacher-assignments";


const initialAssignments = [
  {
    id: 1,
    title: "E-Commerce Website (React js)",
    dueDate: "August 17, 2026",
    submissions: [
      {
        id: 101,
        studentName: "Ahmed Raza",
        rollNo: "778115",
        submittedOn: "Aug 15, 2026",
        status: "PENDING",
      },
      {
        id: 102,
        studentName: "Sara Khan",
        rollNo: "778120",
        submittedOn: "Aug 16, 2026",
        status: "APPROVED",
      },
      {
        id: 103,
        studentName: "Bilal Ahmed",
        rollNo: "778132",
        submittedOn: "Aug 16, 2026",
        status: "PENDING",
      },
    ],
  },
  {
    id: 2,
    title: "JavaScript Assignment - 25 Questions",
    dueDate: "July 10, 2026",
    submissions: [
      {
        id: 201,
        studentName: "Ahmed Raza",
        rollNo: "778115",
        submittedOn: "Jul 9, 2026",
        status: "APPROVED",
      },
      {
        id: 202,
        studentName: "Sara Khan",
        rollNo: "778120",
        submittedOn: "Jul 9, 2026",
        status: "REJECTED",
      },
    ],
  },
];

function loadAssignments() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialAssignments;
  } catch {
    return initialAssignments;
  }
}

export default function TeacherAssignment() {
  const [assignments, setAssignments] = useState(loadAssignments);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));
    } catch {
      // storage full or disabled — fail silently, keep working in-memory
    }
  }, [assignments]);

  const handleAdd = (newAssignment) => {
    setAssignments((prev) => [newAssignment, ...prev]);
  };

  const handleDecision = (assignmentId, submissionId, status) => {
    setAssignments((prev) =>
      prev.map((assignment) =>
        assignment.id !== assignmentId
          ? assignment
          : {
              ...assignment,
              submissions: assignment.submissions.map((sub) =>
                sub.id === submissionId ? { ...sub, status } : sub
              ),
            }
      )
    );
  };

  return (
    <div className="dashboard-layout">
      <Sidebar userName="Teacher" navItems={teacherNavItems} />

      <div className="dashboard-main">
        <Topbar breadcrumb={["Home", "Assignment"]} />

        <div className="page-content">
          <div className="page-header-row">
            <h3 className="section-heading">Assignments</h3>
            <button className="add-new-btn" onClick={() => setShowModal(true)}>
              <Plus size={16} />
              Add new
            </button>
          </div>

          <div className="assignment-list">
            {assignments.map((assignment) => (
              <TeacherAssignmentItem
                key={assignment.id}
                assignment={assignment}
                onDecision={handleDecision}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <AddAssignmentModal
          onClose={() => setShowModal(false)}
          onAdd={handleAdd}
        />
      )}
    </div>
  );
}