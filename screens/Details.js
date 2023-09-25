import { Ionicons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Accordion from '../components/Accordion';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import IconButton from '../components/IconButton';
import TextWithLimit from '../components/TextWithLimit';
import { COLORS } from '../constants/colors';
import { CartContext } from '../store/cart-context';
import products from '../utils/product-data';

const Details = ({ route, navigation }) => {
  const cartCtx = useContext(CartContext);
  const [qty, setQty] = useState(1);
  const id = route.params.productId;
  const product = products.find((item) => item.id === id);
  function addQty() {
    setQty(qty + 1);
  }
  function reduceQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }
  const isButtonDisabled = qty < 2;
  function addProductToCart() {
    const isItemInCart = cartCtx.ids.includes(id);
    if (!isItemInCart) {
      cartCtx.addToCart(id);
      navigation.navigate('CartScreen', {
        productId: id,
        quantity: qty,
      });
    } else {
      Alert.alert('Item Already in Cart', 'This item is already in your cart.');
    }
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContent}>
      <View style={styles.innerContainer}>
        <Carousel items={product.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{`£${product.price}`}</Text>
      </View>
      <View style={styles.text}>
        <TextWithLimit text={product.details} limit={30} />
        <View style={styles.accordion}>
          <Accordion title="Ingredients" content={product.ingrdients} />
          <Accordion
            title="Nutritional Information"
            content={product.nutritioninfo}
          />
          <Accordion title="How to Prepare" content={product.prepare} />
          <Accordion title="Dietary Information" content={product.dietInfo} />
          <Accordion
            title="Storage Information"
            content={product.preservation}
          />
          <Accordion
            title="Extra"
            content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <IconButton disabled={isButtonDisabled} onPress={reduceQty}>
          <Ionicons name="md-remove-outline" size={24} />
        </IconButton>
        <Text style={styles.quantity}>{qty}</Text>
        <IconButton onPress={addQty}>
          <Ionicons name="md-add-outline" size={24} />
        </IconButton>
      </View>
      <View style={styles.cartBtnContainer}>
        <Button onPress={addProductToCart} details btnStyle={styles.button}>
          Add to cart
        </Button>
        <Button
          details
          btnStyle={styles.plainBtn}
          textStyle={styles.plainBtnText}
        >
          Subscribe to a Plan
        </Button>
      </View>
      </View>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
   paddingVertical: 20
  },
  innerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.textBlack,
  },
  price: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 24,
  },
  text: {
    marginHorizontal: 24,
  },
  accordion: {
    marginTop: 44,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 40,
    alignItems: 'center',
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textBlack,
  },
  cartBtnContainer: {
    marginHorizontal: 24,
    marginTop: 24,
  },
  button: {
    height: 48,
  },
  plainBtn: {
    backgroundColor: 'white',
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginTop: 16,
    marginBottom: 30
  },
  plainBtnText: {
    color: COLORS.primary,
  },
});
