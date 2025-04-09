import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { FaFilter } from "react-icons/fa";

const AllProducts = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  // Extract unique categories from products
  const [categories, setCategories] = useState([
    { id: "all", name: "All Products" },
  ]);

  // Fetch products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Adjust the path to your JSON file as needed
        const response = await fetch("/data/products.json");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products); // Note: accessing the "products" property

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(data.products.map((product) => product.category)),
        ];
        const categoryOptions = [
          { id: "all", name: "All Products" },
          ...uniqueCategories.map((category) => ({
            id: category.toLowerCase(),
            name: category,
          })),
        ];
        setCategories(categoryOptions);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Set initial category from URL if provided
  useEffect(() => {
    if (categoryId) {
      setSelectedCategory(categoryId.toLowerCase());
    }
  }, [categoryId]);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory ||
          product.category.toLowerCase().includes(selectedCategory)
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setFilterMenuOpen(false); // Close mobile filter menu after selection
  };

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center mt-32">
        Loading products...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex justify-center items-center mt-32">
        Error: {error}
      </div>
    );

  return (
    <div className="container mx-auto px-4 mt-32 mb-16">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        <h1 className="text-2xl font-bold mb-4">
          {selectedCategory === "all"
            ? "All Products"
            : categories.find((cat) => cat.id === selectedCategory)?.name ||
              "Products"}
        </h1>

        {/* Mobile Filter Toggle */}
        <button
          className="flex items-center space-x-2 md:hidden bg-black text-white px-4 py-2 rounded-md"
          onClick={() => setFilterMenuOpen(!filterMenuOpen)}
        >
          <FaFilter />
          <span>Filter</span>
        </button>

        {/* Desktop Category Filter */}
        <div className="hidden md:flex flex-wrap space-x-4 bg-gray-100 p-4 rounded-lg">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-md transition duration-200 mb-2 ${
                selectedCategory === category.id
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Category Filter (Dropdown) */}
      {filterMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg p-4 mb-6">
          <h3 className="font-medium mb-2">Select Category</h3>
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 py-2 rounded-md text-left transition duration-200 ${
                  selectedCategory === category.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Display products count */}
      <p className="text-gray-600 mb-6">
        Showing {filteredProducts.length}{" "}
        {selectedCategory !== "all"
          ? categories.find((cat) => cat.id === selectedCategory)?.name || ""
          : ""}{" "}
        products
      </p>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No products found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              rating={product.rating}
              totalReviews={product.totalReviews}
              isHot={product.isHot}
              discount={product.discount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
