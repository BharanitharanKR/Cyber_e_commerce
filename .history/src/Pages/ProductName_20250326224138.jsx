import React from "react";
import AllProducts from "../components/AllProducts";
import Product from "../components/Product";
import ProductGrid from "../components/ProductGrid";
import Tracker from "../components/Tracker";
import ProductPage from "../components/ProductPage";
const ProductName = () => {
  return (
    <div className="mt-28">
      <AllProducts />
      <Tracker />
      <ProductPage />
    </div>
  );
};

export default ProductName;
