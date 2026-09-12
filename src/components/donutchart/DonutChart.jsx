import { ThemeProvider } from "@mui/material/styles";
import { PieChart } from "@mui/x-charts/PieChart";
import muiTheme from "../../components/theme/muiTheme";
import "./DonutChart.css";


export default function DonutChart({ title, centerValue, centerLabel, data = [] }) {
  return (
    <div className="donut-card">
      <h3 className="donut-title">{title}</h3>

      <div className="donut-chart-wrap">
        <ThemeProvider theme={muiTheme}>
          <PieChart
            series={[
              {
                data,
                innerRadius: 55,
                outerRadius: 70,
                paddingAngle: 3,
                cornerRadius: 14,
                cx: "65%",
                cy: "50%",
              },
            ]}
            height={180}
            width={180}
            margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
            slotProps={{ legend: { hidden: true } }}
            tooltip={{ trigger: "item" }}
          />
        </ThemeProvider>

        <div className="donut-center">
          <p className="donut-center-value">{centerValue}</p>
          <p className="donut-center-label">{centerLabel}</p>
        </div>
      </div>

      <div className="donut-legend">
        {data.map((item) => (
          <div className="donut-legend-item" key={item.label}>
            <span
              className="donut-legend-dot"
              style={{ background: item.color }}
            />
            <span className="donut-legend-label">{item.label}</span>
            <span className="donut-legend-value">{item.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}