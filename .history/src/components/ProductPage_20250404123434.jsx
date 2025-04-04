import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = ({
  product,
  name,
  price,
  rating,
  totalReviews,
  image,
  discount,
}) => {
  // Use image from props or fallback to default images
  const images = [
    image ||
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg",
    "https://www.manlylaptops.com.au/assets/full/MLLAP99221-G.png?20241001135556",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiechGPRA-hrxspNfWeZikkoEivcPo8OQJX0dF8njnQkcUtgqNB1sb1N5dOrbPVtuAxc&usqp=CAU",
    "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111902_mbp14-silver2.png",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  // Calculate original price based on discount percentage
  const originalPrice = discount
    ? (price / (1 - discount / 100)).toFixed(0)
    : 1999;
  const discountPercentage = discount || 21;

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
    <div className="w- mx-auto pl-16 pr-16 flex gap-16">
      {/* Left Side: Image Section */}
      <div className="w-1/2 flex flex-col items-center">
        <img
          src={currentImage}
          alt="Product"
          className="w-[500px] h-[300px] object-contain"
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
      <div className="w-2/3 flex flex-col gap-6">
        <h1 className="text-xl font-medium">
          {name ||
            "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray"}
        </h1>
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
          <span className="text-2xl font-bold text-red-600">
            ${price || 1699}
          </span>
          <span className="text-gray-500 line-through">${originalPrice}</span>
          <span className="bg-yellow-500 text-white px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Quantity & Buttons */}
        <div className="flex items-center gap-4">
          <div className="flex items-center border p-2">
            <button className="px-3">-</button>
            <span className="px-4">1</span>
            <button className="px-3">+</button>
          </div>
          <Link to="/Carting">
            {" "}
            <button className="bg-red-600 text-white px-6 py-2 rounded flex items-center">
              🛒 ADD TO CART
            </button>
          </Link>
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
