import React from "react";

const SearchBar = () => {
  return (
    <div className="items-center">
      <div className="w-[800px] item h-10 bg-gray-200 rounded-lg flex items-center px-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="outline-none w-full text-sm"
        />
      </div>
    </div>
  );
};

export default SearchBar;
