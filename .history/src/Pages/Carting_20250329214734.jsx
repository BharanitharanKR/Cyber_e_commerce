import React from "react";
import Tracker from "../components/Tracker";
import AllProducts from "../components/AllProducts";

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
