import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import ps5 from "../assets/ps5.png";
import airpods from "../assets/airpods.png";
import vision from "../assets/vision.png";
import lap from "../assets/lap.png";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const tabs = [
    { id: "Featured", label: "Featured Products" },
    { id: "New", label: "New Products" },
    { id: "Best", label: "Best Seller" },
  ];

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
      title: "AirPods Pro",
      oldPrice: "$360",
      newPrice: "$250",
      discount: "32% OFF",
      rating: 4,
      hot: false,
    },
    {
      img: vision,
      title: "Apple Vision Pro",
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

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      {/* Tabs Section */}
      <div className="p-10 flex gap-5 justify-start">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 transition-all duration-300 rounded-md ${
              activeTab === tab.id
                ? "font-bold text-gray-900 border-b-2 border-black bg-gray-100 shadow-md"
                : "font-semibold text-gray-500 hover:bg-gray-200 hover:shadow"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Product Section */}
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl font-semibold">Today's Best Deals</p>
          <Link to="/deals">
            <button className="text-white text-md font-semibold w-28 h-8 bg-red-700 rounded-lg">
              Browse All
            </button>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
          {currentProducts.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300"
            >
              <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                {item.discount}
              </div>
              {item.hot && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  HOT
                </div>
              )}
              <div className="flex-col relative w-full h-40 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-32 h-full object-contain transition-opacity duration-300"
                />
              </div>
              <p className="text-md font-semibold mt-2">{item.title}</p>
              <div className="flex text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-500 line-through text-sm">
                {item.oldPrice}
              </p>
              <p className="text-red-700 font-bold text-lg">{item.newPrice}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8">
          <div className="flex gap-4">
            {[...Array(totalPages)].map((_, num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num + 1)}
                className={`px-4 py-2 transition-all duration-300 rounded-md border border-red-700 ${
                  currentPage === num + 1
                    ? "bg-red-700 text-white"
                    : "hover:bg-red-700 hover:text-white"
                } cursor-pointer`}
              >
                {num + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
