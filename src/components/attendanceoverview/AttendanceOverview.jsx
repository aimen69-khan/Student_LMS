import "./AttendanceOverview.css";

export default function AttendanceOverview({ message, percent }) {
  return (
    <div className="attendance-overview-card">
      <div className="attendance-overview-top">
        <div>
          <h3 className="attendance-overview-title">Attendance Overview</h3>
          <p className="attendance-overview-msg">{message}</p>
        </div>
        <span className="attendance-overview-percent">{percent}%</span>
      </div>
      <div className="attendance-progress-track">
        <div
          className="attendance-progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}