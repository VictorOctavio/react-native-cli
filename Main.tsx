import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from '@/presentation/App';
import {ThemeProvider} from '@/presentation/context/ThemeContext';

export default function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
