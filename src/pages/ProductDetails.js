import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import Loading from "../components/Loading";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));

  // rather than check loading = t/f, use this to check if array is empty
  // if we navigate from product page, id will be pushed, if we refresh the page, if will throw error because products is empty
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = product;
    return (
      <section className="single-product">
        <img src={image} alt={title} className="single-product-imagw" />
        <article>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{description}</p>
          <button
            onClick={() => {
              //add to cart
              addToCart(product);
              history.push("/cart");
            }}
            className="btn btn-primary btn-block"
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
