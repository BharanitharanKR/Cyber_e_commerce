import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="w-full h-80 bg-black">
        <div>
          <div>
            <img src={Cyber_logo} className="bg-white" />
          </div>
          <div className="text-black">
            <p>Home</p>
            <p>About Us</p>
            <p>Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
