import { Hash, MapPin, Users } from "lucide-react";
import "./ActiveCourseCard.css";

const iconMap = { hash: Hash, pin: MapPin, users: Users };
export default function ActiveCourseCard({
  title,
  status,
  schedule = [],
  progress = 0,
  meta = [],
}) {
  return (
    <div className="course-card">
      <div className="course-header">
        <h3 className="course-title">{title}</h3>
        {status && <span className="course-status">{status}</span>}
      </div>

      {schedule.length > 0 && (
        <div className="course-schedule">
          {schedule.map((slot) => (
            <span key={slot} className="course-slot">
              {slot}
            </span>
          ))}
        </div>
      )}

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

      {meta.length > 0 && (
        <div className="course-meta">
          {meta.map(({ icon, label, value }) => {
            const Icon = iconMap[icon] || Hash;
            return (
              <div className="course-meta-item" key={label}>
                <Icon size={14} />
                <span>{label}:</span>
                <strong>{value}</strong>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}