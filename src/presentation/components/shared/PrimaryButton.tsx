import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

interface Props {
  onPress?: () => void;
  text?: string;
}
export const PrimaryButton = ({onPress = () => {}, text = ''}: Props) => {
  const {colors} = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {backgroundColor: colors.primary},
        styles.button,
        pressed && styles.buttonPressed,
      ]}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
  },
});
