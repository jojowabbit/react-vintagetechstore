import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";

// react-stripe-elements
import submitOrder from "../strapi/submitOrder";

export default function Checkout() {
  const { user, showAlert, hideAlert, alert } = useContext(UserContext);
  const { cart, total, clearCart } = useContext(CartContext);
  const history = useHistory();

  // state values
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const isEmpty = !name || alert.show;

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  if (cart.length < 1) {
    return <EmptyCart />;
  }

  return <h1>Checkout</h1>;
}
