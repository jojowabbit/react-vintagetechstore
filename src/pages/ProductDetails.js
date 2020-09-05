import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { ProductContext } from "../context/products";
import Loading from "../components/Loading";

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const product = products.find((item) => item.id === parseInt(id));

  // rather than check loading = t/f, use this to check if array is empty
  // if we navigate from product page, id will be pushed, if we refresh the page, if will throw error because products is empty
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description,
    } = product;
    return (
      <section className="single-product">
        <img src={url} alt={title} className="single-product-imagw" />
        <article>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <p>{description}</p>
          <button
            onClick={() => {
              //add to cart
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
};

export default ProductDetails;
