import React from "react";

const CheckOut = () => {
  return (
    <div className="mt-36">
      <div>
        <h2>Billing Information</h2>
        <div className="">
          <lable>User Name</lable>
          <input
            className=" p-2 outline-gray-200 bg-gray-100 border-1"
            type="text"
            placeholder="First Name"
          ></input>
          <input type="text" placeholder="Last Name"></input>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
