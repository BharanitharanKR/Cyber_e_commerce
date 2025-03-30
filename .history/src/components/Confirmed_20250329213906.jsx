import React from "react";
import CheckCircle from "../assets/CheckCircle.png";

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
          Your order is successfully placed
        </h1>
        <p className="text-gray-600 mt-2">Thank you for shopping with us!</p>
      </div>
      <div className="flex gap-4 mt-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600">
          Go to Home
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          View Order
        </button>
      </div>
    </div>
  );
};

export default Confirmed;
