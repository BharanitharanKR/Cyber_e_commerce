import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="relative mt-28">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-md hover:bg-gray-100"
      >
        All Category <IoMdArrowDropdown />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          {categories.map((category, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => setIsOpen(false)} // Close dropdown on select
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryDropdown;
