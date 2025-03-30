import React, { useState } from "react";

const Trackt = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackOrder = () => {
    setIsTracking(true);
  };

  return (
    <div className="container mt-28">
      <div className="w-[700px] mx-36 mt-[200px]">
        <h1 className="pb-4 font-extrabold text-red-700 text-2xl">
          Track Order
        </h1>
        <p className="w-[700px] text-lg leading-relaxed">
          To track your order please enter your order ID in the input field
          below and press the “Track Order” button. This was given to you on
          your receipt and in the confirmation email you should have received.
        </p>
      </div>

      {!isTracking ? (
        <>
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
        </>
      ) : (
        <div className="mx-36 mt-12 p-6 bg-gray-100 rounded-lg shadow-lg text-lg">
          <h2 className="text-xl font-bold text-gray-800">
            Order Tracking Details
          </h2>
          <ul className="mt-4 space-y-2">
            <li>✅ Order Confirmed - 19 Jan, 2021</li>
            <li>📦 Order Verified - 20 Jan, 2021</li>
            <li>🚚 Out for Delivery - 23 Jan, 2021</li>
            <li>📍 Delivered - 23 Jan, 2021</li>
          </ul>
        </div>
      )}
      
      </button>
    </div>
  );
};

export default Trackt;
