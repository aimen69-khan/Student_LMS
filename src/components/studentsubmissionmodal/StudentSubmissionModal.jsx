import Modal from "../modal/Modal";
import Badge from "../badge/Badge";
import Button from "../button/Button";
import "./StudentSubmissionModal.css";

const statusVariant = {
  PENDING: "gray",
  SUBMITTED: "blue",
  APPROVED: "green",
  REJECTED: "red",
};

export default function StudentSubmissionModal({ submission, onClose, onDecision }) {
  if (!submission) return null;

  const handleDecision = (status) => {
    onDecision(submission.id, status);
    onClose();
  };

  return (
    <Modal title="Review submission" onClose={onClose}>
      <div className="submission-modal-info">
        <p className="submission-modal-name">{submission.studentName}</p>
        <p className="submission-modal-meta">Roll No: {submission.rollNo}</p>
        <p className="submission-modal-meta">
          Submitted: {submission.submittedOn}
        </p>
        <div className="submission-modal-status">
          <Badge variant={statusVariant[submission.status] || "gray"}>
            {submission.status}
          </Badge>
        </div>
      </div>

      <div className="submission-modal-actions">
        <div className="submission-modal-btn-wrap">
          <Button variant="secondary" onClick={() => handleDecision("REJECTED")}>
            Reject
          </Button>
        </div>
        <div className="submission-modal-btn-wrap">
          <Button variant="primary" onClick={() => handleDecision("APPROVED")}>
            Approve
          </Button>
        </div>
      </div>
    </Modal>
  );
}