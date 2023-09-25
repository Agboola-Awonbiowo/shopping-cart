import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';
import IconButton from './IconButton';

const Cartcard = ({
  productImage,
  price,
  name,
  handleDecrement,
  handleIncrement,
  quantity,
  handleDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={productImage} style={styles.image} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
          <Pressable onPress={handleDelete}>
            <Ionicons name="trash-outline" size={24} />
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton onPress={handleDecrement} style={styles.updateqty}>
          <Ionicons name="md-remove-outline" size={16} />
        </IconButton>
        <Text style={styles.quantity}>{quantity}</Text>
        <IconButton onPress={handleIncrement} style={styles.updateqty}>
          <Ionicons name="md-add-outline" size={16} />
        </IconButton>
      </View>
    </View>
  );
};

export default Cartcard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    marginHorizontal: 24,
    marginBottom: 24,
  },
  wrapper: {
    flexDirection: 'row',
  },
  image: {
    width: 59.925,
    height: 94.368,
    marginRight: 20,
  },
  name: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 8,
    marginTop: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primary,
    marginBottom: 8,
  },
  updateqty: {
    height: 32,
    width: 32,
    borderWidth: 0,
    backgroundColor: 'white',
  },
  quantity: {
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
});
