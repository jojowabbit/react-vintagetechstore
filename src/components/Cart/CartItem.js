import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import { CartContext } from "../../context/cart";

const CartItem = ({ id, title, price, image, amount }) => {
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h5>RM {price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => console.log("item removed")}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => console.log("amount ++")}
        >
          <FaAngleUp />
        </button>
        <p className="item-amount">{price}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => console.log("amount --")}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
