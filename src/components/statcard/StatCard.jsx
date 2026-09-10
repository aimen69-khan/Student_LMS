import {
  Clock,
  GraduationCap,
  BookOpen,
  Calendar,
  CheckCircle2,
  XCircle,
  ClipboardList,
} from "lucide-react";
import "./StatCard.css";

const icons = {
  clock: Clock,
  cap: GraduationCap,
  book: BookOpen,
  calendar: Calendar,
  check: CheckCircle2,
  x: XCircle,
  list: ClipboardList,
};

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
        <p className="stat-value">{total ? `${value}/${total}` : value}</p>
        <p className="stat-label">{label}</p>
      </div>
      <div className={`stat-icon stat-icon-${iconColor}`}>
        <Icon size={18} />
      </div>
    </div>
  );
}