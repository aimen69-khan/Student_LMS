import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import "./HighlightCard.css";

export default function HighlightCard({
  greeting,
  message,
  value,
  valueLabel,
  ctaLabel = "View Students",
  ctaPath = "/admin-students",
}) {
  const navigate = useNavigate();

  return (
    <div className="highlight-card">
      <div className="highlight-icon">
        <GraduationCap size={26} />
      </div>
      <p className="highlight-greeting">{greeting}</p>
      <p className="highlight-message">{message}</p>
      <p className="highlight-value">{value}</p>
      <p className="highlight-value-label">{valueLabel}</p>
      <button className="highlight-cta" onClick={() => navigate(ctaPath)}>
        {ctaLabel}
      </button>
    </div>
  );
}