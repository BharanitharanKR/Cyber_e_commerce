import React from "react";

const products = [
  {
    id: 1,
    image: "https://your-image-url.com",
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphones",
    price: 70,
    rating: 4.5,
    reviews: 738,
    isHot: true,
  },
  {
    id: 2,
    image: "https://your-image-url.com",
    title: "Samsung Galaxy A71 Smartphone - 128GB",
    price: 499,
    rating: 4.7,
    reviews: 1050,
    isHot: false,
  },
  {
    id: 3,
    image: "https://your-image-url.com",
    title: "Sony WH-1000XM4 Noise Cancelling Headphones",
    price: 350,
    rating: 4.8,
    reviews: 1500,
    isHot: true,
  },
];

const Prod = ({ image, title, price, rating, reviews, isHot }) => {
  return (
    <div className="w-64 border rounded-lg shadow-md p-3 relative bg-white hover:shadow-xl transition-all">
      {/* HOT Badge */}
      {isHot && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          HOT
        </div>
      )}

      {/* Product Image */}
      <div className="w-full flex justify-center">
        <img src={image} alt={title} className="h-40 object-contain" />
      </div>

      {/* Rating */}
      <div className="flex items-center mt-2 text-red-500 text-sm">
        {"★".repeat(Math.floor(rating))}{" "}
        <span className="ml-1 text-gray-600 text-xs">({reviews})</span>
      </div>

      {/* Product Title */}
      <h3 className="text-gray-800 font-semibold text-sm mt-1 line-clamp-2">
        {title}
      </h3>

      {/* Price */}
      <p className="text-red-600 font-bold mt-2">${price}</p>
    </div>
  );
};

const Product= () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {products.map((prod) => (
        <Product key={prod.id} {...prod} />
      ))}
    </div>
  );
};

export default Product;
