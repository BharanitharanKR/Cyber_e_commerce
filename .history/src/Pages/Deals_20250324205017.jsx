import React from "react";

const Dealse = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar - Positioned Below Navbar */}
      <div className="w-full h-10 bg-red-500 mt-16 flex justify-center items-center">
        <ul className="flex gap-6 text-white text-sm font-semibold">
          <li className="cursor-pointer hover:underline">All Category</li>
          <li className="cursor-pointer hover:underline">Track Order</li>
          <li className="cursor-pointer hover:underline">Compare</li>
          <li className="cursor-pointer hover:underline">Customer Support</li>
          <li className="cursor-pointer hover:underline">Need Help?</li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Deals Page
        </h1>
      </div>
    </div>
  );
};

export default Deals;
