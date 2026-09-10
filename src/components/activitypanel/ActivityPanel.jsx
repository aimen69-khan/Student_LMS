import { useState } from "react";
import "./ActivityPanel.css";

const tabs = ["Assignments", "Quizzes", "Events"];

const emptyMessages = {
  Assignments: "No pending assignments",
  Quizzes: "No upcoming quizzes",
  Events: "No upcoming events",
};

export default function ActivityPanel({ defaultTab = "Quizzes" }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="activity-card">
      <div className="activity-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`activity-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="activity-empty">
        <p>{emptyMessages[activeTab]}</p>
      </div>
    </div>
  );
}