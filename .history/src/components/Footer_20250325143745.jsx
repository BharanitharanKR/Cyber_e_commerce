import React from "react";
import Cyber_logo from "../assets/Cyber_logo.png";
const Footer = () => {
  return (
    <div className="w-screen h-[335px] bg-black absolute">
      <div className="relative bg-white w-[1600px] h-[280px] m-10">
        <div>
          <div>
                      <img src={Cyber_logo} />
                      <h2></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
