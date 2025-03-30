import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CategoryDropdown = () => {
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
    setSelectedCategory(category); // Update selected category
    setIsOpen(false); // Close dropdown
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white shadow-md hover:bg-gray-100"
      >
        {selectedCategory} <IoMdArrowDropdown />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
          {categories.map((category, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelectCategory(category)} // Get selected category
            >
              {category}
            </li>
          ))}
        </ul>
      )}

      {/* Display Selected Category (Optional) */}
      <p className="mt-2 text-gray-600">Selected: {selectedCategory}</p>
    </div>
  );
};

export default CategoryDropdown;
