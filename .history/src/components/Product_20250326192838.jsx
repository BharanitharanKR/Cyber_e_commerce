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

   >

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
