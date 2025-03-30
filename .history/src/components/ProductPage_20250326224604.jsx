import React from "react";
import MainImage from "../assets/MainImage.png";

const ProductPage = () => {
  return (
    <div className="container mx-auto pl-16 pr-16 flex gap-6">
      {/* Left Side: Image Section */}
      <div className="w-1/2  flex flex-col items-center">
        <img src={MainImage} alt="Product" className="w-full object-contain" />
        {/* Thumbnail Carousel */}
        <div className="flex items-center gap-2 mt-4">
          <button className="p-2 bg-red-500 text-white rounded-full">←</button>
          <div className="flex gap-2">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={`thumb-${index}.jpg`}
                alt="Thumbnail"
                className="w-16 h-16 border-2 border-transparent hover:border-red-500 cursor-pointer"
              />
            ))}
          </div>
          <button className="p-2  w-8 bg-red-500 text-white ">→</button>
        </div>
      </div>

      {/* Right Side: Product Details */}
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-xl font-bold">2020 Apple MacBook Pro</h1>
        <p className="text-gray-500">Brand: Apple</p>
        <p className="text-green-600">Availability: In Stock</p>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">$1699</span>
          <span className="text-gray-500 line-through">$1999</span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            21% OFF
          </span>
        </div>

        {/* Options (Color, Size, Storage, Memory) */}
        <div className="flex flex-col gap-3">
          <div>
            <label className="font-semibold">Color:</label>
            <div className="flex gap-2">
              <div className="w-8 h-8 border-2 border-red-500 rounded-full bg-gray-700"></div>
              <div className="w-8 h-8 border rounded-full bg-white"></div>
            </div>
          </div>

          <div>
            <label className="font-semibold">Size:</label>
            <select className="border p-2 rounded w-full">
              <option>14-inch Liquid Retina XDR Display</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Storage:</label>
            <select className="border p-2 rounded w-full">
              <option>1TB SSD Storage</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Memory:</label>
            <select className="border p-2 rounded w-full">
              <option>16GB Unified Memory</option>
            </select>
          </div>
        </div>

        {/* Quantity & Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border p-2">
            <button className="px-3">-</button>
            <span className="px-4">1</span>
            <button className="px-3">+</button>
          </div>

          <button className="bg-red-600 text-white px-6 py-2 rounded flex items-center">
            🛒 ADD TO CART
          </button>

          <button className="border border-red-600 text-red-600 px-6 py-2 rounded">
            BUY NOW
          </button>
        </div>

        {/* Additional Options */}
        <div className="flex items-center gap-4 text-gray-600 mt-4">
          <button>❤️ Add to Wishlist</button>
          <button>🔄 Add to Compare</button>
          <button>🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
