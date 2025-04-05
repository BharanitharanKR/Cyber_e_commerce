import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaBars,
  FaTimes,
  FaHeart,
  FaCartArrowDown,
  FaMobile,
  FaLaptop,
  FaClock,
  FaHeadphones,
  FaCamera,
  FaGamepad,
} from "react-icons/fa";

// Corrected import for Cyber_logo
import Cyber_logo from "/assets/Cyber_logo.png"; // Use this for Vite
// import Cyber_logo from "../assets/Cyber_logo.png"; // Use this if the file is inside src/assets

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src={Cyber_logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Center: Navigation Links & Search */}
          <div className="hidden md:flex items-center space-x-12">
            <ul className="flex space-x-8 font-medium">
              <li>
                <Link to="/" className="text-black hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-black hover:text-gray-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-black hover:text-gray-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-black hover:text-gray-500">
                  Blog
                </Link>
              </li>
            </ul>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search Products"
              className="bg-gray-50 text-gray-600 p-2 h-10 border rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-gray-200"
            />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/wishlist">
              <FaHeart className="text-xl text-gray-700 cursor-pointer hover:text-red-500" />
            </Link>
            <Link to="/cart">
              <FaCartArrowDown className="text-xl text-gray-700 cursor-pointer hover:text-blue-500" />
            </Link>
            <FaUser className="text-xl text-gray-700 cursor-pointer hover:text-green-500" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 ml-4"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white p-4">
            <ul className="space-y-4 text-center">
              <li>
                <Link to="/" className="block text-black hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/deals"
                  className="block text-black hover:text-gray-500"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-black hover:text-gray-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block text-black hover:text-gray-500"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Category Bar */}
      <div className="flex bg-black text-gray-400 p-2 justify-center text-sm font-medium mt-16">
        <div className="flex space-x-28 items-center pt-2">
          <div className="flex items-center space-x-2">
            <FaMobile />
            <Link to="/category/phones" className="hover:text-white">
              Phones
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaLaptop />
            <Link to="/category/computers" className="hover:text-white">
              Computers
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock />
            <Link to="/category/watches" className="hover:text-white">
              Smart Watches
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaHeadphones />
            <Link to="/category/headphones" className="hover:text-white">
              Headphones
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaCamera />
            <Link to="/category/cameras" className="hover:text-white">
              Cameras
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <FaGamepad />
            <Link to="/category/gaming" className="hover:text-white">
              Gaming
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
