import React from "react";
import {
  FaMobileAlt,
  FaHeadphones,
  FaLaptop,
  FaTabletAlt,
  FaCamera,
  FaTv,
} from "react-icons/fa";

const categories = [
  { id: 1, name: "Smartphones", icon: <FaMobileAlt /> },
  { id: 2, name: "Headphones", icon: <FaHeadphones /> },
  { id: 3, name: "Laptops", icon: <FaLaptop /> },
  { id: 4, name: "Tablets", icon: <FaTabletAlt /> },
  { id: 5, name: "Cameras", icon: <FaCamera /> },
  { id: 6, name: "Smart TVs", icon: <FaTv /> },
];

const Categories = () => {
  return (
    <div className="bg-gray-100 m-4 border rounded-lg shadow-md">
      <section className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Smart Gadgets Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="h-[140px] w-[140px] flex flex-col items-center justify-around p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:bg-gray-200"
            >
              <div className="text-4xl text-gray-700">{category.icon}</div>
              <p className="mt-2 text-center font-semibold text-lg text-black">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Categories;
