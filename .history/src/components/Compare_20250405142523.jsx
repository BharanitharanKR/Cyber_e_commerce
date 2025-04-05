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
      reviews: 51746385,
    },
    {
      name: 'Apple iMac 24" M1 Blue 2021',
      price: "$1,699.00",
      soldBy: "Apple",
      brand: "Apple",
      stock: "IN STOCK",
      size: "6.71 inches, 110.5 cm",
      weight: "650 g (7.41 oz)",
      rating: 5.0,
      reviews: 673971743,
    },
    {
      name: "S21 FE",
      price: "$699.99",
      soldBy: "Clicon",
      brand: "Samsung",
      stock: "OUT OF STOCK",
      size: "6.71 inches, 110.5 cm",
      weight: "650 g (7.41 oz)",
      rating: 4.9,
      reviews: 96459761,
    },
  ];

  return (
    <div className="mx-auto p-6">
      {/* Product Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md text-center"
          >
            <img
              className="w-24 h-48 mx-auto"
              src="/assets/lap.png"
              alt="Product Image"
            />
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
            <p className="text-yellow-500">
              ⭐ {product.rating} ({product.reviews.toLocaleString()} reviews)
            </p>
          </div>
        ))}
      </div>

      {/* Comparison Table */}
      <div className="mt-10 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Feature</th>
              {products.map((product, index) => (
                <th key={index} className="border p-2">
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              "Price",
              "Sold By",
              "Brand",
              "Stock Status",
              "Size",
              "Weight",
            ].map((feature, idx) => (
              <tr key={idx}>
                <td className="border p-2 font-semibold">{feature}</td>
                {products.map((p, i) => (
                  <td
                    key={i}
                    className={`border p-2 ${
                      feature === "Stock Status" && p.stock === "IN STOCK"
                        ? "text-green-600"
                        : feature === "Stock Status"
                        ? "text-red-600"
                        : ""
                    }`}
                  >
                    {p[feature.toLowerCase().replace(" ", "")]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
