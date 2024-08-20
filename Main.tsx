import * as React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from '@/presentation/App';
import {PaperProvider} from 'react-native-paper';
import {theme} from '@/config/theme';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
