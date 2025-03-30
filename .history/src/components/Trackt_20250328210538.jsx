import React from "react";

const Trackt = () => {
  return (
    <div className="container mt-28">
      <div className="w-[800px] mx-36 mt-[200px]">
        <h1 className="pb-4 font-extrabold text-red-700">Track Order</h1>
        <p className="w-[700px]">
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. This was given to you on
          your receipt and in the confirmation email you should have received.
        </p>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-medium w-[350px] mx-36">
          Order ID:
          <input
            type="text"
            placeholder="ID..."
            className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
          />
        </label>
        <label className="block text-gray-700 font-medium w-[350px] mx-36">
          Billing Mail:
          <input
            type="text"
            placeholder="ID..."
            className="block w-full mt-2 p-2 border border-gray-300 rounded-lg"
          />
        </label>
      </div>
    </div>
  );
};

export default Trackt;
