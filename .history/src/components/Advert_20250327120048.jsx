import React from "react";
import ipad from "../assets/ipad.png";

const Advert = () => {
  return (
    <div className="relative bg-blackGradient w-full h-[400px] flex justify-center items-center text-white overflow-hidden">
      {/* Top Left Images */}
      <div className="absolute top-2 left-2  w-[316px] h-[280px]">
        <img src={ipad} />
      </div>
      {/* Center Content */}
      <div className="text-center px-6">
        <h2 className="text-4xl font-light">
          Biggest Season <span className="font-bold">Sale</span>
        </h2>
        <p className="text-lg mt-2 text-gray-300 p-5">
          Never Hold Back on this
        </p>
        <button className="w-[191px] h-[56px] bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Advert;
