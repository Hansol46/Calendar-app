import { Components, createTheme } from "@mui/material";
import { ShapeOptions } from "@mui/system";
// Colors
import { grey, common } from "@mui/material/colors";
// Types
import { Themes } from "../models";

const shape: ShapeOptions = {
  borderRadius: 8,
};

const components: Components = {
  MuiTypography: {
    styleOverrides: {
      h1: { fontWeight: 800, fontSize: "2.25rem", letterSpacing: "0.2px" },
      h2: { fontWeight: 700, fontSize: "1.5rem", letterSpacing: "0.1px" },
      h3: { fontWeight: 700, fontSize: "1.25rem" },
      h4: { fontWeight: 500, fontSize: "1rem" },
      h5: { fontWeight: 500, fontSize: "0.875rem" },
      h6: { fontWeight: 500, fontSize: "0.675rem" },
    },
  },
};

/**
 * Светлая тема
 */
export const lightTheme = createTheme({
  direction: "ltr",
  shape,
  components,
  palette: {
    mode: "light",
    background: {
      default: "#E7E8ED",
      paper: common.white,
    },
    primary: {
      main: "#008FB4",
      light: "#57bfe6",
      dark: "#006184",
      contrastText: common.white,
    },
    secondary: {
      main: "#10c8d2",
      light: "#67fbff",
      dark: "#0097a1",
      contrastText: common.white,
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
});

/**
 * Темная тема
 */
export const darkTheme = createTheme({
  components,
  palette: {
    mode: "dark",
    background: {
      default: "#1c2025",
      paper: "#282C34",
    },
    primary: {
      main: "#008FB4",
      light: "#57bfe6",
      dark: "#006184",
      contrastText: common.white,
    },
    secondary: {
      main: "#10c8d2",
      light: "#67fbff",
      dark: "#0097a1",
      contrastText: common.white,
    },
    text: {
      primary: grey[50],
      secondary: grey[400],
    },
  },
});

/**
 * Export themes
 */
export const themes: Themes = {
  lightTheme,
  darkTheme,
};
