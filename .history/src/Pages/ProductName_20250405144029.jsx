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

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Find the product by ID
    const fetchProduct = () => {
      try {
        const productId = parseInt(id);
        const foundProduct = productData.products.find(
          (item) => item.id === productId
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="mt-28 flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Tracker />
      <ProductPage product={product} />
      <Description product={product} />
      <ApiPage product={product} />
    </div>
  );
};

export default ProductName;
