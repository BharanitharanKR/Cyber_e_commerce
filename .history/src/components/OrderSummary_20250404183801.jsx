import React from "react";
import { Link } from "react-router-dom";
import TV from "../assets/TV.png";
import head from "../assets/head.png";

const OrderSummary = () => {
  const cartItems = [
    {
      id: 1,
      name: "Canon EOS 1500D DSLR Camera",
      price: 70,
      quantity: 1,
      image: head,
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones",
      price: 250,
      quantity: 3,
      image: TV,
    },
  ];

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = 24;
  const tax = 61.99;
  const shipping = 0; // Free shipping
  const total = subTotal - discount + tax;

  return (
    <div className="w-[350px] border border-gray-300 rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-start gap-4 mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 object-cover rounded"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-800 truncate">{item.name}</p>
            <p className="text-sm text-gray-500">
              {item.quantity} x{" "}
              <span className="text-red-500 font-medium">${item.price}</span>
            </p>
          </div>
        </div>
      ))}

      {/* Price Breakdown */}
      <div className="border-t border-gray-300 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Sub-total</span>
          <span className="font-medium text-gray-800">
            ${subTotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? "Free" : `$${shipping}`}
          </span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Discount</span>
          <span className="font-medium text-red-500">-${discount}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="font-medium text-gray-800">${tax.toFixed(2)}</span>
        </div>
      </div>

      {/* Total Price */}
      <div className="border-t border-gray-300 pt-4 mt-2 mb-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>${total.toFixed(2)} USD</span>
      </div>

      {/* Checkout Button */}
      <Link to="/Confirm">
        <button className="w-full bg-red-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition">
          PLACE ORDER →
        </button>
      </Link>
    </div>
  );
};

export default OrderSummary;
