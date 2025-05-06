import React, { useState, useEffect, useRef } from "react";
// Import your other dependencies here

const AllProducts = ({ products }) => {
  // State for filters
  const [filters, setFilters] = useState({
    category: "all",
    price: [0, 2000], // Example price range
    brand: "all",
    // Add other filter properties as needed
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const filterMenuRef = useRef(null);

  // Close filter menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setIsFilterMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Apply filters whenever filter state changes
  useEffect(() => {
    // Filter logic
    const applyFilters = () => {
      let result = [...products];

      // Category filter
      if (filters.category !== "all") {
        result = result.filter(
          (product) => product.category === filters.category
        );
      }

      // Price filter
      result = result.filter(
        (product) =>
          product.price >= filters.price[0] && product.price <= filters.price[1]
      );

      // Brand filter
      if (filters.brand !== "all") {
        result = result.filter((product) => product.brand === filters.brand);
      }

      // Add other filters as needed

      setFilteredProducts(result);
    };

    applyFilters();
  }, [filters, products]);

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        {/* Filter Section - Desktop */}
        <div className="hidden lg:block w-64 mr-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Filters</h3>

            {/* Category Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Category</h4>
              <select
                className="w-full p-2 border rounded"
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                {/* Add more categories */}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Price Range</h4>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={filters.price[0]}
                  onChange={(e) =>
                    handleFilterChange("price", [
                      parseInt(e.target.value),
                      filters.price[1],
                    ])
                  }
                  min="0"
                />
                <span>to</span>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  value={filters.price[1]}
                  onChange={(e) =>
                    handleFilterChange("price", [
                      filters.price[0],
                      parseInt(e.target.value),
                    ])
                  }
                  min={filters.price[0]}
                />
              </div>
            </div>

            {/* Brand Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Brand</h4>
              <select
                className="w-full p-2 border rounded"
                value={filters.brand}
                onChange={(e) => handleFilterChange("brand", e.target.value)}
              >
                <option value="all">All Brands</option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                {/* Add more brands */}
              </select>
            </div>

            {/* Add more filters as needed */}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            className="w-full bg-white p-3 rounded-lg shadow flex justify-center items-center"
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
          >
            <span className="mr-2">Filters</span>
            {isFilterMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Filter Menu */}
        {isFilterMenuOpen && (
          <div
            ref={filterMenuRef}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
          >
            <div className="bg-white w-11/12 max-w-md p-4 rounded-lg max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button
                  className="text-gray-500"
                  onClick={() => setIsFilterMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Filter Content - Same as desktop */}
              {/* Category Filter */}
              <div className="mb-4">
                <h4 className="font-medium mb-2">Category</h4>
                <select
                  className="w-full p-2 border rounded"
                  value={filters.category}
                  onChange={(e) =>
                    handleFilterChange("category", e.target.value)
                  }
                >
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  {/* Add more categories */}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="mb-4">
                <h4 className="font-medium mb-2">Price Range</h4>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={filters.price[0]}
                    onChange={(e) =>
                      handleFilterChange("price", [
                        parseInt(e.target.value),
                        filters.price[1],
                      ])
                    }
                    min="0"
                  />
                  <span>to</span>
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={filters.price[1]}
                    onChange={(e) =>
                      handleFilterChange("price", [
                        filters.price[0],
                        parseInt(e.target.value),
                      ])
                    }
                    min={filters.price[0]}
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-4">
                <h4 className="font-medium mb-2">Brand</h4>
                <select
                  className="w-full p-2 border rounded"
                  value={filters.brand}
                  onChange={(e) => handleFilterChange("brand", e.target.value)}
                >
                  <option value="all">All Brands</option>
                  <option value="apple">Apple</option>
                  <option value="samsung">Samsung</option>
                  {/* Add more brands */}
                </select>
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 rounded"
                onClick={() => setIsFilterMenuOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500">
                No products found matching your filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow overflow-hidden"
                >
                  {/* Product card content */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                    <p className="text-gray-600 mb-2">{product.brand}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">${product.price}</span>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
