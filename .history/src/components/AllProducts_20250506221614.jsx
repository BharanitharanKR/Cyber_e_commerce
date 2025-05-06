import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiRefreshCw,
  FiHeadphones,
  FiInfo,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const dropdownRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white-100 shadow">
      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-10 py-1">
        <div className="relative z-10" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border-gray-200 rounded-md shadow-md hover:bg-gray-200 z-50"
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
        <div className="flex items-center gap-3 lg:gap-8 text-gray-600 text-xs lg:text-sm">
          <div className="flex-row items-center cursor-pointer hover:text-black">
            <Link to="/Chase" className="flex gap-1 items-center">
              <FiMapPin /> <span>Track Order</span>
            </Link>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <Link to="/Compared" className="flex gap-1 items-center">
              <FiRefreshCw /> <span>Compare</span>
            </Link>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <FiHeadphones /> <span>Customer Support</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            <FiInfo /> <span>Need Help</span>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center text-gray-700 text-xs lg:text-sm">
          <FiPhone className="text-lg mr-1" />
          <span>+123-456-7890</span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="relative z-10" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1 bg-white border-gray-200 rounded-md shadow-md hover:bg-gray-200 z-50 text-sm"
          >
            {selectedCategory.length > 10
              ? `${selectedCategory.substring(0, 10)}...`
              : selectedCategory}
            <IoMdArrowDropdown />
          </button>
          {isOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                  onClick={() => handleSelectCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Phone Number - Condensed for Mobile */}
        <div className="flex items-center text-gray-700 text-sm">
          <FiPhone className="text-lg mr-1" />
          <span className="text-xs">+123-456-7890</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-gray-600 focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-2">
          <div className="flex flex-col space-y-3 px-4 py-2">
            <Link
              to="/Chase"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiMapPin /> <span className="text-sm">Track Order</span>
            </Link>
            <Link
              to="/Compared"
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiRefreshCw /> <span className="text-sm">Compare</span>
            </Link>
            <div className="flex items-center gap-2 text-gray-600 hover:text-black">
              <FiHeadphones /> <span className="text-sm">Customer Support</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 hover:text-black">
              <FiInfo /> <span className="text-sm">Need Help</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarTop;
