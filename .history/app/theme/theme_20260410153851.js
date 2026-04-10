import { createTheme } from "@mui/material/styles";

const lightPalette = {
  mode: "light",
  action: {
    disabledBackground: "rgba(0,0,0,0.11)",
  },
  // primary:   { ...common, main: '#7534ed', dark: darken('#7534ed', .2) },
  // secondary: { ...common, main: '#1f1929', dark: darken('#1f1929', .2) },
  // background:{ default: '#f5f5f5', paper: '#ffffff' },
  // divider: '#e0e0e0',
};

const darkPalette = {
  mode: "dark",
  action: {
    disabledBackground: "rgba(255,255,255,0.10)",
  },
  // primary:   { ...common, main: lighten('#7534ed', .3), dark: '#7534ed' },
  // secondary: { ...common, main: '#b2a9c8', dark: darken('#b2a9c8', .2) },
  // background:{ default: '#121212', paper: '#1e1e1e' },
  // divider: '#2c2c2c',
};

const baseThemeConfig = {
  typography: {
    fontSize: 12,
  },
};

export const getTheme = (mode) =>
  createTheme({
    palette: mode === "light" ? lightPalette : darkPalette,
    ...baseThemeConfig,

    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState?.disabled && {
              backgroundColor: theme.palette.action.disabledBackground,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.divider,
              },
            }),
          }),
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState?.disabled && {
              color: theme.palette.text.secondary,
              WebkitTextFillColor: theme.palette.text.secondary,
            }),
          }),
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState?.disabled && {
              color: theme.palette.text.secondary,
            }),
          }),
        },
      },

      MuiPickersOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.Mui-disabled": {
              backgroundColor: theme.palette.action.disabledBackground,

              "& .MuiPickersOutlinedInput-sectionsContainer": {
                color: theme.palette.text.secondary,
                opacity: 1, // prevent washed-out text
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.divider,
              },
            },
          }),
        },
      },

      MuiPickersSectionList: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.Mui-disabled": {
              color: theme.palette.text.secondary,
              opacity: 1,
            },
          }),
        },
      },

      MuiRadio: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState?.disabled && {
              color: theme.palette.text.secondary,
            }),
          }),
        },
      },

      MuiCheckbox: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            ...(ownerState?.disabled && {
              color: theme.palette.text.secondary,
            }),
          }),
        },
      },
    }
  });

export default getTheme;
