import { Eye, Upload, Pencil } from "lucide-react";
import Badge from "../badge/Badge";
import "./AssignmentTable.css";

const statusVariant = {
  SUBMITTED: "blue",
  "NOT SUBMITTED": "gray",
  APPROVED: "green",
};

export default function AssignmentTable({ rows = [] }) {
  return (
    <div className="assignment-card">
      <table className="assignment-table">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Topics</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className={row.hackathon ? "row-hackathon" : ""}
            >
              <td>
                <span className="assignment-name">{row.name}</span>
                {row.hackathon && (
                  <Badge variant="purple-filled">HACKATHON</Badge>
                )}
              </td>
              <td>
                {row.topics ? (
                  <Badge variant="blue">{row.topics} Topics</Badge>
                ) : (
                  <span className="no-topics">No topics</span>
                )}
              </td>
              <td>{row.dueDate}</td>
              <td>
                <Badge variant={statusVariant[row.status] || "gray"}>
                  {row.status}
                </Badge>
              </td>
              <td>
                <div className="action-cell">
                  <button className="icon-btn" aria-label="View">
                    <Eye size={16} />
                  </button>
                  {row.closed ? (
                    <span className="submissions-closed">
                      Submissions closed
                    </span>
                  ) : (
                    <>
                      <button className="icon-btn" aria-label="Upload">
                        <Upload size={16} />
                      </button>
                      <button className="icon-btn" aria-label="Edit">
                        <Pencil size={16} />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}