import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS } from '../constants/colors';

const SearchBar = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  autoCorrect,
  styleInput,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Ionicons name="search-outline" size={16} color={COLORS.textBlack} />
      <TextInput
        style={[styles.inputStyle, styleInput]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        value={value}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    marginHorizontal: 18,
    marginTop: 16,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: COLORS.gray,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingLeft: 16,
    flexDirection: 'row',
    gap: 5,
  },
  inputStyle: {
    width: '100%',
  },
});
