import React from "react";
import Product from "./Product"; // Import Product component
import productsData from "./data/productsData.json"; // Import the JSON file


const ProductGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4 p-3">
      {productData.products.map((product) => (
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
  );
};

export default ProductGrid;
