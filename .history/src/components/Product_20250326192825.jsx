import React from "react";
import vision from "./assets/vision.png"; // Importing the image

const ProductCard = () => {
  return (
    <div className="max-w-xs border rounded-lg shadow-md p-3 bg-white">
      {/* HOT Badge */}
      <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md inline-block">
        HOT
      </div>

      {/* Product Image */}
      <div className="mt-2 flex justify-center">
        <img src={vision} alt="Product" className="rounded-md w-full h-auto" />
      </div>

      {/* Rating Section */}
      <div className="flex items-center mt-3">
        <div className="text-red-500 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            ></svg>
          ))}
        </div>
        <span className="text-gray-600 text-sm ml-1">(738)</span>
      </div>

      {/* Product Title */}
      <h3 className="mt-1 text-sm font-medium text-gray-800 line-clamp-2">
        TOZO T6 True Wireless Earbuds Bluetooth Headphone...
      </h3>

      {/* Product Price */}
      <p className="text-red-600 font-bold mt-1">$70</p>
    </div>
  );
};

export default ProductCard;
