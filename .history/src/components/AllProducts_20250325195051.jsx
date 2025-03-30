import { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-6 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Track Order
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Compare
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Customer Support
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Need Help
            </a>
          </li>
        </ul>
        <span className="text-gray-300">📞 +123-456-7890</span>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">ShopLogo</a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <a href="#" className="hover:text-gray-500">
              Phones
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Computers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Smart Watches
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Cameras
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Headphones
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-500">
              Gaming
            </a>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              className="flex items-center hover:text-gray-500"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              All Category <FaChevronDown className="ml-1" />
            </button>

            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Mobiles
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Accessories
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-lg p-4 space-y-4">
          <li>
            <a href="#" className="block text-lg">
              Phones
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Computers
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Smart Watches
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Cameras
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Headphones
            </a>
          </li>
          <li>
            <a href="#" className="block text-lg">
              Gaming
            </a>
          </li>
          <li>
            <button
              className="flex items-center w-full text-lg"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              All Category <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <ul className="mt-2 bg-gray-100 rounded-md">
                <li>
                  <a href="#" className="block px-4 py-2">
                    Mobiles
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Laptops
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2">
                    Accessories
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
