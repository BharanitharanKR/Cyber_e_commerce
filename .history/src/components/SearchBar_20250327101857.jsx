import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="w- h-10 bg-gray-100 rounded-lg flex items-center px-4">
        <input type="text" placeholder="Search for products..." />
      </div>
    </div>
  );
};

export default SearchBar;
