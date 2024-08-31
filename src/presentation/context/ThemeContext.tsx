/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {PropsWithChildren} from 'react';
import {useColorScheme} from 'react-native';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkDefaultTheme,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const lightTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    background: '#F5EDED',
    primary: 'tomato',
  },
};

const darkTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DarkDefaultTheme.colors,
    background: '#2F3645',
    primary: 'tomato',
  },
};

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorTheme = useColorScheme();
  return (
    <PaperProvider
      settings={{
        icon: props => <Icon {...props} />,
      }}
      theme={colorTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </PaperProvider>
  );
};
