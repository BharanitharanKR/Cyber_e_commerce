import React from "react";
import AllProducts from "../components/AllProducts";
import CheckCircle from "../assets/CheckCircle.png";
const Confirmed = () => {
  return (
    <div className="">
      <div>
        <img src={CheckCircle} />
        <h1>Your order is successfully place</h1>
        <p></p>
      </div>
      <div className="flex">
        <button>Go to Home</button>
        <button>View Order</button>
      </div>
    </div>
  );
};

export default Confirmed;
