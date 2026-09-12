import { Trash2 } from "lucide-react";
import Badge from "../../components/badge/Badge";
import "./TeacherQuizTable.css";

export default function TeacherQuizTable({ rows = [], onDelete }) {
  return (
    <div className="teacher-quiz-card">
      <table className="teacher-quiz-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Module</th>
            <th>Questions</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={6} className="teacher-quiz-empty">
                No quizzes yet — add one to get started.
              </td>
            </tr>
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>{row.title}</td>
                <td>{row.module}</td>
                <td>
                  <span className="teacher-quiz-pill">{row.questions}</span>
                </td>
                <td>{row.dueDate}</td>
                <td>
                  <Badge variant={row.status === "ACTIVE" ? "green" : "gray"}>
                    {row.status}
                  </Badge>
                </td>
                <td>
                  <button
                    className="teacher-quiz-delete"
                    onClick={() => onDelete(row.id)}
                    aria-label="Delete quiz"
                  >
                    <Trash2 size={15} />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}