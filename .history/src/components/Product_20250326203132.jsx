import React from "react";
import oneplus from "../assets/oneplus.png"; // Import image

const Product = ({ rating = 4.5, totalReviews = 738 }) => {
  return (
    <di
  );
};

// ⭐ Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Full stars
  const halfStar = rating % 1 !== 0; // Half star condition

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
        </svg>
      ))}

      {halfStar && (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
        </svg>
      )}
    </div>
  );
};

export default Product;
