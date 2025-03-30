import React from "react";

const SearchBar = () => {
  return (
    <div className="items-center">
      <div className="w-[800px] items-center h-10 bg-gray-100 rounded-lg flex items-center px-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="oy"
        />
      </div>
    </div>
  );
};

export default SearchBar;
