import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Badge from "../badge/Badge";
import Pagination from "../pagination/Pagination";
import StudentSubmissionModal from "../studentsubmissionmodal/StudentSubmissionModal";
import "./TeacherAssignmentItem.css";

const statusVariant = {
  PENDING: "gray",
  SUBMITTED: "blue",
  APPROVED: "green",
  REJECTED: "red",
};

const PAGE_SIZE = 10;

export default function TeacherAssignmentItem({ assignment, onDecision }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const submissionCount = assignment.submissions.length;
  const totalPages = Math.max(1, Math.ceil(submissionCount / PAGE_SIZE));
  const pageStart = (page - 1) * PAGE_SIZE;
  const visibleSubmissions = assignment.submissions.slice(
    pageStart,
    pageStart + PAGE_SIZE
  );

  const handlePageChange = (nextPage) => {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
  };

  const handleDecision = (submissionId, status) => {
    onDecision(assignment.id, submissionId, status);
  };

  return (
    <div className={`teacher-assignment-item ${open ? "open" : ""}`}>
      <button
        className="teacher-assignment-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div>
          <p className="teacher-assignment-title">{assignment.title}</p>
          <p className="teacher-assignment-sub">Due {assignment.dueDate}</p>
        </div>

        <div className="teacher-assignment-right">
          <span className="submission-count">
            {submissionCount} Student{submissionCount !== 1 ? "s" : ""}
          </span>
          <span className="teacher-assignment-toggle" aria-hidden="true">
            <ChevronDown size={16} />
          </span>
        </div>
      </button>

      {open && (
        <div className="teacher-assignment-body">
          {submissionCount === 0 ? (
            <p className="no-submissions">No students in this batch yet.</p>
          ) : (
            <>
              <div className="student-list">
                {visibleSubmissions.map((sub) => (
                  <button
                    key={sub.id}
                    className="student-row"
                    onClick={() => setSelectedSubmission(sub)}
                  >
                    <div className="student-row-info">
                      <p className="student-row-name">{sub.studentName}</p>
                      <p className="student-row-roll">Roll No: {sub.rollNo}</p>
                    </div>
                    <div className="student-row-right">
                      <span className="student-row-date">{sub.submittedOn}</span>
                      <Badge variant={statusVariant[sub.status] || "gray"}>
                        {sub.status}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>

              <Pagination
                page={page}
                pageSize={PAGE_SIZE}
                totalItems={submissionCount}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      )}

      {selectedSubmission && (
        <StudentSubmissionModal
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onDecision={handleDecision}
        />
      )}
    </div>
  );
}