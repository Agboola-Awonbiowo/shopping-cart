import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import Cartcard from '../components/Cartcard';
import { CartContext } from '../store/cart-context';
import products from '../utils/product-data';

const Cart = ({ route }) => {
  const cartCtx = useContext(CartContext);
  const selectedProduct = products.filter((item) =>
    cartCtx.ids.includes(item.id)
  );
  const [itemQuantities, setItemQuantities] = useState({});

  useEffect(() => {
    if (route.params?.quantity !== undefined && route.params?.productId) {
      const productIdToUpdate = route.params.productId;
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productIdToUpdate]: route.params.quantity,
      }));
    }
  }, [route.params?.quantity, route.params?.productId]);

  const updateQuantity = (itemId, quantity) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: quantity,
    }));
  };

  const totalPrice = selectedProduct.reduce(
    (total, product) =>
      total + product.price * (itemQuantities[product.id] || 1),
    0
  );

  function renderCartProducts(itemData) {
    const itemId = itemData.item.id;
    const itemQuantity = itemQuantities[itemId] || 1;

    const handleIncrement = () => {
      const newQuantity = itemQuantity + 1;
      updateQuantity(itemId, newQuantity);
    };

    const handleDecrement = () => {
      if (itemQuantity > 1) {
        const newQuantity = itemQuantity - 1;
        updateQuantity(itemId, newQuantity);
      }
    };

    function removeProduct() {
      cartCtx.removeFromCart(itemData.item.id);
    }

    return (
      <Cartcard
        name={itemData.item.name}
        price={`£${itemData.item.price}`}
        productImage={itemData.item.image[0]}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        quantity={itemQuantities[itemData.item.id] || 1}
        handleDelete={removeProduct}
      />
    );
  }

  const renderFooter = () => (
    <View style={styles.bottomContainer}>
      <View style={styles.totalContainer}>
        <Text
          style={styles.total}
        >{`Total (${cartCtx?.ids?.length} items)`}</Text>
        <Text style={styles.price}>{`£${totalPrice.toFixed(2)}`}</Text>
      </View>
      <Button details btnStyle={styles.button} textStyle={styles.btnText}>
        Checkout - {`£${totalPrice.toFixed(2)}`}
      </Button>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartCtx?.ids?.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text>Your Cart is Empty</Text>
        </View>
      ) : (
        <FlatList
          data={selectedProduct}
          keyExtractor={(item) => item.id}
          renderItem={renderCartProducts}
        />
      )}
      {cartCtx?.ids?.length > 0 && renderFooter()}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    height: 48,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
