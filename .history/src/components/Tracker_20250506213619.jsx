import React from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Tracker = ({ productName, category }) => {
  return (
    <div className="bg-gray-100 py-2 md:py-3">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 overflow-x-auto whitespace-nowrap">
          <Link
            to="/"
            className="flex items-center hover:text-red-600 transition duration-300 min-w-max"
          >
            <Home className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
            <span className="hidden xs:inline">Home</span>
          </Link>

          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" />

          <Link
            to={`/category/${category?.toLowerCase()}`}
            className="hover:text-red-600 transition duration-300 min-w-max"
          >
            {category || "Electronics"}
          </Link>

          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" />

          <span className="text-gray-900 font-medium truncate max-w-[150px] sm:max-w-[200px] md:max-w-xs">
            {productName || "Product"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
