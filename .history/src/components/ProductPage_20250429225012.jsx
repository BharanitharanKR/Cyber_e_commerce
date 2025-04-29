import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductPage = ({
  product,
  name,
  price = 1699,
  rating,
  totalRe,
  image,
  discount = 21,
}) => {
  // Image sources with a fallback mechanism
  const images = [
    image ||
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg",
    "https://www.manlylaptops.com.au/assets/full/MLLAP99221-G.png?20241001135556",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiechGPRA-hrxspNfWeZikkoEivcPo8OQJX0dF8njnQkcUtgqNB1sb1N5dOrbPVtuAxc&usqp=CAU",
    "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  // Calculate original price based on discount percentage
  const originalPrice = ((price * 100) / (100 - discount)).toFixed(0);

  // Handle image navigation
  const handlePrev = () => {
    const currentIndex = images.indexOf(currentImage);
    setCurrentImage(images[(currentIndex - 1 + images.length) % images.length]);
  };
  const handleNext = () => {
    const currentIndex = images.indexOf(currentImage);
    setCurrentImage(images[(currentIndex + 1) % images.length]);
  };

  // Add to cart functionality
  const handleAddToCart = () => {
    // Get existing cart items or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Create new cart item with compatible structure for Cart component
    const newItem = {
      id: Date.now(), // Generate unique ID
      img: currentImage,
      name:
        name ||
        "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
      price: price,
      quantity: quantity,
      oldPrice: originalPrice,
    };

    // Add new item to cart
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...existingCart, newItem])
    );

    // Navigate to cart page
    navigate("/Carting");
  };

  // Buy now functionality
  const handleBuyNow = () => {
    // Same structure as add to cart but navigates to billing
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const newItem = {
      id: Date.now(),
      img: currentImage,
      name:
        name ||
        "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
      price: price,
      quantity: quantity,
      oldPrice: originalPrice,
    };

    localStorage.setItem(
      "cartItems",
      JSON.stringify([...existingCart, newItem])
    );

    // Navigate directly to billing
    navigate("/Billing");
  };

  return (
    <div className="w-screen mx-auto my-5 flex justify-between">
      {/* Left: Image Section */}
      <div className="w-1/2 flex flex-col items-center">
        <img
          src={currentImage}
          alt="Product Preview"
          className="w-[500px] h-[300px] object-contain"
        />

        {/* Thumbnail Carousel */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
          >
            ←
          </button>
          <div className="flex gap-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 border-2 rounded-md cursor-pointer transition ${
                  currentImage === img ? "border-red-500" : "border-transparent"
                }`}
                onClick={() => setCurrentImage(img)}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="w-1/2 flex flex-col gap-6 py-10">
        <h1 className="text-[28px] font-medium">
          {name ||
            "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"}
        </h1>

        {/* Product Meta Details */}
        <div className="flex items-center justify-between w-2/3">
          <p className="text-gray-500">Brand: {product?.brand || "Apple"}</p>
          <p className="text-green-600">
            Availability: {product?.availability || "In Stock"}
          </p>
        </div>
        <div className="flex items-center justify-between w-2/3">
          <p>
            Category:{" "}
            <span className="text-black font-bold">
              {product?.category || "Electronics Devices"}
            </span>
          </p>
          <p className="text-gray-500">Sku: {product?.sku || "A264671"}</p>
        </div>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-red-600">${price}</span>
          <span className="text-gray-500 line-through">${originalPrice}</span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            {discount}% OFF
          </span>
        </div>

        {/* Quantity Selector & Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border p-2 rounded">
            <button
              className="px-3 disabled:opacity-50"
              disabled={quantity === 1}
              onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-red-600 text-white px-6 py-2 rounded flex items-center hover:bg-red-700 transition"
          >
            🛒 ADD TO CART
          </button>

          <button
            onClick={handleBuyNow}
            className="border border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-100 transition"
          >
            BUY NOW
          </button>
        </div>

        {/* Additional Options */}
        <div className="flex items-center gap-4 text-gray-600 mt-4">
          <button className="hover:text-red-600 transition">
            ❤️ Add to Wishlist
          </button>
          <Link to="/compared">
            <button className="hover:text-red-600 transition">
              🔄 Add to Compare
            </button>
          </Link>
          <button className="hover:text-red-600 transition">🔗 Share</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
