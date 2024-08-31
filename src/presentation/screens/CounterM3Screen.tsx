import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FAB, useTheme} from 'react-native-paper';
import {globalStyles} from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const CounterM3Screen = () => {
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
      <Text numberOfLines={1} ellipsizeMode="tail" style={globalStyles.title}>
        Counter: {number}
      </Text>

      <Text numberOfLines={1} ellipsizeMode="tail">
        <Icon name="accessibility-outline" size={20} />
      </Text>

      <FAB
        label=""
        onPress={increment}
        onLongPress={reset}
        style={globalStyles.fab}
        // icon={() => <Icon name="add-outline" size={20} />}
        icon={'add-outline'}
      />
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
});
