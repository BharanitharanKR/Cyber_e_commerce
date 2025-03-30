import React from "react";
import { Link } from "react-router-dom";

const Wish = () => {
  return (
    <div className="flex items-center justify-center h-[400px] bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80 text-center">
        <h1 className="text-lg font-semibold text-gray-800 mb-4">
          Your Wishlist is Empty
        </h1>
        <p className="text-gray-600 mb-6">
          Start adding items to your wishlist to view them here!
        </p>
        <Link to="/">
          <button className="bg-red-600 text-white px-5 py-2 rounded-lg transition-transform transform hover:scale-105 hover:bg-red-700">
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Wish;
