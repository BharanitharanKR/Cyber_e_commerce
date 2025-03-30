import React, { useState } from "react";

const CheckOut = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="container mx-auto max-w-2xl p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Checkout</h2>

      {/* Billing Details */}
      <div className="mb-4">
        <label className="block text-sm">Full Name</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          placeholder="John Doe"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">Email</label>
        <input
          type="email"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          placeholder="johndoe@example.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm">Address</label>
        <input
          type="text"
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          placeholder="123 Main Street"
        />
      </div>

      {/* Payment Method Selection */}
      <div className="mb-4">
        <label className="block text-sm">Payment Method</label>
        <select
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="card">Credit / Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="upi">UPI</option>
        </select>
      </div>

      {/* Conditional Payment Fields */}
      {paymentMethod === "card" && (
        <div className="mb-4">
          <label className="block text-sm">Card Number</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="1234 5678 9012 3456"
          />
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              className="w-1/2 p-2 rounded bg-gray-800 border border-gray-700"
              placeholder="MM/YY"
            />
            <input
              type="text"
              className="w-1/2 p-2 rounded bg-gray-800 border border-gray-700"
              placeholder="CVV"
            />
          </div>
        </div>
      )}

      {paymentMethod === "upi" && (
        <div className="mb-4">
          <label className="block text-sm">UPI ID</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            placeholder="example@upi"
          />
        </div>
      )}

      {paymentMethod === "paypal" && (
        <p className="text-green-400 text-sm mb-4">
          You will be redirected to PayPal for payment.
        </p>
      )}

      {/* Order Notes */}
      <div className="mb-4">
        <label className="block text-sm">Order Notes (Optional)</label>
        <textarea
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          placeholder="Additional information..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="w-full p-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition">
        Complete Purchase
      </button>
    </div>
  );
};

export default CheckOut;
