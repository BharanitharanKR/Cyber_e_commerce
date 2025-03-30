import React from "react";

const CheckOut = () => {
  return (
    <div className="mt-36 ">
      <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>

      {/* User Name Section */}
      <div className="mb-4 w-[700px]">
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

      <div>
        <label>Address</label>
        <div className="flex gap-4">
                  <input type="text" placeholder="Your Address"
                  className="bg-gray-100"/>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
