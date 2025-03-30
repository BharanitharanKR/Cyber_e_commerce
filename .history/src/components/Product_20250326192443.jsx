export default function ProductCard() {
  return (
    <div className="max-w-xs border rounded-lg shadow-sm p-3 bg-white">
      <Badge label="HOT" />
      <ProductImage src="/Product.png" alt="Product Image" />
      <Rating stars={5} reviews={738} />
      <ProductTitle title="TOZO T6 True Wireless Earbuds Bluetooth Headphone..." />
      <ProductPrice price="$70" />
    </div>
  );
}

// Badge Component
const Badge = ({ label }) => (
  <div className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-md inline-block">
    {label}
  </div>
);

// Product Image Component
const ProductImage = ({ src, alt }) => (
  <div className="mt-2 flex justify-center">
    <img src={src} alt={alt} className="rounded-md" />
  </div>
);

// Rating Component
const Rating = ({ stars, reviews }) => (
  <div className="flex items-center mt-3">
    <div className="text-red-500 flex space-x-1">
      {[...Array(stars)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.847 1.417 8.276L12 18.897l-7.416 3.906 1.417-8.276-6.001-5.847 8.332-1.209z" />
        </svg>
      ))}
    </div>
    <span className="text-gray-600 text-sm ml-1">({reviews})</span>
  </div>
);

// Product Title Component
const ProductTitle = ({ title }) => (
  <h3 className="mt-1 text-sm font-medium text-gray-800 line-clamp-2">
    {title}
  </h3>
);

// Product Price Component
const ProductPrice = ({ price }) => (
  <p className="text-red-600 font-bold mt-1">{price}</p>
);
