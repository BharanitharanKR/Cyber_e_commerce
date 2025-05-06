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
    <div className="bg-gray-100 mx-2 sm:mx-3 md:m-4 border rounded-lg shadow-md">
      <section className="container mx-auto px-3 sm:px-4 md:px-6 py-6 md:py-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
          Smart Gadgets Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 justify-center">
          {categories.map((category) => (
            <div
              key={category.id}
              className="h-[90px] sm:h-[110px] md:h-[130px] lg:h-[140px] w-full sm:max-w-[130px] md:max-w-[140px] mx-auto flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:bg-gray-200"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl text-gray-700">
                {category.icon}
              </div>
              <p className="mt-2 text-center font-medium sm:font-semibold text-sm sm:text-base md:text-lg text-black">
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
