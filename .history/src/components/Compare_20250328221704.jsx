import React from "react";

const Compare = () => {
  const products = [
    {
      name: "ARES M2 and ZEUS E2",
      price: "$899.00",
      soldBy: "Clicon",
      brand: "StarTech",
      stock: "IN STOCK",
      size: "6.71 inches, 110.5 cm",
      weight: "650 g (7.41 oz)",
      rating: 4.8,
      reviews: "51,746,385",
    },
    {
      name: 'Apple iMac 24" M1 Blue 2021',
      price: "$1,699.00",
      soldBy: "Apple",
      brand: "Apple",
      stock: "IN STOCK",

      rating: 5.0,
      reviews: "673,971,743",
    },
    {
      name: "S21 FE",
      price: "$699.99",
      soldBy: "Clicon",
      brand: "Samsung",
      stock: "OUT OF STOCK",

      rating: 4.9,
      reviews: "96,459,761",
    },
  ];

  return (
    <div className=" mx-auto p-6 mt-40">
      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md text-center"
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-red-500 text-lg font-semibold">
              {product.price}
            </p>

            <p
              className={`font-bold ${
                product.stock === "IN STOCK" ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock}
            </p>
            <p className="text-gray-700">Size: {product.size}</p>
            <p className="text-gray-700">Weight: {product.weight}</p>
            <p className="text-yellow-500">
              ⭐ {product.rating} ({product.reviews} reviews)
            </p>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-10">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Feature</th>
              {products.map((product, index) => (
                <th key={index} className="border p-2">
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Price</td>
              {products.map((p, i) => (
                <td key={i} className="border p-2">
                  {p.price}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Sold By</td>
              {products.map((p, i) => (
                <td key={i} className="border p-2">
                  {p.soldBy}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Brand</td>
              {products.map((p, i) => (
                <td key={i} className="border p-2">
                  {p.brand}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Stock Status</td>
              {products.map((p, i) => (
                <td
                  key={i}
                  className={`border p-2 ${
                    p.stock === "IN STOCK" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {p.stock}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Size</td>
              {products.map((p, i) => (
                <td key={i} className="border p-2">
                  {p.size}
                </td>
              ))}
            </tr>
            <tr>
              <td className="border p-2">Weight</td>
              {products.map((p, i) => (
                <td key={i} className="border p-2">
                  {p.weight}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
