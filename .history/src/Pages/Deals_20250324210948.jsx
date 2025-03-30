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
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-lg px-4 py-2"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-black">Home</button>
          <button className="text-gray-600 hover:text-black">About</button>
          <button className="text-gray-600 hover:text-black">Contact</button>
          <button className="text-gray-600 hover:text-black">Blog</button>
          <button className="text-gray-600 hover:text-black">Cart</button>
        </div>
      </div>

      {/* ✅ Category Slider */}
      <div className="bg-gray-100 w-full h-12 flex items-center overflow-x-auto">
        <div className="flex space-x-6 px-4">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 min-w-[120px] cursor-pointer hover:underline"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
