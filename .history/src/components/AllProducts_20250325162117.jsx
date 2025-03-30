import React from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "$599",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    price: "$999",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$199",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Computers",
    price: "$380",
    
  }
];

const AllProducts = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
