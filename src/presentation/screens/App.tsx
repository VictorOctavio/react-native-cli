import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, useTheme} from 'react-native-paper';

export default function App() {
  const {colors} = useTheme();
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: colors.background,
      }}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        SOY BYOCT1 JUNIOR SOY BYOCT1 JUNIOR SOY BYOCT1 JUNIOR
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});
