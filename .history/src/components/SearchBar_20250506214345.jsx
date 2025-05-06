import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="w-full px-2 md:px-4">
      <form
        onSubmit={handleSearch}
        className={`flex items-center w-full rounded-md border ${
          isFocused ? "border-blue-500 shadow-md" : "border-gray-300"
        } bg-white overflow-hidden`}
      >
        <input
          type="text"
          placeholder="Search for products..."
          className="flex-grow px-3 py-2 md:py-3 text-sm md:text-base outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {searchQuery && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="p-2 text-gray-500 hover:text-gray-700"
          >
            <FiX className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        )}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 md:p-3 transition-colors"
        >
          <FiSearch className="h-4 w-4 md:h-5 md:w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
