import Badge from "../badge/Badge";
import "./QuizTable.css";

export default function QuizTable({ rows = [] }) {
  return (
    <div className="quiz-table-card">
      <table className="quiz-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Module</th>
            <th>Questions</th>
            <th>Attempts</th>
            <th>Percentage</th>
            <th>Status</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.title}>
              <td>{row.title}</td>
              <td>{row.module}</td>
              <td>
                <span className="quiz-pill">{row.questions}</span>
              </td>
              <td>
                <span className="quiz-pill">{row.attempts}</span>
              </td>
              <td>{row.percentage}%</td>
              <td>
                <Badge variant={row.status === "PASSED" ? "green" : "red"}>
                  {row.status}
                </Badge>
              </td>
              <td className="quiz-note">{row.note || "—"}</td>
              <td>
                <button className="quiz-action-btn" disabled>
                  {row.action}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="quiz-footer-note">
        Contact your instructor if you have any issues accessing your
        quizzes.
      </p>
    </div>
  );
}