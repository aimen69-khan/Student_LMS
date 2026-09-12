import { useState } from "react";
import { ChevronDown, Check, X as XIcon } from "lucide-react";
import Badge from "../../components/badge/Badge";
import "./TeacherAssignmentItem.css";

const statusVariant = {
  PENDING: "gray",
  APPROVED: "green",
  REJECTED: "red",
};

export default function TeacherAssignmentItem({ assignment, onDecision }) {
  const [open, setOpen] = useState(false);
  const submissionCount = assignment.submissions.length;

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
            {submissionCount} Submission{submissionCount !== 1 ? "s" : ""}
          </span>
          <span className="teacher-assignment-toggle" aria-hidden="true">
            <ChevronDown size={16} />
          </span>
        </div>
      </button>

      {open && (
        <div className="teacher-assignment-body">
          {submissionCount === 0 ? (
            <p className="no-submissions">No students have submitted yet.</p>
          ) : (
            <table className="submission-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Roll No</th>
                  <th>Submitted On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {assignment.submissions.map((sub) => (
                  <tr key={sub.id}>
                    <td>{sub.studentName}</td>
                    <td>{sub.rollNo}</td>
                    <td>{sub.submittedOn}</td>
                    <td>
                      <Badge variant={statusVariant[sub.status]}>
                        {sub.status}
                      </Badge>
                    </td>
                    <td>
                      <div className="submission-actions">
                        <button
                          className="decision-btn approve"
                          onClick={() =>
                            onDecision(assignment.id, sub.id, "APPROVED")
                          }
                          aria-label="Approve"
                        >
                          <Check size={14} />
                        </button>
                        <button
                          className="decision-btn reject"
                          onClick={() =>
                            onDecision(assignment.id, sub.id, "REJECTED")
                          }
                          aria-label="Reject"
                        >
                          <XIcon size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}