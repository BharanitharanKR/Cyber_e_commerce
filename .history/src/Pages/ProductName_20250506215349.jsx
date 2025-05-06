import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../components/AllProducts";
import Tracker from "../components/Tracker";
import ProductPage from "../components/ProductPage";
import Description from "../components/Description";
import ApiPage from "../components/ApiPage";
import productData from "../data/productsData.json"; // Adjust the path as needed

const ProductName = () => {
  const { id } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Find the product by ID
    const fetchProduct = () => {
      try {
        setLoading(true);
        setError(false);

        // Convert string ID from URL to number for comparison
        const productId = parseInt(id);

        // Find the product in the JSON data
        const foundProduct = productData.products.find(
          (item) => item.id === productId
        );

        if (foundProduct) {
          console.log("Product found:", foundProduct);
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
          setError(true);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Set a small timeout to ensure a smoother UX with loading indicator
    const timer = setTimeout(() => {
      fetchProduct();
    }, 300);

    return () => clearTimeout(timer);
  }, [id]); // Re-fetch when ID changes

  // Loading state
  if (loading) {
    return (
      <div className="mt-16 md:mt-28 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-gray-900"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !product) {
    return (
      <div className="mt-16 md:mt-28 flex justify-center items-center min-h-[60vh] px-4">
        <div className="text-center bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <svg
            className="mx-auto h-12 w-12 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <h2 className="mt-4 text-xl md:text-2xl font-bold text-red-600">
            Product Not Found
          </h2>
          <p className="mt-2 text-gray-600">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => window.history.back()}
            className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Success state - show product details
  return (
    <div className="container mx-auto px-4">
      <AllProducts />
      <Tracker productName={product.name} category={product.category} />
      <ProductPage
        product={product}
        name={product.name}
        price={product.price}
        rating={product.rating}
        totalReviews={product.totalReviews}
        image={product.image}
        discount={product.discount}
      />
      <Description productName={product.name} category={product.category} />
      <ApiPage />
    </div>
  );
};

export default ProductName;
