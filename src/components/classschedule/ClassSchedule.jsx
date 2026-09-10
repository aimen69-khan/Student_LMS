import { Calendar } from "lucide-react";
import "./ClassSchedule.css";

export default function ClassSchedule({ days = [] }) {
  return (
    <div className="schedule-card">
      <div className="schedule-header">
        <Calendar size={16} />
        <h3>Class Schedule</h3>
      </div>
      <div className="schedule-days">
        {days.map((day) => (
          <div
            key={day.label + day.date}
            className={`schedule-day ${day.active ? "active" : ""}`}
          >
            <span className="schedule-day-label">{day.label}</span>
            <span className="schedule-day-date">{day.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}