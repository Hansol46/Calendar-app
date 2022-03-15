import { createContext, FC, useContext, useMemo } from "react";
import { createTheme, PaletteMode, ThemeProvider } from "@mui/material";
import { themes } from "../../settings";

type ThemeContextValue = {
  mode: PaletteMode;
};

const defaultMode: PaletteMode = "light";

/**
 * Контекст темы
 */
const ThemeContext = createContext<ThemeContextValue>({
  mode: defaultMode,
});

/**
 * Хук использующий контекст темы
 */
export const useThemeContext = () => useContext(ThemeContext);

/**
 * Провайдер темы
 */
export const MaterialThemeProvider: FC = ({ children }) => {
  const mode = "light";
  const theme = useMemo(() => createTheme(themes.lightTheme), []);
  return (
    <ThemeContext.Provider value={{ mode }}>
      <ThemeProvider theme={theme}> {children} </ThemeProvider>
    </ThemeContext.Provider>
  );
};
