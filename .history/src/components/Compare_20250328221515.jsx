import React, { useState } from "react";
import { Link } from "react-router-dom";

const Trackt = () => {
  const [tracking, setTracking] = useState(false);

  const handleTrackOrder = () => {
    setTracking(true);
  };

  return (
    <div className="container mt-38">
      {tracking ? (
        <div className="w-[700px] mx-36 mt-38">
          <h1 className="pb-4 font-extrabold text-green-700 text-2xl">
            Order Tracking Details
          </h1>
          <p className="w-[700px] text-lg leading-relaxed">
            Your order has been successfully tracked. It is currently in transit.
          </p>
          <Link to="/" className="mt-5 inline-block bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition text-lg">
            Go to Home
          </Link>
        </div>
      ) : (
        <div>
          <div className="w-[700px] mx-36 mt-38">
            <h1 className="pb-4 font-extrabold text-red-700 text-2xl">
              Track Order
            </h1>
            <p className="w-[700px] text-lg leading-relaxed">
              To track your order please enter your order ID in the input field
              below and press the “Track Order” button. This was given to you on
              your receipt and in the confirmation email you should have received.
            </p>
          </div>
          <div className="mt-8 flex items-center w-[800px] mx-36 space-x-[100px]">
            <label className="block text-gray-700 font-medium w-[250px]">
              <span className="text-lg">Order ID:</span>
              <input
                type="text"
                placeholder="ID..."
                className="block w-full mt-2 p-2 border border-gray-300 rounded-lg text-lg"
              />
            </label>
            <label className="block text-gray-700 font-medium w-[250px]">
              <span className="text-lg">Billing Mail:</span>
              <input
                type="text"
                placeholder="Email Address"
                className="block w-full mt-2 p-2 border border-gray-300 rounded-lg text-lg"
              />
            </label>
          </div>
          <div className="mx-36 mt-12 text-lg text-gray-700">
            <p>Order ID that we sent to your email address.</p>
          </div>
          <button
            onClick={handleTrackOrder}
            className="w-[200px] mx-36 mt-5 bg-red-500 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition text-lg"
          >
            TRACK ORDER →
          </button>
        </div>
      )}
    </div>
  );
};

export default Trackt;
