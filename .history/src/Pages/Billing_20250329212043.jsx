import React from "react";
import CheckOut from "../components/CheckOut";
import AllProducts from "../components/AllProducts";
import Confirmed from "../components/Confirmed";
const Billing = () => {
  return (
    <div>
      <AllProducts />
      <CheckOut />
      <Confirmed />
    </div>
  );
};

export default Billing;
