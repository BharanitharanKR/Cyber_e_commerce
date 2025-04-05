import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
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

  const allProducts = [
    {
      id: 1,
      img: ps5,
      title: "PlayStation 5",
      oldPrice: "$865.99",
      newPrice: "$442.12",
      discount: "32% OFF",
      rating: 5,
      category: "Featured",
    },
    {
      id: 2,
      img: airpods,
      title: "AirPods Pro",
      oldPrice: "$360",
      newPrice: "$250",
      discount: "32% OFF",
      rating: 4,
      category: "New",
    },
    {
      id: 3,
      img: vision,
      title: "Apple Vision Pro",
      oldPrice: "$3,499",
      newPrice: "$3,250",
      discount: "19% OFF",
      rating: 4,
      category: "Best",
    },
    {
      id: 4,
      img: lap,
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      category: "Best",
    },
    {
      id: 5,
      img: lap,
      title: "Gaming Laptop",
      oldPrice: "$1,499",
      newPrice: "$1,250",
      discount: "20% OFF",
      rating: 5,
      category: "New",
    },
    {
      id: 6,
      img: airpods,
      title: "AirPods Max",
      oldPrice: "$549",
      newPrice: "$480",
      discount: "15% OFF",
      rating: 4,
      category: "Featured",
    },
  ];

  // Filter products based on active tab
  const filteredProducts = allProducts.filter(
    (product) => product.category === activeTab
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      {/* Tabs Section */}
      <div className="p-10 flex gap-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setCurrentPage(1); // Reset pagination when changing tabs
            }}
            className={`px-4 py-2 transition-all duration-300 rounded-md ${
              activeTab === tab.id
                ? "font-bold text-gray-900 border-b-2 border-black bg-gray-100 shadow-md"
                : "font-semibold text-gray-500 hover:bg-gray-200"
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
            <button className="text-white text-md font-semibold w-28 h-8 bg-red-700 rounded-lg hover:bg-red-800">
              Browse All
            </button>
          </Link>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {currentProducts.length > 0 ? (
            currentProducts.map((item) => (
              <div
                key={item.id}
                className="relative bg-white p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300"
              >
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.discount}
                </div>
                <div className="w-full h-40 flex items-center justify-center">
                  <Link to="/deals">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-32 h-full object-contain transition-opacity duration-300"
                      loading="lazy"
                    />
                  </Link>
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
                <p className="text-red-700 font-bold text-lg">
                  {item.newPrice}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">
              No products available.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 border rounded-md ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-700 hover:text-white"
              }`}
              aria-label="Previous Page"
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num + 1)}
                className={`px-4 py-2 transition-all duration-300 rounded-md border border-red-700 ${
                  currentPage === num + 1
                    ? "bg-red-700 text-white"
                    : "hover:bg-red-700 hover:text-white"
                }`}
              >
                {num + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`px-4 py-2 border rounded-md ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-red-700 hover:text-white"
              }`}
              aria-label="Next Page"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
