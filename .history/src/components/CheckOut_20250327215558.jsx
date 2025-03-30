import React from "react";

const CheckOut = () => {
  return (
    <div className="mt-36 w-[700px] mx-auto">
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

      {/* Company Name Section */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Company Name <span className="text-gray-500">(Optional)</span>
        </label>
        <input
          type="text"
          placeholder="Company Name"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Address Section */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Address</label>
        <input
          type="text"
          placeholder="Your Address"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Country, State, City, Zip Code in a Row */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Location</label>
        <div className="flex gap-4">
          <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-100">
            <option>Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-100">
            <option>State</option>
            <option>Tamil Nadu</option>
            <option>California</option>
            <option>London</option>
          </select>

          <select className="w-full p-2 border border-gray-300 rounded-md bg-gray-100">
            <option>City</option>
            <option>Chennai</option>
            <option>New York</option>
            <option>Manchester</option>
          </select>

          <input
            type="text"
            placeholder="Zip Code"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Email & Phone Number */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Contact</label>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Ship to Different Address Checkbox */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="different-address" className="w-5 h-5" />
        <label htmlFor="different-address" className="text-gray-700">
          Ship to different address
        </label>
          </div>
          import React from "react";

const OrderSummary = () => {
  return (
    <div className="w-[350px] border border-gray-300 rounded-lg p-6 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-4">Order Summery</h2>

      {/* First Item */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src="https://via.placeholder.com/50" // Replace with actual image URL
          alt="Canon EOS 1500D"
          className="w-12 h-12 object-cover rounded"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-800">
            Canon EOS 1500D DSLR Camera Body+ 18-...
          </p>
          <p className="text-sm text-gray-500">
            1 x <span className="text-red-500 font-medium">$70</span>
          </p>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex items-start gap-4 mb-6">
        <img
          src="https://via.placeholder.com/50" // Replace with actual image URL
          alt="Wired Headphones"
          className="w-12 h-12 object-cover rounded"
        />
        <div className="flex-1">
          <p className="text-sm text-gray-800">
            Wired Over-Ear Gaming Headphones with U...
          </p>
          <p className="text-sm text-gray-500">
            3 x <span className="text-red-500 font-medium">$250</span>
          </p>
        </div>
      </div>

      {/* Price Details */}
      <div className="border-t border-gray-300 pt-4 space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Sub-total</span>
          <span className="font-medium text-gray-800">$320</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="font-medium">Free</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Discount</span>
          <span className="font-medium text-gray-800">$24</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span className="font-medium text-gray-800">$61.99</span>
        </div>
      </div>

      {/* Total */}
      <div className="border-t border-gray-300 pt-4 mt-2 mb-4 flex justify-between text-lg font-semibold">
        <span>Total</span>
        <span>$357.99 USD</span>
      </div>

      {/* Button */}
      <button className="w-full bg-red-500 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-600 transition">
        PLACE ORDER →
      </button>
    </div>
  );
};

export default OrderSummary;

    </div>
  );
};

export default CheckOut;
