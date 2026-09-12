import { ThemeProvider } from "@mui/material/styles";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import muiTheme from "../../components/theme/muiTheme";
import "./MiniStatCard.css";


export default function MiniStatCard({
  icon: Icon,
  iconColor = "blue",
  label,
  value,
  change,
  data = [],
  sparklineColor = "#3f8cf4",
}) {
  const isPositive = change >= 0;

  return (
    <div className="mini-stat-card">
      <div className="mini-stat-top">
        <div className={`mini-stat-icon mini-stat-icon-${iconColor}`}>
          <Icon size={16} />
        </div>
        {typeof change === "number" && (
          <span className={`mini-stat-change ${isPositive ? "up" : "down"}`}>
            {isPositive ? "▲" : "▼"} {Math.abs(change)}%
          </span>
        )}
      </div>

      <p className="mini-stat-value">{value}</p>
      <p className="mini-stat-label">{label}</p>

      <div className="mini-stat-spark">
        <ThemeProvider theme={muiTheme}>
          <SparkLineChart
            data={data}
            height={40}
            colors={[sparklineColor]}
            showTooltip={false}
            showHighlight={false}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}