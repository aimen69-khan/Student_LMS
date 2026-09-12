import { ThemeProvider } from "@mui/material/styles";
import { Gauge } from "@mui/x-charts/Gauge";
import muiTheme from "../../components/theme/muiTheme";
import "./GaugeCard.css";

export default function GaugeCard({
  label,
  value,
  valueLabel,
  changeText,
  color = "#3f8cf4",
}) {
  return (
    <div className="gauge-card">
      <ThemeProvider theme={muiTheme}>
        <Gauge
          width={90}
          height={90}
          value={value}
          startAngle={-110}
          endAngle={110}
          sx={{
            "& .MuiGauge-valueArc": { fill: color },
            "& .MuiGauge-referenceArc": { fill: "#2a2a2a" },
            "& .MuiGauge-valueText text": {
              fill: "#ffffff",
              fontSize: 16,
              fontWeight: 600,
            },
          }}
          text={({ value: v }) => `${v}%`}
        />
      </ThemeProvider>

      <div className="gauge-card-info">
        <p className="gauge-card-label">{label}</p>
        <p className="gauge-card-value">{valueLabel}</p>
        {changeText && <p className="gauge-card-change">{changeText}</p>}
      </div>
    </div>
  );
}