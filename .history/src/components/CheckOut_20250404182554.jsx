import React, { useState } from "react";
import OrderSummary from "./OrderSummary"; // Import the Order Summary component

const CheckOut = () => {
  const [selectedPayment, setSelectedPayment] = useState("Debit/Credit Card");

  return (
    <div className="mt-10 p-4 mx-auto max-w-6xl flex flex-col lg:flex-row gap-8">
      {/* Left Section - Checkout Form */}
      <div className="w-full lg:w-3/5">
        <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

        {/* User Name Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            User Name
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            placeholder="Your Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Payment Option Section */}
        <h2 className="text-2xl font-semibold mb-4">Payment Option</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {[
            { name: "Cash on Delivery", icon: "💲" },
            { name: "Venmo", icon: "🅥" },
            { name: "Paypal", icon: "🅿" },
            { name: "Amazon Pay", icon: "🅰" },
            { name: "Debit/Credit Card", icon: "💳" },
          ].map((option) => (
            <div
              key={option.name}
              className={`p-4 border ${
                selectedPayment === option.name
                  ? "border-orange-500 bg-orange-100"
                  : "border-gray-300"
              } rounded-md cursor-pointer text-center transition-all duration-200 hover:shadow-md hover:scale-105`}
              onClick={() => setSelectedPayment(option.name)}
            >
              <span className="text-2xl">{option.icon}</span>
              <p className="text-sm">{option.name}</p>
            </div>
          ))}
        </div>

        {/* Card Payment Form (Only Show If Card is Selected) */}
        {selectedPayment === "Debit/Credit Card" && (
          <div className="border p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-3">Enter Card Details</h3>
            <label className="block text-gray-700 font-medium mb-1">
              Name on Card
            </label>
            <input
              type="text"
              placeholder="Name on Card"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <label className="block text-gray-700 font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              placeholder="Card Number"
              inputMode="numeric"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  inputMode="numeric"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="CVC"
                  inputMode="numeric"
                  maxLength={3}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full lg:w-2/5">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOut;
