import { ThemeProvider } from "@mui/material/styles";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import muiTheme from "../../components/theme/muiTheme";
import "./AnalyticsChart.css";

const axisSx = {
  "& .MuiChartsAxis-line": { stroke: "#2a2a2a" },
  "& .MuiChartsAxis-tick": { stroke: "#2a2a2a" },
  "& .MuiChartsAxis-tickLabel": { fill: "#9a9a9a" },
  "& .MuiChartsLegend-series text": { fill: "#c4c4c4 !important" },
  "& .MuiChartsGrid-line": { stroke: "#232323" },
};


export default function AnalyticsChart({
  type = "line",
  title,
  xLabels = [],
  series = [],
  colors = ["#3f8cf4", "#22c55e", "#a855f7"],
  height = 280,
}) {
  const ChartComponent = type === "bar" ? BarChart : LineChart;

  return (
    <div className="analytics-card">
      <h3 className="analytics-title">{title}</h3>
      <ThemeProvider theme={muiTheme}>
        <div className="analytics-chart-scroll">
          <ChartComponent
            height={height}
            xAxis={[
              { scaleType: type === "bar" ? "band" : "point", data: xLabels },
            ]}
            series={series}
            colors={colors}
            grid={{ horizontal: true }}
            sx={axisSx}
          />
        </div>
      </ThemeProvider>
    </div>
  );
}