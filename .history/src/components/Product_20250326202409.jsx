import React from "react";
import vision from "./assets/vision.png"; // Import image

const ProductCard = () => {
  return (
    <div className="w-[234px] h-[320px] border rounded-lg shadow-md bg-white relative p-3">
      {/* HOT Badge (Top-left) */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
        HOT
      </div>

      {/* Product Image */}
      <div className="w-[202px] h-[172px] mx-auto flex justify-center items-center">
        <img
          src={vision}
          alt="Product"
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Rating Section */}
      <div className="flex items-center mt-2">
        <div className="text-red-500 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-600 text-sm ml-1">(738)</span>
      </div>

      {/* Product Title */}
      <h3 className="mt-1 text-xs font-medium text-gray-800 line-clamp-2">
        TOZO T6 True Wireless Earbuds Bluetooth Headphone...
      </h3>

      {/* Product Price */}
      <p className="text-red-600 font-bold mt-1 text-sm">$70</p>
    </div>
  );
};

export default ProductCard;
