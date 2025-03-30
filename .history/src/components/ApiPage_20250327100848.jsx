import React from "react";
import lap from "../assets/lap.png";

const ApiPage = () => {
  const box = [
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
    {
      img: lap,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      Price: "$450",
    },
  ];

  return (
    <div className="flex flex-col  justify-center items-center m-16">
      <div className="grid grid-cols-3 gap-1 items-center ">
        <h3
          className="text-lg font-medium text-blue-900 text-start
         col-span-1"
        >
          FLASH SALE TODAY
        </h3>
        <h3 className="text-lg font-medium text-blue-900 text-start col-span-1">
          BEST SELLERS
        </h3>
        <h3 className="text-lg font-medium text-blue-900 text-start col-span-1">
          TOP RATED
        </h3>
        {box.map((item, index) => (
          <div
            className="w-[312px] h-[104px] border border-gray-300 rounded-lg flex text-center items-center justify-between p-2"
            key={index}
          >
            <img className="w-12 h-12 m-4" src={item.img} alt={item.title} />
            <span className="flex flex-col text-left">
              <p className="font-medium text-[14px] text-gray-700">
                {item.title}
              </p>
              <p className="text-red-700 font-bold">{item.Price}</p>
            </span>
          </div>
        ))}
          </div>
         
    </div>
  );
};

export default ApiPage;
