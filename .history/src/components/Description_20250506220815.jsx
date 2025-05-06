import React from "react";

const ProductInfo = () => {
  return (
    <div className="w-full p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      {/* Tabs */}
      <div className="border-b pb-4 flex flex-wrap gap-4 sm:gap-6 text-gray-600 font-semibold text-sm sm:text-base">
        <span className="text-black border-b-2 border-orange-500 pb-2">
          DESCRIPTION
        </span>
        <span>ADDITIONAL INFORMATION</span>
        <span>SPECIFICATION</span>
        <span>REVIEW</span>
      </div>

      {/* Content Section */}
      <div className="mt-6 flex flex-col lg:flex-row gap-6">
        {/* Left: Description */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-semibold text-red-700">Description</h2>
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

        {/* Right: Features + Shipping */}
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-700">Feature</h3>
            <ul className="mt-2 space-y-2 text-gray-700 text-sm">
              <li>✅ Free 1 Year Warranty</li>
              <li>🚚 Free Shipping & Fastest Delivery</li>
              <li>💰 100% Money-back guarantee</li>
              <li>📞 24/7 Customer support</li>
              <li>🔒 Secure payment method</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-red-700">
              Shipping Information
            </h3>
            <ul className="mt-2 space-y-2 text-gray-700 text-sm">
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
    </div>
  );
};

export default ProductInfo;
