import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  return <h1>ProductDetails Product id: {id}</h1>;
};

export default ProductDetails;
