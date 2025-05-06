import React, { useState } from "react";

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
      img: "/assets/ps5.png",
      title: "PlayStation 5",
      oldPrice: "$865.99",
      newPrice: "$442.12",
      discount: "32% OFF",
      rating: 5,
      hot: true,
      category: "Featured",
    },
    {
      img: "/assets/airpods.png",
      title: "AirPods Pro",
      oldPrice: "$360",
      newPrice: "$250",
      discount: "32% OFF",
      rating: 4,
      hot: false,
      category: "New",
    },
    {
      img: "/assets/vision.png",
      title: "Apple Vision Pro",
      oldPrice: "$3,499",
      newPrice: "$3,250",
      discount: "19% OFF",
      rating: 4,
      hot: false,
      category: "Best",
    },
    {
      img: "/assets/lap.png",
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
      category: "Featured",
    },
  ];

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeTab
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400 text-xs md:text-sm mt-1">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="mr-0.5">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-4 w-full overflow-hidden">
      {/* Tabs Section - With Horizontal Scroll */}
      <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
        <div className="px-3 py-4 md:p-6 lg:p-10 flex gap-2 sm:gap-3 md:gap-5 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1); // Reset pagination when tab changes
              }}
              className={`px-3 py-1.5 sm:px-4 md:px-6 text-xs sm:text-sm md:text-base transition-all duration-300 rounded-md whitespace-nowrap ${
                activeTab === tab.id
                  ? "font-bold text-gray-900 border-b-2 border-black bg-gray-100 shadow-md"
                  : "font-semibold text-gray-500 hover:bg-gray-200 hover:shadow"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-3 py-4 md:p-6">
        <div className="flex justify-between items-center mb-4 md:mb-6 overflow-x-auto">
          <p className="text-lg md:text-xl font-semibold whitespace-nowrap">
            Today's Best Deals
          </p>
          <a href="/Deals" className="min-w-fit">
            <button className="text-white text-xs md:text-sm font-semibold w-20 md:w-28 h-7 md:h-8 bg-red-700 rounded-lg whitespace-nowrap">
              Browse All
            </button>
          </a>
        </div>

        {/* Grid Section - Responsive with overflow handling */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {currentProducts.map((item, index) => (
              <div
                key={index}
                className="relative bg-white p-3 md:p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300 min-w-[250px]"
              >
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {item.discount}
                </div>
                {item.hot && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                    HOT
                  </div>
                )}

                <div className="flex-col relative w-full h-28 sm:h-32 md:h-40 flex items-center justify-center">
                  <a href="/deals">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-24 sm:w-28 md:w-32 h-full object-contain transition-opacity duration-300"
                      onError={(e) =>
                        (e.target.src = "/api/placeholder/120/120")
                      }
                    />
                  </a>
                </div>
                <p className="text-sm md:text-md font-semibold mt-2 text-center line-clamp-2 h-10">
                  {item.title}
                </p>
                {renderStars(item.rating)}
                <div className="flex items-center gap-2 mt-1 w-full justify-center flex-wrap">
                  <p className="text-gray-500 line-through text-xs md:text-sm">
                    {item.oldPrice}
                  </p>
                  <p className="text-red-700 font-bold text-sm md:text-lg">
                    {item.newPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}

        {/* Pagination - Responsive with horizontal scroll for many pages */}
        {totalPages > 1 && (
          <div className="w-full overflow-x-auto mt-6 md:mt-8 pb-2">
            <div className="flex justify-center items-center min-w-max">
              <div className="flex gap-2 md:gap-4">
                {[...Array(totalPages)].map((_, num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num + 1)}
                    className={`px-3 py-1 md:px-4 md:py-2 text-sm md:text-base transition-all duration-300 rounded-md border border-red-700 ${
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
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
