import {
  FaMapMarkerAlt,
  FaSyncAlt,
  FaHeadset,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar= {
  return (
    <nav className="flex justify-between items-center px-6 py-2 border-b bg-white">
      {/* Left Section - Category Dropdown */}
      <div className="flex items-center">
        <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-black">
          All Category <IoMdArrowDropdown />
        </button>
      </div>

      {/* Center Section - Navigation Links */}
      <div className="flex items-center gap-6 text-gray-600 text-sm">
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaMapMarkerAlt /> <span>Track Order</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaSyncAlt /> <span>Compare</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaHeadset /> <span>Customer Support</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaInfoCircle /> <span>Need Help</span>
        </div>
      </div>

      {/* Right Section - Contact Info */}
      <div className="flex items-center gap-2 text-gray-700 font-medium hover:text-black cursor-pointer">
        <FaPhone /> <span>+123-456-7890</span>
      </div>
    </nav>
  );
}
