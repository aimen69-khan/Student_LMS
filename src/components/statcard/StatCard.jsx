import { Clock, GraduationCap } from "lucide-react";
import "./StatCard.css";

const icons = { clock: Clock, cap: GraduationCap };

export default function StatCard({
  value,
  total,
  label,
  icon = "clock",
  iconColor = "green",
}) {
  const Icon = icons[icon] || Clock;

  return (
    <div className="stat-card">
      <div>
        <p className="stat-value">
          {value}/{total}
        </p>
        <p className="stat-label">{label}</p>
      </div>
      <div className={`stat-icon stat-icon-${iconColor}`}>
        <Icon size={18} />
      </div>
    </div>
  );
}