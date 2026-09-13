import { CheckCircle2, Clock } from "lucide-react";
import "./TopicRow.css";

export default function TopicRow({ title, completedDate, assignments = [] }) {
  const isDone = Boolean(completedDate);

  return (
    <div className="topic-row">
      <div className="topic-row-header">
        <span className={`topic-icon ${isDone ? "done" : "pending"}`}>
          {isDone ? <CheckCircle2 size={15} /> : <Clock size={15} />}
        </span>
        <div>
          <p className="topic-title">{title}</p>
          {completedDate && (
            <p className="topic-date">Completed: {completedDate}</p>
          )}
        </div>
      </div>

      {assignments.length > 0 && (
        <ul className="topic-assignments">
          {assignments.map((assignment) => (
            <li key={assignment}>{assignment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}