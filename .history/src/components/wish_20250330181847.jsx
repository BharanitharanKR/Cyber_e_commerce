import React from "react";
import { Link } from "react-router-dom";

const wish = () => {
  return (
    <div>
      <div className="w-52 h-60 mt-48 space-y-3 mx-auto items-center">
        <h1 className="p-4 text-black font-bold "> Your Wishlist is Empty </h1>
        <Link to="/">
          {" "}
          <button className="text-white bg-red">Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default wish;
