import React from "react";
import OrderSummary from "./OrderSummary"; // Import the Order Summary component

const CheckOut = () => {
  return (
    <div className="mt-40 w-scre mx-auto flex gap-40">
      {/* Left Section - Checkout Form (60%) */}
      <div className="w-3/5">
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
          <label className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            placeholder="Your Address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Country, State, City, Zip Code in a Row */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Location
          </label>
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
          <label className="block text-gray-700 font-medium mb-2">
            Contact
          </label>
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
      </div>

      {/* Right Section - Order Summary (40%) */}
      <div className="w-2/5">
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOut;
