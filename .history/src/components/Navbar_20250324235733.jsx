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
} from "react-icons/fa";
import Cyber_logo from "../assets/Cyber_logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Left: Logo */}
          <div className="flex items-center">
            <img src={Cyber_logo} alt="Logo" className="h-6 w-auto" />
          </div>

          {/* Center: Navigation Links & Search */}
          <div className="flex items-center space-x-32">
            <ul className="hidden md:flex space-x-8 font-medium ml-9">
              <li>
                <Link to="/" className="text-black hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/AllProducts"
                  className="text-black hover:text-gray-500"
                >
                  About
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

            {/* Search Bar - Moves closer to links with ml-6 */}
            <input
              type="text"
              placeholder="Search Products"
              className=" ml-20 bg-gray-50 text-gray-600 p-2 h-10 border rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-gray-200 ml-6"
            />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6">
            <FaHeart className="text-xl text-gray-700 cursor-pointer hover:text-red-500" />
            <FaCartArrowDown className="text-xl text-gray-700 cursor-pointer hover:text-blue-500" />
            <FaUser className="text-xl text-gray-700 cursor-pointer hover:text-green-500" />
          </div>
        </div>
        <div className="  flex m-0 h-9 w-auto  bg-black text-gray-400 p-2 h-18 justify-between">
          <div className="container mx-auto flex justify-center space-x-24  text-sm font-medium">
            <div className="flex justify-between space-x-2">
              <FaMobile className=" w-2 h-5 6" />
              <a href="#" className="hover:text-white">
                Phone{" "}
              </a>
            </div>
            <div className="flex justify-between space-x-2">
              <FaMobile className=" w-2 h-5 6" />
              <a href="#" className="hover:text-gray-400">
                Computers{" "}
              </a>
            </div>
            <div className="flex justify-between space-x-2">
              <FaMobile className=" w-2 h-5 6" />
              <a href="#" className="hover:text-gray-400">
                Smart Watches{" "}
              </a>
            </div>
            <div className="flex justify-between space-x-2">
              <FaMobile className=" w-2 h-5 6" />
              <a href="#" className="hover:text-gray-400">
                Head Phones{" "}
              </a>
            </div>
            <div className="flex justify-between space-x-2">
              <FaMobile className=" w-2 h-5 6" />
              <a href="#" className="hover:text-gray-400">
                Cameras{" "}
              </a>
            </div>
            <div className="flex justify-between space-x-2">
              <FaMobile className=" w-2 h-5 6" />
              <a href="#" className="hover:text-gray-400">
                Gaming{" "}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
