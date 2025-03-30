import React from "react";
import bb from "../assets/bb.png";
import bb6 from "../assets/bb6.png";

const Adver = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12 px-4">
      <img
        src={bb}
        alt="Advertisement Banner"
        className="w-full max-w-[646px] h-auto object-cover"
      />
      <img
        src={bb6}
        alt="Advertisement Banner"
        className="w-full max-w-[646px] h-auto object-cover"
      />
    </div>
  );
};

export default Adver;
