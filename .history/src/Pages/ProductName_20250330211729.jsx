import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AllProducts from "../components/AllProducts";
import Product from "../components/Product";
import ProductGrid from "../components/ProductGrid";
import Tracker from "../components/Tracker";
import ProductPage from "../components/ProductPage";
import Description from "../components/Description";
import ApiPage from "../components/ApiPage";
import Footer from "../components/Footer";
const ProductName = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-28">
      <AllProducts />
      <Tracker />
      <ProductPage />
      <Description />
      <ApiPage />
    </div>
  );
};

export default ProductName;
