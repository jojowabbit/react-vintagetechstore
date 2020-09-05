import React, { useContext } from "react";

import { ProductContext } from "../context/products";

const Products = () => {
  const { loading, products, featured } = useContext(ProductContext);
  return <h1>Products</h1>;
};

export default Products;
