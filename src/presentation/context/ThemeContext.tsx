/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import {darkPalette, lightPalette} from '@/config/theme/Tokens';
import {darkTheme, lightTheme} from '@/config/theme/Theme';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Palette} from '@/config/theme/Types';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  theme: ThemeColor;
  colors: Palette;
  toggleTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorTheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeColor>(colorTheme as ThemeColor);

  useEffect(() => {
    setTheme(colorTheme as ThemeColor);
  }, [colorTheme]);

  const handleTheme = (theme: ThemeColor) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        colors: theme === 'light' ? lightTheme : darkTheme,
        toggleTheme: (theme: ThemeColor) => handleTheme(theme),
      }}>
      <PaperProvider
        theme={{
          colors: theme === 'light' ? lightPalette : darkPalette,
        }}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
