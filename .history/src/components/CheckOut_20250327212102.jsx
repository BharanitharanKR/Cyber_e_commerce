import React from "react";

const CheckOut = () => {
  return (
    <div className="container mx-auto max-w-2xl p-6  rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* User Name */}
        <div>
          <label className="block text-sm mb-1">User name</label>
          <input
            type="text"
            placeholder="First name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  />
                  
        </div>
        <div>
          <label className="block text-sm mb-1">&nbsp;</label>
          <input
            type="text"
            placeholder="Last name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>

        {/* Company Name */}
        <div className="col-span-2">
          <label className="block text-sm mb-1">
            Company Name <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label className="block text-sm mb-1">Address</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm mb-1">Country</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Select...</option>
          </select>
        </div>

              
        {/* State */}
        <div>
          <label className="block text-sm mb-1">Region/State</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Select...</option>
          </select>
        </div>

        {/* City */}
        <div>
          <label className="block text-sm mb-1">City</label>
          <select className="w-full p-2 rounded bg-gray-800 border border-gray-700">
            <option>Select...</option>
          </select>
        </div>

        {/* Zip Code */}
        <div>
          <label className="block text-sm mb-1">Zip Code</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
        </div>
      </div>

      {/* Shipping Address Checkbox */}
      <div className="mt-4 flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className="text-sm">Ship into different address</label>
      </div>
    </div>
  );
};

export default CheckOut;
