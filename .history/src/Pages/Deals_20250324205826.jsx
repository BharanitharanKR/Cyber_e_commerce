import {
  FaBox,
  FaTruck,
  FaExchangeAlt,
  FaHeadset,
  FaQuestionCircle,
} from "react-icons/fa";

const categories = [
  { name: "All Category", icon: <FaBox /> },
  { name: "Track Order", icon: <FaTruck /> },
  { name: "Compare", icon: <FaExchangeAlt /> },
  { name: "Customer Support", icon: <FaHeadset /> },
  { name: "Need Help", icon: <FaQuestionCircle /> },
  { name: "Electronics", icon: <FaBox /> },
  { name: "Fashion", icon: <FaBox /> },
  { name: "Home & Kitchen", icon: <FaBox /> },
  { name: "Toys", icon: <FaBox /> },
  { name: "Sports", icon: <FaBox /> },
];

const Deals = () => {
  return (
    <div className="bg-red-500 text-white w-full h-12 flex items-center">
      <div className="overflow-x-auto flex whitespace-nowrap space-x-6 px-4 scrollbar-hide snap-x">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 min-w-[120px] snap-center cursor-pointer hover:underline"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
