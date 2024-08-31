import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from 'react-native-paper';
import {PrimaryButton} from '../components';

export const CounterScreen = () => {
  const {colors} = useTheme();
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: colors.background,
      }}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
        Counter: {number}
      </Text>

      <View style={styles.wrapperButtons}>
        <PrimaryButton onPress={reset} text="reset" key={1} />
        <PrimaryButton onPress={increment} text="+1" key={2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 50,
  },
  wrapperButtons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
});
