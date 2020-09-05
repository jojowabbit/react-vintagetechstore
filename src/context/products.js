import React, { useState, useEffect } from "react";
import axios from "axios";

import url from "../utils/URL";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/products`)
      .then((storeProducts) => console.log(storeProducts));
    setLoading(false);
    return () => {};
  }, []);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
};
