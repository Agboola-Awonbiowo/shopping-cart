import { createContext, useState } from 'react';

export const CartContext = createContext({
  ids: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {},
});

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(id) {
    setCart((currentItemIds) => [...currentItemIds, id]);
  }
  function removeFromCart(id) {
    setCart((currentItemIds) =>
      currentItemIds.filter((itemId) => itemId !== id)
    );
  }
  const value = {
    ids: cart,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;