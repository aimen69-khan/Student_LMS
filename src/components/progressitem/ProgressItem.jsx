import { useState } from "react";
import { CheckCircle2, Clock, ChevronDown } from "lucide-react";
import "./ProgressItem.css";

export default function ProgressItem({ title, completed, total, percent }) {
  const [open, setOpen] = useState(false);
  const isDone = total > 0 && completed === total;

  return (
    <div className={`progress-item ${open ? "open" : ""}`}>
      <button
        className="progress-item-row"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <div className="progress-item-left">
          <span
            className={`progress-status-icon ${isDone ? "done" : "pending"}`}
          >
            {isDone ? <CheckCircle2 size={16} /> : <Clock size={16} />}
          </span>
          <div>
            <p className="progress-item-title">{title}</p>
            <p className="progress-item-sub">
              Topics: {completed}/{total}
            </p>
          </div>
        </div>

        <div className="progress-item-right">
          {percent > 0 ? (
            <span className="progress-percent-badge">{percent}%</span>
          ) : (
            <span className="progress-percent-zero">{percent}</span>
          )}
          <span className="progress-toggle" aria-hidden="true">
            <ChevronDown size={16} />
          </span>
        </div>
      </button>

      {open && (
        <div className="progress-item-details">
          <p>Detailed topic breakdown coming soon.</p>
        </div>
      )}
    </div>
  );
}