import React from "react";
import Product from "./Product"; // Import Product component

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-1 p-1">
      {[...Array(28)].map((_, index) => (
        <Product key={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
