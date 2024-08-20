import React from 'react';
import {View, StyleSheet, Text, AppRegistry} from 'react-native';
import {name as appName} from '../../app.json';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Text>Soy byocti</Text>
    </View>
  );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
