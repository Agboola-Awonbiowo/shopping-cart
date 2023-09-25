import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/colors';

const CustomBackbtn = ({targetRoute}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.button}>
    <Pressable
      onPress={() => navigation.navigate(targetRoute)}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name="chevron-back-outline" size={20} />
    </Pressable>
    </View>
  );
};

export default CustomBackbtn;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  button:{
    marginLeft: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8
  }
});
