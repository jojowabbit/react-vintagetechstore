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

  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total:
          <span>RM {total}</span>
        </h3>
        {/* single input */}
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* end of single input */}
        {/* card element */}
        <div className="stripe-input">
          <label htmlFor="card-element">Credit or Debit Card</label>
          <p className="stripe-info">
            Card number: <span>4242 4242 4242 4242</span>
            <br />
            enter any 5 digits for the zipcode <br />
            enter any 3 digits for the cvc
          </p>
        </div>
        {/* end of card element */}
        {/* Stripe Elements */}
        {/* stripe errors */}
        {error && <p className="form-empty">{error}</p>}
        {/* empty value */}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-block btn-primary"
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
}
