import React from "react";
import AllProducts from "../components/AllProducts";
import Product from "../components/Product";
import ProductGrid from "../components/ProductGrid";
import Tracker from "../components/Tracker";
import ProductPage from "../components/ProductPage";
import Description from "../components/Description";
import ApiPage from "../components/ApiPage";
import Navb from "../components/Navbar";
const ProductName = () => {
  return (
    <div className="mt-28">
      <AllProducts />
      <Tracker />
      <ProductPage />
      <Description />
      <ApiPage />
      <Navbar />
    </div>
  );
};

export default ProductName;
