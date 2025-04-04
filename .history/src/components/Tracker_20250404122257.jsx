import React from "react";
import { Link } from "react-router-dom";
import { Home, ChevronRight } from "lucide-react";

const Tracker = ({ productName, category }) => {
  return (
    <div className="bg-gray-100 py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center text-sm text-gray-600">
          <Link
            to="/"
            className="flex items-center hover:text-red-600 transition duration-300"
          >
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>

          <ChevronRight className="w-4 h-4 mx-2" />

          <Link
            to={`/category/${category?.toLowerCase()}`}
            className="hover:text-red-600 transition duration-300"
          >
            {category || "Electronics"}
          </Link>

          <ChevronRight className="w-4 h-4 mx-2" />

          <span className="text-gray-900 font-medium truncate max-w-xs">
            {productName || "Product"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
