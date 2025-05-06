import React from "react";

const Advert = () => {
  return (
    <div className="relative bg-blackGradient w-full h-[300px] sm:h-[350px] md:h-[400px] flex justify-center items-center text-white overflow-hidden">
      {/* Top Left Images - Hidden on small screens, visible on medium+ */}
      <div className="absolute top-0 left-2 translate-x-4 hidden sm:block">
        <img
          className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] z-30"
          src="/assets/ipad.png"
          alt="ipad"
        />
      </div>
      <div className="absolute z-10 top-0 left-12 translate-x-4 hidden md:block">
        <img
          className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] translate-x-36 translate-z-24"
          src="/assets/image6.png"
          alt="image6"
        />
      </div>
      <div className="absolute top-2 right-2 translate-x-20 hidden sm:block">
        <img
          className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
          src="/assets/lap.png"
          alt="laptop"
        />
      </div>
      <div className="absolute bottom-0 right-0 hidden sm:block">
        <img
          className="w-[60px] h-[120px] sm:w-[80px] sm:h-[160px] md:w-[100px] md:h-[200px]"
          src="/assets/iphone.png"
          alt="iphone"
        />
      </div>
      <div className="absolute top-36 left-0 hidden sm:block">
        <img
          className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px]"
          src="/assets/phone3.png"
          alt="phone"
        />
      </div>

      {/* Center Content */}
      <div className="text-center px-4 sm:px-6 z-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light">
          Biggest Season <span className="font-bold">Sale</span>
        </h2>
        <p className="text-base sm:text-lg mt-2 text-gray-300 p-2 sm:p-3 md:p-5">
          Never Hold Back on this
        </p>
        <a href="/deals">
          <button className="w-[150px] h-[45px] sm:w-[170px] sm:h-[50px] md:w-[191px] md:h-[56px] bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all">
            Shop Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Advert;
