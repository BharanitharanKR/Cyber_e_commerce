import React from "react";
import AllProducts from "../components/AllProducts";
import CheckCircle from "../assets/CheckCircle.png";
const Confirmed = () => {
  return (
    <div className="">
      <div>
        <img src={CheckCircle} />
        <h1>Your order is successfully place</h1>
      </div>
    </div>
  );
};

export default Confirmed;
