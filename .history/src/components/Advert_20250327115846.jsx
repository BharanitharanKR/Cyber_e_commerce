import React from "react";
import ipad from "../../assets/images/ipad.png";
import laptop from "../../assets/images/laptop.png";
import phone from "../../assets/images/phone.png";
import laptop2 from "../../assets/images/laptop2.png";
import phone2 from "../../assets/images/phone2.png";
import phone3 from "../../assets/images/phone3.png";
import laptop3 from "../../assets/images/laptop3.png";
import phone4 from "../../assets/images/phone4.png";
import laptop4 from "../../assets/images/laptop4.png";
import phone5 from "../../assets/images/phone5.png";
import laptop5 from "../../assets/images/laptop5.png";
import phone6 from "../../assets/images/
const Advert = () => {
  return (
    <div className="relative bg-blackGradient w-full h-[400px] flex justify-center items-center text-white overflow-hidden">
      {/* Top Left Images */}
      <div>
        <img src={ipad } />
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
