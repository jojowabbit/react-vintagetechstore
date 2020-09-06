import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
//import { UserContext } from "../context/user";

export default function Cart() {
  const { cart, total } = useContext(CartContext);
  const user = false;
  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return <h1>Cart</h1>;
}
