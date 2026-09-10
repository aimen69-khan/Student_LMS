import { ChevronRight, MessageSquare } from "lucide-react";
import "./Topbar.css";

export default function Topbar({ breadcrumb = [] }) {
  return (
    <header className="topbar">
      <div className="breadcrumb">
        {breadcrumb.map((item, i) => (
          <span key={item} className="breadcrumb-item">
            {i > 0 && <ChevronRight size={14} className="breadcrumb-sep" />}
            <span
              className={
                i === breadcrumb.length - 1 ? "breadcrumb-current" : ""
              }
            >
              {item}
            </span>
          </span>
        ))}
      </div>

      <button className="feedback-btn">
        <MessageSquare size={16} />
        Feedback
      </button>
    </header>
  );
}