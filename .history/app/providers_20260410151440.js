"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#235656",
    },
  },
});

export default function Providers({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}