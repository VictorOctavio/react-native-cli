/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

export default function App() {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}>
      <Text>Soy byocti</Text>
    </View>
  );
}
