import React, { useContext, useState } from "react";

import { CartContext } from "../context/cart";

export default function Cart() {
  const { cart, total } = useContext(CartContext);
  console.log(total, cart);
  return <h1>Cart</h1>;
}
