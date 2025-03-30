import React from "react";

const Tracked = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[600px]">
        <h1 className="text-3xl font-bold text-red-600 text-center">
          Order Tracking
        </h1>

        {/* Order Status */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">
            Order ID: <span className="text-gray-600">#12345</span>
          </p>
          <p className="text-lg font-semibold">
            Status: <span className="text-green-600">Shipped</span>
          </p>
          <p className="text-lg font-semibold">
            Expected Delivery:{" "}
            <span className="text-gray-600">March 30, 2025</span>
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 flex items-center space-x-2">
          <div className="w-1/3 text-center">
            <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <p className="text-sm mt-2">Order Placed</p>
          </div>
          <div className="w-1/3 text-center">
            <div className="w-10 h-10 bg-yellow-500 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <p className="text-sm mt-2">Shipped</p>
          </div>
          <div className="w-1/3 text-center">
            <div className="w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center">
              ✓
            </div>
            <p className="text-sm mt-2">Delivered</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
