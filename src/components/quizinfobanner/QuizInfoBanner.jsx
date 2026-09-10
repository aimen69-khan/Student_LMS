import { AlertTriangle } from "lucide-react";
import "./QuizInfoBanner.css";

export default function QuizInfoBanner({ items = [] }) {
  return (
    <div className="quiz-banner">
      <div className="quiz-banner-header">
        <AlertTriangle size={16} />
        <h3>Important Information</h3>
      </div>
      <ul className="quiz-banner-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}