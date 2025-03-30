import React from "react";
import bb from "../assets/bb.png";
import bb6 from "../assets/bb6.png";

const Adver = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 mt-6 sm:mt-12 px-2 sm:px-4">
      <img
        src={bb}
        alt="Advertisement Banner"
        className="w-[95%] sm:w-[90%] md:w-full max-w-[646px] h-auto object-cover mx-auto"
      />
      <img
        src={bb6}
        alt="Advertisement Banner"
        className="w-[95%] sm:w-[90%] md:w-full max-w-[646px] h-auto object-cover mx-auto"
      />
    </div>
  );
};

export default Adver;
