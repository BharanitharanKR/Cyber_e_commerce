import React from "react";

const Sub = () => {
  const products = [
    {
      img: "/assets/ps5.png",
      title: "PlayStation 5",
      oldPrice: "$865.99",
      newPrice: "$442.12",
      discount: "32% OFF",
      rating: 5,
      hot: true,
      description:
        "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...",
    },
    {
      img: "/assets/airpods.png",
      title: "AirPods_Pro",
      oldPrice: "$360",
      newPrice: "$250",
      discount: "32% OFF",
      rating: 4,
      hot: false,
      description:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    },
    {
      img: "/assets/vision.png",
      title: "Vision_Pro",
      oldPrice: "$3,499",
      newPrice: "$3,250",
      discount: "19% OFF",
      rating: 4,
      hot: false,
      description:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    },
    {
      img: "/assets/lap.png",
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
      description:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    },
    {
      img: "/assets/lap.png",
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
      description:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    },
    {
      img: "/assets/lap.png",
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
      description:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    },
    {
      img: "/assets/lap.png",
      title: "Laptop",
      oldPrice: "$999",
      newPrice: "$870",
      discount: "HOT",
      rating: 5,
      hot: true,
      description:
        "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
    },
  ];

  // Function to render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="mr-0.5">
            ★
          </span>
        ))}
      </div>
    );
  };

  // Shopping cart icon
  const ShoppingCartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
      <path d="M16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </svg>
  );

  // Heart icon
  const HeartIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3">
        <p className="text-lg sm:text-xl font-semibold">Today's Best Deals</p>
        <a href="/deals">
          <button className="text-white text-sm sm:text-md font-semibold w-24 sm:w-28 h-8 bg-red-700 rounded-lg">
            Browse All
          </button>
        </a>
      </div>

      {/* Products Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Featured Product (Large) */}
        <div className="sm:row-span-2 bg-gray-100 p-4 sm:p-6 rounded-lg flex flex-col items-center justify-between relative h-full">
          <div className="w-full h-48 sm:h-[60%] border border-gray-300 flex items-center justify-center bg-white rounded">
            <img
              src={products[0].img}
              alt={products[0].title}
              className="w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-105"
              onError={(e) => (e.target.src = "/api/placeholder/200/200")}
            />
          </div>
          <div className="w-full mt-3">
            <p className="text-base sm:text-lg font-bold">
              {products[0].title}
            </p>
            <p className="text-sm mt-1 line-clamp-2">
              {products[0].description}
            </p>
          </div>
          <div className="w-full mt-auto pt-4">
            <a href="/deals">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </a>
          </div>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition">
            <HeartIcon />
          </button>
        </div>

        {/* Smaller Products */}
        {products.slice(1).map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-3 sm:p-4 rounded-lg shadow-md flex flex-col items-center transition-all duration-300"
          >
            {/* Badges */}
            <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              {item.discount}
            </div>
            {item.hot && (
              <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                HOT
              </div>
            )}

            {/* Product Image with Hover Actions */}
            <div className="flex-col border border-gray-200 rounded-lg relative w-full h-32 sm:h-40 flex items-center justify-center overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-24 sm:w-32 h-full object-contain transition-opacity duration-300"
                onError={(e) => (e.target.src = "/api/placeholder/120/120")}
              />

              {/* Hover Actions */}
              <div className="absolute inset-0 bg-gray-500 bg-opacity-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 hover:bg-opacity-50 hover:opacity-100">
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-white rounded-full cursor-pointer">
                  <span className="text-red-700 hover:text-red-500">
                    <HeartIcon />
                  </span>
                </div>
                <div className="h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center bg-white rounded-full cursor-pointer">
                  <a
                    href="/ProductName"
                    className="text-red-700 hover:text-red-500"
                  >
                    <ShoppingCartIcon />
                  </a>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full flex flex-col items-start px-1 pt-2">
              <p className="text-sm sm:text-md font-semibold">{item.title}</p>
              <div className="mt-1">{renderStars(item.rating)}</div>
              <p className="text-xs sm:text-sm mt-1 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-500 line-through text-xs sm:text-sm">
                  {item.oldPrice}
                </p>
                <p className="text-red-700 font-bold text-sm sm:text-lg">
                  {item.newPrice}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sub;
