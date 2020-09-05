import React, { useState } from "react";

export const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(false);
  const [featured, setFeatured] = useState(false);

  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  );
};
