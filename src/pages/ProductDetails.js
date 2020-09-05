import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { id } = useParams();
  console.log(id);
  return <h1>ProductDetails Product id: {id}</h1>;
};

export default ProductDetails;
