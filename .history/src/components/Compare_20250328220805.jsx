import React from "react";

const Compare = () => {
  const products = [
    {
      feedback: "★★★★★ (51,746,385)",
      price: "$899.00",
      soldBy: "Clicon",
      brand: "StarTech",
      model: "ARES M2 and ZEUS E2",
      stock: "IN STOCK",
      size: "6.71 inches, 110.5 cm",
      weight: "650 g (7.41 oz)",
    },
    {
      feedback: "★★★★★ (673,971,743)",
      price: "$1,699.00",
      soldBy: "Apple",
      brand: "Apple",
      model: 'Apple iMac 24" M1 Blue 2021',
      stock: "IN STOCK",
      size: "6.7 inches, 109.8 cm",
      weight: "240 g (8.47 oz)",
    },
    {
      feedback: "★★★★★ (96,459,761)",
      price: "$699.99",
      soldBy: "Clicon",
      brand: "Samsung",
      model: "S21 FE",
      stock: "OUT OF STOCK",
      size: "6.4 inches, 98.9 cm",
      weight: "177 g (6.24 oz)",
    },
  ];

  return (
    <div className="w-full p-8 bg-gray-100 mt-48">
      <div className="grid grid-cols-3 gap-6 bg-black text-white p-6 rounded-lg">
        {products.map((product, index) => (
          <div
            key={index}
            className="p-4 bg-white text-black rounded-lg shadow-lg"
          >
            <h2 className="text-lg font-bold text-center text-red-600">
              {product.feedback}
            </h2>
            <p className="text-xl font-bold text-center text-red-500">
              {product.price}
            </p>
            <p className="text-center">
              Sold by: <strong>{product.soldBy}</strong>
            </p>
            <p className="text-center">
              Brand: <strong>{product.brand}</strong>
            </p>
            <p className="text-center">
              Model: <strong>{product.model}</strong>
            </p>
            <p
              className={`text-center font-bold ${
                product.stock === "IN STOCK" ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock}
            </p>
            <p className="text-center">
              Size: <strong>{product.size}</strong>
            </p>
            <p className="text-center">
              Weight: <strong>{product.weight}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
