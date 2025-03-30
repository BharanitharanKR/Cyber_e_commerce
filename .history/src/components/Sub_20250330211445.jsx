import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import ps5 from "../assets/ps5.png";
import airpods from "../assets/airpods.png";
import vision from "../assets/vision.png";
import lap from "../assets/lap.png";
import { Link } from "react-router-dom";
const Sub = () => {
  const products = [
    {
      img: ps5,
      title: "PlayStation 5",
      oldPrice: "$865.99",
      newPrice: "$442.12",
      discount: "32% OFF",
      rating: 5,
      hot: true,
    },
    {
      img: airpods,
      title: "AirPods_Pro",
      oldPrice: "$360",
      newPrice: "$250",
      discount: "32% OFF",
      rating: 4,
      hot: false,
    },
    {
      img: vision,
      title: " Vision_Pro",
      oldPrice: "$3,499",
      newPrice: "$3,250",
      discount: "19% OFF",
      rating: 4,
      hot: false,
    },
    {
      img: lap,
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
    },
    {
      img: lap,
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
    },
    {
      img: lap,
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
    },
    {
      img: lap,
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-semibold">Today's Best Deals</p>
        <Link to="/deals">
          {" "}
          <button className="text-white text-md font-semibold w-28 h-8 bg-red-700 rounded-lg">
            Browse All
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="row-span-2 bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-between relative h-full">
          <div className="w-full h-[70%] border border-gray-500 flex items-center justify-center">
            <img
              src={products[0].img}
              alt={products[0].title}
              className="w-full h-full object-cover transition-transform duration-300  hover:scale-105"
            />
          </div>
          <p className="text-lg font-bold mt-4 text-left w-full">
            PlayStation 5
          </p>
          <span>
            <p>
              Xbox Series S - 512GB SSD Console with Wireless Controller - EU
              Versio...
            </p>
          </span>
          <Link>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </Link>
          <FaHeart className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition" />
        </div>

        {/* Smaller Right Boxes */}
        {products.slice(1).map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300"
          >
            <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
              {item.discount}
            </div>
            {item.hot && (
              <div className="absolute top-2 right-2 z-1 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                HOT
              </div>
            )}
            <div className=" flex-col border-2 border-black rounded-lg  border-opacity-5  relative w-full h-40 flex items-center justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-full z-1 object-contain transition-opacity duration-300"
              />

              <div className="absolute inset-0 bg-gray-500 bg-opacity-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 hover:bg-opacity-50 hover:opacity-100">
                <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                  <FaHeart className="text-red-700 text-lg cursor-pointer hover:text-red-500" />
                </div>
                <div className="h-10 w-10 flex items-center justify-center bg-white rounded-full">
                  <FaShoppingCart className="text-red-700 text-lg cursor-pointer hover:text-red-500" />
                </div>
              </div>
            </div>
            <span className="flex-col items-start gap-2 mr-60 text-left p-2">
              <p className="text-md font-semibold mt-2">{item.title}</p>
              <div className="flex text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </span>
            <p>Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...</p>
            <span className="flex items-center mr-60 gap-1 text-left">
              <p className="text-gray-500 line-through text-sm">
                {item.oldPrice}
              </p>
              <p className="text-red-700 font-bold text-lg">{item.newPrice}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sub;
