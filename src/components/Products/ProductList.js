import React from "react";

import Product from "./Product";

const ProductList = ({ title, products }) => {
  return (
    <section className="section">
      <h2 className="section-title">
        <div className="products-center">
          {products.map((item) => {
            return <Product key={item.id} {...item} />;
          })}
        </div>
      </h2>
    </section>
  );
};

export default ProductList;
