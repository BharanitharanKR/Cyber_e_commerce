import React from "react";
import { Link } from "react-router-dom";

const Compare = () => {
  const products = [
    {
      image: "keyboard.png", // Replace with actual image path
      name: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
      price: "$899.00",
      feedback: "51,746,385",
      stars: 5,
      brand: "StarTech",
      model: "ARES M2 and ZEUS E2",
      stock: "IN STOCK",
      size: "6.71 inches, 110.5 cm",
      weight: "650 g (7.41 oz)",
    },
    {
      image: "imac.png", // Replace with actual image path
      name: "Apple iMac 24'' 4K Retina Display M1 8 Core CPU, 256GB SSD",
      price: "$1,699.00",
      feedback: "673,971,743",
      stars: 5,
      brand: "Apple",
      model: "iMac 24'' M1 Blue 2021",
      stock: "IN STOCK",
      size: "6.7 inches, 109.8 cm",
      weight: "240 g (8.47 oz)",
    },
    {
      image: "s21.png", // Replace with actual image path
      name: "Samsung Galaxy S21 FE 5G Cell Phone, 128GB, 120Hz Display",
      price: "$699.99",
      feedback: "96,459,761",
      stars: 5,
      brand: "Samsung",
      model: "S21 FE",
      stock: "OUT OF STOCK",
      size: "6.4 inches, 98.9 cm",
      weight: "177 g (6.24 oz)",
    },
  ];

  return (
    <div className="container mx-auto mt-10 p-5">
      <div className="grid grid-cols-3 gap-5">
        {products.map((product, index) => (
          <div key={index} className="border p-5 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto mb-4"
            />
            <h2 className="font-bold text-lg mb-2">{product.name}</h2>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg w-full">
              ADD TO CART
            </button>
            <p className="mt-2 text-sm text-gray-600">
              ⭐⭐⭐⭐⭐ ({product.feedback})
            </p>
            <p className="text-xl font-semibold text-red-600">
              {product.price}
            </p>
            <p className="text-sm">Brand: {product.brand}</p>
            <p className="text-sm">Model: {product.model}</p>
            <p
              className={`text-sm font-bold ${
                product.stock === "IN STOCK" ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock}
            </p>
            <p className="text-sm">Size: {product.size}</p>
            <p className="text-sm">Weight: {product.weight}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition text-lg"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Compare;
