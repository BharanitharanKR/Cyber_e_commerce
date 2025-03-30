import React from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
  return (
    <div className="w-[350px] border border-gray-300 rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* First Item */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src="https://via.placeholder.com/50" // Replace with actual image URL
          alt="Canon EOS 1500D"
          className="w-12 h-12 object-cover rounded"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-800">
            Canon EOS 1500D DSLR Camera Body+ 18-...
          </p>
          <p className="text-sm text-gray-500">
            1 x <span className="text-red-500 font-medium">$70</span>
          </p>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex items-start gap-4 mb-6">
        <img
          src="https://via.placeholder.com/50" // Replace with actual image URL
          alt="Wired Headphones"
          className="w-12 h-12 object-cover rounded"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-800">
            Wired Over-Ear Gaming Headphones with U...
          </p>
          <p className="text-sm text-gray-500">
            3 x <span className="text-red-500 font-medium">$250</span>
          </p>
        </div>
      </div>

      {/* Price Details */}
      <div className="border-t border-gray-300 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Sub-total</span>
          <span className="font-medium text-gray-800">$320</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Discount</span>
          <span className="font-medium text-gray-800">$24</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="font-medium text-gray-800">$61.99</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-300 pt-4 mt-2 mb-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>$357.99 USD</span>
      </div>

      {/* Button */}
      <Link to="/Confirm">
        <button className="w-full bg-red-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition">
          PLACE ORDER →
        </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
