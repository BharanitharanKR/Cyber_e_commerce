import React from "react";
import { Heart, ShoppingCart, Eye } from "lucide-react"; // Import icons
import oneplus from "../assets/oneplus.png"; // Import image

const Product = ({ rating = 4.5, totalReviews = 738 }) => {
  return (
    <div className="w-[234px] h-[300px] border rounded-lg shadow-md bg-white relative p-3 group">
      {/* HOT Badge (Top-left) */}

      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md z-[3]">
        HOT
      </div>

      {/* Product Image + Hover Effects */}
      <div className="w-[202px] h-[172px] mx-auto flex justify-center items-center relative overflow-hidden">
        <img
          src={oneplus}
          alt="Product"
          className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-50"
        />

        {/* Hover Icons */}
        <div className="absolute inset-0 flex justify-center items-center space-x-3  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <IconButton icon={<Heart className="w-5 h-5 " />} />
          <Link>
            <IconButton icon={<ShoppingCart className="w-5 h-5" />} />
          </Link>
          <IconButton icon={<Eye className="w-5 h-5" />} />
        </div>
      </div>

      {/* Rating Section */}
      <div className="flex items-center mt-2">
        <StarRating rating={rating} />
        <span className="text-gray-600 text-sm ml-1">({totalReviews})</span>
      </div>

      {/* Product Title */}
      <h3 className="mt-1 text-xs font-medium text-gray-800 line-clamp-2 pt-2">
        TOZO T6 True Wireless Earbuds Bluetooth Headphone...
      </h3>

      {/* Product Price */}
      <p className="text-red-600 font-bold mt-1 text-sm pt-2">$70</p>
    </div>
  );
};
const SearchBar = () => {
  return (
    <div className="w-full h-10 bg-gray-100 rounded-lg flex items-center px-4">
      <input type="text" placeholder="Search for products..." />
    </div>
  );
};

// ⭐ Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
        </svg>
      ))}
      {halfStar && (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
        </svg>
      )}
    </div>
  );
};

// 🖱️ Icon Button Component
const IconButton = ({ icon }) => {
  return (
    <div className="bg-white p-2 rounded-full shadow-md  hover:text-white hover:bg-red-700 transition duration-300 cursor-pointer">
      {icon}
    </div>
  );
};

export default Product;
