import * as React from 'react';
import {AppRegistry, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {name as appName} from './app.json';
import {ThemeProvider} from '@/presentation/context/ThemeContext';
import App from '@/presentation/screens/App';
import {CounterScreen} from '@/presentation/screens/CounterScreen';

export default function Main() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#2F3645'} />
        {/* <App /> */}
        <CounterScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
