import React, { useContext, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';
import AllProductGridTile from '../components/AllProductGridTile';
import SearchBar from '../components/SearchBar';
import { CartContext } from '../store/cart-context';
import products from '../utils/product-data';

const Menu = ({ navigation }) => {
  const cartCtx = useContext(CartContext);
  const [searchText, setSearchText] = useState('');
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('DetailsScreen', {
        productId: itemData.item.id,
      });
    }

    function addProductToCart() {
      const isItemInCart = cartCtx.ids.includes(itemData.item.id);
      if (!isItemInCart) {
        cartCtx.addToCart(itemData.item.id);
      } else {
        Alert.alert(
          'Item Already in Cart',
          'This item is already in your cart.'
        );
      }
    }
    return (
      <AllProductGridTile
        title={itemData.item.name}
        price={`£${itemData.item.price}`}
        productImage={itemData.item.image[0]}
        onPress={pressHandler}
        handlePress={addProductToCart}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={searchText ? filteredProducts : products}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        ListHeaderComponent={
          <SearchBar
            placeholder="Search"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        }
      />
    </View>
  );
};

export default Menu;
