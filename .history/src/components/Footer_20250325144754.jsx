import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
  return (
    <div className="w-screen h-[335px] bg-black absolute flex justify-center items-center">
      <div className="flex">
        <div className="relative bg-white w-[1600px] h-[280px] m-10 flex flex-col justify-center items-center p-8">
          <img src={Cyber_logo} className="mb-4" />
          <h2 className="text-xl font-semibold mb-2">Subscribe</h2>
          <p className="text-gray-600 mb-4">Get 10% off your first order</p>
          <input
            type="text"
            placeholder="Enter text here"
            className="border-black border-2 rounded p-2 w-64"
          />
              </div>
              <div>
                  <h1>Support</h1>
                  <h32>123,GCT College Coimbatore</h32>
              </div>
      </div>
    </div>
  );
};

export default Footer;
