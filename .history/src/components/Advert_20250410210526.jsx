import React from "react";
import { Link } from "react-router-dom";

const Advert = () => {
  return (
    <div className="relative bg-blackGradient w-full h-[400px] flex justify-center items-center text-white overflow-hidden">
      {/* Top Left Images */}
      <div className="absolute top-0 left-2  translate-x-4">
        <img className="w-[200px] h-[200px] z-30" src="/ipad.png" alt="ipad" />
      </div>
      <div className="absolute z-10  top-0 left-12  translate-x-4">
        <img
          className="w-[200px] h-[200px] translate-x-36 translate-z-24"
          src="/image6.png"
          alt="image6"
        />
      </div>
      <div className="absolute top-2 right-2 touch-none translate-x-20 ">
        <img
          className="w-[200px] h-[200px]"
          src="assets/lap.png"
          alt="laptop"
        />
      </div>
      <div className="absolute bottom-0 right-0 ">
        <img className="w-[200px] h-[200px]" src="/iphone.png" alt="iphone" />
      </div>
      <div className="absolute bottom-0 left-0 ">
        <img className="w-[300px] h-[300px]" src="/phone.png" alt="phone" />
      </div>

      {/* Center Content */}
      <div className="text-center px-6">
        <h2 className="text-4xl font-light">
          Biggest Season <span className="font-bold">Sale</span>
        </h2>
        <p className="text-lg mt-2 text-gray-300 p-5">
          Never Hold Back on this
        </p>
        <Link to="/deals">
          <button className="w-[191px] h-[56px] bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Advert;
