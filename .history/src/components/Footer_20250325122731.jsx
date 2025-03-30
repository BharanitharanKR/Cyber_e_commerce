import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";

const Footer = () => {
  return (
    <div className="w-screen">
      <div className="w-full h-80 absolute bg-black p-24 items-center">
        <div className="m-4 items-center">
          <div className="">
            <img src={Cyber_logo} className="bg-white" />
                  </div>
         
        </div>
      </div>
    </div>
  );
};

export default Footer;