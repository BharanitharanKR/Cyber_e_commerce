import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/deals");
    setMenuOpen(false);
  };

  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src={Cyber_logo} alt="Logo" className="h-5 md:h-6 w-auto" />
          </div>

          {/* Center: Navigation Links & Search - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-12">
            <ul className="flex space-x-4 lg:space-x-8 font-medium text-sm lg:text-base">
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
            <form onSubmit={handleSearchSubmit} className="hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-50 text-gray-600 p-2 h-10 border rounded-md w-48 xl:w-64 focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>

          {/* Right: Icons - Adjusted for Mobile */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Search Icon for Mobile */}
            <Link to="/search" className="md:hidden">
              <FaSearch className="text-lg md:text-xl text-gray-700 cursor-pointer hover:text-blue-500" />
            </Link>

            <Link to="/wishlist" className="hidden sm:block">
              <FaHeart className="text-lg md:text-xl text-gray-700 cursor-pointer hover:text-red-500" />
            </Link>
            <Link to="/carting">
              <FaCartArrowDown className="text-lg md:text-xl text-gray-700 cursor-pointer hover:text-blue-500" />
            </Link>
            <Link to="/account" className="hidden sm:block">
              <FaUser className="text-lg md:text-xl text-gray-700 cursor-pointer hover:text-green-500" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-gray-700 ml-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Expanded with Search */}
        {menuOpen && (
          <div className="md:hidden bg-white p-4 shadow-lg">
            {/* Mobile Search Form */}
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-gray-50 text-gray-600 p-2 h-10 border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-gray-200"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  <FaSearch />
                </button>
              </div>
            </form>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-black hover:text-gray-500 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/deals"
                  className="block text-black hover:text-gray-500 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block text-black hover:text-gray-500 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block text-black hover:text-gray-500 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>

              {/* Categories dropdown for mobile */}
              <li>
                <button
                  onClick={toggleCategoryMenu}
                  className="flex items-center justify-between w-full text-black hover:text-gray-500 py-2"
                >
                  Categories
                  {categoryMenuOpen ? (
                    <FaTimes className="text-sm" />
                  ) : (
                    <FaBars className="text-sm" />
                  )}
                </button>

                {categoryMenuOpen && (
                  <div className="pl-4 mt-2 space-y-3">
                    <Link
                      to="/deals"
                      className="block text-gray-600 hover:text-black py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaMobile className="text-sm" />
                        <span>Phones</span>
                      </div>
                    </Link>
                    <Link
                      to="/deals"
                      className="block text-gray-600 hover:text-black py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaLaptop className="text-sm" />
                        <span>Computers</span>
                      </div>
                    </Link>
                    <Link
                      to="/deals"
                      className="block text-gray-600 hover:text-black py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaClock className="text-sm" />
                        <span>Smart Watches</span>
                      </div>
                    </Link>
                    <Link
                      to="/deals"
                      className="block text-gray-600 hover:text-black py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaHeadphones className="text-sm" />
                        <span>Headphones</span>
                      </div>
                    </Link>
                    <Link
                      to="/deals"
                      className="block text-gray-600 hover:text-black py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaCamera className="text-sm" />
                        <span>Cameras</span>
                      </div>
                    </Link>
                    <Link
                      to="/deals"
                      className="block text-gray-600 hover:text-black py-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaGamepad className="text-sm" />
                        <span>Gaming</span>
                      </div>
                    </Link>
                  </div>
                )}
              </li>

              {/* Account link in mobile menu */}
              <li className="sm:hidden">
                <Link
                  to="/account"
                  className="block text-black hover:text-gray-500 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <FaUser className="text-sm" />
                    <span>My Account</span>
                  </div>
                </Link>
              </li>

              {/* Wishlist link in mobile menu */}
              <li className="sm:hidden">
                <Link
                  to="/wishlist"
                  className="block text-black hover:text-gray-500 py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <FaHeart className="text-sm" />
                    <span>Wishlist</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Category Bar - Hide on Mobile, Show on md screens and up */}
      <div className="hidden md:flex bg-black text-gray-400 p-2 justify-center text-xs lg:text-sm font-medium mt-16">
        <div className="flex items-center space-x-4 lg:space-x-12 xl:space-x-28 overflow-x-auto py-1">
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <FaMobile />
            <Link to="/deals" className="hover:text-white">
              Phones
            </Link>
          </div>
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <FaLaptop />
            <Link to="/deals" className="hover:text-white">
              Computers
            </Link>
          </div>
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <FaClock />
            <Link to="/deals" className="hover:text-white">
              Smart Watches
            </Link>
          </div>
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <FaHeadphones />
            <Link to="/deals" className="hover:text-white">
              Headphones
            </Link>
          </div>
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <FaCamera />
            <Link to="/deals" className="hover:text-white">
              Cameras
            </Link>
          </div>
          <div className="flex items-center space-x-2 whitespace-nowrap">
            <FaGamepad />
            <Link to="/deals" className="hover:text-white">
              Gaming
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer for Mobile */}
      <div className="h-16 md:h-24"></div>
    </>
  );
};

export default Navbar;
