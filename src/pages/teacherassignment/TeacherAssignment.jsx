import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import Sidebar, { teacherNavItems } from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import TeacherAssignmentItem from "../../components/teacherassignmentitem/TeacherAssignmentItem";
import AddAssignmentModal from "../../components/addassignmentmodal/AddAssignmentModal";
import "./TeacherAssignment.css";


const STORAGE_KEY = "smit-teacher-assignments";
 

const studentRoster = [
  "Ahmed Raza", "Sara Khan", "Bilal Ahmed", "Ayesha Siddiqui", "Hamza Tariq",
  "Fatima Noor", "Usman Ali", "Zara Sheikh", "Hassan Raza", "Mehak Fatima",
  "Ali Hyder", "Sana Malik", "Faizan Qureshi", "Iqra Yousuf", "Danish Iqbal",
  "Rabia Aslam", "Omer Farooq", "Nida Hussain", "Talha Baig", "Amna Shahid",
  "Waleed Anwar", "Hira Javed", "Zeeshan Abbas", "Maryam Aziz", "Junaid Sarwar",
  "Kiran Zafar", "Adeel Rasheed", "Sadia Kamran", "Noman Sheikh", "Areeba Nasir",
  "Salman Yaqoob", "Anum Bashir", "Tariq Mehmood", "Laiba Saleem", "Bilawal Khalid",
];
 
const statusCycle = ["APPROVED", "PENDING", "SUBMITTED", "SUBMITTED", "REJECTED"];
 

function buildSubmissions(assignmentId, dueDate) {
  return studentRoster.map((name, index) => ({
    id: assignmentId * 1000 + index + 1,
    studentName: name,
    rollNo: String(778101 + index),
    submittedOn: dueDate,
    status: statusCycle[(index + assignmentId) % statusCycle.length],
  }));
}
 

const initialAssignments = [
  {
    id: 1,
    title: "E-Commerce Website (React js)",
    dueDate: "August 17, 2026",
    submissions: buildSubmissions(1, "Aug 15, 2026"),
  },
  {
    id: 2,
    title: "JavaScript Assignment - 25 Questions",
    dueDate: "July 10, 2026",
    submissions: buildSubmissions(2, "Jul 9, 2026"),
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
    }
  }, [assignments]);
 
  const handleAdd = (newAssignment) => {
    setAssignments((prev) => [
      { ...newAssignment, submissions: buildSubmissions(newAssignment.id, newAssignment.dueDate) },
      ...prev,
    ]);
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