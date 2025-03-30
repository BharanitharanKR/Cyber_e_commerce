import React from "react";
import Confirmed from "../components/Confirmed";
import AllProducts from "../components/AllProducts";

const Confirm = () => {
  return (
    <div>
      <AllProducts />
      <Tracker />
      <Confirmed />
    </div>
  );
};

export default Confirm;
