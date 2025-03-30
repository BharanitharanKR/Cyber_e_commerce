import React from "react";

const CheckOut = () => {
  return (
    <div className="mt-36">
      <div>
        <h2>Billing Information</h2>
        <div>
          <lable>User Name</lable>
          <input className="outline-none p-2 bg-gray-100 border-1 border" type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
