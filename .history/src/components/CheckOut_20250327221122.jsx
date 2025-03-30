import React, { useState } from "react";

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("Debit/Credit Card");

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Payment Option</h2>
      <div className="grid grid-cols-5 gap-4 mb-6">
        {[
          { name: "Cash on Delivery", icon: "💲" },
          { name: "Venmo", icon: "🅥" },
          { name: "Paypal", icon: "💳" },
          { name: "Amazon Pay", icon: "🛒" },
          { name: "Debit/Credit Card", icon: "💳" },
        ].map((option) => (
          <div
            key={option.name}
            className={`p-4 border rounded-md flex flex-col items-center cursor-pointer ${
              selectedOption === option.name
                ? "border-orange-500"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedOption(option.name)}
          >
            <span className="text-xl">{option.icon}</span>
            <p className="text-sm mt-2">{option.name}</p>
          </div>
        ))}
      </div>

      {selectedOption === "Debit/Credit Card" && (
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Name on Card
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="John Doe"
          />

          <label className="block text-gray-700 font-medium mb-2">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
            placeholder="1234 5678 9012 3456"
          />

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                Expire Date
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="MM/YY"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 font-medium mb-2">
                CVC
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CheckOut = () => {
  return (
    <div className="mt-36 w-screen p-4 mx-auto flex gap-40 justify-between">
      <div className="w-3/5">
        <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
        {/* Existing Billing Form Fields Here */}
        <PaymentOptions />
      </div>
      <div className="w-2/5">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOut;
