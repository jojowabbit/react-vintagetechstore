import React, { useState, useEffect } from "react";

import localCart from "../utils/localCart";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    // localstorage
    // cart items
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    // total
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    // fixed to 2 decimal & convert from str to num
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  // remove item
  const removeItem = (id) => {
    const newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  };
  // increase amount
  const increaseAmount = (id) => {};
  // decrease amount
  const decreaseAmount = (id) => {};
  // add to cart
  const addToCart = (product) => {};
  // clear cart
  const clearCart = () => {};

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
