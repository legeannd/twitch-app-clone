import React, { useContext, createContext, useCallback, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/themes';
import { AsyncStorage } from 'react-native';

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

  useEffect(() => {
    async function loadTheme () {
      const response = await AsyncStorage.getItem('@theme');
      response === 'light' ? setTheme(lightTheme) : setTheme(darkTheme);
    }

    loadTheme();
  }, [])

  const toggleTheme = useCallback( async () => {
    if (theme.name === 'dark') {
      await AsyncStorage.setItem('@theme', 'light');
      setTheme(lightTheme);
    }
    else if (theme.name === 'light') {
      await AsyncStorage.setItem('@theme', 'dark');
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