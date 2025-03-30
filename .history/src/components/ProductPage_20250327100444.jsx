import React from "react";

const ProductInfo = () => {
  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg">
      <div className="border-b pb-4 flex space-x-6 text-gray-600 font-semibold">
        <span className="text-black border-b-2 border-orange-500 pb-2">
          DESCRIPTION
        </span>
        <span>ADDITIONAL INFORMATION</span>
        <span>SPECIFICATION</span>
        <span>REVIEW</span>
      </div>

      <div className="flex justify-between mt-4">
        <div className="w-1/2">
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-gray-700 mt-2">
            The most powerful MacBook Pro ever is here. With the blazing-fast M1
            Pro or M1 Max chip—the first Apple silicon designed for pros—you get
            groundbreaking performance and amazing battery life. Add to that a
            stunning Liquid Retina XDR display, the best camera and audio ever
            in a Mac notebook, and all the ports you need. The first notebook of
            its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional
            performance of the M1 architecture to a whole new level for pro
            users.
          </p>
          <p className="text-gray-700 mt-2">
            Even the most ambitious projects are easily handled with up to 10
            CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and
            dedicated encode and decode media engines that support H.264, HEVC,
            and ProRes codecs.
          </p>
        </div>

        <div className="w-1/2 flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Feature</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>✅ Free 1 Year Warranty</li>
              <li>🚚 Free Shipping & Fasted Delivery</li>
              <li>💰 100% Money-back guarantee</li>
              <li>📞 24/7 Customer support</li>
              <li>🔒 Secure payment method</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Shipping Information</h3>
            <ul className="mt-2 space-y-2 text-gray-700">
              <li>
                <strong>Courier:</strong> 2 - 4 days, free shipping
              </li>
              <li>
                <strong>Local Shipping:</strong> up to one week, $19.00
              </li>
              <li>
                <strong>UPS Ground Shipping:</strong> 4 - 6 days, $29.00
              </li>
              <li>
                <strong>Unishop Global Export:</strong> 3 - 4 days, $39.00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2x2 Grid for Options */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <label className="font-semibold">Color:</label>
          <div className="flex gap-2 mt-2">
            <div className="w-8 h-8 border-2 border-red-500 rounded-full bg-gray-700"></div>
            <div className="w-8 h-8 border rounded-full bg-white"></div>
          </div>
        </div>
        <div>
          <label className="font-semibold">Size:</label>
          <select className="border p-2 rounded w-full mt-2">
            <option>14-inch Liquid Retina XDR Display</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Storage:</label>
          <select className="border p-2 rounded w-full mt-2">
            <option>1TB SSD Storage</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Memory:</label>
          <select className="border p-2 rounded w-full mt-2">
            <option>16GB Unified Memory</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
