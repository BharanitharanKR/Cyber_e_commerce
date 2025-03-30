import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  "Phones",
  "Computers",
  "Smart Watches",
  "Cameras",
  "Headphones",
  "Gaming",
];

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2"
      >
        {selectedCategory} <FaChevronDown />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border shadow-lg rounded-lg">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
