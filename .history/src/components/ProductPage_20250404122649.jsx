import React, { useState } from "react";
// Import any necessary components or utilities

const ProductPage = ({ product, name, price, rating, totalReviews, image, discount }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate the discounted price if applicable
  const finalPrice = discount ? price - (price * discount / 100) : price;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <div className="border rounded-lg overflow-hidden">
            <img src={image} alt={name} className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-500">
              {[...Array(Math.floor(rating))].map((_, i) => (
                <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
                </svg>
              ))}
              {rating % 1 !== 0 && (
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
                </svg>
              )}
            </div>
            <span className="text-gray-600 ml-2">{rating} ({totalReviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="mb-6">
            {discount ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-red-600">${finalPrice.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through ml-2">${price.toFixed(2)}</span>
                <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold">${price.toFixed(2)}</span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Quantity</label>
            <div className="flex items-center">
              <button 
                onClick={decreaseQuantity}
                className="bg-gray-200 text-gray-700 py-1 px-3 rounded-l"
              >
                -
              </button>
              <input 
                type="text" 
                className="w-16 text-center border-t border-b border-gray-300 py-1"
                value={quantity}
                readOnly
              />
              <button 
                onClick={increaseQuantity}
                className="bg-gray-200 text-gray-700 py-1 px-3 rounded-r"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg w-full mb-4 transition duration-300">
            Add to Cart
          </button>

          {/* Buy Now Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300">
            Buy Now
          </button>

          {/* Product Features/Highlights */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Category: {product.category}</li>
              <li>Free shipping available</li>
              <li>30-day money-back guarantee</li>
              <li>1-year manufacturer warranty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;