import React from "react";
import { Link } from "react-router-dom";

const wish = () => {
  return (
    <div>
      <div className="w-52 h-60 mt-48 p-8 mx-auto items-center">
        <h1> Your Wishlist is Empty </h1>
        <Link to="/">
          {" "}
          <button>Go To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default wish;
