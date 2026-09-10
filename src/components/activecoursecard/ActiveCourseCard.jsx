import { Hash, MapPin } from "lucide-react";
import "./ActiveCourseCard.css";

export default function ActiveCourseCard({
  title,
  status,
  schedule = [],
  progress = 0,
  batch,
  roll,
  campus,
  city,
}) {
  return (
    <div className="course-card">
      <div className="course-header">
        <h3 className="course-title">{title}</h3>
        <span className="course-status">{status}</span>
      </div>

      <div className="course-schedule">
        {schedule.map((slot) => (
          <span key={slot} className="course-slot">
            {slot}
          </span>
        ))}
      </div>

      <div className="course-progress">
        <div className="course-progress-row">
          <span className="course-progress-label">Progress</span>
          <span className="course-progress-percent">
            {progress}% Completed
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="course-meta">
        <div className="course-meta-item">
          <Hash size={14} />
          <span>Batch:</span>
          <strong>{batch}</strong>
        </div>
        <div className="course-meta-item">
          <span className="meta-hash">#</span>
          <span>Roll:</span>
          <strong>{roll}</strong>
        </div>
        <div className="course-meta-item">
          <MapPin size={14} />
          <span>Campus:</span>
          <strong>{campus}</strong>
        </div>
        <div className="course-meta-item">
          <MapPin size={14} />
          <span>City:</span>
          <strong>{city}</strong>
        </div>
      </div>
    </div>
  );
}