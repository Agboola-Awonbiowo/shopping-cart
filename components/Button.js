import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const Button = ({ btnStyle, details, children, textStyle, onPress }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, btnStyle]}>
      {!details && (
        <Ionicons name="ios-basket-outline" size={24} color="#fff" />
      )}
      <Text style={[styles.btnText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8.384,
    paddingHorizontal: 16.227,
    borderRadius: 50,
  },
  btnText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'white',
    marginLeft: 3,
  },
});
