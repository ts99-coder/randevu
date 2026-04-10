"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function Providers({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}