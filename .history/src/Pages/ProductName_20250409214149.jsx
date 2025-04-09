import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "../components/AllProducts";
import Tracker from "../components/Tracker";
import ProductPage from "../components/ProductPage";
import Description from "../components/Description";
import ApiPage from "../components/ApiPage";
import productData from "../data/productsData.json";
import { useCart } from "../context/CartContext"; // ⬅️ Import cart context

const ProductName = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // ⬅️ Use cart

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProduct = () => {
      try {
        const productId = parseInt(id);
        const foundProduct = productData.products.find(
          (item) => item.id === productId
        );
        if (foundProduct) {
          setProduct(foundProduct);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <AllProducts />
      <Tracker productName={product.name} category={product.category} />
      <ProductPage {...product} />
      <div className="text-center my-4">
        <button
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          onClick={() => addToCart(product)} // ⬅️ Add to cart
        >
          Add to Cart
        </button>
      </div>
      <Description productName={product.name} category={product.category} />
      <ApiPage />
    </div>
  );
};

export default ProductName;
