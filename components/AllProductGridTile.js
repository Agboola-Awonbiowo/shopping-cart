import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';
import Button from './Button';

const AllProductGridTile = ({
  title,
  onPress,
  price,
  productImage,
  handlePress,
}) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <View style={styles.icon}>
            <Ionicons name="heart-outline" size={24} color="#4A4A4A" />
          </View>
          <View style={styles.imageContainer}>
            <Image source={productImage} style={styles.image} />
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
          <Button onPress={handlePress}> Add to cart</Button>
        </View>
      </Pressable>
    </View>
  );
};

export default AllProductGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: 'white',
    shadowColor: COLORS.gray,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
  },
  icon: {
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  price: {
    color: COLORS.primary,
  },
  image: {
    width: 59.925,
    height: 94.368,
  },
  imageContainer: {
    alignItems: 'center',
  },
});
