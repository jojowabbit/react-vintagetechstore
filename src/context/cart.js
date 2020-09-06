import React, { useState } from "react";

import localCart from "../utils/localCart";

export const CartContext = React.createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(localCart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
