"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  reviewCount: number;
  isHot?: boolean;
  imageSrc: string;
  imageAlt: string;
  discount?: number;
  onAddToCart?: () => void;
}

function ProductCard({
  title,
  price,
  rating,
  reviewCount,
  isHot = false,
  imageSrc,
  imageAlt,
  discount,
  onAddToCart = () => {},
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate discounted price if discount is provided
  const originalPrice = Number.parseFloat(price);
  const discountedPrice = discount
    ? (originalPrice * (1 - discount / 100)).toFixed(2)
    : null;

  return (
    <div
      className="max-w-[280px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 relative border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHot && (
        <div className="absolute top-3 left-0 bg-red-600 text-white text-xs font-bold px-3 py-1 z-10 rounded-r-md shadow-sm">
          HOT
        </div>
      )}

      <div
        className={`relative h-[200px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden transition-all duration-300 ${
          isHovered ? "scale-[0.97]" : ""
        }`}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-contain p-4 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating)
                    ? "fill-amber-500 text-amber-500"
                    : i < rating
                    ? "fill-amber-500 text-amber-500 opacity-50"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-gray-500 text-xs">({reviewCount})</span>
        </div>

        <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-2 h-10">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-2">
                <p className="text-red-600 font-bold">${discountedPrice}</p>
                <p className="text-gray-500 text-xs line-through">${price}</p>
              </div>
            ) : (
              <p className="text-red-600 font-bold">${price}</p>
            )}
          </div>

          <button
            onClick={onAddToCart}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition-colors duration-200"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {discount && (
        <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
          {discount}% OFF
        </div>
      )}
    </div>
  );
}

export default function Product() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard
          title="TOZO T6 True Wireless Earbuds Bluetooth Headphones"
          price="70"
          rating={5}
          reviewCount={738}
          isHot={true}
          imageSrc="/placeholder.svg?height=200&width=200"
          imageAlt="TOZO T6 True Wireless Earbuds"
        />

        <ProductCard
          title="Wireless Noise Cancelling Headphones"
          price="120"
          rating={4.5}
          reviewCount={423}
          isHot={false}
          imageSrc="/placeholder.svg?height=200&width=200"
          imageAlt="Wireless Headphones"
          discount={15}
        />

        <ProductCard
          title="Bluetooth Speaker Waterproof Portable"
          price="89.99"
          rating={4.7}
          reviewCount={1024}
          isHot={true}
          imageSrc="/placeholder.svg?height=200&width=200"
          imageAlt="Bluetooth Speaker"
          discount={20}
        />

        <ProductCard
          title="Smart Watch with Heart Rate Monitor"
          price="149.99"
          rating={4.2}
          reviewCount={512}
          isHot={false}
          imageSrc="/placeholder.svg?height=200&width=200"
          imageAlt="Smart Watch"
        />
      </div>
    </main>
  );
}
