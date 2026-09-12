import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0d0d0d", paper: "#1a1a1a" },
    text: { primary: "#e4e4e4", secondary: "#9a9a9a" },
  },
  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },
});

export default muiTheme;