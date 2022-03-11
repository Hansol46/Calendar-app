import { Components, createTheme } from "@mui/material";

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

export const lightTheme = createTheme({
  components,
  palette: {
    mode: "light",
  },
});

export const darkTheme = createTheme({
  components,
  palette: {
    mode: "dark",
  },
});
