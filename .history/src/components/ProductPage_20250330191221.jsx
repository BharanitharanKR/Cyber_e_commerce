import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainImage from "../assets/MainImage.png";
const ProductPage = () => {
  // Image array from the web
  const images = [
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMbuxGz5ZuVufUKprLZAdQzU2jkk8KURI0T-sXv1vh4CQXyzijaKBBETJCU1eTE_5bP9ZLhUVrx6PgS0DJoBIJGm-mxkvd-vQYMVxGhc0s2_vbXyn_LvBa0j1RAPMZ5PR3i7NrHFA&usqp=CAc",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTg7AJ8_gpBMpW_-I9mbgUEbqXo1i6xubAZbgpayBazLNYRxOTHOm5597_u0wgoPWU0A8nWa-OM-tjQIb1mrXAwRlxBbiWGR0MHtZIeU9GwZovskEpW_frzE7e49CfF2v8ZAXlGnVM&usqp=CAc",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQSHFoNd6BdVKi8apAiZmYviSyZ4ck46n30jogolbno4H5d836JIMj1K8hG_a-JJcf9xve5H1EBuMzsLNMxXgcrBYTRWorVpphCxRjvwEBpU7JtoQFk2FpbYjcY-Hl7jl4ab7xjXQ&usqp=CAc",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrDGsbaBAgzCuqmtPc6sbDSluwxhLi-EDJA&s",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to handle previous image
  const handlePrev = () => {
    const currentIndex = images.indexOf(currentImage);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImage(images[prevIndex]);
  };

  // Function to handle next image
  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImage(images[nextIndex]);
  };

  return (
    <div className="container mx-auto pl-16 pr-16 flex gap-6">
      {/* Left Side: Image Section */}
      <div className="w-1/2 flex flex-col items-center">
        <img
          src={currentImage}
          alt="Product"
          className="w-full object-contain"
        />

        {/* Thumbnail Carousel */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-red-500 text-white rounded-full"
          >
            ←
          </button>
          <div className="flex gap-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 border-2 rounded-md cursor-pointer ${
                  currentImage === image
                    ? "border-red-500"
                    : "border-transparent"
                }`}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 bg-red-500 text-white rounded-full"
          >
            →
          </button>
        </div>
      </div>

      {/* Right Side: Product Details */}
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-xl font-medium">
          2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD
          Storage) - Space Gray
        </h1>
        <div className="flex items-center justify-between w-1/2">
          <p className="text-gray-500">Brand: Apple</p>
          <p className="text-green-600">Availability: In Stock</p>
        </div>
        <div className="flex items-center justify-between w-1/2">
          <p>
            Category:{" "}
            <span className="text-black font-bold">Electronics Devices</span>
          </p>
          <p className="text-gray-500">Sku: A264671</p>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">$1699</span>
          <span className="text-gray-500 line-through">$1999</span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            21% OFF
          </span>
        </div>

        {/* Quantity & Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border p-2">
            <button className="px-3">-</button>
            <span className="px-4">1</span>
            <button className="px-3">+</button>
          </div>
          <button className="bg-red-600 text-white px-6 py-2 rounded flex items-center">
            🛒 ADD TO CART
          </button>
          <Link to="/Billing">
            <button className="border border-red-600 text-red-600 px-6 py-2 rounded">
              BUY NOW
            </button>
          </Link>
        </div>

        {/* Additional Options */}
        <div className="flex items-center gap-4 text-gray-600 mt-4">
          <button>❤️ Add to Wishlist</button>
          <Link to="/compared">
            <button>🔄 Add to Compare</button>
          </Link>
          <button>🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
