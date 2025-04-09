import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // Load cart items from localStorage on component mount
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);

    // If no items in cart, redirect back to shop
    if (items.length === 0) {
      navigate("/deals");
    }
  }, [navigate]);

  // Calculate totals
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subTotal > 200 ? 24 : 0; // Example discount logic
  const tax = subTotal * 0.07; // 7% tax
  const shipping = 0; // Free shipping
  const total = subTotal - discount + tax;

  // Handle order placement
  const handlePlaceOrder = () => {
    // Save order details to localStorage for confirmation page
    const orderDetails = {
      items: cartItems,
      pricing: {
        subTotal,
        discount,
        tax,
        shipping,
        total,
      },
      orderDate: new Date().toISOString(),
      orderId: "ORD-" + Date.now(),
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Clear cart after order is placed
    localStorage.removeItem("cartItems");

    // Navigate to confirmation page
    navigate("/Confirm");
  };

  return (
    <div className="w-[350px] border border-gray-300 rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-start gap-4 mb-4">
          <img
            src={item.img} // Use img from cart item structure
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
          <span className="font-medium text-red-500">
            {discount > 0 ? `-$${discount.toFixed(2)}` : "$0.00"}
          </span>
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
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-red-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition"
      >
        PLACE ORDER →
      </button>
    </div>
  );
};

export default OrderSummary;
