import React, { useContext, createContext, useCallback, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';

interface ThemeContextData {
  toggleTheme(): void;
  theme: Theme;
}

interface Theme {
  name: string;
  colors: {
    primary: string,
    black: string,
    gray: string,
    tag: string,
    green: string,
    red: string,
    purple: string,
  }
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = useCallback(() => {
    if (theme.name === 'dark') {
      setTheme(lightTheme);
    }
    else if (theme.name === 'light') {
      setTheme(darkTheme);
    };

  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme }}
    >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;