import React from "react";
import vision from "../assets/vision.png"; // Import image

const Product = () => {
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

      {/* Product Title */}
      <h3 className="mt-1 text-xs font-medium text-gray-800 line-clamp-2">
        TOZO T6 True Wireless Earbuds Bluetooth Headphone...
      </h3>

      {/* Product Price */}
      <p className="text-red-600 font-bold mt-1 text-sm">$70</p>
    </div>
  );
};

export default Product;
