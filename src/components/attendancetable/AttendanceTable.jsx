import { ChevronDown } from "lucide-react";
import Badge from "../badge/Badge";
import "./AttendanceTable.css";

const statusVariant = {
  PRESENT: "green",
  ABSENT: "red",
  LEAVE: "gray",
};

export default function AttendanceTable({ rows = [], month }) {
  return (
    <div className="attendance-table-wrap">
      <div className="attendance-table-header">
        <div className="month-select">
          <span>{month}</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="attendance-table-card">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.classNo}>
                <td>{row.classNo}</td>
                <td>{row.date}</td>
                <td>
                  <Badge variant={statusVariant[row.status] || "gray"}>
                    {row.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}