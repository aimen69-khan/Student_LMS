import { Copy } from "lucide-react";
import "./FeeTable.css";

export default function FeeTable({ rows = [] }) {
  return (
    <div className="fee-card">
      <table className="fee-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Due date</th>
            <th>Voucher ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.voucherId}>
              <td>{row.month}</td>
              <td>{row.amount}</td>
              <td>{row.type}</td>
              <td>{row.dueDate}</td>
              <td>
                <span className="voucher-id">{row.voucherId}</span>
                <button
                  className="copy-btn"
                  onClick={() => navigator.clipboard.writeText(row.voucherId)}
                  aria-label="Copy voucher ID"
                >
                  <Copy size={14} />
                </button>
              </td>
              <td>
                <span
                  className={`fee-status fee-status-${row.status.toLowerCase()}`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}