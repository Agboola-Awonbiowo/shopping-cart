import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS } from '../constants/colors';

const IconButton = ({ onPress, children, style, disabled }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        ({ pressed }) => pressed && styles.pressed,
        styles.container,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text>{children}</Text>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: 48,
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: '#fff',
  },
});
