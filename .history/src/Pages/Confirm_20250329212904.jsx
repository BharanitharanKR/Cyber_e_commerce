import React from "react";
import Confirmed from "../components/Confirmed";
import AllProducts from "../components/AllProducts";
import Tracker from "../components/Tracker";
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
