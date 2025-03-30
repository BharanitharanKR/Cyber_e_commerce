import React from "react";
import ipad from "../"
const Product = () => {
  return (
    <div className=" w-52 h-64  border-gray-50 bg-black">
      <div className=" top-2 left-2  p-2 flex justify-between">
        <div>
          <h1 className="bg-orange-600 ">HOT</h1>
        </div>
        <div>
          <h1 className="top2 right-2  bg-green-500">15%</h1>
        </div>
      </div>
      <div>
        <img src={ipad } />
      </div>
    </div>
  );
};

export default Product;
