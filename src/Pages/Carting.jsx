import React from "react";
import Tracker from "../components/Tracker";
import AllProducts from "../components/AllProducts";
import Cart from "../components/Cart";
const Carting = () => {
  return (
    <div>
      <AllProducts />
      <Tracker />
      <Cart />
    </div>
  );
};

export default Carting;
