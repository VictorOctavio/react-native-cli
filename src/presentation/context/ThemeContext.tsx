/* eslint-disable react/react-in-jsx-scope */
import {PropsWithChildren} from 'react';
import {useColorScheme} from 'react-native';
import {
  PaperProvider,
  MD2LightTheme as DefaultTheme,
  MD2DarkTheme as DarkDefaultTheme,
} from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5EDED',
    primary: 'tomato',
    text: '#2F3645',
  },
};

const darkTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DarkDefaultTheme.colors,
    background: '#2F3645',
    primary: 'tomato',
    text: '#EBF4F6',
  },
};

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorTheme = useColorScheme();
  return (
    <PaperProvider theme={colorTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </PaperProvider>
  );
};
