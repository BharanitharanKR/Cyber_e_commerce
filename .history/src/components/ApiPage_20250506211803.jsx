import React, { useState, useEffect } from "react";

const ApiPage = () => {
  const box = [
    {
      img: "/assets/lap.png",
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    // ... (same repeated objects)
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's 'sm' is 640px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mx-4 my-8 sm:m-12 md:m-16">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-1">
        <h3 className="text-lg font-medium text-blue-900 text-center md:text-start">
          FLASH SALE TODAY
        </h3>
        <h3 className="text-lg font-medium text-blue-900 text-center md:text-start">
          BEST SELLERS
        </h3>
        <h3 className="text-lg font-medium text-blue-900 text-center md:text-start">
          TOP RATED
        </h3>

        {/* Product Items */}
        {(isMobile ? box.slice(0, 4) : box).map((item, index) => (
          <div
            className="w-full sm:w-[300px] md:w-[270px] lg:w-[312px] h-auto min-h-[80px] sm:h-[104px] border border-gray-300 rounded-lg flex text-center items-center justify-between p-2 mx-auto"
            key={index}
          >
            <img
              className="w-10 h-10 sm:w-12 sm:h-12 m-2 sm:m-4 flex-shrink-0"
              src={item.img}
              alt={item.title}
              onError={(e) => (e.target.src = "https://via.placeholder.com/48")}
            />
            <span className="flex flex-col text-left flex-grow px-2">
              <p className="font-medium text-xs sm:text-sm md:text-[14px] text-gray-700 line-clamp-2">
                {item.title}
              </p>
              <p className="text-red-700 font-bold text-sm sm:text-base">
                {item.Price}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPage;
