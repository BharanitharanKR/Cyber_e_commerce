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
  {
    id: 1,
    name: "Smartphones",
    icon: <FaMobileAlt className="text-black text-4xl" />,
  },
  {
    id: 2,
    name: "Headphones",
    icon: <FaHeadphones className="text-black text-4xl" />,
  },
  {
    id: 3,
    name: "Laptops",
    icon: <FaLaptop className="text-black text-4xl" />,
  },
  {
    id: 4,
    name: "Tablets",
    icon: <FaTabletAlt className="text-black text-4xl" />,
  },
  {
    id: 5,
    name: "Cameras",
    icon: <FaCamera className="text-black text-4xl" />,
  },
  {
    id: 6,
    name: "Smart TVs",
    icon: <FaTv className="text-black text-4xl" />, // ✅ Fixed F;aTv icon class
  },
];

const Categories = () => {
  return (
    <div className="bg-gray-200 m-4 border rounded-lg shadow-md ">
      <section className=" bg-gray-200  container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Smart Gadgets Categories
        </h2>

        <div className=" m-12 grid grid-cols-2 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="h-[140px] w-[140px] flex flex-col items-center justify-around p-4 rounded-lg shadow-md hover:shadow-lg transition bg-lightGray bg-opacity-50"
            >
              {category.icon}
              <p className="mt-2 mb-0 text-center font-semibold text-lg text-black">
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
