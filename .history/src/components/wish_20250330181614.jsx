import React from "react";
import { Link } from "react-router-dom";

const wish = () => {
  return (
    <div>
      <div class>
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
