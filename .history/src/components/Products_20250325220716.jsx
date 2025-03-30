import Image from "next/image";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "TOZO T6 Wireless Earbuds",
    price: "$70",
    rating: 5,
    reviews: 738,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Product-fVcYzHpbrCAblH3c3Eei8jtukCuO0w.png",
  },
  {
    id: 2,
    name: "Sony WH-1000XM4 Headphones",
    price: "$299",
    rating: 5,
    reviews: 1200,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Apple AirPods Pro (2nd Gen)",
    price: "$249",
    rating: 5,
    reviews: 850,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "JBL Flip 6 Bluetooth Speaker",
    price: "$129",
    rating: 4,
    reviews: 400,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Samsung Galaxy Buds 2 Pro",
    price: "$150",
    rating: 4,
    reviews: 620,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Beats Studio3 Wireless",
    price: "$349",
    rating: 4,
    reviews: 500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Bose QuietComfort 45",
    price: "$329",
    rating: 5,
    reviews: 950,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Anker Soundcore Life Q35",
    price: "$99",
    rating: 4,
    reviews: 300,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Logitech G733 Lightspeed",
    price: "$129",
    rating: 5,
    reviews: 410,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "HyperX Cloud II Wireless",
    price: "$149",
    rating: 4,
    reviews: 320,
    image: "https://via.placeholder.com/150",
  },
];

const ProductCard = ({ product }) => (
  <div className="border border-gray-200 rounded-md overflow-hidden bg-white shadow-sm">
    <div className="relative">
      {/* HOT label */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-sm z-10">
        HOT
      </div>

      {/* Product image */}
      <div className="relative h-[180px] bg-[#f0f9f9]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>
    </div>

    {/* Rating */}
    <div className="p-3">
      <div className="flex items-center mb-1">
        {[...Array(product.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#d32f2f] text-[#d32f2f]" />
        ))}
        <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
      </div>

      {/* Product name */}
      <h3 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1">
        {product.name}
      </h3>

      {/* Price */}
      <div className="text-[#d32f2f] font-bold">{product.price}</div>
    </div>
  </div>
);

const Product = () => {
  return (
    <div className="grid grid-cols-4 gap-6 p-5">
      {products.concat(products, products.slice(0, 4)).map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Product;
