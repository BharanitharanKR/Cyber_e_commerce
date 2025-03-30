import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  FiMapPin,
  FiRefreshCw,
  FiHeadphones,
  FiInfo,
  FiPhone,
} from "react-icons/fi";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const categories = [
    "Smartphones",
    "Laptops",
    "Headphones",
    "Tablets",
    "Cameras",
    "Gaming Consoles",
    "Smartwatches",
    "Speakers",
    "Accessories",
    "Monitors",
  ];

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="flex mt-28 items-center justify-between px-10 py-3 bg-white-100 shadow">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white border-gray-200 rounded-md shadow-md hover:bg-gray-200"
        >
          {selectedCategory} <IoMdArrowDropdown />
        </button>
        {isOpen && (
          <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Menu Icons */}
      <div className="flex items-start
       gap-8 text-gray-600 text-sm">
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FiMapPin /> <span>Track Order</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FiRefreshCw /> <span>Compare</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FiHeadphones /> <span>Customer Support</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FiInfo /> <span>Need Help</span>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex items-center text-gray-700 text-sm">
        <FiPhone className="text-lg mr-1" />
        <span>+123-456-7890</span>
      </div>
    </div>
  );
};

export default NavbarTop;
