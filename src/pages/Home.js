import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary">
          our products
        </Link>
      </Hero>
      <FeaturedProducts />
    </>
  );
};

export default Home;
