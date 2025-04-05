import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-[800px] h-10 bg-gray-100 rounded-md flex items-center px-4 mt-">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full text-sm bg-transparent border-none focus:ring-0 outline-none"
          aria-label="Search products"
        />
      </div>
    </div>
  );
};

export default SearchBar;
