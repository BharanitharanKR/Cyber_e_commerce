import React from "react";
import CheckCircle from "../assets/CheckCircle.png";
import { Link } from "react-router-dom";

const Confirmed = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[350px] text-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img
          src={CheckCircle}
          alt="Order Confirmed"
          className="w-16 h-16 mx-auto"
        />
        <h1 className="text-2xl font-semibold mt-4">
          Your order has been successfully placed!
        </h1>
        <p className="text-gray-600 mt-2">Thank you for shopping with us.</p>
      </div>
      <div className="flex gap-4 mt-6">
        <Link to="/">
          <button
            className="px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700"
            aria-label="Go to Home Page"
          >
            Go to Home
          </button>
        </Link>
        <Link to="/orders">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            aria-label="View Your Order"
          >
            View Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmed;
