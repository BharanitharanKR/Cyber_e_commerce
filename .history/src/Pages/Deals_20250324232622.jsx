import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  { name: "Phones", icon: "📱" },
  { name: "Computers", icon: "💻" },
  { name: "Smart Watches", icon: "⌚" },
  { name: "Cameras", icon: "📷" },
  { name: "Headphones", icon: "🎧" },
  { name: "Gaming", icon: "🎮" },
];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2"
      >
        {selectedCategory.icon} {selectedCategory.name} <FaChevronDown />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border shadow-lg rounded-lg">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCategory(category);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
            >
              {category.icon} {category.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
